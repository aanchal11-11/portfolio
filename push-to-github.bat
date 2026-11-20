@echo off
title Push Portfolio to GitHub
cd /d "%~dp0"
echo ========================================================
echo  Pushing Aanchal's Portfolio to GitHub...
echo ========================================================
git branch -M main
git push -u origin main
echo.
echo ========================================================
if %ERRORLEVEL% EQU 0 (
    echo Successfully uploaded to GitHub!
) else (
    echo If the repository does not exist yet, create it at:
    echo https://github.com/new (Name it: portfolio)
)
echo ========================================================
pause
