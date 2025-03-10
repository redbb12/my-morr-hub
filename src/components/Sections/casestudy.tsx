import { Badge } from "@/components/ui/badge";
import Image from "next/image"; // ✅ Image import 추가

function CaseStudies() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        {/* 그리드 시스템을 수정하여 모바일에서 각 항목이 겹치지 않도록 설정 */}
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 lg:gap-10 p-8 border rounded-lg">
          {/* 왼쪽 콘텐츠 */}
          <div className="flex gap-10 flex-col mb-10 lg:mb-0">
            <div className="flex gap-4 flex-col">             
              <div className="flex gap-2 flex-col">
                <h2 className="text-left text-3xl font-bold text-gray-900" style={{ fontFamily: 'Helvetica Neue' }}>Case Study</h2><br></br>                                    
                
                {/* 새로운 Greensymphony 사례 */}
                <p className="text-lg leading-relaxed tracking-wider text-muted-foreground max-w-xl text-left">
                <span className="italic">Greensymphony</span>, a sustainable retail brand.
                </p>
                <br></br>    
                <p className="text-lg leading-relaxed tracking-wider text-muted-foreground max-w-xl text-left">
                  <strong>Challenge:</strong> High CPA and low engagement on social ads.    
                </p><br></br>    
                <p className="text-lg leading-relaxed tracking-wider text-muted-foreground max-w-xl text-left">
                  <strong>Solution:</strong> MORR’s AudienceMaster AI identified eco-conscious shoppers; CreativeGenius AI generated tailored visuals; and CampaignOptimizer AI optimized bids.
                </p><br></br>    
                <p className="text-lg leading-relaxed tracking-wider text-muted-foreground max-w-xl text-left">
                  <strong>Result:</strong> 35% reduction in CPA, 40% increase in engagement.</p>
               
              </div>
            </div>
          </div>

          {/* 오른쪽 콘텐츠 (배경 박스) */}
          <div className="bg-muted rounded-md aspect-square relative mb-10 lg:mb-0">
            <Image
              src="/ccchaos.svg" // 이미지 소스 설정
              alt="ccchaos image"
              layout="fill" // 부모 박스를 꽉 채우도록 설정
              objectFit="cover" // 이미지가 비율을 유지하며 꽉 차게 설정
              className="animate-float" // 애니메이션 효과 추가
            />
          </div>
        </div>
      </div>      
    </div>
  );
}

// ✅ **default export 추가 → import 에러 해결**
export default CaseStudies;
