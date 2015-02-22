#! /usr/bin/env node

var exec = require('child_process').exec,
    fs = require('fs'),
    path = require('path'),
    args = process.argv,
    currentFolder = process.cwd();

if (args && args[2] && (args[2] === 'init' || args[2] === 'build')) {
    if (args[2] === 'init') {
        // Copy deploy.sh to project's root
        copyFile(path.resolve(__dirname, 'deploy.sh'), path.resolve(currentFolder + '/deploy.sh'));
    } else if (args[2] === 'build') {
        exec('ember build -prod', {
            cwd: currentFolder,
            stdout: true,
            stdin: false
        }, function (err, stdout, stderr) {
            if (err) {
                return console.error(err);
            }
            console.log(stdout, stderr);
        })
    }
} else {
    console.error('No parameter given! Usage deploy [init|build]');
}

// Helper Functions
function copyFile(source, target) {
    var rd, wr;

    rd = fs.createReadStream(source);
    rd.on('error', done);

    wr = fs.createWriteStream(target);
    wr.on('error', done);
    wr.on('close', function (ex) {
        done();
    });
    rd.pipe(wr);

    function done (err) {
        if (err) {
            console.log(err);
        }
    }
}