import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getPreferredLocale, localeCookieName } from "@/lib/i18n";

export default async function RootPage() {
  const cookieStore = await cookies();
  const locale = getPreferredLocale(cookieStore.get(localeCookieName)?.value);

  redirect(`/${locale}`);
}
