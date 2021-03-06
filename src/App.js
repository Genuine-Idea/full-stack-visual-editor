import "./App.scss"

import grapesjs_plugin_export from 'grapesjs-plugin-export';
import grapesjs_blocks_basic from "grapesjs-blocks-basic";
import grapesjs_plugin_forms from "grapesjs-plugin-forms";
import grapesjs_navbar from "grapesjs-navbar";
import grapesjs_style_gradient from "grapesjs-style-gradient";
import grapesjs_typed from "grapesjs-typed";
import grapesjs_style_bg from "grapesjs-style-bg";
import grapesjs_tabs from "grapesjs-tabs";
import grapesjs_custom_code from "grapesjs-custom-code";
import grapesjs_tooltip from "grapesjs-tooltip";
import grapesjs_parser_postcss from "grapesjs-parser-postcss";
import grapesjs_blocks_flexbox from "grapesjs-blocks-flexbox";

import Editor from "./Editor/Editor";
import blocks from "./Editor/blocks";
import commands from "./Editor/commands";
import panels from "./Editor/panels";
import styles from "./Editor/styles";

function editorInit(editor) {
    commands(editor, {
        modalImportTitle: "Import",
        modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">' +
            'Paste here your HTML/CSS and click Import</div>',
        modalImportButton: "Import",
        modalImportContent: editor => `${editor.getHtml()}<style>\n${editor.getCss()}</style>`,
        textCleanCanvas: "Are you sure want to clean the canvas?"
    });
    panels(editor, {});
    styles(editor, {});
}

function App() {
  /*
  TODO Add a storageManager for remote (from Getting Started in docs)
   However, we need to test that we debounce before saving in case user
   is constantly typing. Saving everytime a key is pressed is not good.
   But I haven't tested that yet.
  */
  return (
      <Editor id="gjs" width="100vw" height="100vh" plugins={[
          grapesjs_plugin_export,
          grapesjs_blocks_basic,
          grapesjs_plugin_forms,
          grapesjs_navbar,
          grapesjs_style_gradient,
          grapesjs_typed,
          grapesjs_style_bg,
          grapesjs_tabs,
          grapesjs_custom_code,
          grapesjs_tooltip,
          grapesjs_parser_postcss,
          grapesjs_blocks_flexbox,
      ]} onInit={editorInit} blocks={blocks} />
  );
}

export default App;
