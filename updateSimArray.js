// Copyright 2016-2017, University of Colorado Boulder

/**
 * This script queries the Metadata API and writes a new apps object with the latest sims and automatically writes it
 * to public/store.html
 * @author Matt Pennington
 * @author Michael Kauzmann
 */
/* eslint-env node */
'use strict';

const axios = require( 'axios' );
const fs = require( 'fs' );

( async () => {
  let response;
  try {
    response = await axios( 'https://phet.colorado.edu/services/metadata/1.0/simulations?format=json&locale=en&type=html' );
  }
  catch( e ) {
    console.error( 'error getting request', e );
    return;
  }

  let body;
  let apps = [];

  body = response.data;
  body.projects.forEach( function( project ) {
    apps.push( {
      id: 'phet-' + project.simulations[ 0 ].localizedSimulations[ 0 ].runUrl,
      providerId: project.simulations[ 0 ].localizedSimulations[ 0 ].runUrl,
      readableId: project.simulations[ 0 ].localizedSimulations[ 0 ].runUrl,
      youtubeId: null,
      durationInSec: 0,
      type: 'exercise',
      title: project.simulations[ 0 ].localizedSimulations[ 0 ].title,
      depth: 2,
      thumbnailUrl: project.simulations[ 0 ].thumbnailUrl,
      contentUrl: project.simulations[ 0 ].localizedSimulations[ 0 ].runUrl,
      author: null,
      description: project.simulations[ 0 ].description.en
    } );
  } );

  var template = fs.readFileSync( 'store.html.template' ).toString();
  template = template.replace( '{{SIMULATION_ARRAY}}', JSON.stringify( apps, null, 2 ) );
  fs.writeFileSync( 'public/store.html', template );
} )();
