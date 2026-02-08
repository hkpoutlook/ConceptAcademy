# CONCEPT ACADEMY - Rebase and Commit to GitHub
# This script rebases and commits all changes

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Rebase and Commit"
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
    Write-Host "Step 1: Checking current status..."
    git status
    
    Write-Host ""
    Write-Host "Step 2: Adding all files..."
    git add .
    
    Write-Host ""
    Write-Host "Step 3: Committing changes..."
    git commit -m "CONCEPT ACADEMY - Complete website with all pages, components, documentation, and deployment scripts"
    
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
    Write-Host "Step 5: Fetching from remote..."
    git fetch origin
    
    Write-Host ""
    Write-Host "Step 6: Rebasing with remote main..."
    git rebase origin/main
    
    Write-Host ""
    Write-Host "Step 7: Renaming branch to main..."
    git branch -M main
    
    Write-Host ""
    Write-Host "Step 8: Pushing to GitHub..."
    git push -u origin main --force-with-lease
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "SUCCESS! Rebased and pushed to GitHub!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Repository: https://github.com/hkpoutlook/ConceptAcademy"
    Write-Host ""
    Write-Host "Changes pushed:"
    Write-Host "- All pages and components"
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
