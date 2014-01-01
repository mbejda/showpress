#!/bin/bash

cd ./press
pwd
mysql -u root -e "create database $1"
wp core download
wp core config --dbname=$1 --dbuser=root
wp core install --url=$1 --admin_user='admin' --title='title' --admin_email='mbejda@live.com' --admin_password='password'

#wp core download
