// crate async function

async function getMovie() {
    // send request to receive data and store it
 try {
    const response = await fetch ('https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912')
   
     if (!response.ok )
     {
        throw new Error (`HTTP status error ${response.status}`)
     }
    // convert the response into json and stor to a variable

     const data = await response.json()
     console.log(data)
    }
 catch (error) {
     console.error("SOMETHING GONE WRONG" )
    }
    // log it in the console 
    
}

getMovie()