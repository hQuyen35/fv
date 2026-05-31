function nextPage(pageNumber) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Hiện trang được chọn
    document.getElementById('page' + pageNumber).classList.add('active');

    // Chơi nhạc khi bấm vào trang đầu tiên (trình duyệt chặn tự động phát nhạc)
    const music = document.getElementById('bg-music');
    music.play();
}

function showPle() {
    document.getElementById('ple-text').classList.remove('hidden');
}
