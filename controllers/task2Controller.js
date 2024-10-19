const controller = {};

controller.showDefault = (req, res) => {
	res.render('task2');
};

controller.showJars = (req, res) => {
	let salary = isNaN(req.body.salary) ? 0 : parseFloat(req.body.salary);
	res.locals.jar55 = (salary / 100) * 55;
	res.locals.jar10 = (salary / 100) * 10;
	res.locals.jar5 = (salary / 100) * 5;
	res.render('task2');
};

module.exports = controller;
