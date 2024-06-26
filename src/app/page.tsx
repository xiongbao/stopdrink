import Link from "next/link";
import CardsList from "@/components/CardsList";
import { CardSkeleton } from "@/components/Card";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "戒酒计划",
  description:
    "记录我在父母与妻女之间的幸福事件",
};

const Page = () => {
  return (
    <main className="max-w-screen-md mx-auto px-4">
      <section className="my-20">
        <header>
          <h1 className="mb-8 text-2xl uppercase font-semibold text-neutral-400">
            戒酒计划
          </h1>
          <p className="text-xl font-light sm:text-4xl sm:font-semibold leading-snug">
            这是一项实验，自5月20日起戒酒半个月，记录期间滴酒不沾后的身体状态。
          </p>
        </header>
      </section>

      <section className="my-20">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">近期</h2>
          <Link
            href="/records"
            className="group block text-xs uppercase hover:text-neutral-400 duration-200"
          >
            <span>所有记录</span>
            <span className="inline-block transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none">
              &nbsp;-&gt;
            </span>
          </Link>
        </header>
        <Suspense
          fallback={Array.from({ length: 10 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        >
          <CardsList limit={5} offset={0} />
        </Suspense>
      </section>
    </main>
  );
};

export default Page;
