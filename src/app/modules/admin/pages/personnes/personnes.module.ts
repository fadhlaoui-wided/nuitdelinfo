
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DevExtremeModule } from 'devextreme-angular';
import { PersonnesComponent } from './personnes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

const PersonnesRoutes: Route[] = [
    {
        path : '',component: PersonnesComponent
    }
];

@NgModule({
    declarations: [
        PersonnesComponent,
   
       
    ],
    imports     : [
        RouterModule.forChild(PersonnesRoutes),
        DevExtremeModule,
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatMenuModule,
       
    ]
})
export class PersonnesModule
{
}
