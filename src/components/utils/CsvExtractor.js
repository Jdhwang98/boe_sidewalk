import Papa from 'papaparse'


/*
This method takes in a file object
and handles the CSV extraction
*/
function extractCSVData(csvFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvString = event.target.result;

      Papa.parse(csvString, {
        header: false,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        },
      });
    };

    reader.readAsText(csvFile);
  });
}

export default extractCSVData;