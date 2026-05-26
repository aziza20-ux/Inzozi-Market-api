import type { Request, Response } from "express";
export declare function withdraw(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function disburseCampaign(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function mockProviderCallback(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    withdraw: typeof withdraw;
    disburseCampaign: typeof disburseCampaign;
    mockProviderCallback: typeof mockProviderCallback;
};
export default _default;
//# sourceMappingURL=payment.controllers.d.ts.map