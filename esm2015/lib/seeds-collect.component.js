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
SeedsCollectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: SeedsCollectComponent, selector: "lib-SeedsCollect", inputs: { seedsCollects: "seedsCollects" }, outputs: { mapLoaded: "mapLoaded" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["mapViewSeedsCollect"], descendants: true, static: true }], ngImport: i0, template: `zzzzz222
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
            }], seedsCollects: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZHMtY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JrLXVuaXQvc3JjL2xpYi9zZWVkcy1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFakQsT0FBTyxZQUFZLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RGLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHVDQUF1QyxDQUFDOzs7QUFVbkUsTUFBTSxPQUFPLHFCQUFxQjtJQTZEaEMsWUFBb0IsRUFBbUI7UUFBbkIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUF4RDdCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFtRGxCLGdCQUFXLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFJL0IsQ0FBQztJQTlERCxJQUF3RCxPQUFPLENBQUMsT0FBbUI7UUFDakYsSUFBSSxPQUFPLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQzVDLENBQUM7SUFPRCxJQUNJLGFBQWEsQ0FBQyxhQUF1QjtRQUV2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxrQkFBa0IsR0FBRSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQ2Isa0JBQWtCLElBQUksZUFBZSxHQUFHLFlBQVksR0FBRyxPQUFPLENBQ2pFLENBQUM7UUFDRixrQkFBa0IsSUFBSSxLQUFLLENBQUE7UUFDM0IscURBQXFEO1FBQ3JELDRCQUE0QjtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixHQUFJLGtCQUFrQixDQUFHO1FBQzlELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0MseUZBQXlGO1FBQ3pGLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsR0FBRyxFQUFFO1lBQ0gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDL0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2xDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztpQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7b0JBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RGO2dCQUNELDJGQUEyRjtnQkFDM0YsMERBQTBEO2dCQUMxRCxpRUFBaUU7Z0JBQ2pFLEdBQUc7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBU0ssYUFBYTs7WUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGVBQWU7Z0JBQ2YsZ0hBQWdIO2dCQUNoSCxpQkFBaUI7Z0JBQ2pCLEdBQUc7YUFDSixDQUFDLENBQUM7WUFDSCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztnQkFDeEIsVUFBVSxFQUFFO2dCQUNWLFFBQVE7Z0JBQ1IsK0NBQStDO2lCQUNoRDthQUNGLENBQUMsQ0FBQztZQUVILElBQUk7Z0JBQ0YsNkhBQTZIO2dCQUU3SCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxDQUFDO29CQUNsQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsdURBQXVEO2lCQUM5RSxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztnQkFDOUMsMkNBQTJDO2dCQUMzQyx3Q0FBd0M7Z0JBQ3hDLHdDQUF3QztnQkFDeEMsMENBQTBDO2dCQUMxQyx1Q0FBdUM7Z0JBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQzVDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFFO2dCQUNqQyxNQUFNLHdCQUF3QixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEQsd0JBQXdCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFELHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzNDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7Z0JBQ2pELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLFVBQVUsRUFBRSx5Q0FBeUMsRUFBRSxDQUFDO2dCQUMzRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUc3QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUcxQixtR0FBbUc7Z0JBQ25HLHNCQUFzQjtnQkFDdEIsOEJBQThCO2dCQUM5QixLQUFLO2FBQ047WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxLQUFLLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDckM7UUFFSCxDQUFDO0tBQUE7SUFFRCxRQUFRO0lBR1IsQ0FBQzs7a0hBN0hVLHFCQUFxQjtzR0FBckIscUJBQXFCLHVRQU50Qjs7R0FFVDsyRkFJVSxxQkFBcUI7a0JBUmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOztHQUVUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGO3NHQUd5RCxPQUFPO3NCQUE5RCxTQUFTO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHeEMsU0FBUztzQkFBbEIsTUFBTTtnQkFPSCxhQUFhO3NCQURoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9XZWJNYXBcIjtcbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuaW1wb3J0IGVzcmlDb25maWcgZnJvbSBcIkBhcmNnaXMvY29yZS9jb25maWdcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgQmFzZW1hcCBmcm9tIFwiQGFyY2dpcy9jb3JlL0Jhc2VtYXBcIjtcbmltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuaW1wb3J0IHsgU2ltcGxlRmlsbFN5bWJvbCwgU2ltcGxlTGluZVN5bWJvbCwgVGV4dFN5bWJvbCB9IGZyb20gJ0BhcmNnaXMvY29yZS9zeW1ib2xzJztcbmltcG9ydCBDb2xvciBmcm9tICdAYXJjZ2lzL2NvcmUvQ29sb3InO1xuaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuaW1wb3J0IHsgWWFhcmFudXRTZXJ2aWNlIH0gZnJvbSAnLi4veWFhcmFudXQuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1TZWVkc0NvbGxlY3QnLCAgIFxuICB0ZW1wbGF0ZTogYHp6enp6MjIyXG4gICAgPGRpdiAjbWFwVmlld1NlZWRzQ29sbGVjdCBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OiAxMDAlO2JhY2tncm91bmQtY29sb3I6Z3JlZW5cIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF0gICBcbn0pXG5leHBvcnQgY2xhc3MgU2VlZHNDb2xsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdtYXBWaWV3U2VlZHNDb2xsZWN0JywgeyBzdGF0aWM6IHRydWUgfSkgc2V0IGNvbnRlbnQoY29udGVudDogRWxlbWVudFJlZikge1xuICAgIGlmIChjb250ZW50KSB7IHRoaXMubWFwVmlld0VsID0gY29udGVudDsgfVxuICB9XG4gIEBPdXRwdXQoKSBtYXBMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgbWFwVmlld0VsITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfU2VlZHNDb2xsZWN0czogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgXG4gIEBJbnB1dCgpXG4gIHNldCBzZWVkc0NvbGxlY3RzKFNlZWRzQ29sbGVjdHM6IHN0cmluZ1tdKSB7XG4gICAgIFxuICAgIHRoaXMuX1NlZWRzQ29sbGVjdHMgPSBTZWVkc0NvbGxlY3RzO1xuICAgXG4gICAgaWYgKHRoaXMuZmlyc3RUaW1lKSB7XG4gICAgICB0aGlzLmZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbml0aWFsaXplTWFwKCk7XG4gICAgfVxuICAgIGxldCBTZWVkc0NvbGxlY3RzV2hlcmUgPVwiXCJcbiAgICB0aGlzLl9TZWVkc0NvbGxlY3RzLmZvckVhY2goXG4gICAgICBTZWVkc0NvbGxlY3QgPT5cbiAgICAgICAgU2VlZHNDb2xsZWN0c1doZXJlICs9IFwiR2xvYmFsSURfMiA9J1wiICsgU2VlZHNDb2xsZWN0ICsgXCInIG9yIFwiXG4gICAgKTtcbiAgICBTZWVkc0NvbGxlY3RzV2hlcmUgKz0gXCIxPTJcIlxuICAgIC8vYWxlcnQoXCJHbG9iYWxJRF8yIGluIChcIiArIFNlZWRzQ29sbGVjdHNXaGVyZSArIFwiKVwiKVxuICAgIC8vYWxlcnQoU2VlZHNDb2xsZWN0c1doZXJlKTtcbiAgICB0aGlzLmZlYXRlckxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gIFNlZWRzQ29sbGVjdHNXaGVyZSAgO1xuICAgIGFsZXJ0KHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24pO1xuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiR2xvYmFsSURfMiA9J1wiICsgdGhpcy5fU2VlZHNDb2xsZWN0c1swXSArIFwiJ1wiO1xuICAgIC8vdGhpcy5mZWF0ZXJMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IFwiMT0xXCI7XG4gICAgdGhpcy5mZWF0ZXJMYXllci53aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZmVhdGVyTGF5ZXIuY3JlYXRlUXVlcnkoKTtcbiAgICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHRoaXMubWFwVmlldy5zcGF0aWFsUmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmZlYXRlckxheWVyLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICByZXNwb25zZS5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXh6eiA9IFwiRGZnZFwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mZWF0ZXJMYXllci5xdWVyeUV4dGVudChxdWVyeSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXh0ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmV4dGVudC5zcGF0aWFsUmVmZXJlbmNlID0gdGhpcy5tYXBWaWV3LnNwYXRpYWxSZWZlcmVuY2U7XG4gICAgICAgICAgICAgIHRoaXMubWFwVmlldy5nb1RvKHJlc3BvbnNlLmV4dGVudCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdmFyIEVzcmlQd29lckJ5ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXNyaS11aSBjYWxjaXRlLXRoZW1lLWxpZ2h0XCIpO1xuICAgICAgICAgICAgLy9mb3IgKGxldCBpID0gMDsgaSA8IEVzcmlQd29lckJ5ZWxlbWVudHMubGVuZ3RoOyBpKyspIHsgIFxuICAgICAgICAgICAgLy8gIEVzcmlQd29lckJ5ZWxlbWVudHNbaV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gIH1cbiAgZ2V0IHNlZWRzQ29sbGVjdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9TZWVkc0NvbGxlY3RzO1xuICB9XG5cbiAgcHVibGljIGZlYXRlckxheWVyOiBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKCk7XG4gIHB1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB5czogWWFhcmFudXRTZXJ2aWNlKSB7XG5cblxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZU1hcCgpIHtcbiAgICBjb25zdCB3ZWJNYXAgPSBuZXcgV2ViTWFwKHtcbiAgICAgIGJhc2VtYXA6IFwidG9wb1wiLFxuICAgICAgLy9wb3J0YWxJdGVtOiB7XG4gICAgICAvLyAgLy91cmw6XCJodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL3V0Tk5ybVhiNElaT0xYWHMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSk5GSUxGb3Jlc3QvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5XCJcbiAgICAgIC8vICBpZDogXCJzdHJlZXRzXCJcbiAgICAgIC8vfVxuICAgIH0pO1xuICAgIGxldCBiYXNlbWFwID0gbmV3IEJhc2VtYXAoe1xuICAgICAgcG9ydGFsSXRlbToge1xuICAgICAgICAvL3VybDpcIlwiXG4gICAgICAgIC8vaWQ6IFwic3RyZWV0c1wiICAvLyBXR1M4NCBTdHJlZXRzIFZlY3RvciB3ZWJtYXBcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvL2VzcmlDb25maWcuYXBpS2V5ID0gXCJBQVBLOWEzZjU1YzM4MGY5NGQxYmIxMGE3NTY2YzdiMzJmOTQxWF9wY1pLWG1XWTdHcmpzNm9BOUFxdWZzREhydlJEWWFPbFVHOGd2eUQ1Zmhadi1PR1l5SWdYRU8taWh1TzRUXCI7XG5cbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IHRoaXMueXMuYXBpVXJsICsgXCIvQXJjR0lTL3Jlc3Qvc2VydmljZXMvU2VlZENvbGxlY3QyMDIxL0ZlYXR1cmVTZXJ2ZXIvMFwiXHJcbiAgICAgIH0pOyBcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAgIHRoaXMuZmVhdGVyTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBcIjE9MlwiO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLmRpc3BsYXlGaWVsZCA9IFwiRk9SX05PXCI7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGFiZWxzVmlzaWJsZSA9IHRydWU7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIubGVnZW5kRW5hYmxlZCA9IHRydWU7XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIub3V0RmllbGRzID0gW1wiRk9SX05PXCJdO1xuICAgICAgLy90aGlzLmZlYXRlckxheWVyLnBvcHVwRW5hYmxlZCA9IHRydWU7XG4gICAgICBjb25zdCBmZWF0ZXJSZW5kZXJlciA9IG5ldyBTaW1wbGVSZW5kZXJlcigpO1xuICAgICAgZmVhdGVyUmVuZGVyZXIubGFiZWwgPSBcIntTaXRlfVwiIDtcbiAgICAgIGNvbnN0IHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKCk7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tU3RyaW5nKFwiZ29sZFwiKTtcbiAgICAgIHBvbHlnb25zU2ltcGxlRmlsbFN5bWJvbC5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbVN0cmluZyhcImJsdWVcIik7XG4gICAgICBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2wub3V0bGluZS53aWR0aCA9IDI7XG4gICAgICBmZWF0ZXJSZW5kZXJlci5zeW1ib2wgPSBwb2x5Z29uc1NpbXBsZUZpbGxTeW1ib2w7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0gbmV3IExhYmVsQ2xhc3MoKTtcbiAgICAgIGxhYmVsQ2xhc3MubGFiZWxFeHByZXNzaW9uSW5mbyA9IHsgZXhwcmVzc2lvbjogXCIkZmVhdHVyZS5TaXRlICsgJywnICsgICRmZWF0dXJlLkhlYk5pYyBcIiB9O1xuICAgICAgdGhpcy5mZWF0ZXJMYXllci5sYWJlbGluZ0luZm8gPSBbbGFiZWxDbGFzc107XG4gICAgICAvL3RoaXMuZmVhdGVyTGF5ZXIucmVuZGVyZXIgPSBmZWF0ZXJSZW5kZXJlcjtcbiAgICAgIHdlYk1hcC5hZGQodGhpcy5mZWF0ZXJMYXllcik7XG5cblxuICAgICAgdGhpcy5tYXBWaWV3LmNvbnRhaW5lciA9IHRoaXMubWFwVmlld0VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLm1hcFZpZXcubWFwID0gd2ViTWFwO1xuXG5cbiAgICAgIC8vKGF3YWl0IG1hcFZpZXcud2hlbkxheWVyVmlldyhmZWF0ZXJMYXllcikpLmZpbHRlci53aGVyZSA9IFwiR2xvYmFsSUQgPSAnXCIgKyB0aGlzLl9maWx0ZXJbMF0gKyBcIidcIjtcbiAgICAgIC8vbWFwVmlldy53aGVuKCgpID0+IHtcbiAgICAgIC8vICB0aGlzLm1hcExvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgLy99KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoJ1dlIGhhdmUgYW4gZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuXG4gIH1cblxufVxuIl19