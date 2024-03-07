const express = require("express");
const router = express.Router();
const db = require("../models");
const apiKey = process.env.VITE_PERENUAL_API_KEY;

//Routes:

//get extraPlantDetails
router.get("/:plantId", async function (req, res) {
  console.log("plant details route");

  //check in db
  let plant = await db.Plant.findOne({ plantId: req.params.plantId });

  if (plant) {
    res.json(plant);
  } else {
    const response = await fetch(
      `https://perenual.com/api/species/details/${req.params.plantId}?key=${apiKey}`
    );
    const data = await response.json();

    //check if plant id is greater than 3000 to only add plant details and not the guide
    if (parseInt(req.params.plantId, 10) > 3000) {
      const plantInfo = {
        plantId: req.params.plantId,
        imageUrl: data.default_image.regular_url,
        description: data.description,
        commonName: data.common_name
          .split(" ")
          .map((str) => str[0].toUpperCase() + str.substring(1))
          .join(" "),
        scientificName: data.scientific_name[0],
      };

      const newPlant = await db.Plant.create(plantInfo);

      // Respond with data from the local database
      return res.json(newPlant);
    }

    const guideResponse = await fetch(
      `http://perenual.com/api/species-care-guide-list?species_id=${req.params.plantId}&key=${apiKey}`
    );
    const guideData = await guideResponse.json();

    console.log(guideData.data[0]);

    const plantInfo = {
      plantId: req.params.plantId,
      imageUrl: data.default_image.regular_url,
      wateringLevel: data.watering,
      sunlightLevel: data.sunlight[0],
      description: data.description,
      commonName: data.common_name
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.substring(1))
        .join(" "),
      careLevel: data.care_level,
      scientificName: data.scientific_name[0],
      wateringNotes: guideData.data[0].section[0].description || "unavailable",
      sunlightNotes: guideData.data[0].section[1].description || "unavailable",
      pruningNotes: guideData.data[0].section[2].description || "unavailable",
    };
    console.log(plantInfo);
    const newPlant = await db.Plant.create(plantInfo);
    res.json(newPlant);
  }
});
module.exports = router;
