/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const units = [{gal:{convertTo: "L", unitConversion: 3.78541}},
                {l:{convertTo: "gal", unitConversion: 0.26417}},
                {lbs:{convertTo: "kg", unitConversion: 0.453592}},
                {kg:{convertTo: "lbs", unitConversion: 2.20462}},
                {mi:{convertTo: "km", unitConversion: 1.60934}},
                {km:{convertTo: "mi", unitConversion: 0.62137}}
               ]
  
  this.getNum = function(input) {
    const regex = /[a-zA-Z]/;
    const num = input.split(regex);
    let result;

    // result = num[0] !== "" ? num[0] : "invalid number";    
    if (num[0] !== "") {
      if (num[0].includes("/")) {
        result = num[0].split("/").length !== 2 ? "invalid number" : eval(num[0]);
      } else {
        result = parseFloat(num[0]);
      }
    } else {
      result = 1;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-zA-Z]+$/)[0].toLowerCase();
    if (!result || !units.find(element => element.hasOwnProperty(result))) {return "invalid unit"}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = initUnit === "invalid unit"? null: units.find(element => element.hasOwnProperty(initUnit))[initUnit].convertTo;
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    
  };
  
  this.convert = function(initNum, initUnit) {
    var unitConversion = initNum === "invalid number"? null: initUnit === "invalid unit"? null : units.find(element => element.hasOwnProperty(initUnit))[initUnit].unitConversion
    var result = initNum * unitConversion;
    return result
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (initNum === "invalid number" && initUnit === "invalid unit") {return {message: "invalid number and unit"}}
    else if (initNum === "invalid number") {return {message: "invalid number"}}
    else if (initUnit === "invalid unit") {return {message: "invalid unit"}}
    else {return initNum + " " + initUnit + " converts to " + Math.round(returnNum * 100000)/100000 + " " + returnUnit;
    }
  }
}

module.exports = ConvertHandler;
 