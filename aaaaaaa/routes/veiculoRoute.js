const express = require("express");

const router = express.Router();

// GET /veiculos
// Lista todos os veículos
router.get("/", (req, res) => {
    res.json({
        mensagem: "Listar todos os veículos"
    });
});

// GET /veiculos/:id
// Busca um veículo pelo ID
router.get("/:id", (req, res) => {
    res.json({
        mensagem: "Buscar veículo pelo ID",
        id: req.params.id
    });
});

// POST /veiculos
// Cadastra um novo veículo
router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastrar veículo",
        dados: req.body
    });
});

// PATCH /veiculos/:id
// Atualiza um veículo
router.patch("/:id", (req, res) => {
    res.json({
        mensagem: "Atualizar veículo",
        id: req.params.id,
        dados: req.body
    });
});

// DELETE /veiculos/:id
// Remove um veículo
router.delete("/:id", (req, res) => {
    res.json({
        mensagem: "Remover veículo",
        id: req.params.id
    });
});

module.exports = router;