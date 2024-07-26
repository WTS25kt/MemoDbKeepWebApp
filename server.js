const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');  // dotenvパッケージを追加

dotenv.config();  // .envファイルの内容を読み込む

const app = express();
app.use(bodyParser.json());

// 静的ファイルを提供するためのミドルウェアを追加
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected');
});

// ルートURLに対するルーティングを追加
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// データを保存するエンドポイント
app.post('/save', (req, res) => {
    const { text1, text2 } = req.body;
    const query = 'INSERT INTO texts (text1, text2) VALUES (?, ?)';
    db.query(query, [text1, text2], (err, result) => {
        if (err) {
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved');
        }
    });
});

// データを取得するエンドポイント
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM texts';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});