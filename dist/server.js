"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const env_1 = __importDefault(require("@fastify/env"));
const app_1 = __importDefault(require("./app"));
const env_schemas_1 = __importDefault(require("./schemas/env-schemas"));
const fastify = (0, fastify_1.default)({
    logger: {
        level: 'info',
    },
});
const envOptions = {
    confKey: 'config',
    schema: env_schemas_1.default,
    dotenv: true,
    data: process.env,
};
const start = async () => {
    try {
        await fastify.register(env_1.default, envOptions);
        await fastify.register(app_1.default);
        const port = +(fastify.config.PORT || 3000);
        const address = '0.0.0.0';
        const fastifylistenOpt = {
            port: port,
            host: address,
        };
        await fastify.listen(fastifylistenOpt);
        console.log(`Server listening at http://${address}:${port}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map