import { Fish } from '../models/fish.js'

function index(req, res){
  Fish.find({})
  .then(fishes => {
    res.render('fishes/index', {
      fishes: fishes,
      title: "Fisshees",
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	// req.body.tasty = !!req.body.tasty
  Fish.create(req.body)
  .then(fish => {
    res.redirect('/fishes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function newFish(req, res){
  res.render("fishes/new", {
    title: "Add Fishes"
  })
}

export {
  index,
  create,
  newFish as new,
}