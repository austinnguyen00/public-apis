import fetch from 'node-fetch';

// Function to fetch data from the API Endpoint
const fetchData = async () => {
  const res = await fetch('https://api.publicapis.org/entries');
  const data = await res.json();
  const entries = await data.entries;
  return entries;
};

// Function to print values of API decresing alphabetically from given entries
const printApi = (entries) => {
  const api = entries.map((entry) => entry.API); // Get array of API name
  api.sort((a, b) => b.localeCompare(a)); // Sort API containing lowercase and uppercase strings decreasing alphabetically
  console.log(api);
};

// Function to print a number of api entries based on the limit argument matching the category argument
// If the limit argument is not a number then print all matching entries
// If the category cannot be matched then return 'No results'
const filterApi = (entries, category, limit) => {
  const res = entries.filter((entry) => entry.Category === category);
  const isLimitNumber = !isNaN(parseInt(limit)); // Boolean value to check if limit is a number

  if (res.length > 0) {
    if (isLimitNumber) {
      console.log(res.slice(0, limit));
    } else {
      console.log(res);
    }
  } else {
    console.log('No results');
  }
};

// Anonymous async function to await for fetching results of fetching function
(async () => {
  const args = process.argv.slice(2);
  const category = args[0];
  const limit = args[1];
  const entries = await fetchData();
  printApi(entries);
  try {
    filterApi(entries, category, limit);
  } catch (err) {
    console.log('error: ' + err);
  }
})();
