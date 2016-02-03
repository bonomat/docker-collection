This is a totally unsafe Dockerfile for wordpress server using Apache and extern MySQL

Use at own risk!

Run with: 
'''
docker run --name wordpress --link <mysql-container-name>:mysql -p <extern-port>:80 -d bonomat/wordpress-mysql
```

For example:
'''
docker run --name wordpress --link mysql:mysql -p 8083:80 -d bonomat/wordpress-mysql
```

visit: 

http://localhost:8083/
