import gql from 'graphql-tag'

export const SUBCELLULAR_LOCATION_WITH_EVIDENCE = gql`
    query SubcellularLocationWithEvidence($id:ID){
        SubcellularLocationWithEvidence(id:$id){
            location{
                name
            }
            reference{
                shortReference
                PMID
            }
        }
    }
`;