# API DOCUMENTATION

## Table of endpoints

### Recipe API

| Endpoint                  | Method | Description                                                                     |
| ------------------------- | ------ | ------------------------------------------------------------------------------- |
| `/recipes`                | GET    | Retrieves a list of all culinary recipes.                                       |
| `/recipesPage`            | GET    | Retrieves recipes for display on a page.                                        |
| `/recipesPageUser`        | GET    | Requires authentication. Retrieves user-specific recipes for display on a page. |
| `/newestRecipes`          | GET    | Retrieves the newest culinary recipes.                                          |
| `/singleRecipe/:recipeId` | GET    | Retrieves details of a single recipe based on its identifier.                   |
| `/dishCategories`         | GET    | Retrieves available dish categories.                                            |
| `/difficultLevels`        | GET    | Retrieves available difficulty levels of recipes.                               |
| `/uploadRecipeImage`      | POST   | Requires authentication. Uploads an image related to a recipe.                  |
| `/createRecipe`           | POST   | Requires authentication. Creates a new culinary recipe.                         |
| `/updateRecipe`           | PUT    | Requires authentication. Updates an existing culinary recipe.                   |

### Auth API

| Endpoint                   | Method | Description                                          |
|----------------------------|--------|------------------------------------------------------|
| `/login`                   | POST   | Authenticates a user.                                |
| `/register`                | POST   | Registers a new user.                                |
| `/userFromToken`           | POST   | Requires authentication. Retrieves user details based on the provided token. |

### Static API

| Endpoint                          | Method | Description                                      |
|-----------------------------------|--------|--------------------------------------------------|
| `/recipeImages/:userFolder?/:imageName` | GET    | Retrieves a recipe image based on the provided user folder (optional) and image name. |

[Go back](../README.md)
