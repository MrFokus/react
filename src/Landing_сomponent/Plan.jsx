import React from "react";
import pl from "./Plan.module.css";

const Plan=()=>{
    return(
        <div className={pl.plan}>
            <h1>Our Flexible Plan</h1>
            <div className={pl.price_block}>
                <div className={pl.content}>
                    <div className={pl.price}>
                        <p>Monthly</p>
                        <p>$ 199.50</p>
                    </div>
                    <div className={pl.desc}>
                        <p><span>Host 5</span> Domain</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>50GB</span> Bandwidth</p>
                        <p><span>Free</span> SSL Certificate</p>
                        <p><span>24/7</span> Support</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>Free</span> SSL Certificate</p>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className={pl.content}>
                    <div className={pl.price}>
                        <p>Quarterly</p>
                        <p>$ 199.50</p>
                    </div>
                    <div className={pl.desc}>
                        <p><span>Host 5</span> Domain</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>50GB</span> Bandwidth</p>
                        <p><span>Free</span> SSL Certificate</p>
                        <p><span>24/7</span> Support</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>Free</span> SSL Certificate</p>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className={pl.content}>
                    <div className={pl.price}>
                        <p>Semi Annually</p>
                        <p>$ 199.50</p>
                    </div>
                    <div className={pl.desc}>
                        <p><span>Host 5</span> Domain</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>50GB</span> Bandwidth</p>
                        <p><span>Free</span> SSL Certificate</p>
                        <p><span>24/7</span> Support</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>Free</span> SSL Certificate</p>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className={pl.content}>
                    <div className={pl.price}>
                        <p>Annually</p>
                        <p>$ 199.50</p>
                    </div>
                    <div className={pl.desc}>
                        <p><span>Host 5</span> Domain</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>50GB</span> Bandwidth</p>
                        <p><span>Free</span> SSL Certificate</p>
                        <p><span>24/7</span> Support</p>
                        <p><span>2GB NVMe</span> Storage</p>
                        <p><span>Free</span> SSL Certificate</p>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
}
export default Plan;