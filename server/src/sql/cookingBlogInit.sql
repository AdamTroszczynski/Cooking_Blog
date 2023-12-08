CREATE TYPE difficulty AS ENUM (
  'easy',
  'medium',
  'hard'
);

CREATE TYPE dishtype AS ENUM (
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
  userid SERIAL UNIQUE PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  age INTEGER,
  registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipes (
  recipeid SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(255),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  difficulty difficulty,
  userid INTEGER,
  steps VARCHAR(500),
  ingredients VARCHAR(500),
  dishtype dishtype,
  CONSTRAINT fk_users
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE
);

CREATE TABLE comments (
  commentid SERIAL UNIQUE PRIMARY KEY,
  userid INTEGER,
  recipeid INTEGER,
  content VARCHAR(500),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_users_comments
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_comments
    FOREIGN KEY(recipeid)
    REFERENCES recipes(recipeid)
    ON DELETE CASCADE
);

CREATE TABLE follows (
  followid SERIAL UNIQUE PRIMARY KEY,
  follower INTEGER,
  following INTEGER,
  CONSTRAINT fk_users_follows_follower
    FOREIGN KEY(follower)
    REFERENCES users(userid)
    ON DELETE CASCADE,
  CONSTRAINT fk_users_follows_following
    FOREIGN KEY(following)
    REFERENCES users(userid)
    ON DELETE CASCADE
);

CREATE TABLE tags (
  tagid SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(255),
  userid INTEGER,
  recipeid INTEGER,
  CONSTRAINT fk_users_tags
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_tags
    FOREIGN KEY(recipeid)
    REFERENCES recipes(recipeid)
    ON DELETE CASCADE
);

CREATE TABLE favourite (
  favouriteid SERIAL UNIQUE PRIMARY KEY,
  userid INTEGER,
  recipeid INTEGER,
  CONSTRAINT fk_users_favourite
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_favourite
    FOREIGN KEY(recipeid)
    REFERENCES recipes(recipeid)
    ON DELETE CASCADE
);

CREATE TABLE likes (
  likeid SERIAL UNIQUE PRIMARY KEY,
  userid INTEGER,
  recipeid INTEGER,
  CONSTRAINT fk_users_likes
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE,
  CONSTRAINT fk_recipes_likes
    FOREIGN KEY(recipeid)
    REFERENCES recipes(recipeid)
    ON DELETE CASCADE
);

CREATE TABLE stats (
  statid SERIAL UNIQUE PRIMARY KEY,
  userid INTEGER,
  comments INTEGER,
  recipes INTEGER,
  favourites INTEGER,
  CONSTRAINT fk_users_stats
    FOREIGN KEY(userid)
    REFERENCES users(userid)
    ON DELETE CASCADE
);
