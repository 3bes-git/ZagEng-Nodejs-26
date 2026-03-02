SELECT 
    room_type,
    COUNT(*) AS total_patients,
    MAX(bill_amount) AS max_bill,
    MIN(bill_amount) AS min_bill,
    SUM(bill_amount) AS total_revenue
FROM patients
GROUP BY room_type
HAVING SUM(bill_amount) > 10000;