import React from 'react';
import './App.css';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Movie from './Movie';
import MovSer from './MovSer';

function ncard(element)
{
      return(
            <Card
            
            key = {element.id}
            imgsrc={element.imgs}
            title={element.title}
            sname={element.sname}
            link={element.links}
            
      />
      
      )
}
const movies = "m";
const MovS= ()=>{
      if(movies === "netflix"|| movies === "netflixs")
      {
            return <Netflix/>;
      }
      else if(movies === "movie" ||movies === "movies"){
            return <Movie/>;
      }
      else
      {
        return <>
        {/* <MovSer/> */}
            {Sdata.map(ncard)}
            </>;
      }
}



function App() {
  return (
  <>
    {/* <h1 className='heading_style'> List of Top Series in 2023</h1> */}
      
      {/* {Sdata.map(ncard)} */}
      <MovS/>
      {/* {movies === "netflix" ? <Netflix/> : <Movie/> } */}
  </>
  );
}

export default App;
