# Write your MySQL query statement below
select employee_id, IF (employee_id%2 AND name not like "M%", salary, 0) as bonus from employees
order by employee_id;