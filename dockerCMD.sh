#!/bin/bash

# Build your Docker image
docker build -t sentiment-app .

# Run the container and map ports 3000 and 8000

docker run -d -p 3000:3000 -p 8000:8000 sentiment-app