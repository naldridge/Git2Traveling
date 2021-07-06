CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    user_name text NOT NULL,
    password varchar NOT NULL
);

CREATE TABLE trips (
    id serial PRIMARY KEY,
    location text NOT NULL,
    trip_name text NOT NULL,
    trip_date  DATE NOT NULL
);


/*CREATE TABLE itinerary (
    id serial PRIMARY KEY,
    
);*/


