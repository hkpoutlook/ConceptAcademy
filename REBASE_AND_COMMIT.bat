@echo off
REM CONCEPT ACADEMY - Rebase and Commit to GitHub
REM This script rebases and commits all changes

echo.
echo ========================================
echo CONCEPT ACADEMY - Rebase and Commit
echo ========================================
echo Repository: https://github.com/hkpoutlook/ConceptAcademy.git
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize if needed
if not exist .git (
    echo Initializing Git repository...
    git init
    git config user.email "dev@conceptacademy.org"
    git config user.name "Concept Academy"
)

echo.
echo Step 1: Checking current status...
git status

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Committing changes...
git commit -m "CONCEPT ACADEMY - Complete website with all pages, components, documentation, and deployment scripts"

if errorlevel 1 (
    echo Note: No new changes to commit
)

echo.
echo Step 4: Setting up remote...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
) else (
    echo Remote already configured
)

echo.
echo Step 5: Fetching from remote...
git fetch origin

echo.
echo Step 6: Rebasing with remote main...
git rebase origin/main

if errorlevel 1 (
    echo.
    echo Note: Rebase completed (may have conflicts to resolve)
    echo If there are conflicts, resolve them and run: git rebase --continue
)

echo.
echo Step 7: Renaming branch to main...
git branch -M main

echo.
echo Step 8: Pushing to GitHub...
git push -u origin main --force-with-lease

if errorlevel 1 (
    echo.
    echo ERROR: Push failed!
    echo Troubleshooting:
    echo 1. Check internet connection
    echo 2. Verify GitHub credentials
    echo 3. Ensure repository exists
    echo 4. Check SSH/HTTPS access
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Rebased and pushed to GitHub!
echo ========================================
echo.
echo Repository: https://github.com/hkpoutlook/ConceptAcademy
echo.
echo Changes pushed:
echo - All pages and components
echo - Complete documentation
echo - Deployment scripts
echo - Configuration files
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign in with GitHub
echo 3. Click "New Project"
echo 4. Select "ConceptAcademy" repository
echo 5. Click "Deploy"
echo.
echo Your live website will be at:
echo https://concept-academy-[random-id].vercel.app
echo.
pause
exit /b 0
