INSERT INTO difficultLevels (difficultLevelId, levelName)
  VALUES
    (1, 'Easy'),
    (2, 'Medium'),
    (3, 'Hard'),
    (4, 'Expert');

INSERT INTO dishTypes (dishTypeId, dishTypeName)
  VALUES
    (1, 'Appetizer'),
    (2, 'Main Course'),
    (3, 'Dessert'),
    (4, 'Salad'),
    (5, 'Soup'),
    (6, 'Side Dish'),
    (7, 'Beverage'),
    (8, 'Snack'),
    (9, 'Breakfast'),
    (10, 'Brunch');

-- username (userN) password (testuser)
INSERT INTO users (userId, username, email, passwordHash, registered)
  VALUES
    (1, 'user1', 'user1@example.com', '$2b$10$mLcKcqUh/ahkIHuyrkVsZOh7OskfyeLNSt7HKpwsumYIBIv4dP64i', CURRENT_TIMESTAMP),
    (2, 'user2', 'user2@example.com', '$2b$10$mZI7syaFHLCToFYdCF3r0.3wjclrMGGtLXl7diXXBvR727X69Y4Pq', CURRENT_TIMESTAMP),
    (3, 'user3', 'user3@example.com', '$2b$10$uetEaQ6bFOkv0Q3YM8hfKODkgd79pC6YwCaQdKZAj5LRRMMO3A3Cq', CURRENT_TIMESTAMP),
    (4, 'user4', 'user4@example.com', '$2b$10$84J.O7XIqVCo.Q7ZPlw9ZuUS.gwrLXCNdoqIa/35q/KhP6XgRttDu', CURRENT_TIMESTAMP),
    (5, 'user5', 'user5@example.com', '$2b$10$IenWuxh85lgrK8pjHfu2lOQGax1R39d8k0Jdr8RMDJDfKQQI4VzQi', CURRENT_TIMESTAMP);

INSERT INTO recipes (recipeId, recipeName, created, difficultLevelId, dishTypeId, userId, steps, ingredients, recipeImage, likesCount)
  VALUES
    (1, 'Spaghetti Bolognese', CURRENT_TIMESTAMP, 2, 2, 1, 'Boil pasta|Cook minced meat|Prepare sauce', 'Spaghetti/300g|Ground beef/500g|Tomato sauce/1 jar', 'SpaghettiBolognese.jpg', 0),
    (2, 'Chocolate Cake', CURRENT_TIMESTAMP, 3, 3, 2, 'Preheat oven|Melt chocolate|Mix ingredients|Bake', 'Flour/2 cups|Sugar/1.5 cups|Chocolate/200g', 'ChocolateCake.jpg', 0),
    (3, 'Caesar Salad', CURRENT_TIMESTAMP, 1, 4, 3, 'Wash lettuce|Chop tomatoes|Prepare dressing', 'Lettuce/1 head|Tomatoes/2|Caesar dressing/150ml', 'CaesarSalad.jpg', 0),
    (4, 'Chicken Noodle Soup', CURRENT_TIMESTAMP, 2, 5, 4, 'Boil chicken|Chop vegetables|Cook noodles', 'Chicken/1 lb|Carrots/3|Noodles/200g', 'ChickenNoodleSoup.jpg', 0),
    (5, 'Grilled Salmon', CURRENT_TIMESTAMP, 3, 2, 5, 'Season salmon|Grill for 10 minutes', 'Salmon/2 fillets|Olive oil/2 tbsp|Lemon/1', 'GrilledSalmon.jpg', 0),
    (6, 'Vegetable Stir-Fry', CURRENT_TIMESTAMP, 1, 2, 1, 'Chop vegetables|Stir-fry in pan', 'Broccoli/1 cup|Bell peppers/2|Soy sauce/3 tbsp', 'VegetableStirFry.jpg', 0),
    (7, 'Mango Smoothie', CURRENT_TIMESTAMP, 1, 7, 3, 'Blend mango|Add yogurt|Blend again', 'Mango/1|Yogurt/1 cup|Ice cubes/5', 'MangoSmoothie.jpg', 0),
    (8, 'Guacamole', CURRENT_TIMESTAMP, 2, 6, 4, 'Mash avocados|Chop onions and tomatoes|Mix ingredients', 'Avocado/2|Onion/1|Tomato/1', 'Guacamole.jpg', 0),
    (9, 'Pancakes', CURRENT_TIMESTAMP, 1, 9, 2, 'Mix flour and milk|Cook on griddle', 'Flour/1.5 cups|Milk/1 cup|Eggs/2', 'Pancakes.jpg', 0),
    (10, 'Omelette', CURRENT_TIMESTAMP, 1, 9, 5, 'Beat eggs|Add fillings|Cook in pan', 'Eggs/3|Mushrooms/1 cup|Cheese/0.5 cup', 'Omelette.jpg', 0);

INSERT INTO tags (tagId, tagName, userId, recipeId)
  VALUES
    (1, 'Italian', 1, 1),
    (2, 'Dessert', 2, 2),
    (3, 'Healthy', 3, 3),
    (4, 'Soup', 4, 4),
    (5, 'Seafood', 5, 5),
    (6, 'Vegetarian', 1, 6),
    (7, 'Smoothie', 3, 7),
    (8, 'Appetizer', 4, 8),
    (9, 'Breakfast', 2, 9),
    (10, 'Egg Dish', 5, 10);
