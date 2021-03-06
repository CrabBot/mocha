
describe('global leaks', function(){
  before(function(){
    // uncomment to test
    // foo = 'hey';
    // bar = 'hey';
  })
  
  beforeEach(function(){
    // uncomment to test
    // foo = 'bar'
  });

  it('should cause tests to fail', function(){
    // uncomment to test
    // foo = 'bar';
    // bar = 'baz';
    // baz = 'raz';
  });

  it('should pass when accepted', function(){
    okGlobalA = 1;
    okGlobalB = 1;
    okGlobalC = 1;
  })

  it('should pass with wildcard', function(){
    callback123 = 'foo';
    callback345 = 'bar';
  })

  afterEach(function(){
    // uncomment to test
    // foo = 'bar'
  });
});