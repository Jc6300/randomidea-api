const express = require("express");
const router = express.Router();

const ideas = [
	{
		id: 1,
		text: "Positive NewsLetter, a newsletter that only shares positive, uplifting,news",
		tag: "Technology",
		username: "TonyStark",
		date: "2023-01-02",
	},
	{
		id: 1,
		text: "Positive NewsLetter, a newsletter that only shares positive, uplifting,news",
		tag: "Technology",
		username: "TonyStark",
		date: "2023-01-02",
	},

	{
		id: 3,
		text: "ATM location app which lets you know where the closest ATM is and if it is in service",
		tag: "Software",
		username: "BruceBanner",
		date: "2023-01-02",
	},
];

router.get("/api/ideas", (req, res) => {
	res.json({ success: true, data: ideas });
});
// Get single idea
router.get("/api/ideas", (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return (
			res / status(404).json({ success: false, error: "Resource not found" })
		);
	}
});
// Add an idea
router.post("/", (req, res) => {
	const idea = {
		id: ideas.length + 1,
		text: req.body.text,
		tag: req.body.tag,
		username: req.body.username,
		date: new Date().toISOString().slice(0, 10),
	};
	ideas.push(idea);
	res.json({ success: true, data: idea });
	res.send(req.body.text);
});

//Update idea
router.put("/:id", (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: "Resource not found" });
	}
	idea.text = req.body.text || idea.text;
	idea.tag = req.body.tag || idea.tag;

	res.json({ success: true, data: idea });
});
// Delete idea
router.delete("/:id", (req, res) => {
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: "Resource not found" });
	}

	const index = ideas.indexOf(idea);
	ideas.splice(index, 1);
	res.json({ success: true, data: {} });
});

module.exports = router;
