CREATE TYPE difficulty AS ENUM (
  'easy',
  'medium',
  'hard'
);

CREATE TYPE dishType AS ENUM (
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack',
  'Appetizer',
  'MainCourse',
  'Dessert',
  'Salad',
  'Soup',
  'Beverage'
);

CREATE TABLE users (
  userId SERIAL UNIQUE PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  age INTEGER,
  registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipes (
  recipeId SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(255),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  difficulty difficulty,
  userId INTEGER,
  steps VARCHAR(500),
  ingredients VARCHAR(500),
  dishType dishType,
  CONSTRAINT fk_users
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE
);

CREATE TABLE comments (
  commentId SERIAL UNIQUE PRIMARY KEY,
  userId INTEGER,
  recipeId INTEGER,
  content VARCHAR(500),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_users_comments
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_comments
    FOREIGN KEY(recipeId) 
    REFERENCES recipes(recipeId)
    ON DELETE CASCADE
);

CREATE TABLE rates (
  rateId SERIAL UNIQUE PRIMARY KEY,
  rate INTEGER,
  userId INTEGER,
  recipeId INTEGER,
  CONSTRAINT fk_users_rates
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_rates
    FOREIGN KEY(recipeId) 
    REFERENCES recipes(recipeId)
    ON DELETE CASCADE
);

CREATE TABLE follows (
  followId SERIAL UNIQUE PRIMARY KEY,
  follower INTEGER,
  following INTEGER,
  CONSTRAINT fk_users_follows_follower
    FOREIGN KEY(follower) 
    REFERENCES users(userId)
    ON DELETE CASCADE,
  CONSTRAINT fk_users_follows_following
    FOREIGN KEY(following) 
    REFERENCES users(userId)
    ON DELETE CASCADE
);

CREATE TABLE tags (
  tagId SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(255),
  userId INTEGER,
  recipeId INTEGER,
  CONSTRAINT fk_users_tags
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_tags
    FOREIGN KEY(recipeId) 
    REFERENCES recipes(recipeId)
    ON DELETE CASCADE
);

CREATE TABLE favourite (
  favouriteId SERIAL UNIQUE PRIMARY KEY,
  userId INTEGER,
  recipeId INTEGER,
  CONSTRAINT fk_users_favourite
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_favourite
    FOREIGN KEY(recipeId) 
    REFERENCES recipes(recipeId)
    ON DELETE CASCADE
);

CREATE TABLE stats (
  statId SERIAL UNIQUE PRIMARY KEY,
  userId INTEGER,
  comments INTEGER,
  recipes INTEGER,
  favourites INTEGER,
  CONSTRAINT fk_users_stats
    FOREIGN KEY(userId) 
    REFERENCES users(userId)
    ON DELETE CASCADE
);