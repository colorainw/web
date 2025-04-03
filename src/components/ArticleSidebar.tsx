import { getBannerForDoc } from '../utils/getBannerForDoc';

export default function ArticleSidebar({ docIndex }: { docIndex: number }) {
  const bannerUrl = getBannerForDoc(docIndex);
  return <img src={bannerUrl} alt={`Article ${docIndex}`} />;
}

