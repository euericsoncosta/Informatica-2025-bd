import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.json({message: 'Deu certo'});
});

export default router;
// Compare this snippet from app.js: