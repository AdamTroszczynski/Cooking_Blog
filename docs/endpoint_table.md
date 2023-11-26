

| Method | API Endpoint   | Parameters Type | Query Parameters |  Data |  Description |
|:-:|:-:|:-:|:-:|:-:|:-:|
| GET  |  /api/recipes |  - | ?recipeId=int, ?userId=int, ?difficulty=string , ?start, ?count | - | Return recipes of said parameters  |
| GET  |  /api/recipes |  - | - | - | Return all created recipes from database  |
| GET  |  /api/recipes/id |  int | - | - | Return a recipe of said ID from database  |
| PUT | /api/recipes/id | int | - | token | Updates recipe of said ID |
| PUT | /api/comments/id | int | - | token | Updates comment of said ID |
| DELETE | /api/recipes/id | int | - | token | Deletes recipe of said ID |
| DELETE | /api/comments/id | int | - | token | Deletes comment of said ID |
| POST  | /api/recipes  | -  | -  | token, new recipe | Create new recipe  |
| POST  | /api/comments  | -  | -  | token, new comment, recipeId | Create new comment  |
| POST | /auth/login | - | - | login,password | Log in |
| POST | /auth/register | - | - | login,password,password2,email | Create new user |