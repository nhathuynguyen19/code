const container = document.getElementById('rotateContainer');
        const div = document.getElementById('frameContainer');
        let isDragging = false; // Biến để theo dõi trạng thái kéo thả
        let startX, startY; // Lưu vị trí chuột ban đầu khi bắt đầu kéo
        let rotationX = 0,
            rotationY = 0; // Góc xoay ban đầu của div theo trục X và Y

        container.addEventListener('mousedown', (e) => {
            isDragging = true; // Khi nhấn chuột, bắt đầu quá trình kéo thả
            startX = e.clientX; // Lưu vị trí chuột theo trục X
            startY = e.clientY; // Lưu vị trí chuột theo trục Y
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return; // Nếu không đang kéo thả, thoát khỏi sự kiện

            const dx = e.clientX - startX; // Tính toán khoảng cách di chuyển chuột theo trục X
            const dy = e.clientY - startY; // Tính toán khoảng cách di chuyển chuột theo trục Y
            rotationY += dx * 0.5; // Cập nhật góc xoay theo trục Y, điều chỉnh bằng hệ số 0.5
            rotationX -= dy * 0.5; // Cập nhật góc xoay theo trục X, điều chỉnh bằng hệ số 0.5

            div.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`; // Áp dụng transform để xoay div theo trục X và Y
            startX = e.clientX; // Cập nhật vị trí chuột hiện tại thành vị trí bắt đầu mới cho lần kéo tiếp theo
            startY = e.clientY; // Cập nhật vị trí chuột hiện tại thành vị trí bắt đầu mới cho lần kéo tiếp theo
        });

        document.addEventListener('mouseup', () => {
            isDragging = false; // Khi thả chuột, kết thúc quá trình kéo thả
        });