const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressHbs = require('express-handlebars');

//cau hinh express-handlebars template
app.engine(
	'hbs',
	expressHbs.engine({
		layoutsDir: __dirname + '/views/layouts',
		defaultLayout: 'layout',
		extname: 'hbs',
	}),
);
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/html'));

//cau hinh parse DL gui len server theo phuong thuc POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//tra ve trang chu
app.get('/', (req, res) => res.render('index'));

//task1
app.use('/task1', require('./routes/task1Router'));
//task2
app.use('/task2', require('./routes/task2Router'));
//task3
app.use('/task3', require('./routes/task3Router'));
//task4
app.use('/task4', require('./routes/task4Router'));

//route: request/response
app.get('/task2', (req, res) => res.json(req.query));

app.post('/task2', (req, res) => {
	console.log(req.body);
});

//Xly loi 404
app.use((req, res) => {
	res.status(404).send('Request Not Found!');
});
//Xly loi 500
app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).send('Internal server error');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
