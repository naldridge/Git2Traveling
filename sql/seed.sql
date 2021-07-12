INSERT INTO users 
    (first_name, last_name, user_name, password)
VALUES
    ('Mike','Dean','md@gittravel.com', 'password');

INSERT INTO trips 

    (location, trip_name, trip_start_date, trip_end_date, user_id)
VALUES
    ('Houston','Brew trip','2021-07-06', '2021-07-06', 2),
    ('Atlanta ','Summer trip', '2021-07-07','2021-07-06', 2),
    ('New York ','New year trip','2022-12-29', '2021-07-06', 1),
    ('Dallas ','School reunion trip','2021-07-09','2021-07-06', 1),
    ('Tampa ','Spring Break','2021-07-10', '2021-07-06', 2);


INSERT INTO itinerary 
    (day, destination, leisure, dining, transport, budget, trip_id)
VALUES
    (1, 'Houston', 'Horseback Riding','Beer Garden, Texas Steak House', 'Uber, public transport', 400, 1);

    