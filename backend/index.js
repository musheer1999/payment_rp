const app = require("express")();
const { json } = require("express");
const Razorpay = require("razorpay");
const shortid =require("shortid")
const cors =require("cors")
const router = require("express").Router();
app.use(cors())
const razorpay = new Razorpay({
    key_id: 'rzp_test_6s3ci3Np4Y4MJj',
    key_secret: 'STiwT3jmvLCEXlGXFhGvjJlY',
  });

app.get("/razorpay", async (req,res)=>{

    const payment_capture =1
    const amount = 400
    const currency = "INR" 
   
    const options = {amount:"49900",
       currency,
        receipt:shortid.generate(),
         payment_capture}
  try{ const response= await razorpay.orders.create(options)
   console.log(response)
  return res.json({
       id:response.id,
       currency:'INR',
       amount:response.amount
   })} catch(error){
    res.json({
        id:"response.id,"
    })
   }
})

app.listen(1337,()=>{
    console.log("listening to port 1337")
})