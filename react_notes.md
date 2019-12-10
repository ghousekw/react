```
npm install -g <package>
```

> The -g flag tells npm to install the package globally. Local packages are used in your application.For instance, React as a library will be a local package which can be required in your application for usage.

## You can install it via the terminal by typing:

```
npm install <package>
npm install react
```

> The installed package will automatically appear in a folder called node_modules/ and will be listedin the package.json file next to your other dependencies. To initialize the node_modules/ folder and the package.json file for your project.There is a npm command to initialize a npm project and thus a package.json file. Only when you have that file,

### you can install new local packages via npm.

```
npm init -y
```

> The -y flag is a shortcut to initialize all the defaults in your package.json. If you don’t use the flag, you have to decide how to configure the file. After initializing your npm project you are good to install new packages via

```
npm install <package> .
```

> One more word about the package.json. The file enables you to share your project with other developers without sharing all the node packages. The file has all the references of node packages used in your project. These packages are called dependencies. Everyone can copy your project without the dependencies. The dependencies are references in the package.json. Someone who copies your project can simply install all packages by using npm install on the command line. The npm install script takes all the dependencies listed in the package.json file and installs them in the node_modules/ folder.

```
npm install --save-dev <package>
```

> The --save-dev flag indicates that the node package is only used in the development environment. It will not be used in production when you deploy your application on a server.

### command line to bootstrap new React applications.

```
npm install -g create-react-app
```

#### check the version of create-react-app

```
create-react-app --version
*v1.5.1
```

### Afterward, simply navigate into the folder:

```
create-react-app hackernews
cd hackernews
```

```
Folder Structure

hackernews/
    README.md

node_modules/
package.json
.gitignore

public/
    favicon.ico
    index.html
    manifest.json
src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

```
// Runs the application in http://localhost:3000
npm start
// Runs the tests
npm test
// Builds the application for production
npm run build
```
