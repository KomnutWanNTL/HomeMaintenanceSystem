# Home Maintenance System – Project Task Tracking

> **หมายเหตุ:** Task ทุกข้อโยงกับ FR/NFR ตามเอกสาร Home_Maintenance_System_Docs_Final.md เพื่อความชัดเจนในการติดตามและตรวจสอบ

---

## To-do List (Function-level Tasks – Priority Order)

### 1. Core Data & CRUD (FR)
#### Asset Management
- [ ] ออกแบบฟังก์ชัน getApplianceList() : ดึงข้อมูลอุปกรณ์ทั้งหมดจากฐานข้อมูล
- [ ] ออกแบบฟังก์ชัน addAppliance(data) : เพิ่มอุปกรณ์ใหม่
- [ ] ออกแบบฟังก์ชัน updateAppliance(id, data) : แก้ไขข้อมูลอุปกรณ์
- [ ] ออกแบบฟังก์ชัน deleteAppliance(id) : ลบอุปกรณ์
- [ ] ออกแบบฟังก์ชัน getApplianceById(id) : ดึงข้อมูลอุปกรณ์รายตัว
- [ ] เขียน unit test สำหรับแต่ละฟังก์ชันข้างต้น

#### Task Template Management
- [ ] ออกแบบฟังก์ชัน getTaskTemplates(applianceId) : ดึง Task Template ของอุปกรณ์
- [ ] ออกแบบฟังก์ชัน addTaskTemplate(applianceId, data) : เพิ่ม Task Template
- [ ] ออกแบบฟังก์ชัน updateTaskTemplate(id, data) : แก้ไข Task Template
- [ ] ออกแบบฟังก์ชัน deleteTaskTemplate(id) : ลบ Task Template
- [ ] ออกแบบฟังก์ชัน setTaskFrequency(id, days) : กำหนดรอบความถี่
- [ ] เขียน unit test สำหรับแต่ละฟังก์ชันข้างต้น

#### Maintenance Log
- [ ] ออกแบบฟังก์ชัน getMaintenanceLogs(taskId) : ดึง Log ของ Task
- [ ] ออกแบบฟังก์ชัน addMaintenanceLog(taskId, data) : เพิ่ม Log
- [ ] ออกแบบฟังก์ชัน updateMaintenanceLog(id, data) : แก้ไข Log
- [ ] ออกแบบฟังก์ชัน deleteMaintenanceLog(id) : ลบ Log
- [ ] ออกแบบฟังก์ชัน addLogCostAndRemark(id, cost, remark) : บันทึกค่าใช้จ่าย/หมายเหตุ
- [ ] เขียน unit test สำหรับแต่ละฟังก์ชันข้างต้น

### 2. Media & Data Layer
- [ ] ออกแบบฟังก์ชัน compressAndConvertImage(file) : บีบอัดและแปลงรูปภาพเป็น Base64
- [ ] ออกแบบฟังก์ชัน saveImageToDB(applianceId, base64) : บันทึกรูปภาพลงฐานข้อมูล

### 3. Dashboard & Notification (FR)
- [ ] ออกแบบฟังก์ชัน getOverdueTasks() : ดึง Task ที่ Overdue
- [ ] ออกแบบฟังก์ชัน getUpcomingTasks() : ดึง Task ที่จะถึงกำหนด
- [ ] ออกแบบฟังก์ชัน calculateNextDueDate(taskId) : คำนวณวันครบกำหนดถัดไป
- [ ] ออกแบบฟังก์ชัน getTotalMaintenanceCost() : สรุปค่าใช้จ่ายรวม
- [ ] ออกแบบฟังก์ชัน showNotification(type, message) : แสดงแจ้งเตือนใน UI
- [ ] เขียน unit test สำหรับแต่ละฟังก์ชันข้างต้น

### 4. Data Persistence & Backup (FR)
- [ ] ออกแบบฟังก์ชัน exportData(format) : Export ข้อมูลเป็น json/sqlite
- [ ] ออกแบบฟังก์ชัน importData(file) : Import ข้อมูล
- [ ] ออกแบบฟังก์ชัน shouldPromptBackup() : ตรวจสอบครบ 30 วันหรือยัง
- [ ] ออกแบบฟังก์ชัน showBackupPrompt() : แสดง UI แจ้งเตือน
- [ ] เขียน unit test สำหรับแต่ละฟังก์ชันข้างต้น

### 5. Essential NFRs (ควรทำควบคู่/หลัง FR หลัก)
#### Offline Capability (PWA)
- [ ] ออกแบบฟังก์ชัน registerServiceWorker() : ลงทะเบียน Service Worker
- [ ] ออกแบบฟังก์ชัน testOfflineMode() : ทดสอบโหลดแอปแบบ offline

#### Data Privacy & Security
- [ ] ออกแบบฟังก์ชัน verifyLocalDataOnly() : ตรวจสอบข้อมูลอยู่เฉพาะใน Local
- [ ] ตรวจสอบไม่มีการส่งข้อมูลออกนอกเครื่อง (review code)

### 6. Performance & Optimization
- [ ] ออกแบบฟังก์ชัน optimizeDashboardQuery() : Query Dashboard ให้เร็ว
- [ ] ตั้งค่า Vite config เพื่อลดขนาดไฟล์ build

### 7. Deployment
- [ ] ออกแบบฟังก์ชัน buildStaticFiles() : Build สำหรับ GitHub Pages
- [ ] ออกแบบฟังก์ชัน deployToGitHubPages() : Deploy ด้วย gh-pages

### 8. Usability & UI/UX
- [ ] ออกแบบฟังก์ชัน applyTailwindResponsive() : ใช้ Tailwind จัด Responsive
- [ ] ออกแบบฟังก์ชัน useShadcnUIComponents() : ใช้ shadcn/ui กับ Component
- [ ] ออกแบบฟังก์ชัน testMobileTabletUI() : ทดสอบ UI บนอุปกรณ์

---

> อัปเดตสถานะ task ได้โดยแก้ไข [ ] → [x] เมื่อเสร็จสิ้นแต่ละงาน
