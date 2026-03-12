const documentacao = {
    openapi: '3.0.0',
    info: {
        title: 'API Ordem de Serviços',
        version: '1.0.0',
        description: 'API para gerenciamento de ordens de serviços',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local',
        },
    ],
    tags: [
        {
            name: 'Usuários',
            description: 'Operações relacionadas a usuários',
        },

        {
            name: 'Departamentos',
            description: 'Operações relacionadas a departamentos',
        },
        {
            name: 'Ordens',
            description: 'Operações relacionadas a ordens de serviço',
        },
    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Lista todos os usuários',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Usuarios',
                                    },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Usuários'],
                summary: 'Adiciona um novo usuário',
                description: 'recebe nome, email e senha para cadastrar novo usuario',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Usuarios',
                            },
                        },
                    },
                },
                responses: { // Início do objeto de respostas
                    201: {
                        description: 'Usuario adicionado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Lista_Usuarios',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Erro ao adicionar usuario',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Lista_Usuarios',
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Lista_Usuarios',
                                },
                            },
                        },
                    },
                }, // Fim do objeto de respostas (CORRIGIDO AQUI)
            }
        },
        '/usuarios/{id}': {
            put: {
                tags: ['Usuários'],
                summary: 'Atualiza um usuário por id',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Atualizar_Usuarios',
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Dados atualizados com sucesso',
                        content: {
                            'application/json': {
                                example: {
                                    message: 'Usuario atualizado com sucesso',
                                },
                                schema: {
                                    $ref: '#/components/schemas/Atualizar_Usuarios',
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Usuário não encontrado',
                        content: {
                            'application/json': {
                                example: {
                                    message: 'Usuario nao encontrado',
                                },
                                schema: {
                                    $ref: '#/components/schemas/Atualizar_Usuarios',
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                example: {
                                    message: 'Erro interno no servidor',
                                },
                                schema: {
                                    $ref: '#/components/schemas/Atualizar_Usuarios',
                                },
                            },
                        },
                    },
                }, // Fim do objeto de respostas (CORRIGIDO AQUI)
            }
        },
        '/departamentos': {
            get: {
                tags: ['Departamentos'],
                summary: 'Lista todos os departamentos',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Departamento nao encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/departamentos': {
            post: {
                tags: ['Departamentos'],
                summary: 'Adiciona um novo departamento',
                responses: {
                    201: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Dados invalidos',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/departamentos/{id}': {
            put: {
                tags: ['Departamentos'],
                summary: 'Atualiza um departamento por id',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Departamento nao encontrado',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Departamentos',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/ordens': {
            get: {
                tags: ['Ordens'],
                summary: 'Lista todas as ordens',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Ordem nao encontrada',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Lista_Ordens',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/ordens/{id}': {
            put: {
                tags: ['Ordens'],
                summary: 'Atualiza uma ordem por id',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Ordem nao encontrada',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Atualizar_Ordens',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/ordens': {
            post: {
                tags: ['Ordens'],
                summary: 'Adiciona uma nova ordem',
                responses: {
                    201: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Dados invalidos',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Ordens',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Erro interno no servidor',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Cadastro_Ordens',
                                    },
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
                type: 'object',
                properties: {

                    nome: {
                        type: 'string',
                        example: 'Ana Silva',
                    },
                    email: {
                        type: 'string',
                        example: 'ana.silva@example.com',
                    },
                    senha: {
                        type: 'string',
                        example: '123456',
                    },
                },
            },
            Cadastro_Usuarios: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Ana Silva',
                    },
                    email: {
                        type: 'string',
                        example: 'ana.silva@example.com',
                    },
                    senha: {
                        type: 'string',
                        example: '123456',
                    },
                },
            },
            Atualizar_Usuarios: {
                type: 'object',
                required: ['nome', 'email', 'senha'],

                properties: {
                    nome: {
                        type: 'string',
                        example: 'Ana Silva',
                    },
                    email: {
                        type: 'string',
                        example: 'ana.silva@example.com',
                    },
                    senha: {
                        type: 'string',
                        example: '123456',
                    },
                },
            },
            Cadastro_Departamentos: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Departamento de Teste',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Descrição do departamento',
                    },
                },
            },
            Atualizar_Departamentos: {
                type: 'object',
                required: ['nome', 'descricao'],
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Departamento de Teste',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Descrição do departamento',
                    },
                },
            },
            Lista_Departamentos: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    nome: {
                        type: 'string',
                        example: 'Departamento de Teste',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Descrição do departamento',
                    },
                },
            },
            Lista_Ordens: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    titulo: {
                        type: 'string',
                        example: 'Manutenção de Ar Condicionado',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Realizar limpeza e troca de filtro',
                    },
                    numero_ordem: {
                        type: 'integer',
                        example: 12345,
                    },
                    prioridade: {
                        type: 'string',
                        example: 'Urgente',
                    },
                    status: {
                        type: 'string',
                        example: 'Aberta',
                    },
                    data: {
                        type: 'string',
                        example: '2026-03-05',
                    },
                },
            },
            Cadastro_Ordens: {
                type: 'object',
                properties: {
                    titulo: {
                        type: 'string',
                        example: 'Manutenção de Ar Condicionado',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Realizar limpeza e troca de filtro',
                    },
                    numero_ordem: {
                        type: 'integer',
                        example: 12345,
                    },
                    prioridade: {
                        type: 'string',
                        example: 'Urgente',
                    },
                    status: {
                        type: 'string',
                        example: 'Aberta',
                    },
                    data: {
                        type: 'string',
                        example: '2026-03-05',
                    },
                },
            },
            Atualizar_Ordens: {
                type: 'object',
                properties: {
                    titulo: {
                        type: 'string',
                        example: 'Manutenção de Ar Condicionado',
                    },
                    descricao: {
                        type: 'string',
                        example: 'Realizar limpeza e troca de filtro',
                    },
                    numero_ordem: {
                        type: 'integer',
                        example: 12345,
                    },
                    prioridade: {
                        type: 'string',
                        example: 'Urgente',
                    },
                    status: {
                        type: 'string',
                        example: 'Aberta',
                    },
                    data: {
                        type: 'string',
                        example: '2026-03-05',
                    },
                },
            },
        },
    },
};

export default documentacao;