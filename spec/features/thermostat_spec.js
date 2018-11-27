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

    it('powerSavingMode is set to false when off',function() {
      thermostat.powerSavingOff();
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('changes maximum temperature to 32 when off', function() {
      thermostat.powerSavingOff();
      while(thermostat.reading() < 32) {
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.reading()).toEqual(32);
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

  describe('reset function', function(){
    it('resets temperature to default', function() {
      while(thermostat.reading() > 10) {
        thermostat.down();
      }
      thermostat.resetTemperature();
      expect(thermostat.reading()).toEqual(default_temp);
    });
  });

  describe('Energy usage', function(){
    it('returns "low-usage" if temperature is < 18', function() {
      while(thermostat.reading() > 17) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('returns "medium-usage" if temperature is < 25', function() {
      while(thermostat.reading() < 24) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('returns "high-usage" if temperature is >= 25', function() {
      while(thermostat.reading() < 25) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
