import type { Request, Response } from "express";
export declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function verify(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    register: typeof register;
    verify: typeof verify;
    login: typeof login;
    refresh: typeof refresh;
    logout: typeof logout;
};
export default _default;
//# sourceMappingURL=auth.controllers.d.ts.map