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
    set workUnits(SeedsCollects) {
        this._SeedsCollects = SeedsCollects;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const SeedsCollectsWhere = this._SeedsCollects.map(SeedsCollect => "'" + SeedsCollect + "'").
            join();
        alert(SeedsCollectsWhere);
        this.featerLayer.definitionExpression = "1=1";
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
                    alert(3476411111);
                    this.mapView.goTo(response.extent).catch(function (error) { console.error(error); });
                }
                //var EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                //for (let i = 0; i < EsriPwoerByelements.length; i++) {  
                //  EsriPwoerByelements[i].setAttribute("style", "display:none");
                //}
            });
        });
    }
    get workUnits() {
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
                    id: "streets" // WGS84 Streets Vector webmap
                }
            });
            try {
                this.featerLayer = new FeatureLayer({ url: "https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_SeedCollect2021/FeatureServer/0/query?token=ZS9puh7vpFcFUS3oiqtvGtFwIMJ6B3fAdYhkmBi97xcR_Xa37gT_2RWah55qJbifSFcK4VqnMZAxM2YYqTEIsz83P_c7jS--gGAB6qLnwqHldfKqdMowLcYosl1VAhQFW8v59sXMOERLLA_lG_G9V0rDqLQfMYkyUq9f4Zr0RxwzB8CFST8KYwAsu7LPgIQGscRVq9cRkyTNVAYmVeUVV-oixpIqAOBsozpJbY5lhnk." });
                this.featerLayer.opacity = 0.5;
                this.featerLayer.definitionExpression = "1=1";
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
SeedsCollectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "lib-SeedsCollect", inputs: { workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewSeedsCollect"], descendants: true, static: true }], ngImport: i0, template: `zzzzz
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-SeedsCollect',
                    template: `zzzzz
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewSeedsCollect', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOztBQVNuRSxNQUFNLE9BQU8scUJBQXFCO0lBeURoQztRQXBEVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBK0NsQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBSS9CLENBQUM7SUExREQsSUFBd0QsT0FBTyxDQUFDLE9BQW1CO1FBQ2pGLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBT0QsSUFDSSxTQUFTLENBQUMsYUFBdUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMs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QU87c0JBQTlELFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUd4QyxTQUFTO3NCQUFsQixNQUFNO2dCQU9ILFNBQVM7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbmltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuaW1wb3J0IHsgU2ltcGxlRmlsbFN5bWJvbCwgU2ltcGxlTGluZVN5bWJvbCwgVGV4dFN5bWJvbCB9IGZyb20gJ0BhcmNnaXMvY29yZS9zeW1ib2xzJztcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVNlZWRzQ29sbGVjdCcsXG4gIHRlbXBsYXRlOiBgenp6enpcbiAgICA8ZGl2ICNtYXBWaWV3U2VlZHNDb2xsZWN0IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjpncmVlblwiPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWVkc0NvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcFZpZXdTZWVkc0NvbGxlY3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY29udGVudChjb250ZW50OiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGNvbnRlbnQpIHsgdGhpcy5tYXBWaWV3RWwgPSBjb250ZW50OyB9XG4gIH1cbiAgQE91dHB1dCgpIG1hcExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBtYXBWaWV3RWwhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9TZWVkc0NvbGxlY3RzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICBcbiAgQElucHV0KClcbiAgc2V0IHdvcmtVbml0cyhTZWVkc0NvbGxlY3RzOiBzdHJpbmdbXSkge1xuICAgICBcbiAgICB0aGlzLl9TZWVkc0NvbGxlY3RzID0gU2VlZHNDb2xsZWN0cztcbiAgIFxuICAgIGlmICh0aGlzLmZpcnN0VGltZSkge1xuICAgICAgdGhpcy5maXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xuICAgIH1cbiAgICBjb25zdCBTZWVkc0NvbGxlY3RzV2hlcmUgPSB0aGlzLl9TZWVkc0NvbGxlY3RzLm1hcChcbiAgICAgIFNlZWRzQ29sbGVjdCA9PlxuICAgICAgICBcIidcIiArIFNlZWRzQ29sbGVjdCArIFwiJ1wiXG4gICAgKS5cbiAgICAgIGpvaW4oKTtcbiAgICBhbGVydChTZWVkc0NvbGxlY3RzV2hlcmUpO1xuICAgIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MVwiO1xuICAgIHRoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUZlYXR1cmVzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNwb25zZS5leHRlbnQuc3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICAgICAgICBhbGVydCgzNDc2NDExMTExKTtcbiAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmdvVG8ocmVzcG9uc2UuZXh0ZW50KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy92YXIgRXNyaVB3b2VyQnllbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlc3JpLXVpIGNhbGNpdGUtdGhlbWUtbGlnaHRcIik7XG4gICAgICAgICAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgRXNyaVB3b2VyQnllbGVtZW50cy5sZW5ndGg7IGkrKykgeyAgXG4gICAgICAgICAgICAvLyAgRXNyaVB3b2VyQnllbGVtZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuICBnZXQgd29ya1VuaXRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fU2VlZHNDb2xsZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xuICBwdWJsaWMgbWFwVmlldyA9IG5ldyBNYXBWaWV3KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVNYXAoKSB7XG4gICAgY29uc3Qgd2ViTWFwID0gbmV3IFdlYk1hcCh7XG4gICAgICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAgIC8vcG9ydGFsSXRlbToge1xuICAgICAgLy8gIC8vdXJsOlwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0pORklMRm9yZXN0L0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiXG4gICAgICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgICAvL31cbiAgICB9KTtcbiAgICBsZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcbiAgICAgIHBvcnRhbEl0ZW06IHtcbiAgICAgICAgLy91cmw6XCJcIlxuICAgICAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X1NlZWRDb2xsZWN0MjAyMS9GZWF0dXJlU2VydmVyLzAvcXVlcnk/dG9rZW49WlM5cHVoN3ZwRmNGVVMzb2lxdHZHdEZ3SU1KNkIzZkFkWWhrbUJpOTd4Y1JfWGEzN2dUXzJSV2FoNTVxSmJpZlNGY0s0VnFuTVpBeE0yWVlxVEVJc3o4M1BfYzdqUy0tZ0dBQjZxTG53cUhsZGZLcWRNb3dMY1lvc2wxVkFoUUZXOHY1OXNYTU9FUkxMQV9sR19HOVYwckRxTFFmTVlreVVxOWY0WnIwUnh3ekI4Q0ZTVDhLWXdBc3U3TFBnSVFHc2NSVnE5Y1JreVROVkFZbVZlVVZWLW9peHBJcUFPQnNvenBKYlk1bGhuay5cIiB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0xXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie1NpdGV9XCI7XG4gICAgICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdvbGRcIik7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xuICAgICAgZmVhdGVyUmVuZGVyZXIuc3ltYm9sID0gcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sO1xuICAgICAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XG4gICAgICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUuU2l0ZSAgXCIgfTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIubGFiZWxpbmdJbmZvID0gW2xhYmVsQ2xhc3NdO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XG4gICAgICB3ZWJNYXAuYWRkKHRoaXMuZmVhdGVyTGF5ZXIpO1xuXG5cbiAgICAgIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5tYXBWaWV3Lm1hcCA9IHdlYk1hcDtcblxuXG4gICAgICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XG4gICAgICAvL21hcFZpZXcud2hlbigoKSA9PiB7XG4gICAgICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgIC8vfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KCdXZSBoYXZlIGFuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuICB9XG5cbn1cbiJdfQ==