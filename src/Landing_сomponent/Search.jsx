import React from "react";
import sear from "./Search.module.css";

const Search=()=>{
    return(
        <div className={sear.search}>
            <div className={sear.contain}>
                <div className={sear.input_domain}>
                    <h1>Search Your Domain Now</h1>
                    <input type="text" />
                    <button>Find Now</button>
                </div>
                <div className={sear.prise_domain}>
                    <p><span>.com</span><br />$10 / month</p>
                    <p><span>.co.uk</span><br />$30 / month</p>
                    <p><span>.shop</span><br />$12 / month</p>
                    <p><span>.in</span><br />$11 / month</p>
                    <p><span>.de</span><br />$17 / month</p>
                    <p><span>.nl</span><br />$20 / month</p>
                </div>
            </div>
        </div>
    );
}
export default Search;