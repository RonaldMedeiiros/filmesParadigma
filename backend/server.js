const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
const filmes = [
    { id: 1, titulo: "Inception", imagem: "https://100grana.wordpress.com/wp-content/uploads/2010/05/newinceptionposter.jpg", link: "https://www.imdb.com/title/tt1375666/" },
    { id: 2, titulo: "Interstellar", imagem: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg", link: "https://www.imdb.com/title/tt0816692/" },
    { id: 3, titulo: "The Dark Knight", imagem: "https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2011/07/batman1.jpg", link: "https://www.imdb.com/title/tt0468569/" }
];

app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
