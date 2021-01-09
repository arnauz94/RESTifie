const User = require('../models/user');

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function concat(arrayLine) {
    var result;
    for (var cptLine = 0; cptLine < arrayLine.length; cptLine++) {
        result += arrayLine[cptLine];
        if (result[result.length - 1] !== '\n') {
            result += '\n';
        }
    }
    return result;
}

module.exports = {

    justify(req, res) {
        const id = req.UserId;
        var result = "";
        var nbWord;
        var text = req.body.text;
        var arrayLine;

        if (text === undefined) {
            res.status(400).json({
                error: "email invalide"
            })
        }

        nbWord = text.match(/\S+/g).length;

        User.findById({ _id: id }).then((user) => {
            if (user.nbWord + nbWord > 80000) {
                res.status(402).json({
                    error: "vous avez depasser la limite quotidienne de 80 000 mots"
                })
                return;
            }
            arrayLine = text.match(/(?<Line>.{1,80})(?:\W|$)|\S{80}/g);
            result = concat(arrayLine);

            User.updateOne({ _id: id }, { $inc: { nbWord: nbWord } }).then((user) => {
                res.setHeader('content-type', 'text/plain');
                res.send(result);
            }).catch(() => {
                res.status(400).json({
                    error: "La syntaxe de la requete est erronee."
                })
            });

        }).catch(() => {
            res.status(400).json({
                error: "La syntaxe de la requete est erronee."
            })
        });
    }

};