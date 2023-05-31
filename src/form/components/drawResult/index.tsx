import {FC} from "react";
import {IDrawResultProps} from "interfaces";

import './result.css';

const DrawResult: FC<IDrawResultProps> = ({ formState }) => {
    const { age, days, months } = formState;

    return (
        <>
            <h3>{age ? <span>{age}</span> : <><span>-</span> <span>-</span></> } years</h3>
            <h3>{months ? <span>{months}</span> : <><span>-</span> <span>-</span></> } months</h3>
            <h3>{days ? <span>{days}</span> : <><span>-</span> <span>-</span></> } days</h3>
        </>
    );
};

export default DrawResult;