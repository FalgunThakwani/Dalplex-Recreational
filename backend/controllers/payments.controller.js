const Cart = require('../models/cart.model');
const Booking = require('../models/bookings.model');
const Notification = require('../utils/EmailHelper');
const User = require('../models/user.model')
const Invoice = require('../models/invoice.model')
const { format } = require('date-fns');
require("dotenv").config();

const makePayment = async (request, response) => {
    const { name,streetNumber,aptNumber,city,province,pincode,card } = request.body;
    const email=request.user.email;
    try {
        let user = await User.findOne({email: email });
        let cart = await Cart.findOne({ userid: user._id });

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
        

        let message="Your booking is confirmed for ";
        let subject="Booking Confirmed";
        cart.items.forEach((item)=>{
            message+=item.program;
            message+=" ";
            message+=item.interval;
            message+=" ";
            message+=format(item.bookingdate, 'EEE, MMM d, y');
        });

        let invoice = new Invoice({
            userid:cart.userid,
            items:cart.items,
            subTotal:cart.subTotal,
            date:cart.createdat,
            subTotal:cart.subTotal,
            discount:cart.discount,
            paid:cart.total,
            owing:cart.total-cart.total,
            createdat:cart.createdat,
            tax:cart.tax,
            total:cart.total,
            billingAddress:{
                name:name,
                street:streetNumber,
                apt:aptNumber,
                city:city,
                province:province,
                postal:pincode,
            },
            card:card
        });

        cart.items=[];
        await cart.save();
        await invoice.save();

        Notification.sendEmailNotification(user.email,subject,message);

        response.status(201).json(invoice);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
}
module.exports = { makePayment };