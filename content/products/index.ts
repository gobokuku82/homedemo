import type { Product } from "@/lib/types";
import { moadream } from "./moadream";
import { kiwordream } from "./kiwordream";
import { maeumdream } from "./maeumdream";

/**
 * 제품 레지스트리 — 확장 seam.
 * 새 제품 = (1) content/products/<slug>.ts 작성, (2) 이 배열에 추가,
 * (3) messages/ko.json 에 product.<slug>.* 키 추가, (4) 스크린샷 교체.
 * → 라인업 카드 + /products/<slug> 상세가 코드 수정 없이 생성됨.
 * "+ 확장 예정" 슬롯은 Product 가 아니라 LineupSection 의 showComingSoon 플래그.
 */
export const PRODUCTS: Product[] = [moadream, kiwordream, maeumdream];
