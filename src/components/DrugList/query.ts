import gql from 'graphql-tag';

export const QUERY_DRUG_LIST = gql`
query DrugList {
  Drug (orderBy:name_asc) {
    id,name,drugCategory
  }
}
`;