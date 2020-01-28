"# urlalias" 
### Set up Instructions ###

* open terminal
* clone github repo 
	``` git clone https://github.com/Amanbg/urlalias.git ```
* go to ```urlalias``` directory (frontend server)
	* run ```npm install```
	* run ```bower install```
	* run ```node server.js```

* Make sure you have postgresql pre-installed
* open terminal

* type ```psql -U postgres```
* once you logged in 
	* type ```create database urlalias;```

* open another terminal for backend server
	* ```cd urlalias``` directory
	* ```cd urlalias-api```
	* run ```npm install```
	* run ```adonis migration:run```
	* run ```adonis serve --dev```

then open browser
* type ```localhost:3000/#!/```

### Application Functionality ###

* Get Url Shortened
	* In the input field, paste long url and hit **shorten url** button
	* you will get a shortcode, upon clicking on that shortcode, you will be redirected to original long url
