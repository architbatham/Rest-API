import express from 'express';
const router = express.Router();

import * as IndexController from '../controller/index.controller.js';

router.post("/save", IndexController.save);


export default router;