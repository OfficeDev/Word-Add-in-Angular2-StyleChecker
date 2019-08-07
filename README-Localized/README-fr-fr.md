---
page_type: sample
products:
- office-word
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/9/2016 11:08:27 AM
---
# Complément de vérification du style dans Word basé sur Angular 2.0

Découvrez comment créer un complément qui utilise les API `LocationRelation` et `compareLocationWith` des API JavaScript Word pour effectuer une recherche et un remplacement permettant d’ignorer des plages en fonction de leur emplacement par rapport aux autres plages. Le complément est basé sur l’infrastructure Angular 2.0, et il explique également comment utiliser les exemples de conception à partir du [code des modèles de conception de l’expérience utilisateur de complément Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code). 

## Sommaire
* [Historique des modifications](#change-history)
* [Conditions préalables](#prerequisites)
* [Configurer le projet](#configure-the-project)
* [Déployer le complément](#deploy-the-add-in)
* [Exécuter le projet](#run-the-project)
* [Démarrer le complément](#start-the-add-in)
* [Tester le complément](#test-the-add-in)
* [Modifier les paramètres du complément](#change-the-settings-of-the-add-in)
* [Comprendre le code](#understand-the-code)
* [Questions et commentaires](#questions-and-comments)
* [Ressources supplémentaires](#additional-resources)

## Historique des modifications

1 août 2016 :

* Version d’origine.

15 septembre - 17 octobre 2016 :

* Mises à jour mineures.

## Conditions préalables

* Word 2016 pour Windows, version 16.0.6727.1000 ou ultérieure.
* [Nœud et npm](https://nodejs.org/en/) Le projet est configuré pour utiliser npm à la fois comme gestionnaire de package et exécuteur de tâches. Il est également configuré pour utiliser Lite Server intégré dans npm comme serveur web hébergeant le complément lors du développement, afin que le complément soit rapidement opérationnel. N’hésitez pas à utiliser un autre exécuteur de tâches ou serveur web.
* [Git Bash](https://git-scm.com/downloads) (ou un autre client Git.)

## Configurer le projet

Dans le dossier où vous souhaitez placer le projet, exécutez les commandes suivantes dans l’interpréteur de commande Git Bash :

1. ```git clone {URL de ce référentiel}``` pour dupliquer ce référentiel sur votre ordinateur local.
2. ```npm install``` pour installer toutes les dépendances détaillées dans le fichier package.json.
3. ```bash gen-cert.sh``` pour créer le certificat nécessaire à l’exécution de cet exemple. 

Définissez le certificat comme appartenant à une autorité racine approuvée. Sur un ordinateur Windows, procédez comme suit :

1. Dans le dossier de référentiel de votre ordinateur local, double-cliquez sur ca.crt et sélectionnez **Installer le certificat**. 
2. Sélectionnez **Ordinateur local** et choisissez **Suivant** pour continuer. 
3. Sélectionnez **Placer tous les certificats dans le magasin suivant**, puis **Parcourir**.
4. Sélectionnez **Autorités de certification racines de confiance** et **OK**. 
5. Sélectionnez **Suivant**, puis **Terminer**. 

## Déployer le complément

Vous devez maintenant indiquer à Microsoft Word où trouver le complément.

1. Créez un partage réseau, ou [partagez un dossier sur le réseau](https://technet.microsoft.com/en-us/library/cc770880.aspx).
2. Placez une copie du fichier manifeste Word-Add-in-Angular2-StyleChecker.xml, depuis la racine du projet, dans le dossier partagé.
3. Lancez Word et ouvrez un document.
4. Choisissez l’onglet **Fichier**, puis choisissez **Options**.
5. Choisissez **Centre de gestion de la confidentialité**, puis choisissez le bouton **Paramètres du centre de gestion de la confidentialité**.
6. Choisissez les **Catalogues de compléments approuvés**.
7. Dans le champ **URL du catalogue**, saisissez le chemin réseau pour accéder au partage de dossier qui contient le fichier Word-Add-in-Angular2-StyleChecker.xml, puis choisissez **Ajouter un catalogue**.
8. Activez la case à cocher **Afficher dans le menu**, puis cliquez sur **OK**.
9. Un message vous informe que vos paramètres seront appliqués lors du prochain démarrage de Microsoft Office. Fermez Word.

## Exécuter le projet

1. Ouvrez une fenêtre de commande de nœud dans le dossier du projet et exécutez ```npm start``` pour démarrer le service web. Laissez la fenêtre de commande ouverte.
2. Ouvrez Internet Explorer ou Microsoft Edge et saisissez ```https://localhost:3000``` dans la zone d’adresse. Si vous ne recevez aucun avertissement concernant le certificat, fermez le navigateur et passez à la section suivante intitulée **Démarrer le complément**. Si vous recevez un message d’avertissement indiquant que le certificat n’est pas approuvé, passez aux étapes suivantes :
3. Le navigateur vous fournit un lien vous permettant d’ouvrir la page malgré l’avertissement. Ouvrez-la.
4. Une fois la page ouverte, une erreur de certificat rouge sera indiquée dans la barre d’adresses. Double-cliquez sur l’erreur.
5. Sélectionnez **Afficher le certificat**.
5. Sélectionnez **Installer le certificat**.
4. Sélectionnez **Ordinateur local** et choisissez **Suivant** pour continuer. 
3. Sélectionnez **Placer tous les certificats dans le magasin suivant**, puis **Parcourir**.
4. Sélectionnez **Autorités de certification racines de confiance** et **OK**. 
5. Sélectionnez **Suivant**, puis **Terminer**.
6. Fermez le navigateur.

## Démarrer le complément

1. Redémarrez Word et ouvrez un document Word.
2. Dans l’onglet **Insertion** de Word 2016, choisissez **Mes compléments**.
3. Sélectionnez l’onglet **DOSSIER PARTAGÉ**.
4. Choisissez **Correcteur de style**, puis sélectionnez **OK**.
5. Si les commandes du complément sont prises en charge par votre version de Word, l’interface utilisateur vous informe que le complément a été chargé.
6. Un nouveau groupe appelé **Correcteur de style** figure sur le ruban Accueil avec un bouton intitulé **Afficher** et une icône de crayon bleu. Cliquez sur ce bouton et le complément ouvre sur une page d’instructions.

 > Remarque : le complément se charge dans un volet Office si les commandes de complément ne sont pas prises en charge par votre version de Word.

## Tester le complément

1. Lorsque vous avez terminé avec les instructions, cliquez sur **Prise en main**.
2. Lorsque la page **Rechercher et remplacer** s’ouvre, une barre de commandes apparaît en haut avec un bouton de menu. Cliquez sur le bouton pour ouvrir le menu.
3. Sélectionnez **Insérer le contenu d’exemple**. Cliquez de nouveau sur le bouton pour fermer le menu. Le document contient désormais du texte non mis en forme concernant les compléments Office, y compris une citation fictive. L’auteur a utilisé l’abréviation « OAI » pour désigner le « complément Office », comme dans la citation anonyme.
4. Dans la zone **Rechercher**, indiquez « OAI ». 
5. Dans la zone **Remplacer**, indiquez « complément Office ».
6. La modification ne doit ***pas*** être réalisée dans le paragraphe qui est une citation directe. Saisissez donc le chiffre **2** dans la zone **Ignorer les paragraphes**. Il s’agit du nombre à partir de zéro du paragraphe.
7. Sélectionnez **Remplacer**. Chaque instance de l’abréviation « OAI » est modifiée, à l’exception de celle figurant dans le paragraphe ignoré.
8. Expérimenter d’autres chaînes de recherche et de remplacement.

 > Remarque : Cet exemple de complément n’accepte qu’un seul chiffre dans la zone **Ignorer le numéro de paragraphe**. Un complément de production permet de sauter plusieurs paragraphes et de désigner d’autres méthodes de désignation des paragraphes à ignorer, par exemple en se basant sur le style de paragraphe.

## Modifier les paramètres du complément

1. Ouvrez de nouveau le bouton de menu dans la barre de commandes et sélectionnez **Paramètres**. 
2. Sur la page **Paramètres**, vous constaterez que la page des instructions apparaît par défaut à chaque exécution du complément. Utilisez les cases d’option pour spécifier que la page des instructions apparaîtra uniquement la première fois que le complément est exécuté. 
3. Fermez le volet Office et relancez le complément en sélectionnant à nouveau le bouton **Afficher**. Le complément s’ouvrira avec la page **Rechercher et remplacer** au lieu de la page des instructions. 
4. Accédez de nouveau à la page **Paramètres**. Vous pouvez sélectionner le bouton **Afficher les instructions** pour ouvrir la page des instructions, ou restaurer le paramètre des instructions afin que la page des instructions apparaisse chaque fois que le complément est exécuté.

## Comprendre le code

Tout le code utilisant les API Office et Word JavaScript se trouve dans le fichier word.document.service.ts. La méthode `compareLocationWith()` illustrée dans cet exemple figure dans la méthode `replaceFoundStringsWithExceptions()`. 

Le code obtient d’abord une collection de toutes les plages correspondant au terme de recherche de l’utilisateur. Il obtient ensuite une collection de toutes les plages de paragraphe dans le document. 

```let foundItems : Word.SearchResultCollection = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load();```
``` let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();```

Une fois que les collections sont chargées avec un appel de `context.sync()`, le code crée un tableau des plages paragraphe que l’utilisateur exclut du remplacement. (Notez que `excludedParagraph` est un paramètre transmis à la méthode.)

```let excludedRanges : Array<Word.Range> = \[];```
```excludedRanges.push(paras.items\[excludedParagraph].getRange('Whole'));```

Le code est exécuté en boucle via les itérables pour identifier les résultats de recherche faisant partie ou non des paragraphes exclus. Pour chaque résultat de recherche, le fait est enregistré dans un objet `IReplacementCandidate`. La méthode `compareLocationWith()` renvoie « Inside » si le résultat de recherche fait partie du paragraphe exclu. Elle renvoie « Equal » si le résultat de recherche est lui-même un paragraphe et a été exclu. 

```
for (let i = 0; i < foundItems.items.length; i++) {
    for (let j = 0; j < excludedRanges.length; j++) {
        replacementCandidates.push({
            range: foundItems.items[i],
            locationRelation: foundItems.items[i].compareLocationWith(excludedRanges[j])
        });
    }
}
```
Les objets candidats au remplacement sont chargés avec un appel à `context.sync()`, puis le code itère au sein de ceux-ci, en remplaçant la chaîne recherchée par la chaîne de remplacement uniquement dans les paragraphes qui ne sont pas exclus.

```
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
Consultez la méthode `replaceDocumentContent` du même fichier pour voir comment les méthodes Word `insertText` et `insertParagraph` sont utilisées pour insérer un exemple contenu dans le document.

Affichez le reste des fichiers de code pour découvrir comment les modèles de conception à partir du [code des modèles de conception de l’expérience utilisateur de complément Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) ont été intégrés à l’infrastructure Angular 2.0.

## Questions et commentaires

Nous serions ravis de connaître votre opinion sur cet exemple. Vous pouvez nous envoyer vos commentaires via la section *Problèmes* de ce référentiel.

Les questions générales sur le développement de Microsoft Office 365 doivent être publiées sur [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). Si votre question concerne les API Office JavaScript, assurez-vous qu’elle est marquée avec les balises \[office js] et \[API].

## Ressources supplémentaires

* [Documentation de complément Office](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Centre de développement Office](http://dev.office.com/)
* Plus d’exemples de complément Office sur [OfficeDev sur Github](https://github.com/officedev)

## Copyright
Copyright (c) 2016 Microsoft Corporation. Tous droits réservés.



Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
