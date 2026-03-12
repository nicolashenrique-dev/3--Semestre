create table USUARIOS (
  id_usuario SERIAL primary key,
  nome varchar(100) not null,
  email varchar(150) not null,
  senha varchar(255) not null
);

create table DEPARTAMENTOS (
  id_departamentos Serial primary key,
  nome varchar(100) not null,
  descricao varchar(255)

);

create table ORDEM_SERVICOS (
  id_ordem SERIAL primary key,
  numero_ordem int unique,
  titulo varchar(100) not null,
  descricao varchar(255) not null,
  prioridade varchar(100) not null,
  status varchar(100) not null,
  data DATE not null,
  id_usuario int not null references USUARIOS(id_usuario),
  id_departamento int not null references DEPARTAMENTOS(id_departamentos)
)


insert into USUARIOS (nome, email, senha) values
  ('Ana Silva', 'ana.silva@gmail.com', 'senha123')

  INSERT INTO USUARIOS (nome, email, senha) VALUES
('Bruno Oliveira', 'bruno.oliveira@email.com', '1234'),
('Carla Mendes', 'carla.mendes@email.com', '1234');


insert into departamentos (nome, descricao) values 
('TI', 'Tecnologia da informação'),
('Manutenção', 'Setor geral')


insert into ordem_servicos (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) values 
(1001, 'trocar cabo de rede', 'ponto de rede na sala 203', 'media', 'aberta', '2026-02-26', 1, 1),
(1002, 'consertar ar', 'unidade do laboratorio parou de gelar', 'alta', 'aberta', '2026-02-26', 2, 2)