import Discount from '../models/discount.js';


const get_coupon = async (req, res) => {
    try {
        const coupon = await Discount.find();
        if (!coupon) {
            return res.status(404).send({ message: 'Coupon not found' });
        }
        let total_coupon = coupon.length;
        let random_coupon = Math.floor(Math.random() * total_coupon);
        console.log(random_coupon);
        let user_coupon = coupon[random_coupon]
        return res.status(200).send( user_coupon );
    } catch (error) {
        return res.status(500).send({ message: 'Error getting coupon' });
    }
}


const add_coupon = async (req, res) => {
    try {
        const new_coupon = new Discount(req.body);
        await new_coupon.save();
        return res.status(200).send({ message: 'Coupon added' });
    }
    catch (error) {
        return res.status(500).send({ message: 'Error adding coupon' });
    }
}

export { get_coupon, add_coupon };




