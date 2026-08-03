"use client";

import {
    FieldValues,
    Path,
    UseFormReturn,
    Controller
} from "react-hook-form";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

import {
    FieldOption,
    FieldType
} from "./form-types";
import { cn } from "@/lib/utils";


type InputGroupProps<
    TFieldValues extends FieldValues,
    TTransformedValues extends FieldValues = TFieldValues
> = {
    form: UseFormReturn<
        TFieldValues,
        unknown,
        TTransformedValues
    >;

    name: Path<TFieldValues>;

    label: string;

    id: string;

    type?: FieldType;

    placeholder?: string;

    options?: FieldOption[];

    disabled?: boolean;

    required?: boolean;

    description?: string;

    min?: number;

    max?: number;

    autoComplete?: string;

    className?: string;
};


export default function InputGroup<
    TFieldValues extends FieldValues,
    TTransformedValues extends FieldValues = TFieldValues
>({
    form,
    name,
    label,
    id,
    type = "text",
    placeholder = "",
    options = [],
    disabled = false,
    required = false,
    description,
    min,
    max,
    autoComplete,
    className,
}: InputGroupProps<TFieldValues, TTransformedValues>) {


    const error = form.formState.errors[name];


    const errorMessage = error ? (
        <p className="text-sm text-destructive">
            {error.message as string}
        </p>
    ) : null;


    const descriptionNode = description ? (
        <p className="text-sm text-muted-foreground">
            {description}
        </p>
    ) : null;



    if (type === "textarea") {
        return (
            <div className="space-y-2">

                <Label htmlFor={id}>
                    {label}
                    {required && " *"}
                </Label>

                <Textarea
                    id={id}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    {...form.register(name)}
                />

                {descriptionNode}
                {errorMessage}

            </div>
        );
    }



    if (type === "select") {
        return (
            <div className="space-y-2">

                <Label>
                    {label}
                    {required && " *"}
                </Label>

                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Select
                            value={field.value ?? ""}
                            onValueChange={field.onChange}
                            disabled={disabled}
                        >

                            <SelectTrigger id={id}>
                                <SelectValue
                                    placeholder={placeholder}
                                />
                            </SelectTrigger>


                            <SelectContent>

                                {options.map(option => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}

                            </SelectContent>

                        </Select>
                    )}
                />

                {descriptionNode}
                {errorMessage}

            </div>
        );
    }



    if (type === "checkbox") {
        return (
            <div className="space-y-2">

                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <div className="flex items-center gap-2">

                            <Checkbox
                                id={id}
                                checked={field.value ?? false}
                                onCheckedChange={field.onChange}
                                disabled={disabled}
                            />

                            <Label htmlFor={id}>
                                {label}
                            </Label>

                        </div>
                    )}
                />

                {errorMessage}

            </div>
        );
    }



    if (type === "switch") {
        return (
            <div className={cn("flex items-center justify-between rounded-lg border p-4", className)}>

                <Label htmlFor={id}>
                    {label}
                </Label>

                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <Switch
                            id={id}
                            checked={field.value ?? false}
                            onCheckedChange={field.onChange}
                            disabled={disabled}
                        />
                    )}
                />

            </div>
        );
    }



    const inputType =
        type === "datetime"
            ? "datetime-local"
            : type;



    return (
        <div className="space-y-2">

            <Label htmlFor={id}>
                {label}
                {required && " *"}
            </Label>


            <Input
                id={id}
                type={inputType}
                placeholder={placeholder}
                disabled={disabled}
                min={min}
                max={max}
                autoComplete={autoComplete}
                {...form.register(name, {
                    valueAsNumber: type === "number",
                })}
            />


            {descriptionNode}
            {errorMessage}

        </div>
    );
}