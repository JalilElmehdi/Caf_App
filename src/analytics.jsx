import { useState } from "react";
import PlusWin from "./pluswin";
import Butteur from "./butteur";

export default function Analytics() {
    const [key, setKey] = useState("topwin");

    const but = () => {
        setKey("butteur");
    };

    const topwin = () => {
        setKey("topwin");
    };

    return (
        <div className="analytics">
            <div className="left">
                <div className="logotop">
                    <img src={require(`./lacoupe.png`)} alt="coup image" />
                </div>
                <div className="menu">
                    <a href="/#" onClick={but}>
                        <i className="fa-solid fa-futbol"></i> Goal Scorers
                    </a>
                    <a href="/#" onClick={topwin}>
                        <i className="fa-solid fa-trophy"></i> The winners
                    </a>
                </div>
            </div>
            <div className="right">
                {(() => {
                    if (key === "topwin") {
                        return <PlusWin />;
                    } else if (key === "butteur") {
                        return <Butteur />;
                    }
                })()}
            </div>
            <div className="history">
                <h3>CAF <span>23</span></h3>
            </div>
        </div>
    );
}
