console.log("JS carregou");

ScrollReveal().reveal('.hero', {
  distance: '50px',
  duration: 800,
  origin: 'bottom',
  reset: false
});

ScrollReveal().reveal('#sobre', {
  distance: '50px',
  duration: 800,
  origin: 'bottom',
  delay: 200
});

ScrollReveal().reveal('#habilidades .skill-card', {
  interval: 200
});

ScrollReveal().reveal('#projetos .projeto', {
  interval: 200
});

ScrollReveal().reveal('#contato', {
  delay: 200
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

const projetos = [
  {
    nome: "CoffeeTime",
    descricao: "CoffeeTime é um site moderno para uma cafeteria, com cardápio interativo, informações sobre o local e design responsivo, proporcionando uma experiência fluida e acolhedora em qualquer dispositivo.",
    imagem: "imagens/projeto-1.png",
    link: "https://antoniofrancisco2.github.io/projeto-cafeteria/"
  },
  {
    nome: "Cine Flix",
    descricao: "Site responsivo que simula um aplicativo de filmes e séries, desenvolvido com tecnologias de front-end. Possui um design moderno e experiência de usuário otimizada, focando em navegação intuitiva e visual atrativo.",
    imagem: "imagens/cineflix-websit.png",
    link: "https://antoniofrancisco2.github.io/movie-website/"
  },
  {
    nome: "Projeto NLW Connect",
    descricao: "O projeto é um site responsivo de inscrição e indicação para eventos. Esse é um projeto do evento NLW Connect, um dos conteúdos disponíveis para alunos da Rocketseat.",
    imagem: "imagens/nlw-connect-devStage.png",
    link: "https://antoniofrancisco2.github.io/nlw-connect-devstage/"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);
});




const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
});

/* FECHAR AO CLICAR */
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        menu.classList.remove("active");
    });
});

window.sr = new ScrollReveal();

    sr.reveal('.skills');
    sr.reveal('#html-skill', { delay: 400 });
    sr.reveal('#css-skill', { delay: 500 });
    sr.reveal('#js-skill', { delay: 600 });


    window.sr = new ScrollReveal();

    sr.reveal('#cards');
    