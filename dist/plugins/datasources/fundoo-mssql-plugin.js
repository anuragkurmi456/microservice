"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const fastify_mssql_1 = __importDefault(require("fastify-mssql"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(fastify_mssql_1.default, {
        decorate: 'fundoo',
        server: String(fastify.config.MSSQL_SERVER),
        user: fastify.config.MSSQL_USER,
        password: fastify.config.MSSQL_PWD,
        database: fastify.config.DB_FUNDOO,
        port: +(fastify.config.MSSQL_PORT || 1433),
        pool: {
            max: +fastify.config.MAX_POOL_SIZE,
            min: +fastify.config.MIN_POOL_SIZE,
        },
        options: {
            encrypt: false,
            trustServerCertificate: true,
        },
    });
});
//# sourceMappingURL=fundoo-mssql-plugin.js.map