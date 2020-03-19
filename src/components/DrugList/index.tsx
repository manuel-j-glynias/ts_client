import * as React from 'react'
import { useDrugListQuery } from '../../generated/graphql'
import DrugList, {OwnProps} from './DrugList'

const DrugListContainer = (props:OwnProps) => {
    const {data, error, loading } = useDrugListQuery();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data ) {
        return <div>ERROR</div>
    }
    return <DrugList data = {data}{...props}/>
}

export default DrugListContainer;