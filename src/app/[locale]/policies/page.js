import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "vi"
      ? "Chính sách & Điều khoản — Tropi Q Head Spa"
      : "Policies & Terms — Tropi Q Head Spa",
    description: locale === "vi"
      ? "Chính sách bảo mật, điều khoản sử dụng, hủy lịch và giải quyết khiếu nại của Tropi Q Head Spa Hà Nội."
      : "Privacy policy, terms of use, cancellation policy and complaint resolution for Tropi Q Head Spa Hanoi.",
    alternates: { canonical: locale === "vi" ? "/vi/policies" : "/policies" },
  };
}

export default async function PoliciesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isVi = locale === "vi";

  return (
    <div className="bg-white">
      <div className="bg-cream/50 py-14">
        <Container>
          <h1 className="font-display text-4xl text-ink sm:text-5xl">
            {isVi ? "Chính sách & Điều khoản" : "Policies & Terms"}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            {isVi
              ? `Cập nhật lần cuối: Tháng 10/2026 · ${site.legal.businessName}`
              : `Last updated: October 2026 · ${site.legal.businessName}`}
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="mx-auto max-w-3xl space-y-16 text-sm leading-relaxed text-ink-soft">

          {/* ── THÔNG TIN CHỦ QUẢN ── */}
          <section>
            <h2 className="font-display mb-5 text-2xl text-ink">
              {isVi ? "1. Thông tin chủ quản" : "1. Business Information"}
            </h2>
            <table className="w-full border-collapse text-sm">
              <tbody className="divide-y divide-sand">
                {[
                  [isVi ? "Tên hộ kinh doanh" : "Business name", site.legal.businessName],
                  [isVi ? "Mã số thuế" : "Tax ID", site.legal.taxId],
                  [isVi ? "Địa chỉ" : "Address", site.address.full],
                  [isVi ? "Số điện thoại" : "Phone", site.phone.display],
                  ["Email", site.legal.email],
                  [isVi ? "Website" : "Website", site.url],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-2.5 pr-6 font-medium text-ink w-40">{label}</td>
                    <td className="py-2.5 text-ink-soft">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* ── CHÍNH SÁCH BẢO MẬT ── */}
          <section>
            <h2 className="font-display mb-5 text-2xl text-ink">
              {isVi ? "2. Chính sách bảo mật" : "2. Privacy Policy"}
            </h2>

            <h3 className="mb-2 font-semibold text-ink">
              {isVi ? "Thông tin chúng tôi thu thập" : "Information we collect"}
            </h3>
            <p className="mb-4">
              {isVi
                ? "Khi bạn điền form đặt lịch trên website, chúng tôi thu thập: họ tên, số điện thoại, email (tuỳ chọn), dịch vụ mong muốn, ngày giờ và ghi chú. Chúng tôi cũng thu thập dữ liệu truy cập website thông qua Google Analytics và Google Tag Manager (địa chỉ IP ẩn danh, thiết bị, trang xem)."
                : "When you submit a booking request, we collect: your name, phone number, email (optional), desired services, date/time and notes. We also collect website usage data via Google Analytics and Google Tag Manager (anonymised IP, device type, pages viewed)."}
            </p>

            <h3 className="mb-2 font-semibold text-ink">
              {isVi ? "Mục đích sử dụng" : "How we use your information"}
            </h3>
            <ul className="mb-4 list-disc pl-5 space-y-1">
              {isVi ? (
                <>
                  <li>Xác nhận và quản lý lịch đặt dịch vụ của bạn.</li>
                  <li>Liên hệ khi cần điều chỉnh hoặc xác nhận lịch hẹn.</li>
                  <li>Cải thiện chất lượng dịch vụ dựa trên dữ liệu truy cập tổng hợp.</li>
                </>
              ) : (
                <>
                  <li>To confirm and manage your booking.</li>
                  <li>To contact you for booking changes or confirmations.</li>
                  <li>To improve our services based on aggregated website usage data.</li>
                </>
              )}
            </ul>

            <h3 className="mb-2 font-semibold text-ink">
              {isVi ? "Thời gian lưu trữ" : "Data retention"}
            </h3>
            <p className="mb-4">
              {isVi
                ? "Thông tin đặt lịch được lưu trong hệ thống nội bộ tối đa 2 năm. Dữ liệu Google Analytics được Google lưu trữ theo chính sách của họ (mặc định 26 tháng)."
                : "Booking information is retained in our internal system for up to 2 years. Google Analytics data is retained according to Google's policies (default 26 months)."}
            </p>

            <h3 className="mb-2 font-semibold text-ink">
              {isVi ? "Không chia sẻ với bên thứ ba" : "Third-party sharing"}
            </h3>
            <p className="mb-4">
              {isVi
                ? "Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào, ngoại trừ các công cụ kỹ thuật đang sử dụng (Google Analytics, Google Tag Manager, TikTok Pixel) cho mục đích phân tích thống kê và quảng cáo tổng hợp."
                : "We do not sell, rent or share your personal information with third parties, except technical tools in use (Google Analytics, Google Tag Manager, TikTok Pixel) for aggregate analytics and advertising purposes."}
            </p>

            <h3 className="mb-2 font-semibold text-ink">
              {isVi ? "Quyền của bạn" : "Your rights"}
            </h3>
            <p>
              {isVi
                ? `Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xoá thông tin cá nhân đã cung cấp. Liên hệ: ${site.legal.email} hoặc ${site.phone.display}.`
                : `You have the right to access, correct or delete your personal information. Contact us at ${site.legal.email} or ${site.phone.display}.`}
            </p>
          </section>

          {/* ── ĐIỀU KHOẢN SỬ DỤNG ── */}
          <section>
            <h2 className="font-display mb-5 text-2xl text-ink">
              {isVi ? "3. Điều khoản sử dụng dịch vụ" : "3. Terms of Service"}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {isVi ? (
                <>
                  <li>Dịch vụ chỉ dành cho khách hàng từ 16 tuổi trở lên (trừ khi có người giám hộ đi kèm).</li>
                  <li>Giá niêm yết trên website tính bằng VND và đã bao gồm thuế. Không phát sinh phụ phí thẻ hay phí ẩn.</li>
                  <li>Giá combo gạch (VD: <s>570,000₫</s> → 550,000₫) là giá khuyến mại, áp dụng đến khi có thông báo thay đổi.</li>
                  <li>Tropi Q có quyền điều chỉnh giá và dịch vụ. Thay đổi sẽ được cập nhật trên website trước khi áp dụng.</li>
                  <li>Khách hàng không được ghi âm, chụp ảnh không gian nội thất hoặc nhân viên mà không có sự đồng ý.</li>
                </>
              ) : (
                <>
                  <li>Services are available to guests aged 16 and over (unless accompanied by a guardian).</li>
                  <li>Prices shown are in VND and include applicable taxes. No card surcharges or hidden fees.</li>
                  <li>Crossed-out combo prices (e.g. <s>570,000₫</s> → 550,000₫) are promotional prices, valid until further notice.</li>
                  <li>Tropi Q reserves the right to update prices and services. Changes will be published on this website before taking effect.</li>
                  <li>Guests may not record or photograph the interior or staff without consent.</li>
                </>
              )}
            </ul>
          </section>

          {/* ── CHÍNH SÁCH HỦY LỊCH ── */}
          <section>
            <h2 className="font-display mb-5 text-2xl text-ink">
              {isVi ? "4. Chính sách hủy lịch" : "4. Cancellation Policy"}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {isVi ? (
                <>
                  <li>Hủy hoặc đổi lịch: vui lòng báo trước ít nhất <strong>2 tiếng</strong> qua WhatsApp/điện thoại.</li>
                  <li>Hủy trễ hoặc không đến (no-show): khung giờ đã đặt sẽ bị mất, không hoàn tiền đặt cọc (nếu có).</li>
                  <li>Tropi Q bảo lưu quyền từ chối hoặc hủy lịch trong trường hợp bất khả kháng và sẽ thông báo sớm nhất.</li>
                  <li>Dịch vụ chỉ tiến hành trực tiếp tại cơ sở. Không hoàn tiền sau khi dịch vụ đã bắt đầu.</li>
                </>
              ) : (
                <>
                  <li>Cancellations or rescheduling: please notify us at least <strong>2 hours</strong> in advance via WhatsApp or phone.</li>
                  <li>Late cancellations or no-shows: the reserved slot will be forfeited; deposits (if any) are non-refundable.</li>
                  <li>Tropi Q reserves the right to cancel appointments in force-majeure circumstances and will notify guests as early as possible.</li>
                  <li>Services are provided in-person at our location only. No refunds once a service has commenced.</li>
                </>
              )}
            </ul>
          </section>

          {/* ── KHIẾU NẠI ── */}
          <section>
            <h2 className="font-display mb-5 text-2xl text-ink">
              {isVi ? "5. Tiếp nhận và giải quyết khiếu nại" : "5. Complaints & Resolution"}
            </h2>
            <p className="mb-4">
              {isVi
                ? "Chúng tôi cam kết giải quyết mọi phản hồi và khiếu nại trong vòng 24 giờ (ngày làm việc). Các bước xử lý:"
                : "We are committed to resolving all feedback and complaints within 24 hours (business days). Process:"}
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              {isVi ? (
                <>
                  <li><strong>Bước 1 — Gửi khiếu nại:</strong> Liên hệ trực tiếp qua WhatsApp {site.phone.display} hoặc email {site.legal.email}, nêu rõ vấn đề, ngày đặt lịch và dịch vụ sử dụng.</li>
                  <li><strong>Bước 2 — Tiếp nhận:</strong> Tropi Q xác nhận nhận khiếu nại trong vòng 4 tiếng làm việc.</li>
                  <li><strong>Bước 3 — Xử lý:</strong> Chúng tôi xem xét và phản hồi phương án giải quyết trong vòng 24 tiếng làm việc.</li>
                  <li><strong>Bước 4 — Kết quả:</strong> Đền bù hoặc hỗ trợ phù hợp (đổi lịch miễn phí, hoàn tiền một phần hoặc toàn phần) tuỳ mức độ vụ việc.</li>
                </>
              ) : (
                <>
                  <li><strong>Step 1 — Submit:</strong> Contact us via WhatsApp {site.phone.display} or email {site.legal.email}, describing the issue, booking date and service received.</li>
                  <li><strong>Step 2 — Acknowledgement:</strong> Tropi Q will confirm receipt within 4 business hours.</li>
                  <li><strong>Step 3 — Review:</strong> We will review and respond with a proposed resolution within 24 business hours.</li>
                  <li><strong>Step 4 — Resolution:</strong> Appropriate remedy (free reschedule, partial or full refund) depending on the nature of the issue.</li>
                </>
              )}
            </ol>
          </section>

          {/* ── CONTACT ── */}
          <section className="rounded-2xl bg-cream/50 px-8 py-8">
            <h2 className="font-display mb-4 text-xl text-ink">
              {isVi ? "Liên hệ" : "Contact"}
            </h2>
            <p className="text-ink-soft">
              {site.legal.businessName}<br />
              {site.address.full}<br />
              <a href={`tel:${site.phone.intl}`} className="text-gold hover:underline">{site.phone.display}</a>
              {" · "}
              <a href={`mailto:${site.legal.email}`} className="text-gold hover:underline">{site.legal.email}</a>
            </p>
          </section>

        </div>
      </Container>
    </div>
  );
}
