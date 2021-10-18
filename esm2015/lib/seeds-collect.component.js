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
                var EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
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
                this.featerLayer = new FeatureLayer({ url: "https://services2.arcgis.com/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_KKLForestManagementUnits/FeatureServer/0/query" });
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
SeedsCollectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "YaaranutGis-SeedsCollect", inputs: { zz: "zz", workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewNode"], descendants: true, static: true }], ngImport: i0, template: `
    <div #mapViewNode style="width:100%;height: 100%;background-color:green"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'YaaranutGis-SeedsCollect',
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
            }], zz: [{
                type: Input
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOztBQVNuRSxNQUFNLE9BQU8scUJBQXFCO0lBNkRoQztRQXhEVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBRSxHQUFXLEdBQUcsQ0FBQztRQWlEbEIsZ0JBQVcsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBOURELElBQWdELE9BQU8sQ0FBQyxPQUFtQjtRQUN6RSxJQUFJLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQUU7SUFDNUMsQ0FBQztJQU9ELElBQ0ksRUFBRSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEVB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SyxDQUFDLENBQUM7YUFDckM7UUFFSCxDQUFDO0tBQUE7SUFFRCxRQUFRO0lBR1IsQ0FBQzs7a0hBekhVLHFCQUFxQjtzR0FBckIscUJBQXFCLHlRQU50Qjs7R0FFVDsyRkFJVSxxQkFBcUI7a0JBUmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOztHQUVUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGOzBFQUdpRCxPQUFPO3NCQUF0RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBR2hDLFNBQVM7c0JBQWxCLE1BQU07Z0JBT0gsRUFBRTtzQkFETCxLQUFLO2dCQVNGLFNBQVM7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbmltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuaW1wb3J0IHsgU2ltcGxlRmlsbFN5bWJvbCwgU2ltcGxlTGluZVN5bWJvbCwgVGV4dFN5bWJvbCB9IGZyb20gJ0BhcmNnaXMvY29yZS9zeW1ib2xzJztcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnWWFhcmFudXRHaXMtU2VlZHNDb2xsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNtYXBWaWV3Tm9kZSBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OiAxMDAlO2JhY2tncm91bmQtY29sb3I6Z3JlZW5cIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VlZHNDb2xsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdtYXBWaWV3Tm9kZScsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cbiAgfVxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgX3dvcmtVbml0czogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gIHByaXZhdGUgX3o6IHN0cmluZyA9IFwielwiO1xuICBASW5wdXQoKVxuICBzZXQgenooenp6OiBzdHJpbmcpIHtcbiAgICB0aGlzLl96ID0genp6O1xuICB9XG4gIGdldCB6eigpIHtcbiAgICByZXR1cm4gdGhpcy5fejtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB3b3JrVW5pdHMod29ya1VuaXRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dvcmtVbml0cyA9IHdvcmtVbml0cztcblxuICAgIGlmICh0aGlzLmZpcnN0VGltZSkge1xuICAgICAgdGhpcy5maXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hcCgpO1xuICAgIH1cbiAgICBjb25zdCBXb3JrVW5pdHNXaGVyZSA9IHdvcmtVbml0cy5tYXAoXG4gICAgICB3b3JrVW5pdCA9PlxuICAgICAgICBcIidcIiArIHdvcmtVbml0ICsgXCInXCJcbiAgICApLlxuICAgICAgam9pbigpO1xuXG4gICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSUQgaW4gKFwiICsgV29ya1VuaXRzV2hlcmUgKyBcIilcIjtcbiAgICB0aGlzLmZlYXRlckxheWVyLndoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5mZWF0ZXJMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlGZWF0dXJlcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheHp6ID0gXCJEZmdkXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5leHRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgdGhpcy5tYXBWaWV3LmdvVG8ocmVzcG9uc2UuZXh0ZW50KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIEVzcmlQd29lckJ5ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXNyaS11aSBjYWxjaXRlLXRoZW1lLWxpZ2h0XCIpO1xuICAgICAgICAgICAgRXNyaVB3b2VyQnllbGVtZW50c1swXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cbiAgZ2V0IHdvcmtVbml0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtVbml0cztcbiAgfVxuXG4gIHB1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xuICBwdWJsaWMgbWFwVmlldyA9IG5ldyBNYXBWaWV3KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVNYXAoKSB7XG4gICAgY29uc3Qgd2ViTWFwID0gbmV3IFdlYk1hcCh7XG4gICAgICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAgIC8vcG9ydGFsSXRlbToge1xuICAgICAgLy8gIC8vdXJsOlwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0pORklMRm9yZXN0L0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiXG4gICAgICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgICAvL31cbiAgICB9KTtcbiAgICBsZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcbiAgICAgIHBvcnRhbEl0ZW06IHtcbiAgICAgICAgLy91cmw6XCJcIlxuICAgICAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9UZXN0X0tLTEZvcmVzdE1hbmFnZW1lbnRVbml0cy9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIiB9KTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MlwiO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLmRpc3BsYXlGaWVsZCA9IFwiRk9SX05PXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGFiZWxzVmlzaWJsZSA9IHRydWU7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGVnZW5kRW5hYmxlZCA9IHRydWU7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIub3V0RmllbGRzID0gW1wiRk9SX05PXCJdO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLnBvcHVwRW5hYmxlZCA9IHRydWU7XG4gICAgICBjb25zdCBmZWF0ZXJSZW5kZXJlciA9IG5ldyBTaW1wbGVSZW5kZXJlcigpO1xuICAgICAgZmVhdGVyUmVuZGVyZXIubGFiZWwgPSBcIntGT1JfTk99XCI7XG4gICAgICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdvbGRcIik7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xuICAgICAgZmVhdGVyUmVuZGVyZXIuc3ltYm9sID0gcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sO1xuICAgICAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XG4gICAgICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUuRk9SX05PICBcIiB9O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XG4gICAgICB0aGlzLmZlYXRlckxheWVyLnJlbmRlcmVyID0gZmVhdGVyUmVuZGVyZXI7XG4gICAgICB3ZWJNYXAuYWRkKHRoaXMuZmVhdGVyTGF5ZXIpO1xuXG5cbiAgICAgIHRoaXMubWFwVmlldy5jb250YWluZXIgPSB0aGlzLm1hcFZpZXdFbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5tYXBWaWV3Lm1hcCA9IHdlYk1hcDtcblxuXG4gICAgICAvLyhhd2FpdCBtYXBWaWV3LndoZW5MYXllclZpZXcoZmVhdGVyTGF5ZXIpKS5maWx0ZXIud2hlcmUgPSBcIkdsb2JhbElEID0gJ1wiICsgdGhpcy5fZmlsdGVyWzBdICsgXCInXCI7XG4gICAgICAvL21hcFZpZXcud2hlbigoKSA9PiB7XG4gICAgICAvLyAgdGhpcy5tYXBMb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgIC8vfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KCdXZSBoYXZlIGFuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cblxuICB9XG5cbn1cbiJdfQ==