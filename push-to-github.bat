@echo off
REM CONCEPT ACADEMY - Push to GitHub Script
REM This script commits and pushes your project to GitHub

echo.
echo ========================================
echo CONCEPT ACADEMY - Push to GitHub
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

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    git config user.email "dev@conceptacademy.org"
    git config user.name "Concept Academy"
)

echo Step 1: Adding all changes...
git add .

echo Step 2: Committing changes...
git commit -m "Complete CONCEPT ACADEMY website with all pages, documentation, and deployment scripts"

if errorlevel 1 (
    echo.
    echo Note: No new changes to commit (repository already up to date)
    echo.
)

echo Step 3: Checking remote...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
)

echo Step 4: Renaming branch to main...
git branch -M main

echo Step 5: Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed!
    echo Please check:
    echo 1. Internet connection
    echo 2. GitHub credentials
    echo 3. Repository access
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Pushed to GitHub!
echo ========================================
echo.
echo Repository: https://github.com/hkpoutlook/ConceptAcademy
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign in with GitHub
echo 3. Click "New Project"
echo 4. Select "ConceptAcademy" repository
echo 5. Click "Deploy"
echo.
pause
exit /b 0
