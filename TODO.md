# TODO

## Content endpoints + moderation state machine

- [ ] Inspect existing project conventions (tests, prisma client usage, route style)
- [ ] Update Prisma schema: add `REJECTED` to `ModerationStatus` enum and migrate DB
- [ ] Implement `src/controllers/content.controllers.ts` with all required handlers:
  - [ ] POST /v1/content (creator-only, verified-only, default pending, paid validation)
  - [ ] GET /v1/content (public approved only, filterable by type/visibility)
  - [ ] GET /v1/content/:id (paid entitlement gate + CONTENT_ACCESS_DENIED)
  - [ ] PATCH /v1/content/:id (owner only)
  - [ ] DELETE /v1/content/:id (soft-delete; owner or admin)
  - [ ] PATCH /v1/content/:id/moderation (admin state machine pending→approved/rejected)
  - [ ] GET /v1/creator-profiles/:id/content (creator list + visibility gate)
- [ ] Create routes: `src/routes/v1/content.routes.ts`
- [ ] Mount routes in `src/routes/v1/index.ts`
- [ ] Add Jest tests covering:
  - [ ] moderation transitions (pending→approved/rejected; rejection_reason required)
  - [ ] paid access gate (denies when no completed PremiumPurchase)
  - [ ] role/ownership/soft-delete enforcement
- [ ] Run migrations (if needed) and execute `npm test` until green
