import "./music-card.css"


function MusicCard(props){
    return(
        <>
        <div className="music-card">

          <img src={props.imgURL} alt="WALANG INTERNET" />
          <h3>{props.title}</h3>
          
          <p>{props.views}</p>
          <i class="fa-regular fa-headphones play-icon"></i>

        </div>
        
        </>

    )
}

export default MusicCard