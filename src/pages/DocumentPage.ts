import { getBannerForDoc } from '../utils/getBannerForDoc';

function DocumentPage({ docIndex }: { docIndex: number }) {
  const bannerUrl = getBannerForDoc(docIndex);

  return (
    <div>
      <img src={bannerUrl} alt={`Document ${docIndex} Banner`} />
      {/* 其他文档内容 */}
    </div>
  );
}
