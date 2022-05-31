const Country = ({ name, population, region, capital, flag }) => {
  return (
    <div className="flex max-w-xs flex-col overflow-hidden rounded shadow-md">
      <img src={flag} loading="eager" className="h-full w-full" alt="Country Flag" />
      <div className="p-5">
        <p className="font-extrabold">{name}</p>
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
  );
};

export default Country;
