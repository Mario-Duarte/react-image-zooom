(this["webpackJsonpreact-image-zoom"]=this["webpackJsonpreact-image-zoom"]||[]).push([[0],{25:function(e,t,o){},26:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var a=o(0),s=o(1),n=o.n(s),i=o(9),r=o.n(i),c=(o(25),o(26),o(10)),l=o(13),m=o(14),h=o(19),p=o(18),g=o(5),d=o(6);function u(){var e=Object(g.a)(["\n    transition: opacity .8s;\n\tdisplay: block;\n"]);return u=function(){return e},e}function j(){var e=Object(g.a)(['\n    background-position: 50% 50%;\n\tposition: relative;\n    width: auto;\n\toverflow: hidden;\n    cursor: zoom-in;\n    min-height: 25vh;\n    background-color: #eee;\n    margin: 0;\n    &:before {\n        content: "";\n        background-color: transparent;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 1;\n        transition: opacity 0.2s ease-in-out;\n        z-index: 1;\n    }\n    &:after {\n        content: "";\n        position: absolute;\n        top: calc(50% - 25px);\n        left: calc(50% - 25px);\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        border: 5px solid transparent;\n        border-top-color: #333;\n        border-right-color: #333;\n        border-bottom-color: #333;\n        animation: '," 2s linear infinite;\n        opacity: 1;\n        transition: opacity 0.2s ease-in-out;\n        z-index: 2;\n    }\n    &.loaded {\n        min-height: auto;\n        &:before {\n            opacity: 0;\n        }\n        &:after {\n            opacity: 0;\n        }\n    }\n"]);return j=function(){return e},e}function b(){var e=Object(g.a)(["\n    from { transform: rotate(0deg); }\n    to {transform: rotate(360deg);}\n"]);return b=function(){return e},e}var f=Object(d.b)(b()),x=d.a.figure(j(),f),y=d.a.img(u()),O=function(e){Object(h.a)(o,e);var t=Object(p.a)(o);function o(e){var a;return Object(l.a)(this,o),(a=t.call(this,e)).state={zoomed:"1",position:"50% 50%",imgData:null},a}return Object(m.a)(o,[{key:"zoomInPosition",value:function(e){var t,o,a,s,n=e.currentTarget.getBoundingClientRect();a=e.clientX-n.x,s=e.clientY-n.y,t=a/n.width*100,o=s/n.height*100,this.setState({position:"".concat(t,"% ").concat(o,"%")})}},{key:"toggleZoomImage",value:function(e){"0"===this.state.zoomed?this.setState({zoomed:"1"}):(this.setState({zoomed:"0"}),this.zoomInPosition(e))}},{key:"handleClick",value:function(e){this.toggleZoomImage(e)}},{key:"handleMove",value:function(e){"0"===this.state.zoomed&&this.zoomInPosition(e)}},{key:"handleLeave",value:function(){this.setState({zoomed:"1",position:"50% 50%"})}},{key:"componentDidMount",value:function(){var e=this;if(""===this.props.src||null==this.props.src)throw new Error("Prop src must be defined when using ImageZoom component!");this.setState({zoomed:"0"});var t=new Image;t.src=this.props.src,t.addEventListener("load",(function(){setTimeout((function(){e.setState({zoomed:"1"}),e.setState({imgData:t.src})}),200)}))}},{key:"render",value:function(){var e=this,t=this.state.imgData?"loaded":"loading",o="0"===this.state.zoomed?"zoomed":"fullView";return Object(a.jsx)(x,{id:this.props.id,className:[t,o,this.props.className].join(" "),style:{backgroundImage:"url("+this.state.imgData+")",backgroundSize:this.props.zoom+"%",backgroundPosition:this.state.position},onClick:function(t){return e.handleClick(t)},onMouseMove:function(t){return e.handleMove(t)},onMouseLeave:function(){return e.handleLeave()},children:Object(a.jsx)(y,{id:"imageZoom",src:this.state.imgData,alt:this.props.alt,style:{opacity:this.state.zoomed},width:this.props.width,height:this.props.height})})}}]),o}(n.a.Component);O.defaultProps={zoom:"200",alt:"This is an imageZoom image",width:"100%",height:"auto"};var w=O;var v=function(){var e=new Date;return e=e.getFullYear(),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("title",{children:"React Image Zoom - Demo Page"})]}),Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"<ImageZoom/>"}),Object(a.jsx)("p",{children:"Simple React component that will allow users to zoom in on your images, perfect for product images and galleries!"}),Object(a.jsxs)("p",{children:["Small and light weight!",Object(a.jsx)("br",{}),"Give it a try and see the ",Object(a.jsx)("a",{href:"https://github.com/Mario-Duarte/ImageZoom",target:"_blank",rel:"noreferrer",children:"docs here"}),"."]})]}),Object(a.jsx)(w,{className:"fullImageZoom",src:"https://picsum.photos/seed/000/1920/1080",alt:"A image to apply the ImageZoom plugin",zoom:"250",width:"100%",height:"auto"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{children:"How it works"}),Object(a.jsx)("p",{children:"This component allows users to click/tap to zoom-in on an image, pan around to inspect the details and click again to zoom-out, moving the focus out of the image will also reset the zoom. This component also has a image loader built in."}),Object(a.jsx)("p",{children:"Bellow is an example of a standard image gallery using the component with a default 200% zoom:"}),Object(a.jsxs)("div",{className:"gallery",children:[Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/005/1920/1080",alt:"A image to apply the ImageZoom plugin"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/002/1920/1080",alt:"A image to apply the ImageZoom plugin"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/003/1920/1080",alt:"A image to apply the ImageZoom plugin"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/004/1920/1080",alt:"A image to apply the ImageZoom plugin"})]}),Object(a.jsx)("h3",{children:"How to use it"}),Object(a.jsxs)("p",{children:["The imageZoom component works very similar to the default img tag in HTML, just pass in a src attribute (",Object(a.jsx)("strong",{children:Object(a.jsx)("i",{children:"mandatory"})}),") with the image url you wan to use and it will render a working imageZoom component."]}),Object(a.jsx)(w,{src:"https://picsum.photos/1920/1080",alt:"A image to apply the ImageZoom plugin"}),Object(a.jsx)("code",{children:'<ImageZoom src="https://picsum.photos/1920/1080" alt="A image to apply the ImageZoom plugin" />'}),Object(a.jsxs)("p",{children:["By default the component will set a zoom of 200% on the image if no attribute was set, it will also set default values to the ",Object(a.jsx)("strong",{children:"width"})," (100%), ",Object(a.jsx)("strong",{children:"height"})," (auto) and ",Object(a.jsx)("strong",{children:"alt"})," (This is an imageZoom image) attributes."]}),Object(a.jsxs)("p",{children:["You can also pass in secondary attributes such as ",Object(a.jsx)("strong",{children:"id"})," and ",Object(a.jsx)("strong",{children:"className"})," to enable you to style the component more easily, in addition to these, the component will also update it's className based on it's state, for example, ",Object(a.jsx)("strong",{children:"loading"})," and ",Object(a.jsx)("strong",{children:"loaded"})," for when the component is downloading the image passed, and ",Object(a.jsx)("strong",{children:"fullView"})," and ",Object(a.jsx)("strong",{children:"zoomed"})," for when the user zooms in on the image. These can be easily targeted in conjunction with the attribute className to adapt the style of the component depending of implementation."]}),Object(a.jsx)("p",{children:"Here is an example of a custom gallery:"}),Object(a.jsxs)("div",{className:"demo-gallery",children:[Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/006/1920/1080",alt:"A image to apply the ImageZoom plugin",zoom:"300"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/007/1920/1080",alt:"A image to apply the ImageZoom plugin",zoom:"300"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/008/1920/1080",alt:"A image to apply the ImageZoom plugin",zoom:"300"}),Object(a.jsx)(w,{className:"gallery-img",src:"https://picsum.photos/seed/009/1920/1080",alt:"A image to apply the ImageZoom plugin",zoom:"300"})]}),Object(a.jsxs)("code",{children:['<div className="demo-gallery">',Object(a.jsx)("br",{}),'\xa0<ImageZoom className="gallery-img" src="https://picsum.photos/seed/006/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />',Object(a.jsx)("br",{}),'\xa0<ImageZoom className="gallery-img" src="https://picsum.photos/seed/007/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />',Object(a.jsx)("br",{}),'\xa0<ImageZoom className="gallery-img" src="https://picsum.photos/seed/008/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />',Object(a.jsx)("br",{}),'\xa0<ImageZoom className="gallery-img" src="https://picsum.photos/seed/009/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="300" />',Object(a.jsx)("br",{}),"</div>"]})]}),Object(a.jsxs)("footer",{children:["Created with \u2665 by ",Object(a.jsx)("a",{href:"https://www.marioduarte.co.uk/",target:"_blank",rel:"noreferrer",children:"M\xe1rio Duarte"})," \xa9 ",e]})]})},z=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(t){var o=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;o(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),z()}},[[32,1,2]]]);
//# sourceMappingURL=main.a7e24d67.chunk.js.map