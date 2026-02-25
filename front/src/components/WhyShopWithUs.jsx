import React from 'react'
import WhyShopWithUsBox from './WhyShopWithUsBox'

const WhyShopWithUs = () => {

   let box1 = {
      icon : '<i class="fa fa-bus fa-3x" aria-hidden="true"></i>',
      title : "Fast Delivery",
      text : "variations of passages of Lorem Ipsum available"
   }
   let box2 = {
      icon : '<i class="fa fa-truck fa-3x" aria-hidden="true"></i>',
      title : "Fee Shipping",
      text : "variations of passages of Lorem Ipsum available"
   }
   let box3 = {
      icon : '<i class="fa fa-certificate fa-3x" aria-hidden="true"></i>',
      title : "Best Quality",
      text : "variations of passages of Lorem Ipsum available"
   }
   let box4 = {
      icon : '<i class="fa fa-3x fa-envelope-open" aria-hidden="true"></i>',
      title : "Hello World",
      text : "sdfg sdfgserg sdf serg sdfgsdfgsd sdrg  sg"
   }
   


  return (
    <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div className="row">
               <WhyShopWithUsBox info={box1} />               
               <WhyShopWithUsBox info={box2}/>               
               <WhyShopWithUsBox info={box3}/>               
               <WhyShopWithUsBox info={box4}/>               
            </div>
         </div>
      </section>
  )
}

export default WhyShopWithUs