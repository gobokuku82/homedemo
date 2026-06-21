import type { CtaRef, Product, Section, SectionType } from "@/lib/types";
import { PRODUCTS } from "@/content/products";

/** order 기준 정렬된 전체 제품(coming-soon 포함). */
export function getAllProducts(): Product[] {
  return [...PRODUCTS].sort((a, b) => a.order - b.order);
}

/** 라우팅 가능한 제품(available 만) — generateStaticParams 용. */
export function getRoutableProducts(): Product[] {
  return getAllProducts().filter((p) => p.status === "available");
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** 제품 CTA — 민감 제품의 ctaOverride 가 있으면 우선, 없으면 기본 데모 CTA. */
export function getProductCta(product: Product): CtaRef {
  return (
    product.sensitivity.ctaOverride ?? {
      labelKey: "product.common.detailCta",
      href: "/demo",
      variant: "primary",
    }
  );
}

/**
 * 제품 데이터 shape 로부터 상세 페이지 섹션 배열을 파생.
 * agents → agentTeam, capabilities → capabilityList.
 * sensitivity.hideSectionTypes 에 든 타입은 제외(민감 영역 게이팅).
 */
export function buildProductSections(product: Product): Section[] {
  const hidden = new Set<SectionType>(product.sensitivity.hideSectionTypes ?? []);

  const body: Section =
    product.offering.kind === "agents"
      ? {
          type: "agentTeam",
          id: `${product.slug}-agents`,
          productSlug: product.slug,
          titleKey: "product.common.agentsTitle",
        }
      : {
          type: "capabilityList",
          id: `${product.slug}-caps`,
          productSlug: product.slug,
          titleKey: "product.common.capsTitle",
        };

  const sections: Section[] = [
    { type: "productHero", id: `${product.slug}-hero`, productSlug: product.slug },
    body,
    { type: "productCta", id: `${product.slug}-cta`, productSlug: product.slug },
  ];

  return sections.filter((s) => !hidden.has(s.type));
}

/** 제품 상세 섹션: 명시적 override(product.sections)가 있으면 그것, 없으면 파생. */
export function getProductSections(product: Product): Section[] {
  return product.sections ?? buildProductSections(product);
}
