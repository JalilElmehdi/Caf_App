import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import PlusWin from './pluswin';
import { useLocation } from 'react-router-dom';
import Footer from './footer';

  const styleequipe = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    alignItems: "center",
  };
  
  const styletime = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
    alignItems: "center",
  };
  
  const stylecontainer = {
    width: "300px",
    margin: "20px",
    padding: "15px",
    background: "aliceblue",
    borderRadius:"6px",
    border:"none"
  };
  const buttonStyle={
    border:"none",
    width:"200px",
    borderRadius:"5px",
    padding:"5px",
    background:"#E5BA23",margin:"10px",color:"black"
  }

  
  export default function Match() {
    const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);



  // useEffect(() => {
  //   // Mettre à jour l'état une fois que le composant est monté
  //   setActiveLink(location.pathname);
  // }, [location.pathname]);
    const matches = [
        { id: 1, team1: 'Morocco', team2: 'DRF-Congo', date: '2024-01-21',day:17, imgteam1: "Maroc.png", imgteam2: "République démocratique du Congo.png", group: "F", time: "15:00" },
        { id: 2, team1: 'Zambia', team2: 'Tanzania', date: '2024-01-21',day:17, imgteam1: "Zambie.png", imgteam2: "Tanzanie.png", group: "F", time: "21:00" },
        { id: 3, team1: 'Mali', team2: 'Tunisie', date: '2024-01-24',day:19, imgteam1: "Mali.png", imgteam2: "Tunisie.png", group: "E", time: "21:00" },
        { id: 4, team1: 'South Africa', team2: 'Namibia', date: '2024-01-21',day:17, imgteam1: "Afrique du Sud.png", imgteam2: "Namibie.png", group: "E", time: "21:00" },

        { id: 6, team1: 'Mauritania', team2: 'Angola', date: '2024-01-15',day:15, imgteam1: "Mauritanie.png", imgteam2: "Angola.png", group: "D", time: "21:00" },
        { id: 7, team1: 'Algerie', team2: 'burkina Faso', date: '2024-01-20',day:20, imgteam1: "Algérie.png", imgteam2: "Burkina Faso.png", group: "D", time: "20:00" },

        { id: 9, team1: 'Senegal', team2: 'Guinea', date: '2024-01-23',day:21, imgteam1: "senegal.png", imgteam2: "Guinée.png", group: "C", time: "18:00" },
        { id: 10, team1: 'Gambia', team2: 'Cameroun', date: '2024-01-23',day:17, imgteam1: "Gambie.png", imgteam2: "Cameroun.png", group: "C", time: "18:00" },
        { id: 11, team1: 'Cabo Verde', team2: 'Egypte', date: '2024-01-22',day:14, imgteam1: "caboverde.png", imgteam2: "egypt.png", group: "B", time: "21:00" },
        { id: 12, team1: 'Nigeria', team2: 'Guinea Bissau', date: '2024-01-22',day:14, imgteam1: "nigeria.png", imgteam2: "ghiniyabissawèa9i.png", group: "A", time: "18:00" },
        { id: 13, team1: 'Morocco', team2: 'Zambia', date: '2024-01-24',day:14, imgteam1: "Maroc.png", imgteam2: "Zambie.png", group: "F",time:"21:00" },
      ];
      function getDayFromDate(dateString) {
        const date = new Date(dateString);
        const dayIndex = date.getDate();
        return dayIndex;
      }
      
      const [filteredMatches, setFilteredMatches] = useState([...matches]);

      
    

    
     
    
      const all = () => {
        setFilteredMatches([...matches]);
        setActiveLink("all")
      };
    
      const today = () => {
        setFilteredMatches(matches.filter(m => Number(getDayFromDate(m.date)) === 20));
        setActiveLink("today")
      };
      
      const tomorrow = () => {
        setFilteredMatches(matches.filter(m => Number(getDayFromDate(m.date)) === 21));
        setActiveLink("tomorrow")
      };
      
  
    return (
      <div style={{background:"white"}}>
        <NavBar />
        <div style={{marginBottom:"0",textAlign:"center"}} className='menulink'>
          <button  onClick={today} className={activeLink==="today"?'link-active':"lien"}  style={buttonStyle} >
            Today's Matches
          </button>
          <button  onClick={all} className={activeLink==="all"?'link-active':"lien"} style={buttonStyle}>
            All Matches
          </button>
          <button  onClick={tomorrow} className={activeLink==="tomorrow"?'link-active':"lien"} style={buttonStyle}>
            Tomorrow's Matches
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", padding: "50px", width: "100%", flexWrap: "wrap" }}>
        
        {filteredMatches.length>0?
        
        filteredMatches.map((m) => (
          <div key={m.id} style={stylecontainer}>
            <p>Group {m.group}</p>
            <div style={styleequipe}>
              <div >
                <img src={require(`./images/${m.imgteam1}`)} alt={m.team1} width="40px" style={{marginLeft:"8px"}}/>
                <p>{m.team1}</p>
              </div>
              <div>
                <p>VS</p>
              </div>
              <div>
                <img src={require(`./images/${m.imgteam2}`)} alt={m.team2} width="40px" style={{marginLeft:"8px"}}/>
                <p>{m.team2}</p>
              </div>
            </div>
            <div className="time" style={styletime}>
              <p>{m.date}</p>
              <p>{m.time} PM</p>
            </div>
          </div>
        )):<p>no matches today....</p>}
      </div>
      
    <Footer />
    </div>
    );
  }
 
  

  
