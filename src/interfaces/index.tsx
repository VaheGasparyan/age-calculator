import {FormEvent, ReactNode} from "react";

export interface IFormState {
    age?: string;
    days?: string;
    months?: string
}

export interface IDrawFormProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
    errorFlag: boolean;
    changeTheme: (event: any) => void;
    themeMode: string
}

export interface IDrawResultProps {
    formState: IFormState
}