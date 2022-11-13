"use strict";

//Recuperar los datos de los proyectos

const projects = [
  {
    id: 0,
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
    id: 1,
    img: [
      {
        src: "./assets/images/RickyMorty1.jpg",
        title: "Proyecto RickyMorty",
        alt: "Proyecto RickyMorty",
      },
    ],

    descripcion:
      " Web app responsive hecha con React y React Router que filtra personajes de la serie y muestra los detalles del personaje seleccionado.",

    titulo: "Ritikjghjkgcky and Morty",

    tecnologias: ["React", "JavaScript", "HTML5", "CSS"],

    hrefWeb: "",

    hrefGitHub: "",
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
