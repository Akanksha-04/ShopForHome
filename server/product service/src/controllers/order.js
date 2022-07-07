import Order from "../models/order.js";
import Cart from "../models/cart.js";

const get_orders = async (req, res) => {
    const userId = req.params.id;
    Order.find({ userId })
        .sort({ date: -1 })
        .then((orders) => res.json(orders));
};

const checkout = async (req, res) => {
    try {
        const userId = req.params.id;
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ msg: "Cart not found" });
        }
        var order = new Order({
            userId,
            items: cart.items,
            bill: cart.bill,
        });
        await order.save();
        await Cart.deleteOne({ userId });
        res.json(order);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

export { get_orders, checkout };
