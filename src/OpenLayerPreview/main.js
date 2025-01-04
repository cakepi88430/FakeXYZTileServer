import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageTile from 'ol/source/ImageTile';

var OSMLayer = new TileLayer({
  source: new OSM()
});

var FakeXYZTileLayerForNode = new TileLayer({
  title: "FakeXYZTileNode",
  source: new ImageTile({ url: 'http://127.0.0.1:5000/fake/{z}/{y}/{x}' }),
});

const map = new Map({
  target: 'map',
  layers: [
    OSMLayer,
    FakeXYZTileLayerForNode
  ],
  view: new View({
    center: [121, 23.5],
    projection: 'EPSG:4326',
    zoom: 8
  })
});
