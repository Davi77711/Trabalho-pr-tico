const express = require("express");

const motoristaRoutes = require("./routes/motoristaRoute");
const veiculoRoutes = require("./routes/veiculoRoute");
const entregaRoutes = require("./routes/entregaRoute");

const app = express();

// Permite receber JSON nas requisições
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API LogiTech Express funcionando!"
    });
});

// Rotas da aplicação
app.use("/motoristas", motoristaRoutes);
app.use("/veiculos", veiculoRoutes);
app.use("/entregas", entregaRoutes);

// Porta do servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});