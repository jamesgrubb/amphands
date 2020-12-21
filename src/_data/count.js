const fetch = require('node-fetch')
module.exports = () =>{
async function getCount(){
    const count = await fetch('https://handcount.hasura.app/v1/graphql',{
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            query:`
            query MyQuery {
                handcount {
                  hands
                }
              }
              
            `,
            variables: {}
        })
    }).then(res => res.json()).catch(err => console.log('fetch error'+ err))
    console.log(count.data.handcount[0])
    return count.data.handcount
    
}
return getCount()
}