(this["webpackJsonpfull-stack-visual-editor"]=this["webpackJsonpfull-stack-visual-editor"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),s=(a(26),a(27),a(8)),l=a.n(s),c=a(9),d=a.n(c),u=a(19),m=a.n(u),p=a(10),f=a.n(p),g=a(11),b=a.n(g),v=a(12),h=a.n(v),y=a(13),x=a.n(y),w=a(14),C=a.n(w),N=a(15),k=a.n(N),j=a(16),M=a.n(j),S=a(17),I=a.n(S),E=a(18),B=a.n(E),O=a(20),P=a(21),T=a(1),L=a.n(T),F=a(2),D=o.a.forwardRef((function(e,t){var a=e.onInit,n=e.id,i=e.blockManager,r=e.styleManager,s=e.storageManager,l=e.width,c=e.height,d=e.plugins,u=e.presetType,m=e.children,p=e.onDestroy,f=o.a.useState(null),g=Object(P.a)(f,2),b=g[0],v=g[1];return o.a.useEffect((function(){var e=L.a.init({container:"#".concat(n),fromElement:!0,blockManager:i,styleManager:r,storageManager:s,width:l,height:c,plugins:Object(O.a)(d)});return"function"===typeof a&&a(e),v(e),function(){if(e&&("function"===typeof p&&p(e),L.a.editors=L.a.editors.filter((function(t){return t!==e})),e.destroy(),document)){var t=document.getElementById(n);t&&(t.innerHTML="")}}}),[i,c,n,p,a,u,d,s,r,l]),o.a.useImperativeHandle(t,(function(){return b})),Object(F.jsx)("div",{id:n,children:m})}));D.defaultProps={id:"gjs",presetType:"newsletter",plugins:[],blocks:[],blockManager:{},storageManager:{},styleManager:{},width:"auto",height:"100vh",components:[]};var q=D;window.GrapesJS=L.a;var A=function(e,t){var a=e.BlockManager,n=function(e){return t.blocks.indexOf(e)>=0};n("link-block")&&a.add("link-block",{category:"Basic",label:"Link Block",attributes:{class:"fa fa-link"},content:{type:"link",editable:!1,droppable:!0,style:{display:"inline-block",padding:"5px","min-height":"50px","min-width":"50px"}}}),n("quote")&&a.add("quote",{label:"Quote",category:"Basic",attributes:{class:"fa fa-quote-right"},content:'<blockquote class="quote">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n      </blockquote>'}),n("text-basic")&&a.add("text-basic",{category:"Basic",label:"Text section",attributes:{class:"gjs-fonts gjs-f-h1p"},content:'<section class="bdg-sect">\n      <h1 class="heading">Insert title here</h1>\n      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n      </section>'})},H=a(6),R=function(e,t){var a=e.getConfig("stylePrefix"),n=e.Modal,o=e.CodeManager.getViewer("CodeMirror").clone(),i=document.createElement("div"),r=t.modalImportLabel,s=t.modalImportContent,l=o.editor,c=document.createElement("button");return c.type="button",c.innerHTML=t.modalImportButton,c.className="".concat(a,"btn-prim ").concat(a,"btn-import"),c.onclick=function(t){e.setComponents(l.getValue().trim()),n.close()},o.set(Object(H.a)(Object(H.a)({},{codeName:"htmlmixed",theme:"hopscotch",readOnly:0}),t.importViewerOptions)),{run:function(e){var d=this;if(!l){var u=document.createElement("textarea");if(r){var m=document.createElement("div");m.className="".concat(a,"import-label"),m.innerHTML=r,i.appendChild(m)}i.appendChild(u),i.appendChild(c),o.init(u),l=o.editor}n.setTitle(t.modalImportTitle),n.setContent(i);var p="function"==typeof s?s(e):s;o.setContent(p||""),n.open().getModel().once("change:open",(function(){return e.stopCommand(d.id)})),l.refresh()},stop:function(){n.close()}}},V="gjs-open-import-webpage",J="gjs-open-server",G="set-device-desktop",z="set-device-tablet",Q="set-device-mobile-portrait",U="set-device-mobile-landscape",K="canvas-clear",W="open-layers",X=function(){return{run:function(e){e.Canvas.getFrameEl().parentNode.style.height="50%",e.Panels.getButton("views",W).set("active",1),!0},stop:function(e){!1,e.Canvas.getFrameEl().parentNode.style.height="100%"}}},Y=function(e,t){var a=e.Commands,n=t.textCleanCanvas;a.add(V,R(e,t)),a.add(J,X(e,t)),a.add(G,(function(e){return e.setDevice("Desktop")})),a.add(z,(function(e){return e.setDevice("Tablet")})),a.add(Q,(function(e){return e.setDevice("Mobile portrait")})),a.add(U,(function(e){return e.setDevice("Mobile landscape")})),a.add(K,(function(e){return window.confirm(n)&&e.runCommand("core:canvas-clear")}))},Z=function(e,t){var a=e.Panels,n=e.getConfig(),o="sw-visibility",i="export-template",r="open-sm",s="open-tm",l="open-blocks",c="fullscreen",d="preview";n.showDevices=0,a.getPanels().reset([{id:"commands",buttons:[{}]},{id:"options",buttons:[{id:o,command:o,context:o,className:"fa fa-square-o",attributes:{"data-tooltip":"View components"},active:!0},{id:J,command:J,context:J,className:"fa fa-database",attributes:{"data-tooltip":"Backend Editor"}},{id:d,context:d,command:function(e){return e.runCommand(d)},className:"fa fa-eye",attributes:{"data-tooltip":"Preview"}},{id:c,command:c,context:c,className:"fa fa-arrows-alt",attributes:{"data-tooltip":"Fullscreen"}},{id:i,className:"fa fa-code",command:function(e){return e.runCommand(i)},attributes:{"data-tooltip":"View code"}},{id:"undo",className:"fa fa-undo",command:function(e){return e.runCommand("core:undo")},attributes:{"data-tooltip":"Undo"}},{id:"redo",className:"fa fa-repeat",command:function(e){return e.runCommand("core:redo")},attributes:{"data-tooltip":"Redo"}},{id:V,className:"fa fa-download",command:function(e){return e.runCommand(V)},attributes:{"data-tooltip":"Import Code"}},{id:K,className:"fa fa-trash",command:function(e){return e.runCommand(K)},attributes:{"data-tooltip":"Clear Canvas"}}]},{id:"views",buttons:[{id:r,command:r,active:!0,className:"fa fa-paint-brush",togglable:!1,attributes:{"data-tooltip":"Open Style Manager"}},{id:s,command:s,className:"fa fa-cog",togglable:!1,attributes:{"data-tooltip":"Settings"}},{id:W,command:W,className:"fa fa-bars",togglable:!1,attributes:{"data-tooltip":"Open Layer Manager"}},{id:l,command:l,className:"fa fa-th-large",togglable:!1,attributes:{"data-tooltip":"Open Blocks"}}]},{id:"devices-c",buttons:[{id:G,command:G,className:"fa fa-desktop",active:1},{id:z,command:z,className:"fa fa-tablet"},{id:Q,command:Q,className:"fa fa-mobile"},{id:U,command:U,className:"fa fa-mobile fa-rotate-90"}]}]),a.getPanelsEl().querySelectorAll("[data-tooltip]").forEach((function(e){return e.setAttribute("data-tooltip-pos","bottom")}));var u=a.getButton("views",l);e.on("load",(function(){return u&&u.set("active",1)})),t.showStylesOnChange&&e.on("component:selected",(function(){var t=a.getButton("views",r),n=a.getButton("views",W);n&&n.get("active")||!e.getSelected()||t&&t.set("active",1)}))},$=function(e,t){var a=e.StyleManager,n=t.customStyleManager;a.getSectors().reset(n&&n.length?n:[{name:"General",open:!1,buildProps:["float","display","position","top","right","left","bottom"]},{name:"Layout",open:!1,buildProps:["width","height","max-width","min-height","margin","padding"]},{name:"Typography",open:!1,buildProps:["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","text-shadow"],properties:[{property:"text-align",list:[{value:"left",className:"fa fa-align-left"},{value:"center",className:"fa fa-align-center"},{value:"right",className:"fa fa-align-right"},{value:"justify",className:"fa fa-align-justify"}]}]},{name:"Decorations",open:!1,buildProps:["opacity","border-radius-c","background-color","border-radius","border","box-shadow","background"],properties:[{type:"slider",property:"opacity",defaults:1,step:.01,max:1,min:0}]},{name:"Extra",open:!1,buildProps:["transition","perspective","transform"]},{name:"Flex",open:!1,properties:[{name:"Flex Container",property:"display",type:"select",defaults:"block",list:[{value:"block",name:"Disable"},{value:"flex",name:"Enable"}]},{name:"Flex Parent",property:"label-parent-flex",type:"integer"},{name:"Direction",property:"flex-direction",type:"radio",defaults:"row",list:[{value:"row",name:"Row",className:"icons-flex icon-dir-row",title:"Row"},{value:"row-reverse",name:"Row reverse",className:"icons-flex icon-dir-row-rev",title:"Row reverse"},{value:"column",name:"Column",title:"Column",className:"icons-flex icon-dir-col"},{value:"column-reverse",name:"Column reverse",title:"Column reverse",className:"icons-flex icon-dir-col-rev"}]},{name:"Justify",property:"justify-content",type:"radio",defaults:"flex-start",list:[{value:"flex-start",className:"icons-flex icon-just-start",title:"Start"},{value:"flex-end",title:"End",className:"icons-flex icon-just-end"},{value:"space-between",title:"Space between",className:"icons-flex icon-just-sp-bet"},{value:"space-around",title:"Space around",className:"icons-flex icon-just-sp-ar"},{value:"center",title:"Center",className:"icons-flex icon-just-sp-cent"}]},{name:"Align",property:"align-items",type:"radio",defaults:"center",list:[{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]},{name:"Flex Children",property:"label-parent-flex",type:"integer"},{name:"Order",property:"order",type:"integer",defaults:0,min:0},{name:"Flex",property:"flex",type:"composite",properties:[{name:"Grow",property:"flex-grow",type:"integer",defaults:0,min:0},{name:"Shrink",property:"flex-shrink",type:"integer",defaults:0,min:0},{name:"Basis",property:"flex-basis",type:"integer",units:["px","%",""],unit:"",defaults:"auto"}]},{name:"Align",property:"align-self",type:"radio",defaults:"auto",list:[{value:"auto",name:"Auto"},{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]}]}])};function _(e){Y(e,{modalImportTitle:"Import",modalImportLabel:'<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',modalImportButton:"Import",modalImportContent:function(e){return"".concat(e.getHtml(),"<style>\n").concat(e.getCss(),"</style>")},textCleanCanvas:"Are you sure want to clean the canvas?"}),Z(e,{}),$(e,{})}var ee=function(){return Object(F.jsx)(q,{id:"gjs",width:"100vw",height:"100vh",plugins:[l.a,d.a,m.a,f.a,b.a,h.a,x.a,C.a,k.a,M.a,I.a,B.a],onInit:_,blocks:A})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};r.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(ee,{})}),document.getElementById("root")),te()}},[[29,1,2]]]);
//# sourceMappingURL=main.a3428a7d.chunk.js.map