# Write your MySQL query statement below


# SELECT Users.user_id , CONCAT(UPPER(SUBSTR(Users.name,1,1)),LOWER(SUBSTR(Users.name,2))) AS name 
# FROM Users
# ORDER BY
# Users.user_id ASC

select user_id, concat(upper(left(name, 1)), lower(right(name, length(name)-1))) as name
from users
order by
user_id asc;

