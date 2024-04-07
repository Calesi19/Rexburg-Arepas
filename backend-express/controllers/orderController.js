const Order = require('../models/orderModel');
const mongoose = require('mongoose');

// Get All Orders
const getAllOrders = async (req, res) => {
    // Get all docs from the database
    const orders = await Order.find({}).sort({ createdAt: -1 });

    res.status(200).json(orders);
};



// Get a Single Order
const getSingleOrder = async (req, res) => {
    // Get the id from the request (req.params)
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'Invalid ID'
            });
    }

    // Get the doc from the database
    const order = await Order.findById(id);
    
    if (!order) {
        throw new Error('Order not found');
    }

    res.status(200).json(order);
    
};



// Create a New Order
const createOrder = async (req, res) => {
    // Get the data from the request (req.body)
    const { name, phone, pickupTime, arepasChicken, arepasChickenSalsa, arepasSalsa, arepasPlain } = req.body;

    // Add doc to the database
    try {
        const order = await Order.create({
            name, phone, pickupTime, arepasChicken, arepasChickenSalsa, arepasSalsa, arepasPlain
        });
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating order: ' + error.message || 'Unknown error'
        });
    }
};

// Update an Order
const updateOrder = async (req, res) => {
    // Get the id from the request (req.params)
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'Invalid ID'
        });
    }

    // Update the doc in the database
    const order = await Order.findOneAndUpdate({
        _id: id
    }, { ...req.body });

    if (!order) {
        throw new Error('Order not found');
        res.status(404).json({
            message: 'Order not found'
        });
    }
    
    res.status(200).json(order);
};


// Delete an Order
const deleteOrder = async (req, res) => {
    // Get the id from the request (req.params)
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: 'Invalid ID'
        });
    }

    // Delete the doc from the database
    try {
        const order = await Order.findByIdAndDelete(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting order: ' + error.message || 'Unknown error'
        });
    }
};



// Export the functions

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    deleteOrder,
    updateOrder
};