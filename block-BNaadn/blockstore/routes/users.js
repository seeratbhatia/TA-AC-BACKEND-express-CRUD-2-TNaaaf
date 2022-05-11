var express = require('express');

var router = express.Router();
var User = require('../models/User')

router.get('/', (req, res) => {
    //handle action
    res.render('users.ejs')
});

router.get('/new', (req, res) => {
    // render the create form
    res.render('users.ejs')
});

router.post('/', (req, res) => {
    // capture the form
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    })
});

router.get('/id', (req, res) => {
    // single user detail
    res.render('singleUser.ejs')
});

router.get('/id/edit', (req, res, next) => {
    var id = req.params.id;
    user.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editUser', { user })
    })         if(err) return next(err);


router.put('/id', (req, res, next) => {
    // capture the data from the update form
    var id = req.params.id;
    user.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users')
    }) 
});

router.get('/id/delete', (req, res, next) => {
    // delete the user
    var id = req.params.id;
    user.findByIdAndDelete(id, (err, deletedUser) => {
        if(err) return next(err);
        res.redirect('/users')
    }) 

});
module.exports = router;