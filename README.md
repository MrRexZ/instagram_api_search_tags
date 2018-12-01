# Instagram API Search Tags

A very simplistic frontend to display tags count grouped per tags from my experiment with React + Redux with Instagram API.


## Instructions to Run :

1.Perform Instagram API [Client-Side Authentication](https://www.instagram.com/developer/authentication/) to retrieve access token

That is, call https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token

Replace `CLIENT-ID` with the client ID located within this `config.js` in this project folder, or [create a new sandbox client](https://www.instagram.com/developer/clients/manage/) if your user don't have access to the existing client ID.
Redirect URI used for this example is `https://google.com`.
After the call, if successful, redirection will happen to `https://www.google.com/#access_token={XYZ}`, where `XYZ` is the access token.

2.Assign the access token to variable within `config.js` in this project, to variable `INSTA_ACCESS_TOKEN`.

3.Navigate to root of this project, execute `npm start` from terminal to star the app.



