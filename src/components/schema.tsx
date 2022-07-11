import { gql } from "@apollo/client";

export const COUNTRIES_INFO = gql`
  {
    countries {
      edges {
        node {
          id
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

export const COUNTRY_INFO = gql`
  query GET_COUNTRIES($ID: ID!) {
    country(id: $ID) {
      name
      population
      region
      capital
      flag
      nativeName
      subregion
      topLevelDomain
      borders
      currencies {
        edges {
          node {
            name
          }
        }
      }
      languages {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
