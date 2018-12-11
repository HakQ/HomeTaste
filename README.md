App Name: HomeTaste

Creating DB for UBUNTU:
sudo su - postgres
createdb -h localhost -U ctp_user MYAPPNAME_development
exit

make sure you modify the server config file to put your own database there