import { Pool } from 'pg';


const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_produtos_3b',
    port: 5432, // Removido as aspas (deve ser number)
    password: 'admin'
});

const testarConexao = async () => {
    try {
        const client = await BD.connect();
        console.log('conexao realizada com sucesso');
        client.release(); // Importante: libera o cliente de volta para o pool
    }
    catch (error) { // Adicionado o (error) aqui
        console.error('Erro ao conectar no Banco de dados', error.message);
    }
}

export { BD, testarConexao };