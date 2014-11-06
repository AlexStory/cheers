QUnit.test( "Get Name", function( assert ) {
  cheer.getName('Alex');
  assert.equal( cheer.name, 'Alex');

  cheer.getName('Eliza');
  assert.equal( cheer.name, 'Eliza');
});

QUnit.test( "preamble", function( assert ) {
  cheer.getName('Bob');
  assert.equal( cheer.preamble(), 'Your name is Bob');

  cheer.getName('Betty');
  assert.equal( cheer.preamble(), 'Your name is Betty');

});

QUnit.test( "postamble", function( assert ) {
  cheer.getName('Jack');
  assert.equal( cheer.postamble(), 'Jack is Great!!!');

  cheer.getName('Jill');
  assert.equal( cheer.postamble(), 'Jill is Great!!!');

});

QUnit.test( "create Arrays from string", function( assert ) {
  cheer.getName('Alex');
  assert.equal( cheer.nameArray()[0], 'A');

  cheer.getName('Autumn');
  assert.equal( cheer.nameArray()[5], 'N');

});

QUnit.test( "Test dom append", function( assert ) {
  cheer.getName('Alex');
  cheer.appendDom();
  var firstLine = $('ul li:first-child' ).text();
  assert.equal( firstLine, 'Your name is Alex');

  cheer.getName('Autumn');
  cheer.appendDom();
  var firstLine = $('ul li:first-child' ).text();
  assert.equal( firstLine, 'Your name is Autumn');
});
