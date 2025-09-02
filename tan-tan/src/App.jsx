import MusicCard from "./components/MusicCard/MusicCard"


function App() {


  return (
    <>
      <div id="fab">
        <i class="fa-regular fa-headphones"></i>

      </div>

      <div id="music-container">


        <MusicCard
        title = "Multo"
        views = "100,000"
        imgURL = "https://imgs.search.brave.com/7mmO6bIBYFiYLtTV2BUfWJYpCosqPjyFEsMhtNZ08p4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iMzcy/MDc4Ny5zbXVzaGNk/bi5jb20vMzcyMDc4/Ny93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNS9DVVAtT0Yt/Sk9FLUJBTk5FUi53/ZWJwP2xvc3N5PTIm/c3RyaXA9MSZ3ZWJw/PTE"
        />

        


      </div>
    </>
  )
}

export default App
