import {
    cmdImport,
    cmdDeviceDesktop,
    cmdDeviceTablet,
    cmdDeviceMobilePortrait,
    cmdDeviceMobileLandscape,
    cmdClear
} from '../consts';

const PanelInit = (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();
    const swv = 'sw-visibility',
        expt = 'export-template',
        osm = 'open-sm',
        otm = 'open-tm',
        ola = 'open-layers',
        obl = 'open-blocks',
        ful = 'fullscreen',
        prv = 'preview';

    eConfig.showDevices = 0;

    pn.getPanels().reset([{
        id: 'commands',
        buttons: [{}],
    },{
        id: 'options',
        buttons: [{
            id: swv,
            command: swv,
            context: swv,
            className: 'fa fa-square-o',
            active: true,
        },{
            id: prv,
            context: prv,
            command: e => e.runCommand(prv),
            className: 'fa fa-eye',
        },{
            id: ful,
            command: ful,
            context: ful,
            className: 'fa fa-arrows-alt',
        },{
            id: expt,
            className: 'fa fa-code',
            command: e => e.runCommand(expt),
        },{
            id: 'undo',
            className: 'fa fa-undo',
            command: e => e.runCommand('core:undo'),
        },{
            id: 'redo',
            className: 'fa fa-repeat',
            command: e => e.runCommand('core:redo'),
        },{
            id: cmdImport,
            className: 'fa fa-download',
            command: e => e.runCommand(cmdImport),
        },{
            id: cmdClear,
            className: 'fa fa-trash',
            command: e => e.runCommand(cmdClear),
        }],
    },{
        id: 'views',
        buttons  : [{
            id: osm,
            command: osm,
            active: true,
            className: 'fa fa-paint-brush',
        },{
            id: otm,
            command: otm,
            className: 'fa fa-cog',
        },{
            id: ola,
            command: ola,
            className: 'fa fa-bars',
        },{
            id: obl,
            command: obl,
            className: 'fa fa-th-large',
        }],
    },{
        id: 'devices-c',
        buttons: [{
            id: cmdDeviceDesktop,
            command: cmdDeviceDesktop,
            className: 'fa fa-desktop',
            active: 1,
        },{
            id: cmdDeviceTablet,
            command: cmdDeviceTablet,
            className: 'fa fa-tablet',
        },{
            id: cmdDeviceMobilePortrait,
            command: cmdDeviceMobilePortrait,
            className: 'fa fa-mobile',
        },{
            id: cmdDeviceMobileLandscape,
            command: cmdDeviceMobileLandscape,
            className: 'fa fa-mobile fa-rotate-90',
        }]
    }]);

    const openBl = pn.getButton('views', obl);
    editor.on('load', () => openBl && openBl.set('active', 1));

    // On component change show the Style Manager
    config.showStylesOnChange && editor.on('component:selected', () => {
        const openSmBtn = pn.getButton('views', osm);
        const openLayersBtn = pn.getButton('views', ola);

        // Don't switch when the Layer Manager is on or
        // there is no selected component
        if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
            openSmBtn && openSmBtn.set('active', 1);
        }
    });
}

export default PanelInit;