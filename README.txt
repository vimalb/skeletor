Overview:
	This is a skeleton for a generic responsive web + mobile app featuring:
	* AngularJS / Material Design web app
	* Cordova / Ionic mobile app
	* Node / Express web server + proxy to API server
	* Python / Flask API server

Setup:
	# export WWW_SERVER_URL=http://ip.add.re.ss:5000
	# export API_URL=http://ip.add.re.ss:3000
	# export MOBILE_SERVER_URL=http://ip.add.re.ss:5000
	# pip install requirements.txt
	# npm install
	# cd mobileapp
		# npm install
		# cordova prepare



Running Locally:
	API Server (port 3000):
		# python -m api.server
	Web Server (port 5000):
		# node web.js
	Mobile App Debug Server (port 4000):
		# node mobile.js


Running Tests:
	# nosetests --nocapture api.tests
    
Running Mobile App on Android Phone:
	Web Server (port 5000):
		# node web.js
	Build and Install App:
		# cordova run android
