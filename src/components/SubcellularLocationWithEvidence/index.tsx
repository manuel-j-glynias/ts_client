import * as React from 'react';
import {useSubcellularLocationWithEvidenceQuery} from "../../generated/graphql";
import SubcellularLocationWithEvidence from './SubcellularLocationWithEvidence'


interface OwnProps {
    id: string;
}

const SubcellularLocationWithEvidenceContainer = ({ id }: OwnProps) => {
    console.log('id=' + id)
    const { data, error, loading, refetch } = useSubcellularLocationWithEvidenceQuery(
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

    return <SubcellularLocationWithEvidence data={data} />;
};

export default SubcellularLocationWithEvidenceContainer;
