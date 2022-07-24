
(function(){
    "use strict";
    const Omok = require("./src/Omok/OmokMain");
    const Action = require("./src/Omok/ActionClass/Action");
    module.exports = {
        "Omok" : Omok.Omok,
        "Occupied" : Action.Occupied,
        "InvalidPosition" : Action.InvalidPosition,
        "PutError" : Action.PutError,
        "Forbid33" : Action.Forbid33,
        "Forbid44" : Action.Forbid44,
        "Forbid6" : Action.Forbid6,
        "Forbid" : Action.Forbid,
        "OpeningOk" : Action.OpeningOk,
        "OpeningInvalid" : Action.OpeningInvalid,
        "OpeningError" : Action.OpeningError,
        "OpeningOccupied" : Action.OpeningOccupied,
        "OpeningMirror" : Action.OpeningMirror,
        "BlackWins" : Action.BlackWins,
        "WhiteWins" : Action.WhiteWins,
        "PutComplete" : Action.PutComplete,
        "Undo" : Action.Undo,
    }
})();

