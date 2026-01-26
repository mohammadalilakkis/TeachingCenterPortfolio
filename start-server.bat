@echo off
echo Starting local server for Synapse Portfolio...
echo.
echo Your website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d %~dp0
npx --yes http-server -p 8000 -o
