# <a name="word-style-checking-addin-built-on-angular-2"></a>在 Angular 2 基础之上构建的 Word 样式检查外接程序

了解如何创建外接程序以使用 Word JavaScript API 的 `LocationRelation` 和 `compareLocationWith` API 执行搜索和替换，从而根据与其他区域的相对位置跳过某些区域。此外接程序是在 Angular 2 框架的基础之上构建而成。它还展示了如何使用 [Office 外接程序的用户体验设计模式代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)中的设计示例。 

## <a name="table-of-contents"></a>目录
* [修订记录](#change-history)
* [先决条件](#prerequisites)
* [配置项目](#configure-the-project)
* [部署外接程序](#deploy-the-add-in)
* [运行项目](#run-the-project)
* [启动外接程序](#start-the-add-in)
* [测试外接程序](#test-the-add-in)
* [更改外接程序的设置](#change-the-settings-of-the-add-in)
* [了解代码](#understand-the-code)
* [问题和意见](#questions-and-comments)
* [其他资源](#additional-resources)

## <a name="change-history"></a>修订记录

2016 年 8 月 1 日：

* 首版。

2016 年 9 月 15 日 - 10 月 17 日：

* 次要更新。

## <a name="prerequisites"></a>先决条件

* Word 2016 for Windows（内部版本 16.0.6727.1000 或更高版本）。
* [节点和 npm](https://nodejs.org/en/) 将项目配置为使用 npm 作为程序包管理器和任务运行程序。还可以配置为将 npm 内置的 Lite Server 用作在开发期间托管此外接程序的 Web 服务器，以便快速启动并运行此外接程序。你完全可以使用其他任务运行程序或 Web 服务器。
* [Git Bash](https://git-scm.com/downloads)（或其他 git 客户端）。

## <a name="configure-the-project"></a>配置项目

在要放置项目的文件夹中，于 git bash shell 中运行以下命令：

1. ```git clone {URL of this repo}```（将此存储库克隆到本地计算机。）
2. ```npm install```（安装 package.json 文件中列出明细的所有依赖项。）
3. ```bash gen-cert.sh```（创建要运行此示例所需的证书。） 

将此证书设置为受信任的根证书颁发机构。Windows 计算机上的设置步骤：

1. 在本地计算机的存储库文件夹中，双击 ca.crt，然后选择“**安装证书**”。 
2. 选择“**本地计算机**”，然后选择“**下一步**”以继续。 
3. 选择“**将所有证书放入下列存储**”，然后选择“**浏览**”。
4. 选择“**受信任的根证书颁发机构**”，然后选择“**确定**”。 
5. 依次选择“**下一步**”、“**完成**”。 

## <a name="deploy-the-addin"></a>部署外接程序

现在需要让 Microsoft Word 知道在哪里可以找到外接程序。

1. 创建网络共享，或[将文件夹共享到网络](https://technet.microsoft.com/en-us/library/cc770880.aspx)。
2. 将 Word-Add-in-Angular2-StyleChecker.xml 清单文件从项目的根目录复制到共享文件夹。
3. 启动 Word，然后打开一个文档。
4. 选择**文件**选项卡，然后选择**选项**。
5. 选择**信任中心**，然后选择**信任中心设置**按钮。
6. 选择“**受信任的外接程序目录**”。
7. 在“**目录 URL**”字段中，输入包含 Word-Add-in-Angular2-StyleChecker.xml 的文件夹共享的网络路径，然后选择“**添加目录**”。
8. 选中“**显示在菜单中**”复选框，然后选择“**确定**”。
9. 随后会出现一条消息，告知你下次启动 Microsoft Office 时将应用你的设置。关闭 Word。

## <a name="run-the-project"></a>运行项目

1. 打开项目文件夹中的节点命令窗口，然后运行 ```npm start``` 来启动 Web 服务。使命令窗口保持打开状态。
2. 打开 Internet Explorer 或 Edge，然后在地址框中输入 ```https://localhost:3000```。如果未收到有关证书的任何警告，则关闭浏览器，然后继续执行下面的“**启动外接程序**”部分。如果看到提示证书不受信任的警告，请继续按以下步骤操作：
3. 除警告外，浏览器还会提供一个可以打开该页面的链接。打开该页面。
4. 打开页面后，地址栏中会有一条显示为红色的证书错误消息。双击此错误。
5. 选择“**查看证书**”。
5. 选择“**安装证书**”。
4. 选择“**本地计算机**”，然后选择“**下一步**”以继续。 
3. 选择“**将所有证书放入下列存储**”，然后选择“**浏览**”。
4. 选择“**受信任的根证书颁发机构**”，然后选择“**确定**”。 
5. 依次选择“**下一步**”、“**完成**”。
6. 关闭浏览器。

## <a name="start-the-addin"></a>启动外接程序

1. 重新启动 Word 并打开一个 Word 文档。
2. 在 Word 2016 中的“**插入**”选项卡上，选择“**我的外接程序**”。
3. 选择“**共享文件夹**”选项卡。
4. 依次选择“**样式检查**和“**确定**”。
5. 如果你的 Word 版本支持外接程序命令，那么 UI 会通知你此外接程序已加载。
6. “主页”功能区上有一个名为“**样式检查**”的新组，其中显示标记为“**显示**”的按钮和一个蓝色铅笔图标。单击此按钮，然后此外接程序便会显示说明页。

 > 注意：如果你的 Word 版本不支持外接程序命令，则外接程序将在任务窗格中加载。

## <a name="test-the-addin"></a>测试外接程序

1. 阅读完说明后，单击“**入门**”。
2. 当“**查找和替换**”页打开后，顶部会显示带有一个菜单按钮的命令栏。单击此按钮，打开菜单。
3. 选择“**插入示例内容**”。再次单击此按钮，关闭菜单。此时，文档中包含有关 Office 外接程序的无格式文本，包括虚构的引用。编写器已将“Office 外接程序”缩写为“OAI”，匿名引用中也采用了这样的缩写。
4. 在“**查找**”框中，输入“OAI”。 
5. 在“**替换**”框中，输入“Office 外接程序”。
6. ***不***得在直接引用的段落中进行此更改。因此，在“**跳过段落**”框中输入数字 **2**。这是从零开始编号的段落编号。
7. 选择“**替换**”。此时，系统会更改跳过的段落以外的所有“OAI”实例。
8. 尝试搜索并替换
9. 其他字符串。

 > 注意：此示例版本的外接程序仅接受在“**跳过段落**”框中输入一个数字。 

## <a name="change-the-settings-of-the-addin"></a>更改外接程序的设置

1. 再次打开命令栏上的菜单按钮，然后选择“**设置**”。 
2. “**设置**页上的默认设置为，每次运行此外接程序时说明页都会打开。使用单选按钮指定仅在首次运行此外接程序时显示说明页。 
3. 关闭任务窗格，然后选择“**显示**”按钮重新启动此外接程序。此外接程序会打开显示“**查找和替换**”页，而不是说明页。 
4. 再次转到“**设置**”页。你可以选择“**显示说明**”按钮打开说明页，也可以将说明设置恢复为在每次运行此外接程序时打开说明页。

## <a name="understand-the-code"></a>了解代码

所有使用 Office 和 Word JavaScript API 的代码均位于 word.document.service.ts 文件中。此示例演示的 `compareLocationWith()` 方法位于 `replaceFoundStringsWithExceptions()` 方法中。 

代码首先会获取与用户搜索词匹配的所有区域的集合。然后，代码会获取文档中所有段落区域的集合。 

```js
let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, 
    { matchCase: false, matchWholeWord: true })
    .load();
let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
```

通过调用 `context.sync()` 加载集合后，代码会创建用户在替换时排除的段落区域的数组。（请注意，`excludedParagraphs` 是传递给该方法的参数。）

```js
let excludedRanges: Array<Word.Range> = [];
excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
```

然后，代码循环访问，以确定哪些搜索结果在已排除的段落中，哪些搜索结果不在。对于每个搜索结果，系统都会将此事实记录在 `IReplacementCandidate` 对象中。如果搜索结果在已排除的段落中，那么 `compareLocationWith()` 方法返回“Inside”。如果搜索结果本身就是段落且已遭排除，那么此方法返回“Equal”。 

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

调用 `context.sync()` 加载替换候选对象后，代码循环访问这些对象，仅将不在已排除的段落中的搜索字符串替换为替换字符串。

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

请参阅同一文件中的 `replaceDocumentContent` 方法，了解如何使用 Word `insertText` 和 `insertParagraph` 方法将示例内容插入文档。

请参阅代码文件的其余部分，了解 [Office 外接程序的用户体验设计模式代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)中的设计模式是如何集成到 Angular 2 框架中的。

## <a name="questions-and-comments"></a>问题和意见

我们乐意倾听你对此示例的反馈。你可以在此存储库中的“*问题*”部分向我们发送反馈。

与 Microsoft Office 365 开发相关的一般问题应发布到 [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API)。如果你的问题是关于 Office JavaScript API，请务必为问题添加 [office-js] 和 [API].标记。

## <a name="additional-resources"></a>其他资源

* [Office 外接程序文档](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Office 开发人员中心](http://dev.office.com/)
* 有关更多 Office 外接程序示例，请访问 [Github 上的 OfficeDev](https://github.com/officedev)。

## <a name="copyright"></a>版权
版权所有 © 2016 Microsoft Corporation。保留所有权利。

