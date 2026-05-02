// db/appliance.js
// Appliance data access and CRUD for Home Maintenance System
// Using SQLite WASM (sql.js) - placeholder for now

// TODO: Replace with actual SQLite WASM integration
// For now, use in-memory array for structure

let appliances = [];
let nextId = 1;

export function getApplianceList() {
  // Return all appliances
  return appliances;
}

export function addAppliance(data) {
  // Add new appliance, auto-increment id
  const appliance = { id: nextId++, ...data };
  appliances.push(appliance);
  return appliance;
}

export function updateAppliance(id, data) {
  // Update appliance by id
  const idx = appliances.findIndex(a => a.id === id);
  if (idx === -1) return null;
  appliances[idx] = { ...appliances[idx], ...data };
  return appliances[idx];
}

export function deleteAppliance(id) {
  // Delete appliance by id
  const idx = appliances.findIndex(a => a.id === id);
  if (idx === -1) return false;
  appliances.splice(idx, 1);
  return true;
}

export function getApplianceById(id) {
  // Get appliance by id
  return appliances.find(a => a.id === id) || null;
}
