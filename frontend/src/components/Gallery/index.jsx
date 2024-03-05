import Card from "../Card";



export default function Gallery({plants}) {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <Card key={plant.id} plant={plant} />
          ))
        ) : (
          <p>Your plants are loading...</p>
        )}
      </div>
    </>
  );
}
