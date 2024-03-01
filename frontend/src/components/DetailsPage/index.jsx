import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentSection from "../CommentSection";

export default function DetailsPage() {
  const { id } = useParams();
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      const response = await fetch(
        `https://perenual.com/api/species/details/${id}?key=sk-Tsec65dca9e466d594369`
      );
      const data = await response.json();
      setPlantDetails(data);
    };
    fetchPlantDetails();
  }, []);
  return (
    <>
    {plantDetails ? <p>{plantDetails.common_name}</p> : <p>Loading</p>}
    <CommentSection plantId={id}/>
    </>
  );
}
