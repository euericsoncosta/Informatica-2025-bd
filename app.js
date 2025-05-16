import express from 'express';


//importando as rotas
import paginaInicialRoutes from './src/routes/paginaInicialRoutes.js';

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){
        this.app.use('/', paginaInicialRoutes);
    }
}

export default new App().app;