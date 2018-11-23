# ESLint Starter

ESLint config starter that contains every rule which is disabled on start and commented with description. Create your own config by enabling only the rules you need. 

Inspired by the original [ESLint Reset gist](https://gist.github.com/cletusw/e01a85e399ab563b1236) by [cletusw](https://gist.github.com/cletusw). Unfortunately (at the time of writing this) that gist wasn't updated with all the new, deprecated & removed rules. This repo was created with intent to fix that.

# Extractor

I try to update this package when I can. But sometimes it might be a little outdated. In that case you can use special script which I wrote to extract the rules. 

1. Go to https://eslint.org/docs/rules/.
2. Open DevTools  and go to console.
3. Copy, paste and execute [extractor.js](extractor.js) script.
4. You should get rules in the console output. Just copy those to your eslint config. Note that some DevTools might hide full console output. E.g. in Google Chrome DevTools you need to click "Show xxx more" at the end of output.  

# Contributing

Any contributions are always welcome. 

# Useful related resources

* Official ESLint docs with rules: http://eslint.org/docs/rules/
* ESLint recommended rules: https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
* Airbnb Style Guide: https://github.com/airbnb/javascript
* StandardJS: https://standardjs.com/
* Original ESLint Reset gist: https://gist.github.com/cletusw/e01a85e399ab563b1236
