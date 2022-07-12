import { memo } from "react";
import { Link } from "react-router-dom";
import { CountryProps } from "../utils/Props";

const Country = ({
  id,
  name,
  population,
  region,
  capital,
  flag,
}: CountryProps) => {
  const CountryArray = [
    { title: "Population", value: population.toLocaleString("en-US") },
    { title: "Region", value: region },
    { title: "Capital", value: capital },
  ];

  return (
    <div className="element h-[350px] w-[265px] overflow-hidden rounded-md">
      <div className="h-1/2">
        <Link to={`/${name}/${id}`}>
          <img
            className="h-full w-full object-cover"
            loading="lazy"
            src={flag}
            alt="Country Flag"
          />
        </Link>
      </div>
      <div className="px-5 detail">
        <h2 className="font-bold my-4 text-lg">{name}</h2>
        {CountryArray.map((item, index) => (
          <p key={index} className="font-semibold">
            {item.title}: <span>{item.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(Country);
