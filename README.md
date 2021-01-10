# RESTifie

| Request type  | URL         | Body                     | Header        | Response                | Error      |
| ------------: | ---------:  | -----------------------: | ------------: | ----------------------: |-----------: |
| Post          | api/justify | text/plain               | token: String | text/plain              | code:402 {error: "vous avez depasser la limite quotidienne de 80 000 mots"} code:400 {error: "La syntaxe de la requete est erronee."}|
| Post          | api/token   | JSON {"email": "String"} | Empty         | JSON {"token": "String"} |      |
| Get           | api/token   | Empty                    | token: String | JSON {"email": "String", "nb_mots_justifier_aujourdhui": Integer}|       |