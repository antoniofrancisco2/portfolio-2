const projetos = [
  {
    nome: "Cafeteria",
    descricao: "cafeteria dos sonhos",
    imagem: "imagens/download.jpg",
    link: "#"
  },
  {
    nome: "MixOn",
    descricao: "E-commerce completo.",
    imagem: "imagens/mixon.png",
    link: "#"
  },
  {
    nome: "InfoPrime",
    descricao: "Assistência técnica.",
    imagem: "imagens/infoprime.png",
    link: "#"
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
    