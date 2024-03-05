import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentSection from "../CommentSection";
import { getExtraPlantDetails } from "../../../utils/backend";
import waterlogo from "../../assets/water_droplet_icon.png";
export default function DetailsPage() {
  const { id } = useParams();
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      const data = await getExtraPlantDetails(id);
      setPlantDetails(data);
      console.log(data);
    };

    fetchPlantDetails();
  }, []);

  if (plantDetails) {
    return (
      <>
        <div className="mt-10 mx-5">
          <div className="bg-[#0F6359] rounded-lg shadow-md lg:flex md:flex ">
            <img
              className="object-cover w-full md:w-1/2 lg:w-1/3"
              src={plantDetails.imageUrl}
              alt="image"
            />
            <div className="px-6 py-4 text-white ">
              <h2 className="text-2xl xl:text-6xl font-semibold tracking-tight mb-3 ">
                {plantDetails.commonName
                  .split(" ")
                  .map((str) => str[0].toUpperCase() + str.substring(1))
                  .join(" ")}
              </h2>
              <h3 className="text-xl xl:text-4xl mb-5">
                '{plantDetails.scientificName}'
              </h3>
              <p className="mb-2 text-base xl:text-2xl leading-normal text-justify ">
                {plantDetails.description}
              </p>
            </div>
          </div>
        </div>

        <div className="care_guide mt-20 mx-5">
          <h2 className="font-bold text-[#0F6359] md:text-4xl text-xl ml-5 mb-10">
            Caring For Your{" "}
            {plantDetails.commonName
              .split(" ")
              .map((str) => str[0].toUpperCase() + str.substring(1))
              .join(" ")}
          </h2>
          <div className="grid gap-14 md:grid-cols-3 md:gap-5 mx-5 mb-5">
            <div className="rounded-xl p-6 text-center shadow-xl border-2 border-[#0F6359] flex flex-col bg-[#0F6359]">
              <h3 className="font-bold text-3xl text-white mb-3">Watering</h3>
              <p className="mt-2 text-left text-white text-base lg:text-lg">
                {plantDetails.wateringNotes}
              </p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-xl border-2 border-[#0F6359] flex flex-col bg-[#0F6359] ">
              <h3 className="font-bold text-3xl text-white mb-3">Sunlight</h3>
              <p className="mt-2 text-left text-white text-base lg:text-lg">
                {plantDetails.sunlightNotes}
              </p>
            </div>
            <div className="rounded-xl p-6 text-center shadow-xl border-2 border-[#0F6359] flex flex-col bg-[#0F6359]">
              <h3 className="font-bold text-3xl text-white mb-3">Pruning:</h3>
              <p className="mt-2 text-left text-white text-base lg:text-lg">
                {plantDetails.pruningNotes}
              </p>
            </div>
          </div>
        </div>

        <CommentSection plantDetails={plantDetails} plantId={id} />
      </>
    );
  }
  // return (
  //   <>
  //   {plantDetails ?

  //   <p>{plantDetails.common_name}</p>

  //   : <p>Loading</p>}
  //   <CommentSection plantId={id}/>
  //   </>
  // );
}
