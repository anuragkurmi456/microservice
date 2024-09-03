export declare const market_data_query_string: {
    type: string;
    properties: {
        timeStamp: {
            type: string;
            format: string;
        };
        limit: {
            type: string;
        };
        pageNumber: {
            type: string;
        };
    };
    required: string[];
};
export declare const page_details_schema: {
    current: {
        type: string;
        nullable: boolean;
    };
    previous: {
        type: string;
        nullable: boolean;
    };
    totalPages: {
        type: string;
        nullable: boolean;
    };
    next: {
        type: string;
        nullable: boolean;
        properties: {
            page: {
                type: string;
            };
            limit: {
                type: string;
            };
            link: {
                type: string;
                nullable: boolean;
            };
        };
    };
};
export declare const scheme_master_schema: {
    type: string;
    items: {
        type: string;
        properties: {
            Scheme_Id: {
                type: string;
            };
            Scheme_Name: {
                type: string;
            };
            FullName: {
                type: string;
            };
            AMFI_Name: {
                type: string;
            };
            AMFI_Code: {
                type: string;
            };
            AMC_Name: {
                type: string;
            };
            Initial_NAV: {
                type: string;
            };
            Inception_Date: {
                type: string;
                format: string;
            };
            Inception_NAV: {
                type: string;
            };
            Asset_Type: {
                type: string;
            };
            Type: {
                type: string;
            };
            Category: {
                type: string;
            };
            Sub_Category: {
                type: string;
                nullable: boolean;
            };
            Scheme_Plan: {
                type: string;
            };
            Scheme_Option: {
                type: string;
            };
            SCHEME_ISIN: {
                type: string;
            };
            Index_Id: {
                type: string;
                nullable: boolean;
            };
            Actual_Index_ID: {
                type: string;
                nullable: boolean;
            };
            Primary_Fund_Manager: {
                type: string;
            };
            Second_Fund_manager: {
                type: string;
                nullable: boolean;
            };
            Entry_Load: {
                type: string;
                nullable: boolean;
            };
            Exit_Load: {
                type: string;
            };
            Expense_Ratio: {
                type: string;
            };
            Active_Inactive_Flag: {
                type: string;
            };
            Active_Inactive_Status: {
                type: string;
                nullable: boolean;
            };
            Daily_Monthly_Flag: {
                type: string;
            };
            Min_Investment: {
                type: string;
            };
            Primary_FM_ID: {
                type: string;
                nullable: boolean;
            };
            Second_FM_ID: {
                type: string;
                nullable: boolean;
            };
            Display_AMC_Name: {
                type: string;
            };
            Display_Scheme_Name: {
                type: string;
            };
            Primary_Flag: {
                type: string;
            };
            RTA_CODE: {
                type: string;
            };
            Color_Code: {
                type: string;
            };
            LockIn_Period: {
                type: string;
            };
            Load_LockIn: {
                type: string;
            };
            Redemption_Days: {
                type: string;
            };
            Price_Earnings: {
                type: string;
                nullable: boolean;
            };
            Price_To_Book: {
                type: string;
                nullable: boolean;
            };
            SIP_Status: {
                type: string;
            };
            Div_Reinvest_Flag: {
                type: string;
            };
            AMC_ID: {
                type: string;
            };
            maturity_date: {
                type: string;
                nullable: boolean;
                format: string;
            };
            Updated_On: {
                type: string;
                format: string;
            };
            Scheme_OD_Name: {
                type: string;
            };
            Scheme_Tax_Type: {
                type: string;
            };
            CATEGORY_ID: {
                type: string;
            };
            Composite_Score: {
                type: string;
                nullable: boolean;
            };
            Index_Name: {
                type: string;
                nullable: boolean;
            };
            AMC_short_Name: {
                type: string;
            };
            Exit_Remarks: {
                type: string;
            };
            AUM: {
                type: string;
            };
        };
    };
};
export declare const security_master_schema: {
    type: string;
    items: {
        type: string;
        properties: {
            CompanyCode: {
                type: string;
            };
            SecurityTypeCode: {
                type: string;
            };
            SecuritySubTypeCode: {
                type: string;
            };
            SerialNumber: {
                type: string;
            };
            SecurityCode: {
                type: string;
            };
            TickerName: {
                type: string;
            };
            IssuePrice: {
                type: string;
            };
            Description: {
                type: string;
            };
            DateOfIssue: {
                type: string;
                format: string;
            };
            DateOfExpiry: {
                type: string;
                nullable: boolean;
            };
            FaceValue: {
                type: string;
            };
            MarketLot: {
                type: string;
            };
            ISINCode: {
                type: string;
            };
            Remarks: {
                type: string;
            };
            CreatedOn: {
                type: string;
            };
            CreatedBy: {
                type: string;
            };
            LastModifiedOn: {
                type: string;
            };
            LastModifiedBy: {
                type: string;
            };
            ReasonForModification: {
                type: string;
            };
            DeleteFlag: {
                type: string;
            };
            Code: {
                type: string;
            };
            IsItActiveSecurity: {
                type: string;
            };
            BroadIndustryCode: {
                type: string;
            };
            BroadIndustryName: {
                type: string;
            };
            ShortCompanyName: {
                type: string;
            };
            nsecode: {
                type: string;
                nullable: boolean;
            };
        };
    };
};
export declare const scheme_rapm_schema: {
    type: string;
    items: {
        type: string;
        properties: {
            RTA_CODE: {
                type: string;
            };
            Scheme_ID: {
                type: string;
            };
            From_Date: {
                type: string;
                format: string;
            };
            To_Date: {
                type: string;
                format: string;
            };
            Absolute_PO_Return: {
                type: string;
            };
            Absolute_BM_Return: {
                type: string;
            };
            Ann_PO_Return: {
                type: string;
            };
            Ann_BM_Return: {
                type: string;
            };
            Alpha: {
                type: string;
            };
            Portfolio_Volatility: {
                type: string;
            };
            Benchmark_Volatility: {
                type: string;
            };
            Beta: {
                type: string;
            };
            Jenson_Alpha: {
                type: string;
            };
            PO_Sortino_Ratio: {
                type: string;
            };
            BM_Sortino_Ratio: {
                type: string;
            };
            PO_Treynor_Ratio: {
                type: string;
            };
            BM_Treynor_Ratio: {
                type: string;
            };
            PO_Sharpe_Ratio: {
                type: string;
            };
            BM_Sharpe_Ratio: {
                type: string;
            };
            Active_Risk: {
                type: string;
            };
            Information_Ratio: {
                type: string;
            };
            P_RET_1M: {
                type: string;
            };
            BM_RET_1M: {
                type: string;
            };
            P_RET_3M: {
                type: string;
            };
            BM_RET_3M: {
                type: string;
            };
            P_RET_6M: {
                type: string;
            };
            BM_RET_6M: {
                type: string;
            };
            P_RET_1Y: {
                type: string;
            };
            BM_RET_1Y: {
                type: string;
            };
            BM_RET_3Y: {
                type: string;
            };
            P_RET_3Y: {
                type: string;
            };
            P_RET_5Y: {
                type: string;
            };
            BM_RET_5Y: {
                type: string;
            };
            P_RET_2Y: {
                type: string;
            };
            BM_RET_2Y: {
                type: string;
            };
            PO_Sharpe_Ratio_1Y: {
                type: string;
            };
            PO_Sharpe_Ratio_3Y: {
                type: string;
            };
            PO_Sharpe_Ratio_5Y: {
                type: string;
            };
            Portfolio_Volatility_1Y: {
                type: string;
            };
            Portfolio_Volatility_3Y: {
                type: string;
            };
            Portfolio_Volatility_5Y: {
                type: string;
            };
            P_Ret_1D: {
                type: string;
            };
            AUM: {
                type: string;
                nullable: string;
            };
            BM_Ret_1D: {
                type: string;
            };
            CAT_RET_1D: {
                type: string;
            };
        };
    };
};
export declare const security_prices_schema: {
    type: string;
    items: {
        type: string;
        properties: {
            PRICEDATE: {
                type: string;
                format: string;
            };
            SECURITYCODE: {
                type: string;
            };
            ISINCODE: {
                type: string;
            };
            NSECLOSEPRICE: {
                type: string;
            };
            BSECLOSEPRICE: {
                type: string;
            };
            Description: {
                type: string;
            };
        };
    };
};
export declare const corporate_action_schema: {
    type: string;
    items: {
        type: string;
        properties: {
            ROWID: {
                type: string;
            };
            CATYPE: {
                type: string;
            };
            BCNUMBER: {
                type: string;
            };
            COMPANYCODE: {
                type: string;
            };
            SECURITYNAME: {
                type: string;
            };
            SECURITYCODE: {
                type: string;
            };
            BSENSECODE: {
                type: string;
            };
            ISINCODE: {
                type: string;
            };
            BCFROMDATE: {
                type: string;
                format: string;
                nullable: string;
            };
            BCTODATE: {
                type: string;
                format: string;
                nullable: string;
            };
            EXDATE: {
                type: string;
                format: string;
            };
            REMARKS: {
                type: string;
            };
            DIVIDENDRATE: {
                type: string;
            };
            DIVIDENDPERSHARE: {
                type: string;
            };
            ADDUPDFLAG: {
                type: string;
            };
            NEWRATIO: {
                type: string;
            };
            OLDRATIO: {
                type: string;
            };
            ISSUEPRICE: {
                type: string;
            };
            SUBSCRIPTIONSTARTDATE: {
                type: string;
                format: string;
                nullable: string;
            };
            SUBSCRIPTIONENDDATE: {
                type: string;
                format: string;
                nullable: string;
            };
            NOTES: {
                type: string;
            };
            EXCHANGE: {
                type: string;
            };
            EFFECTIVEDATE: {
                type: string;
                format: string;
            };
            OLDISIN: {
                type: string;
            };
            OLDNAME: {
                type: string;
            };
            PAYDATE: {
                type: string;
                nullable: string;
            };
            FACEVALUE: {
                type: string;
            };
            MARKETLOT: {
                type: string;
            };
            GROUP: {
                type: string;
            };
            SECURITYTYPE: {
                type: string;
            };
            SETTLEMENTMODE: {
                type: string;
            };
            LASTMODIFIED: {
                type: string;
                format: string;
            };
            VESTEDCOMPANYNAME: {
                type: string;
                nullable: string;
            };
            VESTEDCOMPANYCODE: {
                type: string;
                nullable: string;
            };
            VESTEDSECURITYCODE: {
                type: string;
                nullable: string;
            };
            VESTEDSECURITYISIN: {
                type: string;
                nullable: string;
            };
            MAINCOMPANY_RATIOEXIST: {
                type: string;
                nullable: string;
            };
            ACQUIRERCOMPANYCODE: {
                type: string;
                nullable: string;
            };
            ACQUIRERSECURITYCODE: {
                type: string;
                nullable: string;
            };
            ACQUIRERCOMPANYNAME: {
                type: string;
                nullable: string;
            };
            ACQUIREECOMPANYCODE: {
                type: string;
                nullable: string;
            };
            ACQUIREESECURITYCODE: {
                type: string;
                nullable: string;
            };
            ACQUIREECOMPANYNAME: {
                type: string;
                nullable: string;
            };
            MERGERDESCRIPTION: {
                type: string;
                nullable: string;
            };
        };
    };
};
export declare const holdings_wf: {
    type: string;
    items: {
        type: string;
        properties: {
            SCHEME_ID: {
                type: string;
            };
            RTA_CODE: {
                type: string;
            };
            HOLDING_DATE: {
                type: string;
                format: string;
            };
            SECURITY_ISIN: {
                type: string;
            };
            RATING: {
                type: string;
            };
            ASSET_TYPE: {
                type: string;
            };
            INSTRUMENT_NAME: {
                type: string;
            };
            ASSET: {
                type: string;
            };
            ASSET_CLASSIFICATION: {
                type: string;
            };
            HOLDINGSINPERC: {
                type: string;
            };
            CORPOUS: {
                type: string;
            };
            GICS_SECTOR: {
                type: string;
            };
            MODIFIED_DATE: {
                type: string;
                format: string;
            };
            MTM_VALUE: {
                type: string;
            };
            INDUSTRY: {
                type: string;
            };
            RATING_CLASS_VF: {
                type: string;
            };
            Rating_Classification: {
                type: string;
            };
            maturity_date: {
                type: string;
                format: string;
            };
            Asset_Type_Wealthfy: {
                type: string;
            };
            SECURITIES: {
                type: string;
            };
        };
    };
};
