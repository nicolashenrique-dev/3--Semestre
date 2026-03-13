const documentacao = {
    openapi: "3.0.0",
    info: {
        title: "API Ordem de Serviços",
        version: "1.0.0",
        description: "API para gerenciamento de ordens de serviços, usuários e departamentos",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local",
        },
    ],
    tags: [
        { name: "Usuários", description: "Gestão de colaboradores" },
        { name: "Departamentos", description: "Gestão de setores da empresa" },
        { name: "Ordens", description: "Gestão de chamados técnicos" },
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
                        description: "ID do usuário para atualização",
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
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 },
                                        nome: { type: "string", example: "Ana Silva Atualizado" },
                                        email: { type: "string", example: "ana.novo@email.com" }
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: "Lista todos os departamentos",
                responses: {
                    200: {
                        description: "Dados obtidos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Departamentos" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Departamentos"],
                summary: "Cria um setor",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Departamentos" },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Criado",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 },
                                        nome: { type: "string", example: "TI" }
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "/departamentos/{id}": {
            put: {
                tags: ["Departamentos"],
                summary: "Atualiza departamento por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID do departamento existente",
                        schema: { type: "integer", example: 1 },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Departamentos" },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Departamento atualizado",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 },
                                        nome: { type: "string", example: "TI Premium" },
                                        descricao: { type: "string", example: "Desenvolvimento e Cloud", nullable: true }
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "/ordens": {
            get: {
                tags: ["Ordens"],
                summary: "Lista todas as OS",
                responses: {
                    200: {
                        description: "Sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Ordens" },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Ordens"],
                summary: "Abre nova Ordem de Serviço",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Ordens" },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "OS Criada",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        message: { type: "string", example: "Ordem adicionada com sucesso" }
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "/ordens/{id}": {
            put: {
                tags: ["Ordens"],
                summary: "Atualiza status/dados da OS",
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
                            schema: { $ref: "#/components/schemas/Atualizar_Ordens" },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "OS Atualizada",
                        content: {
                            "application/json": {
                                schema: { 
                                    type: "object",
                                    properties: {
                                        message: { type: "string", example: "Ordem atualizada com sucesso" }
                                    }
                                },
                            },
                        },
                    },
                },
            },
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
                properties: {
                    nome: { type: "string", example: "Ana Silva Atualizado" },
                    email: { type: "string", example: "ana.novo@email.com" },
                    senha: { type: "string", example: "novaSenha123" },
                },
            },
            Lista_Departamentos: {
                type: "object",
                properties: {
                    id_departamentos: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Manutenção" },
                    descricao: { type: "string", example: "Reparos de infraestrutura", nullable: true },
                },
            },
            Cadastro_Departamentos: {
                type: "object",
                required: ["nome"],
                properties: {
                    nome: { type: "string", example: "TI" },
                },
            },
            Atualizar_Departamentos: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "TI Premium" },
                    descricao: { type: "string", example: "Desenvolvimento e Cloud" },
                },
            },
            Lista_Ordens: {
                type: "object",
                properties: {
                    id_ordem: { type: "integer", example: 1 },
                    titulo: { type: "string", example: "Manutenção Ar" },
                    descricao: { type: "string", example: "Troca de filtros" },
                    status: { type: "string", example: "Aberta" },
                    id_usuario: { type: "integer", example: 1 },
                },
            },
            Cadastro_Ordens: {
                type: "object",
                required: ["titulo", "descricao", "status", "id_usuario"],
                properties: {
                    titulo: { type: "string", example: "Reparo de Rede" },
                    descricao: { type: "string", example: "Cabo rompido no andar 2" },
                    status: { type: "string", example: "Aberta" },
                    id_usuario: { type: "integer", example: 1 },
                },
            },
            Atualizar_Ordens: {
                type: "object",
                properties: {
                    titulo: { type: "string", example: "Reparo de Rede" },
                    descricao: { type: "string", example: "Cabo rompido no andar 2" },
                    status: { type: "string", example: "Concluída" },
                    id_usuario: { type: "integer", example: 1 },
                },
            },
        },
    },
};

export default documentacao;