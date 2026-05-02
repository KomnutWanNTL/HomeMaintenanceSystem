// __tests__/appliance.test.js

import { describe, it, expect, beforeEach } from 'vitest';
import {
  getApplianceList,
  addAppliance,
  updateAppliance,
  deleteAppliance,
  getApplianceById
} from '../db/appliance';

describe('Appliance CRUD', () => {
  beforeEach(() => {
    // Reset in-memory data before each test
    while (getApplianceList().length) {
      deleteAppliance(getApplianceList()[0].id);
    }
  });

  it('should add a new appliance', () => {
    const data = { name: 'Air Conditioner', brand: 'Daikin' };
    const appliance = addAppliance(data);
    expect(appliance.id).toBeDefined();
    expect(appliance.name).toBe('Air Conditioner');
    expect(getApplianceList().length).toBe(1);
  });

  it('should get appliance by id', () => {
    const appliance = addAppliance({ name: 'Fan' });
    const found = getApplianceById(appliance.id);
    expect(found).toBeTruthy();
    expect(found.name).toBe('Fan');
  });

  it('should update appliance', () => {
    const appliance = addAppliance({ name: 'TV' });
    const updated = updateAppliance(appliance.id, { brand: 'Sony' });
    expect(updated.brand).toBe('Sony');
  });

  it('should delete appliance', () => {
    const appliance = addAppliance({ name: 'Fridge' });
    const ok = deleteAppliance(appliance.id);
    expect(ok).toBe(true);
    expect(getApplianceList().length).toBe(0);
  });

  it('should return null for non-existent id', () => {
    expect(getApplianceById(999)).toBeNull();
    expect(updateAppliance(999, {})).toBeNull();
    expect(deleteAppliance(999)).toBe(false);
  });
});
