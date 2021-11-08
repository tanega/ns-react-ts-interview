import React from "react";

const SpeciesItem = ({ data }) => (
  <span>
    {data.id}: {data.taxon}
  </span>
);

export default SpeciesItem;
