// require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const cluster = require('cluster');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cpuCount = require('os').cpus().length;
const redis = require('redis');
const PORT = 5000;

const template = require('./template');
const cors = require('cors');
const redisclient = redis.createClient();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

if (cluster.isMaster) {

    console.log(`Master ${PORT}`);

    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.id} died`);
    });

    
} else {

    const getCache = (req, res) => {
        const { location } = req.params;
        redisclient.get(location, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                controller.get13RelatedHouses(req, res, (response) => {
                    redisclient.setex(location, 3600, JSON.stringify(response));
                });
            }
        });
    };
    
    app.use('/', express.static(path.join(__dirname, '../client/dist')));
    
    app.get('/relatedProperties/:location', (req, res) => {
        getCache(req, res);
    })
    
    app.get('*', (req, res) => {
        res.send(template({}));
    })

    // make house
    app.post('/houses/', (req, res) => {
        controller2.makeHouse(req, res);
    });

    // update house
    app.put('/houses/:houseId/', (req, res) => {
        controller2.updateHouseProperties(req, res);
    });

    // delete house
    app.delete('/houses/:houseId/', (req, res) => {
        controller2.deleteHouse(req, res);
    });

    console.log('Worker %d running!', cluster.worker.id);

    app.listen(PORT, () => {});

}


// app.listen(PORT, () => console.log("PORT 5000"));