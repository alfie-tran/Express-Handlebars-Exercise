const controller = {};
const { zodiacs } = require('../models/data');

controller.showList = (req, res) => {
	res.render('task4', { zodiacs });
};
controller.showDetails = (req, res) => {
	let selectedZodiacs = zodiacs.filter(item => item.name == req.params.name);
	res.locals.zodiacs = selectedZodiacs.length ? selectedZodiacs[0] : zodiacs[0];
	res.render('task4-details');
};
module.exports = controller;
