
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// api to upload video



    export const uploadAllVideo =async (reqBody)=>{
        return await commonAPI('POST',`${serverURL}/videos`,reqBody)
    }


// api to get all video

export const getAllVideos = async()=>{
     return await commonAPI('GET',`${serverURL}/videos`,"")
}



// api to delete the video
export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}



// api to add watch history
export const addHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// api to get watch history
export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to add category
export const addCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

// api to fetch the category data
export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

// api to delete history
export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


// api to get a video 
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}


// api call to u[pdate the category

export const updateCategory = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}

