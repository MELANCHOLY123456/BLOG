document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const icon = document.querySelector(".icon");

    // 读取本地存储的暗黑模式状态
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        icon.textContent = "☀️";
    }

    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
        icon.textContent = darkModeEnabled ? "☀️" : "🌙";
    });

    // 网页标题变化功能
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
