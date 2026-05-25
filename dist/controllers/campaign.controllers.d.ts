import type { Request, Response } from "express";
export declare function createCampaign(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateCampaignStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function applyToCampaign(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listCampaignApplications(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function patchCampaignApplication(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    createCampaign: typeof createCampaign;
    updateCampaignStatus: typeof updateCampaignStatus;
    applyToCampaign: typeof applyToCampaign;
    listCampaignApplications: typeof listCampaignApplications;
    patchCampaignApplication: typeof patchCampaignApplication;
};
export default _default;
//# sourceMappingURL=campaign.controllers.d.ts.map