import { APIRequestContext } from "@playwright/test";
import { AuthLoginApi } from "./authLoginApi";

export class RequestsManager{

    private readonly requestContext: APIRequestContext
    private readonly authLoginApi: AuthLoginApi 

    //Each Endpoint class have to be taked as argument of the RequestManager and added in the constructor
    constructor(request: APIRequestContext){
        this.requestContext = request
        this.authLoginApi = new AuthLoginApi(request)
    }

    onAuthLoginApi(){ //Function that handle the endpoint object
        return this.authLoginApi
    }
      
}