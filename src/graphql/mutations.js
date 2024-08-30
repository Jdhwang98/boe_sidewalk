/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSidewalk = /* GraphQL */ `
  mutation CreateSidewalk(
    $input: CreateSidewalkInput!
    $condition: ModelSidewalkConditionInput
  ) {
    createSidewalk(input: $input, condition: $condition) {
      SectionID
      x_slope
      y_slope
      h_displacement
      v_displacement
      compliance
      lat
      lon
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSidewalk = /* GraphQL */ `
  mutation UpdateSidewalk(
    $input: UpdateSidewalkInput!
    $condition: ModelSidewalkConditionInput
  ) {
    updateSidewalk(input: $input, condition: $condition) {
      SectionID
      x_slope
      y_slope
      h_displacement
      v_displacement
      compliance
      lat
      lon
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSidewalk = /* GraphQL */ `
  mutation DeleteSidewalk(
    $input: DeleteSidewalkInput!
    $condition: ModelSidewalkConditionInput
  ) {
    deleteSidewalk(input: $input, condition: $condition) {
      SectionID
      x_slope
      y_slope
      h_displacement
      v_displacement
      compliance
      lat
      lon
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
