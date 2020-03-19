
import * as React from 'react'
import { DrugListQuery } from '../../generated/graphql'
import './styles.css'


export interface OwnProps {
    handleDrugIdChange: (newId: string) => void;
}

interface Props extends OwnProps {
    data: DrugListQuery;
}

const className = 'DrugList';

const DrugList: React.FC<Props> = ({data,handleDrugIdChange}) => (
    <div className={className}>
        <h3>Drugs</h3>
        <ol className={`${className}__list`}>
            {!!data.Drug &&
            data.Drug.map(
                (drug, i: string | number ) =>
                    !!drug && (
                        <li key={i}
                            className={`${className}__item`}
                            onClick={() => handleDrugIdChange(drug.id!)}
                        >
                            {drug.name} ( {drug.drugCategory})
                         </li>
                    ),
            )}
        </ol>

    </div>
)

export default DrugList;