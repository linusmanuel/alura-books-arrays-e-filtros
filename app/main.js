const endpointDaAPI =
	'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = [];

async function getBuscarLivos() {
	const res = await fetch(endpointDaAPI);
	livros = await res.json();
	livros.forEach((livro) => console.table(livro));
}

getBuscarLivos();
