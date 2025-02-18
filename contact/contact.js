document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("感谢您的留言！我会尽快回复您。");
        form.reset(); // 清空表单
    });
});