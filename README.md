# RESTifie
this API Justify text for 80 000 words per day.

| Request type  | URL        | Body              | Header        | Response                | Error      |
| ------------: | ---------: | ----------------: | ------------: | ----------------------: |-----------: |
| Post | api/justify | text/plain | token: String | text/plain text align | code:402 {error: "you have exceeded the daily limit of 80,000 words"} |
| Post | api/token | JSON {"email": "String"} | | JSON {"token": "String"} | code:403 {error: "this email already exists"}<br>code:403 {error:"Invalid email"} |
| Get | api/token   | Empty | token: String | JSON {"email": "String", "nb_word_justify_today": Integer}| |

<p>every Request can send error code:400 error: "Bad Request" or "Invalid email"</p>

<p>Request who need token can send error code:401 error: "Invalid token!"</p>
