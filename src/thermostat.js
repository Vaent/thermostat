function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 25;
  this._powerSavingMode = true;
}
Thermostat.prototype.reading = function() {
  return this._temperature;
}
Thermostat.prototype.up = function () {
  if(this._temperature < this._maximumTemperature) {
    this._temperature++;
  }
};
Thermostat.prototype.down = function () {
  if(this._temperature > this._minimumTemperature) {
    this._temperature--;
  }
};
Thermostat.prototype.powerSavingOn = function () {
  this._maximumTemperature = 25;
  this._powerSavingMode = true;
};
Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSavingMode;
};
