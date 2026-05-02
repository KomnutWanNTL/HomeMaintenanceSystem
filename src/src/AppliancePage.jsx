import { useState } from 'react';
import { getApplianceList } from './db/appliance';

export default function AppliancePage() {
  // For now, use in-memory data
  const [appliances, setAppliances] = useState(() => getApplianceList());

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">รายการอุปกรณ์ (Appliances)</h1>
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
              </tr>
            </thead>
            <tbody>
              {appliances.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{a.name}</td>
                  <td className="p-2 border">{a.brand || '-'}</td>
                  <td className="p-2 border">{a.model_number || '-'}</td>
                  <td className="p-2 border">{a.location || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* TODO: Add Add/Edit/Delete UI */}
    </div>
  );
}
