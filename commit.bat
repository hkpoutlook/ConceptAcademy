@echo off
REM CONCEPT ACADEMY - Commit Changes Script

echo.
echo ========================================
echo CONCEPT ACADEMY - Git Commit
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

echo Adding all changes...
git add .

echo Committing changes...
git commit -m "Add architecture, deployment guides, and upload scripts"

if errorlevel 1 (
    echo.
    echo ERROR: Commit failed!
    echo Please check the error message above.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Changes committed!
echo ========================================
echo.
echo Commit message: "Add architecture, deployment guides, and upload scripts"
echo.
echo Next steps:
echo 1. Run: git push -u origin main
echo 2. Or use the upload-to-github.bat script
echo.
pause
exit /b 0
