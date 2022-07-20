export interface CountriesProps {
  countries: {
    edges: CountryNodeProps[];
  };
}

export interface CountryNodeProps {
  node: {
    id: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
  };
}

export type CountryProps = {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};

export interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export type FilterProps = {
  regions: RegionProps[];
  selectregion: RegionProps;
  setSelectRegion: (region: RegionProps) => void;
};

interface RegionProps {
  id: number;
  name: string;
}

export interface DetailPageProps {
  country: {
    name: string;
    flag: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: {
      edges: commanProp[];
    };
    languages: {
      edges: commanProp[];
    };
    borders: string[];
  };
}

type commanProp = {
  node: {
    name: string;
  };
};


