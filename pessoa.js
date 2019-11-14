var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.olamundo = function () {
        return "Salve";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById("texto").textContent = p.olamundo();
