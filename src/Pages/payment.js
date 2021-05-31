import React from 'react';
import {FooterContainer} from '../Container/footer';
import {HeaderContainer} from '../Container/payment_header';
import planData from '../fixtures/plans.json';

import {PaymentComp} from '../components';
export default function Payment(){

    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
      }
      
      function isObj(val) {
        return typeof val === 'object'
      }
      
       function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
          return JSON.stringify(val)
        } else {
          return val
        }
      }
      
      function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)
      
        Object.keys(params).forEach(key => {
          const input = document.createElement('input')
          input.setAttribute('type', 'hidden')
          input.setAttribute('name', key)
          input.setAttribute('value', stringifyValue(params[key]))
          form.appendChild(input)
        })
      
        return form
      }
      
       function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
      }


    const getData=(data)=>
    {
        return fetch(`http://localhost:8080/pay/payment`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json()).catch(err=>console.log(err))
   }

    const makePayment=()=>
    {
      getData({amount:800,email:'abc@gmail.com'}).then(response=>{
      var information={
          action:"https://securegw-stage.paytm.in/order/process",
          params:response
      }
      console.log("In Make Payment :",information);
        post(information)
      })
    }

    return(
        <>
        <HeaderContainer >

            <PaymentComp>
                <PaymentComp.Title> Choose the plan that’s right for you</PaymentComp.Title>
                {planData.map(item =>(
                    <PaymentComp.Col>
                        <PaymentComp.PriceBox>
                            <PaymentComp.Head key={item.id}>{item.header}</PaymentComp.Head>
                            <PaymentComp.emphasis>{item.Price}</PaymentComp.emphasis>
                            <li><strong>{item.video_quality}</strong> Video Quality</li>
                            <li><strong>{item.resolution}</strong> </li>
                            <li><strong>{item.onMobile}</strong></li>
                            <li><strong>{item.onTV}</strong></li>
                            <li>View on <strong>{item.concurrent_watches} Screens </strong>at same time</li>
                            <li><strong>{item.unlimited_movies}</strong></li>
                            <li><strong>{item.cancel}</strong></li>
                        </PaymentComp.PriceBox>
                        <PaymentComp.Button onClick = {makePayment}>Choose Plan</PaymentComp.Button>
                    </PaymentComp.Col>
                ))}
            </PaymentComp>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}