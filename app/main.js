const endpointDaAPI =
	'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = [];

async function getBuscarLivos() {
	const res = await fetch(endpointDaAPI);
	livros = await res.json();
	let livroComDesconto = aplicarDesconto(livros);
	exibeLivrosNaTela(livroComDesconto);
}

getBuscarLivos();
