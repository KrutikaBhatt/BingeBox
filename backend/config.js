'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    PAYTM_MID,
    PAYTM_WEBSITE, 
    PAYTM_CHANNEL_ID,
    PAYTM_INDUSTRY_TYPE_ID,
    PAYTM_MERCHANT_KEY,
    PAYTM_CUST_ID,
    Client_ID,
    Client_Secret,
    Refresh_token
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    },
    PAYTM_MID: PAYTM_MID,
    PAYTM_WEBSITE: PAYTM_WEBSITE, 
    PAYTM_CHANNEL_ID: PAYTM_CHANNEL_ID,
    PAYTM_INDUSTRY_TYPE_ID: PAYTM_INDUSTRY_TYPE_ID,
    PAYTM_MERCHANT_KEY:PAYTM_MERCHANT_KEY,
    PAYTM_CUST_ID : PAYTM_CUST_ID,
    Client_ID : Client_ID,
    Client_Secret : Client_Secret,
    Refresh_token : Refresh_token
}