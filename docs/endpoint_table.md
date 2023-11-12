

| Method | API Endpoint   | Parameters Type | Query Parameters |  Data |  Description |
|:-:|:-:|:-:|:-:|:-:|:-:|
| GET  |  /api/recipes |  - | ?recipeId=int, ?userId=int, ?difficulty=string | - | Return all created recipes from database  |
| GET  |  /api/comments |  - | ?recipeId=int, ?userId=int, ?commentId=int | - | Return all created comments from database  |
| PUT | /api/recipes/id | int | - | token | Updates recipe of said ID |
| PUT | /api/comments/id | int | - | token | Updates comment of said ID |
| DELETE | /api/recipes/id | int | - | token | Deletes recipe of said ID |
| POST  | /api/recipes  | -  | -  | token, new recipe | Create new recipe  |
| POST  | /api/comments  | -  | -  | token, new comment, recipeId | Create new comment  |
| POST | /auth/login | - | - | login,password | Log in |
| POST | /auth/register | - | - | login,password,password2,email | Create new user |




