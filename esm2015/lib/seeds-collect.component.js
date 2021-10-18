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
    }
    aaazzz() {
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        const SeedsCollectsWhere = this._SeedsCollects.map(SeedsCollect => "'" + SeedsCollect + "'").
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
                //var EsriPwoerByelements = document.getElementsByClassName("esri-ui calcite-theme-light");
                //for (let i = 0; i < EsriPwoerByelements.length; i++) {  
                //  EsriPwoerByelements[i].setAttribute("style", "display:none");
                //}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFDakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOztBQVNuRSxNQUFNLE9BQU8scUJBQXFCO0lBeURoQztRQXBEVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBK0NsQixnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBSS9CLENBQUM7SUExREQsSUFBZ0QsT0FBTyxDQUFDLE9BQW1CO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FBRTtJQUM1QyxDQUFDO0lBT0QsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJ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RUFDUDtpQkFDRjswRUFHaUQsT0FBTztzQkFBdEQsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUdoQyxTQUFTO3NCQUFsQixNQUFNO2dCQU9ILGdCQUFnQjtzQkFEbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbmltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuaW1wb3J0IHsgU2ltcGxlRmlsbFN5bWJvbCwgU2ltcGxlTGluZVN5bWJvbCwgVGV4dFN5bWJvbCB9IGZyb20gJ0BhcmNnaXMvY29yZS9zeW1ib2xzJztcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVNlZWRzQ29sbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjbWFwVmlld05vZGUgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlZWRzQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnbWFwVmlld05vZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgY29udGVudChjb250ZW50OiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGNvbnRlbnQpIHsgdGhpcy5tYXBWaWV3RWwgPSBjb250ZW50OyB9XG4gIH1cbiAgQE91dHB1dCgpIG1hcExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBtYXBWaWV3RWwhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9TZWVkc0NvbGxlY3RzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICBcbiAgQElucHV0KClcbiAgZ2V0IFNlZWRzQ29sbGVjdHMxMjMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9TZWVkc0NvbGxlY3RzO1xuICB9XG4gIHNldCBTZWVkc0NvbGxlY3RzMTIzKFNlZWRzQ29sbGVjdHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fU2VlZHNDb2xsZWN0cyA9IFNlZWRzQ29sbGVjdHM7XG4gIH1cbiAgIGFhYXp6eigpIHtcbiAgICBpZiAodGhpcy5maXJzdFRpbWUpIHtcbiAgICAgIHRoaXMuZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICB0aGlzLmluaXRpYWxpemVNYXAoKTtcbiAgICB9XG4gICAgY29uc3QgU2VlZHNDb2xsZWN0c1doZXJlID0gdGhpcy5fU2VlZHNDb2xsZWN0cy5tYXAoXG4gICAgICBTZWVkc0NvbGxlY3QgPT5cbiAgICAgICAgXCInXCIgKyBTZWVkc0NvbGxlY3QgKyBcIidcIlxuICAgICkuXG4gICAgICBqb2luKCk7XG5cbiAgICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gXCJHbG9iYWxJRF8yIGluIChcIiArIFNlZWRzQ29sbGVjdHNXaGVyZSArIFwiKVwiO1xuICAgIHRoaXMuZmVhdGVyTGF5ZXIud2hlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZlYXRlckxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB0aGlzLm1hcFZpZXcuc3BhdGlhbFJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUZlYXR1cmVzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4enogPSBcIkRmZ2RcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmVhdGVyTGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmV4dGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNwb25zZS5leHRlbnQuc3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICAgICAgICB0aGlzLm1hcFZpZXcuZ29UbyhyZXNwb25zZS5leHRlbnQpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3ZhciBFc3JpUHdvZXJCeWVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVzcmktdWkgY2FsY2l0ZS10aGVtZS1saWdodFwiKTtcbiAgICAgICAgICAgIC8vZm9yIChsZXQgaSA9IDA7IGkgPCBFc3JpUHdvZXJCeWVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7ICBcbiAgICAgICAgICAgIC8vICBFc3JpUHdvZXJCeWVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICB9XG4gIFxuXG4gIHB1YmxpYyBmZWF0ZXJMYXllcjogRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcigpO1xuICBwdWJsaWMgbWFwVmlldyA9IG5ldyBNYXBWaWV3KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVNYXAoKSB7XG4gICAgY29uc3Qgd2ViTWFwID0gbmV3IFdlYk1hcCh7XG4gICAgICBiYXNlbWFwOiBcInRvcG9cIixcbiAgICAgIC8vcG9ydGFsSXRlbToge1xuICAgICAgLy8gIC8vdXJsOlwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0pORklMRm9yZXN0L0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiXG4gICAgICAvLyAgaWQ6IFwic3RyZWV0c1wiXG4gICAgICAvL31cbiAgICB9KTtcbiAgICBsZXQgYmFzZW1hcCA9IG5ldyBCYXNlbWFwKHtcbiAgICAgIHBvcnRhbEl0ZW06IHtcbiAgICAgICAgLy91cmw6XCJcIlxuICAgICAgICBpZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1Rlc3RfU2VlZENvbGxlY3QyMDIxL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwiIH0pO1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie1NpdGV9XCI7XG4gICAgICBjb25zdCBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImdvbGRcIik7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJibHVlXCIpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUud2lkdGggPSAyO1xuICAgICAgZmVhdGVyUmVuZGVyZXIuc3ltYm9sID0gcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sO1xuICAgICAgY29uc3QgbGFiZWxDbGFzcyA9IG5ldyBMYWJlbENsYXNzKCk7XG4gICAgICBsYWJlbENsYXNzLmxhYmVsRXhwcmVzc2lvbkluZm8gPSB7IGV4cHJlc3Npb246IFwiJGZlYXR1cmUuU2l0ZSAgXCIgfTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIubGFiZWxpbmdJbmZvID0gW2xhYmVsQ2xhc3NdO1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xuICAgICAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcblxuXG4gICAgICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XG5cblxuICAgICAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xuICAgICAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xuICAgICAgLy8gIHRoaXMubWFwTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAvL30pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnV2UgaGF2ZSBhbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG59XG4iXX0=