import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BateausService {
 
  endpont  ="http://localhost:8080/"
   image : any ;
  constructor(private http: HttpClient) { }
  getAllBateaus(): Observable<any> {  
    return this.http.get(this.endpont+"Bateaus");
  }
  deleteOneBateaus(key) : any{ 
    return this.http.delete(this.endpont+"deleteBateaus/"+key.toString())
  }
  insirtOneBateaus(data): any{
  
    return this.http.post(this.endpont+"addBateau" ,data)
  }
  updateOneBateaus(key,data): any{
     
    data.id  =  key ;
    return this.http.put(this.endpont+"updateBateaus/"+key.toString(),data)
    
  }

   
}
