const buttonsFilter = document.querySelectorAll('[data-btn-filter]');

buttonsFilter.forEach((buttonFilter) => {
	buttonFilter.addEventListener('click', (event) => {
		const categoria = event.target.dataset.btnFilter;
		filtrarLivros(categoria);
	});
});

function filtrarLivros(categoria) {
	let livrosFiltrados =
		categoria == 'disponiveis'
			? livros.filter((livro) => livro.quantidade > 0)
			: livros.filter((livro) => livro.categoria === categoria);
	exibeLivrosNaTela(livrosFiltrados);
}
