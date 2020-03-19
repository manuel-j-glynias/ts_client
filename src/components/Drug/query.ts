import gql from 'graphql-tag';

export const QUERY_DRUG = gql`
    query Drug($id: ID) {
        Drug(id: $id) {
            id
            name
            drugCategory
            definition
            concept
            isAntineoplastic
            isImmuno
            modulator
            synonyms
            annotationDate
            target {
                id
                name
                __typename
            }
        }
    }
`;