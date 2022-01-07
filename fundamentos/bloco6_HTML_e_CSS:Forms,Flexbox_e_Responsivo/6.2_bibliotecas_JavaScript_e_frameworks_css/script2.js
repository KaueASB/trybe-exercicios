let estado = document.getElementById('estado');
let listaEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for(let i = 0; i < listaEstados.length; i += 1) {
    let option = document.createElement('option');
    option.innerText = listaEstados[i];
    estado.appendChild(option);
  }