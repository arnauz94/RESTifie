# RESTifie

| Request type  | URL         | Body                     | Header        | Response  |
| ------------: | ---------:  | -----------------------: | ------------: | -----: |
| Post          | api/justify | text/plain               | token: String | text/plain
| Post          | api/token   | JSON {"token": "String"} |               | JSON {"token": "String"}
| Get           | api/token   |                          | token: String |