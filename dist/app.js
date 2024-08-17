"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _path = require('path');
require('./database');

var _alunoRoutesjs = require('./routes/alunoRoutes.js'); var _alunoRoutesjs2 = _interopRequireDefault(_alunoRoutesjs);
var _fotoRoutesjs = require('./routes/fotoRoutes.js'); var _fotoRoutesjs2 = _interopRequireDefault(_fotoRoutesjs);
var _homeRoutesjs = require('./routes/homeRoutes.js'); var _homeRoutesjs2 = _interopRequireDefault(_homeRoutesjs);
var _tokenRoutesjs = require('./routes/tokenRoutes.js'); var _tokenRoutesjs2 = _interopRequireDefault(_tokenRoutesjs);
var _userRoutesjs = require('./routes/userRoutes.js'); var _userRoutesjs2 = _interopRequireDefault(_userRoutesjs);

_dotenv2.default.config();

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
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use("/", _homeRoutesjs2.default);
    this.app.use("/users/", _userRoutesjs2.default);
    this.app.use("/tokens/", _tokenRoutesjs2.default);
    this.app.use("/alunos/", _alunoRoutesjs2.default);
    this.app.use("/fotos/", _fotoRoutesjs2.default);
  }
}

exports. default = new App().app;
