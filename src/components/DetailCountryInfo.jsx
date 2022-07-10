const DetailCountryInfo = ({
  nativeName,
  population,
  name,
  region,
  subregion,
  capital,
  topLevelDomain,
}) => {
  return (
    <div className="my-[4rem]">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="mt-8 grid grid-cols-2">
        <div className="space-y-2">
          <p>Native Name: {nativeName}</p>
          <p>
            Population:
            {population}
          </p>
          <p>Region: {region}</p>
          <p>Sub Region: {subregion}</p>
          <p>Capital: {capital}</p>
        </div>
        <div className="space-y-2">
          <p>Top Level Domain: {topLevelDomain}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCountryInfo;
