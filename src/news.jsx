const news=[{id:1,title:"Hoalid-Regragui:TotalEnergies CAF AFCON will be one of the best in history",date:"13 Fevrier 2024",description:"Walid Regragui expects a tough battle in the second match with the Democratic Republic of Congo . Atlas Lions players also believe that the competition will be one of the best tournaments in history.",img:"hoalid.jpg"},
{id:1,title:"Djamal-Belmadi: Lessons learned from the draw in Angola",date:"17 Fevrier 2024",description:"Algeria coach Djamel Belmadi says he has learned lessons from their failure to claim three points against Angola in the opening match of the TotalEnergies CAF Africa Cup of Nations Côte d'Ivoire 2023.",img:"belmadi.jpg"},
{id:1,title:"Group A, second round | Related facts and figures",date:"16 Fevrier 2024",description:"Nations Cup Group A matches resume on Thursday with a new set of exciting encounters. Equatorial Guinea faces Guinea-Bissau while Ivory Coast faces Nigeria Given the atmosphere of the match, it will be a difficult day.",img:"newscotevoire.png"}]
export default function News(){
    const news=()=>{
        alert("pas news pas ex")
    }
    const seeall=()=>{
        alert("pas ex")
    }
    return(
        <>
        
        <div className="section-news">
            {news.map(n=><div key={n.id} className="card-news">
                <a href="#" style={{textDecoration:"none",background:"green",color:"white",padding:"5px"}} className="afcon" onClick={news}>News</a>
                <img src={require(`./images/${n.img}`)} className="image-news" alt="image de news"/>
                <div className="content-news">
                <h5 className="title-news">{n.title}</h5>
                <p className="date-news">CAF:{n.date}</p>
                <p className="description-news">{n.description}</p>
                </div>   
            </div>)}
        </div>
        <div style={{padding:"20px",marginRight:"66px",marginTop:"0px"}}>
            <a href="#" onClick={seeall} style={{color:"white",textDecoration:"none",borderBottom:"gray",background:"green",padding:"4px",width:"80px",borderRadius:"4px",textAlign:"center",position:"absolute",right:"90px",top:"2100px"}}>See all<i class='bx bxs-chevrons-right'></i></a>
        </div>
        </>
    )
}