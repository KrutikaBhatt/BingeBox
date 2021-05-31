
const config = require('../config')
const formidable=require('formidable')
const express=require('express')
const router=express.Router()
const {v4:uuidv4}=require('uuid')
const https=require('https')
const PaytmChecksum=require('../PaytmChecksum')


const CallBack = (req,res) =>{
    
const form = new formidable.IncomingForm();

form.parse(req,(err,fields,file)=>
{
    
paytmChecksum = fields.CHECKSUMHASH;
delete fields.CHECKSUMHASH;

var isVerifySignature = PaytmChecksum.verifySignature(fields, config.PAYTM_MERCHANT_KEY, paytmChecksum);
if (isVerifySignature) {

    var paytmParams = {};
    paytmParams["MID"]     = fields.MID;
    paytmParams["ORDERID"] = fields.ORDERID;
    
    /*
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    PaytmChecksum.generateSignature(paytmParams, config.PAYTM_MERCHANT_KEY).then(function(checksum){
    
        paytmParams["CHECKSUMHASH"] = checksum;
    
        var post_data = JSON.stringify(paytmParams);
    
        var options = {
    
            /* for Staging */
            hostname: 'securegw-stage.paytm.in',
    
            /* for Production */
            // hostname: 'securegw.paytm.in',
    
            port: 443,
            path: '/order/status',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };
    
        var response = "";
        var post_req = https.request(options, function(post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });
    
            post_res.on('end', function(){
                res.redirect(`http://localhost:3000/callback`)
            });
        });
    
        post_req.write(post_data);
        post_req.end();
    });        
            
} else {
	console.log("Checksum Mismatched");
}
})
}

const Payment = (req,res) =>{

    const{amount,email}=req.body;
    console.log("In Payment Contoller :",req.body);
        /* import checksum generation utility */
    const totalAmount=JSON.stringify(amount);
    var params = {};

    /* initialize an array */
    params['MID'] = config.PAYTM_MID,
    params['WEBSITE'] = config.PAYTM_WEBSITE,
    params['CHANNEL_ID'] = config.PAYTM_CHANNEL_ID,
    params['INDUSTRY_TYPE_ID'] = config.PAYTM_INDUSTRY_TYPE_ID,
    params['ORDER_ID'] = uuidv4(),
    params['CUST_ID'] = config.PAYTM_CUST_ID,
    params['TXN_AMOUNT'] = totalAmount,
    params['CALLBACK_URL'] = 'http://localhost:8080/pay/callback',
    params['EMAIL'] = email,
    params['MOBILE_NO'] = '9876543210'

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(params, config.PAYTM_MERCHANT_KEY);
paytmChecksum.then(function(checksum){
    let paytmParams={
        ...params,
        "CHECKSUMHASH":checksum
    }
    res.json(paytmParams)
}).catch(function(error){
	console.log(error);
});

}


module.exports={
    CallBack,
    Payment
}