
import { Component, enableProdMode, Input, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { PersonnesService } from "./personnes.service";
import { ActivatedRoute } from '@angular/router';



@Component({
    selector     : 'personnes',
    templateUrl  : './personnes.component.html',
    styleUrls: ['./personnes.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonnesComponent implements OnInit
{   
  //toast variable
  isVisible: boolean = false;
  type: string = "info";
  message: string = "  ";
  //datagrid 
  personnes: any;   // personnes :any; 
  types =  [
    {id : 0 , description :"sauvteur"},
    {id : 1 , description :"victime" },
  ]
  //validation
  role =  localStorage.getItem('accessRole');
  show = false ;
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

    constructor (
      private personneservice:PersonnesService,
   
      private route: ActivatedRoute ){
        if( this.role ==  "1" ) {
          this.show = true ; 
        }
      //data source employee
      this.personnes = new CustomStore({
     
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
          result = this.personneservice.getAllPersonnes();
          break;
      case "PUT":
          result = this.personneservice.updateOnePersonnes(data.key ,data.values)
          break;
      case "POST":
          result = this.personneservice.insirtOnePersonnes(data.values)
          break;
      case "DELETE":
          result = this.personneservice.deleteOnePersonnes(data.key)
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
   