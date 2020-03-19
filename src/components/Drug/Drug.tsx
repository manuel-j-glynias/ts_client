import * as React from 'react';
import { DrugQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: DrugQuery;
    handleProteinTargetIdChange: (newId: string) => void;
    handleVariantTargetIdChange: (newId: string) => void;
}

const className = 'Drug';

const Drug: React.FC<Props> = ({ data, handleProteinTargetIdChange,handleVariantTargetIdChange  }) => {

    if (!data.Drug) {
        return <div>No Drug</div>;
    }
    if (!data.Drug[0]) {
        return <div>No Drug</div>;
    }

    return (

        <div className={className}>

            <h1 className={`${className}__title`}>{ data.Drug[0].name}</h1>

            <div className={`${className}__Wrapper`}>
                <div>Concept Code</div>
                <div>{(<a href={'https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=20.02d&code='+ data.Drug[0].concept} target="_blank" rel="noopener noreferrer">{data.Drug[0].concept}</a>) }</div>

                <div>Drug Category</div>
                <div>{data.Drug[0].drugCategory }</div>

                <div>Target</div>
                <div className={`${className}__Link`}>{data.Drug[0].target.map((item, index) => (
                    <div
                        key={index}
                        // onClick={() => item && handleProteinTargetIdChange(item.id!)}
                        onClick={ () => {
                            if (item) {
                                if(item.__typename ==='ProteinTarget'){
                                    handleProteinTargetIdChange(item.id!)
                                }
                                else {
                                    handleVariantTargetIdChange(item.id!)
                                }

                            }
                        }}
                    >
                        <span className={`${className}__Link`}>{item ? item.name : "-"}</span>
                    </div>
                ))}
                </div>

                <div>Definition</div>
                <div>{data.Drug[0].definition}</div>

                <div>IsAntineoplastic?</div>
                <div>{data.Drug[0].isAntineoplastic ? "True" : "False"}</div>

                <div>IsImmuno?</div>
                <div>{data.Drug[0].isImmuno ? "True" : "False"}</div>

                <div>Modulator</div>
                <div>{data.Drug[0].modulator}</div>

                <div>Synonyms</div>
                <div>{data.Drug[0].synonyms.map((item, index) => (
                    <div key={index}> {item} </div>
                ))}
                </div>

                <div>Annotation Date</div>
                <div>{data.Drug[0].annotationDate}</div>

            </div>


        </div>

    );
};

export default Drug;