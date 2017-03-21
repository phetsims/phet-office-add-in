#!/usr/bin/env bash
# Copyright 2017, University of Colorado Boulder

# Rewrite the sim array
node updateSimArray.js

# Record the changes in github
git commit -am "synchronizeOfficeMix.sh updated the simArray"
git pull
git push

# deploy it to /office-mix on the website
cp -r public/* /data/web/static/phetsims/office-mix