import React from "react"
import "./index.css"
import {connect} from 'react-redux'
import {getToplist} from "../../store/rank.redux"

@connect((state)=>({
    songList:state.rank.songList
}),{
    getToplist
})


class Rank extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }


    componentDidMount(){
        this.props.getToplist()
    }

    render(){
        return (
        <div className="rank">
            <ul>
                {this.props.songList.map((song,index)=>{
                    return(
                        <a href="'/#/songList/'+item.id" key={song.id}>
                            <li>
                                <p className="ph_img">
                                    <img src={song.picUrl}/>
                                    <span className="iconfont icon-erji">1820</span>
                                </p>
                                <div className="ph_song_list">
                                <span className="iconfont icon-you"></span>
                                <h2>{song.songName}</h2>
                                {song.songList.map((s,i)=>{
                                    return(
                                        <p key={s.number}>
                                        {s.number}
                                        <span>{s.songName}</span> -{s.singerName}
                                    </p>
                                    )
                                })}
                               
                                </div>
                            </li>
                        </a>
                    )
                })}
            </ul>
        </div>
        )
    }
}

export default Rank;