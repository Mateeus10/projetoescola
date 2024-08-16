"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

// Não deveria existir
router.get('/', _UserControllerjs2.default.index); // Lista usuários
router.get('/:id', _UserControllerjs2.default.show); // Lista usuário

router.post('/', _UserControllerjs2.default.store);
router.put('/', _loginRequiredjs2.default, _UserControllerjs2.default.update);
router.delete('/', _loginRequiredjs2.default, _UserControllerjs2.default.delete);

exports. default = router;
