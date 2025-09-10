# Code Style Guide

## Context

Global code style rules for Agent OS projects.

<conditional-block context-check="general-formatting">
IF this General Formatting section already read in current context:
  SKIP: Re-reading this section
  NOTE: "Using General Formatting rules already in context"
ELSE:
  READ: The following formatting rules

## General Formatting

### Indentation
- Use tabs for indentation (not spaces)
- Maintain consistent indentation throughout files
- Align nested structures for readability

### Naming Conventions
**Methods and Variables**: Use camelCase (e.g., `userProfile`, `calculateTotal`)
- **Functions**: Use camelCase (e.g., `getUserData`, `handleSubmit`)
- **React Components**: Use PascalCase (e.g., `UserProfile`, `PaymentProcessor`)
- **Custom Hooks**: Use camelCase with 'use' prefix (e.g., `useAuth`, `useLocalStorage`)
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`, `API_BASE_URL`)
- **Enum Values**: Use UPPER_SNAKE_CASE (e.g., `USER_ROLE.ADMIN`)
- **Files**:
  - Components: PascalCase (e.g., `UserProfile.tsx`, `Header.jsx`)
  - Utilities/Helpers: camelCase (e.g., `formatDate.ts`, `apiHelpers.js`)
  - Hooks: camelCase (e.g., `useAuth.ts`, `useDebounce.js`)
  - Config files: lowercase with hyphens (e.g., `next-config.js`, `tailwind.config.js`)
- **Folders**: Use lowercase with hyphens (e.g., `user-profile`, `api-utils`)

### Type Definitions (TypeScript)
- **Interfaces**: Use PascalCase with 'I' prefix optional (e.g., `IUser` or `User`)
- **Type Aliases**: Use PascalCase (e.g., `UserRole`, `ApiResponse`)
- **Props Types**: Use PascalCase with 'Props' suffix (e.g., `ButtonProps`, `HeaderProps`)

### Import Organization
- Group imports in this order:
  1. React/Next.js imports
  2. Third-party libraries
  3. Internal components
  4. Utils/Helpers
  5. Types/Interfaces
  6. Styles
- Use absolute imports when possible (e.g., `@/components/Header`)

### String Formatting
- **Default**: Use double quotes for regular strings: "Hello World"
- **Template literals**: Use backticks when you need:
  - Variable interpolation: `Hello ${userName}`
  - Multi-line strings:
    ```javascript
    const message = `
      This is a long message
      that spans multiple lines
    `;
    ```
  - Dynamic expressions: `Total: ${price * quantity}`
- **JSX attributes**: Use double quotes: `<div className="container">`
- **JSON**: Always double quotes (JSON requirement): `{"name": "value"}`
- **Avoid**: String concatenation with '+' 
  - Bad: "Hello " + name + "!"
  - Good: `Hello ${name}!`

### Code Comments
- Add brief comments above non-obvious business logic
- Document complex algorithms or calculations
- Explain the "why" behind implementation choices
- Never remove existing comments unless removing the associated code
- Update comments when modifying code to maintain accuracy
- Keep comments concise and relevant
</conditional-block>

<conditional-block task-condition="html-css-tailwind" context-check="html-css-style">
IF current task involves writing or updating HTML, CSS, or TailwindCSS:
  IF html-style.md AND css-style.md already in context:
    SKIP: Re-reading these files
    NOTE: "Using HTML/CSS style guides already in context"
  ELSE:
    <context_fetcher_strategy>
      IF current agent is Claude Code AND context-fetcher agent exists:
        USE: @agent:context-fetcher
        REQUEST: "Get HTML formatting rules from code-style/html-style.md"
        REQUEST: "Get CSS and TailwindCSS rules from code-style/css-style.md"
        PROCESS: Returned style rules
      ELSE:
        READ the following style guides (only if not already in context):
        - @.agent-os/standards/code-style/html-style.md (if not in context)
        - @.agent-os/standards/code-style/css-style.md (if not in context)
    </context_fetcher_strategy>
ELSE:
  SKIP: HTML/CSS style guides not relevant to current task
</conditional-block>

<conditional-block task-condition="javascript" context-check="javascript-style">
IF current task involves writing or updating JavaScript:
  IF javascript-style.md already in context:
    SKIP: Re-reading this file
    NOTE: "Using JavaScript style guide already in context"
  ELSE:
    <context_fetcher_strategy>
      IF current agent is Claude Code AND context-fetcher agent exists:
        USE: @agent:context-fetcher
        REQUEST: "Get JavaScript style rules from code-style/javascript-style.md"
        PROCESS: Returned style rules
      ELSE:
        READ: @.agent-os/standards/code-style/javascript-style.md
    </context_fetcher_strategy>
ELSE:
  SKIP: JavaScript style guide not relevant to current task
</conditional-block>
