const controller = {};
const { emotions } = require('../models/data');

controller.show = (req, res) => {
	let selectedEmotions = emotions.filter(item => item.title == req.query.emotion);
	console.log(selectedEmotions);
	let defaultQuotePath = selectedEmotions.length ? selectedEmotions[0].quotePath : '/task1/default.jpg';
	res.render('task1', { emotions, defaultQuotePath });
};

module.exports = controller;
