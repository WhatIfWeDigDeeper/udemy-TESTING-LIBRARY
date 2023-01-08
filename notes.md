# Notes

## Unit tests vs functional tests

### Unit tests

- complex logic in shared function with many edge cases
- determining why functional test failed

### Functional tests

- simulates how users will use the system
- high level means not tied to implementation so easier to refactor
- resilient to changes in implementation
- can be used to test the system as a whole
- can be difficult to diagnose why a test failed

## `screen` Query Methods

- `get` when expect elem in DOM
- `query` when expect elem not to be in the DOM
- find expect the elem to be async

`{get|query|find}[All?]By{QueryType}`
QueryType

- Role (most preferred)
- AltText (images)
- Text (display elems, non-interactive with no role)
- Form elem
  - PlaceholderText
  - LabelText
  - DisplayValue

## MSW

Jest

- `.toBe` for primitive types
- `.toEqual` for objects & arrays

use `find` when expect elem to be async

await waitFor
