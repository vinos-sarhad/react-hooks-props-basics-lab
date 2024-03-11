import React from "react";
import Links from "./Links";
function About({bio , links}) {
    console.log( {links} )
    // console.log( {linkedin} )
    console.log( {bio} )

function Exist(){
  if({bio} && bio.length>0){

    return (
      <div>
      
        <p>{bio}</p>
        {/* <Links github={github} linkedin={linkedin} /> */}
      </div>
    );

  }else{
    return (
      <div>
        {/* <Links github={github} linkedin={linkedin} /> */}
      </div>)
  }
}
    
  

  return (
    <div id="about">
      <h2>About Me</h2>
       
      <p><Exist have={Exist}/></p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made thisd" />

       
      <Links github={links.github} linkedin={links.linkedin}  />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
