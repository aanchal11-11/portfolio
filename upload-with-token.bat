@echo off
title Push with GitHub Token
cd /d "%~dp0"
echo ========================================================
echo  Push Aanchal's Portfolio to GitHub with Token
echo ========================================================
echo.
set /p GHTOKEN="Paste your GitHub Personal Access Token: "
if "%GHTOKEN%"=="" (
    echo Token cannot be empty.
    pause
    exit /b
)
git remote set-url origin https://%GHTOKEN%@github.com/aanchal11-11/portfolio.git
git branch -M main
git push -u origin main
echo.
echo ========================================================
if %ERRORLEVEL% EQU 0 (
    echo Successfully uploaded whole project to GitHub!
) else (
    echo Push failed. Please check token permissions.
)
echo ========================================================
pause
