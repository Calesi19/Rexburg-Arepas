from fastapi import FastAPI 
from pydantic import BaseModel


app = FastAPI()


# Model
class Order(BaseModel):
    arepas_plain: int
    arepas_chicken: int
    arepas_chicken_sauce: int
    arepas_sauce: int
    order_comments: str
    customer_phone: str

app.post("/predict")
def create_order(order: Order):
    return {"message": "Order has been created", "order": order}









# Health Check

app.get("/health")
def health():
    return {"status": "ok"}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000, reload=True)
