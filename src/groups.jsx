import Footer from "./footer"
import Group from "./group"
import NavBar from "./navbar"

const groups=[{nom:"GROUP A",
liste:[
{pts:4,j:2,dif:2,g:1,n:1,bp:0,img:"ghiniyabissaw.png",id:1},
{pts:4,j:2,dif:1,g:1,n:1,bp:0,img:"nigeria.png",id:2},
{pts:3,j:2,dif:1,g:1,n:0,bp:1,img:"cotedivoire.png",id:3},
{pts:0,j:2,dif:-4,g:0,n:0,bp:2,img:"ghiniyabissawèa9i.png",id:4}]},

{nom:"GROUP B",
liste:[
{pts:3,j:1,dif:1,g:1,n:0,bp:0,img:"caboverde.png",id:1},
{pts:2,j:2,dif:0,g:0,n:2,bp:0,img:"egypt.png",id:2},
{pts:1,j:1,dif:0,g:0,n:1,bp:0,img:"Mozambique.png",id:3},
{pts:1,j:2,dif:-1,g:0,n:1,bp:1,img:"ghana.png",id:4}]},
{nom:"GROUP C",
liste:[{pts:6,j:2,dif:5,g:2,n:0,bp:0,img:"senegal.png",id:1},
{pts:4,j:2,dif:2,g:1,n:1,bp:0,img:"Guinée.png",id:3},
{pts:1,j:2,dif:1,g:0,n:1,bp:1,img:"Cameroun.png",id:2},

{pts:0,j:1,dif:-3,g:0,n:0,bp:1,img:"Gambie.png",id:4}]},
{nom:"GROUP D",
liste:[
{pts:3,j:1,dif:3,g:1,n:0,bp:0,img:"Burkina Faso.png",id:1},
{pts:1,j:1,dif:1,g:0,n:1,bp:0,img:"Algérie.png",id:2},
{pts:1,j:1,dif:1,g:0,n:1,bp:0,img:"Angola.png",id:3},
{pts:0,j:1,dif:0,g:0,n:0,bp:1,img:"Mauritanie.png",id:4},]},
{nom:"GROUP E",
liste:[
{pts:3,j:1,dif:2,g:1,n:0,bp:0,img:"Mali.png",id:1},
{pts:3,j:1,dif:1,g:1,n:0,bp:0,img:"Namibie.png",id:2},    
{pts:0,j:1,dif:-1,g:0,n:0,bp:1,img:"Tunisie.png",id:3},
{pts:0,j:1,dif:-2,g:0,n:0,bp:1,img:"Afrique du Sud.png",id:4}]},
{nom:"GROUP F",
liste:[{pts:3,j:1,dif:3,g:1,n:0,bp:0,img:"Maroc.png",id:1},
{pts:1,j:1,dif:0,g:20,n:5,bp:0,img:"République démocratique du Congo.png",id:2},
{pts:1,j:1,dif:0,g:0,n:1,bp:0,img:"Zambie.png",id:3},
{pts:0,j:1,dif:-3,g:0,n:0,bp:1,img:"Tanzanie.png",id:4}]}
]
const styleparent={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"20px",flexWrap: "wrap"}
export default function Groups(){
    return(
        <>
        <NavBar />
        <div className="title">
                <h1>Groups</h1>
        </div>
        <div style={styleparent}>
            {groups.map(gr=><Group  group={gr}  />)}
        </div>
        <Footer />
        </>
    )
}