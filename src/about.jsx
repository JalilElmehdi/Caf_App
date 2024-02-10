export default function About(){
    const readmore=()=>{
        alert("pas travailler")
    }
    return(
    <div className="sectio" id="sectio">
        <div className="containe">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <div className="content">
                <div className="article">
                    <h3>The Confederation of African Football, also referred to by the acronym CAF, is an association 
                        bringing together and representing the national football federations of Africa. Founded in 1957,
                         the CAF's role is to manage and develop football at the continental level, under under the auspices of FIFA. 
                         It organizes and administers the main continental competitions, whether for selections, such as the African 
                         Cup of Nations and the African Nations Championship, 
                        or for clubs, such as the Champions League, the Confederation Cup and the CAF Super Cup</h3>
                    <p>CAF currently brings together 54 federations. Based in Egypt, its current president has been the South African, Patrice Motsepe, since March 2021.</p>
                    <div className="button">
                        <button  onClick={readmore}>Read More</button>
                    </div>
                </div>
            </div>
                <div className="image-section">
                    <img src={require("./images/CAF-CAN-Football-1.jpg")} alt="" />
                </div>
                <div className="social">
                    <a href="https://github.com/JalilElmehdi/CafApp/"><i class='fab fa-facebook-f'></i></a>
                    <a href="https://github.com/JalilElmehdi/CafApp/"><i class='fab fa-twitter'></i></a>
                    <a href="https://github.com/JalilElmehdi/CafApp/"><i class='fab fa-instagram'></i></a>
                </div>
            </div>
        </div>
    
    )
}