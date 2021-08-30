import { Component } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import * as i0 from "@angular/core";
//import MapView from "@arcgis/core/views/MapView";
//import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//import Basemap from "@arcgis/core/Basemap";
//import LabelClass from "@arcgis/core/layers/support/LabelClass";
//import { SimpleFillSymbol, SimpleLineSymbol, TextSymbol } from '@arcgis/core/symbols';
//import Color from '@arcgis/core/Color';
//import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
export class KklWorkUnitComponent {
    constructor() {
        this.mapView = new MapView();
    }
    ngOnInit() {
    }
}
KklWorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KklWorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: KklWorkUnitComponent, selector: "lib-KklWorkUnit", ngImport: i0, template: `
    <p>
      kkl-work-unit works12345!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-KklWorkUnit',
                    template: `
    <p>
      kkl-work-unit works12345!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXdvcmstdW5pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtd29yay11bml0L3NyYy9saWIva2tsLXdvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLE9BQU8sTUFBTSw0QkFBNEIsQ0FBQzs7QUFDakQsbURBQW1EO0FBQ25ELDhEQUE4RDtBQUM5RCw2Q0FBNkM7QUFDN0Msa0VBQWtFO0FBQ2xFLHdGQUF3RjtBQUN4Rix5Q0FBeUM7QUFDekMscUVBQXFFO0FBWXJFLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0I7UUFGTyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2lIQVBVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHVEQVJyQjs7OztHQUlUOzJGQUlVLG9CQUFvQjtrQkFWaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBNYXBWaWV3IGZyb20gXCJAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlld1wiO1xuLy9pbXBvcnQgTWFwVmlldyBmcm9tIFwiQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXdcIjtcbi8vaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbi8vaW1wb3J0IEJhc2VtYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9CYXNlbWFwXCI7XG4vL2ltcG9ydCBMYWJlbENsYXNzIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvTGFiZWxDbGFzc1wiO1xuLy9pbXBvcnQgeyBTaW1wbGVGaWxsU3ltYm9sLCBTaW1wbGVMaW5lU3ltYm9sLCBUZXh0U3ltYm9sIH0gZnJvbSAnQGFyY2dpcy9jb3JlL3N5bWJvbHMnO1xuLy9pbXBvcnQgQ29sb3IgZnJvbSAnQGFyY2dpcy9jb3JlL0NvbG9yJztcbi8vaW1wb3J0IFNpbXBsZVJlbmRlcmVyIGZyb20gJ0BhcmNnaXMvY29yZS9yZW5kZXJlcnMvU2ltcGxlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItS2tsV29ya1VuaXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAga2tsLXdvcmstdW5pdCB3b3JrczEyMzQ1IVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgS2tsV29ya1VuaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBtYXBWaWV3ID0gbmV3IE1hcFZpZXcoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==