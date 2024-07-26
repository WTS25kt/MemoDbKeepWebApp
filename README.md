# MemoDbKeepWebApp
 mysqlで管理するメモ帳　コードハイライト表示機能あり

## アプリの実行方法
### MySQLサーバーの起動

MySQLサーバーを起動します。以下のコマンドを実行します。

```sh
sudo mysql.server start
```

### サーバーの起動

Node.jsサーバーを起動します。以下のコマンドを実行します。

```sh
node server.js
```

### アプリの使用

ブラウザを開き、`http://localhost:3000`にアクセスします。アプリが正常に動作していることを確認します。

#### 補足
- データベースを直接操作したい場合、以下のコマンドを実行します。
```sh
mysql -u root -p
```

- 閉じる場合
```sh
exit;
// または
quit;
```

- 終了する場合（Node.jsはCtrl+cを押すだけ）
```sh
sudo mysql.server stop
```