# CONCEPT ACADEMY - Website Launcher
# This script opens your website in the default browser

Write-Host ""
Write-Host "========================================"
Write-Host "CONCEPT ACADEMY - Launching Website"
Write-Host "========================================"
Write-Host ""

# Open the website in default browser
Start-Process "http://localhost:3000"

Write-Host "Website launched at: http://localhost:3000"
Write-Host ""
Write-Host "If the browser didn't open automatically:"
Write-Host "1. Copy: http://localhost:3000"
Write-Host "2. Paste in your browser address bar"
Write-Host "3. Press Enter"
Write-Host ""
Read-Host "Press Enter to exit"
