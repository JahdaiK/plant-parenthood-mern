import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react';

export default function DetailsPage(){
    const {id} = useParams();
    const [plantDetails, setPlantDetails] = useState();

    useEffect(()=>{
        const fetchPlantDetails = async () => {
            const response = await fetch(
                `https://perenual.com/api/species/details/${id}?key=sk-Tsec65dca9e466d594369`
            );
            const data = await response.json();
            setPlantDetails(data);
        }
        fetchPlantDetails();
    },[])
    return(
        <>
            <p>You've reached details</p>
        </>
    )
}