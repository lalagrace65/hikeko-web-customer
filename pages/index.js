import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Feature } from "@/models/Feature";
import SearchBar from "@/components/SearchBar";
import NewTrailList from "@/components/NewTrailList";
import { Trails } from "@/models/Trail";
import { useEffect,useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function HomePage({feature, newTrailData}){
  console.log({newTrailData});
  
  const [userLocation, setUserLocation] = useState();
  useEffect(() => {
    getUserLocation();
  },[]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    });
  };

  return(
    <div>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <Header/>
        <SearchBar />
        <Featured feature={feature}/>
          <NewTrailList trails={newTrailData} />
      </UserLocationContext.Provider>
    </div>
  );
}

export async function getServerSideProps(){
  const featuredProductId ='66c9e7dcc26604328135007d';
  await mongooseConnect();
  const feature = await Feature.findById(featuredProductId);
  const newTrailData = await Trails.find({}, null, { sort: {'_id':-1}, limit:10});
  return{
    props: {
      feature: JSON.parse(JSON.stringify(feature)),
      newTrailData: JSON.parse(JSON.stringify(newTrailData)),
    },
    };
}