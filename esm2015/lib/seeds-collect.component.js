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
    set workUnits(SeedsCollects) {
        this._SeedsCollects = SeedsCollects;
        if (this.firstTime) {
            this.firstTime = false;
            this.initializeMap();
        }
        let SeedsCollectsWhere = "";
        this._SeedsCollects.forEach(SeedsCollect => SeedsCollectsWhere += "GlobalID_2 ='" + SeedsCollect + "' or ");
        SeedsCollectsWhere += "1=2";
        //alert("GlobalID_2 in (" + SeedsCollectsWhere + ")")
        //alert(SeedsCollectsWhere);
        this.featerLayer.definitionExpression = SeedsCollectsWhere;
        alert(this.featerLayer.definitionExpression);
        //this.featerLayer.definitionExpression = "GlobalID_2 ='" + this._SeedsCollects[0] + "'";
        //this.featerLayer.definitionExpression = "1=1";
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
                //id: "streets"  // WGS84 Streets Vector webmap
                }
            });
            try {
                //esriConfig.apiKey = "AAPK9a3f55c380f94d1bb10a7566c7b32f941X_pcZKXmWY7Grjs6oA9AqufsDHrvRDYaOlUG8gvyD5fhZv-OGYyIgXEO-ihuO4T";
                this.featerLayer = new FeatureLayer({
                    url: this.ys + "/utNNrmXb4IZOLXXs/ArcGIS/rest/services/Test_SeedCollect2021/FeatureServer/0/query"
                }); //?token=ZS9puh7vpFcFUS3oiqtvGtFwIMJ6B3fAdYhkmBi97xcR_Xa37gT_2RWah55qJbifSFcK4VqnMZAxM2YYqTEIsz83P_c7jS--gGAB6qLnwqHldfKqdMowLcYosl1VAhQFW8v59sXMOERLLA_lG_G9V0rDqLQfMYkyUq9f4Zr0RxwzB8CFST8KYwAsu7LPgIQGscRVq9cRkyTNVAYmVeUVV-oixpIqAOBsozpJbY5lhnk." });
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
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "lib-SeedsCollect", inputs: { workUnits: "workUnits" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewSeedsCollect"], descendants: true, static: true }], ngImport: i0, template: `zzzzz222
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: SeedsCollectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-SeedsCollect',
                    template: `zzzzz222
    <div #mapViewSeedsCollect style="width:100%;height: 100%;background-color:green"></div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.YaaranutService }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['mapViewSeedsCollect', { static: true }]
            }], mapLoaded: [{
                type: Output
            }], workUnits: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOzs7QUFVbkUsTUFBTSxPQUFPLHFCQUFxQjtJQTZEaEMsWUFBb0IsRUFBbUI7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUF4RDdCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFtRGxCLGdCQUFXLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFJL0IsQ0FBQztJQTlERCxJQUF3RCxPQUFPLENBQUMsT0FBbUI7UUFDakYsSUFBSSxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQzVDLENBQUM7SUFPRCxJQUNJLFNBQVMsQ0FBQyxhQUF1QjtR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SEE3SFUscUJBQXFCO3NHQUFyQixxQkFBcUIsK1BBTnRCOztHQUVUOzJGQUlVLHFCQUFxQjtrQkFSakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7c0dBR3lELE9BQU87c0JBQTlELFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUd4QyxTQUFTO3NCQUFsQixNQUFNO2dCQU9ILFNBQVM7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gXCJAYXJjZ2lzL2NvcmUvV2ViTWFwXCI7XG5pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbmltcG9ydCBlc3JpQ29uZmlnIGZyb20gXCJAYXJjZ2lzL2NvcmUvY29uZmlnXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IEJhc2VtYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9CYXNlbWFwXCI7XG5pbXBvcnQgTGFiZWxDbGFzcyBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9zdXBwb3J0L0xhYmVsQ2xhc3NcIjtcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnQGFyY2dpcy9jb3JlL0NvbG9yJztcbmltcG9ydCBTaW1wbGVSZW5kZXJlciBmcm9tICdAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL1NpbXBsZVJlbmRlcmVyJztcbmltcG9ydCB7IFlhYXJhbnV0U2VydmljZSB9IGZyb20gJy4uL3lhYXJhbnV0LnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItU2VlZHNDb2xsZWN0JywgICBcbiAgdGVtcGxhdGU6IGB6enp6ejIyMlxuICAgIDxkaXYgI21hcFZpZXdTZWVkc0NvbGxlY3Qgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdICAgXG59KVxuZXhwb3J0IGNsYXNzIFNlZWRzQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnbWFwVmlld1NlZWRzQ29sbGVjdCcsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoY29udGVudCkgeyB0aGlzLm1hcFZpZXdFbCA9IGNvbnRlbnQ7IH1cbiAgfVxuICBAT3V0cHV0KCkgbWFwTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwcml2YXRlIG1hcFZpZXdFbCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgX1NlZWRzQ29sbGVjdHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIFxuICBASW5wdXQoKVxuICBzZXQgd29ya1VuaXRzKFNlZWRzQ29sbGVjdHM6IHN0cmluZ1tdKSB7XG4gICAgIFxuICAgIHRoaXMuX1NlZWRzQ29sbGVjdHMgPSBTZWVkc0NvbGxlY3RzO1xuICAgXG4gICAgaWYgKHRoaXMuZmlyc3RUaW1lKSB7XG4gICAgICB0aGlzLmZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbml0aWFsaXplTWFwKCk7XG4gICAgfVxuICAgIGxldCBTZWVkc0NvbGxlY3RzV2hlcmUgPVwiXCJcbiAgICB0aGlzLl9TZWVkc0NvbGxlY3RzLmZvckVhY2goXG4gICAgICBTZWVkc0NvbGxlY3QgPT5cbiAgICAgICAgU2VlZHNDb2xsZWN0c1doZXJlICs9IFwiR2xvYmFsSURfMiA9J1wiICsgU2VlZHNDb2xsZWN0ICsgXCInIG9yIFwiXG4gICAgKTtcbiAgICBTZWVkc0NvbGxlY3RzV2hlcmUgKz0gXCIxPTJcIlxuICAgIC8vYWxlcnQoXCJHbG9iYWxJRF8yIGluIChcIiArIFNlZWRzQ29sbGVjdHNXaGVyZSArIFwiKVwiKVxuICAgIC8vYWxlcnQoU2VlZHNDb2xsZWN0c1doZXJlKTtcbiAgICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gIFNlZWRzQ29sbGVjdHNXaGVyZSAgO1xuICAgIGFsZXJ0KHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24pO1xuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSURfMiA9J1wiICsgdGhpcy5fU2VlZHNDb2xsZWN0c1swXSArIFwiJ1wiO1xuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0xXCI7XG4gICAgdGhpcy5mZWF0ZXJMYXllci53aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZmVhdGVyTGF5ZXIuY3JlYXRlUXVlcnkoKTtcbiAgICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICByZXNwb25zZS5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXh6eiA9IFwiRGZnZFwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUV4dGVudChxdWVyeSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXh0ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmV4dGVudC5zcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XG4gICAgICAgICAgICAgIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdmFyIEVzcmlQd29lckJ5ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXNyaS11aSBjYWxjaXRlLXRoZW1lLWxpZ2h0XCIpO1xuICAgICAgICAgICAgLy9mb3IgKGxldCBpID0gMDsgaSA8IEVzcmlQd29lckJ5ZWxlbWVudHMubGVuZ3RoOyBpKyspIHsgIFxuICAgICAgICAgICAgLy8gIEVzcmlQd29lckJ5ZWxlbWVudHNbaV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cbiAgZ2V0IHdvcmtVbml0cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX1NlZWRzQ29sbGVjdHM7XG4gIH1cblxuICBwdWJsaWMgZmVhdGVyTGF5ZXI6IEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoKTtcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHlzOiBZYWFyYW51dFNlcnZpY2UpIHtcblxuXG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplTWFwKCkge1xuICAgIGNvbnN0IHdlYk1hcCA9IG5ldyBXZWJNYXAoe1xuICAgICAgYmFzZW1hcDogXCJ0b3BvXCIsXG4gICAgICAvL3BvcnRhbEl0ZW06IHtcbiAgICAgIC8vICAvL3VybDpcImh0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vdXROTnJtWGI0SVpPTFhYcy9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9KTkZJTEZvcmVzdC9GZWF0dXJlU2VydmVyLzAvcXVlcnlcIlxuICAgICAgLy8gIGlkOiBcInN0cmVldHNcIlxuICAgICAgLy99XG4gICAgfSk7XG4gICAgbGV0IGJhc2VtYXAgPSBuZXcgQmFzZW1hcCh7XG4gICAgICBwb3J0YWxJdGVtOiB7XG4gICAgICAgIC8vdXJsOlwiXCJcbiAgICAgICAgLy9pZDogXCJzdHJlZXRzXCIgIC8vIFdHUzg0IFN0cmVldHMgVmVjdG9yIHdlYm1hcFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vZXNyaUNvbmZpZy5hcGlLZXkgPSBcIkFBUEs5YTNmNTVjMzgwZjk0ZDFiYjEwYTc1NjZjN2IzMmY5NDFYX3BjWktYbVdZN0dyanM2b0E5QXF1ZnNESHJ2UkRZYU9sVUc4Z3Z5RDVmaFp2LU9HWXlJZ1hFTy1paHVPNFRcIjtcblxuICAgICAgdGhpcy5mZWF0ZXJMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy55cytcIi91dE5Ocm1YYjRJWk9MWFhzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1Rlc3RfU2VlZENvbGxlY3QyMDIxL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeVwifSk7Ly8/dG9rZW49WlM5cHVoN3ZwRmNGVVMzb2lxdHZHdEZ3SU1KNkIzZkFkWWhrbUJpOTd4Y1JfWGEzN2dUXzJSV2FoNTVxSmJpZlNGY0s0VnFuTVpBeE0yWVlxVEVJc3o4M1BfYzdqUy0tZ0dBQjZxTG53cUhsZGZLcWRNb3dMY1lvc2wxVkFoUUZXOHY1OXNYTU9FUkxMQV9sR19HOVYwckRxTFFmTVlreVVxOWY0WnIwUnh3ekI4Q0ZTVDhLWXdBc3U3TFBnSVFHc2NSVnE5Y1JreVROVkFZbVZlVVZWLW9peHBJcUFPQnNvenBKYlk1bGhuay5cIiB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5mZWF0ZXJMYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0yXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIuZGlzcGxheUZpZWxkID0gXCJGT1JfTk9cIjtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sYWJlbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5sZWdlbmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5vdXRGaWVsZHMgPSBbXCJGT1JfTk9cIl07XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucG9wdXBFbmFibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGZlYXRlclJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKCk7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5sYWJlbCA9IFwie1NpdGV9XCIgO1xuICAgICAgY29uc3QgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21TdHJpbmcoXCJnb2xkXCIpO1xuICAgICAgcG9seWdvbnNTaW1wbGVGaWxsU3ltYm9sLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiYmx1ZVwiKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLndpZHRoID0gMjtcbiAgICAgIGZlYXRlclJlbmRlcmVyLnN5bWJvbCA9IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbDtcbiAgICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSBuZXcgTGFiZWxDbGFzcygpO1xuICAgICAgbGFiZWxDbGFzcy5sYWJlbEV4cHJlc3Npb25JbmZvID0geyBleHByZXNzaW9uOiBcIiRmZWF0dXJlLlNpdGUgKyAnLCcgKyAgJGZlYXR1cmUuSGViTmljIFwiIH07XG4gICAgICB0aGlzLmZlYXRlckxheWVyLmxhYmVsaW5nSW5mbyA9IFtsYWJlbENsYXNzXTtcbiAgICAgIC8vdGhpcy5mZWF0ZXJMYXllci5yZW5kZXJlciA9IGZlYXRlclJlbmRlcmVyO1xuICAgICAgd2ViTWFwLmFkZCh0aGlzLmZlYXRlckxheWVyKTtcblxuXG4gICAgICB0aGlzLm1hcFZpZXcuY29udGFpbmVyID0gdGhpcy5tYXBWaWV3RWwubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMubWFwVmlldy5tYXAgPSB3ZWJNYXA7XG5cblxuICAgICAgLy8oYXdhaXQgbWFwVmlldy53aGVuTGF5ZXJWaWV3KGZlYXRlckxheWVyKSkuZmlsdGVyLndoZXJlID0gXCJHbG9iYWxJRCA9ICdcIiArIHRoaXMuX2ZpbHRlclswXSArIFwiJ1wiO1xuICAgICAgLy9tYXBWaWV3LndoZW4oKCkgPT4ge1xuICAgICAgLy8gIHRoaXMubWFwTG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAvL30pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnV2UgaGF2ZSBhbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG59XG4iXX0=