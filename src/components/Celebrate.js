import React from 'react'
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Celebrate = ({ show = false, ...rest }) => {
    const { width, height } = useWindowSize()
    return (
        <>
            {
                show && <Confetti
                    width={width}
                    height={height}
                    {...rest}
                />
            }
        </>
    )
}



export default Celebrate