export const truncate = (str, maxLength) => {
  return str.length <= maxLength ? str : str.substring(0, maxLength) + "...";
};

export const getPageCount = (totalPages, totalResultsDisplayed) => {
  const divisible = 0 === totalPages % totalResultsDisplayed;
  const pagesToBeAdded = divisible ? 0 : 1;
  return Math.floor(totalPages / totalResultsDisplayed) + pagesToBeAdded;
};

export const dateFormator = (date) => {
  let parsedDate = new Date(date);
  return (
    parsedDate.toLocaleDateString() +
    " " +
    parsedDate
      .toTimeString()
      .substring(0, parsedDate.toTimeString().indexOf("GMT"))
  );
};
