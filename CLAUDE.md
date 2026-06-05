# CLAUDE.md — Tropi Q Head Spa Website

Hướng dẫn cho Claude khi làm việc trên repo này. Đọc kỹ trước khi sửa code.
(Quy tắc Next.js 16 xem `@AGENTS.md`.)

## Dự án là gì
Website marketing cho **Tropi Q** — head spa cao cấp tại Hà Nội, tệp khách 85% du lịch quốc tế.
Toàn site **tiếng Anh** (v1). Mục tiêu: SEO mạnh, cảm giác tropical/cao cấp, đặt lịch qua WhatsApp.
- Live: https://tropiq-seven.vercel.app
- Domain dự kiến (chưa gắn): tropiqspa.vn

## Tech stack
- **Next.js 16** (App Router) + **React 19** — JavaScript (KHÔNG dùng TypeScript)
- **Tailwind CSS v4** — cấu hình bằng `@theme` trong `src/app/globals.css`, **KHÔNG có `tailwind.config.js`**
- Fonts qua `next/font/google`: **Cormorant Garamond** (tiêu đề) + **Anek Latin** (body)
- Deploy: **Vercel** (project đã link sẵn, xem mục Deploy)

⚠️ Next.js 16 có nhiều breaking change so với bản cũ. Nếu nghi ngờ API, đọc `node_modules/next/dist/docs/` trước khi viết.

## Lệnh
```bash
npm install        # cài deps (lần đầu)
npm run dev        # dev server → http://localhost:3000
npm run build      # build production (luôn chạy để kiểm tra trước khi deploy)
npx vercel --prod --yes   # deploy production (xem mục Deploy)
```

## Cấu trúc
```
src/
  app/
    layout.js              # root layout: fonts, <meta> SEO, JSON-LD schema, Header/Footer/FloatingContact
    page.js                # TRANG CHỦ (hero cover + headline + dịch vụ + video + reviews + CTA)
    globals.css            # ⭐ MÀU & FONT tokens (Tailwind v4 @theme)
    sitemap.js, robots.js  # SEO
    icon.png, apple-icon.png  # favicon (logo Q)
    about/ services/ services/headspa/ experience/ reviews/ franchise/ blog/ contact/  → page.js mỗi trang
  components/
    Header.jsx             # thanh menu sticky + logo (client component)
    Footer.jsx             # footer + logo cream
    FloatingContact.jsx    # nút WhatsApp + gọi điện nổi
    ui.jsx                 # ⭐ primitives dùng chung: Container, Section, SectionTitle, Eyebrow, Button, Stars, PageHero (cover ảnh)
    VideoEmbed.jsx         # khối video (placeholder khi chưa có; nhận src mp4 hoặc embedUrl)
    LeafDecor.jsx          # SVG lá tropical trang trí
  lib/
    site.js                # ⭐ CONFIG: tên, địa chỉ, SĐT/WhatsApp, giờ mở cửa, reviews, logo, nav
    menu.js                # ⭐ MENU dịch vụ + giá (VND) + hàm formatVnd
public/images/
    logo.png               # logo olive (header)
    logo-light.png         # logo cream (footer nền tối)
    store/store-01..10.jpg # 10 ảnh cửa hàng (placeholder hiện tại)
_source/                   # ⚠️ KHÔNG deploy — tư liệu gốc: logo, menu PDF, feedback, ảnh mới (HEIC) chưa xử lý
```

## Quy ước quan trọng
- **Màu**: chỉ sửa ở `globals.css` block `@theme`. Token GIỮ TÊN cũ để khỏi refactor:
  `--color-olive #607648`, `--color-cream #EEE2D6`, `--color-gold #B56B2C` (gold = terracotta nâu-cam), `--color-ink`, `--color-sand`...
  Dùng trong JSX như class Tailwind: `bg-olive`, `text-gold`, `border-sand`...
- **Tiêu đề** dùng class `.font-display` (serif Cormorant). Body mặc định Anek Latin.
- **Ảnh** luôn dùng `next/image` (`<Image>`), có `alt`, có `sizes`. Ảnh đặt trong `public/`.
- **Giá** là số VND, format bằng `formatVnd()` trong `lib/menu.js`.
- Không có backend, không DB. Mọi nội dung là tĩnh trong code.

## Các tác vụ thường gặp (kèm file)

**Đổi logo** → thay file `public/images/logo.png` (header) và `public/images/logo-light.png` (footer, bản sáng màu). Đường dẫn khai báo ở `site.logo`/`site.logoLight` trong `lib/site.js`.

**Thay/thêm ảnh** → bỏ ảnh vào `public/images/store/`. Ảnh gốc mới đang ở `_source/new-photos-raw-heic/` (định dạng **HEIC** — phải convert sang JPG trước):
```bash
# convert HEIC → JPG (macOS có sẵn sips)
sips -s format jpeg -Z 1800 "input.HEIC" --out "public/images/store/store-XX.jpg"
```
Ảnh cover từng trang đặt qua prop `image` của `<PageHero>` trong mỗi `page.js`. Ảnh trang chủ sửa trực tiếp `src` trong `app/page.js`.

**Gắn video** → component `<VideoEmbed>`:
- Video mp4: bỏ file vào `public/videos/`, truyền `src="/videos/xyz.mp4"`.
- YouTube/Vimeo: truyền `embedUrl="..."`.
- Trang chủ: section video trong `app/page.js`. Mỗi nhóm dịch vụ: set `video`/`embedUrl` cho group trong `lib/menu.js` (services page tự render).

**Sửa menu/giá** → `lib/menu.js` (mảng `menu`). Giá là số VND.

**Đổi giờ mở cửa / SĐT / địa chỉ** → `lib/site.js`. ⚠️ Giờ mở cửa cũng có trong JSON-LD schema ở `app/layout.js` (`openingHoursSpecification`) — sửa cả 2 cho đồng bộ.

**Đổi nội dung chữ** → sửa trực tiếp trong `page.js` của trang tương ứng.

**Đổi màu/font** → `globals.css`.

## SEO (đã làm — giữ khi sửa)
- Mỗi trang có `metadata` (title, description, canonical) riêng trong `page.js`.
- Mỗi trang đúng **1 thẻ H1**.
- JSON-LD `HealthAndBeautyBusiness` + `aggregateRating` (reviewCount 88) trong `layout.js` — giữ reviewCount cho rich snippet kể cả khi UI không hiện số.
- `sitemap.js`, `robots.js` tự sinh. og:image ở `layout.js` + `public/og.jpg`.

## Deploy (Vercel)
Project ĐÃ link sẵn (`.vercel/project.json` → project `tropiq`). Đồng nghiệp deploy bằng **cùng tài khoản Vercel** đã dùng:
```bash
npx vercel login        # đăng nhập đúng tài khoản Vercel đang giữ project tropiq
cd <thư mục project>
npx vercel --prod --yes # deploy lên production, tự alias về tropiq-seven.vercel.app
```
Deployment Protection đã TẮT (site công khai). Nếu lỡ tạo project mới sẽ bị bật lại → tắt trong Vercel dashboard ▸ Settings ▸ Deployment Protection.

## Đang chờ / việc tiếp theo
- Thay bộ **ảnh mới** (đang ở `_source/new-photos-raw-heic/`, cần convert HEIC→JPG) vào các trang.
- Gắn **video** thật (khách trải nghiệm + từng nhóm dịch vụ).
- Gắn **domain tropiqspa.vn** (Vercel ▸ Settings ▸ Domains) — sau đó canonical/OG/JSON-LD (đang trỏ tropiqspa.vn) sẽ khớp 100%.
- v2: đa ngôn ngữ (Việt/Trung/Nhật), nội dung blog thật, embed Google reviews thật, mục 10 Fingers Nail.

## Phong cách làm việc (founder yêu cầu)
- Chỉ sửa đúng phần được yêu cầu, không tự ý đổi UI/UX ngoài phạm vi.
- Hỏi trước khi làm việc lớn; thẳng thắn phản biện kèm dẫn chứng.
- Build + tự kiểm tra trước khi báo xong.
