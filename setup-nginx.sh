#!/bin/bash

# Nginx Setup Script for CES 2026 (ALB + ACM Architecture)
# This script only sets up Nginx reverse proxy - SSL is handled by ALB
# Usage: sudo ./setup-nginx.sh

set -e

echo "🔧 Setting up Nginx for CES 2026..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root (use sudo)"
    exit 1
fi

# Install Nginx if not already installed
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    apt update
    apt install -y nginx
else
    echo "✓ Nginx already installed"
fi

# Copy nginx config
echo "Copying Nginx configuration..."
cp ./nginx/nginx.conf /etc/nginx/sites-available/ceskorea.kr

# Create symlink
if [ ! -L /etc/nginx/sites-enabled/ceskorea.kr ]; then
    ln -s /etc/nginx/sites-available/ceskorea.kr /etc/nginx/sites-enabled/
    echo "✓ Nginx site enabled"
fi

# Remove default site
if [ -L /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
    echo "✓ Default site removed"
fi

# Test nginx configuration
echo "Testing Nginx configuration..."
nginx -t

# Restart nginx
echo "Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx

echo ""
echo "✅ Nginx setup completed!"
echo ""
echo "Nginx is now configured to:"
echo "  - Listen on port 80 for HTTP traffic from ALB"
echo "  - Proxy ceskorea.kr → localhost:8080 (frontend)"
echo "  - Proxy admin.ceskorea.kr → localhost:3000 (admin)"
echo "  - Proxy api.ceskorea.kr → localhost:5000 (backend)"
echo ""
echo "Note: SSL termination is handled by Application Load Balancer with ACM certificate"
echo "      EC2 Security Group should allow HTTP (port 80) from ALB security group only"
