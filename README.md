# RESTifie

| Request type  | URL         | Body                     | Header        | Response                | Error      |
| ------------: | ---------:  | -----------------------: | ------------: | ----------------------: |-----------: |
| Post          | api/justify | text/plain               | token: String | text/plain              | code:402 {error: "vous avez depasser la limite quotidienne de 80 000 mots"} |
| Post          | api/token   | JSON {"email": "String"} |          | JSON {"token": "String"} | code:403 {error: "cette email existe deja"}<br>code:403 {error:"email invalide"} |
| Get           | api/token   | Empty                    | token: String | JSON {"email": "String", "nb_mots_justifier_aujourdhui": Integer}|      |

<p>every Request can send error code:400 error: "La syntaxe de la requete est erronee" or "email invalide"</p>

<p>Request who need token can send error code:401 error: "Invalid token!"</p>
