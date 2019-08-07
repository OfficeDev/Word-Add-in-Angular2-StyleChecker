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
# Suplemento de Verificação de Estilo do Word criado em Angular 2.0

Saiba como usar um suplemento que usa as APIs `LocationRelation` e `compareLocationWith` das APIs JavaScript do Word para realizar uma pesquisa e substituição ignorando alguns intervalos com base na localização em relação a outros intervalos. O suplemento está incluído na estrutura Angular 2.0 e também mostra como usar os exemplos de design do [Código de Padrões de Design da Experiência do Usuário de Suplementos do Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code). 

## Sumário
* [Histórico de alterações](#change-history)
* [Pré-requisitos](#prerequisites)
* [Configurar o projeto](#configure-the-project)
* [Implantar o suplemento](#deploy-the-add-in)
* [Executar o projeto](#run-the-project)
* [Iniciar o suplemento](#start-the-add-in)
* [Testar o suplemento](#test-the-add-in)
* [Alterar as configurações do suplemento](#change-the-settings-of-the-add-in)
* [Compreender o código](#understand-the-code)
* [Perguntas e comentários](#questions-and-comments)
* [Recursos adicionais](#additional-resources)

## Histórico de alterações

1º de agosto de 2016:

* Versão inicial.

15 de setembro - 17 de outubro de 2016:

* Atualizações secundárias.

## Pré-requisitos

* Word 2016 para Windows, build 16.0.6727.1000 ou superior.
* [Nó e npm](https://nodejs.org/en/) Configuramos o projeto para usar npm como gerenciador de pacotes e executor de tarefas. Ele também é configurado para usar o Lite Server integrado ao npm como o servidor Web que hospedará o suplemento durante o desenvolvimento, de modo que você possa começar a usar o suplemento rapidamente. Você também pode usar outro executor de tarefas ou servidor Web.
* [Git Bash](https://git-scm.com/downloads) (ou outro cliente git)

## Configurar o projeto

Na pasta em que deseja armazenar o projeto, execute os seguintes comandos no shell do Git Bash:

1. ```git clone {URL deste repositório}``` para clonar este repositório em seu computador local.
2. ```npm install``` para instalar todas as dependências discriminadas no arquivo package.json.
3. ```bash gen-cert.sh``` para criar os certificados necessários para executar este exemplo. 

Defina o certificado como uma autoridade raiz confiável. Em um computador com Windows, as etapas são as seguintes:

1. Na pasta do repositório do computador local, clique duas vezes em cada ca.crt e escolha **Instalar Certificado**. 
2. Escolha **Computador Local** e **Avançar** para continuar. 
3. Selecione **Colocar todos os certificados no armazenamento a seguir** e escolha **Procurar**.
4. Escolha **Autoridades de Certificação Raiz Confiáveis** e selecione **OK**. 
5. Escolha **Avançar** e **Concluir**. 

## Implantar o suplemento

Agora, você precisa informar ao Microsoft Word onde encontrar o suplemento.

1. Crie um compartilhamento de rede ou [compartilhe uma pasta na rede](https://technet.microsoft.com/en-us/library/cc770880.aspx).
2. Coloque uma cópia do arquivo de manifesto Word-Add-in-Angular2-StyleChecker.xml na raiz do projeto, na pasta compartilhada.
3. Inicie o Word e abra um documento.
4. Escolha a guia **Arquivo** e escolha **Opções**.
5. Escolha **Central de Confiabilidade** e escolha o botão **Configurações da Central de Confiabilidade**.
6. Escolha **Catálogos de Suplementos Confiáveis**.
7. No campo **Url do Catálogo**, insira o caminho de rede do compartilhamento de pasta que contém Word-Add-in-Angular2-StyleChecker.xml e escolha **Adicionar Catálogo**.
8. Marque a caixa de seleção **Mostrar no Menu** e escolha **OK**.
9. O sistema exibirá uma mensagem para informar que suas configurações serão aplicadas na próxima vez que você iniciar o Microsoft Office. Feche o Word.

## Executar o projeto

1. Abra uma janela de comando de nó na pasta do projeto e execute ```npm start``` para iniciar o serviço Web. Deixe a janela de comando aberta.
2. Abra o Internet Explorer ou o Microsoft Edge e insira ```https://localhost:3000``` na caixa de endereço. Se não receber avisos sobre o certificado, feche o navegador e avance para a seção abaixo chamada **Iniciar o suplemento**. Se receber um aviso informando que o certificado não é confiável, vá para as etapas seguintes:
3. Independentemente do aviso, o navegador fornecerá um link para você abrir a página. Abra-a.
4. Após abri-la, o sistema exibirá um Erro de Certificado vermelho na barra de endereços. Clique duas vezes no erro.
5. Escolha **Exibir Certificado**.
5. Escolha **Instalar Certificado**.
4. Escolha **Computador Local** e **Avançar** para continuar. 
3. Selecione **Colocar todos os certificados no armazenamento a seguir** e escolha **Procurar**.
4. Escolha **Autoridades de Certificação Raiz Confiáveis** e selecione **OK**. 
5. Escolha **Avançar** e **Concluir**.
6. Feche o navegador.

## Iniciar o suplemento

1. Reinicie o Word e abra um documento.
2. Na guia **Inserir** no Word 2016, escolha **Meus suplementos**.
3. Selecione a guia **PASTA COMPARTILHADA**.
4. Escolha **Verificador de Estilo** e selecione **OK**.
5. Se os comandos de suplemento forem compatíveis com sua versão do Word, a interface do usuário informará que o suplemento foi carregado.
6. Na faixa de opções da Página Inicial, há um novo grupo chamado **Verificador de Estilo** com um botão rotulado como **Mostrar** e um ícone de lápis azul. Clique no botão e o suplemento abrirá uma página de instruções.

 > Observação: O suplemento será carregado no painel de tarefas se os comandos de suplemento não forem compatíveis com sua versão do Word.

## Testar o suplemento

1. Quando concluir as instruções, clique em **Introdução**.
2. Quando a página **Localizar e Substituir** é aberta, há uma barra de comandos na parte superior com um botão de menu. Clique no botão para abrir o menu.
3. Selecione **Inserir conteúdo de exemplo**. Clique no botão novamente para fechar o menu. Agora o documento tem texto não formatado sobre Suplementos do Office, incluindo uma citação fictícia. O autor usou "OAI" para abreviar "Suplemento do Office", e a citação anônima também o faz.
4. Na caixa **Localizar**, insira “OAI”. 
5. Na caixa **Substituir**, insira “Suplemento do Office”.
6. A alteração ***não*** deve ser feita no parágrafo que é uma citação direta. Portanto, insira o número **2** na caixa **Ignorar Número de Parágrafo**. Este é o número do parágrafo com base em zero.
7. Selecione **Substituir**. Todas as instâncias de "OAI" são alteradas, exceto aquelas no parágrafo ignorado.
8. Experimente outras pesquisas e substitua cadeias de caracteres.

 > Observação: Este suplemento de exemplo aceita somente um número na caixa **Ignorar Número de Parágrafo**. Um suplemento de produção permite que vários parágrafos sejam ignorados e outras maneiras de designar quais parágrafos devem ser ignorados; por exemplo, ignorar com base no estilo de parágrafo.

## Alterar as configurações do suplemento

1. Abra o botão de menu na barra de comandos novamente e selecione **Configurações**. 
2. Na página **Configurações**, você verá que, por padrão, a página de instruções é aberta sempre que o suplemento é executado. Use os botões de opção para especificar que a página de instruções será mostrada apenas na primeira vez que o suplemento for executado. 
3. Feche o painel de tarefas e reinicie o suplemento, selecionando novamente o botão **Mostrar**. O suplemento será aberto coma a página **Localizar e Substituir** em vez da página de instruções. 
4. Navegue até a página **Configurações** novamente. Você pode selecionar o botão **Mostrar Instruções** para abrir a página de instruções ou alterar a configurações de instruções novamente para abrir a página de instruções sempre que o suplemento for executado.

## Compreender o código

Todo o código que usa APIs JavaScript do Office e do Word está no arquivo word.document.service.ts. O método `compareLocationWith()` que este exemplo demonstra está no método `replaceFoundStringsWithExceptions()`. 

Primeiro, o código obtém uma coleção de todos os intervalos que correspondem ao termo de pesquisa do usuário. Em seguida, obtém uma coleção de todos os intervalos de parágrafos no documento. 

```let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load();```
```let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();```

Depois que as coleções são carregadas com uma chamada de `context.sync()`, o código cria uma matriz dos intervalos de parágrafos que o usuário exclui da substituição. (Observe que `excludedParagraph` é um parâmetro passado para o método.)

```let excludedRanges: Array<Word.Range> = \[];```
```excludedRanges.push(paras.items\[excludedParagraph].getRange('Whole'));```

Em seguida, o código percorre os itens iteráveis para determinar quais resultados da pesquisa estão dentro de parágrafos excluídos e quais não estão. Para cada resultado da pesquisa, esse fato é registrado em um objeto `IReplacementCandidate`. O método `compareLocationWith()` retornará “Dentro” se o resultado da pesquisa estiver dentro do parágrafo excluído. Retornará "Igual" se o resultado da pesquisa for um parágrafo por si só e tiver sido excluído. 

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
Os objetos de candidato de substituição são carregados com uma chamada para `context.sync()` e, em seguida, o código itera por eles, substituindo a cadeia de caracteres de pesquisa por uma cadeia de caracteres de substituição somente nos parágrafos que não estão em um parágrafo excluído.

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
Confira o método `replaceDocumentContent` do mesmo arquivo para ver como os métodos do Word `insertText` e `insertParagraph` são usados para inserir conteúdo de exemplo no documento.

Confira o restante dos arquivos de código para ver como os padrões de design do [Código de Padrões de Design da Experiência do Usuário de Suplemento do Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) foram integrados à estrutura Angular 2.0.

## Perguntas e comentários

Gostaríamos de saber sua opinião sobre este exemplo. Você pode enviar comentários na seção *Problemas* deste repositório.

As perguntas sobre o desenvolvimento do Microsoft Office 365 em geral devem ser postadas no [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). Se sua pergunta estiver relacionada às APIs JavaScript para Office, não deixe de marcá-la com as tags \[office-js] e \[API].

## Recursos adicionais

* [Documentação dos suplementos do Office](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Centro de Desenvolvimento do Office](http://dev.office.com/)
* Confira outros exemplos de Suplemento do Office em [OfficeDev no Github](https://github.com/officedev)

## Direitos autorais
Copyright (c) 2016 Microsoft Corporation. Todos os direitos reservados.



Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
