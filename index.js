// Function that takes one parameter and returns a greeting
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function that takes two parameters and returns a phrase
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function that takes two parameters with a default value for language
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  