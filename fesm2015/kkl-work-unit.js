import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
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

//import MapView from "@arcgis/core/views/MapView";
//import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//import Basemap from "@arcgis/core/Basemap";
//import LabelClass from "@arcgis/core/layers/support/LabelClass";
//import { SimpleFillSymbol, SimpleLineSymbol, TextSymbol } from '@arcgis/core/symbols';
//import Color from '@arcgis/core/Color';
//import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
class KklWorkUnitComponent {
    constructor() {
        this.mapView = new MapView();
    }
    ngOnInit() {
    }
}
KklWorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KklWorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: KklWorkUnitComponent, selector: "lib-KklWorkUnit", ngImport: i0, template: `
    <p>
      kkl-work-unit works12345!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-KklWorkUnit',
                    template: `
    <p>
      kkl-work-unit works12345!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

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
