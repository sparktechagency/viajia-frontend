import PolicyLayout from "@/components/shared/PolicyLayout";
import { getTranslate } from "@/lib/helpers/getTranslate";
export default async function PrivacyPolicy() {
  const t: any = await getTranslate("privacy");

  return <PolicyLayout title={t.title} content={t.content} />;
}
