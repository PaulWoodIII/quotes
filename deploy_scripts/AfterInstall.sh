#!/bin/bash
pushd .
cd /home/ec2-user/quotes
#need the pushd and popd because codedeploy with cd
#will break the wholeagent
git clone git://github.com/creationix/nvm.git ~/.nvm;
source ~/.nvm/nvm.sh;
echo "source ~/.nvm/nvm.sh" >> ~/.bash_profile;
nvm install v0.10.35;
nvm alias default v0.10.35;
npm install
npm install pm2 -g
npm i -g grunt-cli
popd

