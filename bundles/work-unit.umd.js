(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('work-unit', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['work-unit'] = {}, global.ng.core));
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

    var WorkUnitService = /** @class */ (function () {
        function WorkUnitService() {
        }
        return WorkUnitService;
    }());
    WorkUnitService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WorkUnitService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var WorkUnitComponent = /** @class */ (function () {
        function WorkUnitComponent() {
        }
        WorkUnitComponent.prototype.ngOnInit = function () {
        };
        return WorkUnitComponent;
    }());
    WorkUnitComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    WorkUnitComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "lib-workUnit", ngImport: i0__namespace, template: "\n    <p>\n      work-unit works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-workUnit',
                        template: "\n    <p>\n      work-unit works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var WorkUnitModule = /** @class */ (function () {
        function WorkUnitModule() {
        }
        return WorkUnitModule;
    }());
    WorkUnitModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    WorkUnitModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitModule, declarations: [WorkUnitComponent], exports: [WorkUnitComponent] });
    WorkUnitModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: WorkUnitModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            WorkUnitComponent
                        ],
                        imports: [],
                        exports: [
                            WorkUnitComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of work-unit
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.WorkUnitComponent = WorkUnitComponent;
    exports.WorkUnitModule = WorkUnitModule;
    exports.WorkUnitService = WorkUnitService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=work-unit.umd.js.map
