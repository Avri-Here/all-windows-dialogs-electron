

process.env.REJECT_UNAUTHORIZED = '0';

const { join } = require('path');
const { app } = require('electron');
const homedir = require('os').homedir();


const isDevMode = !app.isPackaged && !__dirname.includes('app.asar') && process.defaultApp;

if (isDevMode) process.env.IS_DEV_MODE = true;
if (isDevMode) require('electron-reload')(join(__dirname, '../..'));
if (isDevMode) process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;



const assetsDir = isDevMode ? join(__dirname, '../assets') : join(process.resourcesPath, 'assets');


process.env.ASSETS_DIR = assetsDir;










