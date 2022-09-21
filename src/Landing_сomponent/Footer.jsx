import React from "react";
import ft from "./Footer.module.css";
import logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
const Footer = () => {
    return (
        <div className={ft.footer}>
            <div className={ft.content}>
                <div className={ft.block}>
                    <img src={logo} alt="" />
                    <p>Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. Cras cursus, lacus et dignissim volutpat</p>
                </div>
                <div className={ft.block}>
                    <p> <span>Quickl Links</span> <br />
                        <ul>
                            <li> Home </li> <br />
                            <li> About Us </li> <br />
                            <li> Services </li> <br />
                            <li> Contact Us </li>
                        </ul>
                    </p>
                </div>
                <div className={ft.block}>
                    <p>
                        <span>Services</span><br />
                        <ul>
                            <li> Shared Web Hosting</li> <br />
                            <li> VPS Hosting</li> <br />
                            <li> Dedicated Server</li> <br />
                            <li> Cloud Hosting</li> <br />
                            <li> Domain Names</li> <br />
                            <li> License Keys</li> <br />
                        </ul>
                    </p>
                </div>
                <div className={ft.block}>
                    <p>
                        <span>Contact Us</span>
                        <ul>
                            <li>shield.info@gmail.com </li> <br />
                            <li> +91 - 99xxx 000xx </li>
                        </ul>
                        <br />
                        <br />
                    </p>
                    <p><span>Follow Us</span></p> <br />
                    <div className={ft.link}>
                        <a href="#"><img src={Vector} alt="" /></a>
                        <a href="#"><img src={Vector1} alt="" /></a>
                        <a href="#"><img src={Vector2} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;