import React from 'react'
import GoogleAdsIcon from "../assets/img/GoogleAdsIcon.png";
import FacebookIcon from "../assets/img/FacebookIcon.png";
import ShopifyIcon from "../assets/img/ShopifyIcon.png";

export default function CurrentClientSection() {
  return (
    <section>
       <div className="current-client-section-heading ">
        <p className="current-client-section-title text-center  ">
        Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci sagittis eu volutpat odio
        </p>
        <p className="graph-and-table-section-subtitle text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        </p>
      </div>
      <div className="d-flex justify-content-center">
          <div className="d-flex  justify-content-center align-items-center">
            <div className="shadow rounded-3 m-3 p-3"><img src={FacebookIcon} className="img-fluid client-section-img" alt="" /></div>
           <div className="">
             <div className="shadow rounded-3 m-3 p-3"><img src={GoogleAdsIcon} className="img-fluid client-section-img" alt="" /></div>
             <div className="shadow rounded-3 m-3 p-3"><img src={ShopifyIcon} className="img-fluid client-section-img" alt="" /></div>
           </div>
          </div>
        </div>
    </section>
  )
}
