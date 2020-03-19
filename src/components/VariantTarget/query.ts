import gql from 'graphql-tag';

export const VARIANT_TARGET = gql`
    query VariantTarget($id: ID){
        VariantTarget(id:$id){
            id
            name
            protein{
                id
                name
            }
            drugs{
                name
                id
            }
        }
    }
`;