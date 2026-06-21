import { getDictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const { t } = getDictionary();
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-section-y text-center">
      <p className="text-display font-bold text-brand">404</p>
      <h1 className="text-h2 font-semibold text-ink">{t("notFound.title")}</h1>
      <p className="text-body text-ink-muted">{t("notFound.desc")}</p>
      <Button href="/" variant="primary">
        {t("notFound.home")}
      </Button>
    </Container>
  );
}
