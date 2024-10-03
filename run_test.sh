#!/bin/bash

echo "Running tests..."
npm test  # assuming your project uses npm for tests
if [ $? -eq 0 ]; then
    echo "Tests passed!"
else
    echo "Tests failed!"
    exit 1
fi
