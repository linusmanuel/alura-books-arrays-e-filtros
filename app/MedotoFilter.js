const buttonsFilter = document.querySelectorAll('[data-btn-filter]');

buttonsFilter.forEach((buttonFilter) => {
	buttonFilter.addEventListener('click', (event) => {
		const categoria = event.target.dataset.btnFilter;
		filtrarLivros(categoria);
	});
});

function filtrarLivros(categoria) {
	let livrosFiltrados = livros.filter((livro) => livro.categoria === categoria);
	exibeLivrosNaTela(livrosFiltrados);
}
