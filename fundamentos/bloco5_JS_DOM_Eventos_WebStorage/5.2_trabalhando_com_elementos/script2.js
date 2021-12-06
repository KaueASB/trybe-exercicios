// parte 1
const ondeVcEsta = document.getElementById("elementoOndeVoceEsta");
const pai = ondeVcEsta.parentElement;
pai.style.color = "red";

const firstchildOfChild = ondeVcEsta.firstElementChild;
firstchildOfChild.innerText = "primeiro filho do filho alterado";

const firstChild = pai.firstElementChild;

const firstChild2 = ondeVcEsta.previousElementSibling;

const atention = ondeVcEsta.nextSibling;

const thirdChild = ondeVcEsta.nextElementSibling;

const thirdChild2 = pai.lastElementChild.previousElementSibling;

// parte 2
const irmaoOndeVcEsta = document.createElement("section");
irmaoOndeVcEsta.id = "irmaoOndeVcEsta";
pai.appendChild(irmaoOndeVcEsta);

const filhoOndeVcEsta = document.createElement("section");
filhoOndeVcEsta.id = "filho";
ondeVcEsta.appendChild(filhoOndeVcEsta);

const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";
firstchildOfChild.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiro =
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiro);

// parte 3
const pai = document.getElementById("pai");

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== "elementoOndeVoceEsta") {
    currentChildren.remove();
  }
}
