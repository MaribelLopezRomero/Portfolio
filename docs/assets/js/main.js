"use strict";const projects=[{id:0,img:[{src:"./assets/images/nerdflix.jpg",title:"Proyecto Anonymous-Proxy",alt:"Proyecto Anonymous-Proxy"}],descripcion:"Web app hecha con Java y MySQL que muestra peliculas y series por genero, sus detalles y favoritos segun usuario logeado.",titulo:"Nerdflix en Java",tecnologias:["HTML5","CSS","Java","Tomcat","SQL"],hrefWeb:"https://nerdflixbaroja.herokuapp.com/",hrefGitHub:"https://github.com/MaribelLopezRomero/NerdFlixJava.git"},{id:1,img:[{src:"./assets/images/nerdflix.jpg",title:"Proyecto Anonymous-Proxy",alt:"Proyecto Anonymous-Proxy"}],descripcion:"Web app hecha con React, NodeJS y SQL que muestra peliculas y series por genero, sus detalles y favoritos segun usuario logeado.",titulo:"Nerdflix en React",tecnologias:["HTML5","CSS","React","NodeJS","SQL"],hrefWeb:"",hrefGitHub:"https://github.com/MaribelLopezRomero/Nerdflix-React-Node.git"},{id:2,img:[{src:"./assets/images/RickyMorty1.jpg",title:"Proyecto RickyMorty",alt:"Proyecto RickyMorty"}],descripcion:" Web app responsive hecha con React y React Router que filtra personajes de la serie y muestra los detalles del personaje seleccionado.",titulo:"Ricky and Morty",tecnologias:["React","JavaScript","HTML5","CSS"],hrefWeb:"",hrefGitHub:""},{id:3,img:[{src:"./assets/images/calendario_php.jpg",title:"Proyecto RickyMorty",alt:"Proyecto RickyMorty"}],descripcion:"Web hecha en PHP que muestra el calendario escolar segun el año que indiques, sus festivos y vacaciones",titulo:"Calendario Escolar",tecnologias:["PHP","HTML5","CSS"],hrefWeb:"",hrefGitHub:"https://github.com/MaribelLopezRomero/Calendario_PHP.git"},{id:4,img:[{src:"./assets/images/travelWorld.jpg",title:"Proyecto RickyMorty",alt:"Proyecto RickyMorty"}],descripcion:"Web responsive Travel World en progreso. Se pretende refactorizar a React y Nodejs para hacer una WEB APP",titulo:"TravelWorld",tecnologias:["HTML5","CSS","Javascript"],hrefWeb:" https://maribellopezromero.github.io/TravelWorld/",hrefGitHub:"https://github.com/MaribelLopezRomero/TravelWorld.git"},{id:5,img:[{src:"./assets/images/gmail.jpg",title:"Proyecto de gmail-react",alt:"Proyecto de gmail-react"}],descripcion:"Web app responsive hecha con React y React Router que gestionar los correos que devuleve un api, filtrando y borrandolos.",titulo:"Gmail-React",tecnologias:["React","JavaScript","HTML5","CSS"],hrefWeb:"https://maribellopezromero.github.io/Gmail-React/",hrefGitHub:"https://github.com/MaribelLopezRomero/Gmail-React"},{id:6,img:[{src:"./assets/images/montgomeryCards1.jpg",title:"Proyecto montgomery cards",alt:"Proyecto montgomery cards"}],descripcion:" Web app que permite crear tarjetas de presentación de forma interactiva.",titulo:"Montgomery-Cards",tecnologias:["JavaScript","HTML5","CSS","SASS","Scrum"],hrefWeb:"https://maribellopezromero.github.io/Montgomery-Cards/",hrefGitHub:"https://github.com/MaribelLopezRomero/Montgomery-Cards"},{id:7,img:[{src:"./assets/images/AwesomeReact.jpg",title:"Proyecto Badalabers",alt:"Proyectos Badalabers"}],descripcion:" Refactoriazacion de codigo heradado del proyecto Montgomery Cards con React.",titulo:"Badalabers",tecnologias:["React","JavaScript","HTML5","CSS","SASS","Scrum"],hrefWeb:"https://maribellopezromero.github.io/Montgomery-Cards/",hrefGitHub:"https://github.com/MaribelLopezRomero/Montgomery-Cards"},{id:8,img:[{src:"./assets/images/series.jpg",title:"Proyecto buscador de series",alt:"Proyecto buscador de series"}],descripcion:"Web app que busca series y filtra series, trayendoselas de un API y guardandolas en el local storage",titulo:"Buscador de series",tecnologias:["JavaScript","HTML5","CSS"],hrefWeb:"https://maribellopezromero.github.io/Buscador-de-series/?input=friends",hrefGitHub:"https://github.com/MaribelLopezRomero/Buscador-de-series"},{id:9,img:[{src:"./assets/images/mareaCoders.jpg",title:"Proyecto Marea Coders",alt:"Proyecto Marea Coders"}],descripcion:"Web grupal responsive. Con diferentes navegaciones.",titulo:"Marea Coders",tecnologias:["HTML5","CSS","SASS","Scrum"],hrefWeb:"https://maribellopezromero.github.io/Marea-Coder/",hrefGitHub:"https://github.com/MaribelLopezRomero/Marea-Coder"},{id:10,img:[{src:"./assets/images/anonimus1.jpg",title:"Proyecto Anonymous-Proxy",alt:"Proyecto Anonymous-Proxy"}],descripcion:" Web Anonymous Porxy responsive.",titulo:"Anonymous Proxy",tecnologias:["HTML5","CSS","SASS","Scrum"],hrefWeb:"https://maribellopezromero.github.io/Anonymous-Proxy/",hrefGitHub:"https://github.com/MaribelLopezRomero/Anonymous-Proxy"}],ul=document.querySelector(".js-listProjects");ul.innerHTML="";for(let e=0;e<projects.length;e++){let o="";const t=projects[e].tecnologias;for(let e=0;e<t.length;e++)o+=`<li class= "main__projects__thechItem " >${t[e]}</li>`;ul.innerHTML=ul.innerHTML+`<li class="main__projects__card">\n\n  <div class= "main__project__container js-image" id=${projects[e].id}>\n    <img class= "main__projects__cardImage js-im" \n    src= ${projects[e].img[0].src}\n    title= ${projects[e].img[0].title}\n    alt= ${projects[e].img[0].alt}\n    />\n    <p class="main__projects__carddescription js-text"> ${projects[e].descripcion}</p>  \n    </div>\n    <h3 class="main__projects__cardTitle js-title">${projects[e].titulo}</h3>\n\n    <ul class= "main__projects__thechList js-tech">`+o+`</ul> \n    <a\n    href="${projects[e].hrefWeb}"\n    class="main__projects__web js-hrefWeb"\n    alt="Enlace a la web"\n    title="Ver la web"\n    target="_blank"\n    >Web</a\n  >\n  <a\n    href="${projects[e].hrefGitHub}"\n    class="main__projects__code js-hrefGitHub"\n    alt="Enlace a Github"\n    title="Ver código"\n    target="_blank"\n    >Github</a\n  >\n\n \n\n</li>`}const container=document.querySelectorAll(".js-image"),description=document.querySelectorAll(".js-text");function showText(e){const o=parseInt(e.currentTarget.id);description[o].classList.toggle("js-projects"),description[o].classList.toggle("js-text")}function hideText(e){const o=parseInt(e.currentTarget.id);description[o].classList.toggle("js-text"),description[o].classList.toggle("js-projects")}for(let e=0;e<container.length;e++)container[e].addEventListener("mouseover",showText),container[e].addEventListener("mouseout",hideText);