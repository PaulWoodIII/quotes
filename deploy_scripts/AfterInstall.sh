#!/bin/bash
pushd .
cd /home/ec2-user/quotes
#need the pushd and popd because codedeploy with cd
#will break the wholeagent
nvm install v0.10.35;
nvm alias default v0.10.35;
nvm use default
npm install
npm install -g pm2
npm i -g grunt
npm i -g grunt-cli
popd
