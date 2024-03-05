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
        <div className="mt-10 mx-5">
          <div class="bg-[#C2AD97] rounded-lg shadow-md lg:flex md:flex ">
            <img
              class="object-cover w-full md:w-1/2 lg:w-1/3"
              src={plantDetails.imageUrl}
              alt="image"
            />
            <div class="px-6 py-4 ">
              <h2 class="text-4xl xl:text-6xl font-semibold tracking-tight mb-3">
                {plantDetails.commonName
                  .split(" ")
                  .map((str) => str[0].toUpperCase() + str.substring(1))
                  .join(" ")}
              </h2>
              <h3 className="text-2xl xl:text-4xl mb-5">
                '{plantDetails.scientificName}'
              </h3>
              <p class="mb-2 text-xl xl:text-xl leading-normal text-justify ">
                {plantDetails.description}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="details_container grid grid-cols-6">
          <div className="image_wrapper col-span-2 mt-5 ml-10">
            <img
              src={plantDetails.imageUrl}
              alt={plantDetails.commonName
                .split(" ")
                .map((str) => str[0].toUpperCase() + str.substring(1))
                .join(" ")}
            />
          </div>

          <div className="bg-[#C2AD97] plant_details col-span-3 mt-5 ml-10">
            <div className="mb-5">
              <h1 className="font-bold text-4xl">
                {plantDetails.commonName
                  .split(" ")
                  .map((str) => str[0].toUpperCase() + str.substring(1))
                  .join(" ")}
              </h1>
              <h3 className="text-xl">'{plantDetails.scientificName}'</h3>
            </div>

            <div>
              <p>{plantDetails.description}</p>
              <ul>
                <li>Care Level: {plantDetails.careLevel}</li>
                <li>Watering Level: {plantDetails.wateringLevel}</li>
                <li>Sunlight Level: {plantDetails.sunlightLevel}</li>
              </ul>
            </div>
          </div>
        </div> */}

<div className="care_guide">

</div>
        <h2 className="font-bold text-3xl ">
          Caring for your{" "}
          {plantDetails.commonName
            .split(" ")
            .map((str) => str[0].toUpperCase() + str.substring(1))
            .join(" ")}
        </h2>
        <div class="grid gap-14 md:grid-cols-3 md:gap-5">
          <div class="rounded-xl bg-white p-6 text-center shadow-xl">
            <h3 className="font-bold text-xl">Watering:</h3>
            <p>{plantDetails.wateringNotes}</p>
          </div>
          <div class="rounded-xl bg-white p-6 text-center shadow-xl">
            <h3 className="font-bold text-xl">Sunlight:</h3>
            <p>{plantDetails.sunlightNotes}</p>
          </div>
          <div class="rounded-xl bg-white p-6 text-center shadow-xl">
            <h3 className="font-bold text-xl">Pruning:</h3>
            <p>{plantDetails.pruningNotes}</p>
          </div>
        </div>

        {/* <div className="ml-8 mt-6">
          <h2 className="font-bold text-3xl ">
            Caring for your{" "}
            {plantDetails.commonName
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
        </div> */}
        <CommentSection plantId={id} />
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
