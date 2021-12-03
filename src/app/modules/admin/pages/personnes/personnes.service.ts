import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
 
  endpont  ="http://localhost:8080/"
   image : any ;
  constructor(private http: HttpClient) { }
  getAllPersonnes(): Observable<any> {  
    return this.http.get(this.endpont+"Personnes");
  }
  deleteOnePersonnes(key) : any{ 
    return this.http.delete(this.endpont+"delete/"+key.toString())
  }
  insirtOnePersonnes(data): any{
  
    return this.http.post(this.endpont+"addPersonne" ,data)
  }
  updateOnePersonnes(key,data): any{
     
    data.id  =  key ;
    return this.http.put(this.endpont+"update/"+key.toString(),data)
    
  }

   
}
