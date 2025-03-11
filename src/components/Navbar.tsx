"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ Next.js 15 방식
import { animateScroll as scroll, scroller } from "react-scroll";
import { Book, Sunset, Trees, Zap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  const pathname = usePathname(); // ✅ 현재 경로 가져오기
  const router = useRouter(); // ✅ Next.js 라우터 사용

  // ✅ URL에 해시(#id)가 포함되어 있으면 해당 섹션으로 스크롤 이동
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -80, // 네비게이션 바 높이 보정
      });
    }
  }, [pathname]);

  const [open, setOpen] = useState(false); // ✅ Sheet(햄버거 메뉴) 상태 관리

  // ✅ 페이지 이동 후 스크롤 처리
  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    } else {
      router.push(`/#${id}`);
    }
    setOpen(false); // ✅ 메뉴 클릭 후 햄버거 메뉴 닫기
  };
  

  return (
    <header className="w-full border-b bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <button onClick={() => handleNavigation("hero")} className="flex items-center gap-2 text-lg font-semibold cursor-pointer">
          <img src="/logo.png" alt="Logo" className="w-26 h-16" />
        </button>

        {/* 데스크탑 메뉴 */}
        
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">          
        <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2 bg-white text-black rounded-md shadow-md space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/audiencemaster-ai" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Book className="w-4 h-4 mr-2 text-gray-600" /> AudienceMaster AI
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/creativegenius-ai" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Sunset className="w-4 h-4 mr-2 text-gray-600" /> CreativeGenius AI
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/campaignoptimizer-ai" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Trees className="w-4 h-4 mr-2 text-gray-600" /> CampaignOptimizer AI
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/products/insightdashboard-ai" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Zap className="w-4 h-4 mr-2 text-gray-600" /> InsightDashboard AI
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        {/* ✅ Solutions Dropdown (데스크탑) - 세로선 제거됨 */}
        <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2 bg-white text-black rounded-md shadow-md space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/growthaccelerator" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Book className="w-4 h-4 mr-2 text-gray-600" /> GrowthAccelerator
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/creativestudio" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Sunset className="w-4 h-4 mr-2 text-gray-600" /> CreativeStudio
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/agencyhub" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Trees className="w-4 h-4 mr-2 text-gray-600" /> AgencyHub
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/smbboost" className="flex items-center px-4 py-2 hover:bg-gray-200">
                          <Zap className="w-4 h-4 mr-2 text-gray-600" /> SMBBoost
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button onClick={() => handleNavigation("features")} className="hover:text-gray-500 cursor-pointer">
            Features
          </button>          
          <button onClick={() => handleNavigation("about-us")} className="hover:text-gray-500 cursor-pointer">
            About Us
          </button>      
          <button onClick={() => handleNavigation("casestudy")} className="hover:text-gray-500 cursor-pointer">
            Case Study
          </button>
          <button onClick={() => handleNavigation("contact-us")} className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-200 hover:text-black">
            Contact Us
          </button>          
        </nav>

        {/* 모바일 메뉴 (ShadCN Sheet 사용) */}
        <Sheet open={open} onOpenChange={setOpen}>

          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0 w-full max-w-sm max-h-screen overflow-y-auto"> {/* ✅ 최대 너비 조정 */}
            
            {/* ✅ Menu 아래 보더 추가 */}
            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle className="text-left text-xl font-semibold">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col items-start text-lg w-full space-y-2 px-6 py-4">
              {/* ✅ 모든 버튼을 왼쪽 정렬 (text-left) */}
              <button onClick={() => handleNavigation("products")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                Products
              </button>
              <button onClick={() => handleNavigation("features")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                Features
              </button>
              <button onClick={() => handleNavigation("about-us")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                About Us
              </button>
              <button onClick={() => handleNavigation("casestudy")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                Case Study
              </button>

              {/* ✅ Contact Us 버튼도 동일한 스타일로 맞춤 */}
              <button 
                onClick={() => handleNavigation("contact-us")} 
                className="px-6 py-4 text-left bg-black text-white rounded-md hover:bg-gray-200 hover:text-black ml-auto">
                Contact Us
              </button>

            </div>

            {/* ✅ Solutions 섹션 위 보더 추가 */}
            <div className="border-t border-gray-300 w-full"></div>
            
            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle className="text-left text-lg font-semibold">Solutions</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col items-start text-lg w-full space-y-2 px-6 py-4">
              <button onClick={() => router.push("/solutions/growthaccelerator")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                GrowthAccelerator
              </button>
              <button onClick={() => router.push("/solutions/creativestudio")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                CreativeStudio
              </button>
              <button onClick={() => router.push("/solutions/agencyhub")} className="px-6 py-4 text-leftrounded-md ml-[-20px]">
                AgencyHub
              </button>
              <button onClick={() => router.push("/solutions/smbboost")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                SMBBoost
              </button>
            </div>

            {/* ✅ Product 섹션 위 보더 추가 */}
            <div className="border-t border-gray-300 w-full"></div>

            <SheetHeader className="px-6 py-4 border-b">
              <SheetTitle className="text-left text-lg font-semibold">Product</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col items-start text-lg w-full space-y-2 px-6 py-4">
              <button onClick={() => router.push("/products/audiencemaster-ai")} className="px-6 py-4 text-left hover:bg-gray-200 rounded-md ml-[-20px]">
                AudienceMaster AI
              </button>
              <button onClick={() => router.push("/products/creativegenius-ai")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                CreativeGenius AI
              </button>
              <button onClick={() => router.push("/products/campaignoptimizer-ai")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                CampaignOptimizer AI
              </button>
              <button onClick={() => router.push("/products/insightdashboard-ai")} className="px-6 py-4 text-left rounded-md ml-[-20px]">
                InsightDashboard AI
              </button>
            </div>

            {/* ✅ Product 섹션 아래 보더 추가 */}
            <div className="border-t border-gray-300 w-full"></div>
          </SheetContent>
        </Sheet>


      </div>
    </header>
  );
};

export default Navbar;
