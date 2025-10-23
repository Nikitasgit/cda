# EventHub
Events manager application

# Conventional Commits

Conventional Commits is a specification for adding human- and machine-readable meaning to commit messages.

## Commit Types

- **feat:** A new feature for the codebase (correlates with MINOR in Semantic Versioning).
- **fix:** A bug fix for the codebase (correlates with PATCH in Semantic Versioning).
- **BREAKING CHANGE:** Introduces a breaking API change. This can appear in any commit type and is indicated either by:
  - A `BREAKING CHANGE:` footer in the commit message, or  
  - An exclamation mark after the type/scope, e.g., `feat!: ...`.
- **Other types:** Allowed types include:
  - `build:` – Changes that affect the build system or external dependencies.
  - `chore:` – Routine tasks and maintenance.
  - `ci:` – Continuous integration configuration.
  - `docs:` – Documentation only changes.
  - `style:` – Code style changes (formatting, missing semicolons, etc.).
  - `refactor:` – Code changes that neither fix a bug nor add a feature.
  - `perf:` – A code change that improves performance.
  - `test:` – Adding or correcting tests.
