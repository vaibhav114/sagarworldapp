export interface CountryProps {
  id: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
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

export interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}
