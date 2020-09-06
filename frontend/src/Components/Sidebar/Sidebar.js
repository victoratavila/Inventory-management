import React from 'react';
import './style.css';

export default function Sidebar(){
    return(

<>
<div className="sidebar">
<header>Sistema de estoque</header>
<ul>
<li><a href="/"><i className="fas fa-qrcode"></i>Visão geral</a></li>
<li><a href="/produtos"><i className="fas fa-link"></i>Produtos</a></li>
<li><a href="/"><i className="fas fa-stream"></i>Entrada/Saída</a></li>
<li><a href="/"><i className="fas fa-calendar-week"></i>Events</a></li>
<li><a href="/"><i className="far fa-question-circle"></i>About</a></li>
<li><a href="/"><i className="fas fa-sliders-h"></i>Services</a></li>
<li><a href="/"><i className="far fa-envelope"></i>Contact</a></li>
</ul>
</div>
<section></section>
</>

)
};