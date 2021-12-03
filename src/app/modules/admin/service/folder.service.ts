import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {HttpEvent, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FolderService {



  
  constructor(private http:HttpClient) { }
 
  GetAllFolder():Observable<any>{
  //  return this.http.get('http://localhost:8329/api/TriSQR_Folder/getAllProjects');
    return this.http.get('http://193.95.82.10:8088/TriWebV2Trial/Api/dev/api/TriSQR_Folder/getAllProjects');
   // return this.http.get('http://localhost:8329/api/TriSQR_Folder');

  // http://localhost:8088/TriWebTrial/Api/devV2/api/TriSQR_Folder/getAllProjects
  }
  GetFollderById () :Observable <any> {
     //http://193.95.82.10:8088/TriWebV2Trial/Api/dev/api/TriSQR_Folder/44989
    return this.http.get("http://193.95.82.10:8088/TriWebV2Trial/Api/dev/api/TriSQR_Folder/44989");
  
  }
  GetAllsubFollderByIdFolder():Observable<any> {
    return this.http.get("http://193.95.82.10:8088/TriWebV2Trial/Api/dev/api/TriSQR_SubFolder/getSubFolderByProject_cde/?Id=44989");
  }

 

}
