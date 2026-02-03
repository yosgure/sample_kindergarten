"use client";

import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";

const SITE_ID = "hidamari";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SiteData = Record<string, any>;

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  body: string;
  category?: string;
  attachments?: { name: string; url: string; type: string; size: number }[];
}

export function useSiteData() {
  const [site, setSite] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, "sites", SITE_ID));
        if (snap.exists()) {
          setSite(snap.data() as SiteData);
        }
      } catch (e) {
        console.error("Failed to load site data:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { site, loading };
}

export function useNews(max: number = 5) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const q = query(
          collection(db, "sites", SITE_ID, "news"),
          orderBy("date", "desc"),
          limit(max)
        );
        const snap = await getDocs(q);
        setNews(snap.docs.map((d) => ({ id: d.id, ...d.data() } as NewsItem)));
      } catch (e) {
        console.error("Failed to load news:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, [max]);

  return { news, loading };
}
