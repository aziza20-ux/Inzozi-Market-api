export type UploadUrlResult = {
    uploadUrl: string;
    publicUrl: string;
    storageKey: string;
    method: "PUT";
    headers: Record<string, string>;
};
export interface StorageService {
    generateUploadUrl(filename: string, mimeType: string): Promise<UploadUrlResult>;
    validatePublicUrl(url: string): boolean;
}
export declare class LocalStubStorageService implements StorageService {
    private readonly uploadDir;
    private readonly publicBaseUrl;
    generateUploadUrl(filename: string, mimeType: string): Promise<UploadUrlResult>;
    validatePublicUrl(url: string): boolean;
}
export declare const storageService: StorageService;
//# sourceMappingURL=storage.service.d.ts.map