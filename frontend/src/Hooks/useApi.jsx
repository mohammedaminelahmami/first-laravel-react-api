import axios from "axios"

// store data
export const store = async (api, formData)=>{
    await axios.post(api, formData)
    return;
}

// get data
export const get = async(api, formData)=>{
    let response = await axios.get(api, formData);
    return response;
}