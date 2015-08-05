import os
import sys
sys.path.append(os.path.dirname(__file__))

import json

import api.server

client = api.server.app.test_client()

def jget(url):
    response = client.get(url)
    return response.status_code, json.loads(response.data)
    
def jput(url, data):
    response = client.put(url, data=json.dumps(data))
    return response.status_code, json.loads(response.data)

def jpost(url, data):
    response = client.post(url, data=json.dumps(data))
    return response.status_code, json.loads(response.data)

def jdelete(url):
    response = client.delete(url)
    return response.status_code, json.loads(response.data)


def test_sample():
    url = '/api/test'
    status, resp = jget(url)
    assert status == 200
    assert resp == {"Testing": "Hello world!"}
    

def test_sample_echo():
    url = '/api/test/echo/123'

    status, resp = jget(url)
    assert status == 200
    assert resp["Testing Arg"] == "123"
    assert resp["Testing Method"] == "GET"
    assert resp["Testing Data"] == {}
    
    status, resp = jput(url, {'hello':'world'})
    assert status == 200
    assert resp["Testing Arg"] == "123"
    assert resp["Testing Method"] == "PUT"
    assert resp["Testing Data"] == {'hello':'world'}

    status, resp = jpost(url, {'hello':'world'})
    assert status == 200
    assert resp["Testing Arg"] == "123"
    assert resp["Testing Method"] == "POST"
    assert resp["Testing Data"] == {'hello':'world'}

    status, resp = jdelete(url)
    assert status == 200
    assert resp["Testing Arg"] == "123"
    assert resp["Testing Method"] == "DELETE"
    assert resp["Testing Data"] == {}

