# CONCEPT ACADEMY - Push to GitHub Script
# This script commits and pushes your project to GitHub

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Push to GitHub"
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

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..."
    git init
    git config user.email "dev@conceptacademy.org"
    git config user.name "Concept Academy"
}

try {
    Write-Host "Step 1: Adding all changes..."
    git add .
    
    Write-Host "Step 2: Committing changes..."
    git commit -m "Complete CONCEPT ACADEMY website with all pages, documentation, and deployment scripts"
    
    Write-Host "Step 3: Checking remote..."
    $remoteExists = git remote -v 2>$null
    if (-not $remoteExists) {
        Write-Host "Adding remote repository..."
        git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
    }
    
    Write-Host "Step 4: Renaming branch to main..."
    git branch -M main
    
    Write-Host "Step 5: Pushing to GitHub..."
    git push -u origin main
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "SUCCESS! Pushed to GitHub!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Repository: https://github.com/hkpoutlook/ConceptAcademy"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Go to https://vercel.com"
    Write-Host "2. Sign in with GitHub"
    Write-Host "3. Click 'New Project'"
    Write-Host "4. Select 'ConceptAcademy' repository"
    Write-Host "5. Click 'Deploy'"
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
