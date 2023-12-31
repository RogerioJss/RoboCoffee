
import { createGlobalStyle } from  "styled-components";
import CoresTemaEscuro from "../../Colors/cores"


const EstilosGlobais = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

* {
  margin: 0; /*zera todas as medidas de margem que o navegador coloca*/
  padding: 0;/*zera todas as medidads de preenchimento que o navegador colocar*/
  box-sizing: border-box; /* medida do tamanho da caixa é definida a partir da medida da borda*/
}
body {
  margin: 0;
  background-color: ${CoresTemaEscuro.corDeFundo};
  font-family: 'Inder', sans-serif;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}


abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}


small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}


img {
  border-style: none;
}



button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}



button,
input { /* 1 */
  overflow: visible;
}


button,
select { /* 1 */
  text-transform: none;
}



button,
[type="button"],
[type="reset"],
[type="submit"] {
-webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}



button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
outline: 1px dotted ButtonText;
}



fieldset {
  padding: 0.35em 0.75em 0.625em;
}



legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}



progress {
  vertical-align: baseline;
}



textarea {
  overflow: auto;
}



[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}



[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}



[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}



::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}



details {
  display: block;
}



summary {
  display: list-item;
}



template {
  display: none;
}



[hidden] {
  display: none;
}

.icones{
  width: 30px !important;
  height: 30px !important;
}

#userIcon{
  position: absolute !important;
  right: 80% !important;
}

#senhaIcon{
  position: absolute !important;
  bottom: 47px !important;
  left: 20px;
  
}

#mostrarSenha{
  position: absolute !important;
  bottom: 47px !important;
  right: -10px;
  transition: transform 0.4s ease;
}

#mostrarSenha:hover{
  transform: scale(1.3) !important;
}

@media(max-width: 1920px){
  #userIcon{
    position: absolute !important;
    top: 24%;
    left: 3%;
  }

  #senhaIcon{
  position: absolute !important;
  top: 24%;
  left: 3%;
}

  #mostrarSenha{
    position: absolute !important;
    bottom: 20% !important;
    right: 20px;
    transition: transform 0.4s ease;
    width: 30px;
    height: 30px;
}
}

.itemNavecacao{
  width: 50px !important;
  height: 50px !important;
}
  
/* Profile Picture*/
.dropzone {
  color: ${CoresTemaEscuro.corBackgroundBotoes} ; 
  background-color: white;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  height: 184px;
  max-width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black ;
  transition: transform 0.3s ease;

}

.dropzone:hover{
  transform: scale(1.1);
}

.image-preview img{
  width: 215px;
  height: 188px;
  border-radius: 50%;
  border: 2px solid;
}

.image-preview{
  transition: transform 0.5s ease;
}

.image-preview:hover{
  transform: scale(1.0);
}

//Modal

.conteudoModal{
  background-color: white;
  width: 100%;
  
  @media (min-width: 1000px) {
    width: 40%;
    left: 30%;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  
  display: flex;
 
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
  position: absolute;
  padding: 0.5rem;
  border-radius: 1.5625rem;
  border: 2x solid ${CoresTemaEscuro.corBackgroundBotoes} !important;
  top: 6vh;
  z-index: 2;
  border: 0.1875rem solid ;
}

.conteudoModal button{
  position: absolute;
  right: -15px;
  top: -30px;
  
}


// Horario/DivEstilizada/ContainerLinhaSol/sol





//ModaltTerreiroConteudo
.modalTerreiroConteudo{
  background-color: white;
  max-width: 720px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  position: absolute;
  bottom: 5%;
  
  @media (min-width: 1006px) {
      left: 29%;
      width: 70%;
      gap:67px;
      height: 80%;
      min-height: 585px;
      input {
        width: 100%;
      }
    }
  z-index: 3;
  border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
}


.modalTerreiroConteudo button{
  width: 50%;
  @media (max-width: 600px) {
    width: 80%;
  }
  color: ${CoresTemaEscuro.corVerdePositivo};
  border: 2px solid ${CoresTemaEscuro.corVerdePositivo};
  text-align: center;
}


//Modal controle
.modalControleConteudo{
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 40%;
  min-width: 20.8125rem;
  gap: 2.0625rem;
  padding: 0.9375rem;
  border-radius: 1.25rem;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  position: absolute;
  top: 16.5vh;
  margin: auto;
  height: 83vh;
  left: 56%;
}

// controle individual

.controleIndividualConteudo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  @media (min-width: 850px){
   width: 40%;
   left: 30%;
   gap:2rem;
   top: 16vh;
  }
  gap: 1.25rem;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  border-radius: 0.9375rem;
  position: absolute;
  margin: auto;
  
  top: 96vh;
  padding: 15px;

}



// Modal Confirmar Apagar

.modalConfirmarApagarConteudo{
  background-color: white;
  border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
    top: 35vh;
    left: 30%;
  }
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  margin: auto;
  position: absolute;
  
  top: 100vh;
  z-index: 2;
  gap: 30px;
}

//Opacidade das modais
.modalOpacity{
  opacity: 0.5;
  pointer-events: none;
  overflow: hidden;
}

// Modal Notificação

.modalNotificacaoConteudo{
  background-color: ${CoresTemaEscuro.corBackgroundBotoes};
  min-height: 100vh;
  max-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 15px;
  border: 2px solid white;
  border-radius: 10px;

}


`

export default EstilosGlobais