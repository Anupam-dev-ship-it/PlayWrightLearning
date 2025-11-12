
class APIUtils{

    constructor(requestContext,RequestPayload){
        this.requestContext = requestContext;
        this.RequestPayload = RequestPayload;
    }


    async getToken(){

        //const requestContext = await request.newContext();
          const loginResponse = await this.requestContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            
            
            {
                data: this.RequestPayload
            
            });
        //expect(loginResponse.ok()).toBeTruthy();
        const loginResponsePayload =  await loginResponse.json();
       const  token = loginResponsePayload.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayload){
        
        let response = {}; 
        response.token = await this.getToken();  

const orderResponse = await this.requestContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    
    {

data: orderPayload,
headers: {
    'Authorization': response.token,
    'Content-Type': 'application/json'
}
})
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson);
 const orderid = orderResponseJson.orders[0];
 response.orderid = orderid;
 return response;
}
}
module.exports = {APIUtils};