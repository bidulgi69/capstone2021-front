import React from 'react';
import styled from 'styled-components'
const Div = styled.div`
    &:hover {
        border: 1px solid #80ced6
    },
    cursor: pointer
`

type InputProps = {
    type?: string
    width: string,
    height: string,
    value: string,
    onChangeValue: (changed: string) => void
}

const TextInput: React.FunctionComponent<InputProps> = ({ type, width, height, value, onChangeValue }) => {
    return (
        <Div>
            <input type={type ? type : ''} style={{ width, height, border: '1px solid gray', borderRadius: '2pt', paddingLeft: '12pt' }}
                   value={value} onChange={(e) => onChangeValue(e.target.value)} />
        </Div>
    );
}

export default TextInput;