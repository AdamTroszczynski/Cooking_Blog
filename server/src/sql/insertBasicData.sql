--Inserting Data:
INSERT INTO "users" ( "username", "password", "firstname", "lastname", "age")
VALUES ('john_doe', 'password123', 'John', 'Doe', 30);

INSERT INTO "users" ( "username", "password", "firstname", "lastname", "age")
VALUES ('user2', 'password456', 'Jane', 'Doe', 25);

--VALUES ('user_input_username', 'user_input_password', 'user_input_firstname', 'user_input_lastname', user_input_age);

INSERT INTO "recipes" ("name", "difficulty", "userid", "steps", "ingredients", "dishtype")
VALUES ('Spaghetti Carbonara', 'medium', 1, 'Cook pasta, mix with eggs, cheese, and pancetta.', 'Pasta, Eggs, Cheese, Pancetta', 'MainCourse');
--VALUES ('user_input_recipe_name', 'user_input_difficulty', user_input_userid, 'user_input_steps', 'user_input_ingredients', 'user_input_dishtype');

INSERT INTO "comments" ("userid", "recipeid", "content")
VALUES (1, 1, 'This recipe is amazing!');
--VALUES (user_input_userid, user_input_recipeid, 'user_input_content');

INSERT INTO "follows" ("follower", "following")
VALUES (1, 2);
--VALUES (user_input_followerId, user_input_followingId);

INSERT INTO "tags" ("name", "userid", "recipeid")
VALUES ('Italian', 1, 1);
--VALUES ('user_input_tag_name', user_input_userid, user_input_recipeid);

INSERT INTO "favourite" ("userid", "recipeid")
VALUES (1, 1);
--VALUES (user_input_userid, user_input_recipeid);

INSERT INTO "likes" ("userid", "recipeid")
VALUES (1, 1);
-- VALUES (user_input_userid, user_input_recipeid);

INSERT INTO "stats" ("userid", "comments", "recipes", "favourites")
VALUES (1, 5, 10, 3);
--VALUES (user_input_userid, user_input_comments, user_input_recipes, user_input_favourites);

--Updating Data:
UPDATE "users" SET "age" = 31 WHERE "username" = 'john_doe';
--UPDATE "users" SET "age" = user_input_new_age WHERE "username" = 'user_input_username';

UPDATE "recipes" SET "name" = 'Classic Spaghetti Carbonara' WHERE "recipeid" = 1;
--UPDATE "recipes" SET "name" = 'user_input_new_recipe_name' WHERE "recipeid" = user_input_recipeid;

--Querying Data:
SELECT "name", "difficulty" FROM "recipes";

SELECT "content" FROM "comments" WHERE "recipeid" = 1;
--SELECT "content" FROM "comments" WHERE "recipeid" = user_input_recipeid;

--Deleting Data:
DELETE FROM "users" WHERE "username" = 'john_doe';
--DELETE FROM "users" WHERE "username" = 'user_input_username';

DELETE FROM "comments" WHERE "commentid" = 1;
--DELETE FROM "comments" WHERE "commentid" = user_input_commentid;
