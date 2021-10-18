import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as i0 from "@angular/core";
export declare class SeedsCollectComponent implements OnInit {
    set content(content: ElementRef);
    mapLoaded: EventEmitter<boolean>;
    private mapViewEl;
    private _workUnits;
    private firstTime;
    private _z;
    set zz(zzz: string);
    get zz(): string;
    set workUnits(workUnits: string[]);
    get workUnits(): string[];
    featerLayer: FeatureLayer;
    mapView: MapView;
    constructor();
    initializeMap(): Promise<void>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeedsCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeedsCollectComponent, "YaaranutGis-SeedsCollect", never, { "zz": "zz"; "workUnits": "workUnits"; }, { "mapLoaded": "mapLoaded"; }, never, never>;
}