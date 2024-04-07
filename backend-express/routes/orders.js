const express = require('express');

const { createOrder, getAllOrders, getSingleOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

// Initiate the router
const router = express.Router();


// Routes

// GET /orders (get all orders)
router.get('/', getAllOrders );

// GET /orders/:id (get an order)
router.get('/:id', getSingleOrder);

// POST /orders (create a new order)
router.post('/', createOrder);

// PATCH /orders/:id (update an order)
router.patch('/:id', updateOrder);

// DELETE /orders/:id (delete an order)
router.delete('/:id', deleteOrder);

// Export the router
module.exports = router;

