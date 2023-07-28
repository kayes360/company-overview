import React from "react";
import GoogleAdsIcon from "../assets/img/GoogleAdsIcon.png";
import FacebookIcon from "../assets/img/FacebookIcon.png";
import ShopifyIcon from "../assets/img/ShopifyIcon.png";
import TiktokIcon from "../assets/img/TiktokIcon.png";
import PinterestIcon from "../assets/img/PinterestIcon.png";
import TwitterIcon from "../assets/img/TwitterIcon.png";
import SnapChatIcon from "../assets/img/SnapChatIcon.png";
import TaboolaIcon from "../assets/img/TaboolaIcon.png";
import OutbrainIcon from "../assets/img/OutbrainIcon.png";

export default function ClientsSection() {
  return (
    <section className="my-5 py-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column align-item-start align-content-start mt-5">
          <p className="client-section-title">
            Sed ut perspiciatis unde omnis iste natus error.
            <span>Try out!</span>
          </p>
          <p className="client-section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore ullamco esse cillium
          </p>
         <div>
         <button className="btn btn-light-green custom-btn-text mx-2 py-2 px-4">
            Try Out Now!
          </button>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={GoogleAdsIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={FacebookIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={ShopifyIcon} className="img-fluid client-section-img" alt="" /></div>
            </div>
            <div className="d-flex flex-column pt-5 mt-3">
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={TiktokIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={PinterestIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={TwitterIcon} className="img-fluid client-section-img" alt="" /></div>
            </div>
            <div className="d-flex flex-column">
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={SnapChatIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={TaboolaIcon} className="img-fluid client-section-img" alt="" /></div>
              <div className="custom-shadow-2 rounded-3 m-3 p-3"><img src={OutbrainIcon} className="img-fluid client-section-img" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
