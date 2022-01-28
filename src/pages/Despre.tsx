import React from "react";
import { Link } from "react-router-dom";

const Despre = () => {
    return (
        <div className="despre">
            <p>
                Magazinul online cu <Link to={'/Produse'}> <span id="bere"> bere</span></Link> și <Link to={'/Produse'}> <span id='vin'>vin</span></Link> produse local.
            </p>
        </div>
    )
}

export default Despre