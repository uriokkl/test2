import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewChild, Output, Input, NgModule } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';

class KklWorkUnitService {
    constructor() { }
}
KklWorkUnitService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KklWorkUnitService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class KklWorkUnitComponent {
    constructor() {
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set workUnits(workUnits) {
    }
    ngOnInit() {
    }
}
KklWorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KklWorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: KklWorkUnitComponent, selector: "lib-KklWorkUnit", inputs: { workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `aaaa
  <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
zzzz`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-KklWorkUnit',
                    template: `aaaa
  <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
zzzz`,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], workUnits: [{
                type: Input
            }] } });

class KklWorkUnitModule {
}
KklWorkUnitModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KklWorkUnitModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitModule, declarations: [KklWorkUnitComponent], exports: [KklWorkUnitComponent] });
KklWorkUnitModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitModule, decorators: [{
            type: NgModule,
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

export { KklWorkUnitComponent, KklWorkUnitModule, KklWorkUnitService };
//# sourceMappingURL=kkl-work-unit.js.map
