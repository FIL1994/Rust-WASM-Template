:: @author Philip Van Raalte

@echo off
cd "../"
if exist "dist" rmdir "dist" /S /Q
mkdir "dist"

For %%a in ("target\wasm32-unknown-unknown\release\wasm_test.wasm", index.html, bundle.js)^
do xcopy %%a dist /Y