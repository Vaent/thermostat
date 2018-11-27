'use strict';

describe('Thermostat', function() {
  var thermostat;
  var default_temp;
  beforeEach(function() {
    thermostat = new Thermostat();
    default_temp = thermostat.reading();
  });
  it('is set to 20 by default', function() {
    expect(thermostat.reading()).toEqual(default_temp);
  });

  describe('Up function',function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.reading()).toEqual(default_temp + 1);
    });
  });

  describe('Power saving', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('limits maximum temperature to 25 when on', function() {
      while(thermostat.reading() < 25) {
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.reading()).toEqual(25);
    });
  });

  describe('Down function', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.reading()).toEqual(default_temp - 1);
    });

    it('has a minimum temperature of 10', function() {
      while(thermostat.reading() > 10) {
        thermostat.down();
      }
      thermostat.down();
      expect(thermostat.reading()).toEqual(10);
    });
  });
});
