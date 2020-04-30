const client = require('../database/connection.js');

const getRelatedHouses = (req, res, callback) => {
    const { location } = req.params;
    const queryRelatedHouses = 'select * from houses where location = $1 limit 13;';
    client.query(queryRelatedHouses, [location])
        .then((relatedHomes) => {
            callback(relatedHomes.rows);
            res.send(relatedHomes.rows);
        })
        .catch((e) => res.send([]));
};

const createHouse = (req, res) => {
    const queryCreateHouse = 'INSERT INTO houses'
        + '(photo, location, beds, rating, description, price)'
        + 'values ($1, $2, $3, $4, $5, $6)';

    const {
        photo,
        location,
        beds,
        rating,
        description,
        price,
    } = req.body;

    const queryParameters = [
        photo,
        location,
        beds,
        rating,
        description,
        price,
    ];

    client.query(queryCreateHouse, queryParameters)
        .then(() => {
            res.end();
        });
};

const updateHouse = (req, res) => {
    const queryUpdateHouse = 'UPDATE houses ';
    const propertyChanges = () => {
        let outputString = 'SET ';
        for (const key in req.body) {
            outputString += `${key} = '${req.body[key]}', `;
        }
        // need to remove last comma
        const outputArr = outputString.split('');
        outputString = outputArr.slice(0, outputString.length - 2).join('');
        return outputString;
    };

    const indicateHouse = ` WHERE id = ${req.params.houseId}`;
    const combinedStrings = queryUpdateHouse + propertyChanges() + indicateHouse;

    client.query(combinedStrings)
        .then(() => {
            res.send('house was updated');
        });
};

const removeHouse = (req, res) => {
    const queryDelete = `DELETE from houses where id = ${req.params.houseId}`;
    client.query(queryDelete)
        .then(() => {
            res.send('house was deleted');
        });
};

module.exports = {
    getRelatedHouses,
    createHouse,
    updateHouse,
    removeHouse,
};
