import * as React from 'react';
import { ProteinTargetQuery } from '../../generated/graphql';
import './styles.css';
import ProteinContainer from "../Protein";


interface Props {
    data: ProteinTargetQuery;
    handleDrugIdChange: (newId: string) => void;
}

const className = 'ProteinTarget';

const ProteinTarget: React.FC<Props> = ({ data,handleDrugIdChange }) => {
    if (!data.ProteinTarget) {
        return <div></div>;
    }
    if (!data.ProteinTarget[0]) {
        return <div></div>;
    }

    return (

        <div className={className}>

            <div className={`${className}__Wrapper`}>
                <div>Protein Target</div>
                <div className={`${className}__title`}>{ data.ProteinTarget[0].name}</div>
            </div>

            <div>
                {data.ProteinTarget.map((item, index) => (
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
                    {data.ProteinTarget[0].drugs.map((item, index) => (
                        <div  className={`${className}__Link`}
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

export default ProteinTarget;