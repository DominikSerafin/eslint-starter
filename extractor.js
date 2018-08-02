// include jquery
(function(){
  var script = document.createElement('script');
  script.type = "text/javascript";
  //script.async = true;
  script.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
  document.getElementsByTagName('head')[0].appendChild(script);
  jQuery.noConflict();
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

var stylisticRules = scrapeRules('#stylistic-issues');
console.log(stylisticRules.join('\r\n'));
