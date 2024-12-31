// ฟังก์ชันสำหรับเปิด/ปิดเฉลย
function toggleSolution(id) {
  const solution = document.getElementById(id);
  if (solution) {
    solution.classList.toggle("hidden");

    // หา button ที่เกี่ยวข้องกับเฉลยนี้
    const button = solution.previousElementSibling;
    if (button && button.tagName === "BUTTON") {
      // เปลี่ยนข้อความปุ่มตามสถานะการแสดง/ซ่อน
      if (solution.classList.contains("hidden")) {
        button.textContent = "แสดงเฉลย";
      } else {
        button.textContent = "ซ่อนเฉลย";
      }
    }
  }
}

// จัดการ Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const mobileMenuPanel = document.querySelector(".mobile-menu-panel");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  if (mobileMenuButton && mobileMenuPanel && mobileMenuClose) {
    // เปิด mobile menu
    mobileMenuButton.addEventListener("click", () => {
      mobileMenuPanel.classList.remove("translate-x-full");
    });

    // ปิด mobile menu
    mobileMenuClose.addEventListener("click", () => {
      mobileMenuPanel.classList.add("translate-x-full");
    });

    // ปิด mobile menu เมื่อคลิกนอกเมนู
    document.addEventListener("click", (event) => {
      if (
        !mobileMenuPanel.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        mobileMenuPanel.classList.add("translate-x-full");
      }
    });

    // ปิด mobile menu เมื่อกดปุ่ม Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        mobileMenuPanel.classList.add("translate-x-full");
      }
    });
  }
});
