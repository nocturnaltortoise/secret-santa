var express = require('express');
var mongoose = require('mongoose');
var User = require('../model/User.js');
var Group = require('../model/Group.js');

module.exports = (router) => {
    router.get('/group/search', (req, res, next) => {
      if (typeof(req.query.user_query) == 'undefined') {
        res.render('group-search');
      }
      else {
        Group.find({'name': 'Mistletoe'}, (err, groups) => {
          if (err) {
            console.error(err);
            res.send("Something has gone wrong. Try again later.");
          }
          else {
            console.log(groups);
            res.send('The query you typed in was: '+req.query.user_query);
          }
        });
      }
    });

    router.get('/group/new', (req, res, next) => {
        res.render('group-new');
    });

    router.post('/group/create', (req, res, next) => {
        var params = req.body;
        var user = User.findById(params.userId, (err, user) => {
            var group = new Group({
                name: params.name,
                members: [user]
            });

            group.save((err, group) => {
                if(err){
                    res.redirect('error');
                    console.error(err);
                }else{
                    res.redirect('/group/' + group._id);
                }
            });
        });
    });

    router.get('/group/:id', (req, res, next) => {
        var groupId = req.params.id;
        var group = Group.findById(groupId, (err, group) => {
            if(err){
                res.redirect('error');
            }else{
                User.find()
                    .where('_id')
                    .in(group.members)
                    .exec((err, members) => {
                        if(err){
                            console.error(err);
                        }else{
                            res.render('group', { name: group.name, members: members, id: groupId });
                        }
                    });
            }
        });

    });

    //Another route for the /group/search containing params here later...
    // router.get('/group/search/:user_query', (req, res, next) => {
      // res.send('The query you typed in was: '+req.body.user_query);
    // });
}
