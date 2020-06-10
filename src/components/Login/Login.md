# Login component
You can login in this app.

## State Local:
- **email:** txt of email input.
- **password**: txt of password input.

## State Redux:
- **loading**: boolean state of enpoints
- **error**: string of the error for the login endpoint.
- **token**: string who you obtain in the login, if you have it, you link to listUsers component.

## Actions
- **login**
- **restoreLogin**