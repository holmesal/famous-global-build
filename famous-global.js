(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.famous = {
    core: {
        Context: require('./core/Context'),
        ElementAllocator: require('./core/ElementAllocator'),
        ElementOutput: require('./core/ElementOutput'),
        Engine: require('./core/Engine'),
        Entity: require('./core/Entity'),
        EventEmitter: require('./core/EventEmitter'),
        EventHandler: require('./core/EventHandler'),
        Group: require('./core/Group'),
        Modifier: require('./core/Modifier'),
        OptionsManager: require('./core/OptionsManager'),
        RenderNode: require('./core/RenderNode'),
        Scene: require('./core/Scene'),
        SpecParser: require('./core/SpecParser'),
        Surface: require('./core/Surface'),
        Transform: require('./core/Transform'),
        View: require('./core/View'),
        ViewSequence: require('./core/ViewSequence')
    },
    events: {
        EventArbiter: require('./events/EventArbiter'),
        EventFilter: require('./events/EventFilter'),
        EventMapper: require('./events/EventMapper')
    },
    inputs: {
        Accumulator: require('./inputs/Accumulator'),
        DesktopEmulationMode: require('./inputs/DesktopEmulationMode'),
        FastClick: require('./inputs/FastClick'),
        GenericSync: require('./inputs/GenericSync'),
        MouseSync: require('./inputs/MouseSync'),
        PinchSync: require('./inputs/PinchSync'),
        RotateSync: require('./inputs/RotateSync'),
        ScaleSync: require('./inputs/ScaleSync'),
        ScrollSync: require('./inputs/ScrollSync'),
        TouchSync: require('./inputs/TouchSync'),
        TouchTracker: require('./inputs/TouchTracker'),
        TwoFingerSync: require('./inputs/TwoFingerSync')
    },
    math: {
        Matrix: require('./math/Matrix'),
        Quaternion: require('./math/Quaternion'),
        Random: require('./math/Random'),
        Utilities: require('./math/Utilities'),
        Vector: require('./math/Vector')
    },
    modifiers: {
        Draggable: require('./modifiers/Draggable'),
        Fader: require('./modifiers/Fader'),
        ModifierChain: require('./modifiers/ModifierChain'),
        StateModifier: require('./modifiers/StateModifier')
    },
    physics: {
        bodies: {
            Body: require('./physics/bodies/Body'),
            Circle: require('./physics/bodies/Circle'),
            Particle: require('./physics/bodies/Particle'),
            Rectangle: require('./physics/bodies/Rectangle')
        },
        constraints: {
            Collision: require('./physics/constraints/Collision'),
            Constraint: require('./physics/constraints/Constraint'),
            Curve: require('./physics/constraints/Curve'),
            Distance: require('./physics/constraints/Distance'),
            Snap: require('./physics/constraints/Snap'),
            Surface: require('./physics/constraints/Surface'),
            Wall: require('./physics/constraints/Wall'),
            Walls: require('./physics/constraints/Walls')
        },
        forces: {
            Drag: require('./physics/forces/Drag'),
            Force: require('./physics/forces/Force'),
            Repulsion: require('./physics/forces/Repulsion'),
            RotationalDrag: require('./physics/forces/RotationalDrag'),
            RotationalSpring: require('./physics/forces/RotationalSpring'),
            Spring: require('./physics/forces/Spring'),
            VectorField: require('./physics/forces/VectorField')
        },
        integrators: {
            SymplecticEuler: require('./physics/integrators/SymplecticEuler')
        },
        PhysicsEngine: require('./physics/PhysicsEngine')
    },
    surfaces: {
        CanvasSurface: require('./surfaces/CanvasSurface'),
        ContainerSurface: require('./surfaces/ContainerSurface'),
        FormContainerSurface: require('./surfaces/FormContainerSurface'),
        ImageSurface: require('./surfaces/ImageSurface'),
        InputSurface: require('./surfaces/InputSurface'),
        SubmitInputSurface: require('./surfaces/SubmitInputSurface'),
        TextareaSurface: require('./surfaces/TextareaSurface'),
        VideoSurface: require('./surfaces/VideoSurface')
    },
    transitions: {
        CachedMap: require('./transitions/CachedMap'),
        Easing: require('./transitions/Easing'),
        MultipleTransition: require('./transitions/MultipleTransition'),
        SnapTransition: require('./transitions/SnapTransition'),
        SpringTransition: require('./transitions/SpringTransition'),
        Transitionable: require('./transitions/Transitionable'),
        TransitionableTransform: require('./transitions/TransitionableTransform'),
        TweenTransition: require('./transitions/TweenTransition'),
        WallTransition: require('./transitions/WallTransition')
    },
    utilities: {
        KeyCodes: require('./utilities/KeyCodes'),
        Timer: require('./utilities/Timer'),
        Utility: require('./utilities/Utility')
    },
    views: {
        ContextualView: require('./views/ContextualView'),
        Deck: require('./views/Deck'),
        DrawerLayout: require('./views/DrawerLayout'),
        EdgeSwapper: require('./views/EdgeSwapper'),
        FlexibleLayout: require('./views/FlexibleLayout'),
        Flipper: require('./views/Flipper'),
        GridLayout: require('./views/GridLayout'),
        HeaderFooterLayout: require('./views/HeaderFooterLayout'),
        Lightbox: require('./views/Lightbox'),
        RenderController: require('./views/RenderController'),
        ScrollContainer: require('./views/ScrollContainer'),
        Scroller: require('./views/Scroller'),
        Scrollview: require('./views/Scrollview'),
        SequentialLayout: require('./views/SequentialLayout')
    },
    widgets: {
        NavigationBar: require('./widgets/NavigationBar'),
        Slider: require('./widgets/Slider'),
        TabBar: require('./widgets/TabBar'),
        ToggleButton: require('./widgets/ToggleButton'),
    }
};
},{"./core/Context":2,"./core/ElementAllocator":3,"./core/ElementOutput":4,"./core/Engine":5,"./core/Entity":6,"./core/EventEmitter":7,"./core/EventHandler":8,"./core/Group":9,"./core/Modifier":10,"./core/OptionsManager":11,"./core/RenderNode":12,"./core/Scene":13,"./core/SpecParser":14,"./core/Surface":15,"./core/Transform":16,"./core/View":17,"./core/ViewSequence":18,"./events/EventArbiter":19,"./events/EventFilter":20,"./events/EventMapper":21,"./inputs/Accumulator":22,"./inputs/DesktopEmulationMode":23,"./inputs/FastClick":24,"./inputs/GenericSync":25,"./inputs/MouseSync":26,"./inputs/PinchSync":27,"./inputs/RotateSync":28,"./inputs/ScaleSync":29,"./inputs/ScrollSync":30,"./inputs/TouchSync":31,"./inputs/TouchTracker":32,"./inputs/TwoFingerSync":33,"./math/Matrix":34,"./math/Quaternion":35,"./math/Random":36,"./math/Utilities":37,"./math/Vector":38,"./modifiers/Draggable":39,"./modifiers/Fader":40,"./modifiers/ModifierChain":41,"./modifiers/StateModifier":42,"./physics/PhysicsEngine":118,"./physics/bodies/Body":119,"./physics/bodies/Circle":120,"./physics/bodies/Particle":121,"./physics/bodies/Rectangle":122,"./physics/constraints/Collision":123,"./physics/constraints/Constraint":124,"./physics/constraints/Curve":125,"./physics/constraints/Distance":126,"./physics/constraints/Snap":127,"./physics/constraints/Surface":128,"./physics/constraints/Wall":129,"./physics/constraints/Walls":130,"./physics/forces/Drag":131,"./physics/forces/Force":132,"./physics/forces/Repulsion":133,"./physics/forces/RotationalDrag":134,"./physics/forces/RotationalSpring":135,"./physics/forces/Spring":136,"./physics/forces/VectorField":137,"./physics/integrators/SymplecticEuler":138,"./surfaces/CanvasSurface":139,"./surfaces/ContainerSurface":140,"./surfaces/FormContainerSurface":141,"./surfaces/ImageSurface":142,"./surfaces/InputSurface":143,"./surfaces/SubmitInputSurface":144,"./surfaces/TextareaSurface":145,"./surfaces/VideoSurface":146,"./transitions/CachedMap":147,"./transitions/Easing":148,"./transitions/MultipleTransition":149,"./transitions/SnapTransition":150,"./transitions/SpringTransition":151,"./transitions/Transitionable":152,"./transitions/TransitionableTransform":153,"./transitions/TweenTransition":154,"./transitions/WallTransition":155,"./utilities/KeyCodes":156,"./utilities/Timer":157,"./utilities/Utility":158,"./views/ContextualView":159,"./views/Deck":160,"./views/DrawerLayout":161,"./views/EdgeSwapper":162,"./views/FlexibleLayout":163,"./views/Flipper":164,"./views/GridLayout":165,"./views/HeaderFooterLayout":166,"./views/Lightbox":167,"./views/RenderController":168,"./views/ScrollContainer":169,"./views/Scroller":170,"./views/Scrollview":171,"./views/SequentialLayout":172,"./widgets/NavigationBar":173,"./widgets/Slider":174,"./widgets/TabBar":175,"./widgets/ToggleButton":176}],2:[function(require,module,exports){
var RenderNode = require('./RenderNode');
var EventHandler = require('./EventHandler');
var ElementAllocator = require('./ElementAllocator');
var Transform = require('./Transform');
var Transitionable = require('famous/transitions/Transitionable');
var _zeroZero = [
        0,
        0
    ];
var usePrefix = !('perspective' in document.documentElement.style);
function _getElementSize(element) {
    return [
        element.clientWidth,
        element.clientHeight
    ];
}
var _setPerspective = usePrefix ? function (element, perspective) {
        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
    } : function (element, perspective) {
        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
    };
function Context(container) {
    this.container = container;
    this._allocator = new ElementAllocator(container);
    this._node = new RenderNode();
    this._eventOutput = new EventHandler();
    this._size = _getElementSize(this.container);
    this._perspectiveState = new Transitionable(0);
    this._perspective = undefined;
    this._nodeContext = {
        allocator: this._allocator,
        transform: Transform.identity,
        opacity: 1,
        origin: _zeroZero,
        align: _zeroZero,
        size: this._size
    };
    this._eventOutput.on('resize', function () {
        this.setSize(_getElementSize(this.container));
    }.bind(this));
}
Context.prototype.getAllocator = function getAllocator() {
    return this._allocator;
};
Context.prototype.add = function add(obj) {
    return this._node.add(obj);
};
Context.prototype.migrate = function migrate(container) {
    if (container === this.container)
        return;
    this.container = container;
    this._allocator.migrate(container);
};
Context.prototype.getSize = function getSize() {
    return this._size;
};
Context.prototype.setSize = function setSize(size) {
    if (!size)
        size = _getElementSize(this.container);
    this._size[0] = size[0];
    this._size[1] = size[1];
};
Context.prototype.update = function update(contextParameters) {
    if (contextParameters) {
        if (contextParameters.transform)
            this._nodeContext.transform = contextParameters.transform;
        if (contextParameters.opacity)
            this._nodeContext.opacity = contextParameters.opacity;
        if (contextParameters.origin)
            this._nodeContext.origin = contextParameters.origin;
        if (contextParameters.align)
            this._nodeContext.align = contextParameters.align;
        if (contextParameters.size)
            this._nodeContext.size = contextParameters.size;
    }
    var perspective = this._perspectiveState.get();
    if (perspective !== this._perspective) {
        _setPerspective(this.container, perspective);
        this._perspective = perspective;
    }
    this._node.commit(this._nodeContext);
};
Context.prototype.getPerspective = function getPerspective() {
    return this._perspectiveState.get();
};
Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
    return this._perspectiveState.set(perspective, transition, callback);
};
Context.prototype.emit = function emit(type, event) {
    return this._eventOutput.emit(type, event);
};
Context.prototype.on = function on(type, handler) {
    return this._eventOutput.on(type, handler);
};
Context.prototype.removeListener = function removeListener(type, handler) {
    return this._eventOutput.removeListener(type, handler);
};
Context.prototype.pipe = function pipe(target) {
    return this._eventOutput.pipe(target);
};
Context.prototype.unpipe = function unpipe(target) {
    return this._eventOutput.unpipe(target);
};
module.exports = Context;
},{"./ElementAllocator":3,"./EventHandler":8,"./RenderNode":12,"./Transform":16,"famous/transitions/Transitionable":111}],3:[function(require,module,exports){
function ElementAllocator(container) {
    if (!container)
        container = document.createDocumentFragment();
    this.container = container;
    this.detachedNodes = {};
    this.nodeCount = 0;
}
ElementAllocator.prototype.migrate = function migrate(container) {
    var oldContainer = this.container;
    if (container === oldContainer)
        return;
    if (oldContainer instanceof DocumentFragment) {
        container.appendChild(oldContainer);
    } else {
        while (oldContainer.hasChildNodes()) {
            container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
        }
    }
    this.container = container;
};
ElementAllocator.prototype.allocate = function allocate(type) {
    type = type.toLowerCase();
    if (!(type in this.detachedNodes))
        this.detachedNodes[type] = [];
    var nodeStore = this.detachedNodes[type];
    var result;
    if (nodeStore.length > 0) {
        result = nodeStore.pop();
    } else {
        result = document.createElement(type);
        this.container.appendChild(result);
    }
    this.nodeCount++;
    return result;
};
ElementAllocator.prototype.deallocate = function deallocate(element) {
    var nodeType = element.nodeName.toLowerCase();
    var nodeStore = this.detachedNodes[nodeType];
    nodeStore.push(element);
    this.nodeCount--;
};
ElementAllocator.prototype.getNodeCount = function getNodeCount() {
    return this.nodeCount;
};
module.exports = ElementAllocator;
},{}],4:[function(require,module,exports){
var Entity = require('./Entity');
var EventHandler = require('./EventHandler');
var Transform = require('./Transform');
var usePrefix = !('transform' in document.documentElement.style);
var devicePixelRatio = window.devicePixelRatio || 1;
function ElementOutput(element) {
    this._matrix = null;
    this._opacity = 1;
    this._origin = null;
    this._size = null;
    this._eventOutput = new EventHandler();
    this._eventOutput.bindThis(this);
    this.eventForwarder = function eventForwarder(event) {
        this._eventOutput.emit(event.type, event);
    }.bind(this);
    this.id = Entity.register(this);
    this._element = null;
    this._sizeDirty = false;
    this._originDirty = false;
    this._transformDirty = false;
    this._invisible = false;
    if (element)
        this.attach(element);
}
ElementOutput.prototype.on = function on(type, fn) {
    if (this._element)
        this._element.addEventListener(type, this.eventForwarder);
    this._eventOutput.on(type, fn);
};
ElementOutput.prototype.removeListener = function removeListener(type, fn) {
    this._eventOutput.removeListener(type, fn);
};
ElementOutput.prototype.emit = function emit(type, event) {
    if (event && !event.origin)
        event.origin = this;
    var handled = this._eventOutput.emit(type, event);
    if (handled && event && event.stopPropagation)
        event.stopPropagation();
    return handled;
};
ElementOutput.prototype.pipe = function pipe(target) {
    return this._eventOutput.pipe(target);
};
ElementOutput.prototype.unpipe = function unpipe(target) {
    return this._eventOutput.unpipe(target);
};
ElementOutput.prototype.render = function render() {
    return this.id;
};
function _addEventListeners(target) {
    for (var i in this._eventOutput.listeners) {
        target.addEventListener(i, this.eventForwarder);
    }
}
function _removeEventListeners(target) {
    for (var i in this._eventOutput.listeners) {
        target.removeEventListener(i, this.eventForwarder);
    }
}
function _formatCSSTransform(m) {
    m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
    m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;
    var result = 'matrix3d(';
    for (var i = 0; i < 15; i++) {
        result += m[i] < 0.000001 && m[i] > -0.000001 ? '0,' : m[i] + ',';
    }
    result += m[15] + ')';
    return result;
}
var _setMatrix;
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    _setMatrix = function (element, matrix) {
        element.style.zIndex = matrix[14] * 1000000 | 0;
        element.style.transform = _formatCSSTransform(matrix);
    };
} else if (usePrefix) {
    _setMatrix = function (element, matrix) {
        element.style.webkitTransform = _formatCSSTransform(matrix);
    };
} else {
    _setMatrix = function (element, matrix) {
        element.style.transform = _formatCSSTransform(matrix);
    };
}
function _formatCSSOrigin(origin) {
    return 100 * origin[0] + '% ' + 100 * origin[1] + '%';
}
var _setOrigin = usePrefix ? function (element, origin) {
        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
    } : function (element, origin) {
        element.style.transformOrigin = _formatCSSOrigin(origin);
    };
var _setInvisible = usePrefix ? function (element) {
        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
        element.style.opacity = 0;
    } : function (element) {
        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
        element.style.opacity = 0;
    };
function _xyNotEquals(a, b) {
    return a && b ? a[0] !== b[0] || a[1] !== b[1] : a !== b;
}
ElementOutput.prototype.commit = function commit(context) {
    var target = this._element;
    if (!target)
        return;
    var matrix = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;
    if (!matrix && this._matrix) {
        this._matrix = null;
        this._opacity = 0;
        _setInvisible(target);
        return;
    }
    if (_xyNotEquals(this._origin, origin))
        this._originDirty = true;
    if (Transform.notEquals(this._matrix, matrix))
        this._transformDirty = true;
    if (this._invisible) {
        this._invisible = false;
        this._element.style.display = '';
    }
    if (this._opacity !== opacity) {
        this._opacity = opacity;
        target.style.opacity = opacity >= 1 ? '0.999999' : opacity;
    }
    if (this._transformDirty || this._originDirty || this._sizeDirty) {
        if (this._sizeDirty) {
            if (!this._size)
                this._size = [
                    0,
                    0
                ];
            this._size[0] = size[0];
            this._size[1] = size[1];
            this._sizeDirty = false;
        }
        if (this._originDirty) {
            if (origin) {
                if (!this._origin)
                    this._origin = [
                        0,
                        0
                    ];
                this._origin[0] = origin[0];
                this._origin[1] = origin[1];
            } else
                this._origin = null;
            _setOrigin(target, this._origin);
            this._originDirty = false;
        }
        if (!matrix)
            matrix = Transform.identity;
        this._matrix = matrix;
        var aaMatrix = this._size ? Transform.thenMove(matrix, [
                -this._size[0] * origin[0],
                -this._size[1] * origin[1],
                0
            ]) : matrix;
        _setMatrix(target, aaMatrix);
        this._transformDirty = false;
    }
};
ElementOutput.prototype.cleanup = function cleanup() {
    if (this._element) {
        this._invisible = true;
        this._element.style.display = 'none';
    }
};
ElementOutput.prototype.attach = function attach(target) {
    this._element = target;
    _addEventListeners.call(this, target);
};
ElementOutput.prototype.detach = function detach() {
    var target = this._element;
    if (target) {
        _removeEventListeners.call(this, target);
        if (this._invisible) {
            this._invisible = false;
            this._element.style.display = '';
        }
    }
    this._element = null;
    return target;
};
module.exports = ElementOutput;
},{"./Entity":6,"./EventHandler":8,"./Transform":16}],5:[function(require,module,exports){
var Context = require('./Context');
var EventHandler = require('./EventHandler');
var OptionsManager = require('./OptionsManager');
var Engine = {};
var contexts = [];
var nextTickQueue = [];
var deferQueue = [];
var lastTime = Date.now();
var frameTime;
var frameTimeLimit;
var loopEnabled = true;
var eventForwarders = {};
var eventHandler = new EventHandler();
var options = {
        containerType: 'div',
        containerClass: 'famous-container',
        fpsCap: undefined,
        runLoop: true,
        appMode: true
    };
var optionsManager = new OptionsManager(options);
var MAX_DEFER_FRAME_TIME = 10;
Engine.step = function step() {
    var currentTime = Date.now();
    if (frameTimeLimit && currentTime - lastTime < frameTimeLimit)
        return;
    var i = 0;
    frameTime = currentTime - lastTime;
    lastTime = currentTime;
    eventHandler.emit('prerender');
    for (i = 0; i < nextTickQueue.length; i++)
        nextTickQueue[i].call(this);
    nextTickQueue.splice(0);
    while (deferQueue.length && Date.now() - currentTime < MAX_DEFER_FRAME_TIME) {
        deferQueue.shift().call(this);
    }
    for (i = 0; i < contexts.length; i++)
        contexts[i].update();
    eventHandler.emit('postrender');
};
function loop() {
    if (options.runLoop) {
        Engine.step();
        window.requestAnimationFrame(loop);
    } else
        loopEnabled = false;
}
window.requestAnimationFrame(loop);
function handleResize(event) {
    for (var i = 0; i < contexts.length; i++) {
        contexts[i].emit('resize');
    }
    eventHandler.emit('resize');
}
window.addEventListener('resize', handleResize, false);
handleResize();
function initialize() {
    window.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, true);
    document.body.classList.add('famous-root');
    document.documentElement.classList.add('famous-root');
}
var initialized = false;
Engine.pipe = function pipe(target) {
    if (target.subscribe instanceof Function)
        return target.subscribe(Engine);
    else
        return eventHandler.pipe(target);
};
Engine.unpipe = function unpipe(target) {
    if (target.unsubscribe instanceof Function)
        return target.unsubscribe(Engine);
    else
        return eventHandler.unpipe(target);
};
Engine.on = function on(type, handler) {
    if (!(type in eventForwarders)) {
        eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
        if (document.body) {
            document.body.addEventListener(type, eventForwarders[type]);
        } else {
            Engine.nextTick(function (type, forwarder) {
                document.body.addEventListener(type, forwarder);
            }.bind(this, type, eventForwarders[type]));
        }
    }
    return eventHandler.on(type, handler);
};
Engine.emit = function emit(type, event) {
    return eventHandler.emit(type, event);
};
Engine.removeListener = function removeListener(type, handler) {
    return eventHandler.removeListener(type, handler);
};
Engine.getFPS = function getFPS() {
    return 1000 / frameTime;
};
Engine.setFPSCap = function setFPSCap(fps) {
    frameTimeLimit = Math.floor(1000 / fps);
};
Engine.getOptions = function getOptions(key) {
    return optionsManager.getOptions(key);
};
Engine.setOptions = function setOptions(options) {
    return optionsManager.setOptions.apply(optionsManager, arguments);
};
Engine.createContext = function createContext(el) {
    if (!initialized && options.appMode)
        Engine.nextTick(initialize);
    var needMountContainer = false;
    if (!el) {
        el = document.createElement(options.containerType);
        el.classList.add(options.containerClass);
        needMountContainer = true;
    }
    var context = new Context(el);
    Engine.registerContext(context);
    if (needMountContainer) {
        Engine.nextTick(function (context, el) {
            document.body.appendChild(el);
            context.emit('resize');
        }.bind(this, context, el));
    }
    return context;
};
Engine.registerContext = function registerContext(context) {
    contexts.push(context);
    return context;
};
Engine.getContexts = function getContexts() {
    return contexts;
};
Engine.deregisterContext = function deregisterContext(context) {
    var i = contexts.indexOf(context);
    if (i >= 0)
        contexts.splice(i, 1);
};
Engine.nextTick = function nextTick(fn) {
    nextTickQueue.push(fn);
};
Engine.defer = function defer(fn) {
    deferQueue.push(fn);
};
optionsManager.on('change', function (data) {
    if (data.id === 'fpsCap')
        Engine.setFPSCap(data.value);
    else if (data.id === 'runLoop') {
        if (!loopEnabled && data.value) {
            loopEnabled = true;
            window.requestAnimationFrame(loop);
        }
    }
});
module.exports = Engine;
},{"./Context":2,"./EventHandler":8,"./OptionsManager":11}],6:[function(require,module,exports){
var entities = [];
function get(id) {
    return entities[id];
}
function set(id, entity) {
    entities[id] = entity;
}
function register(entity) {
    var id = entities.length;
    set(id, entity);
    return id;
}
function unregister(id) {
    set(id, null);
}
module.exports = {
    register: register,
    unregister: unregister,
    get: get,
    set: set
};
},{}],7:[function(require,module,exports){
function EventEmitter() {
    this.listeners = {};
    this._owner = this;
}
EventEmitter.prototype.emit = function emit(type, event) {
    var handlers = this.listeners[type];
    if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
            handlers[i].call(this._owner, event);
        }
    }
    return this;
};
EventEmitter.prototype.on = function on(type, handler) {
    if (!(type in this.listeners))
        this.listeners[type] = [];
    var index = this.listeners[type].indexOf(handler);
    if (index < 0)
        this.listeners[type].push(handler);
    return this;
};
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prototype.removeListener = function removeListener(type, handler) {
    var listener = this.listeners[type];
    if (listener !== undefined) {
        var index = listener.indexOf(handler);
        if (index >= 0)
            listener.splice(index, 1);
    }
    return this;
};
EventEmitter.prototype.bindThis = function bindThis(owner) {
    this._owner = owner;
};
module.exports = EventEmitter;
},{}],8:[function(require,module,exports){
var EventEmitter = require('./EventEmitter');
function EventHandler() {
    EventEmitter.apply(this, arguments);
    this.downstream = [];
    this.downstreamFn = [];
    this.upstream = [];
    this.upstreamListeners = {};
}
EventHandler.prototype = Object.create(EventEmitter.prototype);
EventHandler.prototype.constructor = EventHandler;
EventHandler.setInputHandler = function setInputHandler(object, handler) {
    object.trigger = handler.trigger.bind(handler);
    if (handler.subscribe && handler.unsubscribe) {
        object.subscribe = handler.subscribe.bind(handler);
        object.unsubscribe = handler.unsubscribe.bind(handler);
    }
};
EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
    if (handler instanceof EventHandler)
        handler.bindThis(object);
    object.pipe = handler.pipe.bind(handler);
    object.unpipe = handler.unpipe.bind(handler);
    object.on = handler.on.bind(handler);
    object.addListener = object.on;
    object.removeListener = handler.removeListener.bind(handler);
};
EventHandler.prototype.emit = function emit(type, event) {
    EventEmitter.prototype.emit.apply(this, arguments);
    var i = 0;
    for (i = 0; i < this.downstream.length; i++) {
        if (this.downstream[i].trigger)
            this.downstream[i].trigger(type, event);
    }
    for (i = 0; i < this.downstreamFn.length; i++) {
        this.downstreamFn[i](type, event);
    }
    return this;
};
EventHandler.prototype.trigger = EventHandler.prototype.emit;
EventHandler.prototype.pipe = function pipe(target) {
    if (target.subscribe instanceof Function)
        return target.subscribe(this);
    var downstreamCtx = target instanceof Function ? this.downstreamFn : this.downstream;
    var index = downstreamCtx.indexOf(target);
    if (index < 0)
        downstreamCtx.push(target);
    if (target instanceof Function)
        target('pipe', null);
    else if (target.trigger)
        target.trigger('pipe', null);
    return target;
};
EventHandler.prototype.unpipe = function unpipe(target) {
    if (target.unsubscribe instanceof Function)
        return target.unsubscribe(this);
    var downstreamCtx = target instanceof Function ? this.downstreamFn : this.downstream;
    var index = downstreamCtx.indexOf(target);
    if (index >= 0) {
        downstreamCtx.splice(index, 1);
        if (target instanceof Function)
            target('unpipe', null);
        else if (target.trigger)
            target.trigger('unpipe', null);
        return target;
    } else
        return false;
};
EventHandler.prototype.on = function on(type, handler) {
    EventEmitter.prototype.on.apply(this, arguments);
    if (!(type in this.upstreamListeners)) {
        var upstreamListener = this.trigger.bind(this, type);
        this.upstreamListeners[type] = upstreamListener;
        for (var i = 0; i < this.upstream.length; i++) {
            this.upstream[i].on(type, upstreamListener);
        }
    }
    return this;
};
EventHandler.prototype.addListener = EventHandler.prototype.on;
EventHandler.prototype.subscribe = function subscribe(source) {
    var index = this.upstream.indexOf(source);
    if (index < 0) {
        this.upstream.push(source);
        for (var type in this.upstreamListeners) {
            source.on(type, this.upstreamListeners[type]);
        }
    }
    return this;
};
EventHandler.prototype.unsubscribe = function unsubscribe(source) {
    var index = this.upstream.indexOf(source);
    if (index >= 0) {
        this.upstream.splice(index, 1);
        for (var type in this.upstreamListeners) {
            source.removeListener(type, this.upstreamListeners[type]);
        }
    }
    return this;
};
module.exports = EventHandler;
},{"./EventEmitter":7}],9:[function(require,module,exports){
var Context = require('./Context');
var Transform = require('./Transform');
var Surface = require('./Surface');
function Group(options) {
    Surface.call(this, options);
    this._shouldRecalculateSize = false;
    this._container = document.createDocumentFragment();
    this.context = new Context(this._container);
    this.setContent(this._container);
    this._groupSize = [
        undefined,
        undefined
    ];
}
Group.SIZE_ZERO = [
    0,
    0
];
Group.prototype = Object.create(Surface.prototype);
Group.prototype.elementType = 'div';
Group.prototype.elementClass = 'famous-group';
Group.prototype.add = function add() {
    return this.context.add.apply(this.context, arguments);
};
Group.prototype.render = function render() {
    return Surface.prototype.render.call(this);
};
Group.prototype.deploy = function deploy(target) {
    this.context.migrate(target);
};
Group.prototype.recall = function recall(target) {
    this._container = document.createDocumentFragment();
    this.context.migrate(this._container);
};
Group.prototype.commit = function commit(context) {
    var transform = context.transform;
    var origin = context.origin;
    var opacity = context.opacity;
    var size = context.size;
    var result = Surface.prototype.commit.call(this, {
            allocator: context.allocator,
            transform: Transform.thenMove(transform, [
                -origin[0] * size[0],
                -origin[1] * size[1],
                0
            ]),
            opacity: opacity,
            origin: origin,
            size: Group.SIZE_ZERO
        });
    if (size[0] !== this._groupSize[0] || size[1] !== this._groupSize[1]) {
        this._groupSize[0] = size[0];
        this._groupSize[1] = size[1];
        this.context.setSize(size);
    }
    this.context.update({
        transform: Transform.translate(-origin[0] * size[0], -origin[1] * size[1], 0),
        origin: origin,
        size: size
    });
    return result;
};
module.exports = Group;
},{"./Context":2,"./Surface":15,"./Transform":16}],10:[function(require,module,exports){
var Transform = require('./Transform');
var Transitionable = require('famous/transitions/Transitionable');
var TransitionableTransform = require('famous/transitions/TransitionableTransform');
function Modifier(options) {
    this._transformGetter = null;
    this._opacityGetter = null;
    this._originGetter = null;
    this._alignGetter = null;
    this._sizeGetter = null;
    this._proportionGetter = null;
    this._legacyStates = {};
    this._output = {
        transform: Transform.identity,
        opacity: 1,
        origin: null,
        align: null,
        size: null,
        proportions: null,
        target: null
    };
    if (options) {
        if (options.transform)
            this.transformFrom(options.transform);
        if (options.opacity !== undefined)
            this.opacityFrom(options.opacity);
        if (options.origin)
            this.originFrom(options.origin);
        if (options.align)
            this.alignFrom(options.align);
        if (options.size)
            this.sizeFrom(options.size);
        if (options.proportions)
            this.proportionsFrom(options.proportions);
    }
}
Modifier.prototype.transformFrom = function transformFrom(transform) {
    if (transform instanceof Function)
        this._transformGetter = transform;
    else if (transform instanceof Object && transform.get)
        this._transformGetter = transform.get.bind(transform);
    else {
        this._transformGetter = null;
        this._output.transform = transform;
    }
    return this;
};
Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
    if (opacity instanceof Function)
        this._opacityGetter = opacity;
    else if (opacity instanceof Object && opacity.get)
        this._opacityGetter = opacity.get.bind(opacity);
    else {
        this._opacityGetter = null;
        this._output.opacity = opacity;
    }
    return this;
};
Modifier.prototype.originFrom = function originFrom(origin) {
    if (origin instanceof Function)
        this._originGetter = origin;
    else if (origin instanceof Object && origin.get)
        this._originGetter = origin.get.bind(origin);
    else {
        this._originGetter = null;
        this._output.origin = origin;
    }
    return this;
};
Modifier.prototype.alignFrom = function alignFrom(align) {
    if (align instanceof Function)
        this._alignGetter = align;
    else if (align instanceof Object && align.get)
        this._alignGetter = align.get.bind(align);
    else {
        this._alignGetter = null;
        this._output.align = align;
    }
    return this;
};
Modifier.prototype.sizeFrom = function sizeFrom(size) {
    if (size instanceof Function)
        this._sizeGetter = size;
    else if (size instanceof Object && size.get)
        this._sizeGetter = size.get.bind(size);
    else {
        this._sizeGetter = null;
        this._output.size = size;
    }
    return this;
};
Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
    if (proportions instanceof Function)
        this._proportionGetter = proportions;
    else if (proportions instanceof Object && proportions.get)
        this._proportionGetter = proportions.get.bind(proportions);
    else {
        this._proportionGetter = null;
        this._output.proportions = proportions;
    }
    return this;
};
Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
    if (transition || this._legacyStates.transform) {
        if (!this._legacyStates.transform) {
            this._legacyStates.transform = new TransitionableTransform(this._output.transform);
        }
        if (!this._transformGetter)
            this.transformFrom(this._legacyStates.transform);
        this._legacyStates.transform.set(transform, transition, callback);
        return this;
    } else
        return this.transformFrom(transform);
};
Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
    if (transition || this._legacyStates.opacity) {
        if (!this._legacyStates.opacity) {
            this._legacyStates.opacity = new Transitionable(this._output.opacity);
        }
        if (!this._opacityGetter)
            this.opacityFrom(this._legacyStates.opacity);
        return this._legacyStates.opacity.set(opacity, transition, callback);
    } else
        return this.opacityFrom(opacity);
};
Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
    if (transition || this._legacyStates.origin) {
        if (!this._legacyStates.origin) {
            this._legacyStates.origin = new Transitionable(this._output.origin || [
                0,
                0
            ]);
        }
        if (!this._originGetter)
            this.originFrom(this._legacyStates.origin);
        this._legacyStates.origin.set(origin, transition, callback);
        return this;
    } else
        return this.originFrom(origin);
};
Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
    if (transition || this._legacyStates.align) {
        if (!this._legacyStates.align) {
            this._legacyStates.align = new Transitionable(this._output.align || [
                0,
                0
            ]);
        }
        if (!this._alignGetter)
            this.alignFrom(this._legacyStates.align);
        this._legacyStates.align.set(align, transition, callback);
        return this;
    } else
        return this.alignFrom(align);
};
Modifier.prototype.setSize = function setSize(size, transition, callback) {
    if (size && (transition || this._legacyStates.size)) {
        if (!this._legacyStates.size) {
            this._legacyStates.size = new Transitionable(this._output.size || [
                0,
                0
            ]);
        }
        if (!this._sizeGetter)
            this.sizeFrom(this._legacyStates.size);
        this._legacyStates.size.set(size, transition, callback);
        return this;
    } else
        return this.sizeFrom(size);
};
Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
    if (proportions && (transition || this._legacyStates.proportions)) {
        if (!this._legacyStates.proportions) {
            this._legacyStates.proportions = new Transitionable(this._output.proportions || [
                0,
                0
            ]);
        }
        if (!this._proportionGetter)
            this.proportionsFrom(this._legacyStates.proportions);
        this._legacyStates.proportions.set(proportions, transition, callback);
        return this;
    } else
        return this.proportionsFrom(proportions);
};
Modifier.prototype.halt = function halt() {
    if (this._legacyStates.transform)
        this._legacyStates.transform.halt();
    if (this._legacyStates.opacity)
        this._legacyStates.opacity.halt();
    if (this._legacyStates.origin)
        this._legacyStates.origin.halt();
    if (this._legacyStates.align)
        this._legacyStates.align.halt();
    if (this._legacyStates.size)
        this._legacyStates.size.halt();
    if (this._legacyStates.proportions)
        this._legacyStates.proportions.halt();
    this._transformGetter = null;
    this._opacityGetter = null;
    this._originGetter = null;
    this._alignGetter = null;
    this._sizeGetter = null;
    this._proportionGetter = null;
};
Modifier.prototype.getTransform = function getTransform() {
    return this._transformGetter();
};
Modifier.prototype.getFinalTransform = function getFinalTransform() {
    return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
};
Modifier.prototype.getOpacity = function getOpacity() {
    return this._opacityGetter();
};
Modifier.prototype.getOrigin = function getOrigin() {
    return this._originGetter();
};
Modifier.prototype.getAlign = function getAlign() {
    return this._alignGetter();
};
Modifier.prototype.getSize = function getSize() {
    return this._sizeGetter ? this._sizeGetter() : this._output.size;
};
Modifier.prototype.getProportions = function getProportions() {
    return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
};
function _update() {
    if (this._transformGetter)
        this._output.transform = this._transformGetter();
    if (this._opacityGetter)
        this._output.opacity = this._opacityGetter();
    if (this._originGetter)
        this._output.origin = this._originGetter();
    if (this._alignGetter)
        this._output.align = this._alignGetter();
    if (this._sizeGetter)
        this._output.size = this._sizeGetter();
    if (this._proportionGetter)
        this._output.proportions = this._proportionGetter();
}
Modifier.prototype.modify = function modify(target) {
    _update.call(this);
    this._output.target = target;
    return this._output;
};
module.exports = Modifier;
},{"./Transform":16,"famous/transitions/Transitionable":111,"famous/transitions/TransitionableTransform":112}],11:[function(require,module,exports){
var EventHandler = require('./EventHandler');
function OptionsManager(value) {
    this._value = value;
    this.eventOutput = null;
}
OptionsManager.patch = function patchObject(source, data) {
    var manager = new OptionsManager(source);
    for (var i = 1; i < arguments.length; i++)
        manager.patch(arguments[i]);
    return source;
};
function _createEventOutput() {
    this.eventOutput = new EventHandler();
    this.eventOutput.bindThis(this);
    EventHandler.setOutputHandler(this, this.eventOutput);
}
OptionsManager.prototype.patch = function patch() {
    var myState = this._value;
    for (var i = 0; i < arguments.length; i++) {
        var data = arguments[i];
        for (var k in data) {
            if (k in myState && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
                if (!myState.hasOwnProperty(k))
                    myState[k] = Object.create(myState[k]);
                this.key(k).patch(data[k]);
                if (this.eventOutput)
                    this.eventOutput.emit('change', {
                        id: k,
                        value: this.key(k).value()
                    });
            } else
                this.set(k, data[k]);
        }
    }
    return this;
};
OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;
OptionsManager.prototype.key = function key(identifier) {
    var result = new OptionsManager(this._value[identifier]);
    if (!(result._value instanceof Object) || result._value instanceof Array)
        result._value = {};
    return result;
};
OptionsManager.prototype.get = function get(key) {
    return key ? this._value[key] : this._value;
};
OptionsManager.prototype.getOptions = OptionsManager.prototype.get;
OptionsManager.prototype.set = function set(key, value) {
    var originalValue = this.get(key);
    this._value[key] = value;
    if (this.eventOutput && value !== originalValue)
        this.eventOutput.emit('change', {
            id: key,
            value: value
        });
    return this;
};
OptionsManager.prototype.on = function on() {
    _createEventOutput.call(this);
    return this.on.apply(this, arguments);
};
OptionsManager.prototype.removeListener = function removeListener() {
    _createEventOutput.call(this);
    return this.removeListener.apply(this, arguments);
};
OptionsManager.prototype.pipe = function pipe() {
    _createEventOutput.call(this);
    return this.pipe.apply(this, arguments);
};
OptionsManager.prototype.unpipe = function unpipe() {
    _createEventOutput.call(this);
    return this.unpipe.apply(this, arguments);
};
module.exports = OptionsManager;
},{"./EventHandler":8}],12:[function(require,module,exports){
var Entity = require('./Entity');
var SpecParser = require('./SpecParser');
function RenderNode(object) {
    this._object = null;
    this._child = null;
    this._hasMultipleChildren = false;
    this._isRenderable = false;
    this._isModifier = false;
    this._resultCache = {};
    this._prevResults = {};
    this._childResult = null;
    if (object)
        this.set(object);
}
RenderNode.prototype.add = function add(child) {
    var childNode = child instanceof RenderNode ? child : new RenderNode(child);
    if (this._child instanceof Array)
        this._child.push(childNode);
    else if (this._child) {
        this._child = [
            this._child,
            childNode
        ];
        this._hasMultipleChildren = true;
        this._childResult = [];
    } else
        this._child = childNode;
    return childNode;
};
RenderNode.prototype.get = function get() {
    return this._object || (this._hasMultipleChildren ? null : this._child ? this._child.get() : null);
};
RenderNode.prototype.set = function set(child) {
    this._childResult = null;
    this._hasMultipleChildren = false;
    this._isRenderable = child.render ? true : false;
    this._isModifier = child.modify ? true : false;
    this._object = child;
    this._child = null;
    if (child instanceof RenderNode)
        return child;
    else
        return this;
};
RenderNode.prototype.getSize = function getSize() {
    var result = null;
    var target = this.get();
    if (target && target.getSize)
        result = target.getSize();
    if (!result && this._child && this._child.getSize)
        result = this._child.getSize();
    return result;
};
function _applyCommit(spec, context, cacheStorage) {
    var result = SpecParser.parse(spec, context);
    var keys = Object.keys(result);
    for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        var childNode = Entity.get(id);
        var commitParams = result[id];
        commitParams.allocator = context.allocator;
        var commitResult = childNode.commit(commitParams);
        if (commitResult)
            _applyCommit(commitResult, context, cacheStorage);
        else
            cacheStorage[id] = commitParams;
    }
}
RenderNode.prototype.commit = function commit(context) {
    var prevKeys = Object.keys(this._prevResults);
    for (var i = 0; i < prevKeys.length; i++) {
        var id = prevKeys[i];
        if (this._resultCache[id] === undefined) {
            var object = Entity.get(id);
            if (object.cleanup)
                object.cleanup(context.allocator);
        }
    }
    this._prevResults = this._resultCache;
    this._resultCache = {};
    _applyCommit(this.render(), context, this._resultCache);
};
RenderNode.prototype.render = function render() {
    if (this._isRenderable)
        return this._object.render();
    var result = null;
    if (this._hasMultipleChildren) {
        result = this._childResult;
        var children = this._child;
        for (var i = 0; i < children.length; i++) {
            result[i] = children[i].render();
        }
    } else if (this._child)
        result = this._child.render();
    return this._isModifier ? this._object.modify(result) : result;
};
module.exports = RenderNode;
},{"./Entity":6,"./SpecParser":14}],13:[function(require,module,exports){
var Transform = require('./Transform');
var Modifier = require('./Modifier');
var RenderNode = require('./RenderNode');
function Scene(definition) {
    this.id = null;
    this._objects = null;
    this.node = new RenderNode();
    this._definition = null;
    if (definition)
        this.load(definition);
}
var _MATRIX_GENERATORS = {
        'translate': Transform.translate,
        'rotate': Transform.rotate,
        'rotateX': Transform.rotateX,
        'rotateY': Transform.rotateY,
        'rotateZ': Transform.rotateZ,
        'rotateAxis': Transform.rotateAxis,
        'scale': Transform.scale,
        'skew': Transform.skew,
        'matrix3d': function () {
            return arguments;
        }
    };
Scene.prototype.create = function create() {
    return new Scene(this._definition);
};
function _resolveTransformMatrix(matrixDefinition) {
    for (var type in _MATRIX_GENERATORS) {
        if (type in matrixDefinition) {
            var args = matrixDefinition[type];
            if (!(args instanceof Array))
                args = [args];
            return _MATRIX_GENERATORS[type].apply(this, args);
        }
    }
}
function _parseTransform(definition) {
    var transformDefinition = definition.transform;
    var opacity = definition.opacity;
    var origin = definition.origin;
    var align = definition.align;
    var size = definition.size;
    var transform = Transform.identity;
    if (transformDefinition instanceof Array) {
        if (transformDefinition.length === 16 && typeof transformDefinition[0] === 'number') {
            transform = transformDefinition;
        } else {
            for (var i = 0; i < transformDefinition.length; i++) {
                transform = Transform.multiply(transform, _resolveTransformMatrix(transformDefinition[i]));
            }
        }
    } else if (transformDefinition instanceof Function) {
        transform = transformDefinition;
    } else if (transformDefinition instanceof Object) {
        transform = _resolveTransformMatrix(transformDefinition);
    }
    var result = new Modifier({
            transform: transform,
            opacity: opacity,
            origin: origin,
            align: align,
            size: size
        });
    return result;
}
function _parseArray(definition) {
    var result = new RenderNode();
    for (var i = 0; i < definition.length; i++) {
        var obj = _parse.call(this, definition[i]);
        if (obj)
            result.add(obj);
    }
    return result;
}
function _parse(definition) {
    var result;
    var id;
    if (definition instanceof Array) {
        result = _parseArray.call(this, definition);
    } else {
        id = this._objects.length;
        if (definition.render && definition.render instanceof Function) {
            result = definition;
        } else if (definition.target) {
            var targetObj = _parse.call(this, definition.target);
            var obj = _parseTransform.call(this, definition);
            result = new RenderNode(obj);
            result.add(targetObj);
            if (definition.id)
                this.id[definition.id] = obj;
        } else if (definition.id) {
            result = new RenderNode();
            this.id[definition.id] = result;
        }
    }
    this._objects[id] = result;
    return result;
}
Scene.prototype.load = function load(definition) {
    this._definition = definition;
    this.id = {};
    this._objects = [];
    this.node.set(_parse.call(this, definition));
};
Scene.prototype.add = function add() {
    return this.node.add.apply(this.node, arguments);
};
Scene.prototype.render = function render() {
    return this.node.render.apply(this.node, arguments);
};
module.exports = Scene;
},{"./Modifier":10,"./RenderNode":12,"./Transform":16}],14:[function(require,module,exports){
var Transform = require('./Transform');
function SpecParser() {
    this.result = {};
}
SpecParser._instance = new SpecParser();
SpecParser.parse = function parse(spec, context) {
    return SpecParser._instance.parse(spec, context);
};
SpecParser.prototype.parse = function parse(spec, context) {
    this.reset();
    this._parseSpec(spec, context, Transform.identity);
    return this.result;
};
SpecParser.prototype.reset = function reset() {
    this.result = {};
};
function _vecInContext(v, m) {
    return [
        v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
        v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
        v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
    ];
}
var _zeroZero = [
        0,
        0
    ];
SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
    var id;
    var target;
    var transform;
    var opacity;
    var origin;
    var align;
    var size;
    if (typeof spec === 'number') {
        id = spec;
        transform = parentContext.transform;
        align = parentContext.align || _zeroZero;
        if (parentContext.size && align && (align[0] || align[1])) {
            var alignAdjust = [
                    align[0] * parentContext.size[0],
                    align[1] * parentContext.size[1],
                    0
                ];
            transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
        }
        this.result[id] = {
            transform: transform,
            opacity: parentContext.opacity,
            origin: parentContext.origin || _zeroZero,
            align: parentContext.align || _zeroZero,
            size: parentContext.size
        };
    } else if (!spec) {
        return;
    } else if (spec instanceof Array) {
        for (var i = 0; i < spec.length; i++) {
            this._parseSpec(spec[i], parentContext, sizeContext);
        }
    } else {
        target = spec.target;
        transform = parentContext.transform;
        opacity = parentContext.opacity;
        origin = parentContext.origin;
        align = parentContext.align;
        size = parentContext.size;
        var nextSizeContext = sizeContext;
        if (spec.opacity !== undefined)
            opacity = parentContext.opacity * spec.opacity;
        if (spec.transform)
            transform = Transform.multiply(parentContext.transform, spec.transform);
        if (spec.origin) {
            origin = spec.origin;
            nextSizeContext = parentContext.transform;
        }
        if (spec.align)
            align = spec.align;
        if (spec.size || spec.proportions) {
            var parentSize = size;
            size = [
                size[0],
                size[1]
            ];
            if (spec.size) {
                if (spec.size[0] !== undefined)
                    size[0] = spec.size[0];
                if (spec.size[1] !== undefined)
                    size[1] = spec.size[1];
            }
            if (spec.proportions) {
                if (spec.proportions[0] !== undefined)
                    size[0] = size[0] * spec.proportions[0];
                if (spec.proportions[1] !== undefined)
                    size[1] = size[1] * spec.proportions[1];
            }
            if (parentSize) {
                if (align && (align[0] || align[1]))
                    transform = Transform.thenMove(transform, _vecInContext([
                        align[0] * parentSize[0],
                        align[1] * parentSize[1],
                        0
                    ], sizeContext));
                if (origin && (origin[0] || origin[1]))
                    transform = Transform.moveThen([
                        -origin[0] * size[0],
                        -origin[1] * size[1],
                        0
                    ], transform);
            }
            nextSizeContext = parentContext.transform;
            origin = null;
            align = null;
        }
        this._parseSpec(target, {
            transform: transform,
            opacity: opacity,
            origin: origin,
            align: align,
            size: size
        }, nextSizeContext);
    }
};
module.exports = SpecParser;
},{"./Transform":16}],15:[function(require,module,exports){
var ElementOutput = require('./ElementOutput');
function Surface(options) {
    ElementOutput.call(this);
    this.options = {};
    this.properties = {};
    this.attributes = {};
    this.content = '';
    this.classList = [];
    this.size = null;
    this._classesDirty = true;
    this._stylesDirty = true;
    this._attributesDirty = true;
    this._sizeDirty = true;
    this._contentDirty = true;
    this._trueSizeCheck = true;
    this._dirtyClasses = [];
    if (options)
        this.setOptions(options);
    this._currentTarget = null;
}
Surface.prototype = Object.create(ElementOutput.prototype);
Surface.prototype.constructor = Surface;
Surface.prototype.elementType = 'div';
Surface.prototype.elementClass = 'famous-surface';
Surface.prototype.setAttributes = function setAttributes(attributes) {
    for (var n in attributes) {
        if (n === 'style')
            throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
        this.attributes[n] = attributes[n];
    }
    this._attributesDirty = true;
};
Surface.prototype.getAttributes = function getAttributes() {
    return this.attributes;
};
Surface.prototype.setProperties = function setProperties(properties) {
    for (var n in properties) {
        this.properties[n] = properties[n];
    }
    this._stylesDirty = true;
    return this;
};
Surface.prototype.getProperties = function getProperties() {
    return this.properties;
};
Surface.prototype.addClass = function addClass(className) {
    if (this.classList.indexOf(className) < 0) {
        this.classList.push(className);
        this._classesDirty = true;
    }
    return this;
};
Surface.prototype.removeClass = function removeClass(className) {
    var i = this.classList.indexOf(className);
    if (i >= 0) {
        this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
        this._classesDirty = true;
    }
    return this;
};
Surface.prototype.toggleClass = function toggleClass(className) {
    var i = this.classList.indexOf(className);
    if (i >= 0) {
        this.removeClass(className);
    } else {
        this.addClass(className);
    }
    return this;
};
Surface.prototype.setClasses = function setClasses(classList) {
    var i = 0;
    var removal = [];
    for (i = 0; i < this.classList.length; i++) {
        if (classList.indexOf(this.classList[i]) < 0)
            removal.push(this.classList[i]);
    }
    for (i = 0; i < removal.length; i++)
        this.removeClass(removal[i]);
    for (i = 0; i < classList.length; i++)
        this.addClass(classList[i]);
    return this;
};
Surface.prototype.getClassList = function getClassList() {
    return this.classList;
};
Surface.prototype.setContent = function setContent(content) {
    if (this.content !== content) {
        this.content = content;
        this._contentDirty = true;
    }
    return this;
};
Surface.prototype.getContent = function getContent() {
    return this.content;
};
Surface.prototype.setOptions = function setOptions(options) {
    if (options.size)
        this.setSize(options.size);
    if (options.classes)
        this.setClasses(options.classes);
    if (options.properties)
        this.setProperties(options.properties);
    if (options.attributes)
        this.setAttributes(options.attributes);
    if (options.content)
        this.setContent(options.content);
    return this;
};
function _cleanupClasses(target) {
    for (var i = 0; i < this._dirtyClasses.length; i++)
        target.classList.remove(this._dirtyClasses[i]);
    this._dirtyClasses = [];
}
function _applyStyles(target) {
    for (var n in this.properties) {
        target.style[n] = this.properties[n];
    }
}
function _cleanupStyles(target) {
    for (var n in this.properties) {
        target.style[n] = '';
    }
}
function _applyAttributes(target) {
    for (var n in this.attributes) {
        target.setAttribute(n, this.attributes[n]);
    }
}
function _cleanupAttributes(target) {
    for (var n in this.attributes) {
        target.removeAttribute(n);
    }
}
function _xyNotEquals(a, b) {
    return a && b ? a[0] !== b[0] || a[1] !== b[1] : a !== b;
}
Surface.prototype.setup = function setup(allocator) {
    var target = allocator.allocate(this.elementType);
    if (this.elementClass) {
        if (this.elementClass instanceof Array) {
            for (var i = 0; i < this.elementClass.length; i++) {
                target.classList.add(this.elementClass[i]);
            }
        } else {
            target.classList.add(this.elementClass);
        }
    }
    target.style.display = '';
    this.attach(target);
    this._opacity = null;
    this._currentTarget = target;
    this._stylesDirty = true;
    this._classesDirty = true;
    this._attributesDirty = true;
    this._sizeDirty = true;
    this._contentDirty = true;
    this._originDirty = true;
    this._transformDirty = true;
};
Surface.prototype.commit = function commit(context) {
    if (!this._currentTarget)
        this.setup(context.allocator);
    var target = this._currentTarget;
    var size = context.size;
    if (this._classesDirty) {
        _cleanupClasses.call(this, target);
        var classList = this.getClassList();
        for (var i = 0; i < classList.length; i++)
            target.classList.add(classList[i]);
        this._classesDirty = false;
        this._trueSizeCheck = true;
    }
    if (this._stylesDirty) {
        _applyStyles.call(this, target);
        this._stylesDirty = false;
        this._trueSizeCheck = true;
    }
    if (this._attributesDirty) {
        _applyAttributes.call(this, target);
        this._attributesDirty = false;
        this._trueSizeCheck = true;
    }
    if (this.size) {
        var origSize = context.size;
        size = [
            this.size[0],
            this.size[1]
        ];
        if (size[0] === undefined)
            size[0] = origSize[0];
        if (size[1] === undefined)
            size[1] = origSize[1];
        if (size[0] === true || size[1] === true) {
            if (size[0] === true && (this._trueSizeCheck || this._size[0] === 0)) {
                var width = target.clientWidth;
                if (this._size && this._size[0] !== width) {
                    this._size[0] = width;
                    this._sizeDirty = true;
                }
                size[0] = width;
            } else {
                if (this._size)
                    size[0] = this._size[0];
            }
            if (size[1] === true && (this._trueSizeCheck || this._size[1] === 0)) {
                var height = target.clientHeight;
                if (this._size && this._size[1] !== height) {
                    this._size[1] = height;
                    this._sizeDirty = true;
                }
                size[1] = height;
            } else {
                if (this._size)
                    size[1] = this._size[1];
            }
            this._trueSizeCheck = false;
        }
    }
    if (_xyNotEquals(this._size, size)) {
        if (!this._size)
            this._size = [
                0,
                0
            ];
        this._size[0] = size[0];
        this._size[1] = size[1];
        this._sizeDirty = true;
    }
    if (this._sizeDirty) {
        if (this._size) {
            target.style.width = this.size && this.size[0] === true ? '' : this._size[0] + 'px';
            target.style.height = this.size && this.size[1] === true ? '' : this._size[1] + 'px';
        }
        this._eventOutput.emit('resize');
        this._sizeDirty = false;
    }
    if (this._contentDirty) {
        this.deploy(target);
        this._eventOutput.emit('deploy');
        this._contentDirty = false;
        this._trueSizeCheck = true;
    }
    ElementOutput.prototype.commit.call(this, context);
};
Surface.prototype.cleanup = function cleanup(allocator) {
    var i = 0;
    var target = this._currentTarget;
    this._eventOutput.emit('recall');
    this.recall(target);
    target.style.display = 'none';
    target.style.opacity = '';
    target.style.width = '';
    target.style.height = '';
    _cleanupStyles.call(this, target);
    _cleanupAttributes.call(this, target);
    var classList = this.getClassList();
    _cleanupClasses.call(this, target);
    for (i = 0; i < classList.length; i++)
        target.classList.remove(classList[i]);
    if (this.elementClass) {
        if (this.elementClass instanceof Array) {
            for (i = 0; i < this.elementClass.length; i++) {
                target.classList.remove(this.elementClass[i]);
            }
        } else {
            target.classList.remove(this.elementClass);
        }
    }
    this.detach(target);
    this._currentTarget = null;
    allocator.deallocate(target);
};
Surface.prototype.deploy = function deploy(target) {
    var content = this.getContent();
    if (content instanceof Node) {
        while (target.hasChildNodes())
            target.removeChild(target.firstChild);
        target.appendChild(content);
    } else
        target.innerHTML = content;
};
Surface.prototype.recall = function recall(target) {
    var df = document.createDocumentFragment();
    while (target.hasChildNodes())
        df.appendChild(target.firstChild);
    this.setContent(df);
};
Surface.prototype.getSize = function getSize() {
    return this._size ? this._size : this.size;
};
Surface.prototype.setSize = function setSize(size) {
    this.size = size ? [
        size[0],
        size[1]
    ] : null;
    this._sizeDirty = true;
    return this;
};
module.exports = Surface;
},{"./ElementOutput":4}],16:[function(require,module,exports){
var Transform = {};
Transform.precision = 0.000001;
Transform.identity = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
];
Transform.multiply4x4 = function multiply4x4(a, b) {
    return [
        a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
        a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
        a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
        a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
        a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
        a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
        a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
        a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
        a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
        a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
        a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
        a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
        a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
        a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
        a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
        a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
    ];
};
Transform.multiply = function multiply(a, b) {
    return [
        a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
        a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
        a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
        0,
        a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
        a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
        a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
        0,
        a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
        a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
        a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
        0,
        a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
        a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
        a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
        1
    ];
};
Transform.thenMove = function thenMove(m, t) {
    if (!t[2])
        t[2] = 0;
    return [
        m[0],
        m[1],
        m[2],
        0,
        m[4],
        m[5],
        m[6],
        0,
        m[8],
        m[9],
        m[10],
        0,
        m[12] + t[0],
        m[13] + t[1],
        m[14] + t[2],
        1
    ];
};
Transform.moveThen = function moveThen(v, m) {
    if (!v[2])
        v[2] = 0;
    var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
    var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
    var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
    return Transform.thenMove(m, [
        t0,
        t1,
        t2
    ]);
};
Transform.translate = function translate(x, y, z) {
    if (z === undefined)
        z = 0;
    return [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        x,
        y,
        z,
        1
    ];
};
Transform.thenScale = function thenScale(m, s) {
    return [
        s[0] * m[0],
        s[1] * m[1],
        s[2] * m[2],
        0,
        s[0] * m[4],
        s[1] * m[5],
        s[2] * m[6],
        0,
        s[0] * m[8],
        s[1] * m[9],
        s[2] * m[10],
        0,
        s[0] * m[12],
        s[1] * m[13],
        s[2] * m[14],
        1
    ];
};
Transform.scale = function scale(x, y, z) {
    if (z === undefined)
        z = 1;
    if (y === undefined)
        y = x;
    return [
        x,
        0,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        0,
        z,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.rotateX = function rotateX(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [
        1,
        0,
        0,
        0,
        0,
        cosTheta,
        sinTheta,
        0,
        0,
        -sinTheta,
        cosTheta,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.rotateY = function rotateY(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [
        cosTheta,
        0,
        -sinTheta,
        0,
        0,
        1,
        0,
        0,
        sinTheta,
        0,
        cosTheta,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.rotateZ = function rotateZ(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [
        cosTheta,
        sinTheta,
        0,
        0,
        -sinTheta,
        cosTheta,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.rotate = function rotate(phi, theta, psi) {
    var cosPhi = Math.cos(phi);
    var sinPhi = Math.sin(phi);
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    var cosPsi = Math.cos(psi);
    var sinPsi = Math.sin(psi);
    var result = [
            cosTheta * cosPsi,
            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
            0,
            -cosTheta * sinPsi,
            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
            0,
            sinTheta,
            -sinPhi * cosTheta,
            cosPhi * cosTheta,
            0,
            0,
            0,
            0,
            1
        ];
    return result;
};
Transform.rotateAxis = function rotateAxis(v, theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var verTheta = 1 - cosTheta;
    var xxV = v[0] * v[0] * verTheta;
    var xyV = v[0] * v[1] * verTheta;
    var xzV = v[0] * v[2] * verTheta;
    var yyV = v[1] * v[1] * verTheta;
    var yzV = v[1] * v[2] * verTheta;
    var zzV = v[2] * v[2] * verTheta;
    var xs = v[0] * sinTheta;
    var ys = v[1] * sinTheta;
    var zs = v[2] * sinTheta;
    var result = [
            xxV + cosTheta,
            xyV + zs,
            xzV - ys,
            0,
            xyV - zs,
            yyV + cosTheta,
            yzV + xs,
            0,
            xzV + ys,
            yzV - xs,
            zzV + cosTheta,
            0,
            0,
            0,
            0,
            1
        ];
    return result;
};
Transform.aboutOrigin = function aboutOrigin(v, m) {
    var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
    var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
    var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
    return Transform.thenMove(m, [
        t0,
        t1,
        t2
    ]);
};
Transform.skew = function skew(phi, theta, psi) {
    return [
        1,
        Math.tan(theta),
        0,
        0,
        Math.tan(psi),
        1,
        0,
        0,
        0,
        Math.tan(phi),
        1,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.skewX = function skewX(angle) {
    return [
        1,
        0,
        0,
        0,
        Math.tan(angle),
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.skewY = function skewY(angle) {
    return [
        1,
        Math.tan(angle),
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
};
Transform.perspective = function perspective(focusZ) {
    return [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        -1 / focusZ,
        0,
        0,
        0,
        1
    ];
};
Transform.getTranslate = function getTranslate(m) {
    return [
        m[12],
        m[13],
        m[14]
    ];
};
Transform.inverse = function inverse(m) {
    var c0 = m[5] * m[10] - m[6] * m[9];
    var c1 = m[4] * m[10] - m[6] * m[8];
    var c2 = m[4] * m[9] - m[5] * m[8];
    var c4 = m[1] * m[10] - m[2] * m[9];
    var c5 = m[0] * m[10] - m[2] * m[8];
    var c6 = m[0] * m[9] - m[1] * m[8];
    var c8 = m[1] * m[6] - m[2] * m[5];
    var c9 = m[0] * m[6] - m[2] * m[4];
    var c10 = m[0] * m[5] - m[1] * m[4];
    var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
    var invD = 1 / detM;
    var result = [
            invD * c0,
            -invD * c4,
            invD * c8,
            0,
            -invD * c1,
            invD * c5,
            -invD * c9,
            0,
            invD * c2,
            -invD * c6,
            invD * c10,
            0,
            0,
            0,
            0,
            1
        ];
    result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
    result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
    result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
    return result;
};
Transform.transpose = function transpose(m) {
    return [
        m[0],
        m[4],
        m[8],
        m[12],
        m[1],
        m[5],
        m[9],
        m[13],
        m[2],
        m[6],
        m[10],
        m[14],
        m[3],
        m[7],
        m[11],
        m[15]
    ];
};
function _normSquared(v) {
    return v.length === 2 ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
function _norm(v) {
    return Math.sqrt(_normSquared(v));
}
function _sign(n) {
    return n < 0 ? -1 : 1;
}
Transform.interpret = function interpret(M) {
    var x = [
            M[0],
            M[1],
            M[2]
        ];
    var sgn = _sign(x[0]);
    var xNorm = _norm(x);
    var v = [
            x[0] + sgn * xNorm,
            x[1],
            x[2]
        ];
    var mult = 2 / _normSquared(v);
    if (mult >= Infinity) {
        return {
            translate: Transform.getTranslate(M),
            rotate: [
                0,
                0,
                0
            ],
            scale: [
                0,
                0,
                0
            ],
            skew: [
                0,
                0,
                0
            ]
        };
    }
    var Q1 = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ];
    Q1[0] = 1 - mult * v[0] * v[0];
    Q1[5] = 1 - mult * v[1] * v[1];
    Q1[10] = 1 - mult * v[2] * v[2];
    Q1[1] = -mult * v[0] * v[1];
    Q1[2] = -mult * v[0] * v[2];
    Q1[6] = -mult * v[1] * v[2];
    Q1[4] = Q1[1];
    Q1[8] = Q1[2];
    Q1[9] = Q1[6];
    var MQ1 = Transform.multiply(Q1, M);
    var x2 = [
            MQ1[5],
            MQ1[6]
        ];
    var sgn2 = _sign(x2[0]);
    var x2Norm = _norm(x2);
    var v2 = [
            x2[0] + sgn2 * x2Norm,
            x2[1]
        ];
    var mult2 = 2 / _normSquared(v2);
    var Q2 = [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
        ];
    Q2[5] = 1 - mult2 * v2[0] * v2[0];
    Q2[10] = 1 - mult2 * v2[1] * v2[1];
    Q2[6] = -mult2 * v2[0] * v2[1];
    Q2[9] = Q2[6];
    var Q = Transform.multiply(Q2, Q1);
    var R = Transform.multiply(Q, M);
    var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
    R = Transform.multiply(R, remover);
    Q = Transform.multiply(remover, Q);
    var result = {};
    result.translate = Transform.getTranslate(M);
    result.rotate = [
        Math.atan2(-Q[6], Q[10]),
        Math.asin(Q[2]),
        Math.atan2(-Q[1], Q[0])
    ];
    if (!result.rotate[0]) {
        result.rotate[0] = 0;
        result.rotate[2] = Math.atan2(Q[4], Q[5]);
    }
    result.scale = [
        R[0],
        R[5],
        R[10]
    ];
    result.skew = [
        Math.atan2(R[9], result.scale[2]),
        Math.atan2(R[8], result.scale[2]),
        Math.atan2(R[4], result.scale[0])
    ];
    if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
        result.rotate[1] = Math.PI - result.rotate[1];
        if (result.rotate[1] > Math.PI)
            result.rotate[1] -= 2 * Math.PI;
        if (result.rotate[1] < -Math.PI)
            result.rotate[1] += 2 * Math.PI;
        if (result.rotate[0] < 0)
            result.rotate[0] += Math.PI;
        else
            result.rotate[0] -= Math.PI;
        if (result.rotate[2] < 0)
            result.rotate[2] += Math.PI;
        else
            result.rotate[2] -= Math.PI;
    }
    return result;
};
Transform.average = function average(M1, M2, t) {
    t = t === undefined ? 0.5 : t;
    var specM1 = Transform.interpret(M1);
    var specM2 = Transform.interpret(M2);
    var specAvg = {
            translate: [
                0,
                0,
                0
            ],
            rotate: [
                0,
                0,
                0
            ],
            scale: [
                0,
                0,
                0
            ],
            skew: [
                0,
                0,
                0
            ]
        };
    for (var i = 0; i < 3; i++) {
        specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
        specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
        specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
        specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
    }
    return Transform.build(specAvg);
};
Transform.build = function build(spec) {
    var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
    var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
    var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
    return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
};
Transform.equals = function equals(a, b) {
    return !Transform.notEquals(a, b);
};
Transform.notEquals = function notEquals(a, b) {
    if (a === b)
        return false;
    return !(a && b) || a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] || a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] || a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] || a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
};
Transform.normalizeRotation = function normalizeRotation(rotation) {
    var result = rotation.slice(0);
    if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
        result[0] = -result[0];
        result[1] = Math.PI - result[1];
        result[2] -= Math.PI;
    }
    if (result[0] > Math.PI * 0.5) {
        result[0] = result[0] - Math.PI;
        result[1] = Math.PI - result[1];
        result[2] -= Math.PI;
    }
    if (result[0] < -Math.PI * 0.5) {
        result[0] = result[0] + Math.PI;
        result[1] = -Math.PI - result[1];
        result[2] -= Math.PI;
    }
    while (result[1] < -Math.PI)
        result[1] += 2 * Math.PI;
    while (result[1] >= Math.PI)
        result[1] -= 2 * Math.PI;
    while (result[2] < -Math.PI)
        result[2] += 2 * Math.PI;
    while (result[2] >= Math.PI)
        result[2] -= 2 * Math.PI;
    return result;
};
Transform.inFront = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0.001,
    1
];
Transform.behind = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    -0.001,
    1
];
module.exports = Transform;
},{}],17:[function(require,module,exports){
var EventHandler = require('./EventHandler');
var OptionsManager = require('./OptionsManager');
var RenderNode = require('./RenderNode');
var Utility = require('famous/utilities/Utility');
function View(options) {
    this._node = new RenderNode();
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this.options = Utility.clone(this.constructor.DEFAULT_OPTIONS || View.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
}
View.DEFAULT_OPTIONS = {};
View.prototype.getOptions = function getOptions(key) {
    return this._optionsManager.getOptions(key);
};
View.prototype.setOptions = function setOptions(options) {
    this._optionsManager.patch(options);
};
View.prototype.add = function add() {
    return this._node.add.apply(this._node, arguments);
};
View.prototype._add = View.prototype.add;
View.prototype.render = function render() {
    return this._node.render();
};
View.prototype.getSize = function getSize() {
    if (this._node && this._node.getSize) {
        return this._node.getSize.apply(this._node, arguments) || this.options.size;
    } else
        return this.options.size;
};
module.exports = View;
},{"./EventHandler":8,"./OptionsManager":11,"./RenderNode":12,"famous/utilities/Utility":114}],18:[function(require,module,exports){
function ViewSequence(options) {
    if (!options)
        options = [];
    if (options instanceof Array)
        options = { array: options };
    this._ = null;
    this.index = options.index || 0;
    if (options.array)
        this._ = new this.constructor.Backing(options.array);
    else if (options._)
        this._ = options._;
    if (this.index === this._.firstIndex)
        this._.firstNode = this;
    if (this.index === this._.firstIndex + this._.array.length - 1)
        this._.lastNode = this;
    if (options.loop !== undefined)
        this._.loop = options.loop;
    if (options.trackSize !== undefined)
        this._.trackSize = options.trackSize;
    this._previousNode = null;
    this._nextNode = null;
}
ViewSequence.Backing = function Backing(array) {
    this.array = array;
    this.firstIndex = 0;
    this.loop = false;
    this.firstNode = null;
    this.lastNode = null;
    this.cumulativeSizes = [[
            0,
            0
        ]];
    this.sizeDirty = true;
    this.trackSize = false;
};
ViewSequence.Backing.prototype.getValue = function getValue(i) {
    var _i = i - this.firstIndex;
    if (_i < 0 || _i >= this.array.length)
        return null;
    return this.array[_i];
};
ViewSequence.Backing.prototype.setValue = function setValue(i, value) {
    this.array[i - this.firstIndex] = value;
};
ViewSequence.Backing.prototype.getSize = function getSize(index) {
    return this.cumulativeSizes[index];
};
ViewSequence.Backing.prototype.calculateSize = function calculateSize(index) {
    index = index || this.array.length;
    var size = [
            0,
            0
        ];
    for (var i = 0; i < index; i++) {
        var nodeSize = this.array[i].getSize();
        if (!nodeSize)
            return undefined;
        if (size[0] !== undefined) {
            if (nodeSize[0] === undefined)
                size[0] = undefined;
            else
                size[0] += nodeSize[0];
        }
        if (size[1] !== undefined) {
            if (nodeSize[1] === undefined)
                size[1] = undefined;
            else
                size[1] += nodeSize[1];
        }
        this.cumulativeSizes[i + 1] = size.slice();
    }
    this.sizeDirty = false;
    return size;
};
ViewSequence.Backing.prototype.reindex = function reindex(start, removeCount, insertCount) {
    if (!this.array[0])
        return;
    var i = 0;
    var index = this.firstIndex;
    var indexShiftAmount = insertCount - removeCount;
    var node = this.firstNode;
    while (index < start - 1) {
        node = node.getNext();
        index++;
    }
    var spliceStartNode = node;
    for (i = 0; i < removeCount; i++) {
        node = node.getNext();
        if (node)
            node._previousNode = spliceStartNode;
    }
    var spliceResumeNode = node ? node.getNext() : null;
    spliceStartNode._nextNode = null;
    node = spliceStartNode;
    for (i = 0; i < insertCount; i++)
        node = node.getNext();
    index += insertCount;
    if (node !== spliceResumeNode) {
        node._nextNode = spliceResumeNode;
        if (spliceResumeNode)
            spliceResumeNode._previousNode = node;
    }
    if (spliceResumeNode) {
        node = spliceResumeNode;
        index++;
        while (node && index < this.array.length + this.firstIndex) {
            if (node._nextNode)
                node.index += indexShiftAmount;
            else
                node.index = index;
            node = node.getNext();
            index++;
        }
    }
    if (this._.trackSize)
        this._.sizeDirty = true;
};
ViewSequence.prototype.getPrevious = function getPrevious() {
    if (this.index === this._.firstIndex) {
        if (this._.loop) {
            this._previousNode = this._.lastNode || new this.constructor({
                _: this._,
                index: this._.firstIndex + this._.array.length - 1
            });
            this._previousNode._nextNode = this;
        } else {
            this._previousNode = null;
        }
    } else if (!this._previousNode) {
        this._previousNode = new this.constructor({
            _: this._,
            index: this.index - 1
        });
        this._previousNode._nextNode = this;
    }
    return this._previousNode;
};
ViewSequence.prototype.getNext = function getNext() {
    if (this.index === this._.firstIndex + this._.array.length - 1) {
        if (this._.loop) {
            this._nextNode = this._.firstNode || new this.constructor({
                _: this._,
                index: this._.firstIndex
            });
            this._nextNode._previousNode = this;
        } else {
            this._nextNode = null;
        }
    } else if (!this._nextNode) {
        this._nextNode = new this.constructor({
            _: this._,
            index: this.index + 1
        });
        this._nextNode._previousNode = this;
    }
    return this._nextNode;
};
ViewSequence.prototype.getIndex = function getIndex() {
    return this.index;
};
ViewSequence.prototype.toString = function toString() {
    return '' + this.index;
};
ViewSequence.prototype.unshift = function unshift(value) {
    this._.array.unshift.apply(this._.array, arguments);
    this._.firstIndex -= arguments.length;
    if (this._.trackSize)
        this._.sizeDirty = true;
};
ViewSequence.prototype.push = function push(value) {
    this._.array.push.apply(this._.array, arguments);
    if (this._.trackSize)
        this._.sizeDirty = true;
};
ViewSequence.prototype.splice = function splice(index, howMany) {
    var values = Array.prototype.slice.call(arguments, 2);
    this._.array.splice.apply(this._.array, [
        index - this._.firstIndex,
        howMany
    ].concat(values));
    this._.reindex(index, howMany, values.length);
};
ViewSequence.prototype.swap = function swap(other) {
    var otherValue = other.get();
    var myValue = this.get();
    this._.setValue(this.index, otherValue);
    this._.setValue(other.index, myValue);
    var myPrevious = this._previousNode;
    var myNext = this._nextNode;
    var myIndex = this.index;
    var otherPrevious = other._previousNode;
    var otherNext = other._nextNode;
    var otherIndex = other.index;
    this.index = otherIndex;
    this._previousNode = otherPrevious === this ? other : otherPrevious;
    if (this._previousNode)
        this._previousNode._nextNode = this;
    this._nextNode = otherNext === this ? other : otherNext;
    if (this._nextNode)
        this._nextNode._previousNode = this;
    other.index = myIndex;
    other._previousNode = myPrevious === other ? this : myPrevious;
    if (other._previousNode)
        other._previousNode._nextNode = other;
    other._nextNode = myNext === other ? this : myNext;
    if (other._nextNode)
        other._nextNode._previousNode = other;
    if (this.index === this._.firstIndex)
        this._.firstNode = this;
    else if (this.index === this._.firstIndex + this._.array.length - 1)
        this._.lastNode = this;
    if (other.index === this._.firstIndex)
        this._.firstNode = other;
    else if (other.index === this._.firstIndex + this._.array.length - 1)
        this._.lastNode = other;
    if (this._.trackSize)
        this._.sizeDirty = true;
};
ViewSequence.prototype.get = function get() {
    return this._.getValue(this.index);
};
ViewSequence.prototype.getSize = function getSize() {
    var target = this.get();
    return target ? target.getSize() : null;
};
ViewSequence.prototype.render = function render() {
    if (this._.trackSize && this._.sizeDirty)
        this._.calculateSize();
    var target = this.get();
    return target ? target.render.apply(target, arguments) : null;
};
module.exports = ViewSequence;
},{}],19:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
function EventArbiter(startMode) {
    this.dispatchers = {};
    this.currMode = undefined;
    this.setMode(startMode);
}
EventArbiter.prototype.setMode = function setMode(mode) {
    if (mode !== this.currMode) {
        var startMode = this.currMode;
        if (this.dispatchers[this.currMode])
            this.dispatchers[this.currMode].trigger('unpipe');
        this.currMode = mode;
        if (this.dispatchers[mode])
            this.dispatchers[mode].emit('pipe');
        this.emit('change', {
            from: startMode,
            to: mode
        });
    }
};
EventArbiter.prototype.forMode = function forMode(mode) {
    if (!this.dispatchers[mode])
        this.dispatchers[mode] = new EventHandler();
    return this.dispatchers[mode];
};
EventArbiter.prototype.emit = function emit(eventType, event) {
    if (this.currMode === undefined)
        return false;
    if (!event)
        event = {};
    var dispatcher = this.dispatchers[this.currMode];
    if (dispatcher)
        return dispatcher.trigger(eventType, event);
};
module.exports = EventArbiter;
},{"famous/core/EventHandler":49}],20:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
function EventFilter(condition) {
    EventHandler.call(this);
    this._condition = condition;
}
EventFilter.prototype = Object.create(EventHandler.prototype);
EventFilter.prototype.constructor = EventFilter;
EventFilter.prototype.emit = function emit(type, data) {
    if (this._condition(type, data))
        return EventHandler.prototype.emit.apply(this, arguments);
};
EventFilter.prototype.trigger = EventFilter.prototype.emit;
module.exports = EventFilter;
},{"famous/core/EventHandler":49}],21:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
function EventMapper(mappingFunction) {
    EventHandler.call(this);
    this._mappingFunction = mappingFunction;
}
EventMapper.prototype = Object.create(EventHandler.prototype);
EventMapper.prototype.constructor = EventMapper;
EventMapper.prototype.subscribe = null;
EventMapper.prototype.unsubscribe = null;
EventMapper.prototype.emit = function emit(type, data) {
    var target = this._mappingFunction.apply(this, arguments);
    if (target && target.emit instanceof Function)
        target.emit(type, data);
};
EventMapper.prototype.trigger = EventMapper.prototype.emit;
module.exports = EventMapper;
},{"famous/core/EventHandler":49}],22:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
var Transitionable = require('famous/transitions/Transitionable');
function Accumulator(value, eventName) {
    if (eventName === undefined)
        eventName = 'update';
    this._state = value && value.get && value.set ? value : new Transitionable(value || 0);
    this._eventInput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    this._eventInput.on(eventName, _handleUpdate.bind(this));
}
function _handleUpdate(data) {
    var delta = data.delta;
    var state = this.get();
    if (delta.constructor === state.constructor) {
        var newState = delta instanceof Array ? [
                state[0] + delta[0],
                state[1] + delta[1]
            ] : state + delta;
        this.set(newState);
    }
}
Accumulator.prototype.get = function get() {
    return this._state.get();
};
Accumulator.prototype.set = function set(value) {
    this._state.set(value);
};
module.exports = Accumulator;
},{"famous/core/EventHandler":49,"famous/transitions/Transitionable":111}],23:[function(require,module,exports){
var hasTouch = 'ontouchstart' in window;
function kill(type) {
    window.addEventListener(type, function (event) {
        event.stopPropagation();
        return false;
    }, true);
}
if (hasTouch) {
    kill('mousedown');
    kill('mousemove');
    kill('mouseup');
    kill('mouseleave');
}
},{}],24:[function(require,module,exports){
(function () {
    if (!window.CustomEvent)
        return;
    var clickThreshold = 300;
    var clickWindow = 500;
    var potentialClicks = {};
    var recentlyDispatched = {};
    var _now = Date.now;
    window.addEventListener('touchstart', function (event) {
        var timestamp = _now();
        for (var i = 0; i < event.changedTouches.length; i++) {
            var touch = event.changedTouches[i];
            potentialClicks[touch.identifier] = timestamp;
        }
    });
    window.addEventListener('touchmove', function (event) {
        for (var i = 0; i < event.changedTouches.length; i++) {
            var touch = event.changedTouches[i];
            delete potentialClicks[touch.identifier];
        }
    });
    window.addEventListener('touchend', function (event) {
        var currTime = _now();
        for (var i = 0; i < event.changedTouches.length; i++) {
            var touch = event.changedTouches[i];
            var startTime = potentialClicks[touch.identifier];
            if (startTime && currTime - startTime < clickThreshold) {
                var clickEvt = new window.CustomEvent('click', {
                        'bubbles': true,
                        'detail': touch
                    });
                recentlyDispatched[currTime] = event;
                event.target.dispatchEvent(clickEvt);
            }
            delete potentialClicks[touch.identifier];
        }
    });
    window.addEventListener('click', function (event) {
        var currTime = _now();
        for (var i in recentlyDispatched) {
            var previousEvent = recentlyDispatched[i];
            if (currTime - i < clickWindow) {
                if (event instanceof window.MouseEvent && event.target === previousEvent.target)
                    event.stopPropagation();
            } else
                delete recentlyDispatched[i];
        }
    }, true);
}());
},{}],25:[function(require,module,exports){
var EventHandler = require('../core/EventHandler');
function GenericSync(syncs, options) {
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this._syncs = {};
    if (syncs)
        this.addSync(syncs);
    if (options)
        this.setOptions(options);
}
GenericSync.DIRECTION_X = 0;
GenericSync.DIRECTION_Y = 1;
GenericSync.DIRECTION_Z = 2;
var registry = {};
GenericSync.register = function register(syncObject) {
    for (var key in syncObject) {
        if (registry[key]) {
            if (registry[key] === syncObject[key])
                return;
            else
                throw new Error('this key is registered to a different sync class');
        } else
            registry[key] = syncObject[key];
    }
};
GenericSync.prototype.setOptions = function (options) {
    for (var key in this._syncs) {
        this._syncs[key].setOptions(options);
    }
};
GenericSync.prototype.pipeSync = function pipeToSync(key) {
    var sync = this._syncs[key];
    this._eventInput.pipe(sync);
    sync.pipe(this._eventOutput);
};
GenericSync.prototype.unpipeSync = function unpipeFromSync(key) {
    var sync = this._syncs[key];
    this._eventInput.unpipe(sync);
    sync.unpipe(this._eventOutput);
};
function _addSingleSync(key, options) {
    if (!registry[key])
        return;
    this._syncs[key] = new registry[key](options);
    this.pipeSync(key);
}
GenericSync.prototype.addSync = function addSync(syncs) {
    if (syncs instanceof Array)
        for (var i = 0; i < syncs.length; i++)
            _addSingleSync.call(this, syncs[i]);
    else if (syncs instanceof Object)
        for (var key in syncs)
            _addSingleSync.call(this, key, syncs[key]);
};
module.exports = GenericSync;
},{"../core/EventHandler":8}],26:[function(require,module,exports){
var EventHandler = require('../core/EventHandler');
var OptionsManager = require('../core/OptionsManager');
function MouseSync(options) {
    this.options = Object.create(MouseSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this._eventInput.on('mousedown', _handleStart.bind(this));
    this._eventInput.on('mousemove', _handleMove.bind(this));
    this._eventInput.on('mouseup', _handleEnd.bind(this));
    if (this.options.propogate)
        this._eventInput.on('mouseleave', _handleLeave.bind(this));
    else
        this._eventInput.on('mouseleave', _handleEnd.bind(this));
    this._payload = {
        delta: null,
        position: null,
        velocity: null,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0
    };
    this._position = null;
    this._prevCoord = undefined;
    this._prevTime = undefined;
    this._down = false;
    this._moved = false;
}
MouseSync.DEFAULT_OPTIONS = {
    direction: undefined,
    rails: false,
    scale: 1,
    propogate: true,
    preventDefault: true
};
MouseSync.DIRECTION_X = 0;
MouseSync.DIRECTION_Y = 1;
var MINIMUM_TICK_TIME = 8;
var _now = Date.now;
function _handleStart(event) {
    var delta;
    var velocity;
    if (this.options.preventDefault)
        event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;
    this._prevCoord = [
        x,
        y
    ];
    this._prevTime = _now();
    this._down = true;
    this._move = false;
    if (this.options.direction !== undefined) {
        this._position = 0;
        delta = 0;
        velocity = 0;
    } else {
        this._position = [
            0,
            0
        ];
        delta = [
            0,
            0
        ];
        velocity = [
            0,
            0
        ];
    }
    var payload = this._payload;
    payload.delta = delta;
    payload.position = this._position;
    payload.velocity = velocity;
    payload.clientX = x;
    payload.clientY = y;
    payload.offsetX = event.offsetX;
    payload.offsetY = event.offsetY;
    this._eventOutput.emit('start', payload);
}
function _handleMove(event) {
    if (!this._prevCoord)
        return;
    var prevCoord = this._prevCoord;
    var prevTime = this._prevTime;
    var x = event.clientX;
    var y = event.clientY;
    var currTime = _now();
    var diffX = x - prevCoord[0];
    var diffY = y - prevCoord[1];
    if (this.options.rails) {
        if (Math.abs(diffX) > Math.abs(diffY))
            diffY = 0;
        else
            diffX = 0;
    }
    var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME);
    var velX = diffX / diffTime;
    var velY = diffY / diffTime;
    var scale = this.options.scale;
    var nextVel;
    var nextDelta;
    if (this.options.direction === MouseSync.DIRECTION_X) {
        nextDelta = scale * diffX;
        nextVel = scale * velX;
        this._position += nextDelta;
    } else if (this.options.direction === MouseSync.DIRECTION_Y) {
        nextDelta = scale * diffY;
        nextVel = scale * velY;
        this._position += nextDelta;
    } else {
        nextDelta = [
            scale * diffX,
            scale * diffY
        ];
        nextVel = [
            scale * velX,
            scale * velY
        ];
        this._position[0] += nextDelta[0];
        this._position[1] += nextDelta[1];
    }
    var payload = this._payload;
    payload.delta = nextDelta;
    payload.position = this._position;
    payload.velocity = nextVel;
    payload.clientX = x;
    payload.clientY = y;
    payload.offsetX = event.offsetX;
    payload.offsetY = event.offsetY;
    this._eventOutput.emit('update', payload);
    this._prevCoord = [
        x,
        y
    ];
    this._prevTime = currTime;
    this._move = true;
}
function _handleEnd(event) {
    if (!this._down)
        return;
    this._eventOutput.emit('end', this._payload);
    this._prevCoord = undefined;
    this._prevTime = undefined;
    this._down = false;
    this._move = false;
}
function _handleLeave(event) {
    if (!this._down || !this._move)
        return;
    var boundMove = _handleMove.bind(this);
    var boundEnd = function (event) {
            _handleEnd.call(this, event);
            document.removeEventListener('mousemove', boundMove);
            document.removeEventListener('mouseup', boundEnd);
        }.bind(this, event);
    document.addEventListener('mousemove', boundMove);
    document.addEventListener('mouseup', boundEnd);
}
MouseSync.prototype.getOptions = function getOptions() {
    return this.options;
};
MouseSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
module.exports = MouseSync;
},{"../core/EventHandler":8,"../core/OptionsManager":11}],27:[function(require,module,exports){
var TwoFingerSync = require('./TwoFingerSync');
var OptionsManager = require('../core/OptionsManager');
function PinchSync(options) {
    TwoFingerSync.call(this);
    this.options = Object.create(PinchSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._displacement = 0;
    this._previousDistance = 0;
}
PinchSync.prototype = Object.create(TwoFingerSync.prototype);
PinchSync.prototype.constructor = PinchSync;
PinchSync.DEFAULT_OPTIONS = { scale: 1 };
PinchSync.prototype._startUpdate = function _startUpdate(event) {
    this._previousDistance = TwoFingerSync.calculateDistance(this.posA, this.posB);
    this._displacement = 0;
    this._eventOutput.emit('start', {
        count: event.touches.length,
        touches: [
            this.touchAId,
            this.touchBId
        ],
        distance: this._dist,
        center: TwoFingerSync.calculateCenter(this.posA, this.posB)
    });
};
PinchSync.prototype._moveUpdate = function _moveUpdate(diffTime) {
    var currDist = TwoFingerSync.calculateDistance(this.posA, this.posB);
    var center = TwoFingerSync.calculateCenter(this.posA, this.posB);
    var scale = this.options.scale;
    var delta = scale * (currDist - this._previousDistance);
    var velocity = delta / diffTime;
    this._previousDistance = currDist;
    this._displacement += delta;
    this._eventOutput.emit('update', {
        delta: delta,
        velocity: velocity,
        distance: currDist,
        displacement: this._displacement,
        center: center,
        touches: [
            this.touchAId,
            this.touchBId
        ]
    });
};
PinchSync.prototype.getOptions = function getOptions() {
    return this.options;
};
PinchSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
module.exports = PinchSync;
},{"../core/OptionsManager":11,"./TwoFingerSync":33}],28:[function(require,module,exports){
var TwoFingerSync = require('./TwoFingerSync');
var OptionsManager = require('../core/OptionsManager');
function RotateSync(options) {
    TwoFingerSync.call(this);
    this.options = Object.create(RotateSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._angle = 0;
    this._previousAngle = 0;
}
RotateSync.prototype = Object.create(TwoFingerSync.prototype);
RotateSync.prototype.constructor = RotateSync;
RotateSync.DEFAULT_OPTIONS = { scale: 1 };
RotateSync.prototype._startUpdate = function _startUpdate(event) {
    this._angle = 0;
    this._previousAngle = TwoFingerSync.calculateAngle(this.posA, this.posB);
    var center = TwoFingerSync.calculateCenter(this.posA, this.posB);
    this._eventOutput.emit('start', {
        count: event.touches.length,
        angle: this._angle,
        center: center,
        touches: [
            this.touchAId,
            this.touchBId
        ]
    });
};
RotateSync.prototype._moveUpdate = function _moveUpdate(diffTime) {
    var scale = this.options.scale;
    var currAngle = TwoFingerSync.calculateAngle(this.posA, this.posB);
    var center = TwoFingerSync.calculateCenter(this.posA, this.posB);
    var diffTheta = scale * (currAngle - this._previousAngle);
    var velTheta = diffTheta / diffTime;
    this._angle += diffTheta;
    this._eventOutput.emit('update', {
        delta: diffTheta,
        velocity: velTheta,
        angle: this._angle,
        center: center,
        touches: [
            this.touchAId,
            this.touchBId
        ]
    });
    this._previousAngle = currAngle;
};
RotateSync.prototype.getOptions = function getOptions() {
    return this.options;
};
RotateSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
module.exports = RotateSync;
},{"../core/OptionsManager":11,"./TwoFingerSync":33}],29:[function(require,module,exports){
var TwoFingerSync = require('./TwoFingerSync');
var OptionsManager = require('../core/OptionsManager');
function ScaleSync(options) {
    TwoFingerSync.call(this);
    this.options = Object.create(ScaleSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._scaleFactor = 1;
    this._startDist = 0;
    this._eventInput.on('pipe', _reset.bind(this));
}
ScaleSync.prototype = Object.create(TwoFingerSync.prototype);
ScaleSync.prototype.constructor = ScaleSync;
ScaleSync.DEFAULT_OPTIONS = { scale: 1 };
function _reset() {
    this.touchAId = undefined;
    this.touchBId = undefined;
}
ScaleSync.prototype._startUpdate = function _startUpdate(event) {
    this._scaleFactor = 1;
    this._startDist = TwoFingerSync.calculateDistance(this.posA, this.posB);
    this._eventOutput.emit('start', {
        count: event.touches.length,
        touches: [
            this.touchAId,
            this.touchBId
        ],
        distance: this._startDist,
        center: TwoFingerSync.calculateCenter(this.posA, this.posB)
    });
};
ScaleSync.prototype._moveUpdate = function _moveUpdate(diffTime) {
    var scale = this.options.scale;
    var currDist = TwoFingerSync.calculateDistance(this.posA, this.posB);
    var center = TwoFingerSync.calculateCenter(this.posA, this.posB);
    var delta = (currDist - this._startDist) / this._startDist;
    var newScaleFactor = Math.max(1 + scale * delta, 0);
    var veloScale = (newScaleFactor - this._scaleFactor) / diffTime;
    this._eventOutput.emit('update', {
        delta: delta,
        scale: newScaleFactor,
        velocity: veloScale,
        distance: currDist,
        center: center,
        touches: [
            this.touchAId,
            this.touchBId
        ]
    });
    this._scaleFactor = newScaleFactor;
};
ScaleSync.prototype.getOptions = function getOptions() {
    return this.options;
};
ScaleSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
module.exports = ScaleSync;
},{"../core/OptionsManager":11,"./TwoFingerSync":33}],30:[function(require,module,exports){
var EventHandler = require('../core/EventHandler');
var Engine = require('../core/Engine');
var OptionsManager = require('../core/OptionsManager');
function ScrollSync(options) {
    this.options = Object.create(ScrollSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._payload = {
        delta: null,
        position: null,
        velocity: null,
        slip: true
    };
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this._position = this.options.direction === undefined ? [
        0,
        0
    ] : 0;
    this._prevTime = undefined;
    this._prevVel = undefined;
    this._eventInput.on('mousewheel', _handleMove.bind(this));
    this._eventInput.on('wheel', _handleMove.bind(this));
    this._inProgress = false;
    this._loopBound = false;
}
ScrollSync.DEFAULT_OPTIONS = {
    direction: undefined,
    minimumEndSpeed: Infinity,
    rails: false,
    scale: 1,
    stallTime: 50,
    lineHeight: 40,
    preventDefault: true
};
ScrollSync.DIRECTION_X = 0;
ScrollSync.DIRECTION_Y = 1;
var MINIMUM_TICK_TIME = 8;
var _now = Date.now;
function _newFrame() {
    if (this._inProgress && _now() - this._prevTime > this.options.stallTime) {
        this._inProgress = false;
        var finalVel = Math.abs(this._prevVel) >= this.options.minimumEndSpeed ? this._prevVel : 0;
        var payload = this._payload;
        payload.position = this._position;
        payload.velocity = finalVel;
        payload.slip = true;
        this._eventOutput.emit('end', payload);
    }
}
function _handleMove(event) {
    if (this.options.preventDefault)
        event.preventDefault();
    if (!this._inProgress) {
        this._inProgress = true;
        this._position = this.options.direction === undefined ? [
            0,
            0
        ] : 0;
        payload = this._payload;
        payload.slip = true;
        payload.position = this._position;
        payload.clientX = event.clientX;
        payload.clientY = event.clientY;
        payload.offsetX = event.offsetX;
        payload.offsetY = event.offsetY;
        this._eventOutput.emit('start', payload);
        if (!this._loopBound) {
            Engine.on('prerender', _newFrame.bind(this));
            this._loopBound = true;
        }
    }
    var currTime = _now();
    var prevTime = this._prevTime || currTime;
    var diffX = event.wheelDeltaX !== undefined ? event.wheelDeltaX : -event.deltaX;
    var diffY = event.wheelDeltaY !== undefined ? event.wheelDeltaY : -event.deltaY;
    if (event.deltaMode === 1) {
        diffX *= this.options.lineHeight;
        diffY *= this.options.lineHeight;
    }
    if (this.options.rails) {
        if (Math.abs(diffX) > Math.abs(diffY))
            diffY = 0;
        else
            diffX = 0;
    }
    var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME);
    var velX = diffX / diffTime;
    var velY = diffY / diffTime;
    var scale = this.options.scale;
    var nextVel;
    var nextDelta;
    if (this.options.direction === ScrollSync.DIRECTION_X) {
        nextDelta = scale * diffX;
        nextVel = scale * velX;
        this._position += nextDelta;
    } else if (this.options.direction === ScrollSync.DIRECTION_Y) {
        nextDelta = scale * diffY;
        nextVel = scale * velY;
        this._position += nextDelta;
    } else {
        nextDelta = [
            scale * diffX,
            scale * diffY
        ];
        nextVel = [
            scale * velX,
            scale * velY
        ];
        this._position[0] += nextDelta[0];
        this._position[1] += nextDelta[1];
    }
    var payload = this._payload;
    payload.delta = nextDelta;
    payload.velocity = nextVel;
    payload.position = this._position;
    payload.slip = true;
    this._eventOutput.emit('update', payload);
    this._prevTime = currTime;
    this._prevVel = nextVel;
}
ScrollSync.prototype.getOptions = function getOptions() {
    return this.options;
};
ScrollSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
module.exports = ScrollSync;
},{"../core/Engine":5,"../core/EventHandler":8,"../core/OptionsManager":11}],31:[function(require,module,exports){
var TouchTracker = require('./TouchTracker');
var EventHandler = require('../core/EventHandler');
var OptionsManager = require('../core/OptionsManager');
function TouchSync(options) {
    this.options = Object.create(TouchSync.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._eventOutput = new EventHandler();
    this._touchTracker = new TouchTracker();
    EventHandler.setOutputHandler(this, this._eventOutput);
    EventHandler.setInputHandler(this, this._touchTracker);
    this._touchTracker.on('trackstart', _handleStart.bind(this));
    this._touchTracker.on('trackmove', _handleMove.bind(this));
    this._touchTracker.on('trackend', _handleEnd.bind(this));
    this._payload = {
        delta: null,
        position: null,
        velocity: null,
        clientX: undefined,
        clientY: undefined,
        count: 0,
        touch: undefined
    };
    this._position = null;
}
TouchSync.DEFAULT_OPTIONS = {
    direction: undefined,
    rails: false,
    scale: 1
};
TouchSync.DIRECTION_X = 0;
TouchSync.DIRECTION_Y = 1;
var MINIMUM_TICK_TIME = 8;
function _handleStart(data) {
    var velocity;
    var delta;
    if (this.options.direction !== undefined) {
        this._position = 0;
        velocity = 0;
        delta = 0;
    } else {
        this._position = [
            0,
            0
        ];
        velocity = [
            0,
            0
        ];
        delta = [
            0,
            0
        ];
    }
    var payload = this._payload;
    payload.delta = delta;
    payload.position = this._position;
    payload.velocity = velocity;
    payload.clientX = data.x;
    payload.clientY = data.y;
    payload.count = data.count;
    payload.touch = data.identifier;
    this._eventOutput.emit('start', payload);
}
function _handleMove(data) {
    var history = data.history;
    var currHistory = history[history.length - 1];
    var prevHistory = history[history.length - 2];
    var prevTime = prevHistory.timestamp;
    var currTime = currHistory.timestamp;
    var diffX = currHistory.x - prevHistory.x;
    var diffY = currHistory.y - prevHistory.y;
    if (this.options.rails) {
        if (Math.abs(diffX) > Math.abs(diffY))
            diffY = 0;
        else
            diffX = 0;
    }
    var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME);
    var velX = diffX / diffTime;
    var velY = diffY / diffTime;
    var scale = this.options.scale;
    var nextVel;
    var nextDelta;
    if (this.options.direction === TouchSync.DIRECTION_X) {
        nextDelta = scale * diffX;
        nextVel = scale * velX;
        this._position += nextDelta;
    } else if (this.options.direction === TouchSync.DIRECTION_Y) {
        nextDelta = scale * diffY;
        nextVel = scale * velY;
        this._position += nextDelta;
    } else {
        nextDelta = [
            scale * diffX,
            scale * diffY
        ];
        nextVel = [
            scale * velX,
            scale * velY
        ];
        this._position[0] += nextDelta[0];
        this._position[1] += nextDelta[1];
    }
    var payload = this._payload;
    payload.delta = nextDelta;
    payload.velocity = nextVel;
    payload.position = this._position;
    payload.clientX = data.x;
    payload.clientY = data.y;
    payload.count = data.count;
    payload.touch = data.identifier;
    this._eventOutput.emit('update', payload);
}
function _handleEnd(data) {
    this._payload.count = data.count;
    this._eventOutput.emit('end', this._payload);
}
TouchSync.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
TouchSync.prototype.getOptions = function getOptions() {
    return this.options;
};
module.exports = TouchSync;
},{"../core/EventHandler":8,"../core/OptionsManager":11,"./TouchTracker":32}],32:[function(require,module,exports){
var EventHandler = require('../core/EventHandler');
var _now = Date.now;
function _timestampTouch(touch, event, history) {
    return {
        x: touch.clientX,
        y: touch.clientY,
        identifier: touch.identifier,
        origin: event.origin,
        timestamp: _now(),
        count: event.touches.length,
        history: history
    };
}
function _handleStart(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var data = _timestampTouch(touch, event, null);
        this.eventOutput.emit('trackstart', data);
        if (!this.selective && !this.touchHistory[touch.identifier])
            this.track(data);
    }
}
function _handleMove(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var history = this.touchHistory[touch.identifier];
        if (history) {
            var data = _timestampTouch(touch, event, history);
            this.touchHistory[touch.identifier].push(data);
            this.eventOutput.emit('trackmove', data);
        }
    }
}
function _handleEnd(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var history = this.touchHistory[touch.identifier];
        if (history) {
            var data = _timestampTouch(touch, event, history);
            this.eventOutput.emit('trackend', data);
            delete this.touchHistory[touch.identifier];
        }
    }
}
function _handleUnpipe() {
    for (var i in this.touchHistory) {
        var history = this.touchHistory[i];
        this.eventOutput.emit('trackend', {
            touch: history[history.length - 1].touch,
            timestamp: Date.now(),
            count: 0,
            history: history
        });
        delete this.touchHistory[i];
    }
}
function TouchTracker(selective) {
    this.selective = selective;
    this.touchHistory = {};
    this.eventInput = new EventHandler();
    this.eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this.eventInput);
    EventHandler.setOutputHandler(this, this.eventOutput);
    this.eventInput.on('touchstart', _handleStart.bind(this));
    this.eventInput.on('touchmove', _handleMove.bind(this));
    this.eventInput.on('touchend', _handleEnd.bind(this));
    this.eventInput.on('touchcancel', _handleEnd.bind(this));
    this.eventInput.on('unpipe', _handleUnpipe.bind(this));
}
TouchTracker.prototype.track = function track(data) {
    this.touchHistory[data.identifier] = [data];
};
module.exports = TouchTracker;
},{"../core/EventHandler":8}],33:[function(require,module,exports){
var EventHandler = require('../core/EventHandler');
function TwoFingerSync() {
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this.touchAEnabled = false;
    this.touchAId = 0;
    this.posA = null;
    this.timestampA = 0;
    this.touchBEnabled = false;
    this.touchBId = 0;
    this.posB = null;
    this.timestampB = 0;
    this._eventInput.on('touchstart', this.handleStart.bind(this));
    this._eventInput.on('touchmove', this.handleMove.bind(this));
    this._eventInput.on('touchend', this.handleEnd.bind(this));
    this._eventInput.on('touchcancel', this.handleEnd.bind(this));
}
TwoFingerSync.calculateAngle = function (posA, posB) {
    var diffX = posB[0] - posA[0];
    var diffY = posB[1] - posA[1];
    return Math.atan2(diffY, diffX);
};
TwoFingerSync.calculateDistance = function (posA, posB) {
    var diffX = posB[0] - posA[0];
    var diffY = posB[1] - posA[1];
    return Math.sqrt(diffX * diffX + diffY * diffY);
};
TwoFingerSync.calculateCenter = function (posA, posB) {
    return [
        (posA[0] + posB[0]) / 2,
        (posA[1] + posB[1]) / 2
    ];
};
var _now = Date.now;
TwoFingerSync.prototype.handleStart = function handleStart(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        if (!this.touchAEnabled) {
            this.touchAId = touch.identifier;
            this.touchAEnabled = true;
            this.posA = [
                touch.pageX,
                touch.pageY
            ];
            this.timestampA = _now();
        } else if (!this.touchBEnabled) {
            this.touchBId = touch.identifier;
            this.touchBEnabled = true;
            this.posB = [
                touch.pageX,
                touch.pageY
            ];
            this.timestampB = _now();
            this._startUpdate(event);
        }
    }
};
TwoFingerSync.prototype.handleMove = function handleMove(event) {
    if (!(this.touchAEnabled && this.touchBEnabled))
        return;
    var prevTimeA = this.timestampA;
    var prevTimeB = this.timestampB;
    var diffTime;
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        if (touch.identifier === this.touchAId) {
            this.posA = [
                touch.pageX,
                touch.pageY
            ];
            this.timestampA = _now();
            diffTime = this.timestampA - prevTimeA;
        } else if (touch.identifier === this.touchBId) {
            this.posB = [
                touch.pageX,
                touch.pageY
            ];
            this.timestampB = _now();
            diffTime = this.timestampB - prevTimeB;
        }
    }
    if (diffTime)
        this._moveUpdate(diffTime);
};
TwoFingerSync.prototype.handleEnd = function handleEnd(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        if (touch.identifier === this.touchAId || touch.identifier === this.touchBId) {
            if (this.touchAEnabled && this.touchBEnabled) {
                this._eventOutput.emit('end', {
                    touches: [
                        this.touchAId,
                        this.touchBId
                    ],
                    angle: this._angle
                });
            }
            this.touchAEnabled = false;
            this.touchAId = 0;
            this.touchBEnabled = false;
            this.touchBId = 0;
        }
    }
};
module.exports = TwoFingerSync;
},{"../core/EventHandler":8}],34:[function(require,module,exports){
var Vector = require('./Vector');
function Matrix(values) {
    this.values = values || [
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ]
    ];
    return this;
}
var _register = new Matrix();
var _vectorRegister = new Vector();
Matrix.prototype.get = function get() {
    return this.values;
};
Matrix.prototype.set = function set(values) {
    this.values = values;
};
Matrix.prototype.vectorMultiply = function vectorMultiply(v) {
    var M = this.get();
    var v0 = v.x;
    var v1 = v.y;
    var v2 = v.z;
    var M0 = M[0];
    var M1 = M[1];
    var M2 = M[2];
    var M00 = M0[0];
    var M01 = M0[1];
    var M02 = M0[2];
    var M10 = M1[0];
    var M11 = M1[1];
    var M12 = M1[2];
    var M20 = M2[0];
    var M21 = M2[1];
    var M22 = M2[2];
    return _vectorRegister.setXYZ(M00 * v0 + M01 * v1 + M02 * v2, M10 * v0 + M11 * v1 + M12 * v2, M20 * v0 + M21 * v1 + M22 * v2);
};
Matrix.prototype.multiply = function multiply(M2) {
    var M1 = this.get();
    var result = [[]];
    for (var i = 0; i < 3; i++) {
        result[i] = [];
        for (var j = 0; j < 3; j++) {
            var sum = 0;
            for (var k = 0; k < 3; k++) {
                sum += M1[i][k] * M2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return _register.set(result);
};
Matrix.prototype.transpose = function transpose() {
    var result = [];
    var M = this.get();
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            result[row][col] = M[col][row];
        }
    }
    return _register.set(result);
};
Matrix.prototype.clone = function clone() {
    var values = this.get();
    var M = [];
    for (var row = 0; row < 3; row++)
        M[row] = values[row].slice();
    return new Matrix(M);
};
module.exports = Matrix;
},{"./Vector":38}],35:[function(require,module,exports){
var Matrix = require('./Matrix');
function Quaternion(w, x, y, z) {
    if (arguments.length === 1)
        this.set(w);
    else {
        this.w = w !== undefined ? w : 1;
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
        this.z = z !== undefined ? z : 0;
    }
    return this;
}
var register = new Quaternion(1, 0, 0, 0);
Quaternion.prototype.add = function add(q) {
    return register.setWXYZ(this.w + q.w, this.x + q.x, this.y + q.y, this.z + q.z);
};
Quaternion.prototype.sub = function sub(q) {
    return register.setWXYZ(this.w - q.w, this.x - q.x, this.y - q.y, this.z - q.z);
};
Quaternion.prototype.scalarDivide = function scalarDivide(s) {
    return this.scalarMultiply(1 / s);
};
Quaternion.prototype.scalarMultiply = function scalarMultiply(s) {
    return register.setWXYZ(this.w * s, this.x * s, this.y * s, this.z * s);
};
Quaternion.prototype.multiply = function multiply(q) {
    var x1 = this.x;
    var y1 = this.y;
    var z1 = this.z;
    var w1 = this.w;
    var x2 = q.x;
    var y2 = q.y;
    var z2 = q.z;
    var w2 = q.w || 0;
    return register.setWXYZ(w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2, x1 * w2 + x2 * w1 + y2 * z1 - y1 * z2, y1 * w2 + y2 * w1 + x1 * z2 - x2 * z1, z1 * w2 + z2 * w1 + x2 * y1 - x1 * y2);
};
var conj = new Quaternion(1, 0, 0, 0);
Quaternion.prototype.rotateVector = function rotateVector(v) {
    conj.set(this.conj());
    return register.set(this.multiply(v).multiply(conj));
};
Quaternion.prototype.inverse = function inverse() {
    return register.set(this.conj().scalarDivide(this.normSquared()));
};
Quaternion.prototype.negate = function negate() {
    return this.scalarMultiply(-1);
};
Quaternion.prototype.conj = function conj() {
    return register.setWXYZ(this.w, -this.x, -this.y, -this.z);
};
Quaternion.prototype.normalize = function normalize(length) {
    length = length === undefined ? 1 : length;
    return this.scalarDivide(length * this.norm());
};
Quaternion.prototype.makeFromAngleAndAxis = function makeFromAngleAndAxis(angle, v) {
    var n = v.normalize();
    var ha = angle * 0.5;
    var s = -Math.sin(ha);
    this.x = s * n.x;
    this.y = s * n.y;
    this.z = s * n.z;
    this.w = Math.cos(ha);
    return this;
};
Quaternion.prototype.setWXYZ = function setWXYZ(w, x, y, z) {
    register.clear();
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};
Quaternion.prototype.set = function set(v) {
    if (v instanceof Array) {
        this.w = 0;
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
    } else {
        this.w = v.w;
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
    }
    if (this !== register)
        register.clear();
    return this;
};
Quaternion.prototype.put = function put(q) {
    q.set(register);
};
Quaternion.prototype.clone = function clone() {
    return new Quaternion(this);
};
Quaternion.prototype.clear = function clear() {
    this.w = 1;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
};
Quaternion.prototype.isEqual = function isEqual(q) {
    return q.w === this.w && q.x === this.x && q.y === this.y && q.z === this.z;
};
Quaternion.prototype.dot = function dot(q) {
    return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
};
Quaternion.prototype.normSquared = function normSquared() {
    return this.dot(this);
};
Quaternion.prototype.norm = function norm() {
    return Math.sqrt(this.normSquared());
};
Quaternion.prototype.isZero = function isZero() {
    return !(this.x || this.y || this.z);
};
Quaternion.prototype.getTransform = function getTransform() {
    var temp = this.normalize(1);
    var x = temp.x;
    var y = temp.y;
    var z = temp.z;
    var w = temp.w;
    return [
        1 - 2 * y * y - 2 * z * z,
        2 * x * y - 2 * z * w,
        2 * x * z + 2 * y * w,
        0,
        2 * x * y + 2 * z * w,
        1 - 2 * x * x - 2 * z * z,
        2 * y * z - 2 * x * w,
        0,
        2 * x * z - 2 * y * w,
        2 * y * z + 2 * x * w,
        1 - 2 * x * x - 2 * y * y,
        0,
        0,
        0,
        0,
        1
    ];
};
var matrixRegister = new Matrix();
Quaternion.prototype.getMatrix = function getMatrix() {
    var temp = this.normalize(1);
    var x = temp.x;
    var y = temp.y;
    var z = temp.z;
    var w = temp.w;
    return matrixRegister.set([
        [
            1 - 2 * y * y - 2 * z * z,
            2 * x * y + 2 * z * w,
            2 * x * z - 2 * y * w
        ],
        [
            2 * x * y - 2 * z * w,
            1 - 2 * x * x - 2 * z * z,
            2 * y * z + 2 * x * w
        ],
        [
            2 * x * z + 2 * y * w,
            2 * y * z - 2 * x * w,
            1 - 2 * x * x - 2 * y * y
        ]
    ]);
};
var epsilon = 0.00001;
Quaternion.prototype.slerp = function slerp(q, t) {
    var omega;
    var cosomega;
    var sinomega;
    var scaleFrom;
    var scaleTo;
    cosomega = this.dot(q);
    if (1 - cosomega > epsilon) {
        omega = Math.acos(cosomega);
        sinomega = Math.sin(omega);
        scaleFrom = Math.sin((1 - t) * omega) / sinomega;
        scaleTo = Math.sin(t * omega) / sinomega;
    } else {
        scaleFrom = 1 - t;
        scaleTo = t;
    }
    return register.set(this.scalarMultiply(scaleFrom / scaleTo).add(q).multiply(scaleTo));
};
module.exports = Quaternion;
},{"./Matrix":34}],36:[function(require,module,exports){
var RAND = Math.random;
function _randomFloat(min, max) {
    return min + RAND() * (max - min);
}
function _randomInteger(min, max) {
    return min + RAND() * (max - min + 1) >> 0;
}
var Random = {};
Random.integer = function integer(min, max, dim) {
    min = min !== undefined ? min : 0;
    max = max !== undefined ? max : 1;
    if (dim !== undefined) {
        var result = [];
        for (var i = 0; i < dim; i++)
            result.push(_randomInteger(min, max));
        return result;
    } else
        return _randomInteger(min, max);
};
Random.range = function range(min, max, dim) {
    min = min !== undefined ? min : 0;
    max = max !== undefined ? max : 1;
    if (dim !== undefined) {
        var result = [];
        for (var i = 0; i < dim; i++)
            result.push(_randomFloat(min, max));
        return result;
    } else
        return _randomFloat(min, max);
};
Random.sign = function sign(prob) {
    prob = prob !== undefined ? prob : 0.5;
    return RAND() < prob ? 1 : -1;
};
Random.bool = function bool(prob) {
    prob = prob !== undefined ? prob : 0.5;
    return RAND() < prob;
};
module.exports = Random;
},{}],37:[function(require,module,exports){
var Utilities = {};
Utilities.clamp = function clamp(value, range) {
    return Math.max(Math.min(value, range[1]), range[0]);
};
Utilities.length = function length(array) {
    var distanceSquared = 0;
    for (var i = 0; i < array.length; i++) {
        distanceSquared += array[i] * array[i];
    }
    return Math.sqrt(distanceSquared);
};
module.exports = Utilities;
},{}],38:[function(require,module,exports){
function Vector(x, y, z) {
    if (arguments.length === 1 && x !== undefined)
        this.set(x);
    else {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    return this;
}
var _register = new Vector(0, 0, 0);
Vector.prototype.add = function add(v) {
    return _setXYZ.call(_register, this.x + v.x, this.y + v.y, this.z + v.z);
};
Vector.prototype.sub = function sub(v) {
    return _setXYZ.call(_register, this.x - v.x, this.y - v.y, this.z - v.z);
};
Vector.prototype.mult = function mult(r) {
    return _setXYZ.call(_register, r * this.x, r * this.y, r * this.z);
};
Vector.prototype.div = function div(r) {
    return this.mult(1 / r);
};
Vector.prototype.cross = function cross(v) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var vx = v.x;
    var vy = v.y;
    var vz = v.z;
    return _setXYZ.call(_register, z * vy - y * vz, x * vz - z * vx, y * vx - x * vy);
};
Vector.prototype.equals = function equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
};
Vector.prototype.rotateX = function rotateX(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return _setXYZ.call(_register, x, y * cosTheta - z * sinTheta, y * sinTheta + z * cosTheta);
};
Vector.prototype.rotateY = function rotateY(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return _setXYZ.call(_register, z * sinTheta + x * cosTheta, y, z * cosTheta - x * sinTheta);
};
Vector.prototype.rotateZ = function rotateZ(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return _setXYZ.call(_register, x * cosTheta - y * sinTheta, x * sinTheta + y * cosTheta, z);
};
Vector.prototype.dot = function dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
};
Vector.prototype.normSquared = function normSquared() {
    return this.dot(this);
};
Vector.prototype.norm = function norm() {
    return Math.sqrt(this.normSquared());
};
Vector.prototype.normalize = function normalize(length) {
    if (arguments.length === 0)
        length = 1;
    var norm = this.norm();
    if (norm > 1e-7)
        return _setFromVector.call(_register, this.mult(length / norm));
    else
        return _setXYZ.call(_register, length, 0, 0);
};
Vector.prototype.clone = function clone() {
    return new Vector(this);
};
Vector.prototype.isZero = function isZero() {
    return !(this.x || this.y || this.z);
};
function _setXYZ(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
}
function _setFromArray(v) {
    return _setXYZ.call(this, v[0], v[1], v[2] || 0);
}
function _setFromVector(v) {
    return _setXYZ.call(this, v.x, v.y, v.z);
}
function _setFromNumber(x) {
    return _setXYZ.call(this, x, 0, 0);
}
Vector.prototype.set = function set(v) {
    if (v instanceof Array)
        return _setFromArray.call(this, v);
    if (typeof v === 'number')
        return _setFromNumber.call(this, v);
    return _setFromVector.call(this, v);
};
Vector.prototype.setXYZ = function (x, y, z) {
    return _setXYZ.apply(this, arguments);
};
Vector.prototype.set1D = function (x) {
    return _setFromNumber.call(this, x);
};
Vector.prototype.put = function put(v) {
    if (this === _register)
        _setFromVector.call(v, _register);
    else
        _setFromVector.call(v, this);
};
Vector.prototype.clear = function clear() {
    return _setXYZ.call(this, 0, 0, 0);
};
Vector.prototype.cap = function cap(cap) {
    if (cap === Infinity)
        return _setFromVector.call(_register, this);
    var norm = this.norm();
    if (norm > cap)
        return _setFromVector.call(_register, this.mult(cap / norm));
    else
        return _setFromVector.call(_register, this);
};
Vector.prototype.project = function project(n) {
    return n.mult(this.dot(n));
};
Vector.prototype.reflectAcross = function reflectAcross(n) {
    n.normalize().put(n);
    return _setFromVector(_register, this.sub(this.project(n).mult(2)));
};
Vector.prototype.get = function get() {
    return [
        this.x,
        this.y,
        this.z
    ];
};
Vector.prototype.get1D = function () {
    return this.x;
};
module.exports = Vector;
},{}],39:[function(require,module,exports){
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');
var EventHandler = require('famous/core/EventHandler');
var Utilities = require('famous/math/Utilities');
var GenericSync = require('famous/inputs/GenericSync');
var MouseSync = require('famous/inputs/MouseSync');
var TouchSync = require('famous/inputs/TouchSync');
GenericSync.register({
    'mouse': MouseSync,
    'touch': TouchSync
});
function Draggable(options) {
    this.options = Object.create(Draggable.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this._positionState = new Transitionable([
        0,
        0
    ]);
    this._differential = [
        0,
        0
    ];
    this._active = true;
    this.sync = new GenericSync([
        'mouse',
        'touch'
    ], { scale: this.options.scale });
    this.eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this.sync);
    EventHandler.setOutputHandler(this, this.eventOutput);
    _bindEvents.call(this);
}
var _direction = {
        x: 1,
        y: 2
    };
Draggable.DIRECTION_X = _direction.x;
Draggable.DIRECTION_Y = _direction.y;
var _clamp = Utilities.clamp;
Draggable.DEFAULT_OPTIONS = {
    projection: _direction.x | _direction.y,
    scale: 1,
    xRange: null,
    yRange: null,
    snapX: 0,
    snapY: 0,
    transition: { duration: 0 }
};
function _mapDifferential(differential) {
    var opts = this.options;
    var projection = opts.projection;
    var snapX = opts.snapX;
    var snapY = opts.snapY;
    var tx = projection & _direction.x ? differential[0] : 0;
    var ty = projection & _direction.y ? differential[1] : 0;
    if (snapX > 0)
        tx -= tx % snapX;
    if (snapY > 0)
        ty -= ty % snapY;
    return [
        tx,
        ty
    ];
}
function _handleStart() {
    if (!this._active)
        return;
    if (this._positionState.isActive())
        this._positionState.halt();
    this.eventOutput.emit('start', { position: this.getPosition() });
}
function _handleMove(event) {
    if (!this._active)
        return;
    var options = this.options;
    this._differential = event.position;
    var newDifferential = _mapDifferential.call(this, this._differential);
    this._differential[0] -= newDifferential[0];
    this._differential[1] -= newDifferential[1];
    var pos = this.getPosition();
    pos[0] += newDifferential[0];
    pos[1] += newDifferential[1];
    if (options.xRange) {
        var xRange = [
                options.xRange[0] + 0.5 * options.snapX,
                options.xRange[1] - 0.5 * options.snapX
            ];
        pos[0] = _clamp(pos[0], xRange);
    }
    if (options.yRange) {
        var yRange = [
                options.yRange[0] + 0.5 * options.snapY,
                options.yRange[1] - 0.5 * options.snapY
            ];
        pos[1] = _clamp(pos[1], yRange);
    }
    this.eventOutput.emit('update', { position: pos });
}
function _handleEnd() {
    if (!this._active)
        return;
    this.eventOutput.emit('end', { position: this.getPosition() });
}
function _bindEvents() {
    this.sync.on('start', _handleStart.bind(this));
    this.sync.on('update', _handleMove.bind(this));
    this.sync.on('end', _handleEnd.bind(this));
}
Draggable.prototype.setOptions = function setOptions(options) {
    var currentOptions = this.options;
    if (options.projection !== undefined) {
        var proj = options.projection;
        this.options.projection = 0;
        [
            'x',
            'y'
        ].forEach(function (val) {
            if (proj.indexOf(val) !== -1)
                currentOptions.projection |= _direction[val];
        });
    }
    if (options.scale !== undefined) {
        currentOptions.scale = options.scale;
        this.sync.setOptions({ scale: options.scale });
    }
    if (options.xRange !== undefined)
        currentOptions.xRange = options.xRange;
    if (options.yRange !== undefined)
        currentOptions.yRange = options.yRange;
    if (options.snapX !== undefined)
        currentOptions.snapX = options.snapX;
    if (options.snapY !== undefined)
        currentOptions.snapY = options.snapY;
};
Draggable.prototype.getPosition = function getPosition() {
    return this._positionState.get();
};
Draggable.prototype.setRelativePosition = function setRelativePosition(position, transition, callback) {
    var currPos = this.getPosition();
    var relativePosition = [
            currPos[0] + position[0],
            currPos[1] + position[1]
        ];
    this.setPosition(relativePosition, transition, callback);
};
Draggable.prototype.setPosition = function setPosition(position, transition, callback) {
    if (this._positionState.isActive())
        this._positionState.halt();
    this._positionState.set(position, transition, callback);
};
Draggable.prototype.activate = function activate() {
    this._active = true;
};
Draggable.prototype.deactivate = function deactivate() {
    this._active = false;
};
Draggable.prototype.toggle = function toggle() {
    this._active = !this._active;
};
Draggable.prototype.modify = function modify(target) {
    var pos = this.getPosition();
    return {
        transform: Transform.translate(pos[0], pos[1]),
        target: target
    };
};
module.exports = Draggable;
},{"famous/core/EventHandler":49,"famous/core/Transform":57,"famous/inputs/GenericSync":60,"famous/inputs/MouseSync":61,"famous/inputs/TouchSync":63,"famous/math/Utilities":67,"famous/transitions/Transitionable":111}],40:[function(require,module,exports){
var Transitionable = require('famous/transitions/Transitionable');
var OptionsManager = require('famous/core/OptionsManager');
function Fader(options, startState) {
    this.options = Object.create(Fader.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    if (!startState)
        startState = 0;
    this.transitionHelper = new Transitionable(startState);
}
Fader.DEFAULT_OPTIONS = {
    cull: false,
    transition: true,
    pulseInTransition: true,
    pulseOutTransition: true
};
Fader.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
Fader.prototype.show = function show(transition, callback) {
    transition = transition || this.options.transition;
    this.set(1, transition, callback);
};
Fader.prototype.hide = function hide(transition, callback) {
    transition = transition || this.options.transition;
    this.set(0, transition, callback);
};
Fader.prototype.set = function set(state, transition, callback) {
    this.halt();
    this.transitionHelper.set(state, transition, callback);
};
Fader.prototype.halt = function halt() {
    this.transitionHelper.halt();
};
Fader.prototype.isVisible = function isVisible() {
    return this.transitionHelper.get() > 0;
};
Fader.prototype.modify = function modify(target) {
    var currOpacity = this.transitionHelper.get();
    if (this.options.cull && !currOpacity)
        return undefined;
    else
        return {
            opacity: currOpacity,
            target: target
        };
};
module.exports = Fader;
},{"famous/core/OptionsManager":52,"famous/transitions/Transitionable":111}],41:[function(require,module,exports){
function ModifierChain() {
    this._chain = [];
    if (arguments.length)
        this.addModifier.apply(this, arguments);
}
ModifierChain.prototype.addModifier = function addModifier(varargs) {
    Array.prototype.push.apply(this._chain, arguments);
};
ModifierChain.prototype.removeModifier = function removeModifier(modifier) {
    var index = this._chain.indexOf(modifier);
    if (index < 0)
        return;
    this._chain.splice(index, 1);
};
ModifierChain.prototype.modify = function modify(input) {
    var chain = this._chain;
    var result = input;
    for (var i = 0; i < chain.length; i++) {
        result = chain[i].modify(result);
    }
    return result;
};
module.exports = ModifierChain;
},{}],42:[function(require,module,exports){
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');
var TransitionableTransform = require('famous/transitions/TransitionableTransform');
function StateModifier(options) {
    this._transformState = new TransitionableTransform(Transform.identity);
    this._opacityState = new Transitionable(1);
    this._originState = new Transitionable([
        0,
        0
    ]);
    this._alignState = new Transitionable([
        0,
        0
    ]);
    this._sizeState = new Transitionable([
        0,
        0
    ]);
    this._proportionsState = new Transitionable([
        0,
        0
    ]);
    this._modifier = new Modifier({
        transform: this._transformState,
        opacity: this._opacityState,
        origin: null,
        align: null,
        size: null,
        proportions: null
    });
    this._hasOrigin = false;
    this._hasAlign = false;
    this._hasSize = false;
    this._hasProportions = false;
    if (options) {
        if (options.transform)
            this.setTransform(options.transform);
        if (options.opacity !== undefined)
            this.setOpacity(options.opacity);
        if (options.origin)
            this.setOrigin(options.origin);
        if (options.align)
            this.setAlign(options.align);
        if (options.size)
            this.setSize(options.size);
        if (options.proportions)
            this.setProportions(options.proportions);
    }
}
StateModifier.prototype.setTransform = function setTransform(transform, transition, callback) {
    this._transformState.set(transform, transition, callback);
    return this;
};
StateModifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
    this._opacityState.set(opacity, transition, callback);
    return this;
};
StateModifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
    if (origin === null) {
        if (this._hasOrigin) {
            this._modifier.originFrom(null);
            this._hasOrigin = false;
        }
        return this;
    } else if (!this._hasOrigin) {
        this._hasOrigin = true;
        this._modifier.originFrom(this._originState);
    }
    this._originState.set(origin, transition, callback);
    return this;
};
StateModifier.prototype.setAlign = function setOrigin(align, transition, callback) {
    if (align === null) {
        if (this._hasAlign) {
            this._modifier.alignFrom(null);
            this._hasAlign = false;
        }
        return this;
    } else if (!this._hasAlign) {
        this._hasAlign = true;
        this._modifier.alignFrom(this._alignState);
    }
    this._alignState.set(align, transition, callback);
    return this;
};
StateModifier.prototype.setSize = function setSize(size, transition, callback) {
    if (size === null) {
        if (this._hasSize) {
            this._modifier.sizeFrom(null);
            this._hasSize = false;
        }
        return this;
    } else if (!this._hasSize) {
        this._hasSize = true;
        this._modifier.sizeFrom(this._sizeState);
    }
    this._sizeState.set(size, transition, callback);
    return this;
};
StateModifier.prototype.setProportions = function setSize(proportions, transition, callback) {
    if (proportions === null) {
        if (this._hasProportions) {
            this._modifier.proportionsFrom(null);
            this._hasProportions = false;
        }
        return this;
    } else if (!this._hasProportions) {
        this._hasProportions = true;
        this._modifier.proportionsFrom(this._proportionsState);
    }
    this._proportionsState.set(proportions, transition, callback);
    return this;
};
StateModifier.prototype.halt = function halt() {
    this._transformState.halt();
    this._opacityState.halt();
    this._originState.halt();
    this._alignState.halt();
    this._sizeState.halt();
    this._proportionsState.halt();
};
StateModifier.prototype.getTransform = function getTransform() {
    return this._transformState.get();
};
StateModifier.prototype.getFinalTransform = function getFinalTransform() {
    return this._transformState.getFinal();
};
StateModifier.prototype.getOpacity = function getOpacity() {
    return this._opacityState.get();
};
StateModifier.prototype.getOrigin = function getOrigin() {
    return this._hasOrigin ? this._originState.get() : null;
};
StateModifier.prototype.getAlign = function getAlign() {
    return this._hasAlign ? this._alignState.get() : null;
};
StateModifier.prototype.getSize = function getSize() {
    return this._hasSize ? this._sizeState.get() : null;
};
StateModifier.prototype.getProportions = function getProportions() {
    return this._hasProportions ? this._proportionsState.get() : null;
};
StateModifier.prototype.modify = function modify(target) {
    return this._modifier.modify(target);
};
module.exports = StateModifier;
},{"famous/core/Modifier":51,"famous/core/Transform":57,"famous/transitions/Transitionable":111,"famous/transitions/TransitionableTransform":112}],43:[function(require,module,exports){
module.exports=require(2)
},{"./ElementAllocator":44,"./EventHandler":49,"./RenderNode":53,"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/Context.js":2,"famous/transitions/Transitionable":94}],44:[function(require,module,exports){
module.exports=require(3)
},{"/Users/alonsoholmes/developer/famous/famous/core/ElementAllocator.js":3}],45:[function(require,module,exports){
module.exports=require(4)
},{"./Entity":47,"./EventHandler":49,"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/ElementOutput.js":4}],46:[function(require,module,exports){
module.exports=require(5)
},{"./Context":43,"./EventHandler":49,"./OptionsManager":52,"/Users/alonsoholmes/developer/famous/famous/core/Engine.js":5}],47:[function(require,module,exports){
module.exports=require(6)
},{"/Users/alonsoholmes/developer/famous/famous/core/Entity.js":6}],48:[function(require,module,exports){
module.exports=require(7)
},{"/Users/alonsoholmes/developer/famous/famous/core/EventEmitter.js":7}],49:[function(require,module,exports){
module.exports=require(8)
},{"./EventEmitter":48,"/Users/alonsoholmes/developer/famous/famous/core/EventHandler.js":8}],50:[function(require,module,exports){
module.exports=require(9)
},{"./Context":43,"./Surface":56,"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/Group.js":9}],51:[function(require,module,exports){
module.exports=require(10)
},{"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/Modifier.js":10,"famous/transitions/Transitionable":94,"famous/transitions/TransitionableTransform":95}],52:[function(require,module,exports){
module.exports=require(11)
},{"./EventHandler":49,"/Users/alonsoholmes/developer/famous/famous/core/OptionsManager.js":11}],53:[function(require,module,exports){
module.exports=require(12)
},{"./Entity":47,"./SpecParser":55,"/Users/alonsoholmes/developer/famous/famous/core/RenderNode.js":12}],54:[function(require,module,exports){
module.exports=require(13)
},{"./Modifier":51,"./RenderNode":53,"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/Scene.js":13}],55:[function(require,module,exports){
module.exports=require(14)
},{"./Transform":57,"/Users/alonsoholmes/developer/famous/famous/core/SpecParser.js":14}],56:[function(require,module,exports){
module.exports=require(15)
},{"./ElementOutput":45,"/Users/alonsoholmes/developer/famous/famous/core/Surface.js":15}],57:[function(require,module,exports){
module.exports=require(16)
},{"/Users/alonsoholmes/developer/famous/famous/core/Transform.js":16}],58:[function(require,module,exports){
module.exports=require(17)
},{"./EventHandler":49,"./OptionsManager":52,"./RenderNode":53,"/Users/alonsoholmes/developer/famous/famous/core/View.js":17,"famous/utilities/Utility":97}],59:[function(require,module,exports){
module.exports=require(18)
},{"/Users/alonsoholmes/developer/famous/famous/core/ViewSequence.js":18}],60:[function(require,module,exports){
module.exports=require(25)
},{"../core/EventHandler":49,"/Users/alonsoholmes/developer/famous/famous/inputs/GenericSync.js":25}],61:[function(require,module,exports){
module.exports=require(26)
},{"../core/EventHandler":49,"../core/OptionsManager":52,"/Users/alonsoholmes/developer/famous/famous/inputs/MouseSync.js":26}],62:[function(require,module,exports){
module.exports=require(30)
},{"../core/Engine":46,"../core/EventHandler":49,"../core/OptionsManager":52,"/Users/alonsoholmes/developer/famous/famous/inputs/ScrollSync.js":30}],63:[function(require,module,exports){
module.exports=require(31)
},{"../core/EventHandler":49,"../core/OptionsManager":52,"./TouchTracker":64,"/Users/alonsoholmes/developer/famous/famous/inputs/TouchSync.js":31}],64:[function(require,module,exports){
module.exports=require(32)
},{"../core/EventHandler":49,"/Users/alonsoholmes/developer/famous/famous/inputs/TouchTracker.js":32}],65:[function(require,module,exports){
module.exports=require(34)
},{"./Vector":68,"/Users/alonsoholmes/developer/famous/famous/math/Matrix.js":34}],66:[function(require,module,exports){
module.exports=require(35)
},{"./Matrix":65,"/Users/alonsoholmes/developer/famous/famous/math/Quaternion.js":35}],67:[function(require,module,exports){
module.exports=require(37)
},{"/Users/alonsoholmes/developer/famous/famous/math/Utilities.js":37}],68:[function(require,module,exports){
module.exports=require(38)
},{"/Users/alonsoholmes/developer/famous/famous/math/Vector.js":38}],69:[function(require,module,exports){
module.exports=require(2)
},{"./ElementAllocator":70,"./EventHandler":74,"./RenderNode":78,"./Transform":81,"/Users/alonsoholmes/developer/famous/famous/core/Context.js":2,"famous/transitions/Transitionable":89}],70:[function(require,module,exports){
module.exports=require(3)
},{"/Users/alonsoholmes/developer/famous/famous/core/ElementAllocator.js":3}],71:[function(require,module,exports){
module.exports=require(4)
},{"./Entity":72,"./EventHandler":74,"./Transform":81,"/Users/alonsoholmes/developer/famous/famous/core/ElementOutput.js":4}],72:[function(require,module,exports){
module.exports=require(6)
},{"/Users/alonsoholmes/developer/famous/famous/core/Entity.js":6}],73:[function(require,module,exports){
module.exports=require(7)
},{"/Users/alonsoholmes/developer/famous/famous/core/EventEmitter.js":7}],74:[function(require,module,exports){
module.exports=require(8)
},{"./EventEmitter":73,"/Users/alonsoholmes/developer/famous/famous/core/EventHandler.js":8}],75:[function(require,module,exports){
module.exports=require(9)
},{"./Context":69,"./Surface":80,"./Transform":81,"/Users/alonsoholmes/developer/famous/famous/core/Group.js":9}],76:[function(require,module,exports){
module.exports=require(10)
},{"./Transform":81,"/Users/alonsoholmes/developer/famous/famous/core/Modifier.js":10,"famous/transitions/Transitionable":89,"famous/transitions/TransitionableTransform":90}],77:[function(require,module,exports){
module.exports=require(11)
},{"./EventHandler":74,"/Users/alonsoholmes/developer/famous/famous/core/OptionsManager.js":11}],78:[function(require,module,exports){
module.exports=require(12)
},{"./Entity":72,"./SpecParser":79,"/Users/alonsoholmes/developer/famous/famous/core/RenderNode.js":12}],79:[function(require,module,exports){
module.exports=require(14)
},{"./Transform":81,"/Users/alonsoholmes/developer/famous/famous/core/SpecParser.js":14}],80:[function(require,module,exports){
module.exports=require(15)
},{"./ElementOutput":71,"/Users/alonsoholmes/developer/famous/famous/core/Surface.js":15}],81:[function(require,module,exports){
module.exports=require(16)
},{"/Users/alonsoholmes/developer/famous/famous/core/Transform.js":16}],82:[function(require,module,exports){
module.exports=require(17)
},{"./EventHandler":74,"./OptionsManager":77,"./RenderNode":78,"/Users/alonsoholmes/developer/famous/famous/core/View.js":17,"famous/utilities/Utility":92}],83:[function(require,module,exports){
module.exports=require(18)
},{"/Users/alonsoholmes/developer/famous/famous/core/ViewSequence.js":18}],84:[function(require,module,exports){
module.exports=require(38)
},{"/Users/alonsoholmes/developer/famous/famous/math/Vector.js":38}],85:[function(require,module,exports){
module.exports=require(16)
},{"/Users/alonsoholmes/developer/famous/famous/core/Transform.js":16}],86:[function(require,module,exports){
module.exports=require(16)
},{"/Users/alonsoholmes/developer/famous/famous/core/Transform.js":16}],87:[function(require,module,exports){
var Utility = {};
Utility.Direction = {
    X: 0,
    Y: 1,
    Z: 2
};
Utility.after = function after(count, callback) {
    var counter = count;
    return function () {
        counter--;
        if (counter === 0)
            callback.apply(this, arguments);
    };
};
Utility.loadURL = function loadURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onreadystatechange() {
        if (this.readyState === 4) {
            if (callback)
                callback(this.responseText);
        }
    };
    xhr.open('GET', url);
    xhr.send();
};
Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    var result = document.createDocumentFragment();
    while (element.hasChildNodes())
        result.appendChild(element.firstChild);
    return result;
};
Utility.clone = function clone(b) {
    var a;
    if (typeof b === 'object') {
        a = b instanceof Array ? [] : {};
        for (var key in b) {
            if (typeof b[key] === 'object' && b[key] !== null) {
                if (b[key] instanceof Array) {
                    a[key] = new Array(b[key].length);
                    for (var i = 0; i < b[key].length; i++) {
                        a[key][i] = Utility.clone(b[key][i]);
                    }
                } else {
                    a[key] = Utility.clone(b[key]);
                }
            } else {
                a[key] = b[key];
            }
        }
    } else {
        a = b;
    }
    return a;
};
module.exports = Utility;
},{}],88:[function(require,module,exports){
var Utility = require('famous/utilities/Utility');
function MultipleTransition(method) {
    this.method = method;
    this._instances = [];
    this.state = [];
}
MultipleTransition.SUPPORTS_MULTIPLE = true;
MultipleTransition.prototype.get = function get() {
    for (var i = 0; i < this._instances.length; i++) {
        this.state[i] = this._instances[i].get();
    }
    return this.state;
};
MultipleTransition.prototype.set = function set(endState, transition, callback) {
    var _allCallback = Utility.after(endState.length, callback);
    for (var i = 0; i < endState.length; i++) {
        if (!this._instances[i])
            this._instances[i] = new this.method();
        this._instances[i].set(endState[i], transition, _allCallback);
    }
};
MultipleTransition.prototype.reset = function reset(startState) {
    for (var i = 0; i < startState.length; i++) {
        if (!this._instances[i])
            this._instances[i] = new this.method();
        this._instances[i].reset(startState[i]);
    }
};
module.exports = MultipleTransition;
},{"famous/utilities/Utility":87}],89:[function(require,module,exports){
var MultipleTransition = require('./MultipleTransition');
var TweenTransition = require('./TweenTransition');
function Transitionable(start) {
    this.currentAction = null;
    this.actionQueue = [];
    this.callbackQueue = [];
    this.state = 0;
    this.velocity = undefined;
    this._callback = undefined;
    this._engineInstance = null;
    this._currentMethod = null;
    this.set(start);
}
var transitionMethods = {};
Transitionable.registerMethod = function registerMethod(name, engineClass) {
    if (!(name in transitionMethods)) {
        transitionMethods[name] = engineClass;
        return true;
    } else
        return false;
};
Transitionable.unregisterMethod = function unregisterMethod(name) {
    if (name in transitionMethods) {
        delete transitionMethods[name];
        return true;
    } else
        return false;
};
function _loadNext() {
    if (this._callback) {
        var callback = this._callback;
        this._callback = undefined;
        callback();
    }
    if (this.actionQueue.length <= 0) {
        this.set(this.get());
        return;
    }
    this.currentAction = this.actionQueue.shift();
    this._callback = this.callbackQueue.shift();
    var method = null;
    var endValue = this.currentAction[0];
    var transition = this.currentAction[1];
    if (transition instanceof Object && transition.method) {
        method = transition.method;
        if (typeof method === 'string')
            method = transitionMethods[method];
    } else {
        method = TweenTransition;
    }
    if (this._currentMethod !== method) {
        if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
            this._engineInstance = new method();
        } else {
            this._engineInstance = new MultipleTransition(method);
        }
        this._currentMethod = method;
    }
    this._engineInstance.reset(this.state, this.velocity);
    if (this.velocity !== undefined)
        transition.velocity = this.velocity;
    this._engineInstance.set(endValue, transition, _loadNext.bind(this));
}
Transitionable.prototype.set = function set(endState, transition, callback) {
    if (!transition) {
        this.reset(endState);
        if (callback)
            callback();
        return this;
    }
    var action = [
            endState,
            transition
        ];
    this.actionQueue.push(action);
    this.callbackQueue.push(callback);
    if (!this.currentAction)
        _loadNext.call(this);
    return this;
};
Transitionable.prototype.reset = function reset(startState, startVelocity) {
    this._currentMethod = null;
    this._engineInstance = null;
    this._callback = undefined;
    this.state = startState;
    this.velocity = startVelocity;
    this.currentAction = null;
    this.actionQueue = [];
    this.callbackQueue = [];
};
Transitionable.prototype.delay = function delay(duration, callback) {
    this.set(this.get(), {
        duration: duration,
        curve: function () {
            return 0;
        }
    }, callback);
};
Transitionable.prototype.get = function get(timestamp) {
    if (this._engineInstance) {
        if (this._engineInstance.getVelocity)
            this.velocity = this._engineInstance.getVelocity();
        this.state = this._engineInstance.get(timestamp);
    }
    return this.state;
};
Transitionable.prototype.isActive = function isActive() {
    return !!this.currentAction;
};
Transitionable.prototype.halt = function halt() {
    return this.set(this.get());
};
module.exports = Transitionable;
},{"./MultipleTransition":88,"./TweenTransition":91}],90:[function(require,module,exports){
var Transitionable = require('./Transitionable');
var Transform = require('famous/core/Transform');
var Utility = require('famous/utilities/Utility');
function TransitionableTransform(transform) {
    this._final = Transform.identity.slice();
    this._finalTranslate = [
        0,
        0,
        0
    ];
    this._finalRotate = [
        0,
        0,
        0
    ];
    this._finalSkew = [
        0,
        0,
        0
    ];
    this._finalScale = [
        1,
        1,
        1
    ];
    this.translate = new Transitionable(this._finalTranslate);
    this.rotate = new Transitionable(this._finalRotate);
    this.skew = new Transitionable(this._finalSkew);
    this.scale = new Transitionable(this._finalScale);
    if (transform)
        this.set(transform);
}
function _build() {
    return Transform.build({
        translate: this.translate.get(),
        rotate: this.rotate.get(),
        skew: this.skew.get(),
        scale: this.scale.get()
    });
}
function _buildFinal() {
    return Transform.build({
        translate: this._finalTranslate,
        rotate: this._finalRotate,
        skew: this._finalSkew,
        scale: this._finalScale
    });
}
TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
    this._finalTranslate = translate;
    this._final = _buildFinal.call(this);
    this.translate.set(translate, transition, callback);
    return this;
};
TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
    this._finalScale = scale;
    this._final = _buildFinal.call(this);
    this.scale.set(scale, transition, callback);
    return this;
};
TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
    this._finalRotate = eulerAngles;
    this._final = _buildFinal.call(this);
    this.rotate.set(eulerAngles, transition, callback);
    return this;
};
TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
    this._finalSkew = skewAngles;
    this._final = _buildFinal.call(this);
    this.skew.set(skewAngles, transition, callback);
    return this;
};
TransitionableTransform.prototype.set = function set(transform, transition, callback) {
    var components = Transform.interpret(transform);
    this._finalTranslate = components.translate;
    this._finalRotate = components.rotate;
    this._finalSkew = components.skew;
    this._finalScale = components.scale;
    this._final = transform;
    var _callback = callback ? Utility.after(4, callback) : null;
    this.translate.set(components.translate, transition, _callback);
    this.rotate.set(components.rotate, transition, _callback);
    this.skew.set(components.skew, transition, _callback);
    this.scale.set(components.scale, transition, _callback);
    return this;
};
TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
    this.translate.setDefault(transition);
    this.rotate.setDefault(transition);
    this.skew.setDefault(transition);
    this.scale.setDefault(transition);
};
TransitionableTransform.prototype.get = function get() {
    if (this.isActive()) {
        return _build.call(this);
    } else
        return this._final;
};
TransitionableTransform.prototype.getFinal = function getFinal() {
    return this._final;
};
TransitionableTransform.prototype.isActive = function isActive() {
    return this.translate.isActive() || this.rotate.isActive() || this.scale.isActive() || this.skew.isActive();
};
TransitionableTransform.prototype.halt = function halt() {
    this.translate.halt();
    this.rotate.halt();
    this.skew.halt();
    this.scale.halt();
    this._final = this.get();
    this._finalTranslate = this.translate.get();
    this._finalRotate = this.rotate.get();
    this._finalSkew = this.skew.get();
    this._finalScale = this.scale.get();
};
module.exports = TransitionableTransform;
},{"./Transitionable":89,"famous/core/Transform":86,"famous/utilities/Utility":87}],91:[function(require,module,exports){
function TweenTransition(options) {
    this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this._startTime = 0;
    this._startValue = 0;
    this._updateTime = 0;
    this._endValue = 0;
    this._curve = undefined;
    this._duration = 0;
    this._active = false;
    this._callback = undefined;
    this.state = 0;
    this.velocity = undefined;
}
TweenTransition.Curves = {
    linear: function (t) {
        return t;
    },
    easeIn: function (t) {
        return t * t;
    },
    easeOut: function (t) {
        return t * (2 - t);
    },
    easeInOut: function (t) {
        if (t <= 0.5)
            return 2 * t * t;
        else
            return -2 * t * t + 4 * t - 1;
    },
    easeOutBounce: function (t) {
        return t * (3 - 2 * t);
    },
    spring: function (t) {
        return (1 - t) * Math.sin(6 * Math.PI * t) + t;
    }
};
TweenTransition.SUPPORTS_MULTIPLE = true;
TweenTransition.DEFAULT_OPTIONS = {
    curve: TweenTransition.Curves.linear,
    duration: 500,
    speed: 0
};
var registeredCurves = {};
TweenTransition.registerCurve = function registerCurve(curveName, curve) {
    if (!registeredCurves[curveName]) {
        registeredCurves[curveName] = curve;
        return true;
    } else {
        return false;
    }
};
TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
    if (registeredCurves[curveName]) {
        delete registeredCurves[curveName];
        return true;
    } else {
        return false;
    }
};
TweenTransition.getCurve = function getCurve(curveName) {
    var curve = registeredCurves[curveName];
    if (curve !== undefined)
        return curve;
    else
        throw new Error('curve not registered');
};
TweenTransition.getCurves = function getCurves() {
    return registeredCurves;
};
function _interpolate(a, b, t) {
    return (1 - t) * a + t * b;
}
function _clone(obj) {
    if (obj instanceof Object) {
        if (obj instanceof Array)
            return obj.slice(0);
        else
            return Object.create(obj);
    } else
        return obj;
}
function _normalize(transition, defaultTransition) {
    var result = { curve: defaultTransition.curve };
    if (defaultTransition.duration)
        result.duration = defaultTransition.duration;
    if (defaultTransition.speed)
        result.speed = defaultTransition.speed;
    if (transition instanceof Object) {
        if (transition.duration !== undefined)
            result.duration = transition.duration;
        if (transition.curve)
            result.curve = transition.curve;
        if (transition.speed)
            result.speed = transition.speed;
    }
    if (typeof result.curve === 'string')
        result.curve = TweenTransition.getCurve(result.curve);
    return result;
}
TweenTransition.prototype.setOptions = function setOptions(options) {
    if (options.curve !== undefined)
        this.options.curve = options.curve;
    if (options.duration !== undefined)
        this.options.duration = options.duration;
    if (options.speed !== undefined)
        this.options.speed = options.speed;
};
TweenTransition.prototype.set = function set(endValue, transition, callback) {
    if (!transition) {
        this.reset(endValue);
        if (callback)
            callback();
        return;
    }
    this._startValue = _clone(this.get());
    transition = _normalize(transition, this.options);
    if (transition.speed) {
        var startValue = this._startValue;
        if (startValue instanceof Object) {
            var variance = 0;
            for (var i in startValue)
                variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
            transition.duration = Math.sqrt(variance) / transition.speed;
        } else {
            transition.duration = Math.abs(endValue - startValue) / transition.speed;
        }
    }
    this._startTime = Date.now();
    this._endValue = _clone(endValue);
    this._startVelocity = _clone(transition.velocity);
    this._duration = transition.duration;
    this._curve = transition.curve;
    this._active = true;
    this._callback = callback;
};
TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
    if (this._callback) {
        var callback = this._callback;
        this._callback = undefined;
        callback();
    }
    this.state = _clone(startValue);
    this.velocity = _clone(startVelocity);
    this._startTime = 0;
    this._duration = 0;
    this._updateTime = 0;
    this._startValue = this.state;
    this._startVelocity = this.velocity;
    this._endValue = this.state;
    this._active = false;
};
TweenTransition.prototype.getVelocity = function getVelocity() {
    return this.velocity;
};
TweenTransition.prototype.get = function get(timestamp) {
    this.update(timestamp);
    return this.state;
};
function _calculateVelocity(current, start, curve, duration, t) {
    var velocity;
    var eps = 1e-7;
    var speed = (curve(t) - curve(t - eps)) / eps;
    if (current instanceof Array) {
        velocity = [];
        for (var i = 0; i < current.length; i++) {
            if (typeof current[i] === 'number')
                velocity[i] = speed * (current[i] - start[i]) / duration;
            else
                velocity[i] = 0;
        }
    } else
        velocity = speed * (current - start) / duration;
    return velocity;
}
function _calculateState(start, end, t) {
    var state;
    if (start instanceof Array) {
        state = [];
        for (var i = 0; i < start.length; i++) {
            if (typeof start[i] === 'number')
                state[i] = _interpolate(start[i], end[i], t);
            else
                state[i] = start[i];
        }
    } else
        state = _interpolate(start, end, t);
    return state;
}
TweenTransition.prototype.update = function update(timestamp) {
    if (!this._active) {
        if (this._callback) {
            var callback = this._callback;
            this._callback = undefined;
            callback();
        }
        return;
    }
    if (!timestamp)
        timestamp = Date.now();
    if (this._updateTime >= timestamp)
        return;
    this._updateTime = timestamp;
    var timeSinceStart = timestamp - this._startTime;
    if (timeSinceStart >= this._duration) {
        this.state = this._endValue;
        this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
        this._active = false;
    } else if (timeSinceStart < 0) {
        this.state = this._startValue;
        this.velocity = this._startVelocity;
    } else {
        var t = timeSinceStart / this._duration;
        this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
        this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
    }
};
TweenTransition.prototype.isActive = function isActive() {
    return this._active;
};
TweenTransition.prototype.halt = function halt() {
    this.reset(this.get());
};
TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);
TweenTransition.customCurve = function customCurve(v1, v2) {
    v1 = v1 || 0;
    v2 = v2 || 0;
    return function (t) {
        return v1 * t + (-2 * v1 - v2 + 3) * t * t + (v1 + v2 - 2) * t * t * t;
    };
};
module.exports = TweenTransition;
},{}],92:[function(require,module,exports){
module.exports=require(87)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/node_modules/famous/utilities/Utility.js":87}],93:[function(require,module,exports){
module.exports=require(88)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/MultipleTransition.js":88,"famous/utilities/Utility":92}],94:[function(require,module,exports){
module.exports=require(89)
},{"./MultipleTransition":93,"./TweenTransition":96,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/Transitionable.js":89}],95:[function(require,module,exports){
module.exports=require(90)
},{"./Transitionable":94,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TransitionableTransform.js":90,"famous/core/Transform":85,"famous/utilities/Utility":92}],96:[function(require,module,exports){
module.exports=require(91)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TweenTransition.js":91}],97:[function(require,module,exports){
module.exports=require(87)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/node_modules/famous/utilities/Utility.js":87}],98:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
function PhysicsEngine(options) {
    this.options = Object.create(PhysicsEngine.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this._particles = [];
    this._bodies = [];
    this._agentData = {};
    this._forces = [];
    this._constraints = [];
    this._buffer = 0;
    this._prevTime = now();
    this._isSleeping = false;
    this._eventHandler = null;
    this._currAgentId = 0;
    this._hasBodies = false;
    this._eventHandler = null;
}
var TIMESTEP = 17;
var MIN_TIME_STEP = 1000 / 120;
var MAX_TIME_STEP = 17;
var now = Date.now;
var _events = {
        start: 'start',
        update: 'update',
        end: 'end'
    };
PhysicsEngine.DEFAULT_OPTIONS = {
    constraintSteps: 1,
    sleepTolerance: 1e-7,
    velocityCap: undefined,
    angularVelocityCap: undefined
};
PhysicsEngine.prototype.setOptions = function setOptions(opts) {
    for (var key in opts)
        if (this.options[key])
            this.options[key] = opts[key];
};
PhysicsEngine.prototype.addBody = function addBody(body) {
    body._engine = this;
    if (body.isBody) {
        this._bodies.push(body);
        this._hasBodies = true;
    } else
        this._particles.push(body);
    body.on('start', this.wake.bind(this));
    return body;
};
PhysicsEngine.prototype.removeBody = function removeBody(body) {
    var array = body.isBody ? this._bodies : this._particles;
    var index = array.indexOf(body);
    if (index > -1) {
        for (var agent in this._agentData)
            this.detachFrom(agent.id, body);
        array.splice(index, 1);
    }
    if (this.getBodies().length === 0)
        this._hasBodies = false;
};
function _mapAgentArray(agent) {
    if (agent.applyForce)
        return this._forces;
    if (agent.applyConstraint)
        return this._constraints;
}
function _attachOne(agent, targets, source) {
    if (targets === undefined)
        targets = this.getParticlesAndBodies();
    if (!(targets instanceof Array))
        targets = [targets];
    agent.on('change', this.wake.bind(this));
    this._agentData[this._currAgentId] = {
        agent: agent,
        id: this._currAgentId,
        targets: targets,
        source: source
    };
    _mapAgentArray.call(this, agent).push(this._currAgentId);
    return this._currAgentId++;
}
PhysicsEngine.prototype.attach = function attach(agents, targets, source) {
    this.wake();
    if (agents instanceof Array) {
        var agentIDs = [];
        for (var i = 0; i < agents.length; i++)
            agentIDs[i] = _attachOne.call(this, agents[i], targets, source);
        return agentIDs;
    } else
        return _attachOne.call(this, agents, targets, source);
};
PhysicsEngine.prototype.attachTo = function attachTo(agentID, target) {
    _getAgentData.call(this, agentID).targets.push(target);
};
PhysicsEngine.prototype.detach = function detach(id) {
    var agent = this.getAgent(id);
    var agentArray = _mapAgentArray.call(this, agent);
    var index = agentArray.indexOf(id);
    agentArray.splice(index, 1);
    delete this._agentData[id];
};
PhysicsEngine.prototype.detachFrom = function detachFrom(id, target) {
    var boundAgent = _getAgentData.call(this, id);
    if (boundAgent.source === target)
        this.detach(id);
    else {
        var targets = boundAgent.targets;
        var index = targets.indexOf(target);
        if (index > -1)
            targets.splice(index, 1);
    }
};
PhysicsEngine.prototype.detachAll = function detachAll() {
    this._agentData = {};
    this._forces = [];
    this._constraints = [];
    this._currAgentId = 0;
};
function _getAgentData(id) {
    return this._agentData[id];
}
PhysicsEngine.prototype.getAgent = function getAgent(id) {
    return _getAgentData.call(this, id).agent;
};
PhysicsEngine.prototype.getParticles = function getParticles() {
    return this._particles;
};
PhysicsEngine.prototype.getBodies = function getBodies() {
    return this._bodies;
};
PhysicsEngine.prototype.getParticlesAndBodies = function getParticlesAndBodies() {
    return this.getParticles().concat(this.getBodies());
};
PhysicsEngine.prototype.forEachParticle = function forEachParticle(fn, dt) {
    var particles = this.getParticles();
    for (var index = 0, len = particles.length; index < len; index++)
        fn.call(this, particles[index], dt);
};
PhysicsEngine.prototype.forEachBody = function forEachBody(fn, dt) {
    if (!this._hasBodies)
        return;
    var bodies = this.getBodies();
    for (var index = 0, len = bodies.length; index < len; index++)
        fn.call(this, bodies[index], dt);
};
PhysicsEngine.prototype.forEach = function forEach(fn, dt) {
    this.forEachParticle(fn, dt);
    this.forEachBody(fn, dt);
};
function _updateForce(index) {
    var boundAgent = _getAgentData.call(this, this._forces[index]);
    boundAgent.agent.applyForce(boundAgent.targets, boundAgent.source);
}
function _updateForces() {
    for (var index = this._forces.length - 1; index > -1; index--)
        _updateForce.call(this, index);
}
function _updateConstraint(index, dt) {
    var boundAgent = this._agentData[this._constraints[index]];
    return boundAgent.agent.applyConstraint(boundAgent.targets, boundAgent.source, dt);
}
function _updateConstraints(dt) {
    var iteration = 0;
    while (iteration < this.options.constraintSteps) {
        for (var index = this._constraints.length - 1; index > -1; index--)
            _updateConstraint.call(this, index, dt);
        iteration++;
    }
}
function _updateVelocities(body, dt) {
    body.integrateVelocity(dt);
    if (this.options.velocityCap)
        body.velocity.cap(this.options.velocityCap).put(body.velocity);
}
function _updateAngularVelocities(body, dt) {
    body.integrateAngularMomentum(dt);
    body.updateAngularVelocity();
    if (this.options.angularVelocityCap)
        body.angularVelocity.cap(this.options.angularVelocityCap).put(body.angularVelocity);
}
function _updateOrientations(body, dt) {
    body.integrateOrientation(dt);
}
function _updatePositions(body, dt) {
    body.integratePosition(dt);
    body.emit(_events.update, body);
}
function _integrate(dt) {
    _updateForces.call(this, dt);
    this.forEach(_updateVelocities, dt);
    this.forEachBody(_updateAngularVelocities, dt);
    _updateConstraints.call(this, dt);
    this.forEachBody(_updateOrientations, dt);
    this.forEach(_updatePositions, dt);
}
function _getParticlesEnergy() {
    var energy = 0;
    var particleEnergy = 0;
    this.forEach(function (particle) {
        particleEnergy = particle.getEnergy();
        energy += particleEnergy;
    });
    return energy;
}
function _getAgentsEnergy() {
    var energy = 0;
    for (var id in this._agentData)
        energy += this.getAgentEnergy(id);
    return energy;
}
PhysicsEngine.prototype.getAgentEnergy = function (agentId) {
    var agentData = _getAgentData.call(this, agentId);
    return agentData.agent.getEnergy(agentData.targets, agentData.source);
};
PhysicsEngine.prototype.getEnergy = function getEnergy() {
    return _getParticlesEnergy.call(this) + _getAgentsEnergy.call(this);
};
PhysicsEngine.prototype.step = function step() {
    if (this.isSleeping())
        return;
    var currTime = now();
    var dtFrame = currTime - this._prevTime;
    this._prevTime = currTime;
    if (dtFrame < MIN_TIME_STEP)
        return;
    if (dtFrame > MAX_TIME_STEP)
        dtFrame = MAX_TIME_STEP;
    _integrate.call(this, TIMESTEP);
    this.emit(_events.update, this);
    if (this.getEnergy() < this.options.sleepTolerance)
        this.sleep();
};
PhysicsEngine.prototype.isSleeping = function isSleeping() {
    return this._isSleeping;
};
PhysicsEngine.prototype.isActive = function isSleeping() {
    return !this._isSleeping;
};
PhysicsEngine.prototype.sleep = function sleep() {
    if (this._isSleeping)
        return;
    this.forEach(function (body) {
        body.sleep();
    });
    this.emit(_events.end, this);
    this._isSleeping = true;
};
PhysicsEngine.prototype.wake = function wake() {
    if (!this._isSleeping)
        return;
    this._prevTime = now();
    this.emit(_events.start, this);
    this._isSleeping = false;
};
PhysicsEngine.prototype.emit = function emit(type, data) {
    if (this._eventHandler === null)
        return;
    this._eventHandler.emit(type, data);
};
PhysicsEngine.prototype.on = function on(event, fn) {
    if (this._eventHandler === null)
        this._eventHandler = new EventHandler();
    this._eventHandler.on(event, fn);
};
module.exports = PhysicsEngine;
},{"famous/core/EventHandler":74}],99:[function(require,module,exports){
var Vector = require('famous/math/Vector');
var Transform = require('famous/core/Transform');
var EventHandler = require('famous/core/EventHandler');
var Integrator = require('../integrators/SymplecticEuler');
function Particle(options) {
    options = options || {};
    var defaults = Particle.DEFAULT_OPTIONS;
    this.position = new Vector();
    this.velocity = new Vector();
    this.force = new Vector();
    this._engine = null;
    this._isSleeping = true;
    this._eventOutput = null;
    this.mass = options.mass !== undefined ? options.mass : defaults.mass;
    this.inverseMass = 1 / this.mass;
    this.setPosition(options.position || defaults.position);
    this.setVelocity(options.velocity || defaults.velocity);
    this.force.set(options.force || [
        0,
        0,
        0
    ]);
    this.transform = Transform.identity.slice();
    this._spec = {
        size: [
            true,
            true
        ],
        target: {
            transform: this.transform,
            origin: [
                0.5,
                0.5
            ],
            target: null
        }
    };
}
Particle.DEFAULT_OPTIONS = {
    position: [
        0,
        0,
        0
    ],
    velocity: [
        0,
        0,
        0
    ],
    mass: 1
};
var _events = {
        start: 'start',
        update: 'update',
        end: 'end'
    };
var now = Date.now;
Particle.prototype.isBody = false;
Particle.prototype.isActive = function isActive() {
    return !this._isSleeping;
};
Particle.prototype.sleep = function sleep() {
    if (this._isSleeping)
        return;
    this.emit(_events.end, this);
    this._isSleeping = true;
};
Particle.prototype.wake = function wake() {
    if (!this._isSleeping)
        return;
    this.emit(_events.start, this);
    this._isSleeping = false;
    this._prevTime = now();
    if (this._engine)
        this._engine.wake();
};
Particle.prototype.setPosition = function setPosition(position) {
    this.position.set(position);
};
Particle.prototype.setPosition1D = function setPosition1D(x) {
    this.position.x = x;
};
Particle.prototype.getPosition = function getPosition() {
    this._engine.step();
    return this.position.get();
};
Particle.prototype.getPosition1D = function getPosition1D() {
    this._engine.step();
    return this.position.x;
};
Particle.prototype.setVelocity = function setVelocity(velocity) {
    this.velocity.set(velocity);
    if (!(velocity[0] === 0 && velocity[1] === 0 && velocity[2] === 0))
        this.wake();
};
Particle.prototype.setVelocity1D = function setVelocity1D(x) {
    this.velocity.x = x;
    if (x !== 0)
        this.wake();
};
Particle.prototype.getVelocity = function getVelocity() {
    return this.velocity.get();
};
Particle.prototype.setForce = function setForce(force) {
    this.force.set(force);
    this.wake();
};
Particle.prototype.getVelocity1D = function getVelocity1D() {
    return this.velocity.x;
};
Particle.prototype.setMass = function setMass(mass) {
    this.mass = mass;
    this.inverseMass = 1 / mass;
};
Particle.prototype.getMass = function getMass() {
    return this.mass;
};
Particle.prototype.reset = function reset(position, velocity) {
    this.setPosition(position || [
        0,
        0,
        0
    ]);
    this.setVelocity(velocity || [
        0,
        0,
        0
    ]);
};
Particle.prototype.applyForce = function applyForce(force) {
    if (force.isZero())
        return;
    this.force.add(force).put(this.force);
    this.wake();
};
Particle.prototype.applyImpulse = function applyImpulse(impulse) {
    if (impulse.isZero())
        return;
    var velocity = this.velocity;
    velocity.add(impulse.mult(this.inverseMass)).put(velocity);
};
Particle.prototype.integrateVelocity = function integrateVelocity(dt) {
    Integrator.integrateVelocity(this, dt);
};
Particle.prototype.integratePosition = function integratePosition(dt) {
    Integrator.integratePosition(this, dt);
};
Particle.prototype._integrate = function _integrate(dt) {
    this.integrateVelocity(dt);
    this.integratePosition(dt);
};
Particle.prototype.getEnergy = function getEnergy() {
    return 0.5 * this.mass * this.velocity.normSquared();
};
Particle.prototype.getTransform = function getTransform() {
    this._engine.step();
    var position = this.position;
    var transform = this.transform;
    transform[12] = position.x;
    transform[13] = position.y;
    transform[14] = position.z;
    return transform;
};
Particle.prototype.modify = function modify(target) {
    var _spec = this._spec.target;
    _spec.transform = this.getTransform();
    _spec.target = target;
    return this._spec;
};
function _createEventOutput() {
    this._eventOutput = new EventHandler();
    this._eventOutput.bindThis(this);
    EventHandler.setOutputHandler(this, this._eventOutput);
}
Particle.prototype.emit = function emit(type, data) {
    if (!this._eventOutput)
        return;
    this._eventOutput.emit(type, data);
};
Particle.prototype.on = function on() {
    _createEventOutput.call(this);
    return this.on.apply(this, arguments);
};
Particle.prototype.removeListener = function removeListener() {
    _createEventOutput.call(this);
    return this.removeListener.apply(this, arguments);
};
Particle.prototype.pipe = function pipe() {
    _createEventOutput.call(this);
    return this.pipe.apply(this, arguments);
};
Particle.prototype.unpipe = function unpipe() {
    _createEventOutput.call(this);
    return this.unpipe.apply(this, arguments);
};
module.exports = Particle;
},{"../integrators/SymplecticEuler":106,"famous/core/EventHandler":74,"famous/core/Transform":81,"famous/math/Vector":84}],100:[function(require,module,exports){
var EventHandler = require('famous/core/EventHandler');
function Constraint() {
    this.options = this.options || {};
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
}
Constraint.prototype.setOptions = function setOptions(options) {
    this._eventOutput.emit('change', options);
};
Constraint.prototype.applyConstraint = function applyConstraint() {
};
Constraint.prototype.getEnergy = function getEnergy() {
    return 0;
};
module.exports = Constraint;
},{"famous/core/EventHandler":74}],101:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Snap(options) {
    Constraint.call(this);
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.pDiff = new Vector();
    this.vDiff = new Vector();
    this.impulse1 = new Vector();
    this.impulse2 = new Vector();
}
Snap.prototype = Object.create(Constraint.prototype);
Snap.prototype.constructor = Snap;
Snap.DEFAULT_OPTIONS = {
    period: 300,
    dampingRatio: 0.1,
    length: 0,
    anchor: undefined
};
var pi = Math.PI;
Snap.prototype.setOptions = function setOptions(options) {
    if (options.anchor !== undefined) {
        if (options.anchor instanceof Vector)
            this.options.anchor = options.anchor;
        if (options.anchor.position instanceof Vector)
            this.options.anchor = options.anchor.position;
        if (options.anchor instanceof Array)
            this.options.anchor = new Vector(options.anchor);
    }
    if (options.length !== undefined)
        this.options.length = options.length;
    if (options.dampingRatio !== undefined)
        this.options.dampingRatio = options.dampingRatio;
    if (options.period !== undefined)
        this.options.period = options.period;
    Constraint.prototype.setOptions.call(this, options);
};
Snap.prototype.getEnergy = function getEnergy(targets, source) {
    var options = this.options;
    var restLength = options.length;
    var anchor = options.anchor || source.position;
    var strength = Math.pow(2 * pi / options.period, 2);
    var energy = 0;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var dist = anchor.sub(target.position).norm() - restLength;
        energy += 0.5 * strength * dist * dist;
    }
    return energy;
};
Snap.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    var options = this.options;
    var pDiff = this.pDiff;
    var vDiff = this.vDiff;
    var impulse1 = this.impulse1;
    var impulse2 = this.impulse2;
    var length = options.length;
    var anchor = options.anchor || source.position;
    var period = options.period;
    var dampingRatio = options.dampingRatio;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var p1 = target.position;
        var v1 = target.velocity;
        var m1 = target.mass;
        var w1 = target.inverseMass;
        pDiff.set(p1.sub(anchor));
        var dist = pDiff.norm() - length;
        var effMass;
        if (source) {
            var w2 = source.inverseMass;
            var v2 = source.velocity;
            vDiff.set(v1.sub(v2));
            effMass = 1 / (w1 + w2);
        } else {
            vDiff.set(v1);
            effMass = m1;
        }
        var gamma;
        var beta;
        if (this.options.period === 0) {
            gamma = 0;
            beta = 1;
        } else {
            var k = 4 * effMass * pi * pi / (period * period);
            var c = 4 * effMass * pi * dampingRatio / period;
            beta = dt * k / (c + dt * k);
            gamma = 1 / (c + dt * k);
        }
        var antiDrift = beta / dt * dist;
        pDiff.normalize(-antiDrift).sub(vDiff).mult(dt / (gamma + dt / effMass)).put(impulse1);
        target.applyImpulse(impulse1);
        if (source) {
            impulse1.mult(-1).put(impulse2);
            source.applyImpulse(impulse2);
        }
    }
};
module.exports = Snap;
},{"./Constraint":100,"famous/math/Vector":84}],102:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Wall(options) {
    this.options = Object.create(Wall.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.diff = new Vector();
    this.impulse = new Vector();
    Constraint.call(this);
}
Wall.prototype = Object.create(Constraint.prototype);
Wall.prototype.constructor = Wall;
Wall.ON_CONTACT = {
    REFLECT: 0,
    SILENT: 1
};
Wall.DEFAULT_OPTIONS = {
    restitution: 0.5,
    drift: 0.5,
    slop: 0,
    normal: [
        1,
        0,
        0
    ],
    distance: 0,
    onContact: Wall.ON_CONTACT.REFLECT
};
Wall.prototype.setOptions = function setOptions(options) {
    if (options.normal !== undefined) {
        if (options.normal instanceof Vector)
            this.options.normal = options.normal.clone();
        if (options.normal instanceof Array)
            this.options.normal = new Vector(options.normal);
    }
    if (options.restitution !== undefined)
        this.options.restitution = options.restitution;
    if (options.drift !== undefined)
        this.options.drift = options.drift;
    if (options.slop !== undefined)
        this.options.slop = options.slop;
    if (options.distance !== undefined)
        this.options.distance = options.distance;
    if (options.onContact !== undefined)
        this.options.onContact = options.onContact;
};
function _getNormalVelocity(n, v) {
    return v.dot(n);
}
function _getDistanceFromOrigin(p) {
    var n = this.options.normal;
    var d = this.options.distance;
    return p.dot(n) + d;
}
function _onEnter(particle, overlap, dt) {
    var p = particle.position;
    var v = particle.velocity;
    var m = particle.mass;
    var n = this.options.normal;
    var action = this.options.onContact;
    var restitution = this.options.restitution;
    var impulse = this.impulse;
    var drift = this.options.drift;
    var slop = -this.options.slop;
    var gamma = 0;
    if (this._eventOutput) {
        var data = {
                particle: particle,
                wall: this,
                overlap: overlap,
                normal: n
            };
        this._eventOutput.emit('preCollision', data);
        this._eventOutput.emit('collision', data);
    }
    switch (action) {
    case Wall.ON_CONTACT.REFLECT:
        var lambda = overlap < slop ? -((1 + restitution) * n.dot(v) + drift / dt * (overlap - slop)) / (m * dt + gamma) : -((1 + restitution) * n.dot(v)) / (m * dt + gamma);
        impulse.set(n.mult(dt * lambda));
        particle.applyImpulse(impulse);
        particle.setPosition(p.add(n.mult(-overlap)));
        break;
    }
    if (this._eventOutput)
        this._eventOutput.emit('postCollision', data);
}
function _onExit(particle, overlap, dt) {
    var action = this.options.onContact;
    var p = particle.position;
    var n = this.options.normal;
    if (action === Wall.ON_CONTACT.REFLECT) {
        particle.setPosition(p.add(n.mult(-overlap)));
    }
}
Wall.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    var n = this.options.normal;
    for (var i = 0; i < targets.length; i++) {
        var particle = targets[i];
        var p = particle.position;
        var v = particle.velocity;
        var r = particle.radius || 0;
        var overlap = _getDistanceFromOrigin.call(this, p.add(n.mult(-r)));
        var nv = _getNormalVelocity.call(this, n, v);
        if (overlap <= 0) {
            if (nv < 0)
                _onEnter.call(this, particle, overlap, dt);
            else
                _onExit.call(this, particle, overlap, dt);
        }
    }
};
module.exports = Wall;
},{"./Constraint":100,"famous/math/Vector":84}],103:[function(require,module,exports){
var Force = require('./Force');
function Drag(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    Force.call(this);
}
Drag.prototype = Object.create(Force.prototype);
Drag.prototype.constructor = Drag;
Drag.FORCE_FUNCTIONS = {
    LINEAR: function (velocity) {
        return velocity;
    },
    QUADRATIC: function (velocity) {
        return velocity.mult(velocity.norm());
    }
};
Drag.DEFAULT_OPTIONS = {
    strength: 0.01,
    forceFunction: Drag.FORCE_FUNCTIONS.LINEAR
};
Drag.prototype.applyForce = function applyForce(targets) {
    var strength = this.options.strength;
    var forceFunction = this.options.forceFunction;
    var force = this.force;
    for (var index = 0; index < targets.length; index++) {
        var particle = targets[index];
        forceFunction(particle.velocity).mult(-strength).put(force);
        particle.applyForce(force);
    }
};
Drag.prototype.setOptions = function setOptions(options) {
    for (var key in options)
        this.options[key] = options[key];
};
module.exports = Drag;
},{"./Force":104}],104:[function(require,module,exports){
var Vector = require('famous/math/Vector');
var EventHandler = require('famous/core/EventHandler');
function Force(force) {
    this.force = new Vector(force);
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
}
Force.prototype.setOptions = function setOptions(options) {
    this._eventOutput.emit('change', options);
};
Force.prototype.applyForce = function applyForce(body) {
    body.applyForce(this.force);
};
Force.prototype.getEnergy = function getEnergy() {
    return 0;
};
module.exports = Force;
},{"famous/core/EventHandler":74,"famous/math/Vector":84}],105:[function(require,module,exports){
var Force = require('./Force');
var Vector = require('famous/math/Vector');
function Spring(options) {
    Force.call(this);
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.disp = new Vector(0, 0, 0);
    _init.call(this);
}
Spring.prototype = Object.create(Force.prototype);
Spring.prototype.constructor = Spring;
var pi = Math.PI;
var MIN_PERIOD = 150;
Spring.FORCE_FUNCTIONS = {
    FENE: function (dist, rMax) {
        var rMaxSmall = rMax * 0.99;
        var r = Math.max(Math.min(dist, rMaxSmall), -rMaxSmall);
        return r / (1 - r * r / (rMax * rMax));
    },
    HOOK: function (dist) {
        return dist;
    }
};
Spring.DEFAULT_OPTIONS = {
    period: 300,
    dampingRatio: 0.1,
    length: 0,
    maxLength: Infinity,
    anchor: undefined,
    forceFunction: Spring.FORCE_FUNCTIONS.HOOK
};
function _calcStiffness() {
    var options = this.options;
    options.stiffness = Math.pow(2 * pi / options.period, 2);
}
function _calcDamping() {
    var options = this.options;
    options.damping = 4 * pi * options.dampingRatio / options.period;
}
function _init() {
    _calcStiffness.call(this);
    _calcDamping.call(this);
}
Spring.prototype.setOptions = function setOptions(options) {
    if (options.anchor !== undefined) {
        if (options.anchor.position instanceof Vector)
            this.options.anchor = options.anchor.position;
        if (options.anchor instanceof Vector)
            this.options.anchor = options.anchor;
        if (options.anchor instanceof Array)
            this.options.anchor = new Vector(options.anchor);
    }
    if (options.period !== undefined) {
        if (options.period < MIN_PERIOD) {
            options.period = MIN_PERIOD;
            console.warn('The period of a SpringTransition is capped at ' + MIN_PERIOD + ' ms. Use a SnapTransition for faster transitions');
        }
        this.options.period = options.period;
    }
    if (options.dampingRatio !== undefined)
        this.options.dampingRatio = options.dampingRatio;
    if (options.length !== undefined)
        this.options.length = options.length;
    if (options.forceFunction !== undefined)
        this.options.forceFunction = options.forceFunction;
    if (options.maxLength !== undefined)
        this.options.maxLength = options.maxLength;
    _init.call(this);
    Force.prototype.setOptions.call(this, options);
};
Spring.prototype.applyForce = function applyForce(targets, source) {
    var force = this.force;
    var disp = this.disp;
    var options = this.options;
    var stiffness = options.stiffness;
    var damping = options.damping;
    var restLength = options.length;
    var maxLength = options.maxLength;
    var anchor = options.anchor || source.position;
    var forceFunction = options.forceFunction;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var p2 = target.position;
        var v2 = target.velocity;
        anchor.sub(p2).put(disp);
        var dist = disp.norm() - restLength;
        if (dist === 0)
            return;
        var m = target.mass;
        stiffness *= m;
        damping *= m;
        disp.normalize(stiffness * forceFunction(dist, maxLength)).put(force);
        if (damping)
            if (source)
                force.add(v2.sub(source.velocity).mult(-damping)).put(force);
            else
                force.add(v2.mult(-damping)).put(force);
        target.applyForce(force);
        if (source)
            source.applyForce(force.mult(-1));
    }
};
Spring.prototype.getEnergy = function getEnergy(targets, source) {
    var options = this.options;
    var restLength = options.length;
    var anchor = source ? source.position : options.anchor;
    var strength = options.stiffness;
    var energy = 0;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var dist = anchor.sub(target.position).norm() - restLength;
        energy += 0.5 * strength * dist * dist;
    }
    return energy;
};
module.exports = Spring;
},{"./Force":104,"famous/math/Vector":84}],106:[function(require,module,exports){
var SymplecticEuler = {};
SymplecticEuler.integrateVelocity = function integrateVelocity(body, dt) {
    var v = body.velocity;
    var w = body.inverseMass;
    var f = body.force;
    if (f.isZero())
        return;
    v.add(f.mult(dt * w)).put(v);
    f.clear();
};
SymplecticEuler.integratePosition = function integratePosition(body, dt) {
    var p = body.position;
    var v = body.velocity;
    p.add(v.mult(dt)).put(p);
};
SymplecticEuler.integrateAngularMomentum = function integrateAngularMomentum(body, dt) {
    var L = body.angularMomentum;
    var t = body.torque;
    if (t.isZero())
        return;
    L.add(t.mult(dt)).put(L);
    t.clear();
};
SymplecticEuler.integrateOrientation = function integrateOrientation(body, dt) {
    var q = body.orientation;
    var w = body.angularVelocity;
    if (w.isZero())
        return;
    q.add(q.multiply(w).scalarMultiply(0.5 * dt)).put(q);
};
module.exports = SymplecticEuler;
},{}],107:[function(require,module,exports){
var Surface = require('famous/core/Surface');
function CanvasSurface(options) {
    if (options && options.canvasSize)
        this._canvasSize = options.canvasSize;
    Surface.apply(this, arguments);
    if (!this._canvasSize)
        this._canvasSize = this.getSize();
    this._backBuffer = document.createElement('canvas');
    if (this._canvasSize) {
        this._backBuffer.width = this._canvasSize[0];
        this._backBuffer.height = this._canvasSize[1];
    }
    this._contextId = undefined;
}
CanvasSurface.prototype = Object.create(Surface.prototype);
CanvasSurface.prototype.constructor = CanvasSurface;
CanvasSurface.prototype.elementType = 'canvas';
CanvasSurface.prototype.elementClass = 'famous-surface';
CanvasSurface.prototype.setContent = function setContent() {
};
CanvasSurface.prototype.deploy = function deploy(target) {
    if (this._canvasSize) {
        target.width = this._canvasSize[0];
        target.height = this._canvasSize[1];
    }
    if (this._contextId === '2d') {
        target.getContext(this._contextId).drawImage(this._backBuffer, 0, 0);
        this._backBuffer.width = 0;
        this._backBuffer.height = 0;
    }
};
CanvasSurface.prototype.recall = function recall(target) {
    var size = this.getSize();
    this._backBuffer.width = target.width;
    this._backBuffer.height = target.height;
    if (this._contextId === '2d') {
        this._backBuffer.getContext(this._contextId).drawImage(target, 0, 0);
        target.width = 0;
        target.height = 0;
    }
};
CanvasSurface.prototype.getContext = function getContext(contextId) {
    this._contextId = contextId;
    return this._currentTarget ? this._currentTarget.getContext(contextId) : this._backBuffer.getContext(contextId);
};
CanvasSurface.prototype.setSize = function setSize(size, canvasSize) {
    Surface.prototype.setSize.apply(this, arguments);
    if (canvasSize)
        this._canvasSize = [
            canvasSize[0],
            canvasSize[1]
        ];
    if (this._currentTarget) {
        this._currentTarget.width = this._canvasSize[0];
        this._currentTarget.height = this._canvasSize[1];
    }
};
module.exports = CanvasSurface;
},{"famous/core/Surface":80}],108:[function(require,module,exports){
var Surface = require('famous/core/Surface');
var Context = require('famous/core/Context');
function ContainerSurface(options) {
    Surface.call(this, options);
    this._container = document.createElement('div');
    this._container.classList.add('famous-group');
    this._container.classList.add('famous-container-group');
    this._shouldRecalculateSize = false;
    this.context = new Context(this._container);
    this.setContent(this._container);
}
ContainerSurface.prototype = Object.create(Surface.prototype);
ContainerSurface.prototype.constructor = ContainerSurface;
ContainerSurface.prototype.elementType = 'div';
ContainerSurface.prototype.elementClass = 'famous-surface';
ContainerSurface.prototype.add = function add() {
    return this.context.add.apply(this.context, arguments);
};
ContainerSurface.prototype.render = function render() {
    if (this._sizeDirty)
        this._shouldRecalculateSize = true;
    return Surface.prototype.render.apply(this, arguments);
};
ContainerSurface.prototype.deploy = function deploy() {
    this._shouldRecalculateSize = true;
    return Surface.prototype.deploy.apply(this, arguments);
};
ContainerSurface.prototype.commit = function commit(context, transform, opacity, origin, size) {
    var previousSize = this._size ? [
            this._size[0],
            this._size[1]
        ] : null;
    var result = Surface.prototype.commit.apply(this, arguments);
    if (this._shouldRecalculateSize || previousSize && (this._size[0] !== previousSize[0] || this._size[1] !== previousSize[1])) {
        this.context.setSize();
        this._shouldRecalculateSize = false;
    }
    this.context.update();
    return result;
};
module.exports = ContainerSurface;
},{"famous/core/Context":69,"famous/core/Surface":80}],109:[function(require,module,exports){
function CachedMap(mappingFunction) {
    this._map = mappingFunction || null;
    this._cachedOutput = null;
    this._cachedInput = Number.NaN;
}
CachedMap.create = function create(mappingFunction) {
    var instance = new CachedMap(mappingFunction);
    return instance.get.bind(instance);
};
CachedMap.prototype.get = function get(input) {
    if (input !== this._cachedInput) {
        this._cachedInput = input;
        this._cachedOutput = this._map(input);
    }
    return this._cachedOutput;
};
module.exports = CachedMap;
},{}],110:[function(require,module,exports){
module.exports=require(88)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/MultipleTransition.js":88,"famous/utilities/Utility":97}],111:[function(require,module,exports){
module.exports=require(89)
},{"./MultipleTransition":110,"./TweenTransition":113,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/Transitionable.js":89}],112:[function(require,module,exports){
module.exports=require(90)
},{"./Transitionable":111,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TransitionableTransform.js":90,"famous/core/Transform":81,"famous/utilities/Utility":97}],113:[function(require,module,exports){
module.exports=require(91)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TweenTransition.js":91}],114:[function(require,module,exports){
module.exports=require(87)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/node_modules/famous/utilities/Utility.js":87}],115:[function(require,module,exports){
var Entity = require('famous/core/Entity');
var RenderNode = require('famous/core/RenderNode');
var Transform = require('famous/core/Transform');
var ViewSequence = require('famous/core/ViewSequence');
var EventHandler = require('famous/core/EventHandler');
var Modifier = require('famous/core/Modifier');
var OptionsManager = require('famous/core/OptionsManager');
var Transitionable = require('famous/transitions/Transitionable');
var TransitionableTransform = require('famous/transitions/TransitionableTransform');
function GridLayout(options) {
    this.options = Object.create(GridLayout.DEFAULT_OPTIONS);
    this.optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this.id = Entity.register(this);
    this._modifiers = [];
    this._states = [];
    this._contextSizeCache = [
        0,
        0
    ];
    this._dimensionsCache = [
        0,
        0
    ];
    this._activeCount = 0;
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
}
function _reflow(size, cols, rows) {
    var usableSize = [
            size[0],
            size[1]
        ];
    usableSize[0] -= this.options.gutterSize[0] * (cols - 1);
    usableSize[1] -= this.options.gutterSize[1] * (rows - 1);
    var rowSize = Math.round(usableSize[1] / rows);
    var colSize = Math.round(usableSize[0] / cols);
    var currY = 0;
    var currX;
    var currIndex = 0;
    for (var i = 0; i < rows; i++) {
        currX = 0;
        for (var j = 0; j < cols; j++) {
            if (this._modifiers[currIndex] === undefined) {
                _createModifier.call(this, currIndex, [
                    colSize,
                    rowSize
                ], [
                    currX,
                    currY,
                    0
                ], 1);
            } else {
                _animateModifier.call(this, currIndex, [
                    colSize,
                    rowSize
                ], [
                    currX,
                    currY,
                    0
                ], 1);
            }
            currIndex++;
            currX += colSize + this.options.gutterSize[0];
        }
        currY += rowSize + this.options.gutterSize[1];
    }
    this._dimensionsCache = [
        this.options.dimensions[0],
        this.options.dimensions[1]
    ];
    this._contextSizeCache = [
        size[0],
        size[1]
    ];
    this._activeCount = rows * cols;
    for (i = this._activeCount; i < this._modifiers.length; i++)
        _animateModifier.call(this, i, [
            Math.round(colSize),
            Math.round(rowSize)
        ], [
            0,
            0
        ], 0);
    this._eventOutput.emit('reflow');
}
function _createModifier(index, size, position, opacity) {
    var transitionItem = {
            transform: new TransitionableTransform(Transform.translate.apply(null, position)),
            opacity: new Transitionable(opacity),
            size: new Transitionable(size)
        };
    var modifier = new Modifier({
            transform: transitionItem.transform,
            opacity: transitionItem.opacity,
            size: transitionItem.size
        });
    this._states[index] = transitionItem;
    this._modifiers[index] = modifier;
}
function _animateModifier(index, size, position, opacity) {
    var currState = this._states[index];
    var currSize = currState.size;
    var currOpacity = currState.opacity;
    var currTransform = currState.transform;
    var transition = this.options.transition;
    currTransform.halt();
    currOpacity.halt();
    currSize.halt();
    currTransform.setTranslate(position, transition);
    currSize.set(size, transition);
    currOpacity.set(opacity, transition);
}
GridLayout.DEFAULT_OPTIONS = {
    dimensions: [
        1,
        1
    ],
    transition: false,
    gutterSize: [
        0,
        0
    ]
};
GridLayout.prototype.render = function render() {
    return this.id;
};
GridLayout.prototype.setOptions = function setOptions(options) {
    return this.optionsManager.setOptions(options);
};
GridLayout.prototype.sequenceFrom = function sequenceFrom(sequence) {
    if (sequence instanceof Array)
        sequence = new ViewSequence(sequence);
    this.sequence = sequence;
};
GridLayout.prototype.commit = function commit(context) {
    var transform = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;
    var cols = this.options.dimensions[0];
    var rows = this.options.dimensions[1];
    if (size[0] !== this._contextSizeCache[0] || size[1] !== this._contextSizeCache[1] || cols !== this._dimensionsCache[0] || rows !== this._dimensionsCache[1]) {
        _reflow.call(this, size, cols, rows);
    }
    var sequence = this.sequence;
    var result = [];
    var currIndex = 0;
    while (sequence && currIndex < this._modifiers.length) {
        var item = sequence.get();
        var modifier = this._modifiers[currIndex];
        if (currIndex >= this._activeCount && this._states[currIndex].opacity.isActive()) {
            this._modifiers.splice(currIndex, 1);
            this._states.splice(currIndex, 1);
        }
        if (item) {
            result.push(modifier.modify({
                origin: origin,
                target: item.render()
            }));
        }
        sequence = sequence.getNext();
        currIndex++;
    }
    if (size)
        transform = Transform.moveThen([
            -size[0] * origin[0],
            -size[1] * origin[1],
            0
        ], transform);
    return {
        transform: transform,
        opacity: opacity,
        size: size,
        target: result
    };
};
module.exports = GridLayout;
},{"famous/core/Entity":72,"famous/core/EventHandler":74,"famous/core/Modifier":76,"famous/core/OptionsManager":77,"famous/core/RenderNode":78,"famous/core/Transform":81,"famous/core/ViewSequence":83,"famous/transitions/Transitionable":94,"famous/transitions/TransitionableTransform":95}],116:[function(require,module,exports){
var Modifier = require('famous/core/Modifier');
var RenderNode = require('famous/core/RenderNode');
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');
var View = require('famous/core/View');
function RenderController(options) {
    View.apply(this, arguments);
    this._showing = -1;
    this._outgoingRenderables = [];
    this._nextRenderable = null;
    this._renderables = [];
    this._nodes = [];
    this._modifiers = [];
    this._states = [];
    this.inTransformMap = RenderController.DefaultMap.transform;
    this.inOpacityMap = RenderController.DefaultMap.opacity;
    this.inOriginMap = RenderController.DefaultMap.origin;
    this.outTransformMap = RenderController.DefaultMap.transform;
    this.outOpacityMap = RenderController.DefaultMap.opacity;
    this.outOriginMap = RenderController.DefaultMap.origin;
    this._output = [];
}
RenderController.prototype = Object.create(View.prototype);
RenderController.prototype.constructor = RenderController;
RenderController.DEFAULT_OPTIONS = {
    inTransition: true,
    outTransition: true,
    overlap: true
};
RenderController.DefaultMap = {
    transform: function () {
        return Transform.identity;
    },
    opacity: function (progress) {
        return progress;
    },
    origin: null
};
function _mappedState(map, state) {
    return map(state.get());
}
RenderController.prototype.inTransformFrom = function inTransformFrom(transform) {
    if (transform instanceof Function)
        this.inTransformMap = transform;
    else if (transform && transform.get)
        this.inTransformMap = transform.get.bind(transform);
    else
        throw new Error('inTransformFrom takes only function or getter object');
    return this;
};
RenderController.prototype.inOpacityFrom = function inOpacityFrom(opacity) {
    if (opacity instanceof Function)
        this.inOpacityMap = opacity;
    else if (opacity && opacity.get)
        this.inOpacityMap = opacity.get.bind(opacity);
    else
        throw new Error('inOpacityFrom takes only function or getter object');
    return this;
};
RenderController.prototype.inOriginFrom = function inOriginFrom(origin) {
    if (origin instanceof Function)
        this.inOriginMap = origin;
    else if (origin && origin.get)
        this.inOriginMap = origin.get.bind(origin);
    else
        throw new Error('inOriginFrom takes only function or getter object');
    return this;
};
RenderController.prototype.outTransformFrom = function outTransformFrom(transform) {
    if (transform instanceof Function)
        this.outTransformMap = transform;
    else if (transform && transform.get)
        this.outTransformMap = transform.get.bind(transform);
    else
        throw new Error('outTransformFrom takes only function or getter object');
    return this;
};
RenderController.prototype.outOpacityFrom = function outOpacityFrom(opacity) {
    if (opacity instanceof Function)
        this.outOpacityMap = opacity;
    else if (opacity && opacity.get)
        this.outOpacityMap = opacity.get.bind(opacity);
    else
        throw new Error('outOpacityFrom takes only function or getter object');
    return this;
};
RenderController.prototype.outOriginFrom = function outOriginFrom(origin) {
    if (origin instanceof Function)
        this.outOriginMap = origin;
    else if (origin && origin.get)
        this.outOriginMap = origin.get.bind(origin);
    else
        throw new Error('outOriginFrom takes only function or getter object');
    return this;
};
RenderController.prototype.show = function show(renderable, transition, callback) {
    if (!renderable) {
        return this.hide(callback);
    }
    if (transition instanceof Function) {
        callback = transition;
        transition = null;
    }
    if (this._showing >= 0) {
        if (this.options.overlap)
            this.hide();
        else {
            if (this._nextRenderable) {
                this._nextRenderable = renderable;
            } else {
                this._nextRenderable = renderable;
                this.hide(function () {
                    if (this._nextRenderable === renderable)
                        this.show(this._nextRenderable, callback);
                    this._nextRenderable = null;
                });
            }
            return undefined;
        }
    }
    var state = null;
    var renderableIndex = this._renderables.indexOf(renderable);
    if (renderableIndex >= 0) {
        this._showing = renderableIndex;
        state = this._states[renderableIndex];
        state.halt();
        var outgoingIndex = this._outgoingRenderables.indexOf(renderable);
        if (outgoingIndex >= 0)
            this._outgoingRenderables.splice(outgoingIndex, 1);
    } else {
        state = new Transitionable(0);
        var modifier = new Modifier({
                transform: this.inTransformMap ? _mappedState.bind(this, this.inTransformMap, state) : null,
                opacity: this.inOpacityMap ? _mappedState.bind(this, this.inOpacityMap, state) : null,
                origin: this.inOriginMap ? _mappedState.bind(this, this.inOriginMap, state) : null
            });
        var node = new RenderNode();
        node.add(modifier).add(renderable);
        this._showing = this._nodes.length;
        this._nodes.push(node);
        this._modifiers.push(modifier);
        this._states.push(state);
        this._renderables.push(renderable);
    }
    if (!transition)
        transition = this.options.inTransition;
    state.set(1, transition, callback);
};
RenderController.prototype.hide = function hide(transition, callback) {
    if (this._showing < 0)
        return;
    var index = this._showing;
    this._showing = -1;
    if (transition instanceof Function) {
        callback = transition;
        transition = undefined;
    }
    var node = this._nodes[index];
    var modifier = this._modifiers[index];
    var state = this._states[index];
    var renderable = this._renderables[index];
    modifier.transformFrom(this.outTransformMap ? _mappedState.bind(this, this.outTransformMap, state) : null);
    modifier.opacityFrom(this.outOpacityMap ? _mappedState.bind(this, this.outOpacityMap, state) : null);
    modifier.originFrom(this.outOriginMap ? _mappedState.bind(this, this.outOriginMap, state) : null);
    if (this._outgoingRenderables.indexOf(renderable) < 0)
        this._outgoingRenderables.push(renderable);
    if (!transition)
        transition = this.options.outTransition;
    state.halt();
    state.set(0, transition, function (node, modifier, state, renderable) {
        if (this._outgoingRenderables.indexOf(renderable) >= 0) {
            var index = this._nodes.indexOf(node);
            this._nodes.splice(index, 1);
            this._modifiers.splice(index, 1);
            this._states.splice(index, 1);
            this._renderables.splice(index, 1);
            this._outgoingRenderables.splice(this._outgoingRenderables.indexOf(renderable), 1);
            if (this._showing >= index)
                this._showing--;
        }
        if (callback)
            callback.call(this);
    }.bind(this, node, modifier, state, renderable));
};
RenderController.prototype.render = function render() {
    var result = this._output;
    if (result.length > this._nodes.length)
        result.splice(this._nodes.length);
    for (var i = 0; i < this._nodes.length; i++) {
        result[i] = this._nodes[i].render();
    }
    return result;
};
module.exports = RenderController;
},{"famous/core/Modifier":76,"famous/core/RenderNode":78,"famous/core/Transform":81,"famous/core/View":82,"famous/transitions/Transitionable":94}],117:[function(require,module,exports){
var Entity = require('famous/core/Entity');
var Group = require('famous/core/Group');
var OptionsManager = require('famous/core/OptionsManager');
var Transform = require('famous/core/Transform');
var Utility = require('famous/utilities/Utility');
var ViewSequence = require('famous/core/ViewSequence');
var EventHandler = require('famous/core/EventHandler');
function Scroller(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this._optionsManager.setOptions(options);
    this._node = null;
    this._position = 0;
    this._positionOffset = 0;
    this._positionGetter = null;
    this._outputFunction = null;
    this._masterOutputFunction = null;
    this.outputFrom();
    this._onEdge = 0;
    this.group = new Group();
    this.group.add({ render: _innerRender.bind(this) });
    this._entityId = Entity.register(this);
    this._size = [
        undefined,
        undefined
    ];
    this._contextSize = [
        undefined,
        undefined
    ];
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
}
Scroller.DEFAULT_OPTIONS = {
    direction: Utility.Direction.Y,
    margin: 0,
    clipSize: undefined,
    groupScroll: false
};
var EDGE_TOLERANCE = 0;
function _sizeForDir(size) {
    if (!size)
        size = this._contextSize;
    var dimension = this.options.direction;
    return size[dimension] === undefined ? this._contextSize[dimension] : size[dimension];
}
function _output(node, offset, target) {
    var size = node.getSize ? node.getSize() : this._contextSize;
    var transform = this._outputFunction(offset);
    target.push({
        transform: transform,
        target: node.render()
    });
    return _sizeForDir.call(this, size);
}
function _getClipSize() {
    if (this.options.clipSize !== undefined)
        return this.options.clipSize;
    if (this._contextSize[this.options.direction] > this.getCumulativeSize()[this.options.direction]) {
        return _sizeForDir.call(this, this.getCumulativeSize());
    } else {
        return _sizeForDir.call(this, this._contextSize);
    }
}
Scroller.prototype.getCumulativeSize = function (index) {
    if (index === undefined)
        index = this._node._.cumulativeSizes.length - 1;
    return this._node._.getSize(index);
};
Scroller.prototype.setOptions = function setOptions(options) {
    if (options.groupScroll !== this.options.groupScroll) {
        if (options.groupScroll)
            this.group.pipe(this._eventOutput);
        else
            this.group.unpipe(this._eventOutput);
    }
    this._optionsManager.setOptions(options);
};
Scroller.prototype.onEdge = function onEdge() {
    return this._onEdge;
};
Scroller.prototype.outputFrom = function outputFrom(fn, masterFn) {
    if (!fn) {
        fn = function (offset) {
            return this.options.direction === Utility.Direction.X ? Transform.translate(offset, 0) : Transform.translate(0, offset);
        }.bind(this);
        if (!masterFn)
            masterFn = fn;
    }
    this._outputFunction = fn;
    this._masterOutputFunction = masterFn ? masterFn : function (offset) {
        return Transform.inverse(fn(-offset));
    };
};
Scroller.prototype.positionFrom = function positionFrom(position) {
    if (position instanceof Function)
        this._positionGetter = position;
    else if (position && position.get)
        this._positionGetter = position.get.bind(position);
    else {
        this._positionGetter = null;
        this._position = position;
    }
    if (this._positionGetter)
        this._position = this._positionGetter.call(this);
};
Scroller.prototype.sequenceFrom = function sequenceFrom(node) {
    if (node instanceof Array)
        node = new ViewSequence({ array: node });
    this._node = node;
    this._positionOffset = 0;
};
Scroller.prototype.getSize = function getSize(actual) {
    return actual ? this._contextSize : this._size;
};
Scroller.prototype.render = function render() {
    if (!this._node)
        return null;
    if (this._positionGetter)
        this._position = this._positionGetter.call(this);
    return this._entityId;
};
Scroller.prototype.commit = function commit(context) {
    var transform = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;
    if (!this.options.clipSize && (size[0] !== this._contextSize[0] || size[1] !== this._contextSize[1])) {
        this._onEdge = 0;
        this._contextSize[0] = size[0];
        this._contextSize[1] = size[1];
        if (this.options.direction === Utility.Direction.X) {
            this._size[0] = _getClipSize.call(this);
            this._size[1] = undefined;
        } else {
            this._size[0] = undefined;
            this._size[1] = _getClipSize.call(this);
        }
    }
    var scrollTransform = this._masterOutputFunction(-this._position);
    return {
        transform: Transform.multiply(transform, scrollTransform),
        size: size,
        opacity: opacity,
        origin: origin,
        target: this.group.render()
    };
};
function _innerRender() {
    var size = null;
    var position = this._position;
    var result = [];
    var offset = -this._positionOffset;
    var clipSize = _getClipSize.call(this);
    var currNode = this._node;
    while (currNode && offset - position < clipSize + this.options.margin) {
        offset += _output.call(this, currNode, offset, result);
        currNode = currNode.getNext ? currNode.getNext() : null;
    }
    var sizeNode = this._node;
    var nodesSize = _sizeForDir.call(this, sizeNode.getSize());
    if (offset < clipSize) {
        while (sizeNode && nodesSize < clipSize) {
            sizeNode = sizeNode.getPrevious();
            if (sizeNode)
                nodesSize += _sizeForDir.call(this, sizeNode.getSize());
        }
        sizeNode = this._node;
        while (sizeNode && nodesSize < clipSize) {
            sizeNode = sizeNode.getNext();
            if (sizeNode)
                nodesSize += _sizeForDir.call(this, sizeNode.getSize());
        }
    }
    if (!currNode && offset - position < clipSize - EDGE_TOLERANCE) {
        if (this._onEdge !== 1) {
            this._onEdge = 1;
            this._eventOutput.emit('onEdge', { position: offset - clipSize });
        }
    } else if (!this._node.getPrevious() && position < -EDGE_TOLERANCE) {
        if (this._onEdge !== -1) {
            this._onEdge = -1;
            this._eventOutput.emit('onEdge', { position: 0 });
        }
    } else {
        if (this._onEdge !== 0) {
            this._onEdge = 0;
            this._eventOutput.emit('offEdge');
        }
    }
    currNode = this._node && this._node.getPrevious ? this._node.getPrevious() : null;
    offset = -this._positionOffset;
    if (currNode) {
        size = currNode.getSize ? currNode.getSize() : this._contextSize;
        offset -= _sizeForDir.call(this, size);
    }
    while (currNode && offset - position > -(clipSize + this.options.margin)) {
        _output.call(this, currNode, offset, result);
        currNode = currNode.getPrevious ? currNode.getPrevious() : null;
        if (currNode) {
            size = currNode.getSize ? currNode.getSize() : this._contextSize;
            offset -= _sizeForDir.call(this, size);
        }
    }
    return result;
}
module.exports = Scroller;
},{"famous/core/Entity":72,"famous/core/EventHandler":74,"famous/core/Group":75,"famous/core/OptionsManager":77,"famous/core/Transform":81,"famous/core/ViewSequence":83,"famous/utilities/Utility":97}],118:[function(require,module,exports){
module.exports=require(98)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/PhysicsEngine.js":98,"famous/core/EventHandler":49}],119:[function(require,module,exports){
var Particle = require('./Particle');
var Transform = require('famous/core/Transform');
var Vector = require('famous/math/Vector');
var Quaternion = require('famous/math/Quaternion');
var Matrix = require('famous/math/Matrix');
var Integrator = require('../integrators/SymplecticEuler');
function Body(options) {
    Particle.call(this, options);
    options = options || {};
    this.orientation = new Quaternion();
    this.angularVelocity = new Vector();
    this.angularMomentum = new Vector();
    this.torque = new Vector();
    if (options.orientation)
        this.orientation.set(options.orientation);
    if (options.angularVelocity)
        this.angularVelocity.set(options.angularVelocity);
    if (options.angularMomentum)
        this.angularMomentum.set(options.angularMomentum);
    if (options.torque)
        this.torque.set(options.torque);
    this.angularVelocity.w = 0;
    this.setMomentsOfInertia();
    this.pWorld = new Vector();
}
Body.DEFAULT_OPTIONS = Particle.DEFAULT_OPTIONS;
Body.DEFAULT_OPTIONS.orientation = [
    0,
    0,
    0,
    1
];
Body.DEFAULT_OPTIONS.angularVelocity = [
    0,
    0,
    0
];
Body.prototype = Object.create(Particle.prototype);
Body.prototype.constructor = Body;
Body.prototype.isBody = true;
Body.prototype.setMass = function setMass() {
    Particle.prototype.setMass.apply(this, arguments);
    this.setMomentsOfInertia();
};
Body.prototype.setMomentsOfInertia = function setMomentsOfInertia() {
    this.inertia = new Matrix();
    this.inverseInertia = new Matrix();
};
Body.prototype.updateAngularVelocity = function updateAngularVelocity() {
    this.angularVelocity.set(this.inverseInertia.vectorMultiply(this.angularMomentum));
};
Body.prototype.toWorldCoordinates = function toWorldCoordinates(localPosition) {
    return this.pWorld.set(this.orientation.rotateVector(localPosition));
};
Body.prototype.getEnergy = function getEnergy() {
    return Particle.prototype.getEnergy.call(this) + 0.5 * this.inertia.vectorMultiply(this.angularVelocity).dot(this.angularVelocity);
};
Body.prototype.reset = function reset(p, v, q, L) {
    Particle.prototype.reset.call(this, p, v);
    this.angularVelocity.clear();
    this.setOrientation(q || [
        1,
        0,
        0,
        0
    ]);
    this.setAngularMomentum(L || [
        0,
        0,
        0
    ]);
};
Body.prototype.setOrientation = function setOrientation(q) {
    this.orientation.set(q);
};
Body.prototype.setAngularVelocity = function setAngularVelocity(w) {
    this.wake();
    this.angularVelocity.set(w);
};
Body.prototype.setAngularMomentum = function setAngularMomentum(L) {
    this.wake();
    this.angularMomentum.set(L);
};
Body.prototype.applyForce = function applyForce(force, location) {
    Particle.prototype.applyForce.call(this, force);
    if (location !== undefined)
        this.applyTorque(location.cross(force));
};
Body.prototype.applyTorque = function applyTorque(torque) {
    this.wake();
    this.torque.set(this.torque.add(torque));
};
Body.prototype.getTransform = function getTransform() {
    return Transform.thenMove(this.orientation.getTransform(), Transform.getTranslate(Particle.prototype.getTransform.call(this)));
};
Body.prototype._integrate = function _integrate(dt) {
    Particle.prototype._integrate.call(this, dt);
    this.integrateAngularMomentum(dt);
    this.updateAngularVelocity(dt);
    this.integrateOrientation(dt);
};
Body.prototype.integrateAngularMomentum = function integrateAngularMomentum(dt) {
    Integrator.integrateAngularMomentum(this, dt);
};
Body.prototype.integrateOrientation = function integrateOrientation(dt) {
    Integrator.integrateOrientation(this, dt);
};
module.exports = Body;
},{"../integrators/SymplecticEuler":138,"./Particle":121,"famous/core/Transform":57,"famous/math/Matrix":65,"famous/math/Quaternion":66,"famous/math/Vector":68}],120:[function(require,module,exports){
var Body = require('./Body');
var Matrix = require('famous/math/Matrix');
function Circle(options) {
    options = options || {};
    this.setRadius(options.radius || 0);
    Body.call(this, options);
}
Circle.prototype = Object.create(Body.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.setRadius = function setRadius(r) {
    this.radius = r;
    this.size = [
        2 * this.radius,
        2 * this.radius
    ];
    this.setMomentsOfInertia();
};
Circle.prototype.setMomentsOfInertia = function setMomentsOfInertia() {
    var m = this.mass;
    var r = this.radius;
    this.inertia = new Matrix([
        [
            0.25 * m * r * r,
            0,
            0
        ],
        [
            0,
            0.25 * m * r * r,
            0
        ],
        [
            0,
            0,
            0.5 * m * r * r
        ]
    ]);
    this.inverseInertia = new Matrix([
        [
            4 / (m * r * r),
            0,
            0
        ],
        [
            0,
            4 / (m * r * r),
            0
        ],
        [
            0,
            0,
            2 / (m * r * r)
        ]
    ]);
};
module.exports = Circle;
},{"./Body":119,"famous/math/Matrix":65}],121:[function(require,module,exports){
module.exports=require(99)
},{"../integrators/SymplecticEuler":138,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/bodies/Particle.js":99,"famous/core/EventHandler":49,"famous/core/Transform":57,"famous/math/Vector":68}],122:[function(require,module,exports){
var Body = require('./Body');
var Matrix = require('famous/math/Matrix');
function Rectangle(options) {
    options = options || {};
    this.size = options.size || [
        0,
        0
    ];
    Body.call(this, options);
}
Rectangle.prototype = Object.create(Body.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.setSize = function setSize(size) {
    this.size = size;
    this.setMomentsOfInertia();
};
Rectangle.prototype.setMomentsOfInertia = function setMomentsOfInertia() {
    var m = this.mass;
    var w = this.size[0];
    var h = this.size[1];
    this.inertia = new Matrix([
        [
            m * h * h / 12,
            0,
            0
        ],
        [
            0,
            m * w * w / 12,
            0
        ],
        [
            0,
            0,
            m * (w * w + h * h) / 12
        ]
    ]);
    this.inverseInertia = new Matrix([
        [
            12 / (m * h * h),
            0,
            0
        ],
        [
            0,
            12 / (m * w * w),
            0
        ],
        [
            0,
            0,
            12 / (m * (w * w + h * h))
        ]
    ]);
};
module.exports = Rectangle;
},{"./Body":119,"famous/math/Matrix":65}],123:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Collision(options) {
    this.options = Object.create(Collision.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.normal = new Vector();
    this.pDiff = new Vector();
    this.vDiff = new Vector();
    this.impulse1 = new Vector();
    this.impulse2 = new Vector();
    Constraint.call(this);
}
Collision.prototype = Object.create(Constraint.prototype);
Collision.prototype.constructor = Collision;
Collision.DEFAULT_OPTIONS = {
    restitution: 0.5,
    drift: 0.5,
    slop: 0
};
function _normalVelocity(particle1, particle2) {
    return particle1.velocity.dot(particle2.velocity);
}
Collision.prototype.setOptions = function setOptions(options) {
    for (var key in options)
        this.options[key] = options[key];
};
Collision.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    if (source === undefined)
        return;
    var v1 = source.velocity;
    var p1 = source.position;
    var w1 = source.inverseMass;
    var r1 = source.radius;
    var options = this.options;
    var drift = options.drift;
    var slop = -options.slop;
    var restitution = options.restitution;
    var n = this.normal;
    var pDiff = this.pDiff;
    var vDiff = this.vDiff;
    var impulse1 = this.impulse1;
    var impulse2 = this.impulse2;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (target === source)
            continue;
        var v2 = target.velocity;
        var p2 = target.position;
        var w2 = target.inverseMass;
        var r2 = target.radius;
        pDiff.set(p2.sub(p1));
        vDiff.set(v2.sub(v1));
        var dist = pDiff.norm();
        var overlap = dist - (r1 + r2);
        var effMass = 1 / (w1 + w2);
        var gamma = 0;
        if (overlap < 0) {
            n.set(pDiff.normalize());
            if (this._eventOutput) {
                var collisionData = {
                        target: target,
                        source: source,
                        overlap: overlap,
                        normal: n
                    };
                this._eventOutput.emit('preCollision', collisionData);
                this._eventOutput.emit('collision', collisionData);
            }
            var lambda = overlap <= slop ? ((1 + restitution) * n.dot(vDiff) + drift / dt * (overlap - slop)) / (gamma + dt / effMass) : (1 + restitution) * n.dot(vDiff) / (gamma + dt / effMass);
            n.mult(dt * lambda).put(impulse1);
            impulse1.mult(-1).put(impulse2);
            source.applyImpulse(impulse1);
            target.applyImpulse(impulse2);
            if (this._eventOutput)
                this._eventOutput.emit('postCollision', collisionData);
        }
    }
};
module.exports = Collision;
},{"./Constraint":124,"famous/math/Vector":68}],124:[function(require,module,exports){
module.exports=require(100)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/constraints/Constraint.js":100,"famous/core/EventHandler":49}],125:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Curve(options) {
    this.options = Object.create(Curve.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.J = new Vector();
    this.impulse = new Vector();
    Constraint.call(this);
}
Curve.prototype = Object.create(Constraint.prototype);
Curve.prototype.constructor = Curve;
var epsilon = 1e-7;
var pi = Math.PI;
Curve.DEFAULT_OPTIONS = {
    equation: function (x, y, z) {
        return 0;
    },
    plane: function (x, y, z) {
        return z;
    },
    period: 0,
    dampingRatio: 0
};
Curve.prototype.setOptions = function setOptions(options) {
    for (var key in options)
        this.options[key] = options[key];
};
Curve.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    var options = this.options;
    var impulse = this.impulse;
    var J = this.J;
    var f = options.equation;
    var g = options.plane;
    var dampingRatio = options.dampingRatio;
    var period = options.period;
    for (var i = 0; i < targets.length; i++) {
        var body = targets[i];
        var v = body.velocity;
        var p = body.position;
        var m = body.mass;
        var gamma;
        var beta;
        if (period === 0) {
            gamma = 0;
            beta = 1;
        } else {
            var c = 4 * m * pi * dampingRatio / period;
            var k = 4 * m * pi * pi / (period * period);
            gamma = 1 / (c + dt * k);
            beta = dt * k / (c + dt * k);
        }
        var x = p.x;
        var y = p.y;
        var z = p.z;
        var f0 = f(x, y, z);
        var dfx = (f(x + epsilon, p, p) - f0) / epsilon;
        var dfy = (f(x, y + epsilon, p) - f0) / epsilon;
        var dfz = (f(x, y, p + epsilon) - f0) / epsilon;
        var g0 = g(x, y, z);
        var dgx = (g(x + epsilon, y, z) - g0) / epsilon;
        var dgy = (g(x, y + epsilon, z) - g0) / epsilon;
        var dgz = (g(x, y, z + epsilon) - g0) / epsilon;
        J.setXYZ(dfx + dgx, dfy + dgy, dfz + dgz);
        var antiDrift = beta / dt * (f0 + g0);
        var lambda = -(J.dot(v) + antiDrift) / (gamma + dt * J.normSquared() / m);
        impulse.set(J.mult(dt * lambda));
        body.applyImpulse(impulse);
    }
};
module.exports = Curve;
},{"./Constraint":124,"famous/math/Vector":68}],126:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Distance(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.impulse = new Vector();
    this.normal = new Vector();
    this.diffP = new Vector();
    this.diffV = new Vector();
    Constraint.call(this);
}
Distance.prototype = Object.create(Constraint.prototype);
Distance.prototype.constructor = Distance;
Distance.DEFAULT_OPTIONS = {
    anchor: null,
    length: 0,
    minLength: 0,
    period: 0,
    dampingRatio: 0
};
var pi = Math.PI;
Distance.prototype.setOptions = function setOptions(options) {
    if (options.anchor) {
        if (options.anchor.position instanceof Vector)
            this.options.anchor = options.anchor.position;
        if (options.anchor instanceof Vector)
            this.options.anchor = options.anchor;
        if (options.anchor instanceof Array)
            this.options.anchor = new Vector(options.anchor);
    }
    if (options.length !== undefined)
        this.options.length = options.length;
    if (options.dampingRatio !== undefined)
        this.options.dampingRatio = options.dampingRatio;
    if (options.period !== undefined)
        this.options.period = options.period;
    if (options.minLength !== undefined)
        this.options.minLength = options.minLength;
};
function _calcError(impulse, body) {
    return body.mass * impulse.norm();
}
Distance.prototype.setAnchor = function setAnchor(anchor) {
    if (!this.options.anchor)
        this.options.anchor = new Vector();
    this.options.anchor.set(anchor);
};
Distance.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    var n = this.normal;
    var diffP = this.diffP;
    var diffV = this.diffV;
    var impulse = this.impulse;
    var options = this.options;
    var dampingRatio = options.dampingRatio;
    var period = options.period;
    var minLength = options.minLength;
    var p2;
    var w2;
    if (source) {
        var v2 = source.velocity;
        p2 = source.position;
        w2 = source.inverseMass;
    } else {
        p2 = this.options.anchor;
        w2 = 0;
    }
    var length = this.options.length;
    for (var i = 0; i < targets.length; i++) {
        var body = targets[i];
        var v1 = body.velocity;
        var p1 = body.position;
        var w1 = body.inverseMass;
        diffP.set(p1.sub(p2));
        n.set(diffP.normalize());
        var dist = diffP.norm() - length;
        if (Math.abs(dist) < minLength)
            return;
        if (source)
            diffV.set(v1.sub(v2));
        else
            diffV.set(v1);
        var effMass = 1 / (w1 + w2);
        var gamma;
        var beta;
        if (period === 0) {
            gamma = 0;
            beta = 1;
        } else {
            var c = 4 * effMass * pi * dampingRatio / period;
            var k = 4 * effMass * pi * pi / (period * period);
            gamma = 1 / (c + dt * k);
            beta = dt * k / (c + dt * k);
        }
        var antiDrift = beta / dt * dist;
        var lambda = -(n.dot(diffV) + antiDrift) / (gamma + dt / effMass);
        impulse.set(n.mult(dt * lambda));
        body.applyImpulse(impulse);
        if (source)
            source.applyImpulse(impulse.mult(-1));
    }
};
module.exports = Distance;
},{"./Constraint":124,"famous/math/Vector":68}],127:[function(require,module,exports){
module.exports=require(101)
},{"./Constraint":124,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/constraints/Snap.js":101,"famous/math/Vector":68}],128:[function(require,module,exports){
var Constraint = require('./Constraint');
var Vector = require('famous/math/Vector');
function Surface(options) {
    this.options = Object.create(Surface.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.J = new Vector();
    this.impulse = new Vector();
    Constraint.call(this);
}
Surface.prototype = Object.create(Constraint.prototype);
Surface.prototype.constructor = Surface;
Surface.DEFAULT_OPTIONS = {
    equation: undefined,
    period: 0,
    dampingRatio: 0
};
var epsilon = 1e-7;
var pi = Math.PI;
Surface.prototype.setOptions = function setOptions(options) {
    for (var key in options)
        this.options[key] = options[key];
};
Surface.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    var impulse = this.impulse;
    var J = this.J;
    var options = this.options;
    var f = options.equation;
    var dampingRatio = options.dampingRatio;
    var period = options.period;
    for (var i = 0; i < targets.length; i++) {
        var particle = targets[i];
        var v = particle.velocity;
        var p = particle.position;
        var m = particle.mass;
        var gamma;
        var beta;
        if (period === 0) {
            gamma = 0;
            beta = 1;
        } else {
            var c = 4 * m * pi * dampingRatio / period;
            var k = 4 * m * pi * pi / (period * period);
            gamma = 1 / (c + dt * k);
            beta = dt * k / (c + dt * k);
        }
        var x = p.x;
        var y = p.y;
        var z = p.z;
        var f0 = f(x, y, z);
        var dfx = (f(x + epsilon, p, p) - f0) / epsilon;
        var dfy = (f(x, y + epsilon, p) - f0) / epsilon;
        var dfz = (f(x, y, p + epsilon) - f0) / epsilon;
        J.setXYZ(dfx, dfy, dfz);
        var antiDrift = beta / dt * f0;
        var lambda = -(J.dot(v) + antiDrift) / (gamma + dt * J.normSquared() / m);
        impulse.set(J.mult(dt * lambda));
        particle.applyImpulse(impulse);
    }
};
module.exports = Surface;
},{"./Constraint":124,"famous/math/Vector":68}],129:[function(require,module,exports){
module.exports=require(102)
},{"./Constraint":124,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/constraints/Wall.js":102,"famous/math/Vector":68}],130:[function(require,module,exports){
var Constraint = require('./Constraint');
var Wall = require('./Wall');
var Vector = require('famous/math/Vector');
function Walls(options) {
    this.options = Object.create(Walls.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    _createComponents.call(this, options.sides || this.options.sides);
    Constraint.call(this);
}
Walls.prototype = Object.create(Constraint.prototype);
Walls.prototype.constructor = Walls;
Walls.ON_CONTACT = Wall.ON_CONTACT;
Walls.SIDES = {
    LEFT: 0,
    RIGHT: 1,
    TOP: 2,
    BOTTOM: 3,
    FRONT: 4,
    BACK: 5,
    TWO_DIMENSIONAL: [
        0,
        1,
        2,
        3
    ],
    THREE_DIMENSIONAL: [
        0,
        1,
        2,
        3,
        4,
        5
    ]
};
Walls.DEFAULT_OPTIONS = {
    sides: Walls.SIDES.TWO_DIMENSIONAL,
    size: [
        window.innerWidth,
        window.innerHeight,
        0
    ],
    origin: [
        0.5,
        0.5,
        0.5
    ],
    drift: 0.5,
    slop: 0,
    restitution: 0.5,
    onContact: Walls.ON_CONTACT.REFLECT
};
var _SIDE_NORMALS = {
        0: new Vector(1, 0, 0),
        1: new Vector(-1, 0, 0),
        2: new Vector(0, 1, 0),
        3: new Vector(0, -1, 0),
        4: new Vector(0, 0, 1),
        5: new Vector(0, 0, -1)
    };
function _getDistance(side, size, origin) {
    var distance;
    var SIDES = Walls.SIDES;
    switch (parseInt(side)) {
    case SIDES.LEFT:
        distance = size[0] * origin[0];
        break;
    case SIDES.TOP:
        distance = size[1] * origin[1];
        break;
    case SIDES.FRONT:
        distance = size[2] * origin[2];
        break;
    case SIDES.RIGHT:
        distance = size[0] * (1 - origin[0]);
        break;
    case SIDES.BOTTOM:
        distance = size[1] * (1 - origin[1]);
        break;
    case SIDES.BACK:
        distance = size[2] * (1 - origin[2]);
        break;
    }
    return distance;
}
Walls.prototype.setOptions = function setOptions(options) {
    var resizeFlag = false;
    if (options.restitution !== undefined)
        _setOptionsForEach.call(this, { restitution: options.restitution });
    if (options.drift !== undefined)
        _setOptionsForEach.call(this, { drift: options.drift });
    if (options.slop !== undefined)
        _setOptionsForEach.call(this, { slop: options.slop });
    if (options.onContact !== undefined)
        _setOptionsForEach.call(this, { onContact: options.onContact });
    if (options.size !== undefined)
        resizeFlag = true;
    if (options.sides !== undefined)
        this.options.sides = options.sides;
    if (options.origin !== undefined)
        resizeFlag = true;
    if (resizeFlag)
        this.setSize(options.size, options.origin);
};
function _createComponents(sides) {
    this.components = {};
    var components = this.components;
    for (var i = 0; i < sides.length; i++) {
        var side = sides[i];
        components[i] = new Wall({
            normal: _SIDE_NORMALS[side].clone(),
            distance: _getDistance(side, this.options.size, this.options.origin)
        });
    }
}
Walls.prototype.setSize = function setSize(size, origin) {
    origin = origin || this.options.origin;
    if (origin.length < 3)
        origin[2] = 0.5;
    this.forEach(function (wall, side) {
        var d = _getDistance(side, size, origin);
        wall.setOptions({ distance: d });
    });
    this.options.size = size;
    this.options.origin = origin;
};
function _setOptionsForEach(options) {
    this.forEach(function (wall) {
        wall.setOptions(options);
    });
    for (var key in options)
        this.options[key] = options[key];
}
Walls.prototype.applyConstraint = function applyConstraint(targets, source, dt) {
    this.forEach(function (wall) {
        wall.applyConstraint(targets, source, dt);
    });
};
Walls.prototype.forEach = function forEach(fn) {
    var sides = this.options.sides;
    for (var key in this.sides)
        fn(sides[key], key);
};
Walls.prototype.rotateZ = function rotateZ(angle) {
    this.forEach(function (wall) {
        var n = wall.options.normal;
        n.rotateZ(angle).put(n);
    });
};
Walls.prototype.rotateX = function rotateX(angle) {
    this.forEach(function (wall) {
        var n = wall.options.normal;
        n.rotateX(angle).put(n);
    });
};
Walls.prototype.rotateY = function rotateY(angle) {
    this.forEach(function (wall) {
        var n = wall.options.normal;
        n.rotateY(angle).put(n);
    });
};
module.exports = Walls;
},{"./Constraint":124,"./Wall":129,"famous/math/Vector":68}],131:[function(require,module,exports){
module.exports=require(103)
},{"./Force":132,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/forces/Drag.js":103}],132:[function(require,module,exports){
module.exports=require(104)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/forces/Force.js":104,"famous/core/EventHandler":49,"famous/math/Vector":68}],133:[function(require,module,exports){
var Force = require('./Force');
var Vector = require('famous/math/Vector');
function Repulsion(options) {
    this.options = Object.create(Repulsion.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.disp = new Vector();
    Force.call(this);
}
Repulsion.prototype = Object.create(Force.prototype);
Repulsion.prototype.constructor = Repulsion;
Repulsion.DECAY_FUNCTIONS = {
    LINEAR: function (r, cutoff) {
        return Math.max(1 - 1 / cutoff * r, 0);
    },
    MORSE: function (r, cutoff) {
        var r0 = cutoff === 0 ? 100 : cutoff;
        var rShifted = r + r0 * (1 - Math.log(2));
        return Math.max(1 - Math.pow(1 - Math.exp(rShifted / r0 - 1), 2), 0);
    },
    INVERSE: function (r, cutoff) {
        return 1 / (1 - cutoff + r);
    },
    GRAVITY: function (r, cutoff) {
        return 1 / (1 - cutoff + r * r);
    }
};
Repulsion.DEFAULT_OPTIONS = {
    strength: 1,
    anchor: undefined,
    range: [
        0,
        Infinity
    ],
    cutoff: 0,
    cap: Infinity,
    decayFunction: Repulsion.DECAY_FUNCTIONS.GRAVITY
};
Repulsion.prototype.setOptions = function setOptions(options) {
    if (options.anchor !== undefined) {
        if (options.anchor.position instanceof Vector)
            this.options.anchor = options.anchor.position;
        if (options.anchor instanceof Array)
            this.options.anchor = new Vector(options.anchor);
        delete options.anchor;
    }
    for (var key in options)
        this.options[key] = options[key];
};
Repulsion.prototype.applyForce = function applyForce(targets, source) {
    var options = this.options;
    var force = this.force;
    var disp = this.disp;
    var strength = options.strength;
    var anchor = options.anchor || source.position;
    var cap = options.cap;
    var cutoff = options.cutoff;
    var rMin = options.range[0];
    var rMax = options.range[1];
    var decayFn = options.decayFunction;
    if (strength === 0)
        return;
    for (var index in targets) {
        var particle = targets[index];
        if (particle === source)
            continue;
        var m1 = particle.mass;
        var p1 = particle.position;
        disp.set(p1.sub(anchor));
        var r = disp.norm();
        if (r < rMax && r > rMin) {
            force.set(disp.normalize(strength * m1 * decayFn(r, cutoff)).cap(cap));
            particle.applyForce(force);
        }
    }
};
module.exports = Repulsion;
},{"./Force":132,"famous/math/Vector":68}],134:[function(require,module,exports){
var Drag = require('./Drag');
function RotationalDrag(options) {
    Drag.call(this, options);
}
RotationalDrag.prototype = Object.create(Drag.prototype);
RotationalDrag.prototype.constructor = RotationalDrag;
RotationalDrag.DEFAULT_OPTIONS = Drag.DEFAULT_OPTIONS;
RotationalDrag.FORCE_FUNCTIONS = Drag.FORCE_FUNCTIONS;
RotationalDrag.FORCE_FUNCTIONS = {
    LINEAR: function (angularVelocity) {
        return angularVelocity;
    },
    QUADRATIC: function (angularVelocity) {
        return angularVelocity.mult(angularVelocity.norm());
    }
};
RotationalDrag.prototype.applyForce = function applyForce(targets) {
    var strength = this.options.strength;
    var forceFunction = this.options.forceFunction;
    var force = this.force;
    for (var index = 0; index < targets.length; index++) {
        var particle = targets[index];
        forceFunction(particle.angularVelocity).mult(-100 * strength).put(force);
        particle.applyTorque(force);
    }
};
RotationalDrag.prototype.setOptions = function setOptions(options) {
    for (var key in options)
        this.options[key] = options[key];
};
module.exports = RotationalDrag;
},{"./Drag":131}],135:[function(require,module,exports){
var Force = require('./Force');
var Spring = require('./Spring');
var Quaternion = require('famous/math/Quaternion');
function RotationalSpring(options) {
    Spring.call(this, options);
}
RotationalSpring.prototype = Object.create(Spring.prototype);
RotationalSpring.prototype.constructor = RotationalSpring;
RotationalSpring.DEFAULT_OPTIONS = Spring.DEFAULT_OPTIONS;
RotationalSpring.FORCE_FUNCTIONS = Spring.FORCE_FUNCTIONS;
var pi = Math.PI;
function _calcStiffness() {
    var options = this.options;
    options.stiffness = Math.pow(2 * pi / options.period, 2);
}
function _calcDamping() {
    var options = this.options;
    options.damping = 4 * pi * options.dampingRatio / options.period;
}
function _init() {
    _calcStiffness.call(this);
    _calcDamping.call(this);
}
RotationalSpring.prototype.setOptions = function setOptions(options) {
    if (options.anchor !== undefined) {
        if (options.anchor instanceof Quaternion)
            this.options.anchor = options.anchor;
        if (options.anchor instanceof Array)
            this.options.anchor = new Quaternion(options.anchor);
    }
    if (options.period !== undefined) {
        this.options.period = options.period;
    }
    if (options.dampingRatio !== undefined)
        this.options.dampingRatio = options.dampingRatio;
    if (options.length !== undefined)
        this.options.length = options.length;
    if (options.forceFunction !== undefined)
        this.options.forceFunction = options.forceFunction;
    if (options.maxLength !== undefined)
        this.options.maxLength = options.maxLength;
    _init.call(this);
    Force.prototype.setOptions.call(this, options);
};
RotationalSpring.prototype.applyForce = function applyForce(targets) {
    var force = this.force;
    var options = this.options;
    var disp = this.disp;
    var stiffness = options.stiffness;
    var damping = options.damping;
    var restLength = options.length;
    var anchor = options.anchor;
    var forceFunction = options.forceFunction;
    var maxLength = options.maxLength;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        disp.set(anchor.sub(target.orientation));
        var dist = disp.norm() - restLength;
        if (dist === 0)
            return;
        var m = target.mass;
        stiffness *= m;
        damping *= m;
        force.set(disp.normalize(stiffness * forceFunction(dist, maxLength)));
        if (damping)
            force.add(target.angularVelocity.mult(-damping)).put(force);
        target.applyTorque(force);
    }
};
RotationalSpring.prototype.getEnergy = function getEnergy(targets) {
    var options = this.options;
    var restLength = options.length;
    var anchor = options.anchor;
    var strength = options.stiffness;
    var energy = 0;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var dist = anchor.sub(target.orientation).norm() - restLength;
        energy += 0.5 * strength * dist * dist;
    }
    return energy;
};
module.exports = RotationalSpring;
},{"./Force":132,"./Spring":136,"famous/math/Quaternion":66}],136:[function(require,module,exports){
module.exports=require(105)
},{"./Force":132,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/forces/Spring.js":105,"famous/math/Vector":68}],137:[function(require,module,exports){
var Force = require('./Force');
var Vector = require('famous/math/Vector');
function VectorField(options) {
    Force.call(this);
    this.options = Object.create(VectorField.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    this.evaluation = new Vector();
}
VectorField.prototype = Object.create(Force.prototype);
VectorField.prototype.constructor = VectorField;
VectorField.FIELDS = {
    CONSTANT: function (v, options) {
        options.direction.put(this.evaluation);
    },
    LINEAR: function (v) {
        v.put(this.evaluation);
    },
    RADIAL: function (v) {
        v.mult(-1).put(this.evaluation);
    },
    POINT_ATTRACTOR: function (v, options) {
        options.position.sub(v).put(this.evaluation);
    }
};
VectorField.DEFAULT_OPTIONS = {
    strength: 0.01,
    field: VectorField.FIELDS.CONSTANT
};
VectorField.prototype.setOptions = function setOptions(options) {
    if (options.strength !== undefined)
        this.options.strength = options.strength;
    if (options.field !== undefined) {
        this.options.field = options.field;
        _setFieldOptions.call(this, this.options.field);
    }
};
function _setFieldOptions(field) {
    var FIELDS = VectorField.FIELDS;
    switch (field) {
    case FIELDS.CONSTANT:
        if (!this.options.direction)
            this.options.direction = new Vector(0, 1, 0);
        else if (this.options.direction instanceof Array)
            this.options.direction = new Vector(this.options.direction);
        break;
    case FIELDS.POINT_ATTRACTOR:
        if (!this.options.position)
            this.options.position = new Vector(0, 0, 0);
        else if (this.options.position instanceof Array)
            this.options.position = new Vector(this.options.position);
        break;
    }
}
VectorField.prototype.applyForce = function applyForce(targets) {
    var force = this.force;
    var strength = this.options.strength;
    var field = this.options.field;
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        field.call(this, target.position, this.options);
        this.evaluation.mult(target.mass * strength).put(force);
        target.applyForce(force);
    }
};
VectorField.prototype.getEnergy = function getEnergy(targets) {
    var field = this.options.field;
    var FIELDS = VectorField.FIELDS;
    var energy = 0;
    var i;
    var target;
    switch (field) {
    case FIELDS.CONSTANT:
        energy = targets.length * this.options.direction.norm();
        break;
    case FIELDS.RADIAL:
        for (i = 0; i < targets.length; i++) {
            target = targets[i];
            energy += target.position.norm();
        }
        break;
    case FIELDS.POINT_ATTRACTOR:
        for (i = 0; i < targets.length; i++) {
            target = targets[i];
            energy += target.position.sub(this.options.position).norm();
        }
        break;
    }
    energy *= this.options.strength;
    return energy;
};
module.exports = VectorField;
},{"./Force":132,"famous/math/Vector":68}],138:[function(require,module,exports){
module.exports=require(106)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/physics/integrators/SymplecticEuler.js":106}],139:[function(require,module,exports){
module.exports=require(107)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/surfaces/CanvasSurface.js":107,"famous/core/Surface":56}],140:[function(require,module,exports){
module.exports=require(108)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/surfaces/ContainerSurface.js":108,"famous/core/Context":43,"famous/core/Surface":56}],141:[function(require,module,exports){
var ContainerSurface = require('./ContainerSurface');
function FormContainerSurface(options) {
    if (options)
        this._method = options.method || '';
    ContainerSurface.apply(this, arguments);
}
FormContainerSurface.prototype = Object.create(ContainerSurface.prototype);
FormContainerSurface.prototype.constructor = FormContainerSurface;
FormContainerSurface.prototype.elementType = 'form';
FormContainerSurface.prototype.deploy = function deploy(target) {
    if (this._method)
        target.method = this._method;
    return ContainerSurface.prototype.deploy.apply(this, arguments);
};
module.exports = FormContainerSurface;
},{"./ContainerSurface":140}],142:[function(require,module,exports){
var Surface = require('famous/core/Surface');
function ImageSurface(options) {
    this._imageUrl = undefined;
    Surface.apply(this, arguments);
}
var urlCache = [];
var countCache = [];
var nodeCache = [];
var cacheEnabled = true;
ImageSurface.enableCache = function enableCache() {
    cacheEnabled = true;
};
ImageSurface.disableCache = function disableCache() {
    cacheEnabled = false;
};
ImageSurface.clearCache = function clearCache() {
    urlCache = [];
    countCache = [];
    nodeCache = [];
};
ImageSurface.getCache = function getCache() {
    return {
        urlCache: urlCache,
        countCache: countCache,
        nodeCache: countCache
    };
};
ImageSurface.prototype = Object.create(Surface.prototype);
ImageSurface.prototype.constructor = ImageSurface;
ImageSurface.prototype.elementType = 'img';
ImageSurface.prototype.elementClass = 'famous-surface';
ImageSurface.prototype.setContent = function setContent(imageUrl) {
    var urlIndex = urlCache.indexOf(this._imageUrl);
    if (urlIndex !== -1) {
        if (countCache[urlIndex] === 1) {
            urlCache.splice(urlIndex, 1);
            countCache.splice(urlIndex, 1);
            nodeCache.splice(urlIndex, 1);
        } else {
            countCache[urlIndex]--;
        }
    }
    urlIndex = urlCache.indexOf(imageUrl);
    if (urlIndex === -1) {
        urlCache.push(imageUrl);
        countCache.push(1);
    } else {
        countCache[urlIndex]++;
    }
    this._imageUrl = imageUrl;
    this._contentDirty = true;
};
ImageSurface.prototype.deploy = function deploy(target) {
    var urlIndex = urlCache.indexOf(this._imageUrl);
    if (nodeCache[urlIndex] === undefined && cacheEnabled) {
        var img = new Image();
        img.src = this._imageUrl || '';
        nodeCache[urlIndex] = img;
    }
    target.src = this._imageUrl || '';
};
ImageSurface.prototype.recall = function recall(target) {
    target.src = '';
};
module.exports = ImageSurface;
},{"famous/core/Surface":56}],143:[function(require,module,exports){
var Surface = require('famous/core/Surface');
function InputSurface(options) {
    this._placeholder = options.placeholder || '';
    this._value = options.value || '';
    this._type = options.type || 'text';
    this._name = options.name || '';
    Surface.apply(this, arguments);
    this.on('click', this.focus.bind(this));
    window.addEventListener('click', function (event) {
        if (event.target !== this._currentTarget)
            this.blur();
    }.bind(this));
}
InputSurface.prototype = Object.create(Surface.prototype);
InputSurface.prototype.constructor = InputSurface;
InputSurface.prototype.elementType = 'input';
InputSurface.prototype.elementClass = 'famous-surface';
InputSurface.prototype.setPlaceholder = function setPlaceholder(str) {
    this._placeholder = str;
    this._contentDirty = true;
    return this;
};
InputSurface.prototype.focus = function focus() {
    if (this._currentTarget)
        this._currentTarget.focus();
    return this;
};
InputSurface.prototype.blur = function blur() {
    if (this._currentTarget)
        this._currentTarget.blur();
    return this;
};
InputSurface.prototype.setValue = function setValue(str) {
    this._value = str;
    this._contentDirty = true;
    return this;
};
InputSurface.prototype.setType = function setType(str) {
    this._type = str;
    this._contentDirty = true;
    return this;
};
InputSurface.prototype.getValue = function getValue() {
    if (this._currentTarget) {
        return this._currentTarget.value;
    } else {
        return this._value;
    }
};
InputSurface.prototype.setName = function setName(str) {
    this._name = str;
    this._contentDirty = true;
    return this;
};
InputSurface.prototype.getName = function getName() {
    return this._name;
};
InputSurface.prototype.deploy = function deploy(target) {
    if (this._placeholder !== '')
        target.placeholder = this._placeholder;
    target.value = this._value;
    target.type = this._type;
    target.name = this._name;
};
module.exports = InputSurface;
},{"famous/core/Surface":56}],144:[function(require,module,exports){
var InputSurface = require('./InputSurface');
function SubmitInputSurface(options) {
    InputSurface.apply(this, arguments);
    this._type = 'submit';
    if (options && options.onClick)
        this.setOnClick(options.onClick);
}
SubmitInputSurface.prototype = Object.create(InputSurface.prototype);
SubmitInputSurface.prototype.constructor = SubmitInputSurface;
SubmitInputSurface.prototype.setOnClick = function (onClick) {
    this.onClick = onClick;
};
SubmitInputSurface.prototype.deploy = function deploy(target) {
    if (this.onclick)
        target.onClick = this.onClick;
    InputSurface.prototype.deploy.apply(this, arguments);
};
module.exports = SubmitInputSurface;
},{"./InputSurface":143}],145:[function(require,module,exports){
var Surface = require('famous/core/Surface');
function TextareaSurface(options) {
    this._placeholder = options.placeholder || '';
    this._value = options.value || '';
    this._name = options.name || '';
    this._wrap = options.wrap || '';
    this._cols = options.cols || '';
    this._rows = options.rows || '';
    Surface.apply(this, arguments);
    this.on('click', this.focus.bind(this));
}
TextareaSurface.prototype = Object.create(Surface.prototype);
TextareaSurface.prototype.constructor = TextareaSurface;
TextareaSurface.prototype.elementType = 'textarea';
TextareaSurface.prototype.elementClass = 'famous-surface';
TextareaSurface.prototype.setPlaceholder = function setPlaceholder(str) {
    this._placeholder = str;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.focus = function focus() {
    if (this._currentTarget)
        this._currentTarget.focus();
    return this;
};
TextareaSurface.prototype.blur = function blur() {
    if (this._currentTarget)
        this._currentTarget.blur();
    return this;
};
TextareaSurface.prototype.setValue = function setValue(str) {
    this._value = str;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.getValue = function getValue() {
    if (this._currentTarget) {
        return this._currentTarget.value;
    } else {
        return this._value;
    }
};
TextareaSurface.prototype.setName = function setName(str) {
    this._name = str;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.getName = function getName() {
    return this._name;
};
TextareaSurface.prototype.setWrap = function setWrap(str) {
    this._wrap = str;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.setColumns = function setColumns(num) {
    this._cols = num;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.setRows = function setRows(num) {
    this._rows = num;
    this._contentDirty = true;
    return this;
};
TextareaSurface.prototype.deploy = function deploy(target) {
    if (this._placeholder !== '')
        target.placeholder = this._placeholder;
    if (this._value !== '')
        target.value = this._value;
    if (this._name !== '')
        target.name = this._name;
    if (this._wrap !== '')
        target.wrap = this._wrap;
    if (this._cols !== '')
        target.cols = this._cols;
    if (this._rows !== '')
        target.rows = this._rows;
};
module.exports = TextareaSurface;
},{"famous/core/Surface":56}],146:[function(require,module,exports){
var Surface = require('famous/core/Surface');
function VideoSurface(options) {
    this._videoUrl = undefined;
    this.options = Object.create(VideoSurface.DEFAULT_OPTIONS);
    if (options)
        this.setOptions(options);
    Surface.apply(this, arguments);
}
VideoSurface.prototype = Object.create(Surface.prototype);
VideoSurface.prototype.constructor = VideoSurface;
VideoSurface.DEFAULT_OPTIONS = { autoplay: false };
VideoSurface.prototype.elementType = 'video';
VideoSurface.prototype.elementClass = 'famous-surface';
VideoSurface.prototype.setOptions = function setOptions(options) {
    if (options.size)
        this.setSize(options.size);
    if (options.classes)
        this.setClasses(options.classes);
    if (options.properties)
        this.setProperties(options.properties);
    if (options.autoplay)
        this.options.autoplay = options.autoplay;
    if (options.src) {
        this._videoUrl = options.src;
        this._contentDirty = true;
    }
};
VideoSurface.prototype.setContent = function setContent(videoUrl) {
    this._videoUrl = videoUrl;
    this._contentDirty = true;
};
VideoSurface.prototype.deploy = function deploy(target) {
    target.src = this._videoUrl;
    target.autoplay = this.options.autoplay;
};
VideoSurface.prototype.recall = function recall(target) {
    target.src = '';
};
module.exports = VideoSurface;
},{"famous/core/Surface":56}],147:[function(require,module,exports){
module.exports=require(109)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/transitions/CachedMap.js":109}],148:[function(require,module,exports){
var Easing = {
        inQuad: function (t) {
            return t * t;
        },
        outQuad: function (t) {
            return -(t -= 1) * t + 1;
        },
        inOutQuad: function (t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t;
            return -0.5 * (--t * (t - 2) - 1);
        },
        inCubic: function (t) {
            return t * t * t;
        },
        outCubic: function (t) {
            return --t * t * t + 1;
        },
        inOutCubic: function (t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t;
            return 0.5 * ((t -= 2) * t * t + 2);
        },
        inQuart: function (t) {
            return t * t * t * t;
        },
        outQuart: function (t) {
            return -(--t * t * t * t - 1);
        },
        inOutQuart: function (t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t * t;
            return -0.5 * ((t -= 2) * t * t * t - 2);
        },
        inQuint: function (t) {
            return t * t * t * t * t;
        },
        outQuint: function (t) {
            return --t * t * t * t * t + 1;
        },
        inOutQuint: function (t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t * t * t;
            return 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        inSine: function (t) {
            return -1 * Math.cos(t * (Math.PI / 2)) + 1;
        },
        outSine: function (t) {
            return Math.sin(t * (Math.PI / 2));
        },
        inOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
        },
        inExpo: function (t) {
            return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
        },
        outExpo: function (t) {
            return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
        },
        inOutExpo: function (t) {
            if (t === 0)
                return 0;
            if (t === 1)
                return 1;
            if ((t /= 0.5) < 1)
                return 0.5 * Math.pow(2, 10 * (t - 1));
            return 0.5 * (-Math.pow(2, -10 * --t) + 2);
        },
        inCirc: function (t) {
            return -(Math.sqrt(1 - t * t) - 1);
        },
        outCirc: function (t) {
            return Math.sqrt(1 - --t * t);
        },
        inOutCirc: function (t) {
            if ((t /= 0.5) < 1)
                return -0.5 * (Math.sqrt(1 - t * t) - 1);
            return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        inElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0)
                return 0;
            if (t === 1)
                return 1;
            if (!p)
                p = 0.3;
            s = p / (2 * Math.PI) * Math.asin(1 / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
        },
        outElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0)
                return 0;
            if (t === 1)
                return 1;
            if (!p)
                p = 0.3;
            s = p / (2 * Math.PI) * Math.asin(1 / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
        },
        inOutElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0)
                return 0;
            if ((t /= 0.5) === 2)
                return 1;
            if (!p)
                p = 0.3 * 1.5;
            s = p / (2 * Math.PI) * Math.asin(1 / a);
            if (t < 1)
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
        },
        inBack: function (t, s) {
            if (s === undefined)
                s = 1.70158;
            return t * t * ((s + 1) * t - s);
        },
        outBack: function (t, s) {
            if (s === undefined)
                s = 1.70158;
            return --t * t * ((s + 1) * t + s) + 1;
        },
        inOutBack: function (t, s) {
            if (s === undefined)
                s = 1.70158;
            if ((t /= 0.5) < 1)
                return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
            return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
        },
        inBounce: function (t) {
            return 1 - Easing.outBounce(1 - t);
        },
        outBounce: function (t) {
            if (t < 1 / 2.75) {
                return 7.5625 * t * t;
            } else if (t < 2 / 2.75) {
                return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
            } else if (t < 2.5 / 2.75) {
                return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
            } else {
                return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }
        },
        inOutBounce: function (t) {
            if (t < 0.5)
                return Easing.inBounce(t * 2) * 0.5;
            return Easing.outBounce(t * 2 - 1) * 0.5 + 0.5;
        }
    };
module.exports = Easing;
},{}],149:[function(require,module,exports){
module.exports=require(88)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/MultipleTransition.js":88,"famous/utilities/Utility":114}],150:[function(require,module,exports){
var PE = require('famous/physics/PhysicsEngine');
var Particle = require('famous/physics/bodies/Particle');
var Spring = require('famous/physics/constraints/Snap');
var Vector = require('famous/math/Vector');
function SnapTransition(state) {
    state = state || 0;
    this.endState = new Vector(state);
    this.initState = new Vector();
    this._dimensions = 1;
    this._restTolerance = 1e-10;
    this._absRestTolerance = this._restTolerance;
    this._callback = undefined;
    this.PE = new PE();
    this.particle = new Particle();
    this.spring = new Spring({ anchor: this.endState });
    this.PE.addBody(this.particle);
    this.PE.attach(this.spring, this.particle);
}
SnapTransition.SUPPORTS_MULTIPLE = 3;
SnapTransition.DEFAULT_OPTIONS = {
    period: 100,
    dampingRatio: 0.2,
    velocity: 0
};
function _getEnergy() {
    return this.particle.getEnergy() + this.spring.getEnergy([this.particle]);
}
function _setAbsoluteRestTolerance() {
    var distance = this.endState.sub(this.initState).normSquared();
    this._absRestTolerance = distance === 0 ? this._restTolerance : this._restTolerance * distance;
}
function _setTarget(target) {
    this.endState.set(target);
    _setAbsoluteRestTolerance.call(this);
}
function _wake() {
    this.PE.wake();
}
function _sleep() {
    this.PE.sleep();
}
function _setParticlePosition(p) {
    this.particle.position.set(p);
}
function _setParticleVelocity(v) {
    this.particle.velocity.set(v);
}
function _getParticlePosition() {
    return this._dimensions === 0 ? this.particle.getPosition1D() : this.particle.getPosition();
}
function _getParticleVelocity() {
    return this._dimensions === 0 ? this.particle.getVelocity1D() : this.particle.getVelocity();
}
function _setCallback(callback) {
    this._callback = callback;
}
function _setupDefinition(definition) {
    var defaults = SnapTransition.DEFAULT_OPTIONS;
    if (definition.period === undefined)
        definition.period = defaults.period;
    if (definition.dampingRatio === undefined)
        definition.dampingRatio = defaults.dampingRatio;
    if (definition.velocity === undefined)
        definition.velocity = defaults.velocity;
    this.spring.setOptions({
        period: definition.period,
        dampingRatio: definition.dampingRatio
    });
    _setParticleVelocity.call(this, definition.velocity);
}
function _update() {
    if (this.PE.isSleeping()) {
        if (this._callback) {
            var cb = this._callback;
            this._callback = undefined;
            cb();
        }
        return;
    }
    if (_getEnergy.call(this) < this._absRestTolerance) {
        _setParticlePosition.call(this, this.endState);
        _setParticleVelocity.call(this, [
            0,
            0,
            0
        ]);
        _sleep.call(this);
    }
}
SnapTransition.prototype.reset = function reset(state, velocity) {
    this._dimensions = state instanceof Array ? state.length : 0;
    this.initState.set(state);
    _setParticlePosition.call(this, state);
    _setTarget.call(this, state);
    if (velocity)
        _setParticleVelocity.call(this, velocity);
    _setCallback.call(this, undefined);
};
SnapTransition.prototype.getVelocity = function getVelocity() {
    return _getParticleVelocity.call(this);
};
SnapTransition.prototype.setVelocity = function setVelocity(velocity) {
    this.call(this, _setParticleVelocity(velocity));
};
SnapTransition.prototype.isActive = function isActive() {
    return !this.PE.isSleeping();
};
SnapTransition.prototype.halt = function halt() {
    this.set(this.get());
};
SnapTransition.prototype.get = function get() {
    _update.call(this);
    return _getParticlePosition.call(this);
};
SnapTransition.prototype.set = function set(state, definition, callback) {
    if (!definition) {
        this.reset(state);
        if (callback)
            callback();
        return;
    }
    this._dimensions = state instanceof Array ? state.length : 0;
    _wake.call(this);
    _setupDefinition.call(this, definition);
    _setTarget.call(this, state);
    _setCallback.call(this, callback);
};
module.exports = SnapTransition;
},{"famous/math/Vector":68,"famous/physics/PhysicsEngine":98,"famous/physics/bodies/Particle":99,"famous/physics/constraints/Snap":101}],151:[function(require,module,exports){
var PE = require('famous/physics/PhysicsEngine');
var Particle = require('famous/physics/bodies/Particle');
var Spring = require('famous/physics/forces/Spring');
var Vector = require('famous/math/Vector');
function SpringTransition(state) {
    state = state || 0;
    this.endState = new Vector(state);
    this.initState = new Vector();
    this._dimensions = undefined;
    this._restTolerance = 1e-10;
    this._absRestTolerance = this._restTolerance;
    this._callback = undefined;
    this.PE = new PE();
    this.spring = new Spring({ anchor: this.endState });
    this.particle = new Particle();
    this.PE.addBody(this.particle);
    this.PE.attach(this.spring, this.particle);
}
SpringTransition.SUPPORTS_MULTIPLE = 3;
SpringTransition.DEFAULT_OPTIONS = {
    period: 300,
    dampingRatio: 0.5,
    velocity: 0
};
function _getEnergy() {
    return this.particle.getEnergy() + this.spring.getEnergy([this.particle]);
}
function _setParticlePosition(p) {
    this.particle.setPosition(p);
}
function _setParticleVelocity(v) {
    this.particle.setVelocity(v);
}
function _getParticlePosition() {
    return this._dimensions === 0 ? this.particle.getPosition1D() : this.particle.getPosition();
}
function _getParticleVelocity() {
    return this._dimensions === 0 ? this.particle.getVelocity1D() : this.particle.getVelocity();
}
function _setCallback(callback) {
    this._callback = callback;
}
function _wake() {
    this.PE.wake();
}
function _sleep() {
    this.PE.sleep();
}
function _update() {
    if (this.PE.isSleeping()) {
        if (this._callback) {
            var cb = this._callback;
            this._callback = undefined;
            cb();
        }
        return;
    }
    if (_getEnergy.call(this) < this._absRestTolerance) {
        _setParticlePosition.call(this, this.endState);
        _setParticleVelocity.call(this, [
            0,
            0,
            0
        ]);
        _sleep.call(this);
    }
}
function _setupDefinition(definition) {
    var defaults = SpringTransition.DEFAULT_OPTIONS;
    if (definition.period === undefined)
        definition.period = defaults.period;
    if (definition.dampingRatio === undefined)
        definition.dampingRatio = defaults.dampingRatio;
    if (definition.velocity === undefined)
        definition.velocity = defaults.velocity;
    if (definition.period < 150) {
        definition.period = 150;
        console.warn('The period of a SpringTransition is capped at 150 ms. Use a SnapTransition for faster transitions');
    }
    this.spring.setOptions({
        period: definition.period,
        dampingRatio: definition.dampingRatio
    });
    _setParticleVelocity.call(this, definition.velocity);
}
function _setAbsoluteRestTolerance() {
    var distance = this.endState.sub(this.initState).normSquared();
    this._absRestTolerance = distance === 0 ? this._restTolerance : this._restTolerance * distance;
}
function _setTarget(target) {
    this.endState.set(target);
    _setAbsoluteRestTolerance.call(this);
}
SpringTransition.prototype.reset = function reset(pos, vel) {
    this._dimensions = pos instanceof Array ? pos.length : 0;
    this.initState.set(pos);
    _setParticlePosition.call(this, pos);
    _setTarget.call(this, pos);
    if (vel)
        _setParticleVelocity.call(this, vel);
    _setCallback.call(this, undefined);
};
SpringTransition.prototype.getVelocity = function getVelocity() {
    return _getParticleVelocity.call(this);
};
SpringTransition.prototype.setVelocity = function setVelocity(v) {
    this.call(this, _setParticleVelocity(v));
};
SpringTransition.prototype.isActive = function isActive() {
    return !this.PE.isSleeping();
};
SpringTransition.prototype.halt = function halt() {
    this.set(this.get());
};
SpringTransition.prototype.get = function get() {
    _update.call(this);
    return _getParticlePosition.call(this);
};
SpringTransition.prototype.set = function set(endState, definition, callback) {
    if (!definition) {
        this.reset(endState);
        if (callback)
            callback();
        return;
    }
    this._dimensions = endState instanceof Array ? endState.length : 0;
    _wake.call(this);
    _setupDefinition.call(this, definition);
    _setTarget.call(this, endState);
    _setCallback.call(this, callback);
};
module.exports = SpringTransition;
},{"famous/math/Vector":68,"famous/physics/PhysicsEngine":98,"famous/physics/bodies/Particle":99,"famous/physics/forces/Spring":105}],152:[function(require,module,exports){
module.exports=require(89)
},{"./MultipleTransition":149,"./TweenTransition":154,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/Transitionable.js":89}],153:[function(require,module,exports){
module.exports=require(90)
},{"./Transitionable":152,"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TransitionableTransform.js":90,"famous/core/Transform":57,"famous/utilities/Utility":114}],154:[function(require,module,exports){
module.exports=require(91)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/transitions/TweenTransition.js":91}],155:[function(require,module,exports){
var PE = require('famous/physics/PhysicsEngine');
var Particle = require('famous/physics/bodies/Particle');
var Spring = require('famous/physics/forces/Spring');
var Wall = require('famous/physics/constraints/Wall');
var Vector = require('famous/math/Vector');
function WallTransition(state) {
    state = state || 0;
    this.endState = new Vector(state);
    this.initState = new Vector();
    this.spring = new Spring({ anchor: this.endState });
    this.wall = new Wall();
    this._restTolerance = 1e-10;
    this._dimensions = 1;
    this._absRestTolerance = this._restTolerance;
    this._callback = undefined;
    this.PE = new PE();
    this.particle = new Particle();
    this.PE.addBody(this.particle);
    this.PE.attach([
        this.wall,
        this.spring
    ], this.particle);
}
WallTransition.SUPPORTS_MULTIPLE = 3;
WallTransition.DEFAULT_OPTIONS = {
    period: 300,
    dampingRatio: 0.5,
    velocity: 0,
    restitution: 0.5
};
function _getEnergy() {
    return this.particle.getEnergy() + this.spring.getEnergy([this.particle]);
}
function _setAbsoluteRestTolerance() {
    var distance = this.endState.sub(this.initState).normSquared();
    this._absRestTolerance = distance === 0 ? this._restTolerance : this._restTolerance * distance;
}
function _wake() {
    this.PE.wake();
}
function _sleep() {
    this.PE.sleep();
}
function _setTarget(target) {
    this.endState.set(target);
    var dist = this.endState.sub(this.initState).norm();
    this.wall.setOptions({
        distance: this.endState.norm(),
        normal: dist === 0 ? this.particle.velocity.normalize(-1) : this.endState.sub(this.initState).normalize(-1)
    });
    _setAbsoluteRestTolerance.call(this);
}
function _setParticlePosition(p) {
    this.particle.position.set(p);
}
function _setParticleVelocity(v) {
    this.particle.velocity.set(v);
}
function _getParticlePosition() {
    return this._dimensions === 0 ? this.particle.getPosition1D() : this.particle.getPosition();
}
function _getParticleVelocity() {
    return this._dimensions === 0 ? this.particle.getVelocity1D() : this.particle.getVelocity();
}
function _setCallback(callback) {
    this._callback = callback;
}
function _update() {
    if (this.PE.isSleeping()) {
        if (this._callback) {
            var cb = this._callback;
            this._callback = undefined;
            cb();
        }
        return;
    }
    var energy = _getEnergy.call(this);
    if (energy < this._absRestTolerance) {
        _sleep.call(this);
        _setParticlePosition.call(this, this.endState);
        _setParticleVelocity.call(this, [
            0,
            0,
            0
        ]);
    }
}
function _setupDefinition(def) {
    var defaults = WallTransition.DEFAULT_OPTIONS;
    if (def.period === undefined)
        def.period = defaults.period;
    if (def.dampingRatio === undefined)
        def.dampingRatio = defaults.dampingRatio;
    if (def.velocity === undefined)
        def.velocity = defaults.velocity;
    if (def.restitution === undefined)
        def.restitution = defaults.restitution;
    this.spring.setOptions({
        period: def.period,
        dampingRatio: def.dampingRatio
    });
    this.wall.setOptions({ restitution: def.restitution });
    _setParticleVelocity.call(this, def.velocity);
}
WallTransition.prototype.reset = function reset(state, velocity) {
    this._dimensions = state instanceof Array ? state.length : 0;
    this.initState.set(state);
    _setParticlePosition.call(this, state);
    if (velocity)
        _setParticleVelocity.call(this, velocity);
    _setTarget.call(this, state);
    _setCallback.call(this, undefined);
};
WallTransition.prototype.getVelocity = function getVelocity() {
    return _getParticleVelocity.call(this);
};
WallTransition.prototype.setVelocity = function setVelocity(velocity) {
    this.call(this, _setParticleVelocity(velocity));
};
WallTransition.prototype.isActive = function isActive() {
    return !this.PE.isSleeping();
};
WallTransition.prototype.halt = function halt() {
    this.set(this.get());
};
WallTransition.prototype.get = function get() {
    _update.call(this);
    return _getParticlePosition.call(this);
};
WallTransition.prototype.set = function set(state, definition, callback) {
    if (!definition) {
        this.reset(state);
        if (callback)
            callback();
        return;
    }
    this._dimensions = state instanceof Array ? state.length : 0;
    _wake.call(this);
    _setupDefinition.call(this, definition);
    _setTarget.call(this, state);
    _setCallback.call(this, callback);
};
module.exports = WallTransition;
},{"famous/math/Vector":68,"famous/physics/PhysicsEngine":98,"famous/physics/bodies/Particle":99,"famous/physics/constraints/Wall":102,"famous/physics/forces/Spring":105}],156:[function(require,module,exports){
var KeyCodes = {
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 97,
        b: 98,
        c: 99,
        d: 100,
        e: 101,
        f: 102,
        g: 103,
        h: 104,
        i: 105,
        j: 106,
        k: 107,
        l: 108,
        m: 109,
        n: 110,
        o: 111,
        p: 112,
        q: 113,
        r: 114,
        s: 115,
        t: 116,
        u: 117,
        v: 118,
        w: 119,
        x: 120,
        y: 121,
        z: 122,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        ENTER: 13,
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        SPACE: 32,
        SHIFT: 16,
        TAB: 9
    };
module.exports = KeyCodes;
},{}],157:[function(require,module,exports){
var FamousEngine = require('famous/core/Engine');
var _event = 'prerender';
var getTime = window.performance && window.performance.now ? function () {
        return window.performance.now();
    } : function () {
        return Date.now();
    };
function addTimerFunction(fn) {
    FamousEngine.on(_event, fn);
    return fn;
}
function setTimeout(fn, duration) {
    var t = getTime();
    var callback = function () {
        var t2 = getTime();
        if (t2 - t >= duration) {
            fn.apply(this, arguments);
            FamousEngine.removeListener(_event, callback);
        }
    };
    return addTimerFunction(callback);
}
function setInterval(fn, duration) {
    var t = getTime();
    var callback = function () {
        var t2 = getTime();
        if (t2 - t >= duration) {
            fn.apply(this, arguments);
            t = getTime();
        }
    };
    return addTimerFunction(callback);
}
function after(fn, numTicks) {
    if (numTicks === undefined)
        return undefined;
    var callback = function () {
        numTicks--;
        if (numTicks <= 0) {
            fn.apply(this, arguments);
            clear(callback);
        }
    };
    return addTimerFunction(callback);
}
function every(fn, numTicks) {
    numTicks = numTicks || 1;
    var initial = numTicks;
    var callback = function () {
        numTicks--;
        if (numTicks <= 0) {
            fn.apply(this, arguments);
            numTicks = initial;
        }
    };
    return addTimerFunction(callback);
}
function clear(fn) {
    FamousEngine.removeListener(_event, fn);
}
function debounce(func, wait) {
    var timeout;
    var ctx;
    var timestamp;
    var result;
    var args;
    return function () {
        ctx = this;
        args = arguments;
        timestamp = getTime();
        var fn = function () {
            var last = getTime - timestamp;
            if (last < wait) {
                timeout = setTimeout(fn, wait - last);
            } else {
                timeout = null;
                result = func.apply(ctx, args);
            }
        };
        clear(timeout);
        timeout = setTimeout(fn, wait);
        return result;
    };
}
module.exports = {
    setTimeout: setTimeout,
    setInterval: setInterval,
    debounce: debounce,
    after: after,
    every: every,
    clear: clear
};
},{"famous/core/Engine":46}],158:[function(require,module,exports){
module.exports=require(87)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/node_modules/famous/node_modules/famous/node_modules/famous/utilities/Utility.js":87}],159:[function(require,module,exports){
var Entity = require('famous/core/Entity');
var Transform = require('famous/core/Transform');
var EventHandler = require('famous/core/EventHandler');
var OptionsManager = require('famous/core/OptionsManager');
function ContextualView(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS || ContextualView.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this._id = Entity.register(this);
}
ContextualView.DEFAULT_OPTIONS = {};
ContextualView.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
ContextualView.prototype.getOptions = function getOptions(key) {
    return this._optionsManager.getOptions(key);
};
ContextualView.prototype.render = function render() {
    return this._id;
};
ContextualView.prototype.commit = function commit(context) {
};
module.exports = ContextualView;
},{"famous/core/Entity":47,"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/core/Transform":57}],160:[function(require,module,exports){
var Transform = require('famous/core/Transform');
var OptionsManager = require('famous/core/OptionsManager');
var Transitionable = require('famous/transitions/Transitionable');
var Utility = require('famous/utilities/Utility');
var SequentialLayout = require('./SequentialLayout');
function Deck(options) {
    SequentialLayout.apply(this, arguments);
    this.state = new Transitionable(0);
    this._isOpen = false;
    this.setOutputFunction(function (input, offset, index) {
        var state = _getState.call(this);
        var positionMatrix = this.options.direction === Utility.Direction.X ? Transform.translate(state * offset, 0, 0.001 * (state - 1) * offset) : Transform.translate(0, state * offset, 0.001 * (state - 1) * offset);
        var output = input.render();
        if (this.options.stackRotation) {
            var amount = this.options.stackRotation * index * (1 - state);
            output = {
                transform: Transform.rotateZ(amount),
                origin: [
                    0.5,
                    0.5
                ],
                target: output
            };
        }
        return {
            transform: positionMatrix,
            size: input.getSize(),
            target: output
        };
    });
}
Deck.prototype = Object.create(SequentialLayout.prototype);
Deck.prototype.constructor = Deck;
Deck.DEFAULT_OPTIONS = OptionsManager.patch(SequentialLayout.DEFAULT_OPTIONS, {
    transition: {
        curve: 'easeOutBounce',
        duration: 500
    },
    stackRotation: 0
});
Deck.prototype.getSize = function getSize() {
    var originalSize = SequentialLayout.prototype.getSize.apply(this, arguments);
    var firstSize = this._items ? this._items.get().getSize() : [
            0,
            0
        ];
    if (!firstSize)
        firstSize = [
            0,
            0
        ];
    var state = _getState.call(this);
    var invState = 1 - state;
    return [
        firstSize[0] * invState + originalSize[0] * state,
        firstSize[1] * invState + originalSize[1] * state
    ];
};
function _getState(returnFinal) {
    if (returnFinal)
        return this._isOpen ? 1 : 0;
    else
        return this.state.get();
}
function _setState(pos, transition, callback) {
    this.state.halt();
    this.state.set(pos, transition, callback);
}
Deck.prototype.isOpen = function isOpen() {
    return this._isOpen;
};
Deck.prototype.open = function open(callback) {
    this._isOpen = true;
    _setState.call(this, 1, this.options.transition, callback);
};
Deck.prototype.close = function close(callback) {
    this._isOpen = false;
    _setState.call(this, 0, this.options.transition, callback);
};
Deck.prototype.toggle = function toggle(callback) {
    if (this._isOpen)
        this.close(callback);
    else
        this.open(callback);
};
module.exports = Deck;
},{"./SequentialLayout":172,"famous/core/OptionsManager":52,"famous/core/Transform":57,"famous/transitions/Transitionable":111,"famous/utilities/Utility":114}],161:[function(require,module,exports){
var RenderNode = require('famous/core/RenderNode');
var Transform = require('famous/core/Transform');
var OptionsManager = require('famous/core/OptionsManager');
var Transitionable = require('famous/transitions/Transitionable');
var EventHandler = require('famous/core/EventHandler');
function DrawerLayout(options) {
    this.options = Object.create(DrawerLayout.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._position = new Transitionable(0);
    this._direction = _getDirectionFromSide(this.options.side);
    this._orientation = _getOrientationFromSide(this.options.side);
    this._isOpen = false;
    this._cachedLength = 0;
    this.drawer = new RenderNode();
    this.content = new RenderNode();
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    this._eventInput.on('update', _handleUpdate.bind(this));
    this._eventInput.on('end', _handleEnd.bind(this));
}
var DIRECTION_X = 0;
var DIRECTION_Y = 1;
DrawerLayout.SIDES = {
    LEFT: 0,
    TOP: 1,
    RIGHT: 2,
    BOTTOM: 3
};
DrawerLayout.DEFAULT_OPTIONS = {
    side: DrawerLayout.SIDES.LEFT,
    drawerLength: 0,
    velocityThreshold: 0,
    positionThreshold: 0,
    transition: true
};
function _getDirectionFromSide(side) {
    var SIDES = DrawerLayout.SIDES;
    return side === SIDES.LEFT || side === SIDES.RIGHT ? DIRECTION_X : DIRECTION_Y;
}
function _getOrientationFromSide(side) {
    var SIDES = DrawerLayout.SIDES;
    return side === SIDES.LEFT || side === SIDES.TOP ? 1 : -1;
}
function _resolveNodeSize(node) {
    var options = this.options;
    var size;
    if (options.drawerLength)
        size = options.drawerLength;
    else {
        var nodeSize = node.getSize();
        size = nodeSize ? nodeSize[this._direction] : options.drawerLength;
    }
    return this._orientation * size;
}
function _handleUpdate(data) {
    var newPosition = this.getPosition() + data.delta;
    var MIN_LENGTH;
    var MAX_LENGTH;
    this._cachedLength = _resolveNodeSize.call(this, this.drawer);
    if (this._orientation === 1) {
        MIN_LENGTH = 0;
        MAX_LENGTH = this._cachedLength;
    } else {
        MIN_LENGTH = this._cachedLength;
        MAX_LENGTH = 0;
    }
    if (newPosition > MAX_LENGTH)
        newPosition = MAX_LENGTH;
    else if (newPosition < MIN_LENGTH)
        newPosition = MIN_LENGTH;
    this.setPosition(newPosition);
}
function _handleEnd(data) {
    var velocity = data.velocity;
    var position = this._orientation * this.getPosition();
    var options = this.options;
    var MAX_LENGTH = this._orientation * this._cachedLength;
    var positionThreshold = options.positionThreshold || MAX_LENGTH / 2;
    var velocityThreshold = options.velocityThreshold;
    if (options.transition instanceof Object)
        options.transition.velocity = data.velocity;
    if (position === 0) {
        this._isOpen = false;
        return;
    }
    if (position === MAX_LENGTH) {
        this._isOpen = true;
        return;
    }
    var shouldToggle = Math.abs(velocity) > velocityThreshold || !this._isOpen && position > positionThreshold || this._isOpen && position < positionThreshold;
    if (shouldToggle)
        this.toggle();
    else
        this.reset();
}
DrawerLayout.prototype.setOptions = function setOptions(options) {
    this._optionsManager.setOptions(options);
    if (options.side !== undefined) {
        this._direction = _getDirectionFromSide(options.side);
        this._orientation = _getOrientationFromSide(options.side);
    }
};
DrawerLayout.prototype.open = function open(transition, callback) {
    if (transition instanceof Function)
        callback = transition;
    if (transition === undefined)
        transition = this.options.transition;
    this._cachedLength = _resolveNodeSize.call(this, this.drawer);
    this.setPosition(this._cachedLength, transition, callback);
    if (!this._isOpen) {
        this._isOpen = true;
        this._eventOutput.emit('open');
    }
};
DrawerLayout.prototype.close = function close(transition, callback) {
    if (transition instanceof Function)
        callback = transition;
    if (transition === undefined)
        transition = this.options.transition;
    this.setPosition(0, transition, callback);
    if (this._isOpen) {
        this._isOpen = false;
        this._eventOutput.emit('close');
    }
};
DrawerLayout.prototype.setPosition = function setPosition(position, transition, callback) {
    if (this._position.isActive())
        this._position.halt();
    this._position.set(position, transition, callback);
};
DrawerLayout.prototype.getPosition = function getPosition() {
    return this._position.get();
};
DrawerLayout.prototype.setProgress = function setProgress(progress, transition, callback) {
    return this._position.set(progress * this._cachedLength, transition, callback);
};
DrawerLayout.prototype.getProgress = function getProgress() {
    return this._position.get() / this._cachedLength;
};
DrawerLayout.prototype.toggle = function toggle(transition) {
    if (this._isOpen)
        this.close(transition);
    else
        this.open(transition);
};
DrawerLayout.prototype.reset = function reset(transition) {
    if (this._isOpen)
        this.open(transition);
    else
        this.close(transition);
};
DrawerLayout.prototype.isOpen = function isOpen(transition) {
    return this._isOpen;
};
DrawerLayout.prototype.render = function render() {
    var position = this.getPosition();
    if (!this._isOpen && (position < 0 && this._orientation === 1) || position > 0 && this._orientation === -1) {
        position = 0;
        this.setPosition(position);
    }
    var contentTransform = this._direction === DIRECTION_X ? Transform.translate(position, 0, 0) : Transform.translate(0, position, 0);
    return [
        {
            transform: Transform.behind,
            target: this.drawer.render()
        },
        {
            transform: contentTransform,
            target: this.content.render()
        }
    ];
};
module.exports = DrawerLayout;
},{"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/core/RenderNode":53,"famous/core/Transform":57,"famous/transitions/Transitionable":111}],162:[function(require,module,exports){
var CachedMap = require('famous/transitions/CachedMap');
var Entity = require('famous/core/Entity');
var EventHandler = require('famous/core/EventHandler');
var Transform = require('famous/core/Transform');
var RenderController = require('./RenderController');
function EdgeSwapper(options) {
    this._currentTarget = null;
    this._size = [
        undefined,
        undefined
    ];
    this._controller = new RenderController(options);
    this._controller.inTransformFrom(CachedMap.create(_transformMap.bind(this, 0.0001)));
    this._controller.outTransformFrom(CachedMap.create(_transformMap.bind(this, -0.0001)));
    this._eventInput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    this._entityId = Entity.register(this);
    if (options)
        this.setOptions(options);
}
function _transformMap(zMax, progress) {
    return Transform.translate(this._size[0] * (1 - progress), 0, zMax * (1 - progress));
}
EdgeSwapper.prototype.show = function show(content) {
    if (this._currentTarget)
        this._eventInput.unpipe(this._currentTarget);
    this._currentTarget = content;
    if (this._currentTarget && this._currentTarget.trigger)
        this._eventInput.pipe(this._currentTarget);
    this._controller.show.apply(this._controller, arguments);
};
EdgeSwapper.prototype.setOptions = function setOptions(options) {
    this._controller.setOptions(options);
};
EdgeSwapper.prototype.render = function render() {
    return this._entityId;
};
EdgeSwapper.prototype.commit = function commit(context) {
    this._size[0] = context.size[0];
    this._size[1] = context.size[1];
    return {
        transform: context.transform,
        opacity: context.opacity,
        origin: context.origin,
        size: context.size,
        target: this._controller.render()
    };
};
module.exports = EdgeSwapper;
},{"./RenderController":168,"famous/core/Entity":47,"famous/core/EventHandler":49,"famous/core/Transform":57,"famous/transitions/CachedMap":109}],163:[function(require,module,exports){
var Entity = require('famous/core/Entity');
var Transform = require('famous/core/Transform');
var OptionsManager = require('famous/core/OptionsManager');
var EventHandler = require('famous/core/EventHandler');
var Transitionable = require('famous/transitions/Transitionable');
function FlexibleLayout(options) {
    this.options = Object.create(FlexibleLayout.DEFAULT_OPTIONS);
    this.optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this.id = Entity.register(this);
    this._ratios = new Transitionable(this.options.ratios);
    this._nodes = [];
    this._cachedDirection = null;
    this._cachedTotalLength = false;
    this._cachedLengths = [];
    this._cachedTransforms = null;
    this._ratiosDirty = false;
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
}
FlexibleLayout.DIRECTION_X = 0;
FlexibleLayout.DIRECTION_Y = 1;
FlexibleLayout.DEFAULT_OPTIONS = {
    direction: FlexibleLayout.DIRECTION_X,
    transition: false,
    ratios: []
};
function _reflow(ratios, length, direction) {
    var currTransform;
    var translation = 0;
    var flexLength = length;
    var ratioSum = 0;
    var ratio;
    var node;
    var i;
    this._cachedLengths = [];
    this._cachedTransforms = [];
    for (i = 0; i < ratios.length; i++) {
        ratio = ratios[i];
        node = this._nodes[i];
        if (typeof ratio !== 'number')
            flexLength -= node.getSize()[direction] || 0;
        else
            ratioSum += ratio;
    }
    for (i = 0; i < ratios.length; i++) {
        node = this._nodes[i];
        ratio = ratios[i];
        length = typeof ratio === 'number' ? flexLength * ratio / ratioSum : node.getSize()[direction];
        currTransform = direction === FlexibleLayout.DIRECTION_X ? Transform.translate(translation, 0, 0) : Transform.translate(0, translation, 0);
        this._cachedTransforms.push(currTransform);
        this._cachedLengths.push(length);
        translation += length;
    }
}
FlexibleLayout.prototype.render = function render() {
    return this.id;
};
FlexibleLayout.prototype.setOptions = function setOptions(options) {
    this.optionsManager.setOptions(options);
};
FlexibleLayout.prototype.sequenceFrom = function sequenceFrom(sequence) {
    this._nodes = sequence;
    if (this._ratios.get().length === 0) {
        var ratios = [];
        for (var i = 0; i < this._nodes.length; i++)
            ratios.push(1);
        this.setRatios(ratios);
    }
};
FlexibleLayout.prototype.setRatios = function setRatios(ratios, transition, callback) {
    if (transition === undefined)
        transition = this.options.transition;
    var currRatios = this._ratios;
    if (currRatios.get().length === 0)
        transition = undefined;
    if (currRatios.isActive())
        currRatios.halt();
    currRatios.set(ratios, transition, callback);
    this._ratiosDirty = true;
};
FlexibleLayout.prototype.commit = function commit(context) {
    var parentSize = context.size;
    var parentTransform = context.transform;
    var parentOrigin = context.origin;
    var parentOpacity = context.opacity;
    var ratios = this._ratios.get();
    var direction = this.options.direction;
    var length = parentSize[direction];
    var size;
    if (length !== this._cachedTotalLength || this._ratiosDirty || this._ratios.isActive() || direction !== this._cachedDirection) {
        _reflow.call(this, ratios, length, direction);
        if (length !== this._cachedTotalLength)
            this._cachedTotalLength = length;
        if (direction !== this._cachedDirection)
            this._cachedDirection = direction;
        if (this._ratiosDirty)
            this._ratiosDirty = false;
    }
    var result = [];
    for (var i = 0; i < ratios.length; i++) {
        size = [
            undefined,
            undefined
        ];
        length = this._cachedLengths[i];
        size[direction] = length;
        result.push({
            transform: this._cachedTransforms[i],
            size: size,
            target: this._nodes[i].render()
        });
    }
    if (parentSize && (parentOrigin[0] !== 0 && parentOrigin[1] !== 0))
        parentTransform = Transform.moveThen([
            -parentSize[0] * parentOrigin[0],
            -parentSize[1] * parentOrigin[1],
            0
        ], parentTransform);
    return {
        transform: parentTransform,
        size: parentSize,
        opacity: parentOpacity,
        target: result
    };
};
module.exports = FlexibleLayout;
},{"famous/core/Entity":47,"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/core/Transform":57,"famous/transitions/Transitionable":111}],164:[function(require,module,exports){
var Transform = require('famous/core/Transform');
var Transitionable = require('famous/transitions/Transitionable');
var RenderNode = require('famous/core/RenderNode');
var OptionsManager = require('famous/core/OptionsManager');
function Flipper(options) {
    this.options = Object.create(Flipper.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this.angle = new Transitionable(0);
    this.frontNode = undefined;
    this.backNode = undefined;
    this.flipped = false;
}
Flipper.DIRECTION_X = 0;
Flipper.DIRECTION_Y = 1;
var SEPERATION_LENGTH = 1;
Flipper.DEFAULT_OPTIONS = {
    transition: true,
    direction: Flipper.DIRECTION_X
};
Flipper.prototype.flip = function flip(transition, callback) {
    var angle = this.flipped ? 0 : Math.PI;
    this.setAngle(angle, transition, callback);
    this.flipped = !this.flipped;
};
Flipper.prototype.setAngle = function setAngle(angle, transition, callback) {
    if (transition === undefined)
        transition = this.options.transition;
    if (this.angle.isActive())
        this.angle.halt();
    this.angle.set(angle, transition, callback);
};
Flipper.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
Flipper.prototype.setFront = function setFront(node) {
    this.frontNode = node;
};
Flipper.prototype.setBack = function setBack(node) {
    this.backNode = node;
};
Flipper.prototype.render = function render() {
    var angle = this.angle.get();
    var frontTransform;
    var backTransform;
    if (this.options.direction === Flipper.DIRECTION_X) {
        frontTransform = Transform.rotateY(angle);
        backTransform = Transform.rotateY(angle + Math.PI);
    } else {
        frontTransform = Transform.rotateX(angle);
        backTransform = Transform.rotateX(angle + Math.PI);
    }
    var result = [];
    if (this.frontNode) {
        result.push({
            transform: frontTransform,
            target: this.frontNode.render()
        });
    }
    if (this.backNode) {
        result.push({
            transform: Transform.moveThen([
                0,
                0,
                SEPERATION_LENGTH
            ], backTransform),
            target: this.backNode.render()
        });
    }
    return result;
};
module.exports = Flipper;
},{"famous/core/OptionsManager":52,"famous/core/RenderNode":53,"famous/core/Transform":57,"famous/transitions/Transitionable":111}],165:[function(require,module,exports){
module.exports=require(115)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/views/GridLayout.js":115,"famous/core/Entity":47,"famous/core/EventHandler":49,"famous/core/Modifier":51,"famous/core/OptionsManager":52,"famous/core/RenderNode":53,"famous/core/Transform":57,"famous/core/ViewSequence":59,"famous/transitions/Transitionable":111,"famous/transitions/TransitionableTransform":112}],166:[function(require,module,exports){
var Entity = require('famous/core/Entity');
var RenderNode = require('famous/core/RenderNode');
var Transform = require('famous/core/Transform');
var OptionsManager = require('famous/core/OptionsManager');
function HeaderFooterLayout(options) {
    this.options = Object.create(HeaderFooterLayout.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._entityId = Entity.register(this);
    this.header = new RenderNode();
    this.footer = new RenderNode();
    this.content = new RenderNode();
}
HeaderFooterLayout.DIRECTION_X = 0;
HeaderFooterLayout.DIRECTION_Y = 1;
HeaderFooterLayout.DEFAULT_OPTIONS = {
    direction: HeaderFooterLayout.DIRECTION_Y,
    headerSize: undefined,
    footerSize: undefined,
    defaultHeaderSize: 0,
    defaultFooterSize: 0
};
HeaderFooterLayout.prototype.render = function render() {
    return this._entityId;
};
HeaderFooterLayout.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
function _resolveNodeSize(node, defaultSize) {
    var nodeSize = node.getSize();
    return nodeSize ? nodeSize[this.options.direction] : defaultSize;
}
function _outputTransform(offset) {
    if (this.options.direction === HeaderFooterLayout.DIRECTION_X)
        return Transform.translate(offset, 0, 0);
    else
        return Transform.translate(0, offset, 0);
}
function _finalSize(directionSize, size) {
    if (this.options.direction === HeaderFooterLayout.DIRECTION_X)
        return [
            directionSize,
            size[1]
        ];
    else
        return [
            size[0],
            directionSize
        ];
}
HeaderFooterLayout.prototype.commit = function commit(context) {
    var transform = context.transform;
    var origin = context.origin;
    var size = context.size;
    var opacity = context.opacity;
    var headerSize = this.options.headerSize !== undefined ? this.options.headerSize : _resolveNodeSize.call(this, this.header, this.options.defaultHeaderSize);
    var footerSize = this.options.footerSize !== undefined ? this.options.footerSize : _resolveNodeSize.call(this, this.footer, this.options.defaultFooterSize);
    var contentSize = size[this.options.direction] - headerSize - footerSize;
    if (size)
        transform = Transform.moveThen([
            -size[0] * origin[0],
            -size[1] * origin[1],
            0
        ], transform);
    var result = [
            {
                size: _finalSize.call(this, headerSize, size),
                target: this.header.render()
            },
            {
                transform: _outputTransform.call(this, headerSize),
                size: _finalSize.call(this, contentSize, size),
                target: this.content.render()
            },
            {
                transform: _outputTransform.call(this, headerSize + contentSize),
                size: _finalSize.call(this, footerSize, size),
                target: this.footer.render()
            }
        ];
    return {
        transform: transform,
        opacity: opacity,
        size: size,
        target: result
    };
};
module.exports = HeaderFooterLayout;
},{"famous/core/Entity":47,"famous/core/OptionsManager":52,"famous/core/RenderNode":53,"famous/core/Transform":57}],167:[function(require,module,exports){
var Transform = require('famous/core/Transform');
var Modifier = require('famous/core/Modifier');
var RenderNode = require('famous/core/RenderNode');
var Utility = require('famous/utilities/Utility');
var OptionsManager = require('famous/core/OptionsManager');
var Transitionable = require('famous/transitions/Transitionable');
var TransitionableTransform = require('famous/transitions/TransitionableTransform');
function Lightbox(options) {
    this.options = Object.create(Lightbox.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this._showing = false;
    this.nodes = [];
    this.transforms = [];
    this.states = [];
}
Lightbox.DEFAULT_OPTIONS = {
    inTransform: Transform.scale(0.001, 0.001, 0.001),
    inOpacity: 0,
    inOrigin: [
        0.5,
        0.5
    ],
    outTransform: Transform.scale(0.001, 0.001, 0.001),
    outOpacity: 0,
    outOrigin: [
        0.5,
        0.5
    ],
    showTransform: Transform.identity,
    showOpacity: 1,
    showOrigin: [
        0.5,
        0.5
    ],
    inTransition: true,
    outTransition: true,
    overlap: false
};
Lightbox.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
Lightbox.prototype.show = function show(renderable, transition, callback) {
    if (!renderable) {
        return this.hide(callback);
    }
    if (transition instanceof Function) {
        callback = transition;
        transition = undefined;
    }
    if (this._showing) {
        if (this.options.overlap)
            this.hide();
        else {
            return this.hide(this.show.bind(this, renderable, transition, callback));
        }
    }
    this._showing = true;
    var stateItem = {
            transform: new TransitionableTransform(this.options.inTransform),
            origin: new Transitionable(this.options.inOrigin),
            opacity: new Transitionable(this.options.inOpacity)
        };
    var transform = new Modifier({
            transform: stateItem.transform,
            opacity: stateItem.opacity,
            origin: stateItem.origin
        });
    var node = new RenderNode();
    node.add(transform).add(renderable);
    this.nodes.push(node);
    this.states.push(stateItem);
    this.transforms.push(transform);
    var _cb = callback ? Utility.after(3, callback) : undefined;
    if (!transition)
        transition = this.options.inTransition;
    stateItem.transform.set(this.options.showTransform, transition, _cb);
    stateItem.opacity.set(this.options.showOpacity, transition, _cb);
    stateItem.origin.set(this.options.showOrigin, transition, _cb);
};
Lightbox.prototype.hide = function hide(transition, callback) {
    if (!this._showing)
        return;
    this._showing = false;
    if (transition instanceof Function) {
        callback = transition;
        transition = undefined;
    }
    var node = this.nodes[this.nodes.length - 1];
    var transform = this.transforms[this.transforms.length - 1];
    var stateItem = this.states[this.states.length - 1];
    var _cb = Utility.after(3, function () {
            this.nodes.splice(this.nodes.indexOf(node), 1);
            this.states.splice(this.states.indexOf(stateItem), 1);
            this.transforms.splice(this.transforms.indexOf(transform), 1);
            if (callback)
                callback.call(this);
        }.bind(this));
    if (!transition)
        transition = this.options.outTransition;
    stateItem.transform.set(this.options.outTransform, transition, _cb);
    stateItem.opacity.set(this.options.outOpacity, transition, _cb);
    stateItem.origin.set(this.options.outOrigin, transition, _cb);
};
Lightbox.prototype.render = function render() {
    var result = [];
    for (var i = 0; i < this.nodes.length; i++) {
        result.push(this.nodes[i].render());
    }
    return result;
};
module.exports = Lightbox;
},{"famous/core/Modifier":51,"famous/core/OptionsManager":52,"famous/core/RenderNode":53,"famous/core/Transform":57,"famous/transitions/Transitionable":111,"famous/transitions/TransitionableTransform":112,"famous/utilities/Utility":114}],168:[function(require,module,exports){
module.exports=require(116)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/views/RenderController.js":116,"famous/core/Modifier":51,"famous/core/RenderNode":53,"famous/core/Transform":57,"famous/core/View":58,"famous/transitions/Transitionable":111}],169:[function(require,module,exports){
var ContainerSurface = require('famous/surfaces/ContainerSurface');
var EventHandler = require('famous/core/EventHandler');
var Scrollview = require('./Scrollview');
var Utility = require('famous/utilities/Utility');
var OptionsManager = require('famous/core/OptionsManager');
function ScrollContainer(options) {
    this.options = Object.create(ScrollContainer.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this.container = new ContainerSurface(this.options.container);
    this.scrollview = new Scrollview(this.options.scrollview);
    this.container.add(this.scrollview);
    this._eventInput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    this._eventInput.pipe(this.scrollview);
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
    this.container.pipe(this._eventOutput);
    this.scrollview.pipe(this._eventOutput);
}
ScrollContainer.DEFAULT_OPTIONS = {
    container: { properties: { overflow: 'hidden' } },
    scrollview: {}
};
ScrollContainer.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};
ScrollContainer.prototype.sequenceFrom = function sequenceFrom() {
    return this.scrollview.sequenceFrom.apply(this.scrollview, arguments);
};
ScrollContainer.prototype.getSize = function getSize() {
    return this.container.getSize.apply(this.container, arguments);
};
ScrollContainer.prototype.render = function render() {
    return this.container.render();
};
module.exports = ScrollContainer;
},{"./Scrollview":171,"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/surfaces/ContainerSurface":108,"famous/utilities/Utility":114}],170:[function(require,module,exports){
module.exports=require(117)
},{"/Users/alonsoholmes/developer/famous/famous/node_modules/famous/views/Scroller.js":117,"famous/core/Entity":47,"famous/core/EventHandler":49,"famous/core/Group":50,"famous/core/OptionsManager":52,"famous/core/Transform":57,"famous/core/ViewSequence":59,"famous/utilities/Utility":114}],171:[function(require,module,exports){
var PhysicsEngine = require('famous/physics/PhysicsEngine');
var Particle = require('famous/physics/bodies/Particle');
var Drag = require('famous/physics/forces/Drag');
var Spring = require('famous/physics/forces/Spring');
var EventHandler = require('famous/core/EventHandler');
var OptionsManager = require('famous/core/OptionsManager');
var ViewSequence = require('famous/core/ViewSequence');
var Scroller = require('famous/views/Scroller');
var Utility = require('famous/utilities/Utility');
var GenericSync = require('famous/inputs/GenericSync');
var ScrollSync = require('famous/inputs/ScrollSync');
var TouchSync = require('famous/inputs/TouchSync');
GenericSync.register({
    scroll: ScrollSync,
    touch: TouchSync
});
var TOLERANCE = 0.5;
var SpringStates = {
        NONE: 0,
        EDGE: 1,
        PAGE: 2
    };
var EdgeStates = {
        TOP: -1,
        NONE: 0,
        BOTTOM: 1
    };
function Scrollview(options) {
    this.options = Object.create(Scrollview.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    this._scroller = new Scroller(this.options);
    this.sync = new GenericSync([
        'scroll',
        'touch'
    ], {
        direction: this.options.direction,
        scale: this.options.syncScale,
        rails: this.options.rails,
        preventDefault: this.options.preventDefault
    });
    this._physicsEngine = new PhysicsEngine();
    this._particle = new Particle();
    this._physicsEngine.addBody(this._particle);
    this.spring = new Spring({
        anchor: [
            0,
            0,
            0
        ],
        period: this.options.edgePeriod,
        dampingRatio: this.options.edgeDamp
    });
    this.drag = new Drag({
        forceFunction: Drag.FORCE_FUNCTIONS.QUADRATIC,
        strength: this.options.drag
    });
    this.friction = new Drag({
        forceFunction: Drag.FORCE_FUNCTIONS.LINEAR,
        strength: this.options.friction
    });
    this._node = null;
    this._touchCount = 0;
    this._springState = SpringStates.NONE;
    this._onEdge = EdgeStates.NONE;
    this._pageSpringPosition = 0;
    this._edgeSpringPosition = 0;
    this._touchVelocity = 0;
    this._earlyEnd = false;
    this._needsPaginationCheck = false;
    this._displacement = 0;
    this._totalShift = 0;
    this._cachedIndex = 0;
    this._scroller.positionFrom(this.getPosition.bind(this));
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    this._eventInput.pipe(this.sync);
    this.sync.pipe(this._eventInput);
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
    _bindEvents.call(this);
    if (options)
        this.setOptions(options);
}
Scrollview.DEFAULT_OPTIONS = {
    direction: Utility.Direction.Y,
    rails: true,
    friction: 0.005,
    drag: 0.0001,
    edgeGrip: 0.2,
    edgePeriod: 300,
    edgeDamp: 1,
    margin: 1000,
    paginated: false,
    pagePeriod: 500,
    pageDamp: 0.8,
    pageStopSpeed: 10,
    pageSwitchSpeed: 0.5,
    speedLimit: 5,
    groupScroll: false,
    syncScale: 1
};
function _handleStart(event) {
    this._touchCount = event.count;
    if (event.count === undefined)
        this._touchCount = 1;
    _detachAgents.call(this);
    this.setVelocity(0);
    this._touchVelocity = 0;
    this._earlyEnd = false;
}
function _handleMove(event) {
    var velocity = -event.velocity;
    var delta = -event.delta;
    if (this._onEdge !== EdgeStates.NONE && event.slip) {
        if (velocity < 0 && this._onEdge === EdgeStates.TOP || velocity > 0 && this._onEdge === EdgeStates.BOTTOM) {
            if (!this._earlyEnd) {
                _handleEnd.call(this, event);
                this._earlyEnd = true;
            }
        } else if (this._earlyEnd && Math.abs(velocity) > Math.abs(this.getVelocity())) {
            _handleStart.call(this, event);
        }
    }
    if (this._earlyEnd)
        return;
    this._touchVelocity = velocity;
    if (event.slip) {
        var speedLimit = this.options.speedLimit;
        if (velocity < -speedLimit)
            velocity = -speedLimit;
        else if (velocity > speedLimit)
            velocity = speedLimit;
        this.setVelocity(velocity);
        var deltaLimit = speedLimit * 16;
        if (delta > deltaLimit)
            delta = deltaLimit;
        else if (delta < -deltaLimit)
            delta = -deltaLimit;
    }
    this.setPosition(this.getPosition() + delta);
    this._displacement += delta;
    if (this._springState === SpringStates.NONE)
        _normalizeState.call(this);
}
function _handleEnd(event) {
    this._touchCount = event.count || 0;
    if (!this._touchCount) {
        _detachAgents.call(this);
        if (this._onEdge !== EdgeStates.NONE)
            _setSpring.call(this, this._edgeSpringPosition, SpringStates.EDGE);
        _attachAgents.call(this);
        var velocity = -event.velocity;
        var speedLimit = this.options.speedLimit;
        if (event.slip)
            speedLimit *= this.options.edgeGrip;
        if (velocity < -speedLimit)
            velocity = -speedLimit;
        else if (velocity > speedLimit)
            velocity = speedLimit;
        this.setVelocity(velocity);
        this._touchVelocity = 0;
        this._needsPaginationCheck = true;
    }
}
function _bindEvents() {
    this._eventInput.bindThis(this);
    this._eventInput.on('start', _handleStart);
    this._eventInput.on('update', _handleMove);
    this._eventInput.on('end', _handleEnd);
    this._eventInput.on('resize', function () {
        this._node._.calculateSize();
    }.bind(this));
    this._scroller.on('onEdge', function (data) {
        this._edgeSpringPosition = data.position;
        _handleEdge.call(this, this._scroller.onEdge());
        this._eventOutput.emit('onEdge');
    }.bind(this));
    this._scroller.on('offEdge', function () {
        this.sync.setOptions({ scale: this.options.syncScale });
        this._onEdge = this._scroller.onEdge();
        this._eventOutput.emit('offEdge');
    }.bind(this));
    this._particle.on('update', function (particle) {
        if (this._springState === SpringStates.NONE)
            _normalizeState.call(this);
        this._displacement = particle.position.x - this._totalShift;
    }.bind(this));
    this._particle.on('end', function () {
        if (!this.options.paginated || this.options.paginated && this._springState !== SpringStates.NONE)
            this._eventOutput.emit('settle');
    }.bind(this));
}
function _attachAgents() {
    if (this._springState)
        this._physicsEngine.attach([this.spring], this._particle);
    else
        this._physicsEngine.attach([
            this.drag,
            this.friction
        ], this._particle);
}
function _detachAgents() {
    this._springState = SpringStates.NONE;
    this._physicsEngine.detachAll();
}
function _nodeSizeForDirection(node) {
    var direction = this.options.direction;
    var nodeSize = node.getSize();
    return !nodeSize ? this._scroller.getSize()[direction] : nodeSize[direction];
}
function _handleEdge(edge) {
    this.sync.setOptions({ scale: this.options.edgeGrip });
    this._onEdge = edge;
    if (!this._touchCount && this._springState !== SpringStates.EDGE) {
        _setSpring.call(this, this._edgeSpringPosition, SpringStates.EDGE);
    }
    if (this._springState && Math.abs(this.getVelocity()) < 0.001) {
        _detachAgents.call(this);
        _attachAgents.call(this);
    }
}
function _handlePagination() {
    if (this._touchCount)
        return;
    if (this._springState === SpringStates.EDGE)
        return;
    var velocity = this.getVelocity();
    if (Math.abs(velocity) >= this.options.pageStopSpeed)
        return;
    var position = this.getPosition();
    var velocitySwitch = Math.abs(velocity) > this.options.pageSwitchSpeed;
    var nodeSize = _nodeSizeForDirection.call(this, this._node);
    var positionNext = position > 0.5 * nodeSize;
    var positionPrev = position < 0.5 * nodeSize;
    var velocityNext = velocity > 0;
    var velocityPrev = velocity < 0;
    this._needsPaginationCheck = false;
    if (positionNext && !velocitySwitch || velocitySwitch && velocityNext) {
        this.goToNextPage();
    } else if (velocitySwitch && velocityPrev) {
        this.goToPreviousPage();
    } else
        _setSpring.call(this, 0, SpringStates.PAGE);
}
function _setSpring(position, springState) {
    var springOptions;
    if (springState === SpringStates.EDGE) {
        this._edgeSpringPosition = position;
        springOptions = {
            anchor: [
                this._edgeSpringPosition,
                0,
                0
            ],
            period: this.options.edgePeriod,
            dampingRatio: this.options.edgeDamp
        };
    } else if (springState === SpringStates.PAGE) {
        this._pageSpringPosition = position;
        springOptions = {
            anchor: [
                this._pageSpringPosition,
                0,
                0
            ],
            period: this.options.pagePeriod,
            dampingRatio: this.options.pageDamp
        };
    }
    this.spring.setOptions(springOptions);
    if (springState && !this._springState) {
        _detachAgents.call(this);
        this._springState = springState;
        _attachAgents.call(this);
    }
    this._springState = springState;
}
function _normalizeState() {
    var offset = 0;
    var position = this.getPosition();
    position += (position < 0 ? -0.5 : 0.5) >> 0;
    var nodeSize = _nodeSizeForDirection.call(this, this._node);
    var nextNode = this._node.getNext();
    while (offset + position >= nodeSize && nextNode) {
        offset -= nodeSize;
        this._scroller.sequenceFrom(nextNode);
        this._node = nextNode;
        nextNode = this._node.getNext();
        nodeSize = _nodeSizeForDirection.call(this, this._node);
    }
    var previousNode = this._node.getPrevious();
    var previousNodeSize;
    while (offset + position <= 0 && previousNode) {
        previousNodeSize = _nodeSizeForDirection.call(this, previousNode);
        this._scroller.sequenceFrom(previousNode);
        this._node = previousNode;
        offset += previousNodeSize;
        previousNode = this._node.getPrevious();
    }
    if (offset)
        _shiftOrigin.call(this, offset);
    if (this._node) {
        if (this._node.index !== this._cachedIndex) {
            if (this.getPosition() < 0.5 * nodeSize) {
                this._cachedIndex = this._node.index;
                this._eventOutput.emit('pageChange', {
                    direction: -1,
                    index: this._cachedIndex
                });
            }
        } else {
            if (this.getPosition() > 0.5 * nodeSize) {
                this._cachedIndex = this._node.index + 1;
                this._eventOutput.emit('pageChange', {
                    direction: 1,
                    index: this._cachedIndex
                });
            }
        }
    }
}
function _shiftOrigin(amount) {
    this._edgeSpringPosition += amount;
    this._pageSpringPosition += amount;
    this.setPosition(this.getPosition() + amount);
    this._totalShift += amount;
    if (this._springState === SpringStates.EDGE) {
        this.spring.setOptions({
            anchor: [
                this._edgeSpringPosition,
                0,
                0
            ]
        });
    } else if (this._springState === SpringStates.PAGE) {
        this.spring.setOptions({
            anchor: [
                this._pageSpringPosition,
                0,
                0
            ]
        });
    }
}
Scrollview.prototype.getCurrentIndex = function getCurrentIndex() {
    return this._node.index;
};
Scrollview.prototype.goToPreviousPage = function goToPreviousPage() {
    if (!this._node || this._onEdge === EdgeStates.TOP)
        return null;
    if (this.getPosition() > 1 && this._springState === SpringStates.NONE) {
        _setSpring.call(this, 0, SpringStates.PAGE);
        return this._node;
    }
    var previousNode = this._node.getPrevious();
    if (previousNode) {
        var previousNodeSize = _nodeSizeForDirection.call(this, previousNode);
        this._scroller.sequenceFrom(previousNode);
        this._node = previousNode;
        _shiftOrigin.call(this, previousNodeSize);
        _setSpring.call(this, 0, SpringStates.PAGE);
    }
    return previousNode;
};
Scrollview.prototype.goToNextPage = function goToNextPage() {
    if (!this._node || this._onEdge === EdgeStates.BOTTOM)
        return null;
    var nextNode = this._node.getNext();
    if (nextNode) {
        var currentNodeSize = _nodeSizeForDirection.call(this, this._node);
        this._scroller.sequenceFrom(nextNode);
        this._node = nextNode;
        _shiftOrigin.call(this, -currentNodeSize);
        _setSpring.call(this, 0, SpringStates.PAGE);
    }
    return nextNode;
};
Scrollview.prototype.goToPage = function goToPage(index) {
    var currentIndex = this.getCurrentIndex();
    var i;
    if (currentIndex > index) {
        for (i = 0; i < currentIndex - index; i++)
            this.goToPreviousPage();
    }
    if (currentIndex < index) {
        for (i = 0; i < index - currentIndex; i++)
            this.goToNextPage();
    }
};
Scrollview.prototype.outputFrom = function outputFrom() {
    return this._scroller.outputFrom.apply(this._scroller, arguments);
};
Scrollview.prototype.getPosition = function getPosition() {
    return this._particle.getPosition1D();
};
Scrollview.prototype.getAbsolutePosition = function getAbsolutePosition() {
    return this._scroller.getCumulativeSize(this.getCurrentIndex())[this.options.direction] + this.getPosition();
};
Scrollview.prototype.getOffset = Scrollview.prototype.getPosition;
Scrollview.prototype.setPosition = function setPosition(x) {
    this._particle.setPosition1D(x);
};
Scrollview.prototype.setOffset = Scrollview.prototype.setPosition;
Scrollview.prototype.getVelocity = function getVelocity() {
    return this._touchCount ? this._touchVelocity : this._particle.getVelocity1D();
};
Scrollview.prototype.setVelocity = function setVelocity(v) {
    this._particle.setVelocity1D(v);
};
Scrollview.prototype.setOptions = function setOptions(options) {
    if (options.direction !== undefined) {
        if (options.direction === 'x')
            options.direction = Utility.Direction.X;
        else if (options.direction === 'y')
            options.direction = Utility.Direction.Y;
    }
    if (options.groupScroll !== this.options.groupScroll) {
        if (options.groupScroll)
            this.subscribe(this._scroller);
        else
            this.unsubscribe(this._scroller);
    }
    this._optionsManager.setOptions(options);
    this._scroller.setOptions(options);
    if (options.drag !== undefined)
        this.drag.setOptions({ strength: this.options.drag });
    if (options.friction !== undefined)
        this.friction.setOptions({ strength: this.options.friction });
    if (options.edgePeriod !== undefined || options.edgeDamp !== undefined) {
        this.spring.setOptions({
            period: this.options.edgePeriod,
            dampingRatio: this.options.edgeDamp
        });
    }
    if (options.rails || options.direction !== undefined || options.syncScale !== undefined || options.preventDefault) {
        this.sync.setOptions({
            rails: this.options.rails,
            direction: this.options.direction === Utility.Direction.X ? GenericSync.DIRECTION_X : GenericSync.DIRECTION_Y,
            scale: this.options.syncScale,
            preventDefault: this.options.preventDefault
        });
    }
};
Scrollview.prototype.sequenceFrom = function sequenceFrom(node) {
    if (node instanceof Array)
        node = new ViewSequence({
            array: node,
            trackSize: true
        });
    this._node = node;
    return this._scroller.sequenceFrom(node);
};
Scrollview.prototype.getSize = function getSize() {
    return this._scroller.getSize.apply(this._scroller, arguments);
};
Scrollview.prototype.render = function render() {
    if (this.options.paginated && this._needsPaginationCheck)
        _handlePagination.call(this);
    return this._scroller.render();
};
module.exports = Scrollview;
},{"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/core/ViewSequence":59,"famous/inputs/GenericSync":60,"famous/inputs/ScrollSync":62,"famous/inputs/TouchSync":63,"famous/physics/PhysicsEngine":98,"famous/physics/bodies/Particle":99,"famous/physics/forces/Drag":103,"famous/physics/forces/Spring":105,"famous/utilities/Utility":114,"famous/views/Scroller":117}],172:[function(require,module,exports){
var OptionsManager = require('famous/core/OptionsManager');
var Transform = require('famous/core/Transform');
var ViewSequence = require('famous/core/ViewSequence');
var Utility = require('famous/utilities/Utility');
function SequentialLayout(options) {
    this._items = null;
    this._size = null;
    this._outputFunction = SequentialLayout.DEFAULT_OUTPUT_FUNCTION;
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    this.optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
}
SequentialLayout.DEFAULT_OPTIONS = { direction: Utility.Direction.Y };
SequentialLayout.DEFAULT_OUTPUT_FUNCTION = function DEFAULT_OUTPUT_FUNCTION(input, offset, index) {
    var transform = this.options.direction === Utility.Direction.X ? Transform.translate(offset, 0) : Transform.translate(0, offset);
    return {
        transform: transform,
        target: input.render()
    };
};
SequentialLayout.prototype.getSize = function getSize() {
    if (!this._size)
        this.render();
    return this._size;
};
SequentialLayout.prototype.sequenceFrom = function sequenceFrom(items) {
    if (items instanceof Array)
        items = new ViewSequence(items);
    this._items = items;
    return this;
};
SequentialLayout.prototype.setOptions = function setOptions(options) {
    this.optionsManager.setOptions.apply(this.optionsManager, arguments);
    return this;
};
SequentialLayout.prototype.setOutputFunction = function setOutputFunction(outputFunction) {
    this._outputFunction = outputFunction;
    return this;
};
SequentialLayout.prototype.render = function render() {
    var length = 0;
    var secondaryDirection = this.options.direction ^ 1;
    var currentNode = this._items;
    var item = null;
    var itemSize = [];
    var output = {};
    var result = [];
    var i = 0;
    this._size = [
        0,
        0
    ];
    while (currentNode) {
        item = currentNode.get();
        if (!item)
            break;
        if (item.getSize)
            itemSize = item.getSize();
        output = this._outputFunction.call(this, item, length, i++);
        result.push(output);
        if (itemSize) {
            if (itemSize[this.options.direction])
                length += itemSize[this.options.direction];
            if (itemSize[secondaryDirection] > this._size[secondaryDirection])
                this._size[secondaryDirection] = itemSize[secondaryDirection];
        }
        currentNode = currentNode.getNext();
    }
    this._size[this.options.direction] = length;
    return result;
};
module.exports = SequentialLayout;
},{"famous/core/OptionsManager":52,"famous/core/Transform":57,"famous/core/ViewSequence":59,"famous/utilities/Utility":114}],173:[function(require,module,exports){
var Scene = require('famous/core/Scene');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');
function NavigationBar(options) {
    View.apply(this, arguments);
    this.title = new Surface({
        classes: this.options.classes,
        content: this.options.content
    });
    this.back = new Surface({
        size: [
            this.options.size[1],
            this.options.size[1]
        ],
        classes: this.options.classes,
        content: this.options.backContent
    });
    this.back.on('click', function () {
        this._eventOutput.emit('back', {});
    }.bind(this));
    this.more = new Surface({
        size: [
            this.options.size[1],
            this.options.size[1]
        ],
        classes: this.options.classes,
        content: this.options.moreContent
    });
    this.more.on('click', function () {
        this._eventOutput.emit('more', {});
    }.bind(this));
    this.layout = new Scene({
        id: 'master',
        size: this.options.size,
        target: [
            {
                transform: Transform.inFront,
                origin: [
                    0,
                    0.5
                ],
                target: this.back
            },
            {
                origin: [
                    0.5,
                    0.5
                ],
                target: this.title
            },
            {
                transform: Transform.inFront,
                origin: [
                    1,
                    0.5
                ],
                target: this.more
            }
        ]
    });
    this._add(this.layout);
    this._optionsManager.on('change', function (event) {
        var key = event.id;
        var data = event.value;
        if (key === 'size') {
            this.layout.id.master.setSize(data);
            this.title.setSize(data);
            this.back.setSize([
                data[1],
                data[1]
            ]);
            this.more.setSize([
                data[1],
                data[1]
            ]);
        } else if (key === 'backClasses') {
            this.back.setOptions({ classes: this.options.classes.concat(this.options.backClasses) });
        } else if (key === 'backContent') {
            this.back.setContent(this.options.backContent);
        } else if (key === 'classes') {
            this.title.setOptions({ classes: this.options.classes });
            this.back.setOptions({ classes: this.options.classes.concat(this.options.backClasses) });
            this.more.setOptions({ classes: this.options.classes.concat(this.options.moreClasses) });
        } else if (key === 'content') {
            this.setContent(this.options.content);
        } else if (key === 'moreClasses') {
            this.more.setOptions({ classes: this.options.classes.concat(this.options.moreClasses) });
        } else if (key === 'moreContent') {
            this.more.setContent(this.options.content);
        }
    }.bind(this));
}
NavigationBar.prototype = Object.create(View.prototype);
NavigationBar.prototype.constructor = NavigationBar;
NavigationBar.DEFAULT_OPTIONS = {
    size: [
        undefined,
        50
    ],
    backClasses: ['back'],
    backContent: '&#x25c0;',
    classes: ['navigation'],
    content: '',
    moreClasses: ['more'],
    moreContent: '&#x271a;'
};
NavigationBar.prototype.setContent = function setContent(content) {
    return this.title.setContent(content);
};
module.exports = NavigationBar;
},{"famous/core/Scene":54,"famous/core/Surface":56,"famous/core/Transform":57,"famous/core/View":58}],174:[function(require,module,exports){
var Surface = require('famous/core/Surface');
var CanvasSurface = require('famous/surfaces/CanvasSurface');
var Transform = require('famous/core/Transform');
var EventHandler = require('famous/core/EventHandler');
var Utilities = require('famous/math/Utilities');
var OptionsManager = require('famous/core/OptionsManager');
var MouseSync = require('famous/inputs/MouseSync');
var TouchSync = require('famous/inputs/TouchSync');
var GenericSync = require('famous/inputs/GenericSync');
GenericSync.register({
    mouse: MouseSync,
    touch: TouchSync
});
function Slider(options) {
    this.options = Object.create(Slider.DEFAULT_OPTIONS);
    this.optionsManager = new OptionsManager(this.options);
    if (options)
        this.setOptions(options);
    this.indicator = new CanvasSurface({
        size: this.options.indicatorSize,
        classes: ['slider-back']
    });
    this.label = new Surface({
        size: this.options.labelSize,
        content: this.options.label,
        properties: { pointerEvents: 'none' },
        classes: ['slider-label']
    });
    this.eventOutput = new EventHandler();
    this.eventInput = new EventHandler();
    EventHandler.setInputHandler(this, this.eventInput);
    EventHandler.setOutputHandler(this, this.eventOutput);
    var scale = (this.options.range[1] - this.options.range[0]) / this.options.indicatorSize[0];
    this.sync = new GenericSync([
        'mouse',
        'touch'
    ], {
        scale: scale,
        direction: GenericSync.DIRECTION_X
    });
    this.indicator.pipe(this.sync);
    this.sync.pipe(this);
    this.eventInput.on('update', function (data) {
        this.set(data.position);
    }.bind(this));
    this._drawPos = 0;
    _updateLabel.call(this);
}
Slider.DEFAULT_OPTIONS = {
    size: [
        200,
        60
    ],
    indicatorSize: [
        200,
        30
    ],
    labelSize: [
        200,
        30
    ],
    range: [
        0,
        1
    ],
    precision: 2,
    value: 0,
    label: '',
    fillColor: 'rgba(170, 170, 170, 1)'
};
function _updateLabel() {
    this.label.setContent(this.options.label + '<span style="float: right">' + this.get().toFixed(this.options.precision) + '</span>');
}
Slider.prototype.setOptions = function setOptions(options) {
    return this.optionsManager.setOptions(options);
};
Slider.prototype.get = function get() {
    return this.options.value;
};
Slider.prototype.set = function set(value) {
    if (value === this.options.value)
        return;
    this.options.value = Utilities.clamp(value, this.options.range);
    _updateLabel.call(this);
    this.eventOutput.emit('change', { value: value });
};
Slider.prototype.getSize = function getSize() {
    return this.options.size;
};
Slider.prototype.render = function render() {
    var range = this.options.range;
    var fillSize = Math.floor((this.get() - range[0]) / (range[1] - range[0]) * this.options.indicatorSize[0]);
    if (fillSize < this._drawPos) {
        this.indicator.getContext('2d').clearRect(fillSize, 0, this._drawPos - fillSize + 1, this.options.indicatorSize[1]);
    } else if (fillSize > this._drawPos) {
        var ctx = this.indicator.getContext('2d');
        ctx.fillStyle = this.options.fillColor;
        ctx.fillRect(this._drawPos - 1, 0, fillSize - this._drawPos + 1, this.options.indicatorSize[1]);
    }
    this._drawPos = fillSize;
    return {
        size: this.options.size,
        target: [
            {
                origin: [
                    0,
                    0
                ],
                target: this.indicator.render()
            },
            {
                transform: Transform.translate(0, 0, 1),
                origin: [
                    0,
                    0
                ],
                target: this.label.render()
            }
        ]
    };
};
module.exports = Slider;
},{"famous/core/EventHandler":49,"famous/core/OptionsManager":52,"famous/core/Surface":56,"famous/core/Transform":57,"famous/inputs/GenericSync":60,"famous/inputs/MouseSync":61,"famous/inputs/TouchSync":63,"famous/math/Utilities":67,"famous/surfaces/CanvasSurface":107}],175:[function(require,module,exports){
var Utility = require('famous/utilities/Utility');
var View = require('famous/core/View');
var GridLayout = require('famous/views/GridLayout');
var ToggleButton = require('./ToggleButton');
function TabBar(options) {
    View.apply(this, arguments);
    this.layout = new GridLayout();
    this.buttons = [];
    this._buttonIds = {};
    this._buttonCallbacks = {};
    this.layout.sequenceFrom(this.buttons);
    this._add(this.layout);
    this._optionsManager.on('change', _updateOptions.bind(this));
}
TabBar.prototype = Object.create(View.prototype);
TabBar.prototype.constructor = TabBar;
TabBar.DEFAULT_OPTIONS = {
    sections: [],
    widget: ToggleButton,
    size: [
        undefined,
        50
    ],
    direction: Utility.Direction.X,
    buttons: { toggleMode: ToggleButton.ON }
};
function _updateOptions(data) {
    var id = data.id;
    var value = data.value;
    if (id === 'direction') {
        this.layout.setOptions({ dimensions: _resolveGridDimensions.call(this.buttons.length, this.options.direction) });
    } else if (id === 'buttons') {
        for (var i in this.buttons) {
            this.buttons[i].setOptions(value);
        }
    } else if (id === 'sections') {
        for (var sectionId in this.options.sections) {
            this.defineSection(sectionId, this.options.sections[sectionId]);
        }
    }
}
function _resolveGridDimensions(count, direction) {
    if (direction === Utility.Direction.X)
        return [
            count,
            1
        ];
    else
        return [
            1,
            count
        ];
}
TabBar.prototype.defineSection = function defineSection(id, content) {
    var button;
    var i = this._buttonIds[id];
    if (i === undefined) {
        i = this.buttons.length;
        this._buttonIds[id] = i;
        var widget = this.options.widget;
        button = new widget();
        this.buttons[i] = button;
        this.layout.setOptions({ dimensions: _resolveGridDimensions(this.buttons.length, this.options.direction) });
    } else {
        button = this.buttons[i];
        button.unbind('select', this._buttonCallbacks[id]);
    }
    if (this.options.buttons)
        button.setOptions(this.options.buttons);
    button.setOptions(content);
    this._buttonCallbacks[id] = this.select.bind(this, id);
    button.on('select', this._buttonCallbacks[id]);
};
TabBar.prototype.select = function select(id) {
    var btn = this._buttonIds[id];
    if (this.buttons[btn] && this.buttons[btn].isSelected()) {
        this._eventOutput.emit('select', { id: id });
    } else if (this.buttons[btn]) {
        this.buttons[btn].select();
    }
    for (var i = 0; i < this.buttons.length; i++) {
        if (i !== btn)
            this.buttons[i].deselect();
    }
};
module.exports = TabBar;
},{"./ToggleButton":176,"famous/core/View":58,"famous/utilities/Utility":114,"famous/views/GridLayout":115}],176:[function(require,module,exports){
var Surface = require('famous/core/Surface');
var EventHandler = require('famous/core/EventHandler');
var RenderController = require('famous/views/RenderController');
function ToggleButton(options) {
    this.options = {
        content: '',
        offClasses: ['off'],
        onClasses: ['on'],
        size: undefined,
        outTransition: {
            curve: 'easeInOut',
            duration: 300
        },
        inTransition: {
            curve: 'easeInOut',
            duration: 300
        },
        toggleMode: ToggleButton.TOGGLE,
        crossfade: true
    };
    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
    this.offSurface = new Surface();
    this.offSurface.on('click', function () {
        if (this.options.toggleMode !== ToggleButton.OFF)
            this.select();
    }.bind(this));
    this.offSurface.pipe(this._eventOutput);
    this.onSurface = new Surface();
    this.onSurface.on('click', function () {
        if (this.options.toggleMode !== ToggleButton.ON)
            this.deselect();
    }.bind(this));
    this.onSurface.pipe(this._eventOutput);
    this.arbiter = new RenderController({ overlap: this.options.crossfade });
    this.deselect();
    if (options)
        this.setOptions(options);
}
ToggleButton.OFF = 0;
ToggleButton.ON = 1;
ToggleButton.TOGGLE = 2;
ToggleButton.prototype.select = function select() {
    this.selected = true;
    this.arbiter.show(this.onSurface, this.options.inTransition);
    this._eventOutput.emit('select');
};
ToggleButton.prototype.deselect = function deselect() {
    this.selected = false;
    this.arbiter.show(this.offSurface, this.options.outTransition);
    this._eventOutput.emit('deselect');
};
ToggleButton.prototype.isSelected = function isSelected() {
    return this.selected;
};
ToggleButton.prototype.setOptions = function setOptions(options) {
    if (options.content !== undefined) {
        this.options.content = options.content;
        this.offSurface.setContent(this.options.content);
        this.onSurface.setContent(this.options.content);
    }
    if (options.offClasses) {
        this.options.offClasses = options.offClasses;
        this.offSurface.setClasses(this.options.offClasses);
    }
    if (options.onClasses) {
        this.options.onClasses = options.onClasses;
        this.onSurface.setClasses(this.options.onClasses);
    }
    if (options.size !== undefined) {
        this.options.size = options.size;
        this.onSurface.setSize(this.options.size);
        this.offSurface.setSize(this.options.size);
    }
    if (options.toggleMode !== undefined)
        this.options.toggleMode = options.toggleMode;
    if (options.outTransition !== undefined)
        this.options.outTransition = options.outTransition;
    if (options.inTransition !== undefined)
        this.options.inTransition = options.inTransition;
    if (options.crossfade !== undefined) {
        this.options.crossfade = options.crossfade;
        this.arbiter.setOptions({ overlap: this.options.crossfade });
    }
};
ToggleButton.prototype.getSize = function getSize() {
    return this.options.size;
};
ToggleButton.prototype.render = function render() {
    return this.arbiter.render();
};
module.exports = ToggleButton;
},{"famous/core/EventHandler":49,"famous/core/Surface":56,"famous/views/RenderController":116}]},{},[1]);
