#### Continuous Deployment of Ember Cli Apps with Azure Websites
This Node Module enables Azure Websites to run `ember build` (building the Ember Cli app) up in the cloud - and automatically deploy the resulting `dist` folder to your website.

This is cool because Azure Websites can be automatically hooked up to any Git repository (including GitHub, BitBucket, etc). Together with this module, enabling continuous deployment for your Ember Cli app - simply push a new commit to GitHub and the new version of your website will be live within seconds.

##### Installation
Run `npm install --save ember-cli-deploy-azure` in your Ember Cli app's root folder.

##### Usage
Run `azure-deploy init` once in your Ember Cli app's root folder. 

This will create a deploy.sh in your project's root folder, enabling Azure to follow a set of instructions - including installing all the required Node Modules, running `ember build` and deploying the resulting `dist/` folder to your website's `wwwroot`.