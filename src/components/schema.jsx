import { gql } from "@apollo/client";

const COUNTRIES_INFO = gql`
  {
    countries(first: 1) {
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

const getSchema = () => {
  return COUNTRIES_INFO;
};

export default getSchema;
