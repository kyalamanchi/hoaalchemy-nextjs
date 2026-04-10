#!/bin/bash
set -euo pipefail

echo "Changing to app directory..."
cd /home/ec2-user/hoa-alchemy-react

export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm use 20

echo "User: $(whoami)"
echo "Node: $(node -v)"
echo "npm: $(npm -v)"

echo "Cleaning old artifacts..."
rm -rf .next
rm -rf node_modules

echo "Installing dependencies..."
npm install

echo "Building application..."
npm run build

echo "Restarting application..."
pm2 restart hoa-alchemy-react || pm2 start npm --name "hoa-alchemy-react" -- start

pm2 save