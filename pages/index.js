import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Feature } from "@/models/Feature";
import SearchBar from "@/components/SearchBar";
import GoogleMap from "@/components/GoogleMap";


export default function HomePage({feature}){
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Add search logic here
  };

  const handleLocateMe = (latitude, longitude) => {
    console.log("Located at:", latitude, longitude);
    // Add logic to use the located position
  };
  
  return(
    <div>
      <Header/>
      <SearchBar onSearch={handleSearch} onLocateMe={handleLocateMe} />
      <Featured feature={feature}/>
      <GoogleMap/>
    </div>
  );
}

export async function getServerSideProps(){
  const featuredProductId ='66c9e7dcc26604328135007d';
  await mongooseConnect();
  const feature = await Feature.findById(featuredProductId);
  return{
    props: {feature: JSON.parse(JSON.stringify(feature))},
  };
}