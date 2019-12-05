import {TOP_LIST} from "../api"

export default(state,action)=>{
    state = state || {songList:[]}
    switch(action.type){
        case 'RANK':
           return {songList:action.songList}
        default:return state
    }
}

export const getToplist=()=>(dispacth)=>{
    fetch(TOP_LIST).then((data)=>data.json()).then(res=>{
        console.log(res);
        dispacth({type:'RANK',songList:res.data})
    })
}