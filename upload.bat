@echo off
set /p commit_msg="Enter commit message: "
if "%commit_msg%"=="" set commit_msg="Update"

git add .
git commit -m "%commit_msg%"
git push origin master

echo Upload complete!
pause
