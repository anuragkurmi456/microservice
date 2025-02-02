"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.app = void 0;
const path_1 = require("path");
const autoload_1 = __importDefault(require("@fastify/autoload"));
const options = {};
exports.options = options;
const app = async (fastify, opts) => {
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
        options: opts,
    });
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'controllers/v1'),
        options: Object.assign({ prefix: 'api/v1' }, opts),
    });
};
exports.app = app;
exports.default = app;
//# sourceMappingURL=app.js.map