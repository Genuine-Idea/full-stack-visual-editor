import GrapesJS from 'grapesjs';
import React from 'react';

const Editor = React.forwardRef(
    (props, ref) => {
        const {
            onInit,
            id,
            blockManager,
            styleManager,
            storageManager,
            width,
            height,
            plugins: propPlugins,
            presetType,
            children,
            onDestroy,
        } = props;

        const [editor, setEditor] = React.useState(null);

        React.useEffect(
            () => {
                const editor = GrapesJS.init({
                    container: `#${id}`,
                    fromElement: true,
                    blockManager,
                    styleManager,
                    storageManager,
                    width,
                    height,
                    plugins: [...propPlugins],
                });
                if (typeof onInit === 'function') {
                    onInit(editor);
                }
                setEditor(editor);

                return function cleanup() {
                    if (editor) {
                        if (typeof onDestroy === 'function') {
                            onDestroy(editor);
                        }
                        GrapesJS.editors = GrapesJS.editors.filter((e) => e !== editor);
                        editor.destroy();
                        if (document) {
                            const container = document.getElementById(id);
                            if (container) {
                                container.innerHTML = '';
                            }
                        }
                    }
                };
            },
            [blockManager, height, id, onDestroy, onInit, presetType, propPlugins, storageManager, styleManager, width],
        );

        React.useImperativeHandle(ref, () => {
            return editor;
        });

        return (
            <div id={id}>
                {children}
            </div>
        );
    },
);

Editor.defaultProps = {
    id: 'gjs',
    presetType: 'newsletter',
    plugins: [],
    blocks: [],
    blockManager: {},
    storageManager: {},
    styleManager: {},
    width: 'auto',
    height: '100vh',
    components: [],
};

export default Editor;