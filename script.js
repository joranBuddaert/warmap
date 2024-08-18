const key = 'ZwiVDyPineUd7JPn6kJt';
const styleJson = `https://api.maptiler.com/maps/83fa4370-3fc3-4a6e-a09e-fab1403159be/style.json?key=${key}`;
const dates = document.querySelectorAll('.date h2');

const attribution = new ol.control.Attribution({
  collapsible: false,
});

const map = new ol.Map({
  target: 'map',
  controls: ol.control.defaults.defaults({ attribution: false }).extend([attribution]),
  view: new ol.View({
    constrainResolution: true,
    center: ol.proj.fromLonLat([3, 48.5]),
    zoom: 5.8,
  }),
});

olms.apply(map, styleJson);

let vectorLayers = [];
let flagLayers = [];
let flagLocations = [];

// Functie om vlaggen te maken op een specifieke locatie
function createFlag(center) {
  const size = 20000;

  const topRectangle = new ol.Feature({
    geometry: new ol.geom.Polygon([
      [
        [center[0] - size / 2, center[1] + size / 2],
        [center[0] + size / 2, center[1] + size / 2],
        [center[0] + size / 2, center[1] + size / 6],
        [center[0] - size / 2, center[1] + size / 6],
        [center[0] - size / 2, center[1] + size / 2],
      ],
    ]),
  });

  const middleRectangle = new ol.Feature({
    geometry: new ol.geom.Polygon([
      [
        [center[0] - size / 2, center[1] + size / 6],
        [center[0] + size / 2, center[1] + size / 6],
        [center[0] + size / 2, center[1] - size / 6],
        [center[0] - size / 2, center[1] - size / 6],
        [center[0] - size / 2, center[1] + size / 6],
      ],
    ]),
  });

  const bottomRectangle = new ol.Feature({
    geometry: new ol.geom.Polygon([
      [
        [center[0] - size / 2, center[1] - size / 6],
        [center[0] + size / 2, center[1] - size / 6],
        [center[0] + size / 2, center[1] - size / 2],
        [center[0] - size / 2, center[1] - size / 2],
        [center[0] - size / 2, center[1] - size / 6],
      ],
    ]),
  });

  // Maak vectorlagen voor elke gekleurde rechthoek
  const topLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [topRectangle],
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(0, 0, 0, 1)', // Zwarte 
      }),
    }),
  });

  const middleLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [middleRectangle],
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 0, 0, 1)', // Rood
      }),
    }),
  });

  const bottomLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [bottomRectangle],
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 206, 0, 1)', // geel
      }),
    }),
  });

  
  return [topLayer, middleLayer, bottomLayer];
}

// Vlaggen updaten
function updateFlags() {
  // Verwijder alle bestaande vlaggenlagen op de kaart
  flagLayers.forEach(layer => map.removeLayer(layer));
  flagLayers = [];

  //verwijder alle datums
  dates.forEach(date => {
    date.style.display = 'none';
  });

  // Nieuwe vlaggen toevoegen
  flagLocations.forEach(location => {
    const layers = createFlag(ol.proj.fromLonLat(location));
    layers.forEach(layer => {
      map.addLayer(layer);
      flagLayers.push(layer);
    });
  });
}

olms.apply(map, styleJson).then(() => {
  // Vectorlagen creëren
  const layer1 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/d6ef6371-a160-4ff2-9af6-f814ebea6ce9/features.json?key=${key}`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer2 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/f554258d-71c2-471f-a5c5-2b2ea81d5b3f/features.json?key=${key}`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer3 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/2bd8070f-7b9b-4ccb-b5f8-a1bfa574eb0d/features.json?key=${key}`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });
  const layer4 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/4738b2e3-02d3-447b-9a69-47429dd3330f/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer5 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/8084447c-1d76-43ef-bd3f-150e99750335/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer6 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/e76578c9-2dff-4603-ac2b-34bc1bd4524c/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });
  const layer7 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/ea08b206-b92c-4bdd-a7a4-2adcab5e8182/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer8 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/38f5a784-4f73-4418-8979-f0c1b3eccb59/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  const layer9 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/05c5e386-6242-4c40-91a4-637640d458c1/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });
  const layer10 = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: `https://api.maptiler.com/data/7c515394-60df-4761-8296-73307252f989/features.json?key=ZwiVDyPineUd7JPn6kJt`,
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'brown',
        width: 3,
      })
    }),
  });

  vectorLayers = [layer1, layer2, layer3, layer4, layer5, layer6,layer7, layer8, layer9, layer10];
});

function toggleLayer(layerIndex) {
  // Verwijder alle vlaggenlagen van de kaart
  flagLayers.forEach(layer => map.removeLayer(layer));
  flagLayers = [];

  // Verwijder alle vectorlagen behalve de geselecteerde
  vectorLayers.forEach((layer, index) => {
    if (index !== layerIndex) {
      map.removeLayer(layer);
    }
  });

  

  // Update de vlaggenlocaties
  switch (layerIndex) {
    case 0:
      flagLocations = [
        [4.5, 50],
        [4.9, 50.6],
        [4.2, 51.5]
      ];
      break;
    case 1:
      flagLocations = [
        [4, 51],
        [2.3, 50.2],
        [4, 49.7]
      ];
      break;
    case 2:
      flagLocations = [
        [5.7, 49.6],
        [2.4, 50.1],
        [2.7, 50.85]
      ];
      break;
    case 3:
      flagLocations = [
        [5.3, 49.7],
        [4.2, 49.1],
        [1.6, 49.2]
      ];
      break;
    case 4:
      flagLocations = [
        [4, 45],
        [0, 45.2],
        [7.3, 44.6]
      ];
      break;
    case 5:
      flagLocations = [
        [-0.3, 49.1],
        [-1.5, 49.3],
        [-1, 49.2]
      ];
      break;
    case 6:
      flagLocations = [
        [0.4, 49.2],
        [-1, 48.6],
        [-0.7, 48.95]
      ];
      break;
    case 7:
      flagLocations = [
        [-1, 47],
        [1.3, 48],
        [-0.4, 48.7]
      ];
      break;
    case 8:
      flagLocations = [
        [-1, 47],
        [4.2, 48],
        [2, 49.2]
      ];
      break;
    case 9:
      flagLocations = [
        [6.3, 50],
        [1.7, 50.9],
        [3.8, 51.18]
      ];
      break;
    case 10:
      flagLocations = [
        [4, 51],
        [2.3, 50.2],
        [4, 49.7]
      ];
      break;
          
  }
  updateFlags();

  if (map.getLayers().getArray().includes(vectorLayers[layerIndex])) {
    map.removeLayer(vectorLayers[layerIndex]); // Verwijder als het al zichtbaar is
    // Verwijder alle vlaggenlagen van de kaart
    flagLayers.forEach(layer => map.removeLayer(layer));
    flagLayers = [];
    dates.forEach(date => {
      date.style.display = 'none';
    });
    dates[10].style.display = 'block';
  } else {
    map.addLayer(vectorLayers[layerIndex]); // Voeg toe als het niet zichtbaar is
    dates[layerIndex].style.display = 'block';
  

  }

}

document.getElementById('toggleLayer1Btn').addEventListener('click', () => toggleLayer(0));
document.getElementById('toggleLayer2Btn').addEventListener('click', () => toggleLayer(1));
document.getElementById('toggleLayer3Btn').addEventListener('click', () => toggleLayer(2));
document.getElementById('toggleLayer4Btn').addEventListener('click', () => toggleLayer(3));
document.getElementById('toggleLayer5Btn').addEventListener('click', () => toggleLayer(4));
document.getElementById('toggleLayer6Btn').addEventListener('click', () => toggleLayer(5));
document.getElementById('toggleLayer7Btn').addEventListener('click', () => toggleLayer(6));
document.getElementById('toggleLayer8Btn').addEventListener('click', () => toggleLayer(7));
document.getElementById('toggleLayer9Btn').addEventListener('click', () => toggleLayer(8));
document.getElementById('toggleLayer10Btn').addEventListener('click', () => toggleLayer(9));


