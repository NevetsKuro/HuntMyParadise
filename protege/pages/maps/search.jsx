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
                {
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
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [35.4247978, 0.141363],
                  },
                  properties: {
                    title: 'La Mamounia',
                    description:
                      'La Mamounia has a knack of feeling fresh every time you stay, even if you stay a lot. It goes without saying that it’s probably the finest hotel in north Africa – certainly the most famous – and has been for ages. Everyone has stayed here and everyone has loved it, from Churchill and Hitchcock to Elton John and Gwyneth Paltrow. The service is sublime, the rooms a calm retreat filled with beautiful Moroccan touches (zellige tiles, intricate carved plasterwork), the views out over the prettiest gardens a balm to the hectic city. Food is king, too, with a brand-new patisserie courtesy of top pastry chef Pierre Hermé nicely rounding off the selection of restaurants. And don’t miss the spa – not only is it drop-dead gorgeous (as evidenced by the cover of this magazine, which was shot there), its traditional hammam experience will leave you floppy as a kitten, smooth as a baby and ready to take on the world.',
                  },
                },
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [31.2357087, 121.4862493],
                  },
                  properties: {
                    title: 'Waldorf Astoria Shanghai on the Bund',
                    description:
                      'Spread across two buildings—20 suites in the beautifully restored 1911 Shanghai Club, 252 rooms and suites in the newly built tower—this hotel is a magnificent homage to Shanghai’s swank European past. In addition to opulent colonial-style suites (poster beds, walk-in closets, claw-foot tubs), the old building, now called the Waldorf Astoria Club, has a jaw-dropping 110-foot-long bar with Bund views. Rooms are neoclassical—pale-green linen wallpaper, matching silk bedcovers, and carpets with swirling flower motifs—but have all the mod cons, as well as a bathroom where a TV is embedded in the mirror and the Japanese-style toilet has water jets. ',
                  },
                },
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [41.0665096, 29.0177178],
                  },
                  properties: {
                    title: ' Raffles Istanbul',
                    description:
                      ' Though it’s a sleek, modern hotel with impeccable high-tech hardware in its 185 rooms, Raffles’ address in Istanbul still channels the city’s Byzantine charm and mystery. Chalk it up to the gorgeous views from almost every room and lush Turkish textiles, handicrafts (like pierced metal-and-glass similar to those found in the Blue Mosque), and dramatic, oversized framed photos of its most famous sites. Set in the central Besiktas neighborhood on the European side, the Raffles puts guests right on top of an array of shopping and dining options, and you can see the Bosphorus from many of the rooms.',
                  },
                },
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [43.14234, 11.1276169],
                  },
                  properties: {
                    title: ' Relais Borgo Santo Pietro',
                    description:
                      ' The pilgrims going to Rome who stopped at the Borgo Santo Pietro more than 800 years ago wouldn’t recognize the place today. Danish owners Claus and Jeanette Thottrup have restored the villa and added chandeliers and beautiful trompe l’oeils to the extensive public areas and 20 guest rooms. The effect is elegant, with useful modern touches: Oil paintings open to reveal flat-screen TVs, an extensive DVD library is on hand, and claw-foot tubs look plucked from an Italian castle. Rose-lined pathways lead to secluded benches, a lovely orto (vegetable garden) that provides the restaurant with its greens, and just-planted fruit orchards. Meo Modo restaurant, helmed by executive chef Andrea Mattei, was graced with a Michelin star in 2015.',
                  },
                },

                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [46.4972479, 9.8407597],
                  },
                  properties: {
                    title: 'Badrutt s Palace',
                    description:
                      ' Badrutt’s Palace doesn’t skimp on extravagance, possessing all the perks one expects from a St. Moritz hotel. The glamorous alpine hideaway overlooks the ski resort’s famous lake, and has been the go-to destination for celebrities and royalty since it first opened in 1896: Alfred Hitchcock became a loyal guest after spending his honeymoon there, and even an elephant once graced its halls. Complete with towers and turrets, the snowcapped hotel feels straight out of a winter fairytale—with the views to boot—and the rooms and suites provide an upscale, toasty retreat after a day on the slopes (hot water bottles are tucked under the sheets each night). There’s a restaurant to fit every mood (11 in total) and nightcaps should be imbibed at the Polo Bar, a popular spot among locals. Time your stay wisely: the New Year’s bashes, we hear, are legendary.',
                  },
                },
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [55.6787261, 12.566462],
                  },
                  properties: {
                    title: ' Hotel SP34',
                    description: 'a lovely hotel',
                  },
                },

                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [46.3153419, 5.5483738],
                  },
                  properties: {
                    title: ' Baur au Lac',
                    description:
                      ' Opened in 1844 and operated by the same family ever since, this property has hosted the likes of Joan Miró and Plácido Domingo. Set in a garden near the Bahnhofstrasse shopping drag (Zurichs equivalent of Fifth Avenue), the hotel looks right onto Lake Zurich and the Alps—but thats not the only nice view. Inside, rooms tastefully mix Art Deco, Louis XVI, and Regency styles, and are individually decorated in neutral tones with red, purple, and teal accents—though, if youre lucky, youll get a room with a balcony on the water. If you re keen to splurge more than you have, the Michelin-starred Pavillon is worth the indulgence.',
                  },
                },

                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [41.85003, -87.65005],
                  },
                  properties: {
                    title:
                      ' The Gwen, a Luxury Collection Hotel, Michigan Avenue Chicago',
                    description:
                      ' The Gwen is named for Gwen Lux, a Chicago-born, pioneering female sculptor of the 20th century, and a fitting icon for the Chicago installment of Marriott’s Luxury Collection, which aims to make each hotel reflect the character of its place. The Gwen, located on the city’s famed Magnificent Mile and in the landmark McGraw-Hill building—with its 1928 facade wholly preserved—does just that. Art deco interiors with taupe- and gold-hued rooms emanate old-fashioned glamour and chic modernity all at once. The rooftop bar and restaurant, Upstairs at the Gwen, is buzzy as can be when the weather is nice, and your best shot for mingling with a crowd beyond the hotel’s typical guests on business travel.',
                  },
                },

                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [39.9145988, 116.4077835],
                  },
                  properties: {
                    title: ' Waldorf Astoria Beijing',
                    description:
                      ' The Waldorf Astoria Beijing is a 2014 arrival in a gold-box building in the Wangfujing neighborhood. When you pull up to the entrance, youre greeted by an exterior resembling one of Beijings temple palaces—but the interior is pure, intimate hospitality. Instead of a flashy, bustling lobby, the concierge desk sits in a space surrounded by high, gray walls painted with flowers, while bolder art pieces surprise you as you turn the hallways to your room. The 171 rooms delight with soft teal and tangerine accents and views across heritage rooftops.',
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

    // references -- https://docs.mapbox.com/help/tutorials/building-a-store-locator/

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
          `<h3>${feature.properties.title}<span class="hotelView" data-hotel-id="12012">View</span></h3><p>${feature.properties.description}</p>`
        )
        .addTo(map.current);
      document.querySelector('.hotelView').addEventListener(
        'click',
        (e) => {
          console.log(
            'hotel clicked',
            e.currentTarget,
            e.currentTarget.getAttribute('data-hotel-id')
          );
        },
        false
      );
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
