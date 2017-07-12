import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
    <div>
        <h1>Família</h1>
        {childrenWithProps(props.children, props)}
    </div>
)

//  {React.cloneElement(props.children, { ...props})} - só funciona pra um elemento