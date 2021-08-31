import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MyLibTest1Service {
    constructor() { }
}
MyLibTest1Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibTest1Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibTest1Component {
    constructor() {
        this._zz = "1";
    }
    set zz(v) {
        this._zz = v;
        alert(v);
    }
    ngOnInit() {
    }
}
MyLibTest1Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibTest1Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: MyLibTest1Component, selector: "lib-my-lib-test1", inputs: { zz: "zz" }, ngImport: i0, template: `
    <p>12345
      my-lib-test1 works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-lib-test1',
                    template: `
    <p>12345
      my-lib-test1 works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { zz: [{
                type: Input
            }] } });

class MyLibTest1Module {
}
MyLibTest1Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibTest1Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Module, declarations: [MyLibTest1Component], exports: [MyLibTest1Component] });
MyLibTest1Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Module, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: MyLibTest1Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibTest1Component
                    ],
                    imports: [],
                    exports: [
                        MyLibTest1Component
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/*
 * Public API Surface of my-lib-test1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibTest1Component, MyLibTest1Module, MyLibTest1Service };
//# sourceMappingURL=my-lib-test1.js.map
