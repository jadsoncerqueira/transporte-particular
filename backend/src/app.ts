import app from "./server/server";

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

export default server;