import type { Request, Response } from "express";
export declare function deriveConversationId(userA: string, userB: string): string;
export declare function createMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listConversations(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getConversationThread(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markMessageRead(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    createMessage: typeof createMessage;
    listConversations: typeof listConversations;
    getConversationThread: typeof getConversationThread;
    markMessageRead: typeof markMessageRead;
    deleteMessage: typeof deleteMessage;
};
export default _default;
//# sourceMappingURL=message.controllers.d.ts.map