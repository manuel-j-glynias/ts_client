import * as React from 'react';
import './styles.css';
import {SubcellularLocationWithEvidenceQuery} from "../../generated/graphql";

interface Props {
    data: SubcellularLocationWithEvidenceQuery;
}

const className = 'SubcellularLocationWithEvidence';



const SubcellularLocationWithEvidence: React.FC<Props> = ({ data }) => {
    if (!data.SubcellularLocationWithEvidence) {
        return <div></div>;
    }
    if (!data.SubcellularLocationWithEvidence[0]) {
        return <div></div>;
    }

    return (

        <div className={className}>


            <div className={`${className}__Wrapper`}>
                <div>Location</div>
                <div>{data.SubcellularLocationWithEvidence[0].location.name }</div>


                <div><span className={`${className}__Text`}>References</span></div>
                <div>
                    {data.SubcellularLocationWithEvidence[0].reference.map((item, index) => (
                        <div key={index}>
                            {item && (<a href={'https://www.ncbi.nlm.nih.gov/pubmed/'+ item.PMID} target="_blank" rel="noopener noreferrer">{item.shortReference}</a>)}
                        </div>
                    ))}
                </div>


            </div>


        </div>

    );
};
export default SubcellularLocationWithEvidence;