$ErrorActionPreference = 'Stop'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw 'Node.js is required. Install Node.js 22.12+ and try again.'
}
if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    throw 'npm is required. Reinstall Node.js with npm and try again.'
}

Push-Location $PSScriptRoot
try {
    if (-not (Test-Path -LiteralPath 'node_modules/.bin/vite.cmd')) {
        & npm.cmd ci
        if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed.' }
    }

    & npm.cmd run dev
    if ($LASTEXITCODE -ne 0) { throw 'Local server failed to start.' }
} finally {
    Pop-Location
}
