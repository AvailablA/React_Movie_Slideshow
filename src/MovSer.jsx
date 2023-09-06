import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function MovSer(element)
{
      return(
        <>
            <h1 className='heading_style'> List of Top WebSeies -  Movies in 2023</h1>
                <Card
            
                key = {element.id}
                imgsrc={element.imgs}
                title={element.title}
                sname={element.sname}
                link={element.links}
                
                />
        </>
      )
}

export default MovSer;