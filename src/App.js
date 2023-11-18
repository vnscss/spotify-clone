import './App.css';
import imgAlbum from './assets/ab67616d0000b273e583d907d88cad338cbd9cb5.jpg';
import spfLogo from './assets/Spotify_Logo_RGB_White.png';
import song from './assets/tomodachi.mp3';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
  
        <div className="sideBarTop">
            <div className="topButtons"> 
              <img className="spfLogo" src={spfLogo}></img>
             <span className='homeHover'> 
                <svg className='homeIcon' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 136.00 129.00">
                  <path fill="#b3b3b3" d="   M 61.48 80.54   Q 61.52 87.08 61.51 109.25   Q 61.50 114.68 56.00 114.76   Q 41.07 114.99 26.15 114.99   C 22.08 114.99 19.05 114.06 19.02 109.50   Q 18.94 93.98 19.02 42.00   C 19.03 38.18 22.17 35.33 25.62 33.32   Q 43.74 22.79 61.91 12.36   C 68.21 8.75 73.96 11.13 80.40 14.83   Q 97.29 24.57 114.17 34.33   Q 119.20 37.25 119.17 44.00   Q 119.03 76.16 118.98 108.32   C 118.98 111.58 117.85 114.98 114.26 114.98   Q 98.24 115.02 82.25 114.90   Q 76.20 114.85 76.30 108.75   Q 76.53 94.65 76.52 80.54   Q 76.52 80.00 75.99 80.00   L 62.02 80.00   Q 61.48 80.00 61.48 80.54   Z   M 51.51 76.51   C 51.50 72.82 52.79 70.06 56.75 70.03   Q 68.97 69.93 81.20 70.14   C 85.75 70.21 86.52 73.01 86.51 77.09   Q 86.48 90.94 86.51 104.74   A 0.26 0.26 0.0 0 0 86.77 105.00   L 108.50 105.00   A 0.50 0.50 0.0 0 0 109.00 104.50   L 109.00 43.31   Q 109.00 42.90 108.65 42.70   Q 90.35 32.09 72.01 21.53   Q 69.04 19.82 67.01 20.99   Q 48.17 31.84 29.57 42.53   A 1.14 1.14 0.0 0 0 29.00 43.52   L 29.00 104.75   A 0.25 0.25 0.0 0 0 29.25 105.00   L 50.98 105.00   Q 51.48 105.00 51.49 104.50   Q 51.53 90.45 51.51 76.51   Z"/>
                </svg>
              
                <button className="inicio"> Início</button>
              
              </span>
              
              <div className='buscarHover'>
               <svg className="buscarSVG" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 35.00 40.00">
                 <path fill="#b4b2b4" d="   M 23.62 23.16   L 28.04 27.52   A 0.98 0.98 0.0 0 1 28.02 28.93   L 27.71 29.21   A 0.63 0.62 44.6 0 1 26.86 29.21   L 22.02 24.78   Q 21.68 24.47 21.24 24.59   Q 19.87 24.97 18.60 25.43   C 3.44 30.93 -1.30 7.94 13.76 6.59   C 22.73 5.78 28.19 14.55 23.52 22.38   Q 23.27 22.81 23.62 23.16   Z   M 23.0400 16.4114   A 8.20 7.79 -0.2 0 0 14.8128 8.6500   A 8.20 7.79 -0.2 0 0 6.6400 16.4686   A 8.20 7.79 -0.2 0 0 14.8672 24.2300   A 8.20 7.79 -0.2 0 0 23.0400 16.4114   Z"/>
               </svg>
                <button className="buscar"> Buscar</button>
              </div>
            </div>
        </div>
        
        <div className="sideBarMid">
          
          <div className='sideBarMidHeader'>
            <svg className='biblioteca' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 99.00 83.00">
             <rect className='react' fill="#a7a7a7" x="31.01" y="15.05" width="4.98" height="49.98" rx="2.45"/>
             <rect className='react' fill="#a7a7a7" x="46.01" y="15.08" width="4.98" height="49.92" rx="2.44"/>
             <path fill="#a7a7a7" d="   M 81.00 26.16   L 81.00 62.46   A 2.54 2.54 0.0 0 1 78.46 65.00   L 63.54 65.00   A 2.54 2.54 0.0 0 1 61.00 62.46   L 61.00 17.58   A 2.54 2.54 0.0 0 1 64.81 15.38   L 79.73 23.96   A 2.54 2.54 0.0 0 1 81.00 26.16   Z"/>
           </svg>
            <button className="suaBiblioteca"> Sua Biblioteca</button>
            <div className='plusDiv'> <svg className='plusSvg' data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg></div>

            <div className='buttonsHeader'>

              <button className='sideBarMidButton'> Playlists </button> <button className='sideBarMidButton'> Artistas </button> <button className='sideBarMidButton'> Álbuns </button>
              <div className='componenteSidebar'>


              </div>
            </div>

          
          
          </div>
          
        </div>
      </div>
      
      <div className="mainApp">
        <MainAplication></MainAplication>
      </div>
      <div className="margin"></div>
      <div className='player'>
      <Info></Info>
      <Player></Player>
      <Volume></Volume>        
      </div>
    
   </div>
    
  );
}

function Info(){
  return(
    <div className='info'> 
      <img className='imgAlbum' src={imgAlbum}></img>
      <p className='titulo'>Tomodachi</p>
      <p className='autor'><span className='autor1'>YUNG LIXO</span><span>,</span> <span className='autor2'> SHO-SENSEI!!</span></p>
      <button type='checkbox'> <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kPpCsU"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg></span> </button>

    </div>
  );
}

function Player(){
  return(
    <div className='audioPlayer'> 
      <audio src={song} controls controlsList="play nodownload"/>
    </div>
  );
}


function Volume(){
  return(
    <div className='audioPlayer'> 
      <audio src={song} controls controlsList="play nodownload"/>
    </div>
  );
}


function MainAplication(){
  return(
    <div className='mainAplication'> 
      <NavBar></NavBar>
      <img src={imgAlbum}></img>
      <img src={imgAlbum}></img>
      <img src={imgAlbum}></img>
      <img src={imgAlbum}></img>
    </div>
  );
}

function NavBar(){
  return(       
    <div className='navBar'>
        <button className='navBarAnterior'><span><svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></span></button>
        <button className='navBarProximo'><span><svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></span></button>
        <button className='playTitulo'> <svg className='playTitulo' data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 iYxpxA"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg></button>
        <h1 className='titulo'>Titulo</h1>
        <h1 className='inscrever'>Inscrever-se</h1>
        <button className='entrar'>Entrar</button>
    </div>
  );
}



export default App;
