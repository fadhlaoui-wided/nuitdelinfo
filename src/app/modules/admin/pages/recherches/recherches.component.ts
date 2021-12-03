
import { Component, enableProdMode, Input, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { RecherchesService } from "./recherches.service";
import { ActivatedRoute } from '@angular/router';



@Component({
    selector     : 'Recherches',
    templateUrl  : './Recherches.component.html',
    styleUrls: ['./Recherches.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RecherchesComponent implements OnInit
{   

  personnes;
  bateaux;
  typesb =  [
    {id : 0 , description :"sauvetage"},
    {id : 1 , description :"sauvé" },
  ]
  typesp =  [
    {id : 0 , description :"sauvteur"},
    {id : 1 , description :"victime" },
  ]
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

    constructor (
      private Rechercheservice:RecherchesService,
   
      private route: ActivatedRoute ){
 
      //data source employee
      this.personnes = new CustomStore({
        key: "id",
        load: () => this.sendRequest("Personnes","GET"),
   
       });
      this.bateaux = new CustomStore({
        key: "id",
        load: () => this.sendRequest("Bateaus","GET"),
   
       });
    }
    sendRequest( e,m , data: any = {}) : any { 
      let enity  = e ;
      let result ;
      let method = m ;
      switch(method) {
        case "GET":
            result = this.Rechercheservice.getAllEntity(enity);
            break;
   
          //  notify({ message: 'The "' + e + '"  was'+ 'deleted', width: 320 }, "success", 1000)
            break;
    }
      return result
      .toPromise()
      .then((data: any) => {
        return method === "GET" ? data : data;
      })
      .catch(e => {
          throw e && e.error && e.error.Message;
      });
    }

 

    ngOnInit(): void {

   
    }

    onUploaded(e){
      this.grid.instance.refresh();      
     }
   



} 
   