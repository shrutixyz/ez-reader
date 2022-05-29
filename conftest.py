from app import approute
import pytest

@pytest.fixture
def app():
    app = approute
    return app