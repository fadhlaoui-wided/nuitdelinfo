
import { Component, enableProdMode, Input, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { BateausService } from "./bateaus.service";
import { ActivatedRoute } from '@angular/router';



@Component({
    selector     : 'bateaus',
    templateUrl  : './bateaus.component.html',
    styleUrls: ['./bateaus.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BateausComponent implements OnInit
{   
  //toast variable
  isVisible: boolean = false;
  type: string = "info";
  message: string = "  ";
  //datagrid 
  bateaus: any;   // bateaus :any; 
  types =  [
    {id : 0 , description :"sauvetage"},
    {id : 1 , description :"sauvé" },
  ]

  role =  localStorage.getItem('accessRole');
  show = false ;
  //validation
 
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

    constructor (
      private bateauservice:BateausService,
   
      private route: ActivatedRoute ){
 
        if( this.role ==  "1" ) {
          this.show = true ; 
        }
      //data source employee
      this.bateaus = new CustomStore({
     
        key: "id",
        load: () => this.sendRequest("GET",{}),
        insert: (values) => this.sendRequest("POST", {
          values: values
        }),
        update: (key, values) => this.sendRequest( "PUT", {
            key: key,
            values: values
        }),
        remove: (key) => this.sendRequest("DELETE", {
            key: key
        })    
       });
    }

 
 // funtion pour les cruds parmam (methode , data)
 sendRequest( m , data: any = {} ) : any { 
    let  result ;
    let method = m ;
    switch(method) {
      case "GET":
          result = this.bateauservice.getAllBateaus();
          break;
      case "PUT":
          result = this.bateauservice.updateOneBateaus(data.key ,data.values)
          break;
      case "POST":
          result = this.bateauservice.insirtOneBateaus(data.values)
          break;
      case "DELETE":
          result = this.bateauservice.deleteOneBateaus(data.key)
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
   