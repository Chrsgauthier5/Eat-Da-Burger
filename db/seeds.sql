-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES
('Double Bacon Cheeseburger', false), 
('Bacon Cheddar Cheeseburger', false),
('Chicken and Waffle Burger', false), 
('Black Bean Veggie Burger', false);


-- Set devoured status back to false 
update burgers set devoured = 0 where id in (1,2,3,4)