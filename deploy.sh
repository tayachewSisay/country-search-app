#!/bin/bash

# Simple script to deploy the application 
echo "Deploying Country Search App..."

git add .

# Commit changes
git commit -m "Deploying latest changes"

# Push to GitHub 
git push origin main

echo "Deployment completed!"
