Overview:
	This is a skeleton for a generic responsive web + mobile app featuring:
	* AngularJS / Material Design web app
	* Cordova / Ionic mobile app
	* Node / Express web server + proxy to API server
	* Python / Flask API server

Setup:
	# export APP_URL=http://your.local.domain
	# export API_URL=http://localhost:3000
	# pip install requirements.txt
	# npm install
	# cd mobileapp; cordova prepare



Running Locally:
	API Server (port 3000):
		# python -m api.server
	Web Server (port 5000):
		# node web.js
	Mobile App Debug Server (port 4000):
		# node mobile.js


Running Tests:
    # nosetests --nocapture api.tests
    
