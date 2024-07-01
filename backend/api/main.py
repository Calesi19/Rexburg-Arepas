from fastapi import FastAPI 
from pydantic import BaseModel
from sqlalchemy.future import select
from sqlalchemy.orm import Session

app = FastAPI()

# Model
class Order(BaseModel):
    arepas_plain: int
    arepas_chicken: int
    arepas_chicken_sauce: int
    arepas_sauce: int
    order_comments: str
    customer_phone: str

app.post("/orders")
def create_order(order: Order):
    return {"message": "Order has been created", "order": order}

app.get("/orders")
def get_all_orders()
    return {"message": "Orders has been created."}


# Health Check
app.get("/health")
def health():
    return {"status": "ok"}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000, reload=True)
