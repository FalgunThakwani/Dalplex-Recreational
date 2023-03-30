const Cart = require('../models/cart.model');
const Booking = require('../models/bookings.model');
const Notification = require('../utils/EmailHelper');
const User = require('../models/user.model')
const { format } = require('date-fns');
require("dotenv").config();

const makePayment = async (request, response) => {
    const { userid } = request.body;
    try {
        let cart = await Cart.findOne({ userid: userid });
        let user = await User.findOne({ _id: userid })
        const bookings = [];
        for (let i = 0; i < cart.items.length; i++) {
            let item=cart.items[i];
            let bookingExists = await Booking.findOne({ userid: cart.userid, interval: item.interval, program: item.program, registeredon: item.bookingdate, status: "confirmed", semester: "NA" });
            if (!bookingExists) {
                const booking = new Booking({ userid: cart.userid, interval: item.interval, program: item.program, registeredon: item.bookingdate, status: "confirmed", semester: "NA" });
                bookings.push(booking);
            }
        }
        const promises = bookings.map(async (booking) => {
            await booking.save();
        });
        await Promise.all(promises);
        cart.items.forEach((item) => {
            item.bookingstatus = "confirmed";
        });
        cart.status = "Complete";
        await cart.save();
        let message="Your booking is confirmed for ";
        let subject="Booking Confirmed";
        cart.items.forEach((item)=>{
            message+=item.program;
            message+=" ";
            message+=item.interval;
            message+=" ";
            message+=format(item.bookingdate, 'EEE, MMM d, y');
        });
        console.log(message);
        Notification.sendEmailNotification(user.email,subject,message);
        response.status(201).json(cart)
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
}
module.exports = { makePayment };