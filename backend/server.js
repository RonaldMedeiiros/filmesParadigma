const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let filmes = [
    { id: 1, titulo: "Inception", imagem: "https://100grana.wordpress.com/wp-content/uploads/2010/05/newinceptionposter.jpg", link: "https://www.imdb.com/title/tt1375666/" },
    { id: 2, titulo: "Interstellar", imagem: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg", link: "https://www.imdb.com/title/tt0816692/" },
    { id: 3, titulo: "The Dark Knight", imagem: "https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2011/07/batman1.jpg", link: "https://www.imdb.com/title/tt0468569/" }
];

app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});


app.post('/api/filmes', (req, res) => {
    const { titulo, imagem, link } = req.body;

    
    if (!titulo || !imagem || !link) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios: título, imagem e link." });
    }

    
    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        imagem,
        link
    };

    filmes.push(novoFilme);
    res.status(201).json({ message: "Filme adicionado com sucesso!", filme: novoFilme });
});

app.put('/api/filmes/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, imagem, link } = req.body;

    if (!titulo || !imagem || !link) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios: título, imagem e link." });
    }

    const filmeIndex = filmes.findIndex(filme => filme.id === parseInt(id));

    if (filmeIndex !== -1) {
        filmes[filmeIndex] = { id: parseInt(id), titulo, imagem, link };
        res.json({ message: "Filme atualizado com sucesso!", filme: filmes[filmeIndex] });
    } else {
        res.status(404).json({ message: "Filme não encontrado." });
    }
});

app.delete('/api/filmes/:id', (req, res) => {
    const { id } = req.params;

    const filmeIndex = filmes.findIndex(filme => filme.id === parseInt(id));

    if (filmeIndex !== -1) {
        const filmeRemovido = filmes.splice(filmeIndex, 1);
        res.json({ message: "Filme removido com sucesso!", filme: filmeRemovido });
    } else {
        res.status(404).json({ message: "Filme não encontrado." });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
