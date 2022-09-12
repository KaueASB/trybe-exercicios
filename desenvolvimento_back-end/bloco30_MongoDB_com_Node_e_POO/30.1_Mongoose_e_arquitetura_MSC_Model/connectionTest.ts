import mongoose, { connect } from 'mongoose';

connect('mongodb://localhost:27017/conteudo_trybe')

// PASSANDO USER and PASSWORD COM:

// URI
// connect('mongodb://username:password@host:port/nomeDaMinhaBaseDeDados');

// OPTIONS
// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' });

// Aviso: se formos passar esses parâmetros pela options, devemos usar variáveis de ambiente por questões de segurança.