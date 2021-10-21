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
import * as i1 from "../yaaranut.service";
export class SeedsCollectComponent {
    constructor(ys) {
        this.ys = ys;
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
    set seedsCollects(SeedsCollects) {
        this._SeedsCollects = SeedsCollects;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        let SeedsCollectsWhere = "";
        this._SeedsCollects.forEach(SeedsCollect => SeedsCollectsWhere += "GlobalID_2 ='" + SeedsCollect + "' or ");
        SeedsCollectsWhere += "1=2";
        this.featerLayer.definitionExpression = SeedsCollectsWhere;
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
    get seedsCollects() {
        return this._SeedsCollects;
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
                //id: "streets"  // WGS84 Streets Vector webmap
                }
            });
            try {
                //esriConfig.apiKey = "AAPK9a3f55c380f94d1bb10a7566c7b32f941X_pcZKXmWY7Grjs6oA9AqufsDHrvRDYaOlUG8gvyD5fhZv-OGYyIgXEO-ihuO4T";
                this.featerLayer = new FeatureLayer({
                    url: this.ys.apiUrl + "/ArcGIS/rest/services/SeedCollect2021/FeatureServer/0"
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
                labelClass.labelExpressionInfo = { expression: "$feature.Site + ',' +  $feature.HebNic " };
                this.featerLayer.labelingInfo = [labelClass];
                //this.featerLayer.renderer = featerRenderer;
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
SeedsCollectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, deps: [{ token: i1.YaaranutService }], target: i0.ɵɵFactoryTarget.Component });
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "lib-SeedsCollect", inputs: { seedsCollects: "seedsCollects" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewSeedsCollect"], descendants: true, static: true }], ngImport: i0, template: `
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-SeedsCollect',
                    template: `
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.YaaranutService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewSeedsCollect', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], seedsCollects: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOzs7QUFVbkUsTUFBTSxPQUFPLHFCQUFxQjtJQXdEaEMsWUFBb0IsRUFBbUI7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFuRDdCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUE4Q2xCLGdCQUFXLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFJL0IsQ0FBQztJQXpERCxJQUF3RCxPQUFPLENBQUMsT0FBbUI7UUFDakYsSUFBSSxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQzVDLENBQUM7SUFPRCxJQUNJLGFBQWEsQ0FBQyxhQUF1QjtR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QUFHLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1FBRUgsQ0FBQztLQUFBO0lBRUQsUUFBUTtJQUdSLENBQUM7O2tIQXhIVSxxQkFBcUI7c0dBQXJCLHFCQUFxQix1UUFOdEI7O0dBRVQ7MkZBSVUscUJBQXFCO2tCQVJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjtzR0FHeUQsT0FBTztzQkFBOUQsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBR3hDLFNBQVM7c0JBQWxCLE1BQU07Z0JBT0gsYUFBYTtzQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBlc3JpQ29uZmlnIGZyb20gXCJAYXJjZ2lzL2NvcmUvY29uZmlnXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IEJhc2VtYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9CYXNlbWFwXCI7XG5pbXBvcnQgTGFiZWxDbGFzcyBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9zdXBwb3J0L0xhYmVsQ2xhc3NcIjtcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnQGFyY2dpcy9jb3JlL0NvbG9yJztcbmltcG9ydCBTaW1wbGVSZW5kZXJlciBmcm9tICdAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL1NpbXBsZVJlbmRlcmVyJztcbmltcG9ydCB7IFlhYXJhbnV0U2VydmljZSB9IGZyb20gJy4uL3lhYXJhbnV0LnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItU2VlZHNDb2xsZWN0JywgICBcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNtYXBWaWV3U2VlZHNDb2xsZWN0IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjpncmVlblwiPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXSAgIFxufSlcbmV4cG9ydCBjbGFzcyBTZWVkc0NvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdTZWVkc0NvbGxlY3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY29udGVudChjb250ZW50OiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGNvbnRlbnQpIHsgdGhpcy5tYXBWaWV3RWwgPSBjb250ZW50OyB9XG4gIH1cbiAgQE91dHB1dCgpIG1hcExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBtYXBWaWV3RWwhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9TZWVkc0NvbGxlY3RzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICBcbiAgQElucHV0KClcbiAgc2V0IHNlZWRzQ29sbGVjdHMoU2VlZHNDb2xsZWN0czogc3RyaW5nW10pIHtcbiAgICAgXG4gICAgdGhpcy5fU2VlZHNDb2xsZWN0cyA9IFNlZWRzQ29sbGVjdHM7XG4gICBcbiAgICBpZiAodGhpcy5maXJzdFRpbWUpIHtcbiAgICAgIHRoaXMuZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcbiAgICB9XG4gICAgbGV0IFNlZWRzQ29sbGVjdHNXaGVyZSA9XCJcIlxuICAgIHRoaXMuX1NlZWRzQ29sbGVjdHMuZm9yRWFjaChcbiAgICAgIFNlZWRzQ29sbGVjdCA9PlxuICAgICAgICBTZWVkc0NvbGxlY3RzV2hlcmUgKz0gXCJHbG9iYWxJRF8yID0nXCIgKyBTZWVkc0NvbGxlY3QgKyBcIicgb3IgXCJcbiAgICApO1xuICAgIFNlZWRzQ29sbGVjdHNXaGVyZSArPSBcIjE9MlwiXG4gICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICBTZWVkc0NvbGxlY3RzV2hlcmUgIDsgICAgIFxuICAgIHRoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUZlYXR1cmVzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNwb25zZS5leHRlbnQuc3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuZ29UbyhyZXNwb25zZS5leHRlbnQpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgRXNyaVB3b2VyQnllbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlc3JpLXVpIGNhbGNpdGUtdGhlbWUtbGlnaHRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVzcmlQd29lckJ5ZWxlbWVudHMubGVuZ3RoOyBpKyspIHsgIFxuICAgICAgICAgICAgICBFc3JpUHdvZXJCeWVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuICBnZXQgc2VlZHNDb2xsZWN0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX1NlZWRzQ29sbGVjdHM7XG4gIH1cblxuICBwdWJsaWMgZmVhdGVyTGF5ZXI6IEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoKTtcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHlzOiBZYWFyYW51dFNlcnZpY2UpIHtcblxuXG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplTWFwKCkge1xuICAgIGNvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xuICAgICAgYmFzZW1hcDogXCJ0b3BvXCIsXG4gICAgICAvL3BvcnRhbEl0ZW06IHtcbiAgICAgIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxuICAgICAgLy8gIGlkOiBcInN0cmVldHNcIlxuICAgICAgLy99XG4gICAgfSk7XG4gICAgbGV0IGJhc2VtYXAgPSBuZXcgQmFzZW1hcCh7XG4gICAgICBwb3J0YWxJdGVtOiB7XG4gICAgICAgIC8vdXJsOlwiXCJcbiAgICAgICAgLy9pZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vZXNyaUNvbmZpZy5hcGlLZXkgPSBcIkFBUEs5YTNmNTVjMzgwZjk0ZDFiYjEwYTc1NjZjN2IzMmY5NDFYX3BjWktYbVdZN0dyanM2b0E5QXF1ZnNESHJ2UkRZYU9sVUc4Z3Z5RDVmaFp2LU9HWXlJZ1hFTy1paHVPNFRcIjtcblxuICAgICAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy55cy5hcGlVcmwgKyBcIi9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9TZWVkQ29sbGVjdDIwMjEvRmVhdHVyZVNlcnZlci8wXCJcclxuICAgICAgfSk7IFxuICAgICAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie1NpdGV9XCIgO1xuICAgICAgY29uc3QgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJnb2xkXCIpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiYmx1ZVwiKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLndpZHRoID0gMjtcbiAgICAgIGZlYXRlclJlbmRlcmVyLnN5bWJvbCA9IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbDtcbiAgICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSBuZXcgTGFiZWxDbGFzcygpO1xuICAgICAgbGFiZWxDbGFzcy5sYWJlbEV4cHJlc3Npb25JbmZvID0geyBleHByZXNzaW9uOiBcIiRmZWF0dXJlLlNpdGUgKyAnLCcgKyAgJGZlYXR1cmUuSGViTmljIFwiIH07XG4gICAgICB0aGlzLmZlYXRlckxheWVyLmxhYmVsaW5nSW5mbyA9IFtsYWJlbENsYXNzXTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xuICAgICAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcblxuXG4gICAgICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XG5cblxuICAgICAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xuICAgICAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xuICAgICAgLy8gIHRoaXMubWFwTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAvL30pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnV2UgaGF2ZSBhbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG59XG4iXX0=