@echo off
title Aanchal Portfolio Local Server
cd /d "%~dp0"
echo ========================================================
echo  Starting Aanchal's Retro Portfolio on http://localhost:8080
echo ========================================================
start http://localhost:8080
python -m http.server 8080
pause
