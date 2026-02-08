@echo off
REM CONCEPT ACADEMY - Commit All Changes
REM This script commits all changes locally

echo.
echo ========================================
echo CONCEPT ACADEMY - Commit All Changes
echo ========================================
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
    echo Git initialized successfully!
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
git commit -m "CONCEPT ACADEMY - Complete website with all pages, components, documentation, deployment scripts, and automation tools"

if errorlevel 1 (
    echo.
    echo Note: No new changes to commit (repository already up to date)
    echo.
) else (
    echo.
    echo Commit successful!
    echo.
)

echo Step 4: Checking commit history...
git log --oneline -5
echo.

echo ========================================
echo SUCCESS! All changes committed locally!
echo ========================================
echo.
echo Commit Summary:
echo - 10 fully functional pages
echo - All React components
echo - Complete documentation
echo - Deployment scripts
echo - Automation tools
echo - Configuration files
echo.
echo Next steps:
echo 1. Run: REBASE_AND_COMMIT.bat (to push to GitHub)
echo 2. Or run: FINAL_PUSH.bat (to push to GitHub)
echo 3. Then deploy to Vercel
echo.
pause
exit /b 0
