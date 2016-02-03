This Docker Container contains HAProxy and a simple nodeJS service to update its configuration

THIS IS NOT SECURE, USE AT OWN RISK

how to use:

build:
docker build -t bonomat/haproxy-updater . 

run:
docker run  --name ha -p 3001:3000 -p 1936:1936 -p 8082:8081 -d bonomat/haproxy-updater

post new haproxy file via curl:
curl -i -F file=@Localfile.cfg localhost:3000/api/files

or visit 
http://localhost:3000/

http://localhost:8082/google/

http://localhost:1936/

