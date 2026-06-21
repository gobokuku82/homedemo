/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 제품 주도 쇼케이스 — 런타임 데이터 없음. 정적 생성(SSG) 기준.
  // Vercel 배포 시 output:'export'는 불필요(자동 SSG). 순수 정적 export가 필요하면 주석 해제.
  // output: 'export',
  images: {
    // 실제 제품 스크린샷은 /public 에서 서빙. 외부 호스트 추가 시 remotePatterns 등록.
    remotePatterns: [],
  },
};

export default nextConfig;
