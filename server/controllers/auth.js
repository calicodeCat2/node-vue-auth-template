const knex = require("../db/knex.js");
const wombat = require("../wombat.js");
const middleware = require("../config/middleware.js");
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')


module.exports = {
  hello: (req, res) => {
    res.send("Hello World!");
  },

  register: (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(401).send("Fields not sent");
    } else {
      bcrypt.hash(req.body.password, saltRounds, function (err, hashedPassword){
        knex('users')
        .insert({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword
        })
        .then(newuser => res.json(newuser));
      })
    }
  },
  login: (req, res) => {
    if (!req.body.password) {
      return res.status(400)
    } else {
      knex("users")
      .where("email", req.body.email)
      .then(result => {
        if (!result.length) {
          res.status(400)
        } else {
          let user = result[0]
          bcrypt.compare(req.body.password, user.password, (err, isOkay) => {
            if (err) console.err(err)
            if (isOkay) {
              let {password, ...safeUser} = user
              jwt.sign(safeUser, wombat, (err, token) => {
                res.json({
                  user: safeUser,
                  token
                })
              })
            } else {
              res.sendStatus(400)
            }
          })
        }
      });

    }
  }
};
