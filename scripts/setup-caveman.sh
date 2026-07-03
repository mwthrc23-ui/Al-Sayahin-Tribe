#!/bin/bash

# 🦅 Caveman Code Setup Script
# سكريبت إعداد Caveman Code

set -e

echo "🦅 Caveman Code Integration Setup"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Check if npm is installed
echo -e "${BLUE}Step 1: Checking npm installation...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js and npm first.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm is installed: $(npm --version)${NC}"

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"

# Step 3: Install caveman-code globally
echo -e "${BLUE}Step 3: Installing caveman-code globally...${NC}"
npm install -g @juliusbrussee/caveman-code
echo -e "${GREEN}✅ caveman-code installed globally${NC}"

# Step 4: Verify installation
echo -e "${BLUE}Step 4: Verifying caveman-code installation...${NC}"
if ! command -v caveman &> /dev/null; then
    echo -e "${YELLOW}⚠️  caveman command not found in PATH${NC}"
    echo -e "${YELLOW}   Try: npm install -g @juliusbrussee/caveman-code${NC}"
else
    echo -e "${GREEN}✅ caveman is available: $(caveman --version 2>/dev/null || echo 'installed')${NC}"
fi

# Step 5: Create necessary directories
echo -e "${BLUE}Step 5: Creating project structure...${NC}"
mkdir -p src/config
mkdir -p src/utils
mkdir -p src/components
mkdir -p src/hooks
echo -e "${GREEN}✅ Project structure created${NC}"

# Step 6: Summary
echo ""
echo -e "${GREEN}=================================="
echo "🎉 Setup Complete!"
echo "=================================${NC}"
echo ""
echo -e "${BLUE}Available Commands:${NC}"
echo "  ${YELLOW}npm run caveman${NC}           - Start caveman interactive mode"
echo "  ${YELLOW}npm run caveman:review${NC}   - Review code"
echo "  ${YELLOW}npm run caveman:explain${NC}  - Explain code"
echo "  ${YELLOW}npm run caveman:optimize${NC} - Optimize code"
echo ""
echo -e "${BLUE}Quick Start:${NC}"
echo "  ${YELLOW}npm run dev${NC}              - Start development server"
echo "  ${YELLOW}npm run build${NC}            - Build for production"
echo ""
echo -e "${BLUE}Documentation:${NC}"
echo "  See ${YELLOW}CAVEMAN_GUIDE.md${NC} for detailed instructions"
echo ""
