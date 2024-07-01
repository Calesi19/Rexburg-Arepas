from sqlalchemy import Column, Integer, String
from .main import Base

class Order(Base):
    __tablenam__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

