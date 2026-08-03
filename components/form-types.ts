import { FieldValues, Path } from "react-hook-form";

export type FieldOption = {
    value: string;
    label: string;
};


export type FieldType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "date"
    | "datetime"
    | "time"
    | "textarea"
    | "select"
    | "checkbox"
    | "switch"
    | "radio"
    | "color"
    | "file"
    | "hidden";


export type FieldConfig<T extends FieldValues> = {
    name: Path<T>;

    label: string;

    type?: FieldType;

    id?: string;

    placeholder?: string;

    options?: FieldOption[];

    disabled?: boolean;

    required?: boolean;

    description?: string;

    min?: number;

    max?: number;

    hidden?: boolean;

    autoComplete?: string;

    className?: string;
};