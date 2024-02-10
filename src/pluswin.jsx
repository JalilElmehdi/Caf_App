const winners=[{id:1,team:"Egypte",img:"egypt.png",winners:7,totalF:10,years:"1957, 1959, 1986, 1998, 2006, 2008, 2010"},
{id:2,team:"Cameroun",img:"Cameroun.png",winners:5,totalF:7,years:"1984, 1988, 2000, 2002, 2017"},
{id:3,team:"Ghana",img:"ghana.png",winners:4,totalF:9,years:"	1963, 1965, 1978, 1982"},
{id:4,team:"Nigera",img:"nigeria.png",winners:3,totalF:7,years:"1980, 1994, 2013"},
{id:5,team:"Ivory Coast",img:"cotedivoire.png",winners:2,totalF:4,years:"1992, 2015"},
{id:6,team:"Algeria",img:"Algérie.png",winners:2,totalF:3,years:"1990, 2019"},
{id:7,team:"DR Congo",img:"République démocratique du Congo.png",winners:2,totalF:2,years:"1968, 1974"},
{id:8,team:"Zambia",img:"Zambie.png",winners:1,totalF:3,years:"2012"},
{id:9,team:"Tunisia",img:"Tunisie.png",winners:1,totalF:3,years:"2004"},
{id:10,team:"Sudan",img:"sudan.png",winners:1,totalF:3,years:"1970"},

{id:11,team:"Senegal",img:"senegal.png",winners:1,totalF:3,years:"2021"},
{id:12,team:"Ethiopia",img:"Ethiopia.png",winners:1,totalF:2,years:"1962"},
{id:13,team:"Morocco",img:"Maroc.png",winners:1,totalF:2,years:"1976"},
{id:14,team:"South Africa",img:"Afrique du Sud.png",winners:1,totalF:2,years:"1996"},
{id:15,team:"Congo",img:"congo.png",winners:1,totalF:1,years:"1972"}]

export default function PlusWin(){

    return(
        <div style={{background:"white"}}>
        <table className="table tbale-hover table-striped table-hover" style={{width:"70%",float:"left",background:"white"}}>
            <thead>
            <tr style={{background:"#094635",color:"#E5BA23"}}>
                <th>Team</th>
                <th>Winners</th>
                <th>Total Finals</th>
                <th>Years Won</th>
            </tr>    
            </thead>
            <tbody>
                {winners.map(w=><tr>
                    <td><img src={require(`./images/${w.img}`)} width="30px"   alt="pays"/> {w.team}</td>
                    <td>{w.winners}</td>
                    <td>{w.totalF}</td>
                    <td>{w.years}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    )
}