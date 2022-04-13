import React from 'react';

import { LayoutCel } from './styles';


function Container({children,isBluer}) {
   
    return (
        <LayoutCel isBluer={isBluer}>{children}</LayoutCel>
    )

}

export default Container