// Functions for format data
export function formatData(data) {
  let formatData = data.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  formatData = formatData.toLowerCase();
  formatData = formatData.charAt(0).toUpperCase() + formatData.slice(1);

  return formatData;
}

export function sortFilterData(data) {
  // Remove occurrences
  data.filter((d, i) => data.indexOf(d) === i);

  // Sort alphabetically
  data.sort();

  // Remove similar words
  for (let i = 1; i < data.length; i++) {
    const firstWordPreviousData = data[i - 1].split(" ")[0];
    const firstWordCurrentData = data[i].split(" ")[0];

    if (
      firstWordPreviousData === firstWordCurrentData ||
      firstWordPreviousData + "s" === firstWordCurrentData
    ) {
      data.splice(i - 1, 2, firstWordPreviousData);
      i--;
    }
  }

  return data;
}
