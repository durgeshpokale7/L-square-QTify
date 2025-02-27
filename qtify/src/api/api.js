import axios from "axios";
const fetchAlbums= async(
    title
)=>{
    let url="";
    if(title==="Top Albums"){
        url="https://qtify-backend-labs.crio.do/albums/top"
    }else if(title==="New Albums"){
        url="https://qtify-backend-labs.crio.do/albums/new"

    }else if(title==="Songs"){
        url="https://qtify-backend-labs.crio.do/songs"

    }else if(title==="genres"){
        url="https://qtify-backend-labs.crio.do/genres"

    }
    

    try {
        const response=await axios.get(url);
        return response.data
        
    } catch (error) {
        
    }
}

export default fetchAlbums;