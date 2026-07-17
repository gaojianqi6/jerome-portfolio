"use client";

import { ArrowLeft, FolderOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
  const locale = usePathname().split("/")[1] === "zh" ? "zh" : "en";
  const copy = locale === "zh"
    ? { title: "这个地址还没有完成的页面。", body: "返回首页，或打开项目列表继续浏览。", home: "首页", projects: "项目" }
    : { title: "This route does not have a finished page.", body: "Return to the portfolio or open the project index to continue.", home: "Home", projects: "Projects" };

  return (
    <section className={styles.page}>
      <span>404 / Not found</span>
      <h1>{copy.title}</h1>
      <p>{copy.body}</p>
      <div>
        <Link href={`/${locale}`}><ArrowLeft size={18} />{copy.home}</Link>
        <Link href={`/${locale}/projects`}>{copy.projects}<FolderOpen size={18} /></Link>
      </div>
    </section>
  );
}
