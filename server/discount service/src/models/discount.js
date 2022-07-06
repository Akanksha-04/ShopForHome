import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now,
    },
})

const Discount = mongoose.model('Discount', discountSchema);
export default Discount



