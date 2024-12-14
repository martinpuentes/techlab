## **Versión nodeJs**
`nvm install 14.19.1` Fermium

## **Requisitos previos de instalación de la cadena de herramientas de desarrollo**
La cadena de herramientas de desarrollo y compilación de SharePoint Framework usa diversas herramientas populares de código abierto. Aunque la mayoría de las dependencias se incluyen en cada proyecto, tiene que instalar algunas dependencias de forma global en la estación de trabajo.

- ### **Instalar Gulp** 
Gulp es un ejecutor de tareas basado en JavaScript que sirve para automatizar tareas repetitivas. La cadena de herramientas de compilación de SharePoint Framework usa tareas Gulp para compilar proyectos y crear agrupaciones de JavaScript y los paquetes resultantes que se usan para implementar soluciones.

Escriba el siguiente comando para instalar la CLI de Gulp:

`npm install gulp-cli --global`

- ### **Instalar Yeoman**

Yeoman le ayuda a iniciar rápidamente nuevos proyectos y recomienda procedimientos y herramientas que le ayudarán a mantener la productividad. Las herramientas de desarrollo del lado cliente de SharePoint incluyen un generador de Yeoman para crear nuevos elementos web. El generador proporciona herramientas de compilación comunes, código reutilizable común y un sitio web de prueba común para hospedar los elementos web y probarlos.

Escriba el siguiente comando para instalar Yeoman:

`npm install yo --global`

- ### **Instalar el generador de SharePoint de Yeoman**

El generador de elementos web de SharePoint de Yeoman le ayuda a crear rápidamente un proyecto de solución del lado cliente de SharePoint con la estructura de proyecto y cadena de herramientas correcta.

Para instalar el generador de SharePoint Framework de Yeoman de manera global, escriba el comando siguiente:

`npm install @microsoft/generator-sharepoint --global`

- ## **Crear un proyecto de elementos web**

Cree un directorio de proyecto nuevo para el proyecto y cambie la carpeta actual a ese directorio.

Cree un nuevo proyecto ejecutando el generador de SharePoint Yeoman desde el nuevo directorio que creó:

`yo @microsoft/sharepoint`  

Cuando se le solicite:

- What is your solution name?: **<NombreDelProyecto>**
- Which baseline packages do you want to target for your component(s)?: **SharePoint Online only (latest)**
- Where do you want to place the files?: **Use the current folder**
- Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites?: **N**
- Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant?: **Y**
- Which type of client-side component to create?: **WebPart**

El siguiente conjunto de mensajes solicita información específica sobre su elemento web:

- What is your Web part name?: **Nombre del proyecto**
- What is your Web part description?: **Descripcion del proyecto**
- Which framework would you like to use?: **React**

##En este momento, Yeoman crea el scaffolding del proyecto (carpetas y archivos) e instala las dependencias necesarias al ejecutar npm install. Suele tardar de 1 a 3 minutos, dependiendo de la conexión a Internet.

- ##**Confiar en el certificado de desarrollador autofirmado**
El servidor web local de SharePoint Framework, usado al probar soluciones personalizadas de su entorno de desarrollo, utiliza HTTPS de forma predeterminada. Esto se implementa con un certificado SSL autofirmado de desarrollo. Su entorno de desarrollo no confía en los certificados SSL autofirmados. Primero debe configurar el entorno de desarrollo para confiar en el certificado.

Una tarea de utilidad se incluye en cada proyecto SharePoint Framework en forma de una tarea de Gulp. Puede elegir hacerlo ahora o esperar a crear su primer proyecto como se explica en el tutorial Compilar el primer elemento web del lado cliente de SharePoint (parte 1 de Hello World).

Una vez que un proyecto se haya creado con el generador de Yeoman para SharePoint Framework, ejecute el siguiente comando desde dentro de la carpeta raíz del proyecto.

`gulp trust-dev-cert`