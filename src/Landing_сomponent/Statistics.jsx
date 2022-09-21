import React from "react";
import st from "./Statistics.module.css";

const Statistics=()=>{
    return(
        <div className={st.statistics}>
            <div className={st.table}>
                <div className={st.content}>
                    <p>70K</p>
                    <p>Shared Web Hosting</p>
                </div>
                <div className={st.content}>
                    <p>100M</p>
                    <p>VPS Hosting</p>
                </div>
                <div className={st.content}>
                    <p>11K</p>
                    <p>Dedicated Server</p>
                </div>
                <div className={st.content}>
                    <p>199+</p>
                    <p>Cloud Hosting</p>
                </div>
            </div>
        </div>
    );
}
export default Statistics;