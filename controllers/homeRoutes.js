const router = require('express').Router();
const { Patient, Provider } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    let loggedIn = req.session.loggedIn
    console.log("hi")
    let data = await Provider.findAll({
      include: [
        { model: Patient, as: "user" }
      ]
    })
    let serializedData = data.map(provider => provider.get({ plain: true }))
    res.render("provider", { data: serializedData, loggedIn })
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/newuser', (req, res) => {
  res.render('newAccount')
})
router.get('/dashboard', withAuth, (req, res) => {
  res.render("dashboard")
})
module.exports = router;