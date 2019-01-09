#!/usr/bin/env bash
# Copyright 2017, University of Colorado Boulder

echo "Synchronizing phet-office-add-in"
date 

cd /data/share/phet/phet-office-add-in

# Rewrite the sim array
node updateSimArray.js

# Record the changes in github
git commit -am "synchronizeOfficeMix.sh updated the simArray"
git pull
git push

# deploy it to /office-mix on the website
cp -r public/* /data/web/static/phetsims/office-mix
