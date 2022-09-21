import React from "react";
import cl from "./Clients.module.css";
import group14 from "../img/Group14.png";

const Clients=()=>{
    return(
        <div className={cl.clients}>
            <h1>Word From Our Clients</h1>
            <div className={cl.table}>
                <div className={cl.contend}>
                    <div className={cl.text}>
                        <p>Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. </p>
                        <p><span>James Harly</span><br /> Harly web, USA</p>
                    </div>
                </div>
                <div className={cl.contend}>
                    <div className={cl.text}>
                        <p>Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. </p>
                        <p><span>James Harly</span><br /> Harly web, USA</p>
                    </div>
                </div>
                <div className={cl.contend}>
                    <div className={cl.text}>
                        <p>Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. </p>
                        <p><span>James Harly</span><br /> Harly web, USA</p>
                    </div>
                </div>
            </div>
            <img src={group14} alt="" />
        </div>
    );
}
export default Clients;