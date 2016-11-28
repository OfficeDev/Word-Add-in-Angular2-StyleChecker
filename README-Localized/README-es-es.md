# <a name="word-style-checking-addin-built-on-angular-2"></a>Complemento para corregir estilos de Word creado con Angular 2

Obtenga información sobre cómo crear un complemento que use las API `LocationRelation` y `compareLocationWith` de las API de JavaScript de Word para realizar una búsqueda y reemplazo que omita algunos intervalos según su ubicación relativa a otros intervalos. Este complemento se creó con el marco Angular 2 y, además, muestra cómo usar los diseños de ejemplo de [Código de modelos de diseño de la experiencia del usuario para complementos de Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code). 

## <a name="table-of-contents"></a>Tabla de contenido
* [Historial de cambios](#change-history)
* [Requisitos previos](#prerequisites)
* [Configurar el proyecto](#configure-the-project)
* [Implementar el complemento](#deploy-the-add-in)
* [Ejecutar el proyecto](#run-the-project)
* [Iniciar el complemento](#start-the-add-in)
* [Probar el complemento](#test-the-add-in)
* [Cambiar la configuración del complemento](#change-the-settings-of-the-add-in)
* [Entender el código](#understand-the-code)
* [Preguntas y comentarios](#questions-and-comments)
* [Recursos adicionales](#additional-resources)

## <a name="change-history"></a>Historial de cambios

1 de agosto de 2016:

* Versión inicial.

Del 15 de septiembre al 17 de octubre de 2016:

* Actualizaciones secundarias.

## <a name="prerequisites"></a>Requisitos previos

* Word 2016 para Windows, compilación 16.0.6727.1000 o posteriores.
* [Nodo y npm](https://nodejs.org/en/) El proyecto está configurado para usar npm como un administrador de paquetes y un ejecutor de tareas. También está configurado para usar Lite Server (integrado en npm) como el servidor web que hospedará el complemento durante el desarrollo para que pueda poner el complemento en funcionamiento rápidamente. Puede usar otro ejecutor de tareas o servidor web.
* [Git Bash](https://git-scm.com/downloads) (U otro cliente de Git).

## <a name="configure-the-project"></a>Configurar el proyecto

En la carpeta donde quiera colocar el proyecto, ejecute los siguientes comandos en el shell de Git Bash:

1. ```git clone {URL of this repo}``` para clonar este repositorio en la máquina local.
2. ```npm install``` para instalar todas las dependencias detalladas en el archivo package.json.
3. ```bash gen-cert.sh``` para crear el certificado necesario para ejecutar este ejemplo. 

Establezca el certificado para que sea una entidad de certificación raíz de confianza. En una máquina Windows, siga estos pasos:

1. En la carpeta del repositorio del equipo local, haga doble clic en ca.crt y seleccione **Instalar certificado**. 
2. Seleccione **Máquina local** y **Siguiente** para continuar. 
3. Seleccione **Colocar todos los certificados en el siguiente almacén** y **Examinar**.
4. Seleccione **Entidades de certificación raíz de confianza** y **Aceptar**. 
5. Seleccione **Siguiente** y, después, **Finalizar**. 

## <a name="deploy-the-addin"></a>Implementar el complemento

Ahora debe indicarle a Microsoft Word dónde encontrar el complemento.

1. Cree un recurso compartido de red o [comparta una carpeta en la red](https://technet.microsoft.com/en-us/library/cc770880.aspx).
2. Coloque una copia del archivo de manifiesto Word-Add-in-Angular2-StyleChecker.xml, en el directorio raíz del proyecto, en la carpeta compartida.
3. Inicie Word y abra un documento.
4. Seleccione la pestaña **Archivo** y haga clic en **Opciones**.
5. Haga clic en **Centro de confianza** y seleccione el botón **Configuración del Centro de confianza**.
6. Elija **Catálogos de complementos de confianza**.
7. En el campo **URL del catálogo**, escriba la ruta de red al recurso compartido de carpeta que contiene Word-Add-in-Angular2-StyleChecker.xml y, después, elija **Agregar catálogo**.
8. Seleccione la casilla **Mostrar en el menú** y, después, haga clic en **Aceptar**.
9. Aparecerá un mensaje para informarle de que la configuración se aplicará la próxima vez que inicie Microsoft Office. Cierre Word.

## <a name="run-the-project"></a>Ejecutar el proyecto

1. Abra una ventana Comandos de nodo en la carpeta del proyecto y ejecute ```npm start``` para iniciar el servicio web. Deje abierta la ventana Comandos.
2. Abra Internet Explorer o Edge y escriba ```https://localhost:3000``` en el cuadro de dirección. Si no recibe ninguna advertencia sobre el certificado, cierre el explorador y siga con la sección siguiente titulada **Iniciar el complemento**. Si se muestra una advertencia que indica que el certificado no es de confianza, siga estos pasos:
3. El explorador le proporciona un vínculo para abrir la página a pesar de la advertencia. Ábralo.
4. Después de que se abra la página, habrá un error de certificado rojo en la barra de direcciones. Haga doble clic en el error.
5. Seleccione **Ver certificado**.
5. Seleccione **Instalar certificado**.
4. Seleccione **Máquina local** y **Siguiente** para continuar. 
3. Seleccione **Colocar todos los certificados en el siguiente almacén** y **Examinar**.
4. Seleccione **Entidades de certificación raíz de confianza** y **Aceptar**. 
5. Seleccione **Siguiente** y, después, **Finalizar**.
6. Cierre el explorador.

## <a name="start-the-addin"></a>Iniciar el complemento

1. Reinicie Word y abra un documento de Word.
2. En la pestaña **Insertar** de Word 2016, elija **Mis complementos**.
3. Seleccione la pestaña **CARPETA COMPARTIDA**.
4. Elija **Corrector de estilos** y, después, seleccione **Aceptar**.
5. Si su versión de Word admite los comandos de complemento, la interfaz de usuario le informará de que se cargó el complemento.
6. En la pestaña Inicio de la cinta de opciones verá un nuevo grupo llamado **Corrector de estilos**, con el botón **Mostrar** y un icono de lápiz azul. Haga clic en ese botón y el complemento abrirá una página de instrucciones.

 > Nota: El complemento se cargará en un panel de tareas si los comandos del complemento no son compatibles con su versión de Word.

## <a name="test-the-addin"></a>Probar el complemento

1. Cuando termine de ver las instrucciones, haga clic en **Empezar**.
2. Cuando se abra la página **Buscar y reemplazar**, verá una barra de comandos en la parte superior con un botón de menú. Haga clic en el botón para abrir el menú.
3. Seleccione **Insertar contenido de ejemplo**. Vuelva a hacer clic en el botón para cerrar el menú. Este documento tiene ahora texto sin formato sobre complementos de Office, incluido un presupuesto ficticio. El autor usó "OAI" para abreviar "Complemento de Office" y por eso se genera un presupuesto anónimo.
4. En el cuadro **Buscar**, escriba "OAI". 
5. En el cuadro **Reemplazar**, escriba "Complemento de Office".
6. ***No*** realice el cambio en el párrafo que es un presupuesto directo; en su lugar, escriba el número **2** en el cuadro **Omitir párrafos**. Este es el número de base cero del párrafo.
7. Seleccione **Reemplazar**. Se cambiarán todas las repeticiones de "OAI", excepto la del párrafo omitido.
8. Pruebe con otras cadenas
9. de búsqueda y reemplazo.

 > Nota: Esta versión de ejemplo del complemento solo admite un número en el cuadro **Omitir párrafos**. 

## <a name="change-the-settings-of-the-addin"></a>Cambiar la configuración del complemento

1. Vuelva a abrir el botón de menú en la barra de comandos y seleccione **Configuración**. 
2. En la página **Configuración** verá que, de forma predeterminada, la página de instrucciones se abre cada vez que se ejecuta el complemento. Use los botones de radio para especificar que la página de instrucciones solo se muestre la primera vez que se ejecute el complemento. 
3. Cierre el panel de tareas y, después, reinicie el complemento (para hacerlo, vuelva a seleccionar el botón **Mostrar**). El complemento se abrirá con la página **Buscar y reemplazar**, en lugar de la página de instrucciones. 
4. Vuelva a la página **Configuración**. Puede seleccionar el botón **Mostrar instrucciones** para abrir la página de instrucciones, o bien puede volver a cambiar la configuración de instrucciones para que se abra la página de instrucciones cuando se ejecute el complemento.

## <a name="understand-the-code"></a>Entender el código

Todo el código donde se usan las API de JavaScript de Office y Word se encuentra en el archivo word.document.service.ts. El método `compareLocationWith()` que se usa en este ejemplo es el método `replaceFoundStringsWithExceptions()`. 

Primero, el código obtiene una colección de todos los intervalos que coinciden con el término de búsqueda del usuario. Después, obtiene una colección de todos los intervalos de párrafos del documento. 

```js
let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, 
    { matchCase: false, matchWholeWord: true })
    .load();
let paras : Word.ParagraphCollection = context.document.body.paragraphs.load();
```

Después de cargar las colecciones con una llamada de `context.sync()`, el código crea una matriz de los intervalos de párrafos que el usuario quiere excluir del reemplazo. (Tenga en cuenta que `excludedParagraphs` es un parámetro que se pasa al método).

```js
let excludedRanges: Array<Word.Range> = [];
excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
```

Después, el código procesa las repeticiones para determinar qué resultados de la búsqueda están dentro de los párrafos excluidos y cuáles no. Por cada resultado de la búsqueda, esto se registra en un objeto de `IReplacementCandidate`. El método `compareLocationWith()` devuelve "Dentro" si el resultado de la búsqueda está dentro del párrafo excluido. Devuelve "Igual" si el resultado de la búsqueda es un párrafo que se ha excluido. 

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

Los objetos que son candidatos de reemplazos se cargan con una llamada a `context.sync()` y, después, el código procesa una iteración en todos estos y reemplaza la cadena de búsqueda con la cadena de reemplazo, pero solo en los párrafos no excluidos.

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

Vea el método `replaceDocumentContent` del mismo archivo para comprobar cómo se usan los métodos de Word `insertText` y `insertParagraph` para insertar contenido de ejemplo en el documento.

Vea el resto de los archivos de código para conocer cómo se integran los modelos de diseño del [Código de modelos de diseño de la experiencia del usuario para complementos de Office](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code) en el marco de Angular 2.

## <a name="questions-and-comments"></a>Preguntas y comentarios

Nos encantaría recibir sus comentarios sobre este ejemplo. Puede enviarnos comentarios a través de la sección *Problemas* de este repositorio.

Las preguntas generales sobre el desarrollo de Microsoft Office 365 deben publicarse en [Desbordamiento de pila](http://stackoverflow.com/questions/tagged/office-js+API). Si su pregunta trata sobre las API de JavaScript para Office, asegúrese de que su pregunta se etiqueta con [office-js] y [API].

## <a name="additional-resources"></a>Recursos adicionales

* [Documentación de complementos de Office](https://msdn.microsoft.com/en-us/library/office/jj220060.aspx)
* [Centro de desarrollo de Office](http://dev.office.com/)
* Más ejemplos de complementos de Office en [OfficeDev en GitHub](https://github.com/officedev)

## <a name="copyright"></a>Copyright
Copyright (c) 2016 Microsoft Corporation. Todos los derechos reservados.

