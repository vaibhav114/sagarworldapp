import { Slide } from "react-awesome-reveal";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Slide triggerOnce="true" direction="up" fraction={0.1} cascade="true" damping={1}>
      <div onClick={() => {console.log("clicked")}} className="flex cursor-pointer flex-col w-[265px] h-[334px] overflow-hidden rounded shadow-md">
        <img src={flag} className="h-[158px] w-[264px]  bg-blue-300" alt="Country Flag" />
        <div className="p-5 space-y-1">
          <p className="font-extrabold mb-3">{name}</p>
          <p>
            <span className="font-semibold">Population: </span>
            {population}
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
