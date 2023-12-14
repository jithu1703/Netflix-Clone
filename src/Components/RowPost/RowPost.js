import React,{useEffect,useState} from "react";
import Youtube from 'react-youtube'
import './RowPost.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from "../../axios";
function RowPost(props) {
  
  const [movies, setmovies] = useState([])
  const [Urlid,setUrlId] =useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{
      //alert("Network error")
    })
  }, [props])
  
  const opts = {
    height: '480',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie= (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
  }
  return (
    
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters"> 
        {movies.map((obj)=>
   <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':"poster"} alt="poster" src={`${imageUrl+obj.backdrop_path}`} />
        )}
       
        
      </div>
    { Urlid && <Youtube opts={opts} videoId={Urlid.key}/>  }
    </div>
  )
}

export default RowPost
