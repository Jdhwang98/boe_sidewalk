/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SidewalkCreateFormInputValues = {
    SectionID?: number;
    x_slope?: number;
    y_slope?: number;
    h_displacement?: number;
    v_displacement?: number;
    compliance?: boolean;
    lat?: number;
    lon?: number;
};
export declare type SidewalkCreateFormValidationValues = {
    SectionID?: ValidationFunction<number>;
    x_slope?: ValidationFunction<number>;
    y_slope?: ValidationFunction<number>;
    h_displacement?: ValidationFunction<number>;
    v_displacement?: ValidationFunction<number>;
    compliance?: ValidationFunction<boolean>;
    lat?: ValidationFunction<number>;
    lon?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidewalkCreateFormOverridesProps = {
    SidewalkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionID?: PrimitiveOverrideProps<TextFieldProps>;
    x_slope?: PrimitiveOverrideProps<TextFieldProps>;
    y_slope?: PrimitiveOverrideProps<TextFieldProps>;
    h_displacement?: PrimitiveOverrideProps<TextFieldProps>;
    v_displacement?: PrimitiveOverrideProps<TextFieldProps>;
    compliance?: PrimitiveOverrideProps<SwitchFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SidewalkCreateFormProps = React.PropsWithChildren<{
    overrides?: SidewalkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SidewalkCreateFormInputValues) => SidewalkCreateFormInputValues;
    onSuccess?: (fields: SidewalkCreateFormInputValues) => void;
    onError?: (fields: SidewalkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SidewalkCreateFormInputValues) => SidewalkCreateFormInputValues;
    onValidate?: SidewalkCreateFormValidationValues;
} & React.CSSProperties>;
export default function SidewalkCreateForm(props: SidewalkCreateFormProps): React.ReactElement;
