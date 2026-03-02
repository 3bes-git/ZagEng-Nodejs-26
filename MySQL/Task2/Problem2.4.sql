ALTER TABLE doctors
ADD email VARCHAR(100);
UPDATE doctors
SET salary = salary * 1.10
WHERE specialization = 'Cardiology';
DELETE FROM patients
WHERE status = 'discharged';