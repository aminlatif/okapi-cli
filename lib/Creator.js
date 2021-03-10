const fs = require('fs-extra');
const { bootstrapPreset } = require("../presets/bootstrap/preset");
const chalk = require('chalk');
const { resolvePkg } = require("./util/pkg");
const writeFileTree = require('./util/writeFileTree')
const path = require("path");
const {dirname} = require("path");


module.exports = class Creator {
    constructor (name, context) {
        this.name = name
        this.context = context
    }

    async create (cliOptions = {}, preset = null) {
        preset = bootstrapPreset();

        const packageManager = 'npm';

        console.log(`✨  Creating project in ${chalk.yellow(this.context)}.`)
        
        const pkg = {
            name: this.name,
            version: '0.1.0',
            private: true,
            devDependencies: {},
            scripts:{
              dev: "okapi-service dev",
              build: "okapi-service build"
            },
            ...resolvePkg(this.context)
        }

        const deps = Object.keys(preset.plugins);

        deps.forEach(dep => {
            if (preset.plugins[dep]._isPreset) {
              return
            }

            let { version } = preset.plugins[dep];

            if (!version) {
                version = 'latest'
            }

            pkg.devDependencies[dep] = version
        });

        await writeFileTree(this.context, {
            'package.json': JSON.stringify(pkg, null, 2)
        })

        console.log(`⚙\u{fe0f}  Installing CLI plugins. This might take a while...`)

        var child_process = require('child_process');

        child_process.execSync('npm install',{stdio:[0,1,2]});

        console.log(`🚀  Copying template Files`)
        
        const __moduledir = path.resolve(dirname(__filename), "..");

        const srcDir = __moduledir + `/presets/bootstrap/template/`;
        const destDir = this.context + '/';

        console.log("from " + srcDir + " to " + destDir);
        fs.copy(srcDir, destDir, function (err) {
            if (err) {                 
              console.error("An error occured while copying");
              console.error(err);
            } else {
              console.log("Copy was successful.");
            }
          });

        console.log(`📦  Installing additional dependencies...`)

        console.log(`⚓  Running completion hooks...`)

        console.log(`🎉  Successfully created project ${chalk.yellow(this.name)}.`)
    }
}