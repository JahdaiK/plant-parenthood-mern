import axios from "axios";

//Non-Auth Requests
export async function getComments(plantId){
    const { data } = await axios.get(`/api/comments/${plantId}`)
    return data
}

//Authentication Requests


//Authorization requests