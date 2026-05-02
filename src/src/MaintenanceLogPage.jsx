import { useState } from 'react';

// Mock data for maintenance logs
let mockLogs = [
  { id: 1, appliance: 'แอร์ห้องนอน', task: 'ล้างแผ่นกรอง', performed_date: '2026-04-01', cost: 300, remark: 'ล้างเอง' },
  { id: 2, appliance: 'เครื่องกรองน้ำ', task: 'เปลี่ยนไส้กรอง', performed_date: '2026-03-15', cost: 500, remark: 'ซื้อไส้กรองใหม่' },
];
let nextId = 3;

export default function MaintenanceLogPage() {
  const [logs, setLogs] = useState([...mockLogs]);
  const [form, setForm] = useState({ appliance: '', task: '', performed_date: '', cost: '', remark: '' });
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.appliance.trim() || !form.task.trim() || !form.performed_date) return;
    if (editId) {
      setLogs(ls => ls.map(l => l.id === editId ? { ...l, ...form, cost: Number(form.cost) || 0 } : l));
      setEditId(null);
    } else {
      setLogs(ls => [...ls, { ...form, id: nextId++, cost: Number(form.cost) || 0 }]);
    }
    setForm({ appliance: '', task: '', performed_date: '', cost: '', remark: '' });
  }

  function handleEdit(l) {
    setForm({ appliance: l.appliance, task: l.task, performed_date: l.performed_date, cost: l.cost, remark: l.remark || '' });
    setEditId(l.id);
  }

  function handleDelete(id) {
    if (window.confirm('ลบ Maintenance Log นี้?')) {
      setLogs(ls => ls.filter(l => l.id !== id));
      if (editId === id) {
        setEditId(null);
        setForm({ appliance: '', task: '', performed_date: '', cost: '', remark: '' });
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Maintenance Log</h1>
      <form className="mb-4 bg-gray-50 rounded p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input className="border p-2 flex-1" name="appliance" placeholder="ชื่ออุปกรณ์ *" value={form.appliance} onChange={handleChange} required />
          <input className="border p-2 flex-1" name="task" placeholder="งานที่ทำ *" value={form.task} onChange={handleChange} required />
        </div>
        <div className="flex gap-2">
          <input className="border p-2 w-40" name="performed_date" type="date" value={form.performed_date} onChange={handleChange} required />
          <input className="border p-2 w-32" name="cost" type="number" min="0" placeholder="ค่าใช้จ่าย (บาท)" value={form.cost} onChange={handleChange} />
        </div>
        <input className="border p-2" name="remark" placeholder="หมายเหตุ" value={form.remark} onChange={handleChange} />
        <div className="flex gap-2 justify-end">
          {editId && <button type="button" className="px-3 py-1 bg-gray-300 rounded" onClick={() => { setEditId(null); setForm({ appliance: '', task: '', performed_date: '', cost: '', remark: '' }); }}>ยกเลิก</button>}
          <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">{editId ? 'บันทึก' : 'เพิ่ม'}</button>
        </div>
      </form>
      <div className="bg-white rounded shadow p-4">
        {logs.length === 0 ? (
          <div className="text-gray-500 text-center">ยังไม่มี Maintenance Log</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">ชื่ออุปกรณ์</th>
                <th className="p-2 border">งานที่ทำ</th>
                <th className="p-2 border">วันที่ดำเนินการ</th>
                <th className="p-2 border">ค่าใช้จ่าย</th>
                <th className="p-2 border">หมายเหตุ</th>
                <th className="p-2 border">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{l.appliance}</td>
                  <td className="p-2 border">{l.task}</td>
                  <td className="p-2 border text-center">{l.performed_date}</td>
                  <td className="p-2 border text-right">{l.cost ? l.cost.toLocaleString() : '-'}</td>
                  <td className="p-2 border">{l.remark || '-'}</td>
                  <td className="p-2 border text-right">
                    <button className="text-xs text-blue-600 mr-2" onClick={() => handleEdit(l)}>แก้ไข</button>
                    <button className="text-xs text-red-600" onClick={() => handleDelete(l.id)}>ลบ</button>
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
