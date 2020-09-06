import React from 'react';
import './style.css';

export default function Dashboard(){
   return (
<>
<div className = "mainContainer"> 

<div id = "firstContent"> 

    <br/>
    <div className = "square">
        <br/> <br/>
        <h1 className="mainText"> 23 </h1>
        <h5 className = "subtext">Produtos cadastrados</h5>
    </div>

    <br/>  
    <div className = "square"> 
        <br/> <br/>
        <h1 className="mainText">10</h1>
        <h5 className = "subtext">Produtos cadastrados</h5>
    </div> 

    <br/>  
    <div className = "square">
        <br/> <br/>
        <h1 className="mainText">10</h1>
        <h5 className = "subtext">Valor em estoque</h5>
    </div>

</div>

</div>
</>

   )
   
}