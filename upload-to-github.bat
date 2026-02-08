@echo off
REM CONCEPT ACADEMY - Upload to GitHub Script
REM This script will push your project to GitHub

echo.
echo ========================================
echo CONCEPT ACADEMY - GitHub Upload
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

echo Step 1: Initializing Git repository...
git init
if errorlevel 1 goto error

echo Step 2: Configuring Git...
git config user.email "dev@conceptacademy.org"
git config user.name "Concept Academy"
if errorlevel 1 goto error

echo Step 3: Adding all files...
git add .
if errorlevel 1 goto error

echo Step 4: Creating first commit...
git commit -m "first commit"
if errorlevel 1 goto error

echo Step 5: Adding remote repository...
git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
if errorlevel 1 goto error

echo Step 6: Renaming branch to main...
git branch -M main
if errorlevel 1 goto error

echo Step 7: Pushing to GitHub...
git push -u origin main
if errorlevel 1 goto error

echo.
echo ========================================
echo SUCCESS! Your project is on GitHub!
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

:error
echo.
echo ERROR: Upload failed!
echo Please check the error message above.
echo.
pause
exit /b 1
