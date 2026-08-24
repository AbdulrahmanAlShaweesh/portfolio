export function downloadResume() {
  // المسار داخل مجلد public
  const pdfUrl = "/abdulrahman_shaweesh_cv.pdf"
  
  // اسم الملف الذي سيظهر للمستخدم في جهازه عند التحميل
  const fileName = "abdulrahman_shaweesh_resume.pdf"

  const anchor = document.createElement("a")
  anchor.href = pdfUrl
  anchor.download = fileName
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
}