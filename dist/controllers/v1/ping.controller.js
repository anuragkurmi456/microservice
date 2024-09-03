"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ping = async (fastify, opts) => {
    fastify.get('/ping', {
        schema: {
            description: 'Ping route',
            tags: ['ping'],
            summary: 'Ping route',
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        timestamp: { type: 'string', format: 'date-time' },
                        hostname: { type: 'string' },
                        userip: { type: 'string' },
                        message: { type: 'string' },
                    },
                },
            },
        },
    }, async function (request, reply) {
        reply.status(200).send({
            timestamp: new Date().toUTCString(),
            hostname: request.hostname,
            userip: request.ip,
            message: 'hey there!',
        });
    });
};
exports.default = ping;
//# sourceMappingURL=ping.controller.js.map