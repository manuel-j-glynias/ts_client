import gql from 'graphql-tag';

export const PROTEIN_TARGET = gql`
    query ProteinTarget($id: ID){
        ProteinTarget(id:$id){
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