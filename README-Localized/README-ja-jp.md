# <a name="word-style-checking-addin-built-on-angular-2"></a>Angular 2 でビルドされた Word スタイル チェック アドイン

他の範囲と相対的なその場所に基づいて、いくつかの範囲をスキップする検索と置換を実行するために、Word JavaScript API の `LocationRelation` および `compareLocationWith` API を使用するアドインを作成する方法を説明します。このアドインは Angular 2 フレームワークでビルドされ、[Office アドイン UX 設計パターン コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) からの設計サンプルを使用する方法も表示します。 

## <a name="table-of-contents"></a>目次
* [変更履歴](#change-history)
* [前提条件](#prerequisites)
* [プロジェクトを構成する](#configure-the-project)
* [アドインを展開する](#deploy-the-add-in)
* [プロジェクトを実行する](#run-the-project)
* [アドインを起動する](#start-the-add-in)
* [アドインをテストする](#test-the-add-in)
* [アドインの設定を変更する](#change-the-settings-of-the-add-in)
* [コードを理解する](#understand-the-code)
* [質問とコメント](#questions-and-comments)
* [その他のリソース](#additional-resources)

## <a name="change-history"></a>変更履歴

2016 年 8 月 1 日:

* 初期バージョン。

2016 年 9 月 15 日 - 10 月 17 日:

* マイナー アップデート。

## <a name="prerequisites"></a>前提条件

* Windows 用の Word 2016 (16.0.6727.1000 以降のビルド)。
* [ノードと npm](https://nodejs.org/en/) プロジェクトはパッケージ マネージャーとタスク ランナーの両方として npm を使用するように構成されます。また、開発中にアドインをホストする Web サーバーとして npm にビルドされている Lite サーバーを使用するようにも構成されるため、アドインをすばやくオンにして実行することができます。別のタスク ランナーまたは Web サーバーを使用することもできます。
* [Git バッシュ](https://git-scm.com/downloads) (またはその他の Git クライアント。)

## <a name="configure-the-project"></a>プロジェクトを構成する

プロジェクトを配置するフォルダーで、Git バッシュ シェルで次のコマンドを実行します。

1. ローカル コンピューターにこのリポジトリのクローンを作成する ```git clone {URL of this repo}```
2. package.json ファイル内のアイテム化されたすべての依存関係をインストールする ```npm install```。
3. このサンプルを実行するために必要な証明書を作成する ```bash gen-cert.sh```。 

証明書を信頼されたルート機関にするように設定します。Windows コンピューターでの手順は次のとおりです。

1. ローカル コンピューターにあるリポジトリ フォルダーで、ca.crt をダブルクリックし、**[証明書のインストール]** を選択します。 
2. **[ローカル コンピューター]** を選択して、**[次へ]** を選択して続行します。 
3. **[証明書をすべて次のストアに配置する]** を選択してから **[参照]** を選択します。
4. **[信頼されたルート証明機関]** を選択して、**[OK]** を選択します。 
5. **[次へ]**、**[完了]** の順に選択します。 

## <a name="deploy-the-addin"></a>アドインを展開する

次に、Microsoft Word がアドインを検索する場所を認識できるようにする必要があります。

1. ネットワーク共有を作成するか、[フォルダーをネットワークに共有します](https://technet.microsoft.com/en-us/library/cc770880.aspx)。
2. プロジェクトのルートから、Word-Add-in-Angular2-StyleChecker.xml マニフェスト ファイルのコピーを共有フォルダーに配置します。
3. Word を起動し、ドキュメントを開きます。
4. [**ファイル**] タブを選択し、[**オプション**] を選択します。
5. [**セキュリティ センター**] を選択し、[**セキュリティ センターの設定**] ボタンを選択します。
6. **[信頼されているアドイン カタログ]** を選択します。
7. **[カタログの URL]** フィールドに、Word-Add-in-Angular2-StyleChecker.xml があるフォルダー共有へのネットワーク パスを入力して、**[カタログの追加]** を選択します。
8. **[メニューに表示する]** チェック ボックスをオンにし、**[OK]** を選びます。
9. これらの設定は Microsoft Office を次回起動したときに適用されることを示すメッセージが表示されます。Word を終了します。

## <a name="run-the-project"></a>プロジェクトを実行する

1. プロジェクトのフォルダー内でノード コマンド ウィンドウを開き、```npm start``` を実行して Web サービスを開始します。コマンド ウィンドウを開いたままにしておきます。
2. Internet Explorer または Edge を開いて、```https://localhost:3000``` をアドレス ボックスに入力します。証明書に関する警告が表示されない場合は、ブラウザーを閉じて、「**アドインを起動する**」というタイトルのセクションに進みます。証明書が信頼されていないという警告が表示された場合は、以下の手順に進みます。
3. 警告があっても、ブラウザーにはページを開くためのリンクが表示されます。そのリンクを開きます。
4. ページが開いたら、アドレス バーに赤い証明書エラーが表示されます。エラーをダブルクリックします。
5. **[証明書の表示]** を選択します。
5. **[証明書のインストール]** を選択します。
4. **[ローカル コンピューター]** を選択して、**[次へ]** を選択して続行します。 
3. **[証明書をすべて次のストアに配置する]** を選択してから **[参照]** を選択します。
4. **[信頼されたルート証明機関]** を選択して、**[OK]** を選択します。 
5. **[次へ]**、**[完了]** の順に選択します。
6. ブラウザーを閉じます。

## <a name="start-the-addin"></a>アドインを起動する

1. Word を再起動して、Word 文書を開きます。
2. Word 2016 の**[挿入]** タブで、**[マイ アドイン]** を選択します。
3. **[共有フォルダー]** タブを選択します。
4. **[スタイル チェック]**、**[OK]** の順に選択します。
5. ご使用の Word バージョンでアドイン コマンドがサポートされている場合、UI によってアドインが読み込まれたことが通知されます。
6. [ホーム] では、リボンは **スタイル チェック** と呼ばれる新しいグループであり、**[表示]** というラベル付きのボタンと青色の鉛筆アイコンがあります。そのボタンをクリックすると、アドインが手順ページに開きます。

 > 注記:アドイン コマンドが Word バージョンによってサポートされていない場合は、アドインが作業ウィンドウに読み込まれます。

## <a name="test-the-addin"></a>アドインをテストする

1. 手順が完了したら、**[はじめに]** をクリックします。
2. **[検索および置換]** ページが開くと、メニュー ボタンとともに上部にコマンド バーがあります。そのボタンをクリックして、メニューを開きます。
3. **[サンプルのコンテンツを挿入する]** を選択します。もう 1 度ボタンをクリックして、メニューを閉じます。ドキュメントには、架空の引用を含む、Office アドインに関する書式なしのテキストが存在します。ライターは、"Office Add-in" の省略形に "OAI" を使用しており、匿名の引用についても同様です。
4. **[検索]** ボックスに「OAI」と入力します。 
5. **[置換]** ボックスに「Office アドイン」と入力します。
6. 直接引用である段落で変更はされ ***ない*** ため、**[段落をスキップ]** ボックスに数字「**2**」を入力します。これは、0 から始まる段落番号です。
7. **[置換]** を選択します。スキップした段落のインスタンス以外の、すべてのインスタンスの "OAI" は変更されます。
8. 他の検索を試し、
9. 文字列を置換します。

 > 注記:アドインのこのサンプル バージョンは、**[段落をスキップ]** ボックスの 1 つの数のみを受け入れます。 

## <a name="change-the-settings-of-the-addin"></a>アドインの設定を変更する

1. もう 1 度コマンド バーのメニュー ボタンを開き、**[設定]** を選択します。 
2. **設定**ページで、既定では、アドインが実行されるたびに手順ページが開きます。オプション ボタンを使用して、アドインが初めて実行される場合のみ手順ページが表示されるように指定します。 
3. 作業ウィンドウを閉じて、もう一度 **[表示]** ボタンを選択し、アドインを再起動します。手順ページの代わりに、**検索と置換**ページでアドインが開きます。 
4. もう一度**設定**ページに移動します。**[手順を表示]** ボタンを選択して、手順ページを開くことができます。または、アドインが実行されるたびに手順ページが開くように、手順設定を戻すことができます。

## <a name="understand-the-code"></a>コードを理解する

Office および Word の JavaScript API を使用するすべてのコードは、word.document.service.ts ファイルにあります。このサンプルが示す `compareLocationWith()` メソッドは、`replaceFoundStringsWithExceptions()` メソッドにあります。 

コードは、まず、ユーザーの検索用語に一致するすべての範囲のコレクションを取得します。次に、ドキュメント内のすべての段落範囲のコレクションを取得します。 

```js
let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, 
    { matchCase: false, matchWholeWord: true })
    .load();
let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
```

`context.sync()` の呼び出しでコレクションが読み込まれた後、コードは、ユーザーが置換から除外する段落範囲の配列を作成します。(`excludedParagraphs` は、メソッドに渡されたパラメーターであることに注意してください。)

```js
let excludedRanges: Array<Word.Range> = [];
excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
```

コードは、検索結果が除外された段落内にあるかないかを決定するために、iterable をループ処理します。それぞれの検索結果に対して、このファクトは `IReplacementCandidate` オブジェクトに記録されます。`compareLocationWith()` メソッドは、検索結果が除外されている段落内にある場合に、"Inside" を返します。検索結果自体が段落であり、除外されている場合は、"Equal" を返します。 

```js
for (let i = 0; i < foundItems.items.length; i++) {
    for (let j = 0; j < excludedRanges.length; j++) {
        replacementCandidates.push({
            range: foundItems.items[i],
            locationRelation: foundItems.items[i].compareLocationWith(excludedRanges[j])
        });
    }
}
```

置換候補のオブジェクトは、`context.sync()` への呼び出しで読み込まれ、コードはオブジェクト内を反復処理します。除外された段落にはない段落でのみ、検索文字列を置換文字列に置換します。

```js
replacementCandidates.forEach(function (item) {
    switch (item.locationRelation.value) {
        case "Inside":
        case "Equal":
            break;
        default:
            item.range.insertText(replaceString, 'Replace');
    }
});
```

ドキュメントにサンプル コンテンツを挿入するための、Word の `insertText` メソッドおよび `insertParagraph` メソッドの使用方法を知るために、同じファイルの `replaceDocumentContent` メソッドを参照します。

[Office アドイン UX 設計パターン コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) からの設計パターンが Angular 2 フレームワークに統合される方法を知るために、残りのコード ファイルを参照します。

## <a name="questions-and-comments"></a>質問とコメント

このサンプルに関するフィードバックをお寄せください。このリポジトリの「*問題*」セクションでフィードバックを送信できます。

Microsoft Office 365 開発全般の質問につきましては、「[スタック オーバーフロー](http://stackoverflow.com/questions/tagged/office-js+API)」に投稿してください。Office JavaScript API に関する質問の場合は、必ず質問に [office-js] と [API] のタグを付けてください。

## <a name="additional-resources"></a>追加リソース

* [Office アドインのドキュメント](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Office デベロッパー センター](http://dev.office.com/)
* [Github の OfficeDev](https://github.com/officedev) にあるその他の Office アドイン サンプル

## <a name="copyright"></a>著作権
Copyright (c) 2016 Microsoft Corporation.All rights reserved.

