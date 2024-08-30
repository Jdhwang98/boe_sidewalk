/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSidewalk } from "../graphql/queries";
import { updateSidewalk } from "../graphql/mutations";
const client = generateClient();
export default function SidewalkUpdateForm(props) {
  const {
    id: idProp,
    sidewalk: sidewalkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SectionID: "",
    x_slope: "",
    y_slope: "",
    h_displacement: "",
    v_displacement: "",
    compliance: false,
    lat: "",
    lon: "",
  };
  const [SectionID, setSectionID] = React.useState(initialValues.SectionID);
  const [x_slope, setX_slope] = React.useState(initialValues.x_slope);
  const [y_slope, setY_slope] = React.useState(initialValues.y_slope);
  const [h_displacement, setH_displacement] = React.useState(
    initialValues.h_displacement
  );
  const [v_displacement, setV_displacement] = React.useState(
    initialValues.v_displacement
  );
  const [compliance, setCompliance] = React.useState(initialValues.compliance);
  const [lat, setLat] = React.useState(initialValues.lat);
  const [lon, setLon] = React.useState(initialValues.lon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sidewalkRecord
      ? { ...initialValues, ...sidewalkRecord }
      : initialValues;
    setSectionID(cleanValues.SectionID);
    setX_slope(cleanValues.x_slope);
    setY_slope(cleanValues.y_slope);
    setH_displacement(cleanValues.h_displacement);
    setV_displacement(cleanValues.v_displacement);
    setCompliance(cleanValues.compliance);
    setLat(cleanValues.lat);
    setLon(cleanValues.lon);
    setErrors({});
  };
  const [sidewalkRecord, setSidewalkRecord] = React.useState(sidewalkModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSidewalk.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSidewalk
        : sidewalkModelProp;
      setSidewalkRecord(record);
    };
    queryData();
  }, [idProp, sidewalkModelProp]);
  React.useEffect(resetStateValues, [sidewalkRecord]);
  const validations = {
    SectionID: [{ type: "Required" }],
    x_slope: [{ type: "Required" }],
    y_slope: [{ type: "Required" }],
    h_displacement: [{ type: "Required" }],
    v_displacement: [{ type: "Required" }],
    compliance: [{ type: "Required" }],
    lat: [{ type: "Required" }],
    lon: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          SectionID,
          x_slope,
          y_slope,
          h_displacement,
          v_displacement,
          compliance,
          lat,
          lon,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSidewalk.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sidewalkRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SidewalkUpdateForm")}
      {...rest}
    >
      <TextField
        label="Section id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={SectionID}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID: value,
              x_slope,
              y_slope,
              h_displacement,
              v_displacement,
              compliance,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.SectionID ?? value;
          }
          if (errors.SectionID?.hasError) {
            runValidationTasks("SectionID", value);
          }
          setSectionID(value);
        }}
        onBlur={() => runValidationTasks("SectionID", SectionID)}
        errorMessage={errors.SectionID?.errorMessage}
        hasError={errors.SectionID?.hasError}
        {...getOverrideProps(overrides, "SectionID")}
      ></TextField>
      <TextField
        label="X slope"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={x_slope}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope: value,
              y_slope,
              h_displacement,
              v_displacement,
              compliance,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.x_slope ?? value;
          }
          if (errors.x_slope?.hasError) {
            runValidationTasks("x_slope", value);
          }
          setX_slope(value);
        }}
        onBlur={() => runValidationTasks("x_slope", x_slope)}
        errorMessage={errors.x_slope?.errorMessage}
        hasError={errors.x_slope?.hasError}
        {...getOverrideProps(overrides, "x_slope")}
      ></TextField>
      <TextField
        label="Y slope"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={y_slope}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope: value,
              h_displacement,
              v_displacement,
              compliance,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.y_slope ?? value;
          }
          if (errors.y_slope?.hasError) {
            runValidationTasks("y_slope", value);
          }
          setY_slope(value);
        }}
        onBlur={() => runValidationTasks("y_slope", y_slope)}
        errorMessage={errors.y_slope?.errorMessage}
        hasError={errors.y_slope?.hasError}
        {...getOverrideProps(overrides, "y_slope")}
      ></TextField>
      <TextField
        label="H displacement"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={h_displacement}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope,
              h_displacement: value,
              v_displacement,
              compliance,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.h_displacement ?? value;
          }
          if (errors.h_displacement?.hasError) {
            runValidationTasks("h_displacement", value);
          }
          setH_displacement(value);
        }}
        onBlur={() => runValidationTasks("h_displacement", h_displacement)}
        errorMessage={errors.h_displacement?.errorMessage}
        hasError={errors.h_displacement?.hasError}
        {...getOverrideProps(overrides, "h_displacement")}
      ></TextField>
      <TextField
        label="V displacement"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={v_displacement}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope,
              h_displacement,
              v_displacement: value,
              compliance,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.v_displacement ?? value;
          }
          if (errors.v_displacement?.hasError) {
            runValidationTasks("v_displacement", value);
          }
          setV_displacement(value);
        }}
        onBlur={() => runValidationTasks("v_displacement", v_displacement)}
        errorMessage={errors.v_displacement?.errorMessage}
        hasError={errors.v_displacement?.hasError}
        {...getOverrideProps(overrides, "v_displacement")}
      ></TextField>
      <SwitchField
        label="Compliance"
        defaultChecked={false}
        isDisabled={false}
        isChecked={compliance}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope,
              h_displacement,
              v_displacement,
              compliance: value,
              lat,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.compliance ?? value;
          }
          if (errors.compliance?.hasError) {
            runValidationTasks("compliance", value);
          }
          setCompliance(value);
        }}
        onBlur={() => runValidationTasks("compliance", compliance)}
        errorMessage={errors.compliance?.errorMessage}
        hasError={errors.compliance?.hasError}
        {...getOverrideProps(overrides, "compliance")}
      ></SwitchField>
      <TextField
        label="Lat"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope,
              h_displacement,
              v_displacement,
              compliance,
              lat: value,
              lon,
            };
            const result = onChange(modelFields);
            value = result?.lat ?? value;
          }
          if (errors.lat?.hasError) {
            runValidationTasks("lat", value);
          }
          setLat(value);
        }}
        onBlur={() => runValidationTasks("lat", lat)}
        errorMessage={errors.lat?.errorMessage}
        hasError={errors.lat?.hasError}
        {...getOverrideProps(overrides, "lat")}
      ></TextField>
      <TextField
        label="Lon"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lon}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SectionID,
              x_slope,
              y_slope,
              h_displacement,
              v_displacement,
              compliance,
              lat,
              lon: value,
            };
            const result = onChange(modelFields);
            value = result?.lon ?? value;
          }
          if (errors.lon?.hasError) {
            runValidationTasks("lon", value);
          }
          setLon(value);
        }}
        onBlur={() => runValidationTasks("lon", lon)}
        errorMessage={errors.lon?.errorMessage}
        hasError={errors.lon?.hasError}
        {...getOverrideProps(overrides, "lon")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sidewalkModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sidewalkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
