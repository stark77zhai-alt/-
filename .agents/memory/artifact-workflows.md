---
name: Artifact workflow configuration
description: Durable guidance for projects where a generated artifact workflow coexists with a legacy root Replit workflow.
---

When an existing Vite app is registered as a web artifact, the artifact workflow should be the only workflow serving the frontend port; point its development and production commands at the root app scripts rather than a nonexistent pnpm workspace package.

**Why:** A generated artifact configuration can retain monorepo commands after the project is actually a single root package, and leaving both root and artifact workflows active causes port conflicts.

**How to apply:** Check `.replit-artifact/artifact.toml` and the root `.replit` together. Use the artifact workflow for the run button, keep its port aligned with Vite's 5000, and remove duplicate root workflows.