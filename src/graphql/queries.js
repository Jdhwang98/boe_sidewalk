/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSidewalk = /* GraphQL */ `
  query GetSidewalk($id: ID!) {
    getSidewalk(id: $id) {
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
export const listSidewalks = /* GraphQL */ `
  query ListSidewalks(
    $filter: ModelSidewalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSidewalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
