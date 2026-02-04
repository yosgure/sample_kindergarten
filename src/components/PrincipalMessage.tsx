"use client";

import Section from "./Section";
import { SiteData } from "@/lib/useSiteData";

export default function PrincipalMessage({ site }: { site?: SiteData | null }) {
  // 管理画面は principal に保存、公開サイト用に principalMessage もフォールバック
  const data = site?.principalMessage || site?.principal;
  if (!data) return null;

  const name = data.name || "";
  const message = data.message || data.greeting || "";
  const photo = data.photo || "";

  if (!name && !message) return null;

  return (
    <Section id="principal" enTitle="Message" jpTitle="園長メッセージ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
        {photo && (
          <div className="w-full md:w-[35%] flex-shrink-0">
            <img
              src={photo}
              alt={`園長 ${name}`}
              className="w-full object-cover"
              style={{
                aspectRatio: "3/4",
                borderRadius: "var(--radius-sm)",
              }}
            />
          </div>
        )}
        <div className={photo ? "w-full md:w-[65%]" : "w-full"} style={{ maxWidth: 720 }}>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 2.2,
              color: "var(--text)",
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </p>
          {name && (
            <p className="mt-8" style={{ textAlign: "right" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.875rem",
                  color: "var(--text-sub)",
                  letterSpacing: "0.06em",
                }}
              >
                園長
              </span>
              <span
                className="ml-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  color: "var(--text)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                }}
              >
                {name}
              </span>
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
