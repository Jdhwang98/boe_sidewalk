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
export declare type SidewalkUpdateFormInputValues = {
    SectionID?: number;
    x_slope?: number;
    y_slope?: number;
    h_displacement?: number;
    v_displacement?: number;
    compliance?: boolean;
    lat?: number;
    lon?: number;
};
export declare type SidewalkUpdateFormValidationValues = {
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
export declare type SidewalkUpdateFormOverridesProps = {
    SidewalkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionID?: PrimitiveOverrideProps<TextFieldProps>;
    x_slope?: PrimitiveOverrideProps<TextFieldProps>;
    y_slope?: PrimitiveOverrideProps<TextFieldProps>;
    h_displacement?: PrimitiveOverrideProps<TextFieldProps>;
    v_displacement?: PrimitiveOverrideProps<TextFieldProps>;
    compliance?: PrimitiveOverrideProps<SwitchFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SidewalkUpdateFormProps = React.PropsWithChildren<{
    overrides?: SidewalkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sidewalk?: any;
    onSubmit?: (fields: SidewalkUpdateFormInputValues) => SidewalkUpdateFormInputValues;
    onSuccess?: (fields: SidewalkUpdateFormInputValues) => void;
    onError?: (fields: SidewalkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SidewalkUpdateFormInputValues) => SidewalkUpdateFormInputValues;
    onValidate?: SidewalkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SidewalkUpdateForm(props: SidewalkUpdateFormProps): React.ReactElement;
