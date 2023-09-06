import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = ()=>
{
    return (

        <>

        <h1 className='heading_style'> List of Netflix Top Series in 2023</h1>
        <Card
            key = {Sdata[1].id}
            imgsrc={Sdata[1].imgs}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].links}
        
        />

        <Card
            key = {Sdata[4].id}
            imgsrc={Sdata[4].imgs}
            title={Sdata[4].title}
            sname={Sdata[4].sname}
            link={Sdata[4].links}
        
        />
        </>
        
        
    );
}

export default Netflix;