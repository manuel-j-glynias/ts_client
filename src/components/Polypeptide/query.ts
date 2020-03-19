import gql from 'graphql-tag'

export const POLYPEPTIDE = gql`
    query Polypeptide($id: ID) {
        Polypeptide(id: $id) {
            id
            name
            uniprot_id
            accessionNumber
            gene {
                name
                id
                chromosome
                start
                end
                strand
                reference{
                    shortReference
                    web_address
                }
            }
            transcript {
                name
                id
            }
        }
    }
`;