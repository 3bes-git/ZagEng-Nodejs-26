SELECT 
    UPPER(name) AS name_upper,
    LEFT(name, 10) AS short_desc,
    DATEDIFF(NOW(), date_added) AS days_since_added
FROM products;