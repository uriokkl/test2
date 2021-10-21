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
export class WorkUnitComponent {
    constructor(ys) {
        this.ys = ys;
        this.mapLoaded = new EventEmitter();
        this._workUnits = [];
        this.firstTime = true;
        this._z = "z";
        this.featerLayer = new FeatureLayer();
        this.mapView = new MapView();
    }
    set content(content) {
        if (content) {
            this.mapViewEl = content;
        }
    }
    set zz(zzz) {
        this._z = zzz;
    }
    get zz() {
        return this._z;
    }
    set workUnits(workUnits) {
        this._workUnits = workUnits;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const WorkUnitsWhere = workUnits.map(workUnit => "'" + workUnit + "'").
            join();
        this.featerLayer.definitionExpression = "GlobalID in (" + WorkUnitsWhere + ")";
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
                const EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                EsriPwoerByelements[0].setAttribute("style", "display:none");
            });
        });
    }
    get workUnits() {
        return this._workUnits;
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
                // this.featerLayer = new FeatureLayer({ url: "http://localhost:27552/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_KKLForestManagementUnits/FeatureServer/0/query" });
                this.featerLayer = new FeatureLayer({
                    url: this.ys.apiUrl + "/ArcGIS/rest/services/KKLForestManagementUnits/FeatureServer/0"
                });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=2";
                //this.featerLayer.displayField = "FOR_NO";
                //this.featerLayer.labelsVisible = true;
                //this.featerLayer.legendEnabled = true;
                //this.featerLayer.outFields = ["FOR_NO"];
                //this.featerLayer.popupEnabled = true;
                const featerRenderer = new SimpleRenderer();
                featerRenderer.label = "{FOR_NO}";
                const polygonsSimpleFillSymbol = new SimpleFillSymbol();
                polygonsSimpleFillSymbol.color = Color.fromString("gold");
                polygonsSimpleFillSymbol.outline.color = Color.fromString("blue");
                polygonsSimpleFillSymbol.outline.width = 2;
                featerRenderer.symbol = polygonsSimpleFillSymbol;
                const labelClass = new LabelClass();
                labelClass.labelExpressionInfo = { expression: "$feature.FOR_NO  " };
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
WorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, deps: [{ token: i1.YaaranutService }], target: i0.ɵɵFactoryTarget.Component });
WorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: WorkUnitComponent, selector: "lib-workUnit", inputs: { zz: "zz", workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `
  <div #mapViewNode style="width:100%;height: 100%;background-color:yellow"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: WorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-workUnit',
                    template: `
  <div #mapViewNode style="width:100%;height: 100%;background-color:yellow"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.YaaranutService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewNode', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], zz: [{
                type: Input
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay11bml0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmstdW5pdC9zcmMvbGliL3dvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRHLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pDLE9BQU8sT0FBTyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pELE9BQU8sWUFBWSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sVUFBVSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0MsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RixPQUFPLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUN2QyxPQUFPLGNBQWMsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBV25FLE1BQU0sT0FBTyxpQkFBaUI7SUFVNUIsWUFBb0IsRUFBbUI7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFMN0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUMsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQUMsSUFBSSxDQUFDO1FBT2YsT0FBRSxHQUFTLEdBQUcsQ0FBQztRQW9EaEIsZ0JBQVcsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXZEL0IsQ0FBQztJQVhELElBQWdELE9BQU8sQ0FBQyxPQUFtQjtRQUN6RSxJQUFJLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQUU7SUFDNUMsQ0FBQztJQVlELElBQ0ksRUFB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LDhCQUE4QjtnQkFDOUIsS0FBSzthQUNMO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO1FBRUgsQ0FBQztLQUFBO0lBRUQsUUFBUTtJQUdSLENBQUM7OzhHQWpJVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiw2UEFObEI7O0dBRVQ7MkZBSVUsaUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7c0dBR2lELE9BQU87c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHaEMsU0FBUztzQkFBbEIsTUFBTTtnQkFZSCxFQUFFO3NCQURMLEtBQUs7Z0JBV0YsU0FBUztzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9XZWJNYXBcIjtcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBCYXNlbWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvQmFzZW1hcFwiO1xuaW1wb3J0IExhYmVsQ2xhc3MgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9MYWJlbENsYXNzXCI7XG5pbXBvcnQgeyBTaW1wbGVGaWxsU3ltYm9sLCBTaW1wbGVMaW5lU3ltYm9sLCBUZXh0U3ltYm9sIH0gZnJvbSAnQGFyY2dpcy9jb3JlL3N5bWJvbHMnO1xuaW1wb3J0IENvbG9yIGZyb20gJ0BhcmNnaXMvY29yZS9Db2xvcic7XG5pbXBvcnQgU2ltcGxlUmVuZGVyZXIgZnJvbSAnQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9TaW1wbGVSZW5kZXJlcic7XG5pbXBvcnQgeyBZYWFyYW51dFNlcnZpY2UgfSBmcm9tICcuLi95YWFyYW51dC5zZXJ2aWNlJztcclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd29ya1VuaXQnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNtYXBWaWV3Tm9kZSBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OiAxMDAlO2JhY2tncm91bmQtY29sb3I6eWVsbG93XCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdtYXBWaWV3Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cbiAgfVxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgX3dvcmtVbml0czogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBmaXJzdFRpbWU9dHJ1ZTsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB5czogWWFhcmFudXRTZXJ2aWNlKSB7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBfejogc3RyaW5nPVwielwiO1xuICBASW5wdXQoKVxuICBzZXQgenooenp6OiBzdHJpbmcpXG4gIHtcbiAgICB0aGlzLl96PXp6ejtcbiAgfVxuICBnZXQgenooKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3o7XG4gIH1cbiAgXG4gIEBJbnB1dCgpXG4gIHNldCB3b3JrVW5pdHMod29ya1VuaXRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dvcmtVbml0cyA9IHdvcmtVbml0cztcblxuICAgIGlmICh0aGlzLmZpcnN0VGltZSkgXG4gICAge1xuICAgICAgdGhpcy5maXJzdFRpbWU9ZmFsc2U7XG4gICAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcbiAgICB9XG4gICAgY29uc3QgV29ya1VuaXRzV2hlcmUgPSB3b3JrVW5pdHMubWFwKFxuICAgICAgd29ya1VuaXQgPT4gXG4gICAgICBcIidcIiArIHdvcmtVbml0ICsgXCInXCJcbiAgICAgICkuXG4gICAgICBqb2luKCk7ICAgIFxuICAgIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIkdsb2JhbElEIGluIChcIiArIFdvcmtVbml0c1doZXJlICsgXCIpXCI7XG4gICAgXG4gICAgdGhpcy5mZWF0ZXJMYXllci53aGVuKFxuICAgICAoKSA9PiB7XG4gICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlGZWF0dXJlcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgY29uc3QgYXh6eiA9IFwiRGZnZFwiO1xuICAgICAgICAgfSk7XG4gICAgICAgfSk7XG4gICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUV4dGVudChxdWVyeSlcbiAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2U9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICAgICAgIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBjb25zdCBFc3JpUHdvZXJCeWVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVzcmktdWkgY2FsY2l0ZS10aGVtZS1saWdodFwiKTtcbiAgICAgICAgICAgRXNyaVB3b2VyQnllbGVtZW50c1swXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiZGlzcGxheTpub25lXCIpO1xuICAgICAgICAgIH0pO1xuXG4gICAgIH0pO1xuICB9XG4gIGdldCB3b3JrVW5pdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93b3JrVW5pdHM7XG4gIH1cblxuICBwdWJsaWMgZmVhdGVyTGF5ZXI6IEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoKTtcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuICBcbiAgIFxuICBhc3luYyBpbml0aWFsaXplTWFwKCkge1xuICAgIGNvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xuICAgICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAgLy9wb3J0YWxJdGVtOiB7XG4gICAgIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxuICAgICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgIC8vfVxuICAgIH0pO1xuICAgIGxldCBiYXNlbWFwID0gbmV3IEJhc2VtYXAoe1xuICAgICBwb3J0YWxJdGVtOiB7XG4gICAgICAgLy91cmw6XCJcIlxuICAgICAgIGlkOiBcInN0cmVldHNcIiAgLy8gV0dTODQgU3RyZWV0cyBWZWN0b3Igd2VibWFwXG4gICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgIC8vIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Mjc1NTIvdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIiB9KTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgdXJsOiB0aGlzLnlzLmFwaVVybCArIFwiL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzBcIlxuICAgICAgfSk7XG4gICAgIHRoaXMuZmVhdGVyTGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kaXNwbGF5RmllbGQgPSBcIkZPUl9OT1wiO1xuICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGFiZWxzVmlzaWJsZSA9IHRydWU7XG4gICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgLy90aGlzLmZlYXRlckxheWVyLm91dEZpZWxkcyA9IFtcIkZPUl9OT1wiXTtcbiAgICAgLy90aGlzLmZlYXRlckxheWVyLnBvcHVwRW5hYmxlZCA9IHRydWU7XG4gICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgIGZlYXRlclJlbmRlcmVyLmxhYmVsID0gXCJ7Rk9SX05PfVwiO1xuICAgICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xuICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiZ29sZFwiKTtcbiAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiYmx1ZVwiKTtcbiAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xuICAgICBmZWF0ZXJSZW5kZXJlci5zeW1ib2wgPSBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2w7XG4gICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSBuZXcgTGFiZWxDbGFzcygpO1xuICAgICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUuRk9SX05PICBcIiB9O1xuICAgICB0aGlzLmZlYXRlckxheWVyLmxhYmVsaW5nSW5mbyA9IFtsYWJlbENsYXNzXTtcbiAgICAgdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xuICAgICB3ZWJNYXAuYWRkKHRoaXMuZmVhdGVyTGF5ZXIpO1xuXG5cbiAgICAgdGhpcy5tYXBWaWV3LmNvbnRhaW5lciA9IHRoaXMubWFwVmlld0VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XG5cblxuICAgICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XG4gICAgIC8vbWFwVmlldy53aGVuKCgpID0+IHtcbiAgICAgLy8gIHRoaXMubWFwTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgIC8vfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgYWxlcnQoJ1dlIGhhdmUgYW4gZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgXG4gICAgXG4gIH1cblxufVxuIl19