import PolicyLayout from "@/components/shared/PolicyLayout";
import { getTranslate } from "@/lib/helpers/getTranslate";
export default async function TermsCondition() {
  const t: any = await getTranslate("terms");

  return <PolicyLayout title={t.title} content={t.content} />;
}
