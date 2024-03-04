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
            <img src={plantDetails.imageUrl} alt="" />
          </div>
          <div className="plant_details flex">
            <div>
              <h1>{plantDetails.commonName}</h1>
              <h1>{plantDetails.scientificName}</h1>
              <p>{plantDetails.description}</p>
              <p>{plantDetails.careLevel}</p>
              <p>{plantDetails.wateringLevel}</p>
              <p>{plantDetails.sunlightLevel}</p>
            </div>
            <div>
              <h3>Watering:</h3>
              <p>{plantDetails.wateringNotes}</p>
              <h3>Sunlight:</h3>
              <p>{plantDetails.sunlightNotes}</p>
              <h3>Pruning:</h3>
              <p>{plantDetails.pruningNotes}</p>
            </div>
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
