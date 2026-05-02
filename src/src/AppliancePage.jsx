import { useState } from 'react';
import { getApplianceList, addAppliance, updateAppliance, deleteAppliance } from './db/appliance';

export default function AppliancePage() {
  // For now, use in-memory data
  const [appliances, setAppliances] = useState(() => getApplianceList());
  const [form, setForm] = useState({ name: '', brand: '', model_number: '', location: '' });
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editId) {
      updateAppliance(editId, form);
      setEditId(null);
    } else {
      addAppliance(form);
    }
    setForm({ name: '', brand: '', model_number: '', location: '' });
    setAppliances(getApplianceList());
  }

  function handleEdit(a) {
    setForm({ name: a.name, brand: a.brand || '', model_number: a.model_number || '', location: a.location || '' });
    setEditId(a.id);
  }

  function handleDelete(id) {
    if (window.confirm('ลบอุปกรณ์นี้?')) {
      deleteAppliance(id);
      setAppliances(getApplianceList());
      if (editId === id) {
        setEditId(null);
        setForm({ name: '', brand: '', model_number: '', location: '' });
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">รายการอุปกรณ์ (Appliances)</h1>
      <form className="mb-4 bg-gray-50 rounded p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input className="border p-2 flex-1" name="name" placeholder="ชื่ออุปกรณ์ *" value={form.name} onChange={handleChange} required />
          <input className="border p-2 flex-1" name="brand" placeholder="ยี่ห้อ" value={form.brand} onChange={handleChange} />
        </div>
        <div className="flex gap-2">
          <input className="border p-2 flex-1" name="model_number" placeholder="รุ่น" value={form.model_number} onChange={handleChange} />
          <input className="border p-2 flex-1" name="location" placeholder="สถานที่ติดตั้ง" value={form.location} onChange={handleChange} />
        </div>
        <div className="flex gap-2 justify-end">
          {editId && <button type="button" className="px-3 py-1 bg-gray-300 rounded" onClick={() => { setEditId(null); setForm({ name: '', brand: '', model_number: '', location: '' }); }}>ยกเลิก</button>}
          <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">{editId ? 'บันทึก' : 'เพิ่ม'}</button>
        </div>
      </form>
      <div className="bg-white rounded shadow p-4">
        {appliances.length === 0 ? (
          <div className="text-gray-500 text-center">ยังไม่มีข้อมูลอุปกรณ์</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ชื่อ</th>
                <th className="p-2 border">ยี่ห้อ</th>
                <th className="p-2 border">รุ่น</th>
                <th className="p-2 border">สถานที่</th>
                <th className="p-2 border">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {appliances.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{a.name}</td>
                  <td className="p-2 border">{a.brand || '-'}</td>
                  <td className="p-2 border">{a.model_number || '-'}</td>
                  <td className="p-2 border">{a.location || '-'}</td>
                  <td className="p-2 border text-right">
                    <button className="text-xs text-blue-600 mr-2" onClick={() => handleEdit(a)}>แก้ไข</button>
                    <button className="text-xs text-red-600" onClick={() => handleDelete(a.id)}>ลบ</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
