//AM Coder - React + Express API #2 - Making CRUD Endpoints

require("dotenv").config()
const Note = require("../models/notes")
const {Router} = require("express")
const router = Router()

router.get("/", async (req, res) => {
    res.json(await Note.find({}))
})

//create route
router.post("/", async (req, res) => {
  res.json(await Note.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Note.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Note.findByIdAndRemove(req.params.id));
});

module.exports = router