// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"
// import { Division, Multiplication, Somme } from "../Config/actions"

// const si={width:"300px",padding:"8px",margin:"10px",border:"1px solid blue"}
// export default function SisirValue(){
//     const dispatch=useDispatch()
//     const [val1,setVal1]=useState("")
//     const [val2,setVal2]=useState("")
//     const [operation,setOperation]=useState("")
//     useEffect(()=>{    
//             if(operation==="*"){
//                 dispatch(Multiplication({val1:val1,val2:val2,operation:operation}))
//             }else if(operation==="+"){
//                 dispatch(Somme({val1:val1,val2:val2,operation:operation}))
//             }else if(operation==="/"){
//                 dispatch(Division({val1:val1,val2:val2,operation:operation}))
//             }           
//     },[operation])
//     return(
//         <div>
//             Value1: <input type="text"style={si} onChange={e=>setVal1(e.target.value)}/>
//             Value2: <input type="text"style={si} onChange={e=>setVal2(e.target.value)}/>
//         <div>
//             <input type="radio" name="op" onChange={e=>setOperation(e.target.value)} value="*" /><strong>*</strong><br />
//             <input type="radio" name="op" onChange={e=>setOperation(e.target.value)} value="+" /><strong>+</strong><br />
//             <input type="radio" name="op" onChange={e=>setOperation(e.target.value)} value="/" /><strong>/</strong><br />
//         </div>
//         </div>
//     )
// }