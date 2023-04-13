let db = require("../Database/db.json");
let num = 0;

module.exports = {
	getNames: (req, res) => {
		res.status(200).send(db);
	},
	getNum: (req, res) => {
		res.status(200).send({ num });
	},
	deleteName: (req, res) => {
		let { index } = req.params;
		console.log(index);
		db.splice(+index, 1);
		res.status(200).send(db);
	},
	addName: (req, res) => {
		let { name } = req.body;
		db.push(name);
		res.status(200).send(db);
    },
    updateNum: (req, res) => {
        let { type } = req.body;
        if (type === "plus") {
            num++
        } else if (type === "minus") {
            num--
        }
        res.status(200).send({num});
    }
};
