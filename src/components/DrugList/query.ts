import gql from 'graphql-tag';

export const QUERY_DRUG_LIST = gql`
  query DrugList($str: String,$ustr:String) {
    Drug(orderBy:name_asc,filter:{OR: [{name_contains:$str},{name_contains:$ustr}]}) {
      id
      name
      drugCategory
    }
  }
`;