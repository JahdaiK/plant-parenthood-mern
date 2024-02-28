import { Link } from "react-router-dom";
export default function Card({ plant }) {
  return (
    <>
      <Link to={"details/" + plant.id}>
        <div className="border-solid border-2 border-sky-500 rounded overflow-hidden shadow-lg flex flex-col mx-3">
          {plant.common_name}
        </div>
      </Link>
    </>
  );
}
