function Thermostat() {
  this._temperature = 20;
}
Thermostat.prototype.reading = function() { return this._temperature; }
