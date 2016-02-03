#!/bin/bash

mysql -u root -ppassword -e "create database wordpress"
mysql -u root -ppassword wordpress < /wordpress.sql

if [ "$WORDPRESS_HOST_ADDRESS" ]; then
   echo "changing host address"
   mysql -u root -ppassword wordpress -e "UPDATE wp_options SET option_value = replace(option_value, 'http://localhost:8080', '$WORDPRESS_HOST_ADDRESS') WHERE option_name = 'home' OR option_name = 'siteurl';"

   mysql -u root -ppassword wordpress -e "UPDATE wp_posts SET guid = replace(guid, 'http://localhost:8080', '$WORDPRESS_HOST_ADDRESS');"

   mysql -u root -ppassword wordpress -e "UPDATE wp_posts SET post_content = replace(post_content, 'http://localhost:8080', '$WORDPRESS_HOST_ADDRESS');"

   mysql -u root -ppassword wordpress -e "UPDATE wp_postmeta SET meta_value = replace(meta_value, 'http://localhost:8080', '$WORDPRESS_HOST_ADDRESS');"
fi


