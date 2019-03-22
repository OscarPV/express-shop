//const Product = require('../models/product');

// ¿Meterlo en clase?

exports.index = (req, res, next) => {
    console.log(req);
};

exports.create = (req, res, next) => {
    console.log(req.body.folio);
    res.render('fcs/create');
};

exports.store = (req, res, next) => {
    console.log(req);
};

exports.edit = (req, res, next) => {
    console.log(req);
};

exports.update = (req, res, next) => {
    console.log(req);
};

exports.destroy = (req, res, next) => {
    console.log(req);
};