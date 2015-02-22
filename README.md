#### Continuous Deployment of Ember Cli Apps with Azure Websites
Azure Websites can be automatically hooked up to any Git repository (including GitHub, BitBucket, etc) and is able to execute custom commands as soon as a new commit is made. 

This Node Module enables Azure Websites to run `ember build` (building the Ember Cli app) up in the cloud - and automatically deploy the resulting `dist` folder to your website.

##### Installation
Run `npm install --save ember-cli-deploy-azure` in your Ember Cli app's root folder.

##### Usage
Run `azure-deploy init` once in your Ember Cli app's root folder. 

This will create a deploy.sh in your project's root folder, enabling Azure to follow a set of instructions - including installing all the required Node Modules, running `ember build` and deploying the resulting `dist/` folder to your website's `wwwroot`.