// this block is used to make this module works with Node (CommonJS module format)
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['lodash'], (_) => {
  let log = console;

  function handleNestedFields(object, key, params, paramType) {
    const attributes = key.split('.');
    const field = attributes[0];
    params.push(field);
    if (attributes.length > 1 && paramType[params.join('.')] == 'Object') {
      const nestedField = attributes.slice(1).join('.');
      if (!object[field]) object[field] = {};
      if (typeof object[field] === 'object') {
        object[field][nestedField] = object[key];
        delete object[key];
        handleNestedFields(object[field], nestedField, params, paramType);
      }
    }
  }

  function handleNestedFieldsForAllParams(param, paramType) {
    const result = { ...param };
    Object.keys(result).forEach((key) => {
      handleNestedFields(result, key, [], paramType);
    });
    return result;
  }

  function handleArraysAndObjectFields(param, paramType) {
    const result = { ...param };
    Object.keys(paramType).forEach((key) => {
      if (result[key] && (paramType[key].endsWith('[]') || paramType[key] === 'Object')) {
        try {
          result[key] = JSON.parse(result[key]);
        } catch (e) {}
      }
    });
    return result;
  }

  function tryParsingAsType(object, path, type) {
    const val = _.get(object, path);
    if (val !== undefined) {
      if (type === 'Boolean') {
        if (val === 'true') {
          _.set(object, path, true);
        } else if (val === 'false') {
          _.set(object, path, false);
        } else {
          log.warn(`Failed to parse object value at path [${path}]. Value: (${val}). Type: (${type})`);
        }
      } else if (type === 'Number') {
        const parsedInt = parseInt(val, 10);
        if (!_.isNaN(parsedInt)) {
          _.set(object, path, parsedInt);
        } else {
          log.warn(`Failed to parse object value at path [${path}]. Value: (${val}). Type: (${type})`);
        }
      }
    }
  }

  function handleNestedAndParsingFields(param, paramType) {
    let result = handleArraysAndObjectFields(param, paramType);
    result = handleNestedFieldsForAllParams(result, paramType);
    return result;
  }

  function tryParsingWithTypes(param, paramType) {
    const result = { ...param };
    Object.keys(paramType).forEach((key) => {
      tryParsingAsType(result, key, paramType[key]);
    });
    return result;
  }

  // Converts path params in the {param} format to the accepted :param format, used before inserting the URL params.
  function convertPathParams(url) {
    return url.replace(/{(.+?)}/g, ':$1');
  }

  function setLogger(logger) {
    log = logger;
  }

  return {
    handleNestedAndParsingFields,
    convertPathParams,
    tryParsingWithTypes,
    setLogger,
  };
});
