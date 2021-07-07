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


CREATE TABLE itinerary (
    id serial PRIMARY KEY,
    local_trip_name text NOT NULL,
    destination varchar(255),
    leisure varchar(255),
    dining varchar(255),
    transport varchar(255),
    budget INTEGER
       
);


