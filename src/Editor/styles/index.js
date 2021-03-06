const StyleInit = (editor, config) => {
    const sm = editor.StyleManager;
    const csm = config.customStyleManager;

    sm.getSectors().reset(csm && csm.length ? csm : [{
        name: "General",
        open: false,
        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
    },{
        name: "Layout",
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
    },{
        name: "Typography",
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
        properties: [{
            property: 'text-align',
            list: [
                { value: 'left', className: 'fa fa-align-left' },
                { value: 'center', className: 'fa fa-align-center'  },
                { value: 'right', className: 'fa fa-align-right' },
                { value: 'justify', className: 'fa fa-align-justify' },
            ],
        }]
    },{
        name: "Decorations",
        open: false,
        buildProps: ['opacity', 'border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        properties: [{
            type: 'slider',
            property: 'opacity',
            defaults: 1,
            step: 0.01,
            max: 1,
            min:0,
        }],
    },{
        name: "Extra",
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
    },{
        name: 'Flex',
        open: false,
        properties: [
            {
                name: 'Flex Container',
                property: 'display',
                type: 'select',
                defaults: 'block',
                list: [
                    { value: 'block', name: 'Disable'},
                    { value: 'flex', name: 'Enable'}
                ],
            },{
                name: 'Flex Parent',
                property: 'label-parent-flex',
                type: 'integer',
            },{
                name: 'Direction',
                property: 'flex-direction',
                type: 'radio',
                defaults: 'row',
                list: [{
                    value: 'row',
                    name: 'Row',
                    className: 'icons-flex icon-dir-row',
                    title: 'Row',
                },{
                    value: 'row-reverse',
                    name: 'Row reverse',
                    className: 'icons-flex icon-dir-row-rev',
                    title: 'Row reverse',
                },{
                    value: 'column',
                    name: 'Column',
                    title: 'Column',
                    className: 'icons-flex icon-dir-col',
                },{
                    value   : 'column-reverse',
                    name    : 'Column reverse',
                    title   : 'Column reverse',
                    className : 'icons-flex icon-dir-col-rev',
                }],
            },{
            name: 'Justify',
            property: 'justify-content',
            type: 'radio',
            defaults: 'flex-start',
            list: [{
                value: 'flex-start',
                className: 'icons-flex icon-just-start',
                title: 'Start',
            },{
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-just-end',
            },{
                value: 'space-between',
                title: 'Space between',
                className: 'icons-flex icon-just-sp-bet',
            },{
                value: 'space-around',
                title: 'Space around',
                className: 'icons-flex icon-just-sp-ar',
            },{
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-just-sp-cent',
            }],
        },{
            name: 'Align',
            property: 'align-items',
            type: 'radio',
            defaults: 'center',
            list: [{
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
            },{
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
            },{
                value   : 'stretch',
                title    : 'Stretch',
                className : 'icons-flex icon-al-str',
            },{
                value   : 'center',
                title    : 'Center',
                className : 'icons-flex icon-al-center',
            }],
        },{
            name: 'Flex Children',
            property: 'label-parent-flex',
            type: 'integer',
        },{
            name: 'Order',
            property: 'order',
            type: 'integer',
            defaults:  0,
            min: 0
        },{
            name: 'Flex',
            property: 'flex',
            type: 'composite',
            properties  : [{
                name: 'Grow',
                property: 'flex-grow',
                type: 'integer',
                defaults: 0,
                min: 0
            },{
                name: 'Shrink',
                property: 'flex-shrink',
                type: 'integer',
                defaults :0,
                min: 0
            },{
                name: 'Basis',
                property: 'flex-basis',
                type: 'integer',
                units: ['px','%',''],
                unit: '',
                defaults: 'auto',
            }],
        },{
            name: 'Align',
            property: 'align-self',
            type: 'radio',
            defaults: 'auto',
                // TODO Find icons here
            list: [{
                value: 'auto',
                name: 'Auto',
            },{
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
            },{
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
            },{
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
            },{
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
            }],
        }]
    }]);
}

export default StyleInit;
