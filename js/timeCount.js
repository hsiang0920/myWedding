
function updateCountdown() {
    const targetDate = new Date(new Date().getFullYear(), 10, 29, 18, 0, 0); // 11月索引為10 (JS月份從0開始)
    const now = new Date();
    let timeRemaining = targetDate - now; // 計算剩餘時間 (毫秒)

    if (timeRemaining <= 0) {
        document.getElementById("countdown").textContent = "倒數結束！";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent = 
        `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
}

updateCountdown(); // 立即執行一次，避免等待 1 秒

const timerInterval = setInterval(updateCountdown, 1000);