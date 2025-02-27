import { useOutletContext } from "react-router-dom";
import Section from "../../components/section/section"
import Hero from "../../components/Hero/Hero";

function HomePage(){
    const {data}=useOutletContext();
    console.log("homepage");
    console.log(data);
    const{topAlbums,newAlbums,songs,genres}=data;
    return(
        <>
        <Hero/>
        <div>
        <Section
        data={topAlbums}
        title="Top Albums"
        />
        <Section
        data={newAlbums}
        title="New Albums"
        />
        <Section
        data={songs}
        title="Songs"
        genres={genres}

        />
        </div>
        </>
        
        
    )
}

export default HomePage;
