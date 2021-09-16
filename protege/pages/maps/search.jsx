import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styles from '../../styles/Searchmaps.module.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3RldmVuMTk5NiIsImEiOiJja3RtdTZ5bzgwbXB4MnBvM3RycTZxZzJiIn0.w1LGUnZ-pNCW9fMARFt-TQ';

export default function Searchmaps() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-96, 37.8],
      zoom: 2,
    });
    map.current.on('load', () => {
      // Add an image to use as a custom marker
      map.current.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.current.addImage('custom-marker', image);
          // Add a GeoJSON source with 2 points
          map.current.addSource('points', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-77.03238901390978, 38.913188059745586],
                  },
                  properties: {
                    title: 'The Peninsula Chicago',
                    description:
                      'Occupying prime real estate on Chicago s coveted Magnificent Mile, The Peninsula Chicago combines Hong Kong s cosmopolitan flair with the Windy City s Midwestern charm. Travelers describe the guest rooms as comfortable thanks to their creamy color palette and plush furniture, not to mention their modern techie touches, like a bedside remote command station that controls the lights, television and room temperatures.',
                  },
                },
                {
                  // feature for Mapbox SF
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-122.414, 37.776],
                  },
                  properties: {
                    title: 'Four Seasons Resort Lanai',
                    description:
                      'This Four Seasons property attracts beach lovers. Positioned along a beautiful stretch of Hulopoe Bay sand overlooking the Pacific Ocean, this resort offers breathtaking ocean views, manicured grounds and top-notch customer service.',
                  },
                },
              ],
            },
          });

          // Add a symbol layer
          map.current.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': 'custom-marker',
              // get the title name from the source's "title" property
              'text-field': ['get', 'title'],
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-offset': [0, 1.25],
              'text-anchor': 'top',
            },
          });
        }
      );
    });
    map.current.on('click', ({ point }) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.current.queryRenderedFeatures(point, {
        layers: ['points'], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // Code from the next step will go here.
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map.current);
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h4>Choose filters:</h4>
        <label htmlFor="tid1" className={styles.filterInputs}>
          <span>Rating</span>
          <input id="tid1" type="text" placeholder="filter here" />
        </label>
        <label htmlFor="title2" className={styles.filterInputs}>
          <span>Amenties</span>
          <input id="title2" type="text" placeholder="filter here" />
        </label>
        <label htmlFor="title3" className={styles.filterInputs}>
          <span>Place</span>
          <input id="title3" type="text" placeholder="filter here" />
        </label>
      </div>
      <div className={styles.searchBar}>
        <input id="searchbar" type="text" placeholder="Search..." />
      </div>
      <div ref={mapContainer} className={styles.map}>
        Maps
      </div>
    </div>
  );
}
