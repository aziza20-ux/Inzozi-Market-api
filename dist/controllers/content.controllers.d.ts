import type { Request, Response } from "express";
export declare function generateContentUploadUrl(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createContent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getContentList(req: Request, res: Response): Promise<void>;
export declare function getContent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function patchContent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteContent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function moderationUpdate(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getCreatorProfileContent(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
declare const _default: {
    generateContentUploadUrl: typeof generateContentUploadUrl;
    createContent: typeof createContent;
    getContentList: typeof getContentList;
    getContent: typeof getContent;
    patchContent: typeof patchContent;
    deleteContent: typeof deleteContent;
    moderationUpdate: typeof moderationUpdate;
    getCreatorProfileContent: typeof getCreatorProfileContent;
};
export default _default;
//# sourceMappingURL=content.controllers.d.ts.map