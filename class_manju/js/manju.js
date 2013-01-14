(function() {
  var Manju, man1, man3, man4;

  Manju = (function() {

    function Manju() {}

    Manju.prototype.taste = 'うまい';

    Manju.prototype.anko = '100グラム';

    Manju.prototype.color = 'white';

    return Manju;

  })();

  man1 = new Manju;

  man3 = new Manju;

  man4 = new Manju;

  alert(man1.taste);

  alert(man3.anko);

  alert(man4.color);

}).call(this);
