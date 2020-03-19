import * as React from 'react';
import { useProteinTargetQuery } from '../../generated/graphql';
import ProteinTarget from './ProteinTarget'

interface OwnProps {
    id: string;
    handleDrugIdChange: (newId: string) => void;
}

const ProteinTargetContainer = ({ id,handleDrugIdChange }: OwnProps) => {
    const { data, error, loading, refetch } = useProteinTargetQuery(
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

    return <ProteinTarget data={data} handleDrugIdChange={handleDrugIdChange}/>;
};

export default ProteinTargetContainer;
