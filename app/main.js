const endpointDaAPI =
	'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = [];
const elementoParaInserirLivros = document.querySelector('#livros');

async function getBuscarLivos() {
	const res = await fetch(endpointDaAPI);
	livros = await res.json();
	console.table(livros);
	exibeLivrosNaTela(livros);
}

function exibeLivrosNaTela(listaDeLivros) {
	livros.forEach((livro) => {
		elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    `;
	});
}

getBuscarLivos();
