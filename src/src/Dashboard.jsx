import { useState } from 'react';

export default function Dashboard() {
  // Mock data for overdue and upcoming tasks
  const overdue = [
    { id: 1, appliance: 'แอร์ห้องนอน', task: 'ล้างแผ่นกรอง', due: '2026-04-28' },
    { id: 2, appliance: 'เครื่องกรองน้ำ', task: 'เปลี่ยนไส้กรอง', due: '2026-04-30' },
  ];
  const upcoming = [
    { id: 3, appliance: 'ตู้เย็น', task: 'ตรวจสอบยางขอบประตู', due: '2026-05-10' },
  ];
  const totalCost = 1250; // Mock summary

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-red-600">งานที่ถึงกำหนดแล้ว (Overdue)</h2>
        {overdue.length === 0 ? <div className="text-gray-500">- ไม่มี -</div> : (
          <ul className="list-disc pl-6">
            {overdue.map(item => (
              <li key={item.id}>{item.appliance} - {item.task} (ครบกำหนด {item.due})</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-yellow-600">งานที่กำลังจะถึงกำหนด (Upcoming 7-14 วัน)</h2>
        {upcoming.length === 0 ? <div className="text-gray-500">- ไม่มี -</div> : (
          <ul className="list-disc pl-6">
            {upcoming.map(item => (
              <li key={item.id}>{item.appliance} - {item.task} (ครบกำหนด {item.due})</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-blue-600">สรุปค่าใช้จ่ายซ่อมบำรุงรวม</h2>
        <div className="text-xl font-bold">{totalCost.toLocaleString()} บาท</div>
      </div>
    </div>
  );
}
