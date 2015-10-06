/**
 * Created by Gilbert on 9/29/2015.
 */
/**
 *  This file contains functions that deal with  greenjob data set.
 * */
/** A variable name testData that holds a certain amount of the greebjobs set  */
/*globals _, greenjobs */
/*exported testData, listIndustries, countyGreenJobs, jobswithKeyword*/
var testData = greenjobs.splice(0, 10);

/**
 * Returns true if passed record has an Industry field.
 * @param record      The record.
 * @returns {boolean} True if Industry field is present.
 */
function hasIndustry(record){
  return record.hasOwnProperty("Industry");
}

/**
 * Returns true if passed record has an empty Industry field
 * @param record      The record.
 * @returns {boolean} True if Industry field is present.
 */
function emptyIndustry(record){
    return record["Industry"] !== "";
}

/**
 * Plucks greenjobs dataset for industries and delete duplicates
 * @param  The greenjobs dataset
 * @returns {*} Array of unique greenjob industries
 */
function listIndustries(data) {
  if (!_.every(data, hasIndustry)) {
    throw new Error("No Industry field.");
  }
  if (!_.every(data, emptyIndustry)) {
    throw new Error("Industry field is empty");
  }
  else {
    return _.uniq(_.pluck(data, 'Industry'));
  }
}

/**
 * Returns the total number of greenjobs in each county.
 * @param greenjobs dataset
 * @returns {*} An object with the county and their total amount of greenjobs
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

/**
 * @param data
 * @param keyword
 * @returns {*} list of job titles containing the keyword
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) !== -1; });

  return _.pluck(jobs, 'Job Title');
}

