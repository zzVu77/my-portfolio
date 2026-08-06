/**
 * Meta Pixel (Facebook Pixel) helpers.
 *
 * Pixel ID hardcode trực tiếp. Pixel ID không phải secret — ai xem source
 * trang web cũng thấy được — nên không cần đưa vào biến môi trường.
 * Muốn đổi sang pixel khác thì sửa thẳng hằng số dưới đây.
 */
export const FB_PIXEL_ID = "1058109840003701";

type FbqFn = (
  method: "init" | "track" | "trackCustom" | "consent",
  eventNameOrId?: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: FbqFn & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean };
    _fbq?: unknown;
  }
}

/** true khi script fbevents.js đã được base code khởi tạo. */
const ready = () =>
  typeof window !== "undefined" && typeof window.fbq === "function";

/**
 * Bắn PageView. Base code đã tự bắn 1 lần khi load,
 * chỉ gọi lại hàm này khi điều hướng client-side sang route khác.
 */
export const pageview = () => {
  if (!ready()) return;
  window.fbq!("track", "PageView");
};

/**
 * Bắn một Standard Event của Meta (Lead, Contact, ViewContent, Search, ...).
 * Danh sách chuẩn: https://developers.facebook.com/docs/meta-pixel/reference
 */
export const event = (name: string, params?: Record<string, unknown>) => {
  if (!ready()) return;
  window.fbq!("track", name, params);
};

/**
 * Bắn một Custom Event (tên tự đặt, không thuộc danh sách Standard Event).
 */
export const customEvent = (name: string, params?: Record<string, unknown>) => {
  if (!ready()) return;
  window.fbq!("trackCustom", name, params);
};
