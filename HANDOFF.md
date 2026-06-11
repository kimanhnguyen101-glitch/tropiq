# Hướng dẫn bàn giao — Website Tropi Q

## Tổng quan

Website marketing cho **Tropi Q Head Spa** tại Hà Nội.  
Tech stack: Next.js 16 + Tailwind CSS + Vercel. Không có backend, không có database — toàn bộ nội dung là tĩnh trong code.

**Domain:** tropiqspa.com  
**Live (Vercel cũ):** https://tropiq-seven.vercel.app

---

## Checklist bàn giao — làm đủ 4 bước này trước khi go live

- [ ] Deploy lên Vercel của bạn (Bước 2)
- [ ] Gắn domain tropiqspa.com trỏ về Vercel mới (Bước 3)
- [ ] Kết nối Google Analytics & GTM (Bước 4)
- [ ] Xử lý form booking — Google Sheet (Bước 5)

---

## Bước 1 — Cài đặt môi trường

### Yêu cầu
- [Node.js](https://nodejs.org) phiên bản 18 trở lên
- [Git](https://git-scm.com)
- Tài khoản [Vercel](https://vercel.com) (free tier là đủ)
- [Claude Code](https://claude.ai/code) (để làm việc với code bằng AI)

### Cài đặt project

Giải nén folder nhận được, mở terminal trong thư mục đó:

```bash
npm install
npm run dev
```

Mở trình duyệt vào `http://localhost:3000` để xem website.

> **Lưu ý:** Thư mục `node_modules/` và `.next/` không có trong folder nhận được — `npm install` sẽ tự tạo lại, bình thường.

---

## Bước 2 — Deploy lên Vercel của bạn

1. Vào [vercel.com](https://vercel.com) → đăng nhập → **Add New Project**
2. Chọn **"Browse"** → upload folder project (hoặc import từ GitHub nếu có)
3. Framework: **Next.js** (Vercel tự detect)
4. Nhấn **Deploy**

Sau lần đầu deploy thành công, mọi lần tiếp theo chỉ cần chạy trong terminal:

```bash
npm run build          # ⚠️ Luôn chạy bước này trước — nếu có lỗi thì sửa, không deploy khi build lỗi
npx vercel --prod --yes  # deploy lên production
```

---

## Bước 3 — Gắn domain tropiqspa.com

Domain `tropiqspa.com` hiện đang được quản lý bởi người bàn giao — liên hệ họ để được chuyển quyền quản lý hoặc nhờ họ update DNS giúp.

Khi đã có quyền quản lý domain:

1. Vào Vercel → project của bạn → **Settings → Domains**
2. Thêm `tropiqspa.com` và `www.tropiqspa.com`
3. Vercel sẽ hiện các bản ghi DNS cần thêm (A record + CNAME)
4. Vào nơi quản lý domain → thêm đúng các bản ghi đó
5. Chờ 5–30 phút để DNS cập nhật

---

## Bước 4 — Kết nối Google Analytics & GTM

Trong file `src/app/layout.js`, tìm hai dòng:

```js
const GTM_ID = "GTM-W8JN8NL3";
const GA_ID  = "G-MJVZ8WEXEY";
```

**Nếu giữ nguyên ID cũ:** Yêu cầu người bàn giao add email của bạn vào Google Analytics property `G-MJVZ8WEXEY` và GTM container `GTM-W8JN8NL3` với quyền Admin.

**Nếu tạo mới:** Tạo GA4 property và GTM container mới trên tài khoản Google của bạn, thay hai ID trên bằng ID mới, rồi build + deploy lại.

---

## Bước 5 — Form booking (Google Sheet)

Khi khách điền form đặt lịch trên website, dữ liệu gửi về Google Apps Script và lưu vào Google Sheet.

Script URL hiện tại trong `src/lib/site.js`:
```
https://script.google.com/macros/s/AKfycbwsOCdnl9FWzbYJWSD3uGP4Ihau18GSZO8_WenL0KPdU1IqXfFIp7vwwd28B3LyOQo/exec
```

**Nếu giữ nguyên:** Yêu cầu người bàn giao share Google Sheet nhận booking cho email của bạn.

**Nếu tạo mới** (khuyến nghị để tự chủ hoàn toàn):
1. Tạo Google Sheet mới
2. Vào **Extensions → Apps Script**
3. Paste đoạn script nhận POST và ghi vào Sheet (yêu cầu người bàn giao cung cấp script gốc)
4. Deploy as **Web App** → Execute as: Me → Who has access: Anyone
5. Copy URL mới → thay vào `bookingScriptUrl` trong `src/lib/site.js`
6. Build + deploy lại

---

## Làm việc hàng ngày

### Công cụ khuyến nghị: Claude Code

Mở terminal trong thư mục project, gõ `claude` để mở Claude Code.  
Claude Code hiểu toàn bộ cấu trúc project — chỉ cần mô tả bằng lời là nó tự làm.

**Ví dụ:**
- *"Thêm bài blog mới với nội dung sau..."*
- *"Sửa giá dịch vụ Signature thành 750,000₫"*
- *"Đổi giờ mở cửa thành 9:30am"*

---

### Đăng bài blog mới

Nói với Claude Code: *"Thêm bài blog mới, slug: /blog/ten-bai, nội dung như sau: ..."*

Claude sẽ tự tạo file, thêm vào danh sách blog, build và deploy.

Hoặc tự làm thủ công:
1. Tạo folder: `src/app/blog/ten-slug/`
2. Tạo file `page.js` theo cấu trúc bài hiện có (xem `src/app/blog/what-is-a-head-spa/page.js`)
3. Thêm bài vào danh sách trong `src/app/blog/page.js`
4. Chạy `npm run build` → `npx vercel --prod --yes`

---

### Sửa giá / mô tả dịch vụ

File: **`src/lib/menu.js`**

Mỗi dịch vụ có dạng:
```js
{
  name: "Signature",
  desc: "Mô tả dịch vụ...",
  price: 695000,   // giá VND, không có dấu chấm/phẩy
}
```

Sửa xong → `npm run build` → `npx vercel --prod --yes`

---

### Sửa thông tin liên hệ / giờ mở cửa

File: **`src/lib/site.js`**

⚠️ Giờ mở cửa có ở **2 chỗ** — cần sửa cả hai:
1. `src/lib/site.js` — hiển thị trên website
2. `src/app/layout.js` phần `openingHoursSpecification` — dùng cho SEO (Google)

---

### Sửa ảnh bìa các trang

| Trang | File ảnh |
|-------|----------|
| Trang chủ | `public/images/cover-home.png` |
| Services | `public/images/cover-services.png` |
| Experience | `public/images/cover-experience.png` |
| Blog | `public/images/cover-blog.png` |

Thay file ảnh → **giữ nguyên tên file** → deploy lại.

---

## Cấu trúc thư mục quan trọng

```
src/
  app/
    page.js              ← Trang chủ
    layout.js            ← Layout chung, SEO, Analytics
    blog/                ← Tất cả bài blog
    services/page.js     ← Trang menu dịch vụ
    globals.css          ← Màu sắc, font
  components/
    BookingModal.jsx     ← Form đặt lịch
    Header.jsx           ← Menu điều hướng
    Footer.jsx           ← Footer
  lib/
    menu.js              ← ⭐ Dịch vụ + giá
    site.js              ← ⭐ Thông tin spa (SĐT, địa chỉ, giờ mở cửa)
public/
  images/                ← Toàn bộ ảnh
  videos/                ← Toàn bộ video
```

---

## Lưu ý quan trọng

- **Luôn chạy `npm run build` trước khi deploy** — nếu build lỗi thì sửa lỗi trước, không deploy khi có lỗi.
- Không xoá file `.vercel/project.json` — file này link project với Vercel của bạn.
- Thư mục `_source/` chứa tài liệu gốc, không deploy lên web.

---

## Hỗ trợ kỹ thuật

Nếu gặp vấn đề, mở Claude Code trong thư mục project và mô tả vấn đề bằng lời — Claude đọc được toàn bộ code và hỗ trợ trực tiếp mà không cần giải thích cấu trúc từ đầu.
