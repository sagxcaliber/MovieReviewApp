#!/bin/sh

# Start FastAPI in background
nohup python3 backend/application.py &

# Serve React build
serve -s frontend/dist -l 3000
