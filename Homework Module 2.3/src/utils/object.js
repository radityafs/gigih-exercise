import _ from "lodash";

export const sort = (data, sortField, sortDirection) => {
  return _.orderBy(data, sortField, sortDirection);
};
