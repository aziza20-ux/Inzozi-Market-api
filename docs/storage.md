# Storage Service

The API uses `StorageService` from `src/services/storage.service.ts` instead of calling a cloud SDK from controllers.

## Local Development

Default driver:

```env
STORAGE_DRIVER=local
LOCAL_STORAGE_DIR=storage/uploads
LOCAL_STORAGE_PUBLIC_BASE_URL=https://local-storage.inzozi.test
```

`POST /api/v1/content/upload-url` returns:

```json
{
  "uploadUrl": "https://local-storage.inzozi.test/uploads/example-key",
  "publicUrl": "https://local-storage.inzozi.test/uploads/example-key",
  "storageKey": "example-key",
  "method": "PUT",
  "headers": {
    "content-type": "image/png"
  }
}
```

For the local stub, the URL is fake HTTPS and a metadata file is written under `storage/uploads`. Use the returned `publicUrl` as `media_url` when creating content.

## Swapping to S3 or GCS

1. Add a new class that implements `StorageService`.
2. Return the same `UploadUrlResult` shape from `generateUploadUrl`.
3. Validate only public HTTPS media URLs in `validatePublicUrl`.
4. Add a new branch in `createStorageService()` for the new driver.
5. Change only the environment variable, for example:

```env
STORAGE_DRIVER=s3
```

Controllers should continue importing only `storageService`.
