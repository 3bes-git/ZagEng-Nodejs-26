SELECT name, specialization, salary
FROM doctors
WHERE hire_date > '2020-01-01'
ORDER BY salary DESC
LIMIT 5;