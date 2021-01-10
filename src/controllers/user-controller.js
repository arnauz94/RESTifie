const User = require('../models/user');
const jwt = require('jsonwebtoken');
const validator = require("email-validator");

module.exports = {
    
    read (req,res) {
        const id = req.UserId;
        
        User.findById({_id:id}).then( (user) => {
            res.status(200).json({
                    email: user.email, nb_mots_justifier_aujourdhui: user.nbWord
            });
        }).catch( () => {
            res.status(400).json({
                error: "La syntaxe de la requete est erronee."
            })
        });
    },
    create(req,res){
        const email = req.body.email

        if (!validator.validate(email)) {
            res.status(403).json({
                error:"email invalide"
            })
            return ;
        } 
        const user = new User({email});
        user.save().then(() => {
            res.status(200).json({
                token: jwt.sign(
                    { UserId: user._id },
                    'iyU0QAcBHcqScHD4wwWB0Vum5CobZA65eEVa0uMLT7',
                    { expiresIn: '740h' }
                )
            });
        }).catch((error) => {
            let err = error
            if (error.code === 11000) {
                err = "cette email existe deja"
            } 
            res.status(403).json({
                error: err
            })
            
        });
    },

};