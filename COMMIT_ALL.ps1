# CONCEPT ACADEMY - Commit All Changes
# This script commits all changes locally

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Commit All Changes"
Write-Host "========================================"
Write-Host ""

# Check if git is installed
try {
    git --version | Out-Null
} catch {
    Write-Host "ERROR: Git is not installed!"
    Write-Host "Please install Git from: https://git-scm.com/download/win"
    Read-Host "Press Enter to exit"
    exit 1
}

# Initialize if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..."
    git init
    git config user.email "dev@conceptacademy.org"
    git config user.name "Concept Academy"
    Write-Host "Git initialized successfully!"
    Write-Host ""
}

try {
    Write-Host "Step 1: Checking current status..."
    git status
    Write-Host ""
    
    Write-Host "Step 2: Adding all files..."
    git add .
    Write-Host "All files added!"
    Write-Host ""
    
    Write-Host "Step 3: Committing all changes..."
    git commit -m "CONCEPT ACADEMY - Complete website with all pages, components, documentation, deployment scripts, and automation tools"
    
    Write-Host ""
    Write-Host "Step 4: Checking commit history..."
    git log --oneline -5
    Write-Host ""
    
    Write-Host "========================================"
    Write-Host "SUCCESS! All changes committed locally!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Commit Summary:"
    Write-Host "- 10 fully functional pages"
    Write-Host "- All React components"
    Write-Host "- Complete documentation"
    Write-Host "- Deployment scripts"
    Write-Host "- Automation tools"
    Write-Host "- Configuration files"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Run: REBASE_AND_COMMIT.ps1 (to push to GitHub)"
    Write-Host "2. Or run: FINAL_PUSH.ps1 (to push to GitHub)"
    Write-Host "3. Then deploy to Vercel"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 0
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Operation failed!"
    Write-Host "Error: $_"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}
