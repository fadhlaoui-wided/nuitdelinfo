import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecherchesService {
 
  endpont  ="http://localhost:8080/"

constructor(private http: HttpClient) { }
getAllEntity(entityName): Observable<any> {  
  return this.http.get(this.endpont+entityName.toString());
}
 
}
