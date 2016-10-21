// Copyright 2016, University of Colorado Boulder

/**
 * This script queries the Metadata API and writes a new apps object with the latest sims for use in phet-office-mix/store.html
 * @author Matt Pennington
 * @author Michael Kauzmann
 */


var request = require('request');

request('https://phet.colorado.edu/services/metadata/1.0/simulations?format=json&locale=en&type=html', function (error, response, bod) {
  if (!(!error && response.statusCode == 200)) {
    console.log( 'error getting request');
    return;
  }

  var body;
  var apps = [];

  body = JSON.parse(bod);
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

  console.log( JSON.stringify(apps, null, 2 ) );
});
