# Agent Guidelines

This project follows strict conventions for version control and development workflow. All AI agents MUST adhere to these rules.

## Standards

### Conventional Commits
Every commit message must strictly follow the Conventional Commits specification. This means using a specific structure: `<type>(<scope>): <description>`, where:
- **feat:** A new feature for the user, not a new feature for builds or internal tools.
- **fix:** A bug fix for the user, not a fix for builds or internal tools.
- **docs:** Changes to the documentation.
- **style:** Formatting, missing semi-colons, etc.; no production code change.
- **refactor:** Refactoring production code, eg. renaming a variable.
- **chore:** Updating build tasks, package manager configs, etc.; no production code change.

### Conventional Branching
All branch names must follow a structured naming convention based on the type of work being performed:
- **feature/description:** For new features.
- **fix/description:** For bug fixes.
- **hotfix/description:** For urgent production fixes.
- **refactor/description:** For code refactoring.
- **docs/description:** For documentation changes.

## Workflow Rules
1. **No Direct Pushes to Main:** **NEVER** push directly to the `main` branch for features or grouped modifications.
2. **Branch & PR Strategy:** Always create a new branch following the conventional naming scheme. All changes must be merged into `main` via a Pull Request (PR) on GitHub.
3. **Explicit Consent for Actions:**
   - **No Automatic Commits:** Never perform a git commit unless the user has explicitly requested it.
   - **No Automatic Pushes:** Never perform a git push unless the user has explicitly confirmed they want to push the changes.
