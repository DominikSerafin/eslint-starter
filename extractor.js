// extract rules from https://eslint.org/docs/rules/
function scrapeRules(id){

  var rules = [];
  var container = $(id + ' ~ table.rule-list').eq(0);

  var ruleEl = container.find('tr');

  $(ruleEl).each(function(index, el){
    var name = $(el).find('td').eq(2).text().trim();
    var desc = $(el).find('td').eq(3).text().trim();
    rules.push(`"${name}": 0,  // ${desc}`);
  });

  return rules;
}

var stylisticRules = scrapeRules('#stylistic-issues');
console.log(stylisticRules.join('\r\n'));
