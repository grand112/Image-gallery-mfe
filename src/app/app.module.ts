import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    GalleryComponent,
  ],
  imports: [ BrowserModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const imageGalleryElement = createCustomElement(GalleryComponent, { injector: this.injector });
    customElements.define('gallery-editor', imageGalleryElement);

    const wrapperElement = createCustomElement(WrapperComponent, { injector: this.injector });
    customElements.define('gallery-wrapper', wrapperElement);
  }
}
