# Filmes Paradigma

Este projeto é uma aplicação web simples que lista filmes com seus respectivos cartazes. O backend fornece uma API que retorna informações sobre os filmes, e o frontend consome essa API para exibir os filmes em uma interface visual.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Gerenciamento de Pacotes**: npm

## Estrutura do Projeto

```
/frontend
    ├── index.html    # Página principal do frontend
    ├── styles.css    # Estilos para o frontend
/backend
    ├── server.js     # Servidor Node.js com a API de filmes
```

## Instalação

### Backend

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/filmesParadigma.git
   cd filmesParadigma/backend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor**:
   ```bash
   node server.js
   ```
   O servidor estará rodando em `http://localhost:3000` e a API de filmes estará disponível em `http://localhost:3000/api/filmes`.

### Frontend

1. Navegue até a pasta `frontend`:
   ```bash
   cd ../frontend
   ```

2. Use um servidor HTTP simples para servir a página, como o `http-server`:
   ```bash
   npx http-server -p 4000
   ```

   O frontend estará disponível em `http://localhost:4000`.

## Uso

Quando o frontend estiver rodando em `http://localhost:4000` e o backend em `http://localhost:3000`, os filmes e seus cartazes serão listados na página inicial. Ao clicar em um cartaz, o usuário será redirecionado para a página do filme (definida na API).

### Exemplo de Filmes

Os filmes são retornados pela API em formato JSON, como no exemplo abaixo:

```json
[
    { id: 1, titulo: "Inception", imagem: "https://100grana.wordpress.com/wp-content/uploads/2010/05/newinceptionposter.jpg", link: "https://www.imdb.com/title/tt1375666/" },
    { id: 2, titulo: "Interstellar", imagem: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg", link: "https://www.imdb.com/title/tt0816692/" },
    { id: 3, titulo: "The Dark Knight", imagem: "https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2011/07/batman1.jpg", link: "https://www.imdb.com/title/tt0468569/" }
]
```

## Personalização

- Para adicionar novos filmes, edite o arquivo `server.js` no backend, na variável `filmes`.
- Você pode modificar o estilo do frontend no arquivo `styles.css`.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Dê um push para a branch (`git push origin feature/nova-feature`).
5. Crie um Pull Request.
