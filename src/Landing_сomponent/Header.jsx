import React from "react";
import head from "./Header.module.css";
import logo from "../img/logo.png";
import img from "../img/casual-life-3d-excited-young-woman-receiving-like-notifications-on-her-laptop 1.png";
const Header=()=>{
    return(
        <div className={head.header}>
            <div className={head.top_bar}>
                <div className={head.logo}><img src={logo} alt="" /></div>
                <div className={head.menu}>
                    <div className={head.info_btn}>
                        <button>Home</button>
                        <button>About Us</button>
                        <button>Searvice</button>
                        <button>Contact Us</button>
                        </div>
                    <div className={head.login}>
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <div className={head.content}>
                <div className={head.text}>
                    <h1>Fully Managed Cloud & <br /> Web Hosting</h1>
                    <p>Deidcated resources, full root access, & easy scaling. It’s the virtual <br /> private server you’ve been cravin</p>
                    <button>View Pricing</button>
                    </div>
                <div className={head.img}><img src={img} alt="" /></div>
            </div>
        </div>
    );
}
export default Header;