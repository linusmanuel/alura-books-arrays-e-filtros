const ordenarPrecos = document.querySelector('#btnOrdenarPorPreco');

ordenarPrecos.addEventListener('click', () => {
	console.log('Oi');
	ordenarLivrosPorPreco();
});

function ordenarLivrosPorPreco() {
	let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
	exibeLivrosNaTela(livrosOrdenados);
}
