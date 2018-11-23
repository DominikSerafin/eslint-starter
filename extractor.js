
// include jquery
(function(){
  var script = document.createElement('script');
  script.type = "text/javascript";
  //script.async = true;
  script.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
  script.onload = function(){
    extract();
  }
  document.getElementsByTagName('head')[0].appendChild(script);
})();
  



// extract rules from https://eslint.org/docs/rules/
function scrapeRules(id){
  var rules = [];
  var container = $(id + ' ~ table.rule-list').eq(0);
  var columnsBeforeComment = 32;
  var ruleEl = container.find('tr');
  $(ruleEl).each(function(index, el){
    var name = $(el).find('td').eq(2).text().trim();
    var desc = $(el).find('td').eq(3).text().trim();
    var commentSpaces = columnsBeforeComment - name.length;
    var spacesString = ' '.repeat(commentSpaces);
    rules.push(`"${name}": 0,${spacesString}// ${desc}`);
  });
  return rules;
}



function extract() {

  // extract...
  //console.log(stylisticRules.join('\r\n'));
  var sections = {
    'Possible Errors': scrapeRules('#possible-errors'),
    'Best Practices': scrapeRules('#best-practices'),
    'Strict Mode': scrapeRules('#strict-mode'),
    'Variables': scrapeRules('#variables'),
    'Node.js and CommonJS': scrapeRules('#nodejs-and-commonjs'),
    'Stylistic Issues': scrapeRules('#stylistic-issues'),
    'ECMAScript 6': scrapeRules('#ecmascript-6'),
    //'Deprecated': scrapeRules('#deprecated'),
    //'Removed': scrapeRules('#removed'),
  }


  var rulesString = ``;
  
  for (var key of Object.keys(sections)) {
    var val = sections[key];
    //console.log(key);
    var sectionString = (
      '////////// ' + key + ' //////////' +
      '\r\n\r\n' +
      val.join('\r\n') +
      '\r\n\r\n'
    );
    rulesString += sectionString;
  }

  console.log(rulesString);

}



