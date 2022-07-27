import 'dotenv/config';

// O tipo Options, importando da lib sequelize, deve assegurar que os atributos de configuração respeitarão os padrões utilizados no momento da inicialização do Sequelize na API. Faremos essa inicialização adiante.
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'SUASENHA',
  database: process.env.DB_NAME || 'books_api_sequelize',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
}

export = config;