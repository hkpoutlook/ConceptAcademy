# CONCEPT ACADEMY - Upload to GitHub Script
# This script will push your project to GitHub

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - GitHub Upload"
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

try {
    Write-Host "Step 1: Initializing Git repository..."
    git init
    
    Write-Host "Step 2: Configuring Git..."
    git config user.email "dev@conceptacademy.org"
    git config user.name "Concept Academy"
    
    Write-Host "Step 3: Adding all files..."
    git add .
    
    Write-Host "Step 4: Creating first commit..."
    git commit -m "first commit"
    
    Write-Host "Step 5: Adding remote repository..."
    git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
    
    Write-Host "Step 6: Renaming branch to main..."
    git branch -M main
    
    Write-Host "Step 7: Pushing to GitHub..."
    git push -u origin main
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "SUCCESS! Your project is on GitHub!"
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
    Write-Host "ERROR: Upload failed!"
    Write-Host "Error: $_"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}
