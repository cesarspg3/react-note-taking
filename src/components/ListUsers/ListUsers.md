# ListUsers component
Render all users from te endpoit GET 'https://reqres.in/api/users'

## State Redux:
- **loading**: boolean state of enpoints
- **error**: string of the error for the login endpoint.
- **token**: string who you obtain in the login, if you don´t have it, you link to login component.

## Actions
- **getUsers**