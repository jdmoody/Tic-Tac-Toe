(function (root) {

  var TTT = root.TTT = (root.TTT || {});

  TTT.UI = function() {
    this.game = new TTT.Game();
    this.count = 0;
    var that = this;
    $('.board').delegate('.cell', 'click', function(event){
      var target = event.currentTarget;
      var cls = target.className.split("-");
      var coords = cls.splice(1,2).map(function(el) { return parseInt(el); });

      if (that.game.valid(coords)) {
        that.placeMark(target, that.game.player);
        that.game.move(coords);
        that.count++;
        var winner = that.game.winner();
        if ( winner !== null ) {
          $('.board').undelegate('.cell', 'click');
          $('.info').text(winner.toUpperCase() + " wins!");
        } else if ( winner === null && that.count === 9){
          $('.info').text("It's a draw!");
        }
      }

    });

  }

  TTT.UI.prototype.placeMark = function(target, mark) {
    $(target).text(mark.toUpperCase());
  }


})(this);