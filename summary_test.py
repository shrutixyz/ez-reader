# test_hello.py
from summary import app

def test_summary():
    response = app.test_client().get('/')

    assert response.status_code == 200