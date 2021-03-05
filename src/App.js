import './App.css';
import 'grapesjs/dist/css/grapes.min.css';
import Editor from "./Editor/Editor";
import grapesjs_plugin_export from 'grapesjs-plugin-export';
import grapesjs_blocks_basic from "grapesjs-blocks-basic";
import grapesjs_plugin_forms from "grapesjs-plugin-forms";
import grapesjs_navbar from "grapesjs-navbar";
import grapesjs_style_gradient from "grapesjs-style-gradient";
import grapesjs_typed from "grapesjs-typed";
import grapesjs_style_bg from "grapesjs-style-bg";
import grapesjs_tabs from "grapesjs-tabs";
import grapesjs_custom_code from "grapesjs-custom-code";

function App() {
  // TODO Add a storageManager for remote (from Getting Started in docs)
  return (
      <Editor id="gjs" height="100%" width="auto" plugins={[
        grapesjs_plugin_export,
        grapesjs_blocks_basic,
        grapesjs_plugin_forms,
        grapesjs_navbar,
        grapesjs_style_gradient,
        grapesjs_typed,
        grapesjs_style_bg,
        grapesjs_tabs,
        grapesjs_custom_code
      ]} />
  );
}

export default App;
