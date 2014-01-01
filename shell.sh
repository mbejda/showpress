#!/bin/bash
cd ./press
mkdir $1
cd $1
wp core download
wp core config --dbname=$1 --dbuser=root
wp db create 
wp core install --url='http://162.243.15.132/press/$1' --admin_user='admin' --title='title' --admin_email='mbejda@live.com' --admin_password='password'

#wp core download
