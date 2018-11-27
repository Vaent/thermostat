'use strict';

describe('Thermostat', function() {
  var thermostat;
  var default_temp;
  beforeEach(function() {
    thermostat = new Thermostat();
    default_temp = thermostat.reading();
  });
  it('is set to 20 by default', function() {
    expect(thermostat.reading()).toEqual(20);
  });

  describe('Up function',function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.reading()).toEqual(default_temp + 1);
    });
  });

  describe('Down function', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.reading()).toEqual(default_temp - 1);
    });
  });
});
