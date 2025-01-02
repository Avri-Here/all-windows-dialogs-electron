# Electron Dialogs Old Style

About the Library
This library provides a set of dialogs styled to emulate old-school Windows versions, such as:

Windows XP
Windows Vista
Windows 98
Dialogs include:

Confirmation dialogs (e.g., User Account Control).
Error dialogs (e.g., Windows Error messages).
Warning dialogs.
Each dialog comes pre-styled with visuals, sounds, and layout faithful to the original Windows design.

Features
Authentic Appearance: Styles that closely match legacy Windows dialog designs.
Integrated Sounds: Each dialog includes sound effects, such as the Windows Vista ring sound, to replicate the original experience.
Customizable Content: Add more details, icons, and images to the dialogs for a personalized touch.
Usage
This library uses Electron's built-in dialog module and integrates legacy styling through CSS and HTML templates.

Example
Below is an example to display a Vista-style User Account Control dialog:

javascript
Copy code
const { dialog } = require('electron');
const showVistaDialog = require('electron-old-dialogs');

showVistaDialog({
  type: 'info',
  title: 'User Account Control',
  message: 'Windows needs your permission to continue',
  details: `If you started this action, continue.`,
  options: {
    mainIcon: 'path/to/icon.png', // Add custom icons
    buttons: ['Continue', 'Cancel'],
    sound: true, // Enables Vista ring sound
  },
});


Adding Information and Images
You can enhance the dialog with the following properties:

Details Section: Add text details below the primary message.
Custom Icons: Replace the default icons with images of your choice.
Additional Components: Embed elements like checkboxes or dropdowns.
Example:

javascript
Copy code
showVistaDialog({
  type: 'info',
  title: 'User Account Control',
  message: 'Windows needs your permission to continue',
  details: 'Change Computer Settings \nMicrosoft Windows Component Publisher',
  options: {
    mainIcon: 'path/to/icon.png',
    buttons: ['Continue', 'Cancel'],
    additionalInfo: 'User Account Control helps stop unauthorized changes to your computer.',
    sound: true, // Play Vista ring sound
    extraImage: 'path/to/vista-background.png',
  },
});
Adding Sounds
To include the Vista ring sound, integrate an audio player in your Electron app:

Add the sound file (vista-ring.wav) to your project.
Play the sound when the dialog is displayed:
javascript
Copy code
const { dialog } = require('electron');
const { playSound } = require('electron-old-dialogs');

showVistaDialog({
  type: 'info',
  title: 'User Account Control',
  message: 'Windows needs your permission to continue',
  options: {
    sound: true,
  },
});

playSound('path/to/vista-ring.wav');
Enhancing Visuals
To add a background or styled images (e.g., User Account Control with Windows Vista background):

Use custom CSS to style the dialog.
Add the CSS to your dialog’s HTML template:
css
Copy code
.dialog-background {
  background-image: url('path/to/vista-bg.png');
  background-size: cover;
}
If you'd like, I can help write or improve your library's implementation further!

![alt text](image.png)
