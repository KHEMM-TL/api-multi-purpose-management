#!/bin/sh

git clone --recurse-submodules https://github.com/KHEMM-TL/api-multi-purpose-management
cd client
yarn build
cd ..
tsc 
node build/index.js
