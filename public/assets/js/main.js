"use strict";

//Recuperar los datos de los proyectos

const projects = [
  {
    id: 0,
    img: [
      {
        src: "./assets/images/nerdflix.jpg",
        title: "Proyecto Anonymous-Proxy",
        alt: "Proyecto Anonymous-Proxy",
      },
    ],

    descripcion:
      "Web app hecha con Java y MySQL que muestra peliculas y series por genero, sus detalles y favoritos segun usuario logeado.",

    titulo: "Nerdflix en Java",

    tecnologias: ["HTML5", "CSS", "Java", "Tomcat", "SQL"],

    hrefWeb: "https://nerdflixbaroja.herokuapp.com/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/NerdFlixJava.git",
  },
  {
    id: 1,
    img: [
      {
        src: "./assets/images/nerdflix.jpg",
        title: "Proyecto Anonymous-Proxy",
        alt: "Proyecto Anonymous-Proxy",
      },
    ],

    descripcion:
      "Web app hecha con React, NodeJS y SQL que muestra peliculas y series por genero, sus detalles y favoritos segun usuario logeado.",

    titulo: "Nerdflix en React",

    tecnologias: ["HTML5", "CSS", "React", "NodeJS", "SQL"],

    hrefWeb: "",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Nerdflix-React-Node.git",
  },
  {
    id: 2,
    img: [
      {
        src: "./assets/images/RickyMorty1.jpg",
        title: "Proyecto RickyMorty",
        alt: "Proyecto RickyMorty",
      },
    ],

    descripcion:
      " Web app responsive hecha con React y React Router que filtra personajes de la serie y muestra los detalles del personaje seleccionado.",

    titulo: "Ricky and Morty",

    tecnologias: ["React", "JavaScript", "HTML5", "CSS"],

    hrefWeb: "",

    hrefGitHub: "",
  },
  {
    id: 3,
    img: [
      {
        src: "./assets/images/calendario_php.jpg",
        title: "Proyecto RickyMorty",
        alt: "Proyecto RickyMorty",
      },
    ],

    descripcion:
      "Web hecha en PHP que muestra el calendario escolar segun el año que indiques, sus festivos y vacaciones",

    titulo: "Calendario Escolar",

    tecnologias: ["PHP", "HTML5", "CSS"],

    hrefWeb: "",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Calendario_PHP.git",
  },
  {
    id: 4,
    img: [
      {
        src: "./assets/images/travelWorld.jpg",
        title: "Proyecto RickyMorty",
        alt: "Proyecto RickyMorty",
      },
    ],

    descripcion:
      "Web responsive Travel World en progreso. Se pretende refactorizar a React y Nodejs para hacer una WEB APP",

    titulo: "TravelWorld",

    tecnologias: ["HTML5", "CSS", "Javascript"],

    hrefWeb: " https://maribellopezromero.github.io/TravelWorld/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/TravelWorld.git",
  },
  {
    id: 5,
    img: [
      {
        src: "./assets/images/gmail.jpg",
        title: "Proyecto de gmail-react",
        alt: "Proyecto de gmail-react",
      },
    ],

    descripcion:
      "Web app responsive hecha con React y React Router que gestionar los correos que devuleve un api, filtrando y borrandolos.",

    titulo: "Gmail-React",

    tecnologias: ["React", "JavaScript", "HTML5", "CSS"],

    hrefWeb: "https://maribellopezromero.github.io/Gmail-React/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Gmail-React",
  },
  {
    id: 6,
    img: [
      {
        src: "./assets/images/montgomeryCards1.jpg",
        title: "Proyecto montgomery cards",
        alt: "Proyecto montgomery cards",
      },
    ],

    descripcion:
      " Web app que permite crear tarjetas de presentación de forma interactiva.",

    titulo: "Montgomery-Cards",

    tecnologias: ["JavaScript", "HTML5", "CSS", "SASS", "Scrum"],

    hrefWeb: "https://maribellopezromero.github.io/Montgomery-Cards/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Montgomery-Cards",
  },
  {
    id: 7,
    img: [
      {
        src: "./assets/images/AwesomeReact.jpg",
        title: "Proyecto Badalabers",
        alt: "Proyectos Badalabers",
      },
    ],

    descripcion:
      " Refactoriazacion de codigo heradado del proyecto Montgomery Cards con React.",

    titulo: "Badalabers",

    tecnologias: ["React", "JavaScript", "HTML5", "CSS", "SASS", "Scrum"],

    hrefWeb: "https://maribellopezromero.github.io/Montgomery-Cards/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Montgomery-Cards",
  },
  {
    id: 8,
    img: [
      {
        src: "./assets/images/series.jpg",
        title: "Proyecto buscador de series",
        alt: "Proyecto buscador de series",
      },
    ],

    descripcion:
      "Web app que busca series y filtra series, trayendoselas de un API y guardandolas en el local storage",

    titulo: "Buscador de series",

    tecnologias: ["JavaScript", "HTML5", "CSS"],

    hrefWeb:
      "https://maribellopezromero.github.io/Buscador-de-series/?input=friends",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Buscador-de-series",
  },

  {
    id: 9,
    img: [
      {
        src: "./assets/images/mareaCoders.jpg",
        title: "Proyecto Marea Coders",
        alt: "Proyecto Marea Coders",
      },
    ],

    descripcion: "Web grupal responsive. Con diferentes navegaciones.",

    titulo: "Marea Coders",

    tecnologias: ["HTML5", "CSS", "SASS", "Scrum"],

    hrefWeb: "https://maribellopezromero.github.io/Marea-Coder/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Marea-Coder",
  },
  {
    id: 10,
    img: [
      {
        src: "./assets/images/anonimus1.jpg",
        title: "Proyecto Anonymous-Proxy",
        alt: "Proyecto Anonymous-Proxy",
      },
    ],

    descripcion: " Web Anonymous Porxy responsive.",

    titulo: "Anonymous Proxy",

    tecnologias: ["HTML5", "CSS", "SASS", "Scrum"],

    hrefWeb: "https://maribellopezromero.github.io/Anonymous-Proxy/",

    hrefGitHub: "https://github.com/MaribelLopezRomero/Anonymous-Proxy",
  },
];

// fetch("projects.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const ul = document.querySelector(".js-listProjects");

ul.innerHTML = "";

for (let i = 0; i < projects.length; i++) {
  //li de tecnologias

  let listTech = "";
  const tech = projects[i].tecnologias;

  for (let j = 0; j < tech.length; j++) {
    listTech =
      listTech + `<li class= "main__projects__thechItem " >${tech[j]}</li>`;
  }

  //añadir cada proyecto a la lista
  ul.innerHTML =
    ul.innerHTML +
    `<li class="main__projects__card">

  <div class= "main__project__container js-image" id=${projects[i].id}>
    <img class= "main__projects__cardImage js-im" 
    src= ${projects[i].img[0].src}
    title= ${projects[i].img[0].title}
    alt= ${projects[i].img[0].alt}
    />
    <p class="main__projects__carddescription js-text"> ${projects[i].descripcion}</p>  
    </div>
    <h3 class="main__projects__cardTitle js-title">${projects[i].titulo}</h3>

    <ul class= "main__projects__thechList js-tech">` +
    listTech +
    `</ul> 
    <a
    href="${projects[i].hrefWeb}"
    class="main__projects__web js-hrefWeb"
    alt="Enlace a la web"
    title="Ver la web"
    target="_blank"
    >Web</a
  >
  <a
    href="${projects[i].hrefGitHub}"
    class="main__projects__code js-hrefGitHub"
    alt="Enlace a Github"
    title="Ver código"
    target="_blank"
    >Github</a
  >

 

</li>`;
}

//   //id
//   const id = document.querySelector(".js-image");
//   id.setAttribute("id", projects[i].id);

//   //imagen

//   const img = document.querySelector(".js-im");
//   img.setAttribute("src", projects[i].img[0].src);
//   img.setAttribute("title", projects[i].img[0].title);
//   img.setAttribute("alt", projects[i].img[0].alt);

//   //descripcio

//   const descripcion = document.querySelector(".js-text");
//   descripcion.innerHTML = projects[i].descripcion;

//   //titulo

//   const titulo = document.querySelector(".js-title");
//   titulo.innerHTML = projects[i].titulo;

//   //tecnologias

//   const tecnologias = document.querySelector(".js-tech");

//   const tech = projects[i].tecnologias;
//   tecnologias.innerHTML = null;

//   for (let i = 0; i < tech.length; i++) {
//     tecnologias.innerHTML =
//       tecnologias.innerHTML +
//       `<li class= "main__projects__thechItem " >${tech[i]}</li>`;
//   }

//   //enlace a web

//   const hrefWeb = document.querySelector(".js-hrefWeb");
//   hrefWeb.setAttribute("href", projects[i].hrefWeb);

//   //enlace a GitHub

//   const hrefGitHub = document.querySelector(".js-hrefGitHub");
//   hrefGitHub.setAttribute("href", projects[i].hrefGitHub);
// }

//Tarjetas

const container = document.querySelectorAll(".js-image");
const description = document.querySelectorAll(".js-text");

function showText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.toggle("js-projects");
  description[id].classList.toggle("js-text");
}
function hideText(event) {
  const id = parseInt(event.currentTarget.id);
  description[id].classList.toggle("js-text");
  description[id].classList.toggle("js-projects");
}

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("mouseover", showText);
  container[i].addEventListener("mouseout", hideText);
}

//# sourceMappingURL=main.js.map
