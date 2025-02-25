document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const icon = document.querySelector(".icon");

    // 读取本地存储的暗黑模式状态
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        icon.textContent = "☀️";
    }

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
        icon.textContent = darkModeEnabled ? "☀️" : "🌙";
    });

    // ✅ 添加网页标题变化功能
    const originalTitle = document.title;
    const awayTitle = "咦，你怎么走啦？";
    const returnTitle = "咦，你又回来啦！";

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = awayTitle;
        } else {
            document.title = returnTitle;
            setTimeout(() => {
                document.title = originalTitle;
            }, 500);
        }
    });
});
