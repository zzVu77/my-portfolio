/**
 * Meta Pixel (Facebook Pixel) helpers.
 *
 * Pixel ID được đọc từ biến môi trường NEXT_PUBLIC_FACEBOOK_PIXEL_ID.
 * Vì có tiền tố NEXT_PUBLIC_ nên biến này được inline vào bundle phía client.
 */
/** Pixel ID mặc định. Ghi đè được bằng env NEXT_PUBLIC_FACEBOOK_PIXEL_ID. */
const DEFAULT_PIXEL_ID = "1058109840003701";

export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || DEFAULT_PIXEL_ID;

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
const ready = () => typeof window !== "undefined" && typeof window.fbq === "function";

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
