import * as React from 'react';
import { useDrugQuery } from '../../generated/graphql';
import Drug from './Drug'

interface OwnProps {
    id: string;
    handleProteinTargetIdChange: (newId: string) => void;
    handleVariantTargetIdChange: (newId: string) => void;
}

const DrugContainer = ({ id,handleProteinTargetIdChange,handleVariantTargetIdChange }: OwnProps) => {
    const { data, error, loading, refetch } = useDrugQuery(
        { variables: { id: id } });
    React.useEffect(() => {
        refetch();
        handleProteinTargetIdChange("")
        handleVariantTargetIdChange("")
    }, [id, handleProteinTargetIdChange, handleVariantTargetIdChange, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a drug from the panel</div>;
    }

    return <Drug data={data} handleProteinTargetIdChange={handleProteinTargetIdChange} handleVariantTargetIdChange={handleVariantTargetIdChange}/>;
};

export default DrugContainer;
