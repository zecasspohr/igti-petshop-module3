# igti-petshop-module3

# Trabalho pratico - módulo 3 - IGTI

Objetivos:
Exercitar os seguintes conceitos trabalhados no Módulo:

    > Criar tabelas no PostgreSQL.
    > Criar uma API com Node.js e Express.
    > Criar endpoints que realizem a consulta, inserção, atualização e exclusão de registros no banco de dados.

Enunciado:

O aluno deverá criar um projeto Node.js com Express para gerenciar o cadastro de um petshop. O sistema deverá controlar o cadastro de animais e donos. 

# Desafio - módulo 3 - IGTI

Objetivos:

Exercitar os conceitos trabalhados no módulo, para criação de uma API utilizando Node.js
e Express com integração aos bancos de dados PostgresSQL e MongoDB.

Enunciado:

Utilizando o mesmo projeto desenvolvido no Trabalho Prático, o “petshop-api”, o Desafio
consiste em refatorar o projeto antigo, criar novos endpoints para controlar os serviços
realizados pelos animais e para a gestão do blog do petshop.

Atividades:

O desafio final possui três partes, todas sendo realizadas no mesmo projeto desenvolvido
no Trabalho Prático, o “petshop-api”.

A primeira consiste em refatorar o projeto criado anteriormente, introduzindo o Sequelize.
O aluno deverá realizar o mapeamento das tabelas “proprietarios" e “animais”, e atualizar
a camada “repository” para utilizar o Sequelize, conforme visto nas aulas gravadas.

A segunda consiste em criar a tabela e os endpoints necessários para controlar os
serviços realizados pelos animais no petshop. No trabalho prático foi fornecido os
comandos de criação das tabelas, já agora no desafio essa tarefa é parte do trabalho,
ficando sob responsabilidade do aluno.

A terceira parte consiste em criar a estrutura para que o petshop possa criar o seu blog.
Essa estrutura deverá ser criada em MongoDB. Sugerimos que seja criada uma instância
gratuita no MongoDB Atlas, conforme visto nas aulas gravadas, porém caso o aluno
prefira outro servidor, ou até mesmo localmente, não tem problema.
Deverá ser criada uma collection chamada “posts”, que será responsável por armazenar
os posts do blog. Cada post deverá ter uma propriedade para o título, outra para o
conteúdo e uma lista de comentários, sendo que cada comentário deve ter o nome de
quem fez o comentário e o conteúdo
