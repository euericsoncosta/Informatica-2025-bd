import dotenv from 'dotenv';
//configurando o dotenv
dotenv.config();

import express from 'express';
import methodOverride from 'method-override';
import{resolve} from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

import './src/database/index.js'; // Importando a conexão com o banco de dados


//importando as rotas
import alunoRoutes from './src/routes/alunoRoutes.js';

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //configurando o engine de template handlebars
         // Configura o Handlebars como motor de visualização
        this.app.engine('handlebars', engine());
        this.app.set('view engine', 'handlebars');
        this.app.set('views', resolve(__dirname,'src','views'));

        //configurar pasta public 
        this.app.use(express.static(resolve(__dirname, 'public')));

        this.app.use(methodOverride('_method'));// Configura o método de substituição para permitir PUT e DELETE via POST
    
        // Configurando o express para aceitar JSON e URL-encoded
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){
        this.app.use('/', alunoRoutes);
    }
}

export default new App().app;