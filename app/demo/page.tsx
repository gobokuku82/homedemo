import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getRoutableProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "데모 요청",
  description: "관심 제품과 현장 상황을 알려주시면 맞춤 데모로 답하겠습니다.",
};

/**
 * 모든 CTA 의 수렴점. 폼은 MVP에선 연출(백엔드 미연동) — 제출 동작은 2차.
 */
export default function DemoPage() {
  const { t } = getDictionary();
  const products = getRoutableProducts();

  return (
    <Section containerWidth="narrow">
      <div className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={t("demoPage.eyebrow")}
          title={t("demoPage.title")}
          description={t("demoPage.intro")}
        />
        <form className="flex flex-col gap-4">
          <Field label={t("demoPage.form.name")} name="name" />
          <Field label={t("demoPage.form.company")} name="company" />
          <Field label={t("demoPage.form.email")} name="email" type="email" />

          <div className="flex flex-col gap-1.5">
            <label htmlFor="product" className="text-caption font-medium text-ink">
              {t("demoPage.form.product")}
            </label>
            <select
              id="product"
              name="product"
              defaultValue={products[0]?.slug}
              className="h-11 rounded-md border border-border bg-surface px-3 text-body text-ink"
            >
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {t(p.nameKey)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-caption font-medium text-ink">
              {t("demoPage.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="rounded-md border border-border bg-surface p-3 text-body text-ink"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="self-start">
            {t("demoPage.form.submit")}
          </Button>
          <p className="text-caption text-ink-subtle">{t("demoPage.form.note")}</p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-caption font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="h-11 rounded-md border border-border bg-surface px-3 text-body text-ink"
      />
    </div>
  );
}
