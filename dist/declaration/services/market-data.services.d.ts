import { FastifyInstance } from 'fastify';
import { CorporateAction, SchemaMaster, SchemeNav, SchemeRapm, SecurityMaster, SecurityPrices, HoldingsWF } from '../schemas';
import { IResult } from 'mssql';
export declare class MarketDataService {
    private fastify;
    constructor(fastify: FastifyInstance);
    getSchemeNav(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeNav>>;
    getSchemeMaster(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemaMaster>>;
    getSecurityPrices(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityPrices>>;
    getSecurityMaster(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SecurityMaster>>;
    getSchemeRapm(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<SchemeRapm>>;
    getCorporateAction(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<CorporateAction>>;
    getHoldingsWF(timesStamp: Date, pageNumber: number, limit: number): Promise<IResult<HoldingsWF>>;
}
