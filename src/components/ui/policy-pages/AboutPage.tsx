import PolicyLayout from "@/components/shared/PolicyLayout";
import { getTranslate } from "@/lib/helpers/getTranslate";
export default async function AboutPage() {
  const t: any = await getTranslate("aboutViajia");

  return <PolicyLayout title={t.title} content={t.content} />;
}
