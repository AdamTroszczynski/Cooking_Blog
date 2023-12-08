--Inserting Data: 
INSERT INTO "users" ("username", "password", "firstname", "lastname", "age") 
VALUES  ('john_doe', 'password123', 'John', 'Doe', 30),
        ('jane_smith', 'pass456', 'Jane', 'Smith', 25),
        ('bob_jones', 'secret321', 'Bob', 'Jones', 35),
        ('alice_wonder', 'wonderland789', 'Alice', 'Wonder', 28),
        ('sam_green', 'green123', 'Sam', 'Green', 22),
        ('emily_white', 'snowflake456', 'Emily', 'White', 29),
        ('michael_brown', 'brownsugar789', 'Michael', 'Brown', 32),
        ('susan_jackson', 'sunflower321', 'Susan', 'Jackson', 27);
--VALUES ('user_input_username', 'user_input_password', 'user_input_firstname', 'user_input_lastname', user_input_age);

INSERT INTO "recipes" ("name", "difficulty", "userid", "steps", "ingredients", "dishtype") 
VALUES  ('Spaghetti Carbonara', 'medium', 1, 'Cook pasta, mix with eggs, cheese, and pancetta.', 'Pasta, Eggs, Cheese, Pancetta', 'MainCourse'),
        ('Chicken Alfredo', 'easy', 2, 'Cook chicken, prepare Alfredo sauce, mix with pasta.', 'Chicken, Pasta, Alfredo Sauce', 'MainCourse'),
        ('Vegetarian Stir-Fry', 'medium', 3, 'Stir-fry vegetables, add tofu, season with soy sauce.', 'Tofu, Broccoli, Bell Peppers, Carrots, Soy Sauce', 'Vegetarian'),
        ('Chocolate Chip Cookies', 'easy', 4, 'Mix ingredients, form dough into cookies, bake in oven.', 'Flour, Sugar, Butter, Chocolate Chips, Eggs', 'Dessert'),
        ('Grilled Salmon', 'hard', 5, 'Marinate salmon, grill until cooked, serve with lemon.', 'Salmon, Olive Oil, Lemon, Herbs', 'MainCourse'),
        ('Caprese Salad', 'easy', 6, 'Slice tomatoes and mozzarella, arrange on a plate, drizzle with balsamic glaze.', 'Tomatoes, Mozzarella, Basil, Balsamic Glaze', 'Appetizer'),
        ('Vegetable Curry', 'medium', 5, 'Cook mixed vegetables in curry sauce, serve with rice.', 'Mixed Vegetables, Curry Sauce, Rice', 'Vegetarian'),
        ('Blueberry Pancakes', 'easy', 8, 'Mix batter, cook pancakes, top with blueberries and syrup.', 'Flour, Milk, Eggs, Blueberries, Maple Syrup', 'Breakfast'),
        ('Margherita Pizza', 'medium', 1, 'Roll out pizza dough, add tomato sauce, mozzarella, and basil, bake in the oven.', 'Pizza Dough, Tomato Sauce, Mozzarella, Basil', 'MainCourse'),
        ('Cucumber Avocado Salad', 'easy', 2, 'Chop cucumbers and avocados, mix with olive oil and lemon juice.', 'Cucumbers, Avocados, Olive Oil, Lemon Juice', 'Salad'),
        ('Beef Tacos', 'medium', 3, 'Cook seasoned beef, assemble tacos with toppings.', 'Ground Beef, Taco Seasoning, Tortillas, Cheese, Lettuce', 'MainCourse'),
        ('Pumpkin Soup', 'easy', 4, 'Roast pumpkin, blend with broth, add spices, and simmer.', 'Pumpkin, Chicken Broth, Onion, Garlic, Nutmeg', 'Soup'),
        ('Lemon Garlic Shrimp Pasta', 'hard', 4, 'Sauté shrimp in garlic and lemon, toss with pasta and parsley.', 'Shrimp, Pasta, Garlic, Lemon, Parsley', 'MainCourse'),
        ('Quinoa Salad', 'easy', 4, 'Cook quinoa, mix with diced vegetables and vinaigrette.', 'Quinoa, Tomatoes, Cucumbers, Feta Cheese, Vinaigrette', 'Salad'),
        ('Homemade Sushi Rolls', 'hard', 5, 'Prepare sushi rice, roll with seaweed and assorted fillings.', 'Sushi Rice, Nori, Fish, Vegetables, Soy Sauce', 'MainCourse'),
        ('Apple Pie', 'medium', 2, 'Prepare pie crust, fill with apple slices, bake until golden brown.', 'Apples, Sugar, Cinnamon, Pie Crust', 'Dessert'),
        ('Mushroom Risotto', 'medium', 1, 'Sauté mushrooms, cook rice in broth, stir in Parmesan cheese.', 'Mushrooms, Arborio Rice, Chicken Broth, Parmesan Cheese', 'MainCourse'),
        ('Greek Salad', 'easy', 2, 'Chop tomatoes, cucumbers, and feta cheese, mix with olives and Greek dressing.', 'Tomatoes, Cucumbers, Feta Cheese, Olives, Greek Dressing', 'Salad'),
        ('BBQ Pulled Pork Sandwiches', 'hard', 3, 'Slow-cook pork with BBQ sauce, shred, and serve on buns with coleslaw.', 'Pork Shoulder, BBQ Sauce, Buns, Coleslaw', 'MainCourse'),
        ('Vegetable Lasagna', 'medium', 4, 'Layer lasagna noodles with ricotta, marinara sauce, and mixed vegetables.', 'Lasagna Noodles, Ricotta Cheese, Marinara Sauce, Mixed Vegetables', 'Vegetarian'),
        ('Chickpea Curry', 'medium', 5, 'Cook chickpeas in curry sauce with spices, serve with rice.', 'Chickpeas, Curry Sauce, Rice', 'Vegetarian'),
        ('Homemade Guacamole', 'easy', 6, 'Mash avocados, mix with diced tomatoes, onions, cilantro, and lime juice.', 'Avocados, Tomatoes, Onions, Cilantro, Lime Juice', 'Appetizer'),
        ('Chicken Parmesan', 'medium', 2, 'Coat chicken in breadcrumbs, fry, top with marinara and cheese, bake.', 'Chicken Breasts, Breadcrumbs, Marinara Sauce, Mozzarella', 'MainCourse'),
        ('Vegetarian Pasta Primavera', 'easy', 3, 'Sauté mixed vegetables, toss with pasta and olive oil.', 'Pasta, Broccoli, Bell Peppers, Zucchini, Olive Oil', 'Vegetarian'),
        ('Chocolate Lava Cake', 'hard', 4, 'Mix batter, pour into ramekins, bake until edges set but center molten.', 'Flour, Sugar, Butter, Chocolate, Eggs', 'Dessert'),
        ('Grilled BBQ Shrimp Skewers', 'medium', 5, 'Marinate shrimp in BBQ sauce, skewer, grill until cooked.', 'Shrimp, BBQ Sauce, Skewers', 'Appetizer'),
        ('Caprese Sandwich', 'easy', 6, 'Layer tomatoes, mozzarella, and basil on bread, drizzle with balsamic glaze.', 'Bread, Tomatoes, Mozzarella, Basil, Balsamic Glaze', 'Sandwich'),
        ('Spinach and Feta Stuffed Chicken', 'medium', 8, 'Stuff chicken breasts with spinach and feta, bake until golden brown.', 'Chicken Breasts, Spinach, Feta Cheese', 'MainCourse'),
        ('Blueberry Smoothie Bowl', 'easy', 8, 'Blend blueberries, yogurt, and banana, top with granola and nuts.', 'Blueberries, Yogurt, Banana, Granola, Nuts', 'Breakfast'),
        ('Beef Stir-Fry', 'medium', 1, 'Sauté beef with vegetables in soy sauce and ginger, serve over rice.', 'Beef Strips, Broccoli, Bell Peppers, Soy Sauce, Ginger, Rice', 'MainCourse'),
        ('Lemon Herb Roasted Chicken', 'medium', 2, 'Marinate chicken in lemon and herbs, roast until golden brown.', 'Whole Chicken, Lemon, Herbs, Olive Oil', 'MainCourse'),
        ('Avocado Toast with Poached Egg', 'easy', 3, 'Toast bread, spread avocado, top with a poached egg and salt.', 'Bread, Avocado, Eggs, Salt', 'Breakfast'),
        ('Pumpkin Spice Latte', 'easy', 4, 'Brew coffee, heat milk with pumpkin spice, combine and top with whipped cream.', 'Coffee, Milk, Pumpkin Spice, Whipped Cream', 'Beverage'),
        ('Quinoa and Black Bean Salad', 'easy', 5, 'Cook quinoa, mix with black beans, corn, tomatoes, and lime vinaigrette.', 'Quinoa, Black Beans, Corn, Tomatoes, Lime Vinaigrette', 'Salad'),
        ('Teriyaki Salmon', 'medium', 6, 'Marinate salmon in teriyaki sauce, grill or bake until cooked through.', 'Salmon, Teriyaki Sauce, Sesame Seeds, Green Onions', 'MainCourse'),
        ('Mango Salsa Chicken Tacos', 'medium', 5, 'Season chicken, cook, shred, and assemble tacos with mango salsa.', 'Chicken Breasts, Mango, Red Onion, Cilantro, Tortillas', 'MainCourse'),
        ('Chocolate Raspberry Cheesecake', 'hard', 8, 'Prepare chocolate crust, mix cream cheese, sugar, and raspberries, bake until set.', 'Chocolate Cookies, Cream Cheese, Sugar, Raspberries', 'Dessert'),
        ('Vegetable Curry Rice Bowl', 'medium', 1, 'Sauté mixed vegetables in curry sauce, serve over rice.', 'Mixed Vegetables, Curry Sauce, Rice', 'Vegetarian'),
        ('Honey Mustard Glazed Salmon', 'medium', 2, 'Coat salmon with honey mustard glaze, bake until flaky.', 'Salmon Fillets, Honey, Mustard, Olive Oil', 'MainCourse'),
        ('Green Smoothie', 'easy', 3, 'Blend spinach, banana, green apple, and almond milk until smooth.', 'Spinach, Banana, Green Apple, Almond Milk', 'Beverage'),
        ('Tomato Basil Bruschetta', 'easy', 4, 'Mix diced tomatoes, fresh basil, garlic, and olive oil, serve on toasted bread.', 'Tomatoes, Fresh Basil, Garlic, Olive Oil, Bread', 'Appetizer'),
        ('Lentil Soup', 'easy', 5, 'Cook lentils with vegetables and spices until tender, serve hot.', 'Lentils, Carrots, Celery, Onion, Garlic', 'Soup'),
        ('Peach and Berry Cobbler', 'medium', 6, 'Mix peaches and berries with sugar, top with cobbler crust, bake until golden brown.', 'Peaches, Mixed Berries, Sugar, Flour, Butter', 'Dessert'),
        ('Shrimp Scampi Pasta', 'medium', 1, 'Sauté shrimp in garlic and lemon butter sauce, toss with pasta.', 'Shrimp, Garlic, Lemon, Butter, Pasta', 'MainCourse'),
        ('Vegan Chocolate Avocado Mousse', 'easy', 8, 'Blend avocado, cocoa powder, maple syrup, and vanilla until creamy.', 'Avocado, Cocoa Powder, Maple Syrup, Vanilla', 'Dessert'),
        ('Crispy Baked Zucchini Fries', 'easy', 1, 'Coat zucchini sticks in breadcrumbs, bake until golden and crispy.', 'Zucchini, Breadcrumbs, Parmesan Cheese, Egg', 'Appetizer'),
        ('Mushroom and Spinach Stuffed Chicken', 'medium', 2, 'Stuff chicken breasts with sautéed mushrooms and spinach, bake until cooked.', 'Chicken Breasts, Mushrooms, Spinach, Garlic', 'MainCourse'),
        ('Chia Seed Pudding', 'easy', 3, 'Mix chia seeds with almond milk and sweetener, refrigerate until thickened.', 'Chia Seeds, Almond Milk, Sweetener', 'Dessert'),
        ('Sesame Ginger Noodles', 'medium', 4, 'Cook noodles, toss with sesame ginger sauce, and add vegetables.', 'Noodles, Sesame Oil, Ginger, Soy Sauce, Vegetables', 'MainCourse'),
        ('Butternut Squash Risotto', 'medium', 5, 'Roast butternut squash, stir into creamy risotto with Parmesan.', 'Butternut Squash, Arborio Rice, Chicken Broth, Parmesan Cheese', 'MainCourse'),
        ('Pineapple Chicken Skewers', 'medium', 6, 'Marinate chicken in pineapple juice and soy sauce, skewer and grill.', 'Chicken, Pineapple Juice, Soy Sauce, Bell Peppers', 'Appetizer'),
        ('Cucumber Mint Lemonade', 'easy', 1, 'Blend cucumber and mint, mix with lemonade, and serve over ice.', 'Cucumber, Mint, Lemonade, Ice', 'Beverage'),
        ('Eggplant Parmesan', 'medium', 8, 'Coat eggplant slices in breadcrumbs, layer with marinara and cheese, bake until bubbly.', 'Eggplant, Breadcrumbs, Marinara Sauce, Mozzarella Cheese', 'MainCourse'),
        ('Quinoa Stuffed Bell Peppers', 'medium', 1, 'Cook quinoa, mix with black beans, corn, and stuff bell peppers.', 'Quinoa, Black Beans, Corn, Bell Peppers', 'Vegetarian'),
        ('Lemon Garlic Shrimp Tacos', 'medium', 2, 'Sauté shrimp in lemon garlic sauce, assemble tacos with slaw.', 'Shrimp, Lemon, Garlic, Tortillas, Slaw', 'MainCourse'),
        ('Greek Yogurt Parfait', 'easy', 3, 'Layer Greek yogurt with granola, berries, and honey.', 'Greek Yogurt, Granola, Berries, Honey', 'Breakfast');
--VALUES ('user_input_recipe_name', 'user_input_difficulty', user_input_userid, 'user_input_steps', 'user_input_ingredients', 'user_input_dishtype');

INSERT INTO "comments" ("userid", "recipeid", "content") 
VALUES  (1, 1, 'This recipe is amazing!'),
        (2, 1, 'I tried this last night, and it was delicious!'),
        (3, 2, 'The flavors in this dish are so well-balanced.'),
        (4, 3, 'Perfect recipe for a quick and tasty meal!'),
        (5, 4, 'The pumpkin soup was a hit at my dinner party.'),
        (6, 5, 'The shrimp pasta was a bit challenging, but so worth it!'),
        (7, 6, 'Quinoa salad is now a staple in my weekly meals.'),
        (8, 7, 'Homemade sushi rolls are a fun and tasty weekend project.'),
        (1, 8, 'The apple pie turned out just like grandma used to make.'),
        (2, 9, 'Mushroom risotto is a cozy comfort food favorite.'),
        (3, 10, 'Greek salad is so refreshing and easy to make.'),
        (4, 11, 'BBQ pulled pork sandwiches are a crowd-pleaser!'),
        (5, 12, 'Vegetable lasagna is a hit even with meat lovers.'),
        (6, 13, 'Chickpea curry is my go-to meatless dinner option.');
--VALUES (user_input_userid, user_input_recipeid, 'user_input_content');

INSERT INTO "follows" ("follower", "following") 
VALUES  (1, 2),
        (6, 7),
        (1, 7),
        (8, 1);
--VALUES (user_input_followerId, user_input_followingId);

INSERT INTO "tags" ("name", "userid", "recipeid") 
VALUES  ('Italian', 1, 1),
        ('Vegetarian', 2, 2),
        ('Mexican', 3, 3),
        ('Comfort Food', 4, 4),
        ('Soup', 5, 5),
        ('Seafood', 6, 6),
        ('Healthy', 7, 7),
        ('Japanese', 8, 8),
        ('Dessert', 1, 9),
        ('Risotto', 2, 10),
        ('Mediterranean', 3, 11),
        ('BBQ', 4, 12),
        ('Pasta', 5, 13),
        ('Salad', 6, 14),
        ('Appetizer', 7, 15);
--VALUES ('user_input_tag_name', user_input_userid, user_input_recipeid);

INSERT INTO "favourite" ("userid", "recipeid") 
VALUES  (1, 1),
        (1, 9),
        (2, 10),
        (3, 11),
        (4, 12);
--VALUES (user_input_userid, user_input_recipeid);

INSERT INTO "likes" ("userid", "recipeid")
VALUES  (1, 1),
        (1, 9),
        (2, 10),
        (3, 11),
        (4, 12),
        (1, 2),
        (2, 3),
        (3, 4);
-- VALUES (user_input_userid, user_input_recipeid);

INSERT INTO "stats" ("userid", "comments", "recipes", "favourites") 
VALUES  (1, 5, 10, 3),
        (6, 15, 22, 8),
        (7, 7, 14, 5),
        (8, 9, 16, 6),
        (1, 3, 7, 2);
--VALUES (user_input_userid, user_input_comments, user_input_recipes, user_input_favourites);

--Updating Data:
UPDATE "users" SET "age" = 31 WHERE "username" = 'john_doe';
--UPDATE "users" SET "age" = user_input_new_age WHERE "username" = 'user_input_username';

UPDATE "recipes" SET "name" = 'Classic Spaghetti Carbonara' WHERE "recipeid" = 1;
--UPDATE "recipes" SET "name" = 'user_input_new_recipe_name' WHERE "recipeid" = user_input_recipeid;