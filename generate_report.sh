#!/bin/bash

echo "Generating code report..."
git log --pretty=format:"%h - %an, %ar : %s" > report.txt
echo "Report generated and saved to report.txt."
