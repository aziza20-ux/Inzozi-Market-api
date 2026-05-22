import type { Request, Response } from "express";
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
export declare const getUserById: (req: Request, res: Response) => Promise<void>;
export declare const createUser: (req: Request, res: Response) => Promise<void>;
export declare const updateUser: (req: Request, res: Response) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response) => Promise<void>;
export declare const getUserContents: (req: Request, res: Response) => Promise<void>;
export declare const getUserCampaigns: (req: Request, res: Response) => Promise<void>;
export declare const getUserMessages: (req: Request, res: Response) => Promise<void>;
export declare const usersStats: (req: Request, res: Response) => Promise<void>;
declare const _default: {
    getUsers: (req: Request, res: Response) => Promise<void>;
    getUserById: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    getUserContents: (req: Request, res: Response) => Promise<void>;
    getUserCampaigns: (req: Request, res: Response) => Promise<void>;
    getUserMessages: (req: Request, res: Response) => Promise<void>;
    usersStats: (req: Request, res: Response) => Promise<void>;
};
export default _default;
//# sourceMappingURL=users.controllers.d.ts.map