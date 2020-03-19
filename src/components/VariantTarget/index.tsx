import * as React from 'react';
import { useVariantTargetQuery } from '../../generated/graphql';
import VariantTarget from './VariantTarget'

interface OwnProps {
    id: string;
    handleDrugIdChange: (newId: string) => void;
}

const VariantTargetContainer = ({ id,handleDrugIdChange }: OwnProps) => {
    const { data, error, loading, refetch } = useVariantTargetQuery(
        { variables: { id: id } });
    React.useEffect(() => {
        refetch();
    }, [id, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No data for Protein Target</div>;
    }

    return <VariantTarget data={data} handleDrugIdChange={handleDrugIdChange}/>;
};

export default VariantTargetContainer;
