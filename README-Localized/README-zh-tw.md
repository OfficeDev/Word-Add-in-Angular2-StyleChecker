# <a name="word-style-checking-addin-built-on-angular-2"></a>內建在 Angular 2 上的文字樣式檢查增益集

了解如何建立使用 Word JavaScript API 的 `LocationRelation` 和 `compareLocationWith` API 執行搜索及取代的增益集，其根據相對於其他範圍的位置略過某些範圍。該增益集內建於 Angular 2 架構，也會顯示如何使用 [Office 增益集 UX 設計模式程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)的設計範例。 

## <a name="table-of-contents"></a>目錄
* [變更歷程記錄](#change-history)
* [必要條件](#prerequisites)
* [設定專案](#configure-the-project)
* [部署增益集](#deploy-the-add-in)
* [執行專案](#run-the-project)
* [啟動增益集](#start-the-add-in)
* [測試增益集](#test-the-add-in)
* [變更增益集的設定](#change-the-settings-of-the-add-in)
* [瞭解程式碼](#understand-the-code)
* [問題和建議](#questions-and-comments)
* [其他資源](#additional-resources)

## <a name="change-history"></a>變更歷程記錄

2016 年 8 月 1 日：

* 初始版本。

2016 年 9 月 15 日 - 10 月 17 日：

* 次要更新。

## <a name="prerequisites"></a>必要條件

* Word 2016 for Windows，組建 16.0.6727.1000 或更新版本。
* [節點和 npm](https://nodejs.org/en/) 專案設定為使用 npm 作為封裝管理員和工作執行器。它也設定為使用內建 npm 的精簡版伺服器作為 Web 伺服器，在開發期間裝載增益集，因此您可以快速地啟動並執行增益集。您也可以自由地使用其他工作執行器或 Web 伺服器。
* [就可以給艦隊](https://git-scm.com/downloads) (或其他 git 用戶端。)

## <a name="configure-the-project"></a>設定專案

在您要放置專案的資料夾中，以 git bash shell 執行下列命令︰

1. ```git clone {URL of this repo}``` 可複製此儲存機制到本機電腦。
2. ```npm install``` 可安裝 package.json 檔案中的所有分項相依性。
3. ```bash gen-cert.sh``` 可建立執行這個範例所需的憑證。 

將憑證設定為受信任的根授權。在 Windows 電腦上的步驟如下︰

1. 在您本機電腦上的儲存機制資料夾中，連按兩下 ca.crt，然後選取 [安裝憑證]。 
2. 選取 [本機電腦]，然後選取 [下一步] 以繼續。 
3. 選取 [將所有憑證放入以下的存放區]，然後選取 [瀏覽]。
4. 選取 [信任的根憑證授權]，然後選取 [確定]。 
5. 選取 [下一步]，然後選取 [完成]。 

## <a name="deploy-the-addin"></a>部署增益集

現在，您需要讓 Microsoft Word 知道哪裡可以找到此增益集。

1. 建立網路共用，或[在網路上共用資料夾](https://technet.microsoft.com/en-us/library/cc770880.aspx)。
2. 將一份 Word-Add-in-Angular2-StyleChecker.xml 資訊清單檔，從專案的根目錄放入共用資料夾中。
3. 啟動 Word 並開啟一個文件。
4. 選擇 [檔案] 索引標籤，然後選擇 [選項]。
5. 選擇 [信任中心]，然後選擇 [信任中心設定] 按鈕。
6. 選擇 [受信任的增益集目錄]。
7. 在 [目錄 URL] 欄位中，輸入包含 Word-Add-in-Angular2-StyleChecker.xml 的資料夾共用的網路路徑，然後選擇 [新增目錄]。
8. 選取 [顯示於功能表中] 核取方塊，然後選擇 [確定]。
9. 接著會顯示訊息，通知您下次啟動 Microsoft Office 時就會套用您的設定。關閉 Word。

## <a name="run-the-project"></a>執行專案

1. 開啟專案的資料夾中節點的命令視窗，並執行 ```npm start``` 以啟動 Web 服務。保留命令視窗開啟。
2. 開啟 Internet Explorer 或 Edge，並在網址方塊中輸入 ```https://localhost:3000```。如果您未收到與憑證相關的任何警告，請關閉瀏覽器，並繼續進行下面主題為**啟動增益集**的章節。如果您收到憑證不受信任的警告，請繼續執行下列步驟︰
3. 儘管有警告，瀏覽器還是可以給予您用以開啟頁面的連結。將其開啟。
4. 開啟網頁後，在網址列中會有紅色的憑證錯誤訊息。按兩下錯誤。
5. 選取 [檢視憑證]。
5. 選取 [安裝憑證]。
4. 選取 [本機電腦]，然後選取 [下一步] 以繼續。 
3. 選取 [將所有憑證放入以下的存放區]，然後選取 [瀏覽]。
4. 選取 [信任的根憑證授權]，然後選取 [確定]。 
5. 選取 [下一步]，然後選取 [完成]。
6. 關閉瀏覽器。

## <a name="start-the-addin"></a>啟動增益集

1. 重新啟動 Word，並開啟 Word 文件。
2. 在 Word 2016 的 [插入] 索引標籤上，選擇 [我的增益集]。
3. 選取 [共用資料夾] 索引標籤。
4. 選擇 [樣式檢查]，然後選取 [確定]。
5. 如果您的 Word 版本支援增益集命令，UI 會通知您已載入增益集。
6. 在 [首頁] 功能區中的是稱為**樣式檢查**的新群組，具有標示為 [顯示] 的按鈕和藍色鉛筆圖示。按一下該按鈕，增益集將會開啟指示網頁。

 > 附註：如果您的 Word 版本不支援增益集命令，增益集會載入工作窗格。

## <a name="test-the-addin"></a>測試增益集

1. 當您完成指示時，請按一下 [開始使用]。
2. [尋找和取代] 頁面開啟時，頂端會出現命令列 (包含功能表按鈕)。按一下該按鈕以開啟功能表。
3. 選取 [插入範例內容]。再按一下按鈕以關閉功能表。文件現在有與 Office 增益集有關 (包括虛構的引號) 的未格式化文字。寫入器已使用「OAI」縮寫「Office 增益集 」，匿名的引號也使用相同的縮寫方式。
4. 在 [尋找] 方塊中輸入「OAI」。 
5. 在 [取代] 方塊中輸入「 Office 增益集」。
6. 變更***不***應該在直接引文的段落中進行變更，因此請在 [略過段落] 方塊中輸入數字 **2**。段落以零為起始數字。
7. 選取 [取代]。除了略過段落中的一個執行個體之外，每個「OAI」執行個體皆已變更。
8. 試驗其他搜尋
9. 及取代的字串。

 > 附註：此增益集的範例版本僅接受 [略過段落] 方塊中的一個數字。 

## <a name="change-the-settings-of-the-addin"></a>變更增益集的設定

1. 再次開啟命令列上的功能表按鈕，然後選取 [設定]。 
2. 在 [設定] 頁面上，您會看到在預設情況下，每次執行增益集時就會開啟指示頁。您可以使用選項按鈕來指定只會在第一次執行增益集時出現指示頁。 
3. 關閉工作窗格，再次選取 [顯示] 按鈕，然後重新啟動增益集。增益集將會以**尋找和取代**頁面開啟而不是指示頁。 
4. 再次瀏覽到**設定**頁面。您可以選取 [顯示指示] 按鈕以開啟指示頁，或將指示設定變更回每次執行增益集時就開啟指令頁。

## <a name="understand-the-code"></a>瞭解程式碼

使用 Office 和 Word JavaScript ApI 的所有程式碼皆位於檔案 word.document.service.ts 中。此範例示範的 `compareLocationWith()` 方法位於 `replaceFoundStringsWithExceptions()` 方法中。 

程式碼第一次取得的所有範圍集合與使用者的搜尋字詞相符。然後程式碼接著取得文件中所有段落範圍的集合。 

```js
let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, 
    { matchCase: false, matchWholeWord: true })
    .load();
let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
```

集合都已使用 `context.sync()` 呼叫載入後，程式碼便會建立段落範圍的陣列，使用者就可以從取代排除。(請注意，`excludedParagraphs` 為傳遞至方法的參數。)

```js
let excludedRanges: Array<Word.Range> = [];
excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
```

程式碼接著透過反覆迴圈以判斷搜尋結果是否落在排除的段落。針對每個搜尋結果，此事實記錄在 `IReplacementCandidate` 物件。如果搜尋結果在排除的段落內，`compareLocationWith()` 方法會傳回「內部」。如果搜尋結果本身是一個段落，而且已經被排除，則會傳回「等於」。 

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

取代的候選物件會使用呼叫載入到 `context.sync()`，然後程式碼接著會逐一查看，將搜尋字串取代成取代字串，取代情況只在發生在非排除段落的段落中。

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

請參閱相同檔案的 `replaceDocumentContent` 方法，查看如何使用 Word `insertText` 和 `insertParagraph` 方法將範例內容插入文件。

若要查看已將 [Office 增益集 UX 設計模式程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)的設計模式整合到 Angular 2 架構的方式，請參閱程式碼檔案的其餘部分。

## <a name="questions-and-comments"></a>問題和建議

我們很樂於收到您對於此範例的意見反應。您可以在此儲存機制的 [問題]** 區段中，將您的意見反應傳送給我們。

請在 [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) 提出有關 Microsoft Office 365 開發的一般問題。如果您的問題是關於 Office JavaScript API，請確定您的問題標記有 [office js] 與 [API]。

## <a name="additional-resources"></a>其他資源

*   [Office 增益集文件](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Office 開發人員中心](http://dev.office.com/)
* 在 [Github 上的 OfficeDev](https://github.com/officedev) 中有更多 Office 增益集範例

## <a name="copyright"></a>著作權
Copyright (c) 2016 Microsoft Corporation 著作權所有，並保留一切權利。

