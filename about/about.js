document.addEventListener("DOMContentLoaded", () => {
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