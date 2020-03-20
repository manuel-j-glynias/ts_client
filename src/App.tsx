import React from 'react';
import DrugListContainer from "./components/DrugList";
import DrugContainer from "./components/Drug";
import ProteinTargetContainer from "./components/ProteinTarget";
import VariantTargetContainer from "./components/VariantTarget";
// import GridLayout from 'react-grid-layout';
import './App.css';


const App = () => {
  const [drug_id, set_drug_Id] = React.useState("");
  const [drug_query_string, set_drug_query_string] = React.useState("");
  const [drug_uquery_string, set_drug_uquery_string] = React.useState("");
  const [protein_target_id, set_protein_target_Id] = React.useState("");
  const [variant_target_id, set_variant_target_Id] = React.useState("");

    const handleDrugIdChange = React.useCallback(newId => {
    set_drug_Id(newId);
  }, []);
  const handleProteinTargetIdChange = React.useCallback(newId => {
      set_protein_target_Id(newId);
    }, []);
    const handleVariantTargetIdChange = React.useCallback(newId => {
        set_variant_target_Id(newId);
    }, []);

    return (
      <div className="App">

        <DrugListContainer  handleDrugIdChange={handleDrugIdChange} query_str={drug_query_string} uquery_str={drug_uquery_string} set_drug_query_string={set_drug_query_string} />
        <DrugContainer id={drug_id} handleProteinTargetIdChange ={handleProteinTargetIdChange} handleVariantTargetIdChange={handleVariantTargetIdChange}/>
        <ProteinTargetContainer id={protein_target_id} handleDrugIdChange={handleDrugIdChange}/>
        <VariantTargetContainer id={variant_target_id } handleDrugIdChange={handleDrugIdChange}/>

      </div>
  );
}

export default App;
