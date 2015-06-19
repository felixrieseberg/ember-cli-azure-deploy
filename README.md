#### Continuous Deployment of Ember Cli Apps with Azure Websites
This Node Module enables Azure Websites to run ember build (building the Ember Cli app) up in the cloud - and automatically deploy the resulting dist folder to your website.

This is cool because Azure Websites can be automatically hooked up to any Git repository (including GitHub, BitBucket, etc). Together with this module, enabling continuous deployment for your Ember Cli app - simply push a new commit to GitHub and the new version of your website will be live within seconds. For more information, see [this blog post](http://felixrieseberg.com/deploying-ember-cli-to-azure-websites/). Made with :heart: by Microsoft.

##### Installation
Run the following two commands in your app's root folder: 
```
npm install --save-dev -g ember-cli-azure-deploy
azure-deploy init
```

This will create a deploy.sh in your project's root folder, enabling Azure to follow a set of instructions - including installing all the required Node Modules, running `ember build` and deploying the resulting `dist/` folder to your website's `wwwroot`.

##### Reporting Issues
If you run into any trouble, [please do report it](https://github.com/felixrieseberg/ember-cli-azure-deploy/issues). To get the latest log of what actually went wrong, visit the [Azure Management Portal](https://manage.windowsazure.com), go to your website, and select 'Deployments'. Each deployment will have its own log, even if failed.

To take a look at the file system (and get a PowerShell / CMD on your website), visit http://YOUR_WEBSITE.scm.azurewebsites.net. You will also find logs there.