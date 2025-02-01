import axios from "axios";
const fetchAlbums= async(
    {title}
)=>{
    let url="";
    if(title==="Top Albums"){
        url="https://qtify-backend-labs.crio.do/albums/top"
    }
    console.log(url);

    try {
        const response=await axios.get(url);
        console.log(response.data);
        return response.data
        
    } catch (error) {
        
    }
}

export default fetchAlbums;