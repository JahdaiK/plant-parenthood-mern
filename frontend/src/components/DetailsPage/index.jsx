import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentSection from "../CommentSection";
import { getExtraPlantDetails } from "../../../utils/backend";

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
        <div className="details_container flex">
          <div className="image_wrapper mt-5 ml-10">
            <img
              src={plantDetails.imageUrl}
              alt={plantDetails.commonName
                .split(" ")
                .map((str) => str[0].toUpperCase() + str.substring(1))
                .join(" ")}
            />
          </div>
          <div className="plant_details mt-5 ml-10">
            <div>
              <h1 className="font-bold text-4xl">
                {plantDetails.commonName
                  .split(" ")
                  .map((str) => str[0].toUpperCase() + str.substring(1))
                  .join(" ")}
              </h1>
              <h3 className="text-xl">'{plantDetails.scientificName}'</h3>
              <p>{plantDetails.description}</p>
              <ul>
                <li>Care Level: {plantDetails.careLevel}</li>
                <li>Watering Level: {plantDetails.wateringLevel}</li>
                <li>Sunlight Level: {plantDetails.sunlightLevel}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-8 mt-6">
          <h2 className="font-bold text-3xl ">
            Caring for your {plantDetails.commonName
                .split(" ")
                .map((str) => str[0].toUpperCase() + str.substring(1))
                .join(" ")}
          </h2>
          <div className="mx-4 mt-4 mb-4">
            <h3 className="font-bold text-xl">Watering:</h3>
            <p>{plantDetails.wateringNotes}</p>
          </div>
          <div className="mx-4 mt-4 mb-4">
            <h3 className="font-bold text-xl">Sunlight:</h3>
            <p>{plantDetails.sunlightNotes}</p>
          </div>
          <div className="mx-4 mt-4 mb-4">
            <h3 className="font-bold text-xl">Pruning:</h3>
            <p>{plantDetails.pruningNotes}</p>
          </div>
        </div>
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
