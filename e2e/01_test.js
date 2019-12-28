
module.exports = {
  

    '@tags': ['Test','First test', 'load www'],
  
    'step 1: navigate to WebDmi' : function (browser) {
      browser
      .url(browser.globals.url)
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
    },
  };