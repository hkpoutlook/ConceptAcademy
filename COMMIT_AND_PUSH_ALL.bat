@echo off
REM CONCEPT ACADEMY - Commit and Push All Changes to GitHub
REM Complete workflow: commit locally and push to GitHub

echo.
echo ========================================
echo CONCEPT ACADEMY - Commit and Push All
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
    echo Git initialized!
    echo.
)

echo Step 1: Checking current status...
git status
echo.

echo Step 2: Adding all files...
git add .
echo All files added!
echo.

echo Step 3: Committing all changes...
git commit -m "CONCEPT ACADEMY - Complete website with all pages, components, documentation, deployment scripts, and automation tools - Ready for production"

if errorlevel 1 (
    echo Note: No new changes to commit
) else (
    echo Commit successful!
)
echo.

echo Step 4: Setting up remote repository...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo Adding remote: https://github.com/hkpoutlook/ConceptAcademy.git
    git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
) else (
    echo Remote already configured
)
echo.

echo Step 5: Renaming branch to main...
git branch -M main
echo.

echo Step 6: Fetching from remote...
git fetch origin
echo.

echo Step 7: Pushing to GitHub...
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
echo SUCCESS! All changes committed and pushed!
echo ========================================
echo.
echo Repository: https://github.com/hkpoutlook/ConceptAcademy
echo.
echo What was pushed:
echo - 10 fully functional pages
echo - All React components
echo - Complete documentation
echo - Deployment scripts
echo - Automation tools
echo - Configuration files
echo.
echo Commit History:
git log --oneline -5
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign in with GitHub
echo 3. Click "New Project"
echo 4. Select "ConceptAcademy" repository
echo 5. Click "Deploy"
echo 6. Wait for deployment (2-3 minutes)
echo.
echo Your live website will be at:
echo https://concept-academy-[random-id].vercel.app
echo.
pause
exit /b 0
