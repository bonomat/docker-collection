FROM mysql/mysql-server:5.5

MAINTAINER philipp hoenisch <philipp@hoenisch.at>

COPY wordpress.sql /wordpress.sql

COPY import-wordpress.sh /docker-entrypoint-initdb.d/import-wordpress.sh
