# 💌 Thiệp Sinh Nhật 3D

Trang thiệp sinh nhật xoay 3D — chạm/click vào thiệp để mở ra lời chúc, kèm ảnh kỷ niệm trôi nổi làm nền.

## 1\. Thêm ảnh thật của hai bạn (quan trọng nhất)

Trang đang dùng ảnh placeholder (gradient hồng-vàng). Để hiện **ảnh thật**, bỏ tối đa 6 tấm ảnh của hai bạn vào thư mục `images/`, đặt tên đúng như sau:

```
images/photo1.jpg
images/photo2.jpg
images/photo3.jpg
images/photo4.jpg
images/photo5.jpg
images/photo6.jpg
```

* Không cần đủ 6 tấm — thiếu tấm nào thì khung đó tự ẩn, không lỗi.
* Định dạng `.jpg`/`.png` đều được, chỉ cần đổi đúng tên file thành `photo1.jpg`, `photo2.jpg`... (nếu dùng `.png`, sửa lại đuôi file tương ứng trong `index.html`, tìm dòng `src="images/photo1.jpg"`).
* Nên dùng ảnh tỉ lệ dọc (cao hơn rộng) để không bị crop xấu.

## 2\. Đổi lời chúc / tên

Mở file `script.js`, sửa dòng `message` trong `CONFIG` ở đầu file. Muốn đổi chữ trên nắp thiệp ("Gửi Bé Iu") thì sửa trong `index.html`, phần `<div class="cover-content">`.

## 3\. Xem thử trước khi đăng

Mở trực tiếp file `index.html` bằng trình duyệt (double-click) là xem được ngay, không cần cài gì thêm.

## 4\. Đăng lên GitHub Pages (miễn phí)

1. Tạo một repository mới trên GitHub (ví dụ tên `happy-birthday`).
2. Upload toàn bộ nội dung thư mục này (`index.html`, `style.css`, `script.js`, thư mục `images/`) lên repo đó — cách nhanh nhất là vào trang repo → **Add file → Upload files** → kéo thả cả thư mục vào.
3. Vào **Settings → Pages** (menu bên trái).
4. Ở mục **Branch**, chọn `main` và thư mục `/ (root)`, bấm **Save**.
5. Đợi khoảng 1 phút, GitHub sẽ cấp cho bạn một đường link dạng:
`https://<ten-tai-khoan>.github.io/<ten-repo>/`
6. Gửi link đó cho người yêu bạn 💕

## Cấu trúc file

```
birthday-site/
├── index.html      → nội dung trang
├── style.css        → giao diện, hiệu ứng 3D
├── script.js         → xử lý mở thiệp + hiệu ứng
├── images/           → bỏ ảnh thật vào đây
└── README.md         → file hướng dẫn này
```

