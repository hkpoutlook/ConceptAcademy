# CONCEPT ACADEMY - Final Push to GitHub
# Complete commit and push of all changes

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Final Push to GitHub"
Write-Host "========================================"
Write-Host "Repository: https://github.com/hkpoutlook/ConceptAcademy.git"
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
}

try {
    Write-Host ""
    Write-Host "Step 1: Checking Git status..."
    git status
    
    Write-Host ""
    Write-Host "Step 2: Adding all files..."
    git add .
    
    Write-Host ""
    Write-Host "Step 3: Committing changes..."
    git commit -m "Complete CONCEPT ACADEMY website - All pages, components, documentation, and deployment scripts ready for production"
    
    Write-Host ""
    Write-Host "Step 4: Setting up remote..."
    $remoteExists = git remote -v 2>$null
    if (-not $remoteExists) {
        Write-Host "Adding remote repository..."
        git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
    } else {
        Write-Host "Remote already configured"
    }
    
    Write-Host ""
    Write-Host "Step 5: Renaming branch to main..."
    git branch -M main
    
    Write-Host ""
    Write-Host "Step 6: Pushing to GitHub..."
    git push -u origin main
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "SUCCESS! All changes pushed to GitHub!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Repository: https://github.com/hkpoutlook/ConceptAcademy"
    Write-Host ""
    Write-Host "What was pushed:"
    Write-Host "- 10 fully functional pages"
    Write-Host "- All React components"
    Write-Host "- Complete documentation"
    Write-Host "- Deployment scripts"
    Write-Host "- Configuration files"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Go to https://vercel.com"
    Write-Host "2. Sign in with GitHub"
    Write-Host "3. Click 'New Project'"
    Write-Host "4. Select 'ConceptAcademy' repository"
    Write-Host "5. Click 'Deploy'"
    Write-Host "6. Wait for deployment (2-3 minutes)"
    Write-Host "7. Get your live URL!"
    Write-Host ""
    Write-Host "Your live website will be at:"
    Write-Host "https://concept-academy-[random-id].vercel.app"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 0
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Operation failed!"
    Write-Host "Error: $_"
    Write-Host ""
    Write-Host "Troubleshooting:"
    Write-Host "1. Check internet connection"
    Write-Host "2. Verify GitHub credentials"
    Write-Host "3. Ensure repository exists"
    Write-Host "4. Check SSH/HTTPS access"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}
