const documentacao = {
    openapi: "3.0.0",
    info: {
        title: "API Produtos",
        version: "1.0.0",
        description: "API para gerenciamento de lojas, categorias e produtos",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local",
        },
    ],
    tags: [
        { name: "Usuários", description: "Gestão de usuários" },
        { name: "Categorias", description: "Gestão de categorias" },
        { name: "Produtos", description: "Gestão do catálogo de produtos" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Lista todos os usuários",
                responses: {
                    200: {
                        description: "Lista de usuários recuperada",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastra novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Usuarios" },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Usuário criado",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        message: { type: "string", example: "Usuario adicionado com sucesso" }
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "/usuarios/{id}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualiza usuário específico",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuarios" },
                        },
                    },
                },
                responses: { 200: { description: "Usuário atualizado com sucesso" } }
            },
            patch: {
                tags: ["Usuários"],
                summary: "Atualiza usuário específico (parcial)",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuarios_Patch" },
                        },
                    },
                },
                responses: { 200: { description: "Usuário atualizado com sucesso" } }
            },
            delete: {
                tags: ["Usuários"],
                summary: "Deleta usuário específico",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                responses: {
                    200: {
                        description: "Usuário deletado com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/login": {
            post: {
                tags: ["Usuários"],
                summary: "Autenticação de usuário (Login)",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: ["email", "senha"],
                                properties: {
                                    email: { type: "string", format: "email", example: "ana.silva@example.com" },
                                    senha: { type: "string", example: "senha123" },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Login bem-sucedido",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id_usuario: { type: "integer", example: 1 },
                                        nome: { type: "string", example: "Ana Silva" },
                                        email: { type: "string", example: "ana.silva@example.com" },
                                    },
                                },
                            },
                        },
                    },
                    400: { description: "Todos os campos são obrigatórios" },
                    401: { description: "Email ou senha incorretos" },
                    500: { description: "Erro ao fazer login" }
                },
            },
        },
        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Lista todas as categorias",
                responses: {
                    200: {
                        description: "Dados obtidos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Categorias" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Categorias"],
                summary: "Cria uma categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Categorias" },
                        },
                    },
                },
                responses: { 201: { description: "Criado" } }
            },
        },
        "/categorias/{id}": {
            put: {
                tags: ["Categorias"],
                summary: "Atualiza categoria por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categorias" },
                        },
                    },
                },
                responses: { 200: { description: "Categoria atualizada" } }
            },
            patch: {
                tags: ["Categorias"],
                summary: "Atualiza categoria por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categorias" },
                        },
                    },
                },
                responses: { 200: { description: "Categoria atualizada" } }
            },
            delete: {
                tags: ["Categorias"],
                summary: "Deleta categoria específica",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                responses: {
                    200: {
                        description: "Categoria deletada com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/produtos": {
            get: {
                tags: ["Produtos"],
                summary: "Lista todos os produtos",
                responses: {
                    200: {
                        description: "Sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Produtos" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Produtos"],
                summary: "Cadastra novo produto",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Produtos" },
                        },
                    },
                },
                responses: { 201: { description: "Criado" } }
            },
        },
        "/produtos/{id}": {
            put: {
                tags: ["Produtos"],
                summary: "Atualiza produto",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Produtos" },
                        },
                    },
                },
                responses: { 200: { description: "Atualizada" } }
            },
            patch: {
                tags: ["Produtos"],
                summary: "Atualiza produto",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Produtos_Patch" },
                        },
                    },
                },
                responses: { 200: { description: "Atualizada" } }
            },
            delete: {
                tags: ["Produtos"],
                summary: "Deleta produto específico",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 },
                    },
                ],
                responses: {
                    200: {
                        description: "Produto deletado com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Ana Silva" },
                    email: { type: "string", example: "ana.silva@example.com" },
                    senha: { type: "string", example: "senha123" },
                },
            },
            Cadastro_Usuarios: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Ana Silva" },
                    email: { type: "string", example: "ana.silva@example.com" },
                    senha: { type: "string", example: "senha123" },
                },
            },
            Atualizar_Usuarios: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Ana Silva Atualizado" },
                    email: { type: "string", example: "ana.novo@email.com" },
                    senha: { type: "string", example: "novaSenha123" },
                },
            },
            Atualizar_Usuarios_Patch: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Ana Silva Atualizado" },
                    email: { type: "string", example: "ana.novo@email.com" },
                    senha: { type: "string", example: "novaSenha123" },
                },
            },
            Lista_Categorias: {
                type: "object",
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Eletrônicos" },
                    descricao: { type: "string", example: "Produtos eletrônicos", nullable: true },
                },
            },
            Cadastro_Categorias: {
                type: "object",
                required: ["nome"],
                properties: {
                    nome: { type: "string", example: "Eletrônicos" },
                    descricao: { type: "string", example: "Produtos eletrônicos" },
                },
            },
            Atualizar_Categorias: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Eletrônicos Premium" },
                    descricao: { type: "string", example: "Produtos linha A" },
                },
            },
            Lista_Produtos: {
                type: "object",
                properties: {
                    id_produto: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Notebook Gamer" },
                    preco: { type: "number", example: 4500.50 },
                    url_imagem: { type: "string", example: "http://imagem.com/note" },
                    link_produto: { type: "string", example: "http://loja.com/1" },
                    frete_gratis: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                    id_usuario: { type: "integer", example: 2 },
                },
            },
            Cadastro_Produtos: {
                type: "object",
                required: ["nome", "preco"],
                properties: {
                    nome: { type: "string", example: "Notebook Gamer" },
                    preco: { type: "number", example: 4500.50 },
                    url_imagem: { type: "string", example: "http://imagem.com/note" },
                    link_produto: { type: "string", example: "http://loja.com/1" },
                    frete_gratis: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                    id_usuario: { type: "integer", example: 2 },
                },
            },
            Atualizar_Produtos: {
                type: "object",
                required: ["nome", "preco"],
                properties: {
                    nome: { type: "string", example: "Notebook Gamer v2" },
                    preco: { type: "number", example: 4800.50 },
                    url_imagem: { type: "string", example: "http://imagem.com/note" },
                    link_produto: { type: "string", example: "http://loja.com/1" },
                    frete_gratis: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                    id_usuario: { type: "integer", example: 2 },
                },
            },
            Atualizar_Produtos_Patch: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Notebook Gamer" },
                    preco: { type: "number", example: 4500.50 },
                    url_imagem: { type: "string", example: "http://imagem.com/note" },
                    link_produto: { type: "string", example: "http://loja.com/1" },
                    frete_gratis: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                    id_usuario: { type: "integer", example: 2 },
                },
            },
        },
    },
};

export default documentacao;