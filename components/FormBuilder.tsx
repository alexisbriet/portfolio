"use client";

import {
    FieldValues,
    UseFormReturn
} from "react-hook-form";

import InputGroup from "./InputGroup";
import { FieldConfig } from "./form-types";


type FormBuilderProps<
    TFieldValues extends FieldValues,
    TTransformedValues extends FieldValues = TFieldValues
> = {
    form: UseFormReturn<
        TFieldValues,
        unknown,
        TTransformedValues
    >;

    fields: FieldConfig<TFieldValues>[];
};



export default function FormBuilder<
    TFieldValues extends FieldValues,
    TTransformedValues extends FieldValues = TFieldValues
>({
    form,
    fields,
}: FormBuilderProps<TFieldValues, TTransformedValues>) {


    return (
        <>
            {
                fields.map(field => {
                    if (field.hidden) {
                        return null;
                    }

                    return (
                        <InputGroup
                            key={String(field.name)}
                            form={form}
                            name={field.name}
                            id={field.id ?? String(field.name)}
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            options={field.options}
                            disabled={field.disabled}
                            required={field.required}
                            description={field.description}
                            min={field.min}
                            max={field.max}
                            autoComplete={field.autoComplete}
                            className={field.className}
                        />
                    );
                })
            }
        </>
    );
}