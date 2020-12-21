

exports.handler = async (event) => {
    const {query} = JSON.parse(event.body)
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*"
     }, 
        body: JSON.stringify(`Hello from Lambda with! ${query}`),
    };
    return response;
};
