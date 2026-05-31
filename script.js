function nextPage(pageNumber) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Hiện trang được chọn
    document.getElementById('page' + pageNumber).classList.add('active');

    // Chơi nhạc khi bấm vào nút bất kỳ ở trang đầu tiên
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(error => console.log("Trình duyệt chặn tự động phát nhạc:", error));
    }
}

// Thêm hàm này để khi bấm nút "Hết" là nó hiện chữ plè trêu bạn bè nè!
function showPle() {
    const ple = document.getElementById('ple-text');
    if (ple) {
        ple.classList.remove('hidden');
    }
}
