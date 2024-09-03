"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    const swaggerUiOptions = {
        routePrefix: '/documentation',
        uiConfig: {
            docExpansion: 'list',
            deepLinking: false,
        },
        staticCSP: true,
    };
    fastify.register(swagger_ui_1.default, swaggerUiOptions);
});
//# sourceMappingURL=swagger-ui-plugin.js.map