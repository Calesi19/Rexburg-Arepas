const mongoose = require('mongoose');

// Initiate the schema
const Schema = mongoose.Schema;

// Create the schema
const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    arepasChicken: {
        type: Number,
        default: 0
    },
    arepasChickenSalsa: {
        type: Number,
        default: 0
    },
    arepasSalsa: {
        type: Number,
        default: 0
    },
    arepasPlain: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Export the model
module.exports = mongoose.model('Order', orderSchema);