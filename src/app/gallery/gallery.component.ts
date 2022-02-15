import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IGallery } from '../models/gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() gallery: IGallery[];

  @Output() imageClicked = new EventEmitter<IGallery>();

  onImgLoaded(image: IGallery): void {
    image.isLoaded = true;
  }

  onImageClick(image: IGallery): void {
    this.imageClicked.emit(image);
  }
}
