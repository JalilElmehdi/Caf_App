export default function Group(props){
    return(
        <div style={{width:"400px"}}>
            <table className="table table-hover">
                <thead>
                    <tr style={{background:"#094635",color:"white"}}>
                        <td>#</td>
                        <td>{props.group.nom}</td>
                        <td>PTS</td>
                        <td>J</td>
                        <td>DIF</td>
                        <td>G</td>
                        <td>N</td>
                        <td>BP</td>
                    </tr>
                    {props.group.liste.map(g=><tr>
                        <td>{g.id}</td>
                        <td><img alt="image de pays" src={require(`../src/images/${g.img}`)}  width="30px"/></td>
                        <td style={{color:"green"}}>{g.pts}</td>
                        <td>{g.j}</td>
                        <td>{g.dif}</td>
                        <td>{g.g}</td>
                        <td>{g.n}</td>
                        <td>{g.bp}</td>
                    </tr>)}
                </thead>
            </table>
        </div>
    )
}