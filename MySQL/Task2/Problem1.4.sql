ALTER TABLE products
ADD discount_rate DECIMAL(5,2);

UPDATE products
SET discount_rate = 0.10
WHERE category = 'Accessories';

DELETE FROM products
WHERE stock_quantity = 0;

DROP TABLE IF EXISTS old_inventory;