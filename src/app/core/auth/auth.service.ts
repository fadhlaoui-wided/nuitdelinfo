import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { user } from 'app/mock-api/common/user/data';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;
    
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _JwtHelper :JwtHelperService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    set accessUseremail(  accessUserpassword : any)
    {
        localStorage.setItem('accessUseremail', accessUserpassword);
    }

    get accessUseremail(): any
    {
        return localStorage.getItem('accessUseremail') ?? '';
    }
    set accessUserpassword(  accessUserpassword : any)
    {
        localStorage.setItem('accessUserpassword', accessUserpassword);
    }
    
    get accessUserpassword(): any
    {
        return localStorage.getItem('accessUserpassword') ?? '';
    }
    
    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }
  /**
     * Setter & getter for access role user
     */
    set accessRole(role: string)
    {
        localStorage.setItem('accessRole', role);
    }

    get accessRole(): string
    {
        return localStorage.getItem('accessRole') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any>
    {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
     signIn(credentials: { email: string; password: string }): Observable<any>
    
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated == true &&  this._JwtHelper.isTokenExpired(this.accessToken) == false )
        { 
            
            return throwError('User is already logged in.');
        }
        console.log (credentials)
         
        return this._httpClient.post('http://localhost:8080/auth/login', credentials).pipe(
            switchMap((response: any) => {
                
                console.log(response)
                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Store the access role in the local storage
              
                 this.accessRole = response.role;
             

                 this.accessUseremail     = response.user.email;
                 this.accessUserpassword = response.user.password;
                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response

                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken( token : any): Observable<any>
    {
        //endpont  ="https://localhost:5001/"
        console.log (  this.accessUseremail )
        console.log ( this.accessUserpassword)

 
        return this._httpClient.post('http://localhost:8080/auth/loginToken',{ email:  this.accessUseremail , password:  this.accessUserpassword })
        .pipe(
            switchMap((response: any) => {

                this.accessToken = response.accessToken;

                // Store the access role in the local storage
              
                 this.accessRole = response.role;
             

                 this.accessUseremail     = response.user.email;
                 this.accessUserpassword = response.user.password;
                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
     check(): Observable<boolean>
     {
          // Check the access token availability
          if ( this.accessToken =='' || this.accessToken === "undefined" )
          {
              return of(false);
          }
  
          // Check the access token expire date
          if ( this._JwtHelper.isTokenExpired(this.accessToken))
          { 
              return of(false);
          }
 
         // Check if the user is logged in
         if ( this._authenticated == true && !this._JwtHelper.isTokenExpired(this.accessToken))
         {
             return of(true);
         }
 
 
         
         // If the access token exists and it didn't expire, sign in using it
         if (this._authenticated == false && this._JwtHelper.isTokenExpired(this.accessToken) == false){
             let res  =  this.signInUsingToken(this.accessToken);
             return  res;
         }
     }
}
