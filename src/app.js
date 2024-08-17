import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import helmet from 'helmet';
import { resolve } from "path";
import "./database";

import alunoRoutes from "./routes/alunoRoutes.js";
import fotoRoutes from "./routes/fotoRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const corsOptions = {
  origin: ['http://localhost:3000', ' https://projetoescola-d0ob.onrender.com',
    'https://front-escola-hwjg.vercel.app', 'http://localhost:3001',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos (opcional)
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,

};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
