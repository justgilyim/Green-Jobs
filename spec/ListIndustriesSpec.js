/* global _, greenjobs, listIndustries */
describe("ListIndustry", function() {

  var testData = greenjobs.splice(0, 10);

    it("should return a list of industries", function() {
    expect(listIndustries(testData)).toEqual(['Construction', 'Professional, Scientific, and Technical Services ', 'Health Care and Social Assistance ', 'Retail Trade ', 'Other Services (except Public Administration) ']);
  });

  var noIndustriesField = testData.concat({foo:"bar"});

  it("should throw an error when record does not have INDUSTRY field", function(){
    expect(function(){listIndustries(noIndustriesField);}).toThrowError("No Industry field.");
  });

  var nonStringIndustry = testData.concat({"Industry":""})
  it("should throw an error when record has an empty string for Industry field", function(){
    expect(function(){listIndustries(nonStringIndustry);}).toThrowError("Industry field is empty");
  });

});
