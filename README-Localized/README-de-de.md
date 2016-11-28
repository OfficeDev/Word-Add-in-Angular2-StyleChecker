# <a name="word-style-checking-addin-built-on-angular-2"></a>Add-In zum Überprüfen der Word-Formatvorlage auf der Basis von Angular 2

Erfahren Sie, wie Sie ein Add-In erstellen, das mithilfe der APIs `LocationRelation` und `compareLocationWith` der JavaScript-APIs für Word einen Suchen-und-Ersetzen-Vorgang ausführt, bei dem einige Bereiche anhand ihrer Position relativ zu anderen Bereichen übersprungen werden. Das Add-In basiert auf dem Framework Angular 2 und veranschaulicht die Verwendung der Entwurfsbeispiele aus [Office Add-in UX Design Patterns Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code). 

## <a name="table-of-contents"></a>Inhalt
* [Änderungsverlauf](#change-history)
* [Voraussetzungen](#prerequisites)
* [Konfigurieren des Projekts](#configure-the-project)
* [Bereitstellen des Add-Ins](#deploy-the-add-in)
* [Ausführen des Projekts](#run-the-project)
* [Starten des Add-Ins](#start-the-add-in)
* [Testen des Add-Ins](#test-the-add-in)
* [Ändern der Einstellungen des-Add-Ins](#change-the-settings-of-the-add-in)
* [Grundlegendes zum Code](#understand-the-code)
* [Fragen und Kommentare](#questions-and-comments)
* [Zusätzliche Ressourcen](#additional-resources)

## <a name="change-history"></a>Änderungsverlauf

1. August 2016:

* Ursprüngliche Version

15. September - 17. Oktober 2016:

* Kleine Aktualisierungen

## <a name="prerequisites"></a>Voraussetzungen

* Word 2016 für Windows, Build 16.0.6727.1000 oder höher
* [Node und npm](https://nodejs.org/en/) Das Projekt ist so konfiguriert, dass npm als Paket-Manager und für die Taskausführung verwendet wird. Zudem wird der auf npm basierende Lite Server als der Webserver verwendet, der das Add-In bei der Entwicklung hostet, sodass das Add-In schnell betriebsbereit ist. Sie können jedoch auch eine andere Taskausführung oder einen anderen Webserver verwenden.
* [Git Bash](https://git-scm.com/downloads) (Oder ein anderer Git-Client.)

## <a name="configure-the-project"></a>Konfigurieren des Projekts

Führen Sie in dem Ordner, in dem das Projekt erstellt werden soll, die folgenden Befehle in der Git Bash-Shell aus:

1. ```git clone {URL of this repo}``` zum Klonen dieses Repositorys auf ihrem lokalen Computer.
2. ```npm install``` zum Installieren aller Abhängigkeiten in der Datei „package.json“.
3. ```bash gen-cert.sh``` zum Erstellen des für die Ausführung dieses Beispiels erforderlichen Zertifikats. 

Legen Sie das Zertifikat als vertrauenswürdige Stammzertifizierungsstelle fest. Dies sind die Schritte auf einem Windows-Computer:

1. Doppelklicken Sie im Repository-Ordner auf dem lokalen Computer auf „ca.crt“, und wählen Sie **Zertifikat installieren** aus. 
2. Wählen Sie **Lokaler Computer** aus, und wählen Sie **Weiter**, um den Vorgang fortzusetzen. 
3. Wählen Sie die Option **Alle Zertifikate in folgendem Speicher speichern**, und wählen Sie dann **Durchsuchen**.
4. Wählen Sie **Vertrauenswürdige Stammzertifizierungsstellen** und dann **OK**. 
5. Wählen Sie **Weiter** und dann **Fertig stellen**. 

## <a name="deploy-the-addin"></a>Bereitstellen des Add-Ins

Jetzt müssen Sie Microsoft Word mitteilen, wo es das Add-In finden kann.

1. Erstellen Sie eine Netzwerkfreigabe, oder [Geben Sie einen Ordner im Netzwerk frei](https://technet.microsoft.com/en-us/library/cc770880.aspx).
2. Kopieren Sie die Manifestdatei „Word-Add-in-Angular2-StyleChecker.xml“ aus dem Stammordner des Projekts in den freigegebenen Ordner.
3. Starten Sie Word, und öffnen Sie ein Dokument.
4. Klicken Sie auf die Registerkarte **Datei**, und klicken Sie dann auf **Optionen**.
5. Wählen Sie **Sicherheitscenter** aus, und klicken Sie dann auf die Schaltfläche **Einstellungen für das Sicherheitscenter**.
6. Wählen Sie **Vertrauenswürdige Add-In-Kataloge** aus.
7. Geben Sie in das Feld **Katalog-URL** den Netzwerkpfad zur Ordnerfreigabe ein, die die Datei „Word-Add-in-Angular2-StyleChecker.xml“ enthält, und wählen Sie dann **Katalog hinzufügen**.
8. Aktivieren Sie das Kontrollkästchen **Im Menü anzeigen**, und klicken Sie dann auf **OK**.
9. Eine Meldung wird angezeigt, dass Ihre Einstellungen angewendet werden, wenn Microsoft Office das nächste Mal gestartet wird. Schließen Sie Word.

## <a name="run-the-project"></a>Ausführen des Projekts

1. Öffnen Sie ein node-Befehlsfenster im Ordner des Projekts, und führen Sie ```npm start``` aus, um den Webdienst zu starten. Lassen Sie das Befehlsfenster geöffnet.
2. Öffnen Sie Internet Explorer oder Edge, und geben Sie in das Adressfeld ```https://localhost:3000``` ein. Wenn Sie keine Warnungen über das Zertifikat erhalten, schließen Sie den Browser, und fahren Sie weiter unten mit dem Abschnitt **Starten des Add-Ins** fort. Wenn Sie eine Warnung erhalten, dass das Zertifikat nicht vertrauenswürdig ist, fahren Sie mit den folgenden Schritten fort:
3. Der Browser bietet einen Link, um die Seite trotz der angezeigten Warnung zu öffnen. Öffnen Sie sie.
4. Nach dem Öffnen der Seite wird ein roter Zertifikatfehler in der Adressleiste angezeigt. Doppelklicken Sie auf den Fehler.
5. Wählen Sie **Zertifikat anzeigen**.
5. Wählen Sie **Zertifikat installieren**.
4. Wählen Sie **Lokaler Computer** aus, und wählen Sie **Weiter**, um den Vorgang fortzusetzen. 
3. Wählen Sie die Option **Alle Zertifikate in folgendem Speicher speichern**, und wählen Sie dann **Durchsuchen**.
4. Wählen Sie **Vertrauenswürdige Stammzertifizierungsstellen** und dann **OK**. 
5. Wählen Sie **Weiter** und dann **Fertig stellen**.
6. Schließen Sie den Browser.

## <a name="start-the-addin"></a>Starten des Add-Ins

1. Starten Sie Word neu, und öffnen Sie ein Word-Dokument.
2. Klicken Sie auf der Registerkarte **Einfügen** in Word 2016 auf **Meine-Add-Ins**.
3. Klicken Sie auf die Registerkarte **FREIGEGEBENER ORDNER**.
4. Wählen Sie **Style Checker** aus, und wählen Sie dann **OK**.
5. Wenn Add-In-Befehle von Ihrer Word-Version unterstützt werden, werden Sie in der Benutzeroberfläche darüber informiert, dass das Add-In geladen wurde.
6. Das Startmenüband enthält eine neue Gruppe namens **Style Checker** mit einer Schaltfläche mit der Bezeichnung **Anzeigen** und einem blauen Stiftsymbol. Klicken Sie auf diese Schaltfläche, und das Add-In wird mit einer Seite mit Anweisungen geöffnet.

 > Hinweis: Das Add-In wird in einem Aufgabenbereich geladen, wenn Add-In-Befehle von Ihrer Version von Word nicht unterstützt werden.

## <a name="test-the-addin"></a>Testen des Add-Ins

1. Wenn Sie mit den Anweisungen fertig sind, klicken Sie auf **Get Started**.
2. Wenn die Seite **Find and Replace** geöffnet wird, sehen Sie oben eine Befehlsleiste mit einer Menüschaltfläche. Klicken Sie auf die Schaltfläche, um das Menü zu öffnen.
3. Wählen Sie **Insert sample content**. Klicken Sie erneut auf die Schaltfläche, um das Menü zu schließen. Das Dokument enthält jetzt unformatierten Text über Office-Add-Ins, unter anderem ein fiktives Zitat. Der Verfasser hat "OAI" verwendet, um "Office-Add-In" abzukürzen, und dies gilt auch für das anonyme Zitat.
4. Geben Sie im Feld **Find** "OAI" ein. 
5. Geben Sie im Feld **Replace** "Office Add-in" ein.
6. Die Änderung sollte ***nicht*** in dem Absatz erfolgen, der ein direktes Zitat enthält. Geben Sie daher im Feld **Skip Paragraphs** die Zahl **2** ein. Dies ist die nullbasierte Nummer des Absatzes.
7. Wählen Sie **Replace**. Jedes Vorkommen von "OAI", mit Ausnahme derer im übersprungenen Absatz, wird geändert.
8. Experimentieren Sie mit anderen 
9. Zeichenfolgen zum Suchen und Ersetzen.

 > Hinweis: Diese Beispielversion des-Add-Ins akzeptiert nur eine einzige Zahl im Feld **Skip Paragraphs**. 

## <a name="change-the-settings-of-the-addin"></a>Ändern der Einstellungen des-Add-Ins

1. Öffnen Sie erneut die Menüschaltfläche auf der Befehlsleiste, und wählen Sie **Einstellungen**. 
2. Auf der Seite **Einstellungen** sehen Sie, dass standardmäßig die Seite mit den Anweisungen bei jeder Ausführung des Add-Ins geöffnet wird. Verwenden Sie die Optionsfelder, um anzugeben, dass die Anweisungsseite nur bei der ersten Ausführung des Add-Ins angezeigt wird. 
3. Schließen Sie den Aufgabenbereich, und starten Sie dann das Add-In erneut, indem Sie auf die Schaltfläche **Anzeigen** klicken. Das Add-In wird mit der Seite **Search and Replace** statt mit der Anweisungsseite geöffnet. 
4. Navigieren Sie erneut zur Seite **Einstellungen**. Sie können die Schaltfläche **Anweisungen anzeigen** wählen, um die Anweisungsseite zu öffnen, oder die Anweisungseinstellung wieder zurück ändern, um die Anweisungsseite bei jeder Ausführung des Add-Ins zu öffnen.

## <a name="understand-the-code"></a>Grundlegendes zum Code

Der gesamte Code, der die JavaScript-APIs für Office und Word verwendet, befindet sich in der Datei „word.document.service.ts“. Die Methode `compareLocationWith()`, die dieses Beispiel veranschaulicht, befindet sich in der Methode `replaceFoundStringsWithExceptions()`. 

Im Code wird zuerst eine Sammlung aller Bereiche abgerufen, die mit dem Suchbegriff des Benutzers übereinstimmen. Anschließend wird eine Sammlung aller Absatzbereiche im Dokument abgerufen. 

```js
let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, 
    { matchCase: false, matchWholeWord: true })
    .load();
let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
```

Nachdem die Sammlungen mit einem Aufruf von `context.sync()` geladen wurden, erstellt der Code ein Array der Absatzbereiche, die der Benutzer von der Ersetzung ausgeschlossen hat. (Beachten Sie, dass `excludedParagraphs` ein Parameter ist, der an die Methode übergeben wird.)

```js
let excludedRanges: Array<Word.Range> = [];
excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
```

Der Code durchläuft dann die iterierbaren Bereiche, um zu bestimmen, welche Suchergebnisse sich in ausgeschlossenen Absätzen befinden. Diese Tatsache wird für jedes Suchergebnis in einem `IReplacementCandidate`-Objekt aufgezeichnet. Die Methode `compareLocationWith()` gibt "Inside" zurück, wenn das Suchergebnis innerhalb des ausgeschlossenen Absatzes liegt. Sie gibt "Equal" zurück, wenn das Suchergebnis selbst ein Absatz ist und ausgeschlossen wurde. 

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

Die Objekte der Ersetzungskandidaten werden mit einem Aufruf von `context.sync()` geladen und dann vom Code in einer Schleife durchlaufen. Dabei wird nur in den Absätzen, die sich nicht in einem ausgeschlossenen Absatz befinden, die Suchzeichenfolge durch die Ersetzungszeichenfolge ersetzt.

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

In der `replaceDocumentContent`-Methode derselben Datei sehen Sie, wie die Methoden `insertText` und `insertParagraph` von Word verwendet werden, um Beispielinhalte in das Dokument einzufügen.

In den restlichen Codedateien wird veranschaulicht, wie die Entwurfsmuster aus [Office Add-in UX Design Patterns Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) in das Framework Angular 2 integriert wurden.

## <a name="questions-and-comments"></a>Fragen und Kommentare

Wir schätzen Ihr Feedback hinsichtlich dieses Beispiels. Sie können uns Ihr Feedback über den Abschnitt *Probleme* dieses Repositorys senden.

Fragen zur Microsoft Office 365-Entwicklung sollten in [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) gestellt werden. Wenn Ihre Frage die Office JavaScript-APIs betrifft, sollte die Frage mit [office-js] und [API] kategorisiert sein.

## <a name="additional-resources"></a>Zusätzliche Ressourcen

* [Dokumentation zu Office-Add-Ins](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Office Dev Center](http://dev.office.com/)
* Weitere Office-Add-In-Beispiele unter [OfficeDev auf Github](https://github.com/officedev)

## <a name="copyright"></a>Copyright
Copyright (c) 2016 Microsoft Corporation. Alle Rechte vorbehalten.

