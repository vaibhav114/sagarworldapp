const DetailCountryInfo = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  const language = languages.edges.map(({ node }) => node.name);
  const currency = currencies.edges.map(({ node }) => node.name);

  const CountryInfo = [
    {
      title: "Native Name",
      value: nativeName,
    },
    {
      title: "Population",
      value: population,
    },
    {
      title: "Region",
      value: region,
    },
    {
      title: "Sub Region",
      value: subregion,
    },
    {
      title: "Capital",
      value: capital,
    },
  ];

  return (
    <div className="my-[4rem] text-base">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="mt-8">
        <div className="detail space-y-2">
          {CountryInfo.map((c, item) => (
            <p key={item}>
              {c.title}:<span className="ml-2">{c.value}</span>
            </p>
          ))}
        </div>
        <div className="space-y-2">
          <p>
            Top Level Domain: <span>{topLevelDomain}</span>
          </p>
          <p>
            Currencies:{" "}
            {currency.length > 1 ? currency.join(", ") : currency[0]}
          </p>
          <p>
            Languages: {language.length > 1 ? language.join(", ") : language[0]}
          </p>
        </div>
        <div>
          Boders: {borders.length > 1 ? borders.join(", ") : borders[0]}
        </div>
      </div>
    </div>
  );
};

export default DetailCountryInfo;
