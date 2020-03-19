import gql from 'graphql-tag'

export const PROTEIN = gql`
    query Protein($id: ID) {
        Protein(id: $id) {
            id
            name
            polypeptide_chains {
                name
                id
            }
            location {
                id
             }
        }
    }

`;