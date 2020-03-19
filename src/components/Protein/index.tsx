import * as React from 'react';
import { useProteinQuery } from '../../generated/graphql';
import Protein from './Protein'

interface OwnProps {
    id: string;
}

const ProteinContainer = ({ id }: OwnProps) => {
    console.log('id=' + id)
    const { data, error, loading, refetch } = useProteinQuery(
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
        return <div>No data for Protein</div>;
    }

    return <Protein data={data} />;
};

export default ProteinContainer;
