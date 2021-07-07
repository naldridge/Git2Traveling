INSERT INTO users 
    (first_name, last_name, user_name, password)
VALUES
    ('Mike','Dean','go@travel.com', 'password');

INSERT INTO trips 
    (location, trip_name, trip_date)
VALUES
    ('Houston','Brew trip','2021-07-06'),
    ('Atlanta ','Summer trip', '2021-07-07'),
    ('New York ','New year trip','2021-07-08'),
    ('Dallas ','Summer','2021-07-09'),
    ('Tampa ','Spring Break','2021-07-10');

INSERT INTO itinerary 
    (day, destination, leisure, dining, transport, budget)
VALUES
    (1, 'Houston', 'Horseback Riding','Beer Garden, Texas Steak House', 'Uber, public transport', 400);

    