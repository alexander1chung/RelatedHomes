const models = require('./model');

const get13RelatedHouses = (req, res, callback) => {
    models.getRelatedHouses(req, res, callback);
};

const makeHouse = (req, res) => {
    models.createHouse(req, res);
};

const updateHouseProperties = (req, res) => {
    models.updateHouse(req, res);
};

const deleteHouse = (req, res) => {
    models.removeHouse(req, res);
};

module.exports = {
    get13RelatedHouses,
    makeHouse,
    updateHouseProperties,
    deleteHouse,
};
