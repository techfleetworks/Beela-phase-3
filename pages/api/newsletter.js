import axios from "axios";

//passes on email to add it to the data object and all other info
function getRequestParams(email) {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  
    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  
    //data object with all the data that will be needed to post to mailchimp
    const data = {
      email_address: email,
      status: "subscribed",
    };

    //basic encryption for mailchimp
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    //the server headers are created.
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64ApiKey}`,
    };
  
    //returns the URL to where the DATA is going, and of course its server HEADER 
    return { url, data, headers };
}  


//takes in the api request.
export default async function handler (req, res) {
    const {email} = req.body;

    if(!email || !email.length){
        return res.status(400).json({
            error: "Forgot to add your email?"
            })
    }

    try{
        const {url,data,headers} = getRequestParams(email);
        const response = await axios.post(url, data, {headers});


        return res.status(200).json({error:null})
    } catch(error){
        return res.status(400).json({error: "Oops something went wrong"})
    }
    
}