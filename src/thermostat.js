function Thermostat() {
  this._temperature = 20;
}
Thermostat.prototype.reading = function() { return this._temperature; }
Thermostat.prototype.up = function () { this._temperature++; };
Thermostat.prototype.down = function () { this._temperature--; };
