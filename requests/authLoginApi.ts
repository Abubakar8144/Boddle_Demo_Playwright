import { APIRequestContext } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config()
const endpoint = process.env.AUTH_ENDPOINT

export class AuthLoginApi {

    readonly requestContext: APIRequestContext
    readonly payloadExample: any
    readonly responseExample: any
    readonly unauthorizedResponseExample: any

    constructor(request){
        this.requestContext = request
        this.payloadExample = {
            "email": "user@user.com",
            "password": "test"
          }
        this.responseExample = {
            "message": "Successful login",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFudGhhMTJAZXhhbXBsZS5vcmciLCJwYXNzd29yZCI6Il5PbCUjQ0ZwYzQiLCJpYXQiOjE3MTYxNTExMzQsImV4cCI6MTcxNjE1MTczNH0.ARCD3tdQUeuiUroE8TIgGnzmteA7XXl7dMEwOUw4UDA"
        }
        this.unauthorizedResponseExample = {
            "message": "Invalid Email or Password"
        }
    }

    
    async authenticationRequest(bodyPayload){

        const response = await this.requestContext.post(`${endpoint}`,{
            data:bodyPayload
        })
        const jsonResponse =  await response.json()
        const token = jsonResponse.authorization

        return {token,response,jsonResponse}
  
    }
}