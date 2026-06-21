import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import {
  getProductBySlug,
  getProductSections,
  getRoutableProducts,
} from "@/lib/products";
import { renderSection } from "@/lib/section-registry";

// SSG 전용: 사전 생성된 슬러그만 허용, 그 외엔 404(런타임 SSR 안 함).
export const dynamicParams = false;

export function generateStaticParams() {
  return getRoutableProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const { t } = getDictionary();
  return { title: t(product.nameKey), description: t(product.summaryKey) };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.status !== "available") notFound();

  // 제품 데이터 shape 로부터 섹션 배열을 파생(또는 product.sections override).
  const sections = getProductSections(product);
  return <>{sections.map(renderSection)}</>;
}
