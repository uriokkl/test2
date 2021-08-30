import { Component } from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import * as i0 from "@angular/core";
export class KklWorkUnitComponent {
    constructor() {
        this.mapView = new MapView();
    }
    ngOnInit() {
    }
}
KklWorkUnitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KklWorkUnitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: KklWorkUnitComponent, selector: "lib-KklWorkUnit", ngImport: i0, template: `aaaa
  <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
zzzz`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: KklWorkUnitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-KklWorkUnit',
                    template: `aaaa
  <div #mapViewNode style="width:400px;height: 400px;background-color:yellow"></div>
zzzz`,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXdvcmstdW5pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtd29yay11bml0L3NyYy9saWIva2tsLXdvcmstdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLE9BQU8sTUFBTSw0QkFBNEIsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFGTyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2lIQVJVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHVEQU5yQjs7S0FFUDsyRkFJUSxvQkFBb0I7a0JBUmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOztLQUVQO29CQUNILE1BQU0sRUFBRSxFQUNQO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IE1hcFZpZXcgZnJvbSBcIkBhcmNnaXMvY29yZS92aWV3cy9NYXBWaWV3XCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IEJhc2VtYXAgZnJvbSBcIkBhcmNnaXMvY29yZS9CYXNlbWFwXCI7XG5pbXBvcnQgTGFiZWxDbGFzcyBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9zdXBwb3J0L0xhYmVsQ2xhc3NcIjtcbmltcG9ydCB7IFNpbXBsZUZpbGxTeW1ib2wsIFNpbXBsZUxpbmVTeW1ib2wsIFRleHRTeW1ib2wgfSBmcm9tICdAYXJjZ2lzL2NvcmUvc3ltYm9scyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnQGFyY2dpcy9jb3JlL0NvbG9yJztcbmltcG9ydCBTaW1wbGVSZW5kZXJlciBmcm9tICdAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL1NpbXBsZVJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLUtrbFdvcmtVbml0JyxcbiAgdGVtcGxhdGU6IGBhYWFhXG4gIDxkaXYgI21hcFZpZXdOb2RlIHN0eWxlPVwid2lkdGg6NDAwcHg7aGVpZ2h0OiA0MDBweDtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvd1wiPjwvZGl2Plxuenp6emAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEtrbFdvcmtVbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBcbiAgcHVibGljIG1hcFZpZXcgPSBuZXcgTWFwVmlldygpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19