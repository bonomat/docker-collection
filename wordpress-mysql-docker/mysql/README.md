This is a totally unsafe Dockerfile for a mysql-server

Sofar it only makes sense to use it with the corresponding wordpress server as it contains already an example wordpress blog:
username of this blog is admin and password password

Use at own risk!!!

Run with: ''' docker run --name <container-name> -e MYSQL_ROOT_PASSWORD=<mysql-password> -e WORDPRESS_HOST_ADDRESS=<wordpress-host> -d bonomat/wordpress-mysql-server '''

For example: ''' docker run --name my-sql -e MYSQL_ROOT_PASSWORD=password -e WORDPRESS_HOST_ADDRESS=http://128.131.172.116:8099 -d bonomat/wordpress-mysql-server '''

run

''' docker exec -i -t my-sql bash '''

to test the database

