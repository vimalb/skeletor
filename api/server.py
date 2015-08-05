import os
import sys
sys.path.append(os.path.dirname(__file__))


from flask import Flask, request, send_from_directory, safe_join, Response
app = Flask(__name__)

import json
import dateutil.parser


@app.route("/api/test")
def sample():
    resp = {"Testing": "Hello world!"}
    return Response(json.dumps(resp), mimetype='application/json')

@app.route("/api/test/echo/<arg>", methods=['GET', 'PUT', 'DELETE', 'POST'])
def sample_echo(arg):
    if request.method in ['POST','PUT']:
        req = json.loads(request.get_data())
    else:
        req = {}
    resp = {"Testing Arg": arg,
            "Testing Method": request.method,
            "Testing Data": req}
    return Response(json.dumps(resp), mimetype='application/json')

    
if __name__ == "__main__":
    app.run('0.0.0.0', 3000, debug=True)

