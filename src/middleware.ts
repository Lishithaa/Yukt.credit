export { default } from "next-auth/middleware";
export const config = { matcher: ["/ca/:path*", "/msme/:path*", "/lender/:path*", "/admin/:path*"] };
