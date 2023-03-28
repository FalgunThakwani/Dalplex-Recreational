const Cart = require('../models/cart.model');
const User = require('../models/user.model');
require("dotenv").config();

const getCart = async (request,response)=>{
    const {userid} = request.body;
    try{
        let cart = await Cart.findOne({ user_id: userid});
        response.status(201).json(cart)
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}


const getItemsCount = async (request,response)=>{
    const {userid} = request.body;
    try{
        let cart = await Cart.findOne({ user_id: userid});
        if(!cart){
            response.status(201).json(0)
        }else{
            response.status(201).json(cart.items.length)
        }
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}


const addToCart = async (request, response) => {
    const { userid, program,court_id,price, interval,status,bookingdate } = request.body;
    const court_img = "/asas";
    const currentDate = new Date().toISOString()
    const bookingstatus=status;
    try {
        let user = await User.findOne({_id:userid})
        let cart = await Cart.findOne({ userid: userid});
        if (!cart) {
            cart = new Cart({
                userid: userid,
                username:user.firstname+user.lastname,
                items:[],
                status: 'pending',
                price:price,
                updatedat:  currentDate ,
                createdat:currentDate,
                subTotal:0,
                tax:0,
                discount:0,
                total:0,
            });
        }
        const item = {
            court_id:court_id,
            court_img:court_img,
            program:program,
            interval:interval,
            price:price,
            bookingstatus:bookingstatus,
            bookingdate:bookingdate
        }
        cart.tax=item.price*0.15;
        cart.total=cart.tax+item.price;
        await cart.items.push(item);   
        await cart.save();
        response.status(201).json(cart);
        } catch (err) {
            console.log(err.message)
        response.status(400).json({ message: err.message });
    }
};

const deleteCart = async (request,response)=>{
    const {id,userid} = request.params;   
    try{
        let cart = await Cart.findOne({ user_id: userid});
        await cart.items.pull(id);
        await cart.save();
        response.status(201).json(cart)
    } catch (err) {
        response.status(400).json({ message: err.message });
}
}

module.exports={addToCart,getItemsCount,getCart,deleteCart}