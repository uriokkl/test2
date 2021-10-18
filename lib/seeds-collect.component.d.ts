import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as i0 from "@angular/core";
export declare class SeedsCollectComponent implements OnInit {
    set content(content: ElementRef);
    mapLoaded: EventEmitter<boolean>;
    private mapViewEl;
    private _SeedsCollects;
    private firstTime;
    get SeedsCollects123(): string[];
    set SeedsCollects123(SeedsCollects: string[]);
    aaazzz(): void;
    featerLayer: FeatureLayer;
    mapView: MapView;
    constructor();
    initializeMap(): Promise<void>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeedsCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeedsCollectComponent, "lib-SeedsCollect", never, { "SeedsCollects123": "SeedsCollects123"; }, { "mapLoaded": "mapLoaded"; }, never, never>;
}
