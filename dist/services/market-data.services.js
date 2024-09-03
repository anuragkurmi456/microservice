"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketDataService = void 0;
class MarketDataService {
    fastify;
    constructor(fastify) {
        this.fastify = fastify;
    }
    async getSchemeNav(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.fundoo.pool.connect();
            const result = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_SchemeNav
              @NAV_DATE = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getSchemeNav');
            throw error;
        }
    }
    async getSchemeMaster(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.fundoo.pool.connect();
            const result = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Scheme_Master
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getSchemeMaster');
            throw error;
        }
    }
    async getSecurityPrices(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.vfCc.pool.connect();
            const result = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_SecurityPrice
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getSecurityPrices');
            throw error;
        }
    }
    async getSecurityMaster(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.vfCc.pool.connect();
            const result = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_SecurityMaster
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getSecurityMaster');
            throw error;
        }
    }
    async getSchemeRapm(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.fundoo.pool.connect();
            const result = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Scheme_RAPM
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getSchemeRapm');
            throw error;
        }
    }
    async getCorporateAction(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.vfCc.pool.connect();
            const result = await this.fastify.vfCc.pool.query(`EXEC dbo.API_GET_CorporateActions
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getCorporateAction');
            throw error;
        }
    }
    async getHoldingsWF(timesStamp, pageNumber, limit) {
        try {
            console.log(timesStamp, pageNumber, limit);
            await this.fastify.fundoo.pool.connect();
            const result = await this.fastify.fundoo.pool.query(`EXEC dbo.API_GET_Holdings_WF
              @Modified_Date = '${timesStamp}', 
              @page_no = ${pageNumber},                
              @page_size = ${limit}
          `);
            return result;
        }
        catch (error) {
            this.fastify.log.error(error, 'getHoldingsWF');
            throw error;
        }
    }
}
exports.MarketDataService = MarketDataService;
//# sourceMappingURL=market-data.services.js.map