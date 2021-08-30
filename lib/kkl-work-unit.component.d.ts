import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import * as i0 from "@angular/core";
export declare class KklWorkUnitComponent implements OnInit {
    set content(content: ElementRef);
    mapLoaded: EventEmitter<boolean>;
    private mapViewEl;
    private _workUnits;
    set workUnits(workUnits: string[]);
    mapView: MapView;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KklWorkUnitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KklWorkUnitComponent, "lib-KklWorkUnit", never, { "workUnits": "workUnits"; }, { "mapLoaded": "mapLoaded"; }, never, never>;
}
