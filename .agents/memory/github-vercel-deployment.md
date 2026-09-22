---
name: GitHub-linked Vercel deployment
description: How this portfolio's existing production deployment receives updates.
---

The production site is connected to the GitHub repository's `main` branch, and Vercel deploys new commits automatically. The Replit GitHub connection is needed for authenticated pushes from the workspace; a separate Vercel connector is not required for routine releases.

**Why:** The production dashboard explicitly says updates arrive by pushing `main`, while direct shell pushes can fail when the GitHub remote has no local credential.

**How to apply:** Verify the build, push the current `main` branch through the connected GitHub integration, then check the commit's Vercel status until it reports a completed deployment.