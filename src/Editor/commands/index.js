import openImport from './openImport';
import {
    cmdImport,
    cmdDeviceDesktop,
    cmdDeviceTablet,
    cmdDeviceMobilePortrait,
    cmdDeviceMobileLandscape,
    cmdClear
} from '../consts';

const CommandInit = (editor, config) => {
    const cm = editor.Commands;
    const txtConfirm = config.textCleanCanvas;

    cm.add(cmdImport, openImport(editor, config));
    cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
    cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
    cm.add(cmdDeviceMobilePortrait, e => e.setDevice('Mobile portrait'));
    cm.add(cmdDeviceMobileLandscape, e => e.setDevice('Mobile landscape'));
    cm.add(cmdClear, e => window.confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
}

export default CommandInit;
