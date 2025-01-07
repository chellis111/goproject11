CREATE DATABASE IF NOT EXISTS products;

USE products;

CREATE TABLE IF NOT EXISTS products
(product_id INT AUTO_INCREMENT PRIMARY KEY,
 product_name VARCHAR(50) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 CHECK (price>= 0)
);


CREATE TABLE IF NOT EXISTS customers
( 
 customer_id INT AUTO_INCREMENT PRIMARY KEY,
 customer_name VARCHAR(100) NOT NULL,
 customer_tel VARCHAR(15) NOT NULL
);



CREATE TABLE IF NOT EXISTS orders
(
 order_id INT AUTO_INCREMENT PRIMARY KEY,
 quantity INT NOT NULL,
 total_amount DECIMAL(10, 2) NOT NULL,
 order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
 customerId INT,
 FOREIGN KEY(customerId) REFERENCES customers(customer_id) ON DELETE CASCADE,
 productId INT,
 FOREIGN KEY(productId) REFERENCES products(product_id) ON DELETE CASCADE
);

-- SHOW TABLES;
-- DESCRIBE orders;


-- Insert data into customers table

-- INSERT INTO products
-- (
--  product_name, price
-- )
-- VALUES
-- ("Eva Water", 5),
-- ("Agege Bread",20),
-- ("Hp laptop",200);

-- INSERT INTO customers
-- (
-- customer_name, customer_tel
-- )
-- VALUES
-- ("Emmanuel Ejiofor", "03040500745363"),
-- ("John Sojo", "08457352236293"),
-- ("Doe Abraham", "09865432145638");


-- SELECT * FROM products;
-- SELECT * FROM customers;


-- INSERT INTO orders(quantity, total_amount, customerId, productId)
-- VALUES (2, 40, 4, 2), (1, 5, 2, 4);

SELECT * FROM orders;