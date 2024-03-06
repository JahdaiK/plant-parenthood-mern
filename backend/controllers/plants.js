const express = require("express");
const router = express.Router();
const db = require("../models");

//Routes:

//get extraPlantDetails
router.get("/:plantId", async function (req, res) {
  console.log('plant details route')
  let plant = await db.Plant.findOne({ plantId: req.params.plantId });
  // console.log('plant', plant)
  if (plant) {
    res.json(plant);
  } else {
    const response = await fetch(
      `https://perenual.com/api/species/details/${req.params.plantId}?key=sk-gBUl65e8747e49dcc4480`
    );
    const data = await response.json();

    const guideResponse = await fetch(
      `http://perenual.com/api/species-care-guide-list?species_id=${req.params.plantId}&key=sk-gBUl65e8747e49dcc4480`
    );
    const guideData = await guideResponse.json();

    console.log(guideData.data[0])
    
    const plantInfo = {
      plantId: req.params.plantId,
      imageUrl: data.default_image.regular_url,
      wateringLevel: data.watering,
      sunlightLevel: data.sunlight[0],
      description: data.description,
      commonName: data.common_name.split(' ').map(str => (str[0].toUpperCase() + str.substring(1))).join(' '),
      careLevel: data.care_level,
      scientificName: data.scientific_name[0],
      wateringNotes: guideData.data[0].section[0].description || 'unavailable',
      sunlightNotes: guideData.data[0].section[1].description || 'unavailable', 
      pruningNotes: guideData.data[0].section[2].description || 'unavailable',
    };
    console.log(plantInfo);
    const newPlant = await db.Plant.create(plantInfo)
    res.json(newPlant)
  } 
});
module.exports = router;
