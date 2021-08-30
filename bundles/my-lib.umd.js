(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/compiler')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', '@angular/compiler'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-lib'] = {}, global.ng.core));
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

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        return MyLibService;
    }());
    MyLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MyLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        return MyLibComponent;
    }());
    MyLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: MyLibComponent, selector: "lib-my-lib123", ngImport: i0__namespace, template: "\n    <p>\n      my-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib123',
                        template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibModule, declarations: [MyLibComponent], exports: [MyLibComponent] });
    MyLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0__namespace, type: MyLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MyLibComponent
                        ],
                        imports: [],
                        exports: [
                            MyLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of my-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
