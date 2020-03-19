import * as React from 'react';
import './styles.css';
import {PolypeptideQuery} from "../../generated/graphql";

interface Props {
    data: PolypeptideQuery;
}

const className = 'Polypeptide';

const isForward = (s: String) => s==='FORWARD' ? ' (+)' : ' (-)';

const Polypeptide: React.FC<Props> = ({ data }) => {
    if (!data.Polypeptide) {
        return <div>No Polypeptide</div>;
    }
    if (!data.Polypeptide[0]) {
        return <div>No Polypeptide</div>;
    }

    return (

        <div className={className}>


            <div className={`${className}__Wrapper`}>
                <div>Protein Name </div>
                <div>{data.Polypeptide[0].name }</div>

                <div>Uniprot ID Name </div>
                <div>{(<a href={'https://www.uniprot.org/uniprot/'+ data.Polypeptide[0].accessionNumber} target="_blank" rel="noopener noreferrer">{data.Polypeptide[0].uniprot_id}</a>) }</div>

                {/*<div>Uniprot Accession Number </div>*/}
                {/*<div>{data.Polypeptide[0].accessionNumber }</div>*/}

                <div>Gene</div>
                <div>
                    <div>
                        Symbol:  {data.Polypeptide[0].gene.name }
                    </div>
                    <div>
                        Location:  chr{data.Polypeptide[0].gene.chromosome+ ':' + data.Polypeptide[0].gene.start + '-' + data.Polypeptide[0].gene.end + isForward(data.Polypeptide[0].gene.strand)}

                    </div>
                    <div>
                        Reference: {(<a href={data.Polypeptide[0].gene.reference.web_address} target="_blank" rel="noopener noreferrer">{data.Polypeptide[0].gene.reference.web_address}</a>) }
                    </div>

                </div>

                <div>Transcript Name </div>
                <div>{data.Polypeptide[0].transcript.name }</div>


            </div>


        </div>

    );
};
export default Polypeptide;