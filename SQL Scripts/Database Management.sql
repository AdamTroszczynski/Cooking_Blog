--Inserting Data: 
INSERT INTO "users" ("username", "password", "firstname", "lastname", "age") 
VALUES ('john_doe', 'password123', 'John', 'Doe', 30);
--VALUES ('user_input_username', 'user_input_password', 'user_input_firstname', 'user_input_lastname', user_input_age);

INSERT INTO "recipes" ("name", "difficulty", "userId", "steps", "ingredients", "dishType") 
VALUES ('Spaghetti Carbonara', 'medium', 1, 'Cook pasta, mix with eggs, cheese, and pancetta.', 'Pasta, Eggs, Cheese, Pancetta', 'MainCourse');
--VALUES ('user_input_recipe_name', 'user_input_difficulty', user_input_userId, 'user_input_steps', 'user_input_ingredients', 'user_input_dishType');

INSERT INTO "comments" ("userId", "recipeId", "content") 
VALUES (1, 1, 'This recipe is amazing!');
--VALUES (user_input_userId, user_input_recipeId, 'user_input_content');

INSERT INTO "follows" ("follower", "following") 
VALUES (1, 2);
--VALUES (user_input_followerId, user_input_followingId);

INSERT INTO "tags" ("name", "userId", "recipeId") 
VALUES ('Italian', 1, 1);
--VALUES ('user_input_tag_name', user_input_userId, user_input_recipeId);

INSERT INTO "favourite" ("userId", "recipeId") 
VALUES (1, 1);
--VALUES (user_input_userId, user_input_recipeId);

INSERT INTO "likes" ("userId", "recipeId")
VALUES (1, 1);
-- VALUES (user_input_userId, user_input_recipeId);

INSERT INTO "stats" ("userId", "comments", "recipes", "favourites") 
VALUES (1, 5, 10, 3);
--VALUES (user_input_userId, user_input_comments, user_input_recipes, user_input_favourites);

--Updating Data:
UPDATE "users" SET "age" = 31 WHERE "username" = 'john_doe';
--UPDATE "users" SET "age" = user_input_new_age WHERE "username" = 'user_input_username';

UPDATE "recipes" SET "name" = 'Classic Spaghetti Carbonara' WHERE "recipeId" = 1;
--UPDATE "recipes" SET "name" = 'user_input_new_recipe_name' WHERE "recipeId" = user_input_recipeId;

--Querying Data:
SELECT "name", "difficulty" FROM "recipes";

SELECT "content" FROM "comments" WHERE "recipeId" = 1;
--SELECT "content" FROM "comments" WHERE "recipeId" = user_input_recipeId;

--Deleting Data:
DELETE FROM "users" WHERE "username" = 'john_doe';
--DELETE FROM "users" WHERE "username" = 'user_input_username';

DELETE FROM "comments" WHERE "commentId" = 1;
--DELETE FROM "comments" WHERE "commentId" = user_input_commentId;
