# Simple HTTP

Simple Example project that uses node to stand up an HTTP server.

## Build

`docker build -t simple-http-galvanize .`

## Run

`docker run --name http_hello -d -p 8080:8080 simple-http-galvanize`

## Check

localhost:8080

## Logs

`docker logs http_hello`

## Stop

`docker stop http_hello`

## Cleanup

`docker rm http_hello`
