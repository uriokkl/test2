(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib-test1', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-lib-test1'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MyLibTest1Service = /** @class */ (function () {
        function MyLibTest1Service() {
        }
        return MyLibTest1Service;
    }());
    MyLibTest1Service.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Service, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MyLibTest1Service.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Service, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Service, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibTest1Component = /** @class */ (function () {
        function MyLibTest1Component() {
            this._zz = "1";
        }
        Object.defineProperty(MyLibTest1Component.prototype, "zz", {
            set: function (v) {
                this._zz = v;
                alert(v);
            },
            enumerable: false,
            configurable: true
        });
        MyLibTest1Component.prototype.ngOnInit = function () {
        };
        return MyLibTest1Component;
    }());
    MyLibTest1Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyLibTest1Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: MyLibTest1Component, selector: "lib-my-lib-test1", inputs: { zz: "zz" }, ngImport: i0__namespace, template: "\n    <p>12345\n      my-lib-test1 works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib-test1',
                        template: "\n    <p>12345\n      my-lib-test1 works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { zz: [{
                    type: i0.Input
                }] } });

    var MyLibTest1Module = /** @class */ (function () {
        function MyLibTest1Module() {
        }
        return MyLibTest1Module;
    }());
    MyLibTest1Module.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Module, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyLibTest1Module.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Module, declarations: [MyLibTest1Component], exports: [MyLibTest1Component] });
    MyLibTest1Module.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Module, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: MyLibTest1Module, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MyLibTest1Component
                        ],
                        imports: [],
                        exports: [
                            MyLibTest1Component
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }] });

    /*
     * Public API Surface of my-lib-test1
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibTest1Component = MyLibTest1Component;
    exports.MyLibTest1Module = MyLibTest1Module;
    exports.MyLibTest1Service = MyLibTest1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib-test1.umd.js.map
