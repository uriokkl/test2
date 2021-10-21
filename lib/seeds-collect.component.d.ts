import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { YaaranutService } from '../yaaranut.service';
import * as i0 from "@angular/core";
export declare class SeedsCollectComponent implements OnInit {
    private ys;
    set content(content: ElementRef);
    mapLoaded: EventEmitter<boolean>;
    private mapViewEl;
    private _SeedsCollects;
    private firstTime;
    set workUnits(SeedsCollects: string[]);
    get workUnits(): string[];
    featerLayer: FeatureLayer;
    mapView: MapView;
    constructor(ys: YaaranutService);
    initializeMap(): Promise<void>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeedsCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeedsCollectComponent, "lib-SeedsCollect", never, { "workUnits": "workUnits"; }, { "mapLoaded": "mapLoaded"; }, never, never>;
}
