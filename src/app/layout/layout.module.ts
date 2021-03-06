import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutRoutingModule,
    ],
    declarations: [
        LayoutComponent,
    ]
})
export class LayoutModule { }
