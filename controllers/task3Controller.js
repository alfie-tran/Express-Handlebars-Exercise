const controller = {};
const { categories, products } = require('../models/data');

controller.show = (req, res) => {
	res.locals.categories = categories;
	res.locals.products = req.query.category ? products.filter(item => item.category == req.query.category) : products;
	res.render('task3');
};

module.exports = controller;
