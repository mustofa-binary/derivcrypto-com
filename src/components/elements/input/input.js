import React from 'react'
import { InputStyle, ErrorText } from './style'
import { VFlex } from 'components/elements'

export const Input = ({ error, ...props }) => {
    return (
        <VFlex>
            <InputStyle {...props} />
            {error && <ErrorText>{error}</ErrorText>}
        </VFlex>
    )
}
