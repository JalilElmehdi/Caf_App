// export default function Reducer(state={v1:0,v2:0,result:0,nbr:0,op:"+"},actions){
//     switch(actions.type){
//         case "somme":
//             return {v1:actions.payload.val1,v2:actions.payload.val2,
//             result:Number(actions.payload.val1)+Number(actions.payload.val2),nbr:state.nbr+1,op:actions.payload.operation}
//         case "multiplication":
//             return {v1:actions.payload.val1,v2:actions.payload.val2,
//                 result:Number(actions.payload.val1)*Number(actions.payload.val2),nbr:state.nbr+1,op:actions.payload.operation}
//         case "division":
//             return {v1:actions.payload.val1,v2:actions.payload.val2,
//                 result:Number(actions.payload.val1)/Number(actions.payload.val2),nbr:state.nbr+1,op:actions.payload.operation}
//         default :
//         return state
//     }
// }