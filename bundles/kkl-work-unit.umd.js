(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@arcgis/core/views/MapView')) :
    typeof define === 'function' && define.amd ? define('kkl-work-unit', ['exports', '@angular/core', '@arcgis/core/views/MapView'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['kkl-work-unit'] = {}, global.ng.core, global.MapView));
}(this, (function (exports, i0, MapView) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
    var MapView__default = /*#__PURE__*/_interopDefaultLegacy(MapView);

    var KklWorkUnitService = /** @class */ (function () {
        function KklWorkUnitService() {
        }
        return KklWorkUnitService;
    }());
    KklWorkUnitService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    KklWorkUnitService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var KklWorkUnitComponent = /** @class */ (function () {
        function KklWorkUnitComponent() {
            this.mapView = new MapView__default['default']();
        }
        KklWorkUnitComponent.prototype.ngOnInit = function () {
        };
        return KklWorkUnitComponent;
    }());
    KklWorkUnitComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    KklWorkUnitComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: KklWorkUnitComponent, selector: "lib-KklWorkUnit", ngImport: i0__namespace, template: "\n    <p>\n      kkl-work-unit works12345!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-KklWorkUnit',
                        template: "\n    <p>\n      kkl-work-unit works12345!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var KklWorkUnitModule = /** @class */ (function () {
        function KklWorkUnitModule() {
        }
        return KklWorkUnitModule;
    }());
    KklWorkUnitModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    KklWorkUnitModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitModule, declarations: [KklWorkUnitComponent], exports: [KklWorkUnitComponent] });
    KklWorkUnitModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KklWorkUnitModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            KklWorkUnitComponent
                        ],
                        imports: [],
                        exports: [
                            KklWorkUnitComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of kkl-work-unit
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KklWorkUnitComponent = KklWorkUnitComponent;
    exports.KklWorkUnitModule = KklWorkUnitModule;
    exports.KklWorkUnitService = KklWorkUnitService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=kkl-work-unit.umd.js.map
