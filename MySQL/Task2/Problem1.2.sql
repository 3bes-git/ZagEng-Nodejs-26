SELECT 
    category,
    COUNT(*) AS total_products,
    AVG(price) AS average_price,
    SUM(price * stock_quantity) AS total_stock_value
FROM products
GROUP BY category
HAVING COUNT(*) > 5;