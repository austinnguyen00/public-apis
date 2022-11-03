SELECT Broker.Name, COUNT(*) as Num_Customers
FROM Customer
INNER JOIN Broker ON Customer.BROKER_ID=Broker.ID
GROUP BY Broker.Name
ORDER BY Num_Customers DESC, Broker.Name;