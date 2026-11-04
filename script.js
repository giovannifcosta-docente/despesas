let total = 0;

function adicionar() {
  let despesaTexto = document.getElementById('despesaInput').value;
  let despesaValor = Number(document.getElementById('valorInput').value);

  total = total + despesaValor;
  document.getElementById('total').innerText = total;

  document.getElementById('listaDespesas').innerHTML +=
    '<li>' + despesaTexto + ' - R$ ' + despesaValor + ' <button onclick="excluir(this, ' + despesaValor + ')">Excluir</button></li>';

  document.getElementById('despesaInput').value = '';
  document.getElementById('valorInput').value = '';

  gravarDados();
}

function excluir(botao, valor) {
  total = total - valor;
  document.getElementById('total').innerText = total;
  botao.parentElement.remove();

  gravarDados();
}

function gravarDados() {
  localStorage.setItem('lista', document.getElementById('listaDespesas').innerHTML);
  localStorage.setItem('total', total);
}

function lerDados() {
  let listaSalva = localStorage.getItem('lista');
  let totalSalvo = localStorage.getItem('total');

  if (listaSalva) {
    document.getElementById('listaDespesas').innerHTML = listaSalva;
    total = Number(totalSalvo);
    document.getElementById('total').innerText = total;
  }
}
