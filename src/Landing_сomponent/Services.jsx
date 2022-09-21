import React from "react";
import ser from "./Services.module.css";
import frame1 from "../img/Frame1.png";
import frame15 from "../img/Frame15.png";
import frame17 from "../img/Frame17.png";
import frame18 from "../img/Frame18.png";
import frame from "../img/Frame.png";
import group8 from "../img/Group8.png";

const Services=()=>{
    return(
        <div className={ser.service}>
            <div className={ser.service_text}>Our Services</div>
            <div className={ser.desc}>
                <div className={ser.content}>
                    <img src={group8} alt="" />
                    <h3>Shared Web Hosting</h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
                <div className={ser.content}>
                    <img src={frame15} alt="" />
                    <h3>VPS  Hosting</h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
                <div className={ser.content}>
                    <div>
                        <img src={frame} alt="" />
                    </div>
                    <h3>Dedicated Server </h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
                <div className={ser.content}>
                    <img src={frame17} alt="" />
                    <h3>Cloud Hosting</h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
                <div className={ser.content}>
                    <img src={frame18} alt="" />
                    <h3>Domain Names</h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
                <div className={ser.content}>
                    <div>
                        <img src={frame1} alt="" />
                    </div>
                    <h3>License Keys</h3>
                    <p>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</p>
                </div>
            </div>
        </div>
    );
}
export default Services;