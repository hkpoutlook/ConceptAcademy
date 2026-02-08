# CONCEPT ACADEMY - Commit Changes Script

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Git Commit"
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
    Write-Host "Adding all changes..."
    git add .
    
    Write-Host "Committing changes..."
    git commit -m "Add architecture, deployment guides, and upload scripts"
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "SUCCESS! Changes committed!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Commit message: 'Add architecture, deployment guides, and upload scripts'"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Run: git push -u origin main"
    Write-Host "2. Or use the upload-to-github.bat script"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 0
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Commit failed!"
    Write-Host "Error: $_"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}
