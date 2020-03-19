import * as React from 'react';
import { VariantTargetQuery } from '../../generated/graphql';
import './styles.css';
import ProteinContainer from "../Protein";


interface Props {
    data: VariantTargetQuery;
    handleDrugIdChange: (newId: string) => void;
}

const className = 'VariantTarget';

const VariantTarget: React.FC<Props> = ({ data,handleDrugIdChange }) => {
    if (!data.VariantTarget) {
        return <div></div>;
    }
    if (!data.VariantTarget[0]) {
        return <div></div>;
    }

    return (

        <div className={className}>
            <div className={`${className}__Wrapper`}>
                <div>Variant Target</div>
                <div className={`${className}__title`}>{ data.VariantTarget[0].name}</div>
            </div>


            <div>
                {data.VariantTarget.map((item, index) => (
                    <div key={index}>
                        {item && <ProteinContainer id={item.protein.id}/>}
                    </div>
                ))}
            </div>
            <div className={`${className}__Wrapper`}>
                <div>
                    Drugs
                </div>
                <div>
                    {data.VariantTarget[0].drugs.map((item, index) => (
                        <div className={`${className}__Link`}
                            key={index}
                            // onClick={() => item && handleProteinTargetIdChange(item.id!)}
                            onClick={ () => {
                                item && handleDrugIdChange(item.id)
                            }}
                        >
                            {item ? item.name : "-"}
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
};

export default VariantTarget;