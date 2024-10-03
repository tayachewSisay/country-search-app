#!/bin/bash

# Simple script to deploy the application (for demonstration purposes)
echo "Deploying Country Search App..."

# Add all changes to git
git add .

# Commit changes
git commit -m "Deploying latest changes"

# Push to GitHub (replace with your repository URL)
git push origin main

echo "Deployment completed!"
