INSERT INTO users 
    (first_name, last_name, user_name, password)
VALUES
    ('Mike','Dean','md@gittravel.com', 'password');

INSERT INTO trips 
    (location, trip_name, trip_start_date, trip_end_date)
VALUES
    ('Houston','Brew trip','2021-08-06', '2021-08-10'),
    ('Atlanta ','Summer Fest', '2021-09-01','2021-09-06'),
    ('Dallas ','School Reunion trip','2021-07-09','2021-07-06'),
    ('Tampa ','Spring Break','2021-07-10', '2021-07-06'),
    ('New York ','New Year Ball Drop','2021-12-29', '2022-01-02');

INSERT INTO itinerary 
    (day, destination, leisure, dining, transport, budget)
VALUES
    (1, 'Houston', 'Horseback Riding','Beer Garden, Texas Steak House', 'Uber, public transport', 400);

    