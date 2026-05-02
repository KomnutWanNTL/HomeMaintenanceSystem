import { useState } from 'react';

// Mock data for task templates
let mockTemplates = [
  { id: 1, name: 'ล้างแผ่นกรองแอร์', frequency_days: 90, remark: 'ควรล้างทุก 3 เดือน' },
  { id: 2, name: 'เปลี่ยนไส้กรองน้ำ', frequency_days: 180, remark: 'ควรเปลี่ยนทุก 6 เดือน' },
];
let nextId = 3;

export default function TaskTemplatePage() {
  const [templates, setTemplates] = useState([...mockTemplates]);
  const [form, setForm] = useState({ name: '', frequency_days: '', remark: '' });
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.frequency_days) return;
    if (editId) {
      setTemplates(ts => ts.map(t => t.id === editId ? { ...t, ...form, frequency_days: Number(form.frequency_days) } : t));
      setEditId(null);
    } else {
      setTemplates(ts => [...ts, { ...form, id: nextId++, frequency_days: Number(form.frequency_days) }]);
    }
    setForm({ name: '', frequency_days: '', remark: '' });
  }

  function handleEdit(t) {
    setForm({ name: t.name, frequency_days: t.frequency_days, remark: t.remark || '' });
    setEditId(t.id);
  }

  function handleDelete(id) {
    if (window.confirm('ลบ Task Template นี้?')) {
      setTemplates(ts => ts.filter(t => t.id !== id));
      if (editId === id) {
        setEditId(null);
        setForm({ name: '', frequency_days: '', remark: '' });
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Template Management</h1>
      <form className="mb-4 bg-gray-50 rounded p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input className="border p-2 flex-1" name="name" placeholder="ชื่องาน *" value={form.name} onChange={handleChange} required />
          <input className="border p-2 w-32" name="frequency_days" type="number" min="1" placeholder="รอบ (วัน) *" value={form.frequency_days} onChange={handleChange} required />
        </div>
        <input className="border p-2" name="remark" placeholder="หมายเหตุ" value={form.remark} onChange={handleChange} />
        <div className="flex gap-2 justify-end">
          {editId && <button type="button" className="px-3 py-1 bg-gray-300 rounded" onClick={() => { setEditId(null); setForm({ name: '', frequency_days: '', remark: '' }); }}>ยกเลิก</button>}
          <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">{editId ? 'บันทึก' : 'เพิ่ม'}</button>
        </div>
      </form>
      <div className="bg-white rounded shadow p-4">
        {templates.length === 0 ? (
          <div className="text-gray-500 text-center">ยังไม่มี Task Template</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ชื่องาน</th>
                <th className="p-2 border">รอบ (วัน)</th>
                <th className="p-2 border">หมายเหตุ</th>
                <th className="p-2 border">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{t.name}</td>
                  <td className="p-2 border text-center">{t.frequency_days}</td>
                  <td className="p-2 border">{t.remark || '-'}</td>
                  <td className="p-2 border text-right">
                    <button className="text-xs text-blue-600 mr-2" onClick={() => handleEdit(t)}>แก้ไข</button>
                    <button className="text-xs text-red-600" onClick={() => handleDelete(t.id)}>ลบ</button>
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
