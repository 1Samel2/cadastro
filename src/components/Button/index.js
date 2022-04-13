import React from 'react'

import {Button} from './styles'

function Navigation({children, ...props}) {
    return (
       <Button {...props}>{children}</Button>
    )
}

export default Navigation