(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lottie-web'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lottie-web', 'axios'], factory) :
  (global = global || self, factory(global.LottieAnimation = {}, global['lottie-web'], global.axios));
}(this, function (exports, lottie, axios) { 'use strict';

  lottie = lottie && lottie.hasOwnProperty('default') ? lottie['default'] : lottie;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  //

  var script = {
    props: {
      path: {
        required: true
      },
      speed: {
        type: Number,
        required: false,
        default: 1
      },
      width: {
        type: Number,
        required: false,
        default: -1
      },
      height: {
        type: Number,
        required: false,
        default: -1
      },
      loop: {
        type:Boolean,
        required: false,
        default: true
      },
      autoPlay: {
        type:Boolean,
        required: false,
        default: true
      },
      loopDelayMin: {
        type: Number,
        required: false,
        default: 0
      },
      loopDelayMax: {
        type: Number,
        required: false,
        default: 0
      },
    },
    data: function () { return ({
      name: 'lottie-animation',
      rendererSettings: {
        scaleMode: "centerCrop",
        clearCanvas: true,
        progressiveLoad: false,
        hideOnTransparent: true
      },
      anim: null,
      style: null
    }); },
    mounted: function mounted() {
      this.init();
    },
    methods: {
      loadJsonData: async function loadJsonData(path) {
        return await axios.get("/" + path).then(function (response) {
          return response.data;
        });
      },
      init: async function init() {
        this.style = {
          width: (this.width != -1 )? ((this.width) + "px") : '100%',
          height: (this.height != -1 )? ((this.height) + "px") : '100%',
          overflow: "hidden",
          margin: "0 auto"
        };

        var jsonData = await this.loadJsonData(this.path);

        if(this.anim) {
          this.anim.destroy(); // Releases resources. The DOM element will be emptied.
        }

        this.anim = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: "svg",
          loop: this.loop,
          autoplay: this.autoPlay,
          animationData: jsonData,
          rendererSettings: this.rendererSettings
        });

        this.$emit("AnimControl", this.anim);

        this.anim.setSpeed(this.speed);
        if (this.loopDelayMin > 0) {
          this.anim.loop = false;
          this.anim.autoplay = false;
          this.executeLoop();
        }
      },
      getRandomInt: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      },
      executeLoop: function executeLoop() {
        var this$1 = this;

        this.anim.play();
        setTimeout(function () {
          this$1.anim.stop();
          this$1.executeLoop();
        }, this.getRandomInt(this.loopDelayMin, this.loopDelayMax == 0? this.loopDelayMin : this.loopDelayMax));
      },


    },
    watch: {
      path: function(newVal, oldVal) {
        this.init();
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.style
      ? _c("div", { ref: "lavContainer", style: _vm.style })
      : _vm._e()
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var LottieAnimation = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  // Import vue component

  var wrapper = {
  	install: function install(Vue, options) {

  		Vue.component('lottie-animation', LottieAnimation);
  		Vue.mixin({
  			mounted: function mounted() {
  				//console.log('lottie-animation installed!')
  			}
  		});
  	}
  };

  exports.default = wrapper;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
