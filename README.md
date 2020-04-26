# FilmsShow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Informações
1 - O arquivo Filmes.json foi desenvolvido como um model, com uma variavel em objeto literal simulando o arquivo FILMES.json.

2 - O solicitado da questão de mostrar as "informações do filme" aparece no hover ao mover o mouse no texto "Ver informações", e ao clicar no link ver sinopse, voce sera encaminhado para a pagina especifica de descrição filme.

3 - Foi configurado os arquivos routing app e movie, para fazer a troca de telas utilizando a tag angular <router-outlet>.

4 - Desenvolvido componente movie-list com o template da list a ser apresentada.

5 - Componente movie-detail é encarregado de fazer o subscribe na lista FILMES.json por id enviando os detalhes do elemento por input para o proximo elemento movie-info, que carregara a tela de descrição com essas informações.

6 - Componente movie-service é responsavel por importar o FILMES.json e pelo metodo getMovies, que utilizaremos no componente movie-list no NgOnInit para salvar a lista de filmes em uma variavel.

7 - No componente movie-list na parte do template html, utilizamos o ngIf para verificar se possuem novas informações nessa lista, assim publicando elas com o template organizado com NgFor.
 
