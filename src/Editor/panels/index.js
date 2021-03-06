import {
    cmdImport,
    cmdServer,
    cmdDeviceDesktop,
    cmdDeviceTablet,
    cmdDeviceMobilePortrait,
    cmdDeviceMobileLandscape,
    cmdClear,
    openLayers,
} from '../consts';

const PanelInit = (editor, config) => {
    const pn = editor.Panels;
    const eConfig = editor.getConfig();
    const swv = 'sw-visibility',
        expt = 'export-template',
        osm = 'open-sm',
        otm = 'open-tm',
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
            attributes: { 'data-tooltip': 'View components' },
            active: true,
        },{
            id: cmdServer,
            command: cmdServer,
            context: cmdServer,
            className: 'fa fa-database',
            attributes: { 'data-tooltip': 'Backend Editor' },
        },{
            id: prv,
            context: prv,
            command: e => e.runCommand(prv),
            className: 'fa fa-eye',
            attributes: { 'data-tooltip': 'Preview' },
        },{
            id: ful,
            command: ful,
            context: ful,
            className: 'fa fa-arrows-alt',
            attributes: { 'data-tooltip': 'Fullscreen' },
        },{
            id: expt,
            className: 'fa fa-code',
            command: e => e.runCommand(expt),
            attributes: { 'data-tooltip': 'View code' },
        },{
            id: 'undo',
            className: 'fa fa-undo',
            command: e => e.runCommand('core:undo'),
            attributes: { 'data-tooltip': 'Undo' }
        },{
            id: 'redo',
            className: 'fa fa-repeat',
            command: e => e.runCommand('core:redo'),
            attributes: { 'data-tooltip': 'Redo' }
        },{
            id: cmdImport,
            className: 'fa fa-download',
            command: e => e.runCommand(cmdImport),
            attributes: { 'data-tooltip': 'Import Code' },
        },{
            id: cmdClear,
            className: 'fa fa-trash',
            command: e => e.runCommand(cmdClear),
            attributes: { 'data-tooltip': 'Clear Canvas' },
        }],
    },{
        id: 'views',
        buttons  : [{
            id: osm,
            command: osm,
            active: true,
            className: 'fa fa-paint-brush',
            togglable: false,
            attributes: { 'data-tooltip': 'Open Style Manager' },
        },{
            id: otm,
            command: otm,
            className: 'fa fa-cog',
            togglable: false,
            attributes: { 'data-tooltip': 'Settings' },
        },{
            id: openLayers,
            command: openLayers,
            className: 'fa fa-bars',
            togglable: false,
            attributes: { 'data-tooltip': 'Open Layer Manager' },
        },{
            id: obl,
            command: obl,
            className: 'fa fa-th-large',
            togglable: false,
            attributes: { 'data-tooltip': 'Open Blocks' },
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
    pn.getPanelsEl().querySelectorAll("[data-tooltip]")
        .forEach(el => el.setAttribute("data-tooltip-pos", "bottom"));

    const openBl = pn.getButton('views', obl);
    editor.on('load', () => openBl && openBl.set('active', 1));

    // On component change show the Style Manager
    config.showStylesOnChange && editor.on('component:selected', () => {
        const openSmBtn = pn.getButton('views', osm);
        const openLayersBtn = pn.getButton('views', openLayers);

        // Don't switch when the Layer Manager is on or
        // there is no selected component
        if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
            openSmBtn && openSmBtn.set('active', 1);
        }
    });
}

export default PanelInit;