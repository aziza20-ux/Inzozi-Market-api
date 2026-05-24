import type { Request, Response } from "express";
export declare function applyToCampaign(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listCampaignApplications(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function patchCampaignApplication(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    applyToCampaign: typeof applyToCampaign;
    listCampaignApplications: typeof listCampaignApplications;
    patchCampaignApplication: typeof patchCampaignApplication;
};
export default _default;
//# sourceMappingURL=campaign.controllers.d.ts.map