import { gql } from "@apollo/client";

const COUNTRIES_INFO = gql`
  {
    countries {
      edges {
        node {
          name
          population
          region
          capital
          flag
        }
      }
    }
  }
`;

export const getCountriesInfo = () => {
  return COUNTRIES_INFO;
};
