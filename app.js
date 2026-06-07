
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);


document.querySelectorAll("section").forEach(el => observer.observe(el));


// ===========================
// DIGITAÇÃO DO NOME
// ===========================
const titulo = document.querySelector("#typing-name");
const texto = titulo.textContent;
titulo.textContent = "";
let i = 0;

function escrever() {
    if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 80);
    }
}
escrever();


// ===========================
// BOTÃO TOPO
// ===========================
const topo = document.createElement("button");
topo.innerHTML = "↑";
topo.classList.add("topo");
document.body.appendChild(topo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topo.classList.add("ativo");
    } else {
        topo.classList.remove("ativo");
    }
});

topo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===========================
// MOVIMENTO SUAVE HERO
// ===========================
const hero = document.querySelector(".hero-bg");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    hero.style.transform = `translate(${x * 30}px, ${y * 30}px) ${window.innerWidth <= 768 ? 'scale(1)' : ''}`;
});

