import React from 'react';
import { useMemo, useState } from "react";
import VisitorContext from "./VisitorContext";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function VisitorProvider({ children }) {
    const [ visitor, setVisitor ] = useState('');
    const history = useHistory();

    const values = useMemo(() => ({
        visitor, setVisitor, history
    }),[visitor, history]);

    return (
        <VisitorContext.Provider value={values}>
            {children}
        </VisitorContext.Provider>
    );
}

VisitorProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

export default VisitorProvider;