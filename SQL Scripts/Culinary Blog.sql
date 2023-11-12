CREATE TYPE "difficulty" AS ENUM (
  'easy',
  'medium',
  'hard'
);

CREATE TYPE "dishType" AS ENUM (
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

CREATE TABLE "users" (
  "userId" integer UNIQUE PRIMARY KEY NOT NULL,
  "username" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "firstname" varchar(255),
  "lastname" varchar(255),
  "age" integer,
  "registered" timestamp DEFAULT (now())
);

CREATE TABLE "recipes" (
  "recipeId" integer UNIQUE PRIMARY KEY NOT NULL,
  "name" varchar(255),
  "created" timestamp DEFAULT (now()),
  "difficulty" difficulty,
  "userId" integer,
  "steps" varchar(500),
  "ingredients" varchar(500),
  "dishType" dishType
);

CREATE TABLE "comments" (
  "commentId" integer UNIQUE PRIMARY KEY NOT NULL,
  "userId" integer,
  "recipeId" integer,
  "content" varchar(500),
  "created" timestamp DEFAULT (now())
);

CREATE TABLE "rates" (
  "reateId" integer UNIQUE PRIMARY KEY NOT NULL,
  "rate" integer,
  "userId" integer,
  "reciperId" integer
);

CREATE TABLE "follows" (
  "followId" integer UNIQUE PRIMARY KEY NOT NULL,
  "follower" integer,
  "following" integer
);

CREATE TABLE "tags" (
  "tagId" integer UNIQUE PRIMARY KEY NOT NULL,
  "name" varchar(255),
  "userId" integer,
  "recipeId" integer
);

CREATE TABLE "favourite" (
  "favouriteId" integer UNIQUE PRIMARY KEY NOT NULL,
  "userId" integer,
  "reciperId" integer
);

CREATE TABLE "stats" (
  "statId" integer UNIQUE PRIMARY KEY NOT NULL,
  "userId" integer,
  "comments" integer,
  "recipes" integer,
  "favourites" integer
);

COMMENT ON COLUMN "stats"."comments" IS 'number of comments';

COMMENT ON COLUMN "stats"."recipes" IS 'number of created recipes';

COMMENT ON COLUMN "stats"."favourites" IS 'number of favourite recipes';

ALTER TABLE "recipes" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "comments" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "comments" ADD FOREIGN KEY ("recipeId") REFERENCES "recipes" ("recipeId");

ALTER TABLE "rates" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "rates" ADD FOREIGN KEY ("reciperId") REFERENCES "recipes" ("recipeId");

ALTER TABLE "follows" ADD FOREIGN KEY ("follower") REFERENCES "users" ("userId");

ALTER TABLE "follows" ADD FOREIGN KEY ("following") REFERENCES "users" ("userId");

ALTER TABLE "tags" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "tags" ADD FOREIGN KEY ("recipeId") REFERENCES "recipes" ("recipeId");

ALTER TABLE "favourite" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "favourite" ADD FOREIGN KEY ("reciperId") REFERENCES "recipes" ("recipeId");

ALTER TABLE "stats" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");