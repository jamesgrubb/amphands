
const fetch = require('node-fetch')
exports.handler = async (event) => {
    
    const {query} = JSON.parse(event.body)
    

    const updateCount = await fetch('https://handcount.hasura.app/v1/graphql',{
        method:'POST',
        statusCode:200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            query:`
            mutation MyMutation {
                update_handcount(_inc: {hands: "${query}"}, where: {hands: {_gte: "0"}}) {
                  returning {
                    hands
                  }
                }
              }
              
              
            `,
            variables: {}
        }),
    }).then(res => res.json()).catch(err => console.log('error from the response to hasura' + err))   

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*"
     }, 
        body: JSON.stringify(updateCount),
    };
    return response;
};
