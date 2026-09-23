# TESTS.md

# Plano de Testes - LogiTech Express

## Objetivo

Documentar os principais cenários de teste da API da LogiTech Express,
identificando possíveis falhas nas rotas, regras de negócio e banco de dados.

# CT001 - Cadastro de motorista com CPF duplicado

**Requisito:** POST /motoristas

**Tipo:** Caixa Preta / Teste de Sistema

**Pré-condição:**
- Já deve existir um motorista com o CPF informado.

**Entrada:**

```json
{
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "telefone": "(49) 99999-9999",
    "email": "joao@email.com"
}

**Retorno:**

{
erro"CPF ja cadastrado"
}
---

# CT002 - Cadastro de veiculo com placa duplicada

**Requisito:**

POST /veiculo

**Tipo:**

Caixa Preta / Integração

**Pré-condição:**
- Já deve existir um veiculo com a placa cadastrada.

**Entrada:**

```json
{
    "placa": "ABC-1234",
    "modelo": "Caminhão",
    "capacidade": 5000,
    "tipo": "Carga"
}
**Retorno:**

{
erro"Placa ja cadastrada"
}

# CT003 - Cadastro de entrega

**Requisito:**

POST /entrega

**Tipo:**

Caixa Preta / Integração

**Pré-condição:**
- Motorista e veiculos ja devem estar cadastrados.

**Entrada:**

```json
{
  "motorista_id": 1,
  "veiculo_id": 2,
  "destino": "São Paulo",
  "status": "Pendente"
}

**Passos:**

Verificar se o motorista existe.
Verificar se o veículo existe.
Enviar uma requisição POST para /entregas.
Informar os dados da entrega.
Verificar a resposta da API.
Conferir se a entrega foi registrada no banco.

**Retorno:**

{
"Entrega cadastrada com sucesso"
}

# CT004 - Atualização de entrega

**Requisito:**

Patch/entrega

**Tipo:**

Caixa Preta / Integração

**Pré-condição:**
- Deve existir uma entrega cadastrada..

**Entrada:**

```json
{
  "status": "Em trânsito"
}


**Retorno:**

O status da entrega deve ser atualizado corretamente no sistema.

Passos:

Localizar uma entrega existente.
Enviar uma requisição PATCH para /entregas/:id.
Alterar o status para "Em trânsito".
Verificar a resposta da API.
Consultar a entrega novamente.

# CT005 - Exclusão de motorista

**Requisito:**

Delete/motorista

**Tipo:**

Caixa Preta / Integração

**Pré-condição:**
- Deve existir um motorista para ser deletado.

**Entrada:**

ID do motorista: 5

**Retorno:**

O motorista deve ser excluído e não deve mais aparecer na consulta.

Passos:

Consultar o motorista de ID 5.
Enviar uma requisição DELETE para /motoristas/5.
Verificar a resposta da API.
Consultar novamente o motorista pelo ID.
Conferir se o registro foi removido.