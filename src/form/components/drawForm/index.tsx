import {FC} from "react";
import {IDrawFormProps} from "interfaces";

import SouthIcon from '@mui/icons-material/South';
import { MaterialUISwitch } from "../switch";

import './form.css';

const Inputs: FC<IDrawFormProps> = ({ handleSubmit, children, errorFlag, changeTheme, themeMode }) => {
    return (
        <>
            <form className={themeMode === 'lightMode' ? 'light' : 'dark'} onSubmit={handleSubmit}>
                <div className="inps">
                    <div className='wrapper'>
                        <div id='inp_wrapper'>
                            <label className={errorFlag ? 'error' : ''} >Day</label>
                            <input className={errorFlag ? 'error' : ''} name='value' type="number" placeholder='DD'/>
                            {errorFlag && <label className='bottomError'>Must be a valid year</label>}
                        </div>
                        <div id='inp_wrapper'>
                            <label className={errorFlag ? 'error' : ''} >Month</label>
                            <input className={errorFlag ? 'error' : ''} name='value' type="number" placeholder='MM'/>
                            {errorFlag && <label className='bottomError'>Must be a valid year</label>}
                        </div>
                        <div id='inp_wrapper'>
                            <label className={errorFlag ? 'error' : ''} >Year</label>
                            <input className={errorFlag ? 'error' : ''} name='value' type="number" placeholder='YYYY'/>
                            {errorFlag && <label className='bottomError'>Must be a valid year</label>}
                        </div>

                        <div className='btn'>
                            <button type='submit'>
                                <SouthIcon fontSize='large' />
                            </button>
                        </div>
                    </div>
                    <div className="switch">
                        <MaterialUISwitch checked={themeMode === 'lightMode' ? false : true} onChange={changeTheme}  />
                    </div>
                </div>

                <div className='result'>
                    <div className="container">
                        {children}
                    </div>
                </div>
            </form>
        </>
    );
};

export default Inputs