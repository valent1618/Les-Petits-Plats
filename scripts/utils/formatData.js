// Functions for format data
export function formatData(data) {
    let formatData = data.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    formatData = formatData.toLowerCase();
    formatData = formatData.charAt(0).toUpperCase() + formatData.slice(1);

    return formatData;
}

export function sortFilterData(data) {
    // Remove occurrences
    let sortFilterData = data.filter((d, i) => data.indexOf(d) === i);

    // Sort alphabetically
    sortFilterData.sort();

    // Remove similar words
    for(let i=1; i < sortFilterData.length; i++) {
        const firstWordPreviousData = sortFilterData[i-1].split(' ')[0];
        const firstWordCurrentData = sortFilterData[i].split(' ')[0];
    
        if(firstWordPreviousData === firstWordCurrentData || firstWordPreviousData + 's' === firstWordCurrentData) {
            sortFilterData.splice(i-1, 2, firstWordPreviousData);
            i--;
        }
    }

    return sortFilterData;
}