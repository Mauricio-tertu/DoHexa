import './home.css'
import * as React from 'react';

import img2 from "./img/s4.png"
import img from "./img/s2.png"





export default function Home(){
    return(
        <div className='home'>
            <nav class="navbar navbar-expand-lg bg-light w-auto fixed">
  <div class="container-fluid">
  <img id="img" src={img} class="col-1 me-4 " />
    <a class="navbar-brand" href="#">DoHexa</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
        <p class="mb-2 mb-lg-0 ms-5">Personalize sua Taça do Hexa brasileiro   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
</svg> </p>
 </li>
         
       
    </ul>
    <a class="nav-link active me-4" aria-current="page" href="#">Contatos</a>

   <a href="http://localhost:3000/login">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="currentColor" class="bi bi-person-square text-dark me-3" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg></a>
    </div>
  
  </div>
</nav>
<div class="col-7 mx-auto mt-3 bg-white bg-opacity-75 text-white  rounded-4 p-4" align="center" >

<img id='taca' src={img2} class="" align="center"  alt="..."/>
<div>
<div class="btn ms-5 text-white">
  <input type="checkbox" class="btn-check " id="btncheck1" autocomplete="off"/>
  <label class="btn btn-outline-dark" for="btncheck1">Adicionar Nome</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
  <label class="btn btn-outline-dark m-4" for="btncheck2">Adicionar foto</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
  <label class="btn btn-outline-dark" for="btncheck3">Adicionar Cor</label>
</div>
<div>


<a href="http://localhost:3000/login" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></a>
</div>
</div>

</div>
 </div>
    )
}