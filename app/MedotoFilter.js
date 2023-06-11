const buttonsFilter = document.querySelectorAll('[data-btn-filter]');

buttonsFilter.forEach((buttonFilter) => {
	buttonFilter.addEventListener('click', (event) => {
		const tag = event.target.dataset.btnFilter;
		filtrarLivros(tag);
	});
});

function filtrarLivros(categoria) {
	let livrosFiltrados = livros.filter((livro) => livro.categoria === categoria);
	console.table(livrosFiltrados);
}
