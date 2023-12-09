-- Users table
CREATE TABLE IF NOT EXISTS users (
  userId INT NOT NULL PRIMARY KEY UNIQUE,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  registered TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Difficult levels table
CREATE TABLE IF NOT EXISTS difficultLevels (
  difficultLevelId INT NOT NULL PRIMARY KEY UNIQUE,
  levelName VARCHAR(255) NOT NULL
);

-- Dish type table
CREATE TABLE IF NOT EXISTS dishTypes (
  dishTypeId INT NOT NULL PRIMARY KEY UNIQUE,
  dishTypeName VARCHAR(255) NOT NULL
);

-- Recipes table
CREATE TABLE IF NOT EXISTS recipes (
  recipeId INT NOT NULL PRIMARY KEY UNIQUE,
  recipeName VARCHAR(255),
  created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  difficultLevelId INT NOT NULL,
  dishTypeId INT NOT NULL,
  userId INT NOT NULL,
  steps VARCHAR(500),
  ingredients varchar(350),
  recipeImage varchar(255),
  likesCount INT NOT NULL,
  FOREIGN KEY (dishTypeId)
    REFERENCES dishTypes (dishTypeId),
  FOREIGN KEY (difficultLevelId)
    REFERENCES  difficultLevels (difficultLevelId),
  FOREIGN KEY (userId)
    REFERENCES users (userId)
);

-- Tags table
CREATE TABLE IF NOT EXISTS tags (
  tagId INT NOT NULL PRIMARY KEY UNIQUE,
  tagName VARCHAR(255) NOT NULL,
  userId INT NOT NULL,
  recipeId INT NOT NULL,
  FOREIGN KEY (userId)
    REFERENCES users (userId),
  FOREIGN KEY (recipeId)
    REFERENCES recipes (recipeId)
);

-- Likes table
CREATE TABLE IF NOT EXISTS likes (
  likeId INT NOT NULL PRIMARY KEY UNIQUE,
  userId INT NOT NULL,
  recipeId INT NOT NULL,
  FOREIGN KEY (userId)
    REFERENCES users (userId),
  FOREIGN KEY (recipeId)
    REFERENCES recipes (recipeId)
);

-- Favorite table
CREATE TABLE IF NOT EXISTS favorite (
  favoriteId INT NOT NULL PRIMARY KEY UNIQUE,
  userId INT NOT NULL,
  recipeId INT NOT NULL,
  FOREIGN KEY (userId)
    REFERENCES users (userId),
  FOREIGN KEY (recipeId)
    REFERENCES recipes (recipeId)
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
  commentId INT NOT NULL PRIMARY KEY UNIQUE,
  userId INT NOT NULL,
  recipeId INT NOT NULL,
  content VARCHAR(300) NOT NULL,
  created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId)
    REFERENCES users (userId),
  FOREIGN KEY (recipeId)
    REFERENCES recipes (recipeId)
);
