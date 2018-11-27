'use strict';

describe('Thermostat', function() {
  it('is set to 20 by default', function() {
    var thermostat = new Thermostat();
    expect(thermostat.reading()).toEqual(20);
  });
});
