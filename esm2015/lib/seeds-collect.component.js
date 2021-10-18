import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import Color from '@arcgis/core/Color';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import * as i0 from "@angular/core";
export class SeedsCollectComponent {
    constructor() {
        this.mapLoaded = new EventEmitter();
        this._SeedsCollects = [];
        this.firstTime = true;
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    get SeedsCollects123() {
        return this._SeedsCollects;
    }
    set SeedsCollects123(SeedsCollects) {
        this._SeedsCollects = SeedsCollects;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const SeedsCollectsWhere = SeedsCollects.map(SeedsCollect => "'" + SeedsCollect + "'").
            join();
        this.featerLayer.definitionExpression = "GlobalID_2 in (" + SeedsCollectsWhere + ")";
        this.featerLayer.when(() => {
            const query = this.featerLayer.createQuery();
            query.outSpatialReference = this.mapView.spatialReference;
            this.featerLayer.queryFeatures().then(response => {
                response.features.forEach(feature => {
                    const axzz = "Dfgd";
                });
            });
            this.featerLayer.queryExtent(query)
                .then(response => {
                if (response.extent !== null) {
                    response.extent.spatialReference = this.mapView.spatialReference;
                    this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
                }
                var EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                for (let i = 0; i < EsriPwoerByelements.length; i++) {
                    EsriPwoerByelements[i].setAttribute("style", "display:none");
                }
            });
        });
    }
    initializeMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const webMap = new WebMap({
                basemap: "topo",
                //portalItem: {
                //  //url:"https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/JNFILForest/FeatureServer/0/query"
                //  id: "streets"
                //}
            });
            let basemap = new Basemap({
                portalItem: {
                    //url:""
                    id: "streets" // WGS84 Streets Vector webmap
                }
            });
            try {
                this.featerLayer = new FeatureLayer({
                    url: "https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_SeedCollect2021/FeatureServer/0/query"
                });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=2";
                //this.featerLayer.displayField = "FOR_NO";
                //this.featerLayer.labelsVisible = true;
                //this.featerLayer.legendEnabled = true;
                //this.featerLayer.outFields = ["FOR_NO"];
                //this.featerLayer.popupEnabled = true;
                const featerRenderer = new SimpleRenderer();
                featerRenderer.label = "{Site}";
                const polygonsSimpleFillSymbol = new SimpleFillSymbol();
                polygonsSimpleFillSymbol.color = Color.fromString("gold");
                polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
                polygonsSimpleFillSymbol.outline.width = 2;
                featerRenderer.symbol = polygonsSimpleFillSymbol;
                const labelClass = new LabelClass();
                labelClass.labelExpressionInfo = { expression: "$feature.Site  " };
                this.featerLayer.labelingInfo = [labelClass];
                this.featerLayer.renderer = featerRenderer;
                webMap.add(this.featerLayer);
                this.mapView.container = this.mapViewEl.nativeElement;
                this.mapView.map = webMap;
                //(await mapView.whenLayerView(featerLayer)).filter.where = "GlobalID = '" + this._filter[0] + "'";
                //mapView.when(() => {
                //  this.mapLoaded.emit(true);
                //});
            }
            catch (error) {
                alert('We have an error: ' + error);
            }
        });
    }
    ngOnInit() {
    }
}
SeedsCollectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "lib-SeedsCollect", inputs: { SeedsCollects123: "SeedsCollects123" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `
    <div #mapViewNode style="width:100%;height: 100%;background-color:green"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-SeedsCollect',
                    template: `
    <div #mapViewNode style="width:100%;height: 100%;background-color:green"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], SeedsCollects123: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOztBQVNuRSxNQUFNLE9BQU8scUJBQXFCO0lBd0RoQztRQW5EVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBOENsQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBSS9CLENBQUM7SUF6REQsSUFBZ0QsT0FBTyxDQUFDLE9BQW1CO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBT0QsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJ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QUFDOztrSEFySFUscUJBQXFCO3NHQUFyQixxQkFBcUIscVFBTnRCOztHQUVUOzJGQUlVLHFCQUFxQjtrQkFSakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7MEVBR2lELE9BQU87c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHaEMsU0FBUztzQkFBbEIsTUFBTTtnQkFPSCxnQkFBZ0I7c0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IFdlYk1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL1dlYk1hcFwiO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSBcIkBhcmNnaXMvY29yZS92aWV3cy9NYXBWaWV3XCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IEJhc2VtYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9CYXNlbWFwXCI7XG5pbXBvcnQgTGFiZWxDbGFzcyBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9zdXBwb3J0L0xhYmVsQ2xhc3NcIjtcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnQGFyY2dpcy9jb3JlL0NvbG9yJztcbmltcG9ydCBTaW1wbGVSZW5kZXJlciBmcm9tICdAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL1NpbXBsZVJlbmRlcmVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1TZWVkc0NvbGxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI21hcFZpZXdOb2RlIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjpncmVlblwiPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWVkc0NvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdOb2RlJywgeyBzdGF0aWM6IHRydWUgfSkgc2V0IGNvbnRlbnQoY29udGVudDogRWxlbWVudFJlZikge1xuICAgIGlmIChjb250ZW50KSB7IHRoaXMubWFwVmlld0VsID0gY29udGVudDsgfVxuICB9XG4gIEBPdXRwdXQoKSBtYXBMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgbWFwVmlld0VsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfU2VlZHNDb2xsZWN0czogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgXG4gIEBJbnB1dCgpXG4gIGdldCBTZWVkc0NvbGxlY3RzMTIzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fU2VlZHNDb2xsZWN0cztcbiAgfVxuICBzZXQgU2VlZHNDb2xsZWN0czEyMyhTZWVkc0NvbGxlY3RzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX1NlZWRzQ29sbGVjdHMgPSBTZWVkc0NvbGxlY3RzO1xuXG4gICAgaWYgKHRoaXMuZmlyc3RUaW1lKSB7XG4gICAgICB0aGlzLmZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbml0aWFsaXplTWFwKCk7XG4gICAgfVxuICAgIGNvbnN0IFNlZWRzQ29sbGVjdHNXaGVyZSA9IFNlZWRzQ29sbGVjdHMubWFwKFxuICAgICAgU2VlZHNDb2xsZWN0ID0+XG4gICAgICAgIFwiJ1wiICsgU2VlZHNDb2xsZWN0ICsgXCInXCJcbiAgICApLlxuICAgICAgam9pbigpO1xuXG4gICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSURfMiBpbiAoXCIgKyBTZWVkc0NvbGxlY3RzV2hlcmUgKyBcIilcIjtcbiAgICB0aGlzLmZlYXRlckxheWVyLndoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlGZWF0dXJlcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheHp6ID0gXCJEZmdkXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmdvVG8ocmVzcG9uc2UuZXh0ZW50KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIEVzcmlQd29lckJ5ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXNyaS11aSBjYWxjaXRlLXRoZW1lLWxpZ2h0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFc3JpUHdvZXJCeWVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7ICBcbiAgICAgICAgICAgICAgRXNyaVB3b2VyQnllbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cbiAgXG5cbiAgcHVibGljIGZlYXRlckxheWVyOiBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKCk7XG4gIHB1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZU1hcCgpIHtcbiAgICBjb25zdCB3ZWJNYXAgPSBuZXcgV2ViTWFwKHtcbiAgICAgIGJhc2VtYXA6IFwidG9wb1wiLFxuICAgICAgLy9wb3J0YWxJdGVtOiB7XG4gICAgICAvLyAgLy91cmw6XCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSk5GSUxGb3Jlc3QvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCJcbiAgICAgIC8vICBpZDogXCJzdHJlZXRzXCJcbiAgICAgIC8vfVxuICAgIH0pO1xuICAgIGxldCBiYXNlbWFwID0gbmV3IEJhc2VtYXAoe1xuICAgICAgcG9ydGFsSXRlbToge1xuICAgICAgICAvL3VybDpcIlwiXG4gICAgICAgIGlkOiBcInN0cmVldHNcIiAgLy8gV0dTODQgU3RyZWV0cyBWZWN0b3Igd2VibWFwXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvVGVzdF9TZWVkQ29sbGVjdDIwMjEvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCIgfSk7XG4gICAgICB0aGlzLmZlYXRlckxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCIxPTJcIjtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kaXNwbGF5RmllbGQgPSBcIkZPUl9OT1wiO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLmxhYmVsc1Zpc2libGUgPSB0cnVlO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLmxlZ2VuZEVuYWJsZWQgPSB0cnVlO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLm91dEZpZWxkcyA9IFtcIkZPUl9OT1wiXTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5wb3B1cEVuYWJsZWQgPSB0cnVlO1xuICAgICAgY29uc3QgZmVhdGVyUmVuZGVyZXIgPSBuZXcgU2ltcGxlUmVuZGVyZXIoKTtcbiAgICAgIGZlYXRlclJlbmRlcmVyLmxhYmVsID0gXCJ7U2l0ZX1cIjtcbiAgICAgIGNvbnN0IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKCk7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiZ29sZFwiKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImJsdWVcIik7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS53aWR0aCA9IDI7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5zeW1ib2wgPSBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2w7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3MoKTtcbiAgICAgIGxhYmVsQ2xhc3MubGFiZWxFeHByZXNzaW9uSW5mbyA9IHsgZXhwcmVzc2lvbjogXCIkZmVhdHVyZS5TaXRlICBcIiB9O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XG4gICAgICB0aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XG4gICAgICB3ZWJNYXAuYWRkKHRoaXMuZmVhdGVyTGF5ZXIpO1xuXG5cbiAgICAgIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5tYXBWaWV3Lm1hcCA9IHdlYk1hcDtcblxuXG4gICAgICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XG4gICAgICAvL21hcFZpZXcud2hlbigoKSA9PiB7XG4gICAgICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgIC8vfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KCdXZSBoYXZlIGFuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuICB9XG5cbn1cbiJdfQ==