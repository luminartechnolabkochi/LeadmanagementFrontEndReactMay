import axios from "axios"

let baseUrl="http://127.0.0.1:8000/api/leads/"


export async function leadCreateApi(data){

    return await axios.post(baseUrl,data)
}