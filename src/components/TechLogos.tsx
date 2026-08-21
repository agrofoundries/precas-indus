import React from "react";

export function GoogleAdsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0001 2C6.47724 2 2.00012 6.47715 2.00012 12C2.00012 17.5228 6.47724 22 12.0001 22C17.523 22 22.0001 17.5228 22.0001 12C22.0001 6.47715 17.523 2 12.0001 2Z" fill="#EBF3FE"/>
      <path d="M7.5 16.5L11.5 8.5L13.5 12.5L9.5 20.5H7.5V16.5Z" fill="#4285F4"/>
      <path d="M16.5 16.5L12.5 8.5L14.5 4.5L18.5 12.5V16.5H16.5Z" fill="#F4B400"/>
      <circle cx="9.5" cy="18.5" r="2" fill="#34A853"/>
    </svg>
  );
}

export function MetaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" fill="#0066FF"/>
    </svg>
  );
}

export function HubSpotLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FFF3EB"/>
      <path d="M16.5 10.5V8.25C17.2 7.8 17.6 7 17.6 6.1C17.6 4.7 16.5 3.6 15.1 3.6C13.7 3.6 12.6 4.7 12.6 6.1C12.6 7 13 7.8 13.7 8.25V10.5C13.1 10.7 12.6 11.2 12.3 11.8L7.8 8.8C7.9 8.5 7.9 8.2 7.9 7.9C7.9 6.4 6.7 5.2 5.2 5.2C3.7 5.2 2.5 6.4 2.5 7.9C2.5 9.4 3.7 10.6 5.2 10.6C5.8 10.6 6.3 10.4 6.8 10.1L11.3 13.1C11.2 13.4 11.1 13.7 11.1 14C11.1 15.7 12.4 17 14.1 17C15.8 17 17.1 15.7 17.1 14C17.1 12.5 16 11.2 14.5 11.1V10.5H16.5Z" fill="#FF7A59"/>
    </svg>
  );
}

export function ShopifyLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8 6.2C18.7 6.1 18.5 6.1 18.3 6.2C18.2 6.3 16.5 7.5 16.5 7.5L14.7 4.1C14.6 3.9 14.4 3.8 14.2 3.8C14.2 3.8 14.1 3.8 14 3.9L12.3 7.6L10.3 3.6C10.1 3.3 9.7 3.2 9.4 3.4L4.8 5.6C4.6 5.7 4.5 5.9 4.5 6.1C4.5 6.3 10.5 21.5 10.5 21.5C10.6 21.8 10.9 22 11.2 22C11.5 22 11.8 21.8 11.9 21.5L19.4 6.9C19.6 6.6 19.3 6.3 18.8 6.2Z" fill="#95BF47"/>
    </svg>
  );
}

export function NextJsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#0F2F64" />
      <path d="M8 8V16L16 8V16" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SEMrushLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#EFF6FF" />
      <path d="M6 14C7.5 9 10.5 7 14 7C14.5 7 15 7.1 15.5 7.2L13 10H17L12 17L13.5 13H10C8.5 13 7.2 13.4 6 14Z" fill="#0052FF" />
    </svg>
  );
}

export function GoogleAnalyticsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FFF8E6" />
      <rect x="7" y="13" width="2.5" height="5" rx="1.25" fill="#E37400" />
      <rect x="11" y="10" width="2.5" height="8" rx="1.25" fill="#F9AB00" />
      <rect x="15" y="6" width="2.5" height="12" rx="1.25" fill="#E37400" />
    </svg>
  );
}

export function StripeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#635BFF" />
      <path d="M12.8 9.5C12.8 8.8 12.2 8.4 11.2 8.4C9.8 8.4 8.6 8.9 7.8 9.4V7.2C8.8 6.7 10 6.5 11.2 6.5C13.6 6.5 15.2 7.7 15.2 9.8C15.2 13 11 12.6 11 13.8C11 14.6 11.8 15 12.8 15C14.3 15 15.6 14.4 16.4 13.8V16C15.3 16.6 14 16.9 12.8 16.9C10.2 16.9 8.6 15.7 8.6 13.5C8.6 10.3 12.8 10.7 12.8 9.5Z" fill="white" />
    </svg>
  );
}
