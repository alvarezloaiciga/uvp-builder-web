# UVP Builder

The [UVP Builder tool](http://www.uvpbuilder.com/) is a website with several forms that can help you creating new Unique Value Propositions for your product or service.

**This tool is powered by [Pernix-Labs](http://labs.pernix-solutions.com/)**.

### Setup

Before start the project setup, you need to be sure you already have installed, [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/) and NPM is enabled on your NodeJS configuration.

If you haven't installed [Bower](http://bower.io/) yet just type at your shell:

```
sudo npm install -g bower
```

After that you're ready to go cloning the repository.

```
git clone https://github.com/manfredt27/uvp-builder-web.git
```

or vía SHH if you want.

Now you have to access package.json and bower.json files, they're located at uvp-builder-web/ folder. Once you're there just install all the dependencies.

```
cd uvp-builder-web
npm install
bower install
```

The code tasks is automatized using [Gulp](http://gulpjs.com/) so now you just have to run the setup tasks.


```
gulp build
gulp local
```

### Running the project

It's as easy as run:

```
gulp serve
```

### To add or remove language support



The folder src/languages keeps all translations used by ng-translate while the folder src/app/language has the current configuration.

**First** - Add/remove your translations to src/languages.

**Second** - Over src/app/language you'll need to modify the LOCALES module's constant in order to add/remove your language from the translator.

**\* Optional** - At the same file, set the preferred language with the one of your choice.

> **Note**: You need to be sure there's at least English support in order to keep the current default language when the page loads.

### Change the API URL

The URL is located in the main module defintion under src/app/index.js.

Just modify the `API_URL` constant with the new one.

> **Note**: Be sure the server pointed by the `API_URL` is running. 
