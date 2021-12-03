
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DevExtremeModule } from 'devextreme-angular';
import { BateausComponent } from './bateaus.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

const BateausRoutes: Route[] = [
    {
        path : '',component: BateausComponent
    }
];

@NgModule({
    declarations: [
        BateausComponent,
   
       
    ],
    imports     : [
        RouterModule.forChild(BateausRoutes),
        DevExtremeModule,
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatMenuModule,
       
    ]
})
export class bateausModule
{
}
