SELECT 
    name,
    LENGTH(name) AS name_length
FROM patients;
SELECT 
    LOWER(specialization) AS specialization_lower
FROM doctors;
SELECT 
    name,
    DATEDIFF(CURDATE(), admission_date) AS days_in_hospital
FROM patients;