import "dotenv/config";
import express from "express";

const app = express();

// rotas
app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
});

app.listen(4000, () => console.log(`🤖 Joeeelzão 🤖 - Server is running on PORT 4000`))