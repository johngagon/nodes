
const common = {

  simpleParse(rowString) {
    return rowString.split(',');
  },

  arraysToObjects(columns, rows) {
    const result = rows.map(function(row) {
      return row.reduce(function(result, field, index) {
        result[columns[index]] = field;
        return result;
      }, {});
    });
    return result;
  },

  _testArraysToObjects(){
    const columns = ["Date", "Number", "Size", "Location", "Age"];

    const rows = [
      ["2001", "5", "Big", "Sydney", "25"],
      ["2005", "2", "Med", "Melbourne", "50"],
      ["2012", "20", "Huge", "Brisbane", "80"]
    ];
    const result = this.arraysToObjects(columns,rows);
    return JSON.stringify(result);
  },

  _testSimpleParse(){
    const str = '2001, 5, Big, Sydney, 25';
    const result = this.simpleParse(str);
    return JSON.stringify(result);
  }
};

export default common;