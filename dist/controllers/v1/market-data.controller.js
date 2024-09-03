"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketDataController = void 0;
const services_1 = require("../../services");
const schemas_1 = require("../../schemas");
class MarketDataController {
    marketDataService;
    constructor(fastify) {
        this.marketDataService = new services_1.MarketDataService(fastify);
    }
    getSchemeNav = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getSchemeNav(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: data.recordsets[1][0].NEXT_PAGE
                    ? `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`
                    : null,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getSchemeMaster = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getSchemeMaster(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getSecurityPrices = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getSecurityPrices(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getSecurityMaster = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getSecurityMaster(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getSchemeRapm = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getSchemeRapm(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getCorporateAction = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getCorporateAction(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
    getHoldings = async (request, reply) => {
        const { timeStamp, pageNumber, limit } = request.query;
        const data = await this.marketDataService.getHoldingsWF(timeStamp, pageNumber, limit);
        const schemeNavResponse = {
            result: data.recordset,
            previous: data.recordsets[1][0].PREVIOUS_PAGE,
            current: data.recordsets[1][0].CURRENT_PAGE,
            totalPages: data.recordsets[1][0].TOTAL_PAGES,
            next: {
                page: data.recordsets[1][0].NEXT_PAGE,
                limit: limit,
                link: data.recordsets[1][0].NEXT_PAGE
                    ? `${request.protocol}:/${request.hostname}${request.routeOptions.url}?timeStamp=${timeStamp}&limit=${limit}&pageNumber=${data.recordsets[1][0].NEXT_PAGE}`
                    : null,
            },
        };
        reply.status(200).send(schemeNavResponse);
    };
}
exports.MarketDataController = MarketDataController;
const MarketDataPlugin = async (fastify) => {
    const marketDataController = new MarketDataController(fastify);
    fastify.get('/market-data/schemeNav', {
        schema: {
            description: 'This Endpoint is used to fetch the schemes nav details',
            tags: ['market-data'],
            summary: 'Fetch scheme nav',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    SCHEME_ID: { type: 'string' },
                                    NAV_DATE: { type: 'string', format: 'date-time' },
                                    NAV: { type: 'number' },
                                    ADJUSTED_NAV: { type: 'number' },
                                    NAV_RETURN: { type: 'number' },
                                    MONTHLY_RETURN: { type: 'number', nullable: true },
                                    FLAG: { type: 'string', nullable: true },
                                    DIVIDEND: { type: 'string', nullable: true },
                                    BONUS1: { type: 'string', nullable: true },
                                    BONUS2: { type: 'string', nullable: true },
                                    MODIFIED_DATE: { type: 'string', format: 'date-time' },
                                },
                            },
                        },
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getSchemeNav);
    fastify.get('/market-data/schemeMaster', {
        schema: {
            description: 'This Endpoint is used to fetch the schemes master details',
            tags: ['market-data'],
            summary: 'Fetch scheme master',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.scheme_master_schema,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getSchemeMaster);
    fastify.get('/market-data/securityPrice', {
        schema: {
            description: 'This Endpoint is used to fetch the security prices details',
            tags: ['market-data'],
            summary: 'Fetch security price',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.security_prices_schema,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getSecurityPrices);
    fastify.get('/market-data/securityMaster', {
        schema: {
            description: 'This Endpoint is used to fetch the security master details',
            tags: ['market-data'],
            summary: 'Fetch security master',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.security_master_schema,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getSecurityMaster);
    fastify.get('/market-data/schemeRapm', {
        schema: {
            description: 'This Endpoint is used to fetch the scheme rapm details',
            tags: ['market-data'],
            summary: 'Fetch security master',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.scheme_rapm_schema,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getSchemeRapm);
    fastify.get('/market-data/corporateAction', {
        schema: {
            description: 'This Endpoint is used to fetch the corporate action details',
            tags: ['market-data'],
            summary: 'Fetch corporate action',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.corporate_action_schema,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getCorporateAction);
    fastify.get('/market-data/holdings', {
        schema: {
            description: 'This Endpoint is used to fetch the holdings details',
            tags: ['market-data'],
            summary: 'Fetch holdings',
            querystring: schemas_1.market_data_query_string,
            response: {
                200: {
                    type: 'object',
                    properties: {
                        result: schemas_1.holdings_wf,
                        ...schemas_1.page_details_schema,
                    },
                },
            },
        },
    }, marketDataController.getHoldings);
};
exports.default = MarketDataPlugin;
//# sourceMappingURL=market-data.controller.js.map