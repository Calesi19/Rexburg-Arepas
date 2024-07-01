from sqlalchemy.future import select
from sqlalchemy.orm import select
from .models import Order


async def get_order(db: Session, order_id: int):
    result = await db.execute(select(Order).where(Order.id == order_id))
    return result.scalars().first()
                   

async def get_orders(db: Session, skip: int = 0, limit: int = 0):
    result = await db.execute(select(Order).offset(skip).limit(limit))
    return result.scalars().all()
                   

async def create_order(db: Session, order: int):
    db.add(order)
    await db.commit()
    await db.refresh(order)
    return order

# Update Order
async def update_order(db: Session, order_id: int, order: Order):
    result = await db.execute(select(Order).where(Order.id == order_id))
    db_order = result.scalars().first()
    db_order.arepas_plain = order.arepas_plain
    db_order.arepas_chicken = order.arepas_chicken
    db_order.arepas_chicken_sauce = order.arepas_chicken_sauce
    db_order.arepas_sauce = order.arepas_sauce
    db_order.order_comments = order.order_comments
    db_order.customer_phone = order.customer_phone
    await db.commit()
    await db.refresh(db_order

