import { Slide } from "react-awesome-reveal";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Slide triggerOnce="true" direction="up">
      <div
        onClick={() => {
          console.log("clicked");
        }}
        className="flex h-max w-max cursor-pointer  flex-col overflow-hidden rounded bg-white shadow-md mb-4 dark:bg-blue-100"
      >
        <img src={flag} className="h-[158px] w-[264px]" alt="Country Flag" />
        <div className="space-y-1 p-5">
          <p className="mb-3 font-extrabold">{name}</p>
          <p>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Country;
