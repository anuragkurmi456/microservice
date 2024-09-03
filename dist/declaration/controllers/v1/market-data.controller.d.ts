import { FastifyInstance, FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
export declare class MarketDataController {
    private marketDataService;
    constructor(fastify: FastifyInstance);
    getSchemeNav: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getSchemeMaster: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getSecurityPrices: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getSecurityMaster: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getSchemeRapm: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getCorporateAction: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    getHoldings: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
}
declare const MarketDataPlugin: FastifyPluginAsync;
export default MarketDataPlugin;
