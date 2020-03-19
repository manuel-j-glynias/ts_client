import * as React from 'react';
import {usePolypeptideQuery} from '../../generated/graphql';
import Polypeptide from './Polypeptide'

interface OwnProps {
    id: string;
}

const PolypeptideContainer = ({ id }: OwnProps) => {
    console.log('id=' + id)
    const { data, error, loading, refetch } = usePolypeptideQuery(
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

    return <Polypeptide data={data} />;
};

export default PolypeptideContainer;
