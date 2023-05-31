import {FormEvent, useState} from "react";

import {IFormState} from "interfaces";

import {calculateAge} from "utils/calculateAge";
import {validation} from "utils/validation";
import {getTheme} from "utils/getTheme";

import DrawForm from "./components/drawForm";
import DrawResult from "./components/drawResult";

const Form = () => {
    const [formState, setFormState] = useState<IFormState | {}>({});
    const [errorFlag, setErrorFlag] = useState(false);
    const [themeMode, setThemeMod] = useState(getTheme() as string);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const [day, month, year] = formData.getAll('value');

        if(validation(day as string, month as string, year as string)) {
            const result = calculateAge(day as string, month as string, year as string);

            setFormState(() => {
                return {
                    ...result
                }
            });

            setErrorFlag(false)
        } else {
            setErrorFlag(true)
        }
    }

    const changeTheme = (event: any) => {
        setThemeMod(prevState => {
            if(prevState === 'lightMode') {
                localStorage.setItem('theme', 'darkMode');
                return 'darkMode'
            } else {
                localStorage.setItem('theme', 'lightMode');
                return 'lightMode'
            }
        });
    }

    return (
        <>
            <DrawForm themeMode={themeMode} changeTheme={changeTheme} errorFlag={errorFlag} handleSubmit={handleSubmit} >
                <DrawResult formState={formState} />
            </DrawForm>
        </>
    );
};

export default Form;