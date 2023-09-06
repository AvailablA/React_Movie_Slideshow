import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Movie = ()=>
{
    return (
        <>
        <h1 className='heading_style'> List of Top Movies in 2023</h1>

        <Card
            key = {Sdata[0].id}
            imgsrc={Sdata[0].imgs}
            title={Sdata[0].title}
            sname={Sdata[0].sname}
            link={Sdata[0].links}
        
        />
        </>
        
    );
}

export default Movie;