import { DetailCountryInfoProps } from "../utils/Props";

const DetailCountryInfo = ({
  name,
  languages,
  currencies,
  nativeName,
  population,
  region,
  subregion,
  capital,
  borders,
  topLevelDomain,
}: DetailCountryInfoProps) => {
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
    <div>
      <h1>{name}</h1>
      <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default DetailCountryInfo;
