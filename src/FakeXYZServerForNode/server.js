const express = require('express');
const Canvas = require('canvas');
const { createCanvas, loadImage, registerFont } = require('canvas')
const path = require('path')
var cors = require('cors');

const app = express();
const port = 5000;

registerFont(path.join(__dirname, '/fonts/Anton-Regular.ttf'), { family: 'Anton' })

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.get('/fake/:z/:y/:x', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    const z = parseInt(req.params.z)

    img = generateXYZTileImage(x,y,z);
    res.set('content-type', "image/png");

    res.send(img);
})

app.listen(port, () => {
  console.log(`FakeXYZTile Server listening at http://localhost:${port}`)
})

function generateXYZTileImage(x,y,z) {
    let canvas = Canvas.createCanvas(256, 256);
    let context = canvas.getContext("2d");

    context.fillStyle = 'rgba(255,255,255,0.5)';
    context.fillRect(1, 1, 256, 256);

    context.font = "32px Anton";
    context.fillStyle = 'rgba(0,0,255,0.5)';
    context.fillStyle = 'black';
    context.fillText(`X:${x}, Y:${y}, Z:${z}`, 16, 128);
    
    // const b64 = canvas.toDataURL();
    const blob = canvas.toBuffer("image/png");
    // console.log(blob)
    return blob;
}