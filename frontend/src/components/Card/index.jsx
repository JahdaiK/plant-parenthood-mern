import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Card({ plant }) {
  const smallImage = plant.default_image
    ? plant.default_image.small_url
    : { logo };

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col mx-3">
        <Link to={"/details/" + plant.id}>
          <div className="relative">
            <img
              className="w-full h-[200px]"
              src={smallImage}
              alt={plant.common_name}
            />
          </div>
        </Link>

        <div className="px-6 py-3 flex flex-row items-center justify-between bg-[#C7F07F]">
          <h1 className="text-[#0F6350] font-bold">
            {plant.common_name
              .split(" ")
              .map((str) => str[0].toUpperCase() + str.substring(1))
              .join(" ")}{" "}
          </h1>
        </div>
      </div>
    </>
  );
}
