const whatsappUrl = "https://api.whatsapp.com/send/?text&username=amrelbusaily&type=username&app_absent=0";

export function WhatsAppIconButton({ className = "", floating = false }: { className?: string; floating?: boolean }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Open WhatsApp"
      title="WhatsApp"
      className={`${floating ? "fixed bottom-5 right-5 z-50 h-14 w-14 shadow-lg md:bottom-6 md:right-6" : "h-11 w-11"} inline-flex items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${className}`}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path fill="currentColor" d="M12 2.4a9.55 9.55 0 0 0-8.22 14.4L2.6 21.4l4.74-1.15A9.55 9.55 0 1 0 12 2.4Zm0 17.35a7.78 7.78 0 0 1-3.96-1.08l-.28-.17-2.82.68.7-2.74-.18-.28A7.78 7.78 0 1 1 12 19.75Zm4.27-5.82c-.23-.12-1.37-.68-1.58-.76-.21-.08-.36-.12-.52.12-.15.23-.59.76-.72.92-.13.16-.27.18-.5.06-.23-.12-.97-.36-1.85-1.15-.68-.61-1.15-1.36-1.29-1.59-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.37-.56 1.56-1.1.19-.54.19-1 .13-1.1-.05-.1-.2-.16-.43-.28Z" />
      </svg>
      <span className="sr-only">Open WhatsApp</span>
    </a>
  );
}
