#!/bin/bash
#start nodejs
echo "starting ha proxy"
sudo service haproxy start

echo "starting nodejs" 
node /src/index.js
