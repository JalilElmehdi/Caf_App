const players=[{id:1,nom:"Samuel Eto'o",imgpays:"Cameroun.png",nbr:18},
{id:2,nom:"Laurent Pokou",imgpays:"cotedivoire.png",nbr:14},
{id:3,nom:"Rashidi Yekini",imgpays:"nigeria.png",nbr:13},
{id:4,nom:"Hassan El-Shazly",imgpays:"egypt.png",nbr:12},
{id:5,nom:"Patrick Mboma",imgpays:"Cameroun.png",nbr:11},
{id:6,nom:" Didier Drogba",imgpays:"cotedivoire.png",nbr:11},
{id:7,nom:"Hossam Hassan",imgpays:"egypt.png",nbr:11},
{id:8,nom:"Joël Tiéhi",imgpays:"cotedivoire.png",nbr:10},
{id:9,nom:"Francileudo Santos",imgpays:"Tunisie.png",nbr:10},
{id:10,nom:"Kalusha Bwalya",imgpays:"Zambie.png",nbr:10},
{id:11,nom:"André Ayew",imgpays:"ghana.png",nbr:10}]


export default function Butteur(){

    return(
        <div style={{background:"white"}}>
        <table className="table tbale-hover table-striped table-hover" style={{width:"70%",float:"left",background:"white"}}>
            <thead>
            <tr style={{background:"#094635",color:"#E5BA23"}}>
                <th>Pays</th>
                <th>Player</th> 
                <th>Goals</th>              
            </tr>    
            </thead>
            <tbody>
                {players.map(w=><tr>
                    <td><img src={require(`./images/${w.imgpays}`)} alt="image pays" width="30px"/></td>
                    <td>{w.nom}</td>
                    <td>{w.nbr}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    )
}