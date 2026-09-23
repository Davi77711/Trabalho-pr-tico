const express = require("express");

const router = express.Router();

// GET /motoristas
// Lista todos os motoristas
router.get("/", (req, res) => {
    res.json({
        mensagem: "Listar todos os motoristas"
    });
});

// GET /motoristas/:id
// Busca um motorista pelo ID
router.get("/:id", (req, res) => {
    res.json({
        mensagem: "Buscar motorista pelo ID",
        id: req.params.id
    });
});

// POST /motoristas
// Cadastra um novo motorista
router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastrar motorista",
        dados: req.body
    });
});

// PATCH /motoristas/:id
// Atualiza um motorista
router.patch("/:id", (req, res) => {
    res.json({
        mensagem: "Atualizar motorista",
        id: req.params.id,
        dados: req.body
    });
});

// DELETE /motoristas/:id
// Remove um motorista
router.delete("/:id", (req, res) => {
    res.json({
        mensagem: "Remover motorista",
        id: req.params.id
    });
});

module.exports = router;