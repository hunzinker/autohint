describe("autoHint", function() {

  beforeEach(function() {
    loadFixtures("form.html");
    $('form :input.auto-hint').autoHint();
  });

  it("adds form hints to elements with class auto-hint", function() {
    expect($('#name').val()).toEqual("Enter your name.");
  });

  it("removes form hint on focus", function() {
    expect($('#name').focus().val()).toEqual("");
  });

  it("replaces form hint without input data on blur", function() {
    expect($('#name').focus().blur().val()).toEqual("Enter your name.");
  });

  it("replaces form hint with input data on blur", function() {
    var input = "The Bobs";
    expect($('#name').val(input).blur().val()).toEqual(input);
  });

  it("removes form hints on submit", function() {
    $('form :input.auto-hint').autoHint('removeHintsOnSubmit');
    expect($('#name').val()).toEqual('');
  });

});
