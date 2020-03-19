import * as React from 'react';
import './styles.css';
import {ProteinQuery} from "../../generated/graphql";
import PolypeptideContainer from "../Polypeptide";
import SubcellularLocationWithEvidenceContainer from "../SubcellularLocationWithEvidence";

interface Props {
    data: ProteinQuery;
}

const className = 'Protein';


const Protein: React.FC<Props> = ({ data }) => {
    if (!data.Protein) {
        return <div>No Protein</div>;
    }
    if (!data.Protein[0]) {
        return <div>No Protein</div>;
    }

    return (

        <div className={className}>


            <div className={`${className}__Wrapper`}>
                <div>Protein Name </div>
                <div>{data.Protein[0].name }</div>


                <div><span className={`${className}__Text`}>Polypeptide Chains</span></div>
                <div>
                    {data.Protein[0].polypeptide_chains.map((item, index) => (
                        <div key={index}>
                            {item && <PolypeptideContainer id={item.id}/>}
                        </div>
                    ))}
                </div>

                <div>Location</div>
                <div>{data.Protein[0].location.map((item, index) => (
                    <div key={index}> {item ? <SubcellularLocationWithEvidenceContainer id={item.id}/>: '' }</div>

                ))}
                </div>

            </div>


        </div>

    );
};
export default Protein;