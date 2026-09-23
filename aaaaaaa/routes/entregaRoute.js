const express = require("express");

const router = express.Router();

// GET /entregas
// Lista todas as entregas
router.get("/", (req, res) => {
    res.json({
        mensagem: "Listar todas as entregas"
    });
});

// GET /entregas/:id
// Busca uma entrega pelo ID
router.get("/:id", (req, res) => {
    res.json({
        mensagem: "Buscar entrega pelo ID",
        id: req.params.id
    });
});

// POST /entregas
// Cria uma nova entrega
router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Criar entrega",
        dados: req.body
    });
});

// PATCH /entregas/:id
// Atualiza uma entrega
router.patch("/:id", (req, res) => {
    res.json({
        mensagem: "Atualizar entrega",
        id: req.params.id,
        dados: req.body
    });
});

// DELETE /entregas/:id
// Remove uma entrega
router.delete("/:id", (req, res) => {
    res.json({
        mensagem: "Remover entrega",
        id: req.params.id
    });
});

module.exports = router;