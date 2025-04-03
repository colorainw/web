import { banners } from '@config/yukina.config';

export function getBannerForDoc(docIndex: number): string {
  return banners[docIndex % banners.length];
}

const docBannerMap: Record<string, string> = {
  "docA": banners[0 % banners.length],
  "docB": banners[0 % banners.length],
  "docC": banners[1 % banners.length],
  "docD": banners[2 % banners.length],
};

export function getBannerForDocById(docId: string): string {
  return docBannerMap[docId] || banners[0 % banners.length];
}

