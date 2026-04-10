#!/bin/bash
echo "Pipeline... Changing to app directory..."
cd /home/ec2-user/hoa-alchemy-react
echo "Installing dependencies..."
sudo npm install
echo "Building application..."
sudo npm run build
echo "Restarting application..."
pm2 restart hoa-alchemy-react
