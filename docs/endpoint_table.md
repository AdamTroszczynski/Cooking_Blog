

| Method | API Endpoint   | Parameters   |  Data |  Description |
|:-:|:-:|:-:|:-:|:-:|
| GET  |  /api/recipes |  - | -  | Return all created recipes from database  |
| GET  |  /api/recipes/id | int  |  - |  Return recipe with specific ID|
| GET  |  /api/recipes/id/details | int  |  - |  Return details about recipe with specific ID |
| GET  | /api/recipes/stats  |  - | -  | Return some statistic information |
| PUT | /api/recipes/id | int | - | Updates recipe of said ID |
| DELETE | /api/recipes/id | int | token | Deletes recipe of said ID |
| POST  | /api/recipes  | -  | token, new recipe  | Create new recipe  |
| POST | /auth/login | - | login,password | Log in |
| POST | /auth/register | - | login,password,password2,email | Create new user |
| DELETE | /auth/delete | - | token,password,password2 | Deletes existing user |




