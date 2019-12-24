import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercioRoutingModule } from './comercio-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { VistaRapidaComponent } from './vista-rapida/vista-rapida.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPrintModule } from 'ngx-print';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [ProductosComponent, VistaRapidaComponent, DetalleProductoComponent, CarritoComponent],
  imports: [
    CommonModule,
    ComercioRoutingModule,
    CarouselModule,
    NgbModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule.forRoot()
  ],
  providers: [NgbActiveModal,ProductsService]
})
export class ComercioModule { }
