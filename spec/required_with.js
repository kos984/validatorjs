if (typeof require !== 'undefined') {
  var Validator = require('../src/validator.js');
  var expect = require('chai').expect;
} else {
  var Validator = window.Validator;
  var expect = window.chai.expect;
}

describe.only('required if', function() {
  it('should fail', function() {
    var validator = new Validator({
      desert: {
        first: 'icecream'
      },
      flavour: ''
    }, {
      flavour: 'required_with:desert.first'
    });
    expect(validator.fails()).to.be.true;
    expect(validator.passes()).to.be.false;
    //expect(validator.errors.first('flavour')).to.equal('The flavour field is required when desert is icecream.');
  });

  it.skip('should pass', function() {
    var validator = new Validator({
      desert: 'icecream',
      flavour: 'chocolate'
    }, {
      flavour: 'required_if:desert,icecream'
    });
    expect(validator.passes()).to.be.true;
    expect(validator.fails()).to.be.false;
  });
});
