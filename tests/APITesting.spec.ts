import { test ,expect} from '@playwright/test';
import { RequestsManager } from '../requests/requestsManager';
const bodyPayload = require("../fixtures/apiUser.json") 
//The Payload is being passed in a fixture file.


test("post api testing",async ({request})=>{
    
    //RequestManager object
    const req = new RequestsManager(request)
    //Performing the API Call
    const response = await req.onAuthLoginApi().authenticationRequest(bodyPayload)
 
    //Validating responses.
    await expect(response.response.status()).toBe(200)//Validating http status
    await expect(response.jsonResponse.message).toBeTruthy()//validating that the response parameter is valid
    await expect(response.jsonResponse.authorization).toBeTruthy()

    await expect(req.onAuthLoginApi().unauthorizedResponseExample).toEqual(response.jsonResponse)
    req.onAuthLoginApi().responseExample
})

