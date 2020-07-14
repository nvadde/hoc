//import axios from "axios";
import React, { useState, useEffect } from "react";
//import { getDisplayName } from "recompose";

const withData = WrappedComponent => {
  const NewComponent = ({ dataSource, ...props }) => {
    const [data, setData] = useState(null);

      useEffect(() => {
        fetch(dataSource)
        .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          });
      }, []);
 
    if (!data) return "Loading...";

  
    return <WrappedComponent {...props} data={data} />;
  };

  //NewComponent.displayName = `WithUserId(${getDisplayName(WrappedComponent)})`;

  return NewComponent;
};

export default withData;