# TODO - Campaign Applications Endpoints

## Steps

1. Update Prisma schema: add Campaign eligibility fields (niche_filter, min_audience_size, max_creators), add CampaignStatus value in_progress, add Application model with unique constraint (campaignId, creatorId).
2. Add new campaign controllers implementing:
   - POST /v1/campaigns/:id/applications
   - GET /v1/campaigns/:id/applications
   - PATCH /v1/campaigns/:id/applications/:appId
3. Add new v1 campaign routes and mount them in src/routes/v1/index.ts.
4. Implement eligibility checks (niche_filter + min_audience_size) and duplicate application handling (409).
5. Implement PATCH accept/reject logic with max_creators cap and update campaign status to in_progress when first accepted.
6. Add Jest tests covering:
   - eligibility gates
   - duplicate application 409
   - max_creators cap enforcement
   - in_progress transition on first acceptance.
7. Run Prisma migration and run tests (npm test).
