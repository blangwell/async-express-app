const db = require('../models');

module.exports.getHome = async (req, res) => {
  try {
    const cannabis = await db.Cannabis.find();
    res.render('home', {cannabis: cannabis});
  } catch (err) {
    console.log(err);
    res.redirect('/');
    // res.status(500).send('There was an error querying the database : ', err);
  }
}

module.exports.getShow = async (req, res) => {
  try {
    const cannabis = await db.Cannabis.findById(req.params.id);
    res.render('show', {cannabis: cannabis})
  } catch (err) {
    console.log(err);
    res.redirect('/');
    // res.status(500).send('There was an error getting the show page', err)
  }
}

module.exports.getNew = (req, res) => {
  try {
    res.render('new');
  } catch (err) {
    console.log(err);
    res.redirect('/');
    // res.status(500).send(err);
  }
}

module.exports.postNew = async (req, res) => {
  console.log(req);
  try {
    await db.Cannabis.create({
      strain: req.body.strain,
      type: req.body.type
    });
    res.redirect('/')
  } catch (err) {
    console.log(err)
    res.redirect('/');
  }
}

module.exports.getUpdate = async (req, res) => {
  try {
    const strain = await db.Cannabis.findById(req.params.id);
    res.render('update', {strain})
  } catch (err) {
    console.log(err)
    res.redirect('/');

    // res.status(500).send(err);
  }
}

module.exports.putUpdate = async (req, res) => {
  try {
    await db.Cannabis.findByIdAndUpdate(req.params.id, {
      strain: req.body.strain,
      type: req.body.type
    })
    res.redirect(`/cannabis/${req.params.id}`)
  } catch (err) {
    console.log(err);
    res.redirect('/');
    // res.status(500).send(err);
  }
}