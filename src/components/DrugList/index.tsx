import React, {Fragment, useEffect, useState} from 'react'
import { useDrugListQuery } from '../../generated/graphql'
import DrugList, {OwnProps} from './DrugList'


const className = 'DrugList';

const DrugListContainer = ({query_str, uquery_str,handleDrugIdChange, set_drug_query_string}:OwnProps) => {
    const capitalize = (s:string) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const {data, error, loading } = useDrugListQuery(
        { variables: { str: query_str, ustr:capitalize(query_str) } }
    );
    const [filter_term, set_filter_term] = useState('')

    const handleNameFilter = () => {
        set_drug_query_string(filter_term)
    }
    const handleReset = () => {
        set_drug_query_string('')
        set_filter_term('')
    }



    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data ) {
        return <div>ERROR</div>
    }
    return (
    <Fragment>
        <div className={`${className}__Container`}>
            <div className={`${className}__Filter`}>
                <input className={'filter_text_input'} type="text" placeholder="Name Contains..." name="subString" value={filter_term} onChange={e => set_filter_term( e.target.value )}/>
                <button className={'btn btn-primary'} onClick={handleNameFilter}  >Filter</button>
                <button className={'btn btn-primary'} onClick={handleReset}  >Reset</button>

            </div>
            <div>
                <DrugList data = {data} query_str={query_str} uquery_str={uquery_str} handleDrugIdChange={handleDrugIdChange} set_drug_query_string={set_drug_query_string}  />
            </div>
        </div>
    </Fragment>
    )
}

export default DrugListContainer;