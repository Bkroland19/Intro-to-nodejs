const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
const courses = [
	{ id: 1, name: "math" },
	{ id: 2, name: "physics" },
];
app.get("/", (req, res) => {
	res.send("Hello Roland");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.post("/api/courses", (req, res) => {
	// if (!req.body.name || req.body.name < 3) {
	// 	//400 bad request

	// 	res.status(400).send("Bad request");
	// 	return;

	// }

    //validation with joi
    const schema = {
        name=Joi.string().min(3).required()
    };

    const result =Joi.validate(req.body,schema);
    console.log(result);

	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};
	course.push(course);
	res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
	console.log(`Listening on port ${port}`);
});
