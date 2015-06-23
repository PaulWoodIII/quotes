#!/bin/bash
pushd .
cd /home/ec2-user
rm -rf quotes_archive 2>/dev/null
mkdir quotes 2>/dev/null
mv quotes quotes_archive 2>/dev/null
popd