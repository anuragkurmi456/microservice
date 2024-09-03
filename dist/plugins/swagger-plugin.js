"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    const swaggerOptions = {
        openapi: {
            openapi: '3.0.0',
            info: {
                title: 'New Age Fundoo APIs',
                description: 'Testing the New Age Fundoo APIs',
                version: '0.0.1',
            },
            servers: [
                {
                    url: `http://localhost:${process.env.PORT || 3000}`,
                    description: 'Development server for new age fundoo',
                },
                {
                    url: `https://marketdata.wealthfy.com`,
                    description: 'Production server for new age fundoo',
                },
            ],
            tags: [
                { name: 'ping', description: 'Server health check' },
                { name: 'market-data', description: 'Market data endpoint' },
            ],
            components: {
                securitySchemes: {
                    apiKey: {
                        type: 'apiKey',
                        name: 'apiKey',
                        in: 'header',
                    },
                },
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here',
            },
        },
    };
    fastify.register(swagger_1.default, swaggerOptions);
});
//# sourceMappingURL=swagger-plugin.js.map