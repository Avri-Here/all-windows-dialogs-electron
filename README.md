# Electron Dialogs Old Style

## About the Library

This library provides a set of **dialogs styled to emulate old-school Windows versions**, including:

- **Windows XP**
- **Windows Vista**
- **Windows 98**

The dialogs mimic the visual style, layout, and sound effects of legacy Windows dialog boxes, such as:

- **Confirmation dialogs** (e.g., User Account Control)
- **Error dialogs** (e.g., Windows Error messages)
- **Warning dialogs**

Each dialog comes pre-styled with **authentic visuals**, **sounds**, and **layout** that closely replicate the original Windows design.

## Features

- **Authentic Appearance**: Dialogs that closely resemble the legacy Windows designs.
- **Integrated Sounds**: Includes sound effects, like the Windows Vista ring sound, to enhance the user experience.
- **Customizable Content**: Add custom details, icons, and images to personalize the dialogs further.

## Usage

The library leverages **Electron's built-in dialog module** while applying legacy styling through **CSS** and **HTML templates** to give the dialogs their old-school look.

### Example

Below is an example of how to display a **Vista-style User Account Control** dialog:

```javascript
const { dialog } = require('electron');

dialog.showMessageBox({
  type: 'question',
  buttons: ['Yes', 'No'],
  title: 'User Account Control',
  message: 'Do you want to allow this app to make changes to your device?',
  icon: 'path_to_icon.png',
  sound: 'path_to_sound_file.wav', // Optional sound file to add sound effects
});
