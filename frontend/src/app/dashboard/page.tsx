"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type MeResponse = {
  id: number;
  username: string;
  email: string;
};

type DashboardSummary = {
  todayWorkMinutes: number; // dummy
  todayEarningsYen: number; // dummy
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

function formatMinutesToHM(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}h ${m}m`;
}

function formatYen(value: number): string {
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(value);
}

export default function DashboardPage() {
  const router = useRouter();

  const [me, setMe] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // v1: ダミーデータ（後でAPIに差し替え）
  const [summary] = useState<DashboardSummary>({
    todayWorkMinutes: 270, // 4h30m
    todayEarningsYen: 8735,
  });

  const hourlyWageYen = useMemo(() => {
    if (summary.todayWorkMinutes <= 0) return 0;
    const hours = summary.todayWorkMinutes / 60;
    return Math.floor(summary.todayEarningsYen / hours);
  }, [summary]);

  useEffect(() => {
    const client = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true, // session/cookie auth
    });

    const run = async () => {
      try {
        // Django側: /api/me/ を想定
        const res = await client.get<MeResponse>("/api/me/");
        setMe(res.data);
      } catch (e: any) {
        // 未ログインなら login へ
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  // router.replace が走っても一瞬描画されるのを防ぐ
  if (!me) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Trackly</div>
          <div className="text-sm text-gray-600">
            {me.username}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        {/* Today summary */}
        <section className="space-y-3">
          <h1 className="text-lg font-semibold">今日のサマリー</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              title="今日の稼働時間"
              value={formatMinutesToHM(summary.todayWorkMinutes)}
              sub="（ダミー）"
            />
            <StatCard
              title="今日の報酬"
              value={formatYen(summary.todayEarningsYen)}
              sub="（ダミー）"
            />
            <StatCard
              title="実質時給"
              value={`${formatYen(hourlyWageYen)} / h`}
              sub="（ダミー）"
            />
          </div>
        </section>

        {/* Controls */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">稼働コントロール</h2>

          <div className="rounded-2xl border p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="rounded-2xl px-4 py-3 border font-medium hover:bg-gray-50 transition"
                onClick={() => console.log("start")}
              >
                ▶ 稼働を開始
              </button>

              <button
                className="rounded-2xl px-4 py-3 border font-medium hover:bg-gray-50 transition"
                onClick={() => console.log("stop")}
              >
                ⏹ 稼働を終了
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              v1はボタンの動作は後回しでOK（まずUI完成）。
            </p>
          </div>
        </section>

        {/* v2 placeholder */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">今週のサマリー（v2）</h2>
          <div className="rounded-2xl border p-4 text-sm text-gray-500">
            ここは後でグラフ/合計を追加予定
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard(props: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-xs text-gray-500">{props.title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{props.value}</div>
      {props.sub ? <div className="mt-1 text-xs text-gray-400">{props.sub}</div> : null}
    </div>
  );
}