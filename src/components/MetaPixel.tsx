import Script from "next/script";
import { FB_PIXEL_ID } from "@/lib/fpixel";

/**
 * Meta Pixel base code cho Next.js App Router.
 *
 * Base code gốc của Meta là một thẻ <script> thuần, không thể paste trực tiếp
 * vào JSX (React sẽ không thực thi nội dung inline). Ở đây nó được bọc bằng
 * next/script với strategy "afterInteractive" — Next.js sẽ chèn thẻ script vào
 * document sau khi trang đã hydrate xong, nên pixel không chặn quá trình render.
 *
 * Thẻ <noscript> giữ nguyên như base code: dùng ảnh 1x1 để vẫn ghi nhận
 * PageView với những trình duyệt tắt JavaScript.
 */
export default function MetaPixel() {
  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  );
}
