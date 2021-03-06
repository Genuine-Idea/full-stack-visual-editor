import {openLayers} from "../consts";

const openServer = () => {
    let editingBackend = false;

    return {
        run(editor) {
            editor.Canvas.getFrameEl().parentNode.style.height = "50%";
            // With layers, traversing text type nodes is made easier
            editor.Panels.getButton("views", openLayers).set('active', 1);
            editingBackend = true;
        },
        stop(editor) {
            // eslint-disable-next-line no-unused-vars
            editingBackend = false;
            editor.Canvas.getFrameEl().parentNode.style.height = "100%";
        }
    }
}

export default openServer;
