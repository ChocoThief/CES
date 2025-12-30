// CES 2026 참가기업 데이터
// 자동 생성됨 - 수동으로 수정하지 마세요

export interface Company {
  id: string;
  hall: 'eureka' | 'global';
  boothNumber: string;
  name: string;
  nameEn: string;
  category: string;
  product: string;
  productEn: string;
  description: string;
  descriptionEn: string;
  logo: string;
  video: string;
  website: string;
}

export const eurekaCompanies: Company[] = [
  {
    id: 'EP001',
    hall: 'eureka',
    boothNumber: '62501-31',
    name: `주식회사 유메드`,
    nameEn: `UMED Inc.`,
    category: `Digital Health`,
    product: `유로린스 라이트`,
    productEn: `UroRinse Light`,
    description: `UroRinse™ Light는 장기 요도 카테터 환자를 위해 방광 세척을 자동화하는 의료기기로, 카테터 사용과 관련된 가장 흔하고 치료가 까다로운 병원 내 감염 문제를 직접적으로 해결합니다. 카테터 관련 요로 감염은 오염과 항생제 내성으로 인해 치료가 점점 더 어려워지고 있으며, 기존의 수동 세척 방식은 일관성이 없고 임상 환경에 한정된다는 한계가 있습니다.

UroRinse™ Light는 이러한 문제를 대체하여, 버튼 하나로 작동하는 완전 자동화 시스템을 통해 안전하고 표준화된 세척 주기를 안정적으로 제공합니다. 또한 막힘, 혈전, 혈뇨와 같은 합병증을 관리하여 예측 가능하고 예방적인 치료를 가능하게 합니다.

이 제품은 병원, 요양 시설, 가정에서도 활용할 수 있으며, 전문 임상 교육이 없어도 보호자나 환자 스스로 쉽게 조작할 수 있도록 설계되었습니다. 통합 모바일 앱과 보안 클라우드 연결 기능을 통해 원격 모니터링 및 전문가 지원이 가능하며, 의료진은 진료실 밖에서도 환자 관리 할 수 있습니다.

UroRinse™ Light는 방광 관리 패러다임을 기존의 사후 치료에서 예방 중심의 선제적 관리로 전환시켜, 필요할 때 어디서나 병원 수준의 치료를 제공합니다.`,
    website: `https://en.umedglobal.com/`,
    logo: `참가업체 로고 파일/EP_png/유메드 로고.png`,
    descriptionEn: `UroRinse™ Light is a medical device that automates bladder irrigation for patients with long-term urinary catheters, directly addressing the most common and challenging hospital-acquired infections linked to catheter use. Catheter-related urinary tract infections are increasingly difficult to treat due to contamination and antibiotic resistance, and current manual irrigation methods are inconsistent and limited to clinical environments. UroRinse™ Light replaces this with a fully automated, button-activated system that delivers consistent, safe, and standardized irrigation cycles.  It also manages complications such as blockages, blood clots, and hematuria, making care more predictable and preventive. Designed for hospitals, care facilities, and homes, it is simple enough for caregivers or patients to operate without clinical training. Integrated mobile app and secure cloud connectivity allow remote monitoring and expert support, enabling clinicians to guide care beyond the clinic. UroRinse™ Light shifts bladder care from reactive treatment to proactive infection prevention, providing hospital-grade therapy wherever it’s needed.`,
    video: `EP-mp4/유메드/유메드 홍보영상.mp4`
  },
  {
    id: 'EP002',
    hall: 'eureka',
    boothNumber: '62501-32',
    name: `주식회사 인텔렉투스`,
    nameEn: `Intellectus Corporation`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `인투커넥스`,
    productEn: `intConneX`,
    description: `int2ConneX는 한국에서 독자적으로 개발된 DDS(Data Distribution Service) 표준 기반의 실시간 데이터 통신 미들웨어로, 고신뢰성과 미션 크리티컬 애플리케이션을 위해 설계되었습니다. 서버리스(peer-to-peer) 메시 아키텍처와 토픽 기반 Publish/Subscribe 모델을 결합하여 분산 시스템 환경에서 저지연·결정론적 통신을 구현합니다.

모듈형 런타임은 EtherCAT, CAN-FD와 같은 산업용 프로토콜을 지원하며, Real-Time Linux, RTOS, 컨테이너 기반 플랫폼에 효율적으로 배포할 수 있습니다. 또한 Adaptive AUTOSAR와 완벽히 호환되어 Some/IP 통신 모듈이나 차세대 자동차 플랫폼을 대체할 수 있습니다.

중앙 서버를 제거함으로써 엣지 컴퓨팅 성능을 최적화하고, 내결함성(Fault Tolerance)과 확장성을 향상시켰습니다. 특히 자율주행차, 스마트 제조, 국방, 로보틱스 분야에서 혹독한 환경에서도 무손실·고신뢰 데이터 교환을 보장합니다.

국내외 특허는 DDS 기반 통신 및 전송 통합 기술을 보호하고 있으며, 상용 버전과 연구용 버전은 엣지 노드 단위의 유연한 라이선스 정책을 제공해 기업 시스템에서 폭넓게 활용될 수 있습니다.`,
    logo: `참가업체 로고 파일/EP_png/주식회사 인텔렉투스.png`,
    website: ``,
    descriptionEn: `int2ConneX is a real-time data communication middleware based on the Data Distribution Service (DDS) standard, independently developed inKorea for high‑reliability, mission‑critical applications. It uses a serverless peer-to-peer mesh architecture combined with a topic-basedpublish/subscribe model to enable low-latency, deterministic communication in distributed systems. The modular runtime supports industrialprotocols such as EtherCAT and CAN-FD, and deploys efficiently on real-time Linux, RTOS, and container-based platforms. Fully compatible withAdaptive AUTOSAR, int2ConneX can replace Some/IP communication modules or next‑generation automotive platforms. By removing centralservers, it optimizes edge computing operations, improves fault tolerance, and enhances scalability. Designed for autonomous vehicles, smartmanufacturing, defense, and robotics, it ensures lossless, reliable data exchange under harsh conditions. Domestic and international patentsprotect its DDS communication and transport integration technology. Its commercial and research editions, with flexible licensing per edge node,facilitate wide adoption in enterprise systems.`,
    video: `EP-mp4/주식회사 인텔렉투스.mp4`
  },
  {
    id: 'EP003',
    hall: 'eureka',
    boothNumber: '62501-33',
    name: `아이스링커 주식회사`,
    nameEn: `ICE LINKER Co., Ltd`,
    category: `Beauty & Personal Care`,
    product: `엘라테라`,
    productEn: `Ella Thera`,
    description: `휴대용 냉/온 2in1 마사지기로 휴대용 동일 성능 제품 중 세계 최초 영하10도 까지 도달`,
    website: `http://www.icelinker.com`,
    logo: `참가업체 로고 파일/EP_png/아이스링커 로고.png`,
    descriptionEn: `Portable cold/hot 2-in-1 massager reaches minus 10 degrees Celsius for the first time among portable performance products`,
    video: ``
  },
  {
    id: 'EP004',
    hall: 'eureka',
    boothNumber: '62501-34',
    name: `(주)미타운`,
    nameEn: `MeTown Inc.`,
    category: `AI`,
    product: `이머스3 슈터`,
    productEn: `Immers3 Shooter`,
    description: `Immers3 Shooter는 제품을 인식해 최적의 촬영 각도를 자동으로 계획하고, 실사 수준의 3D 모델을 복원하는 자율 3D 촬영 로봇입니다. 제품을 올려두기만 하면 촬영부터 3D 콘텐츠 생성까지 모두 자동으로 완료됩니다.`,
    website: `https://www.evova.ai`,
    logo: `참가업체 로고 파일/EP_png/(주)미타운 로고_컬러.png`,
    descriptionEn: `Immers3 Shooter is an autonomous 3D capture robot that automatically analyzes product geometry, plans optimal camera angles, and reconstructs photorealistic 3D models from all-around shots—just place the item and it captures, processes, and delivers immersive 3D content instantly. 

Our key competitive advantage lies in full automation — Immers3 Shooter autonomously plans, captures, and reconstructs 3D models using AI-driven view planning and Gaussian Splatting technology. Unlike traditional photogrammetry systems requiring manual setup or post-processing, our robot identifies the best angles, captures HDR imagery, and generates photorealistic 3D assets instantly. Competitors include Artec, RealityCapture, and PolyCam. We differentiate by integrating robotics, real-time AI reconstruction, and e-commerce-ready output in one seamless system.`,
    video: ``
  },
  {
    id: 'EP005',
    hall: 'eureka',
    boothNumber: '62501-35',
    name: `(주)자하케미칼`,
    nameEn: `JAHA Chemical Co. Ltd.`,
    category: `Industrial Equipment & Machinery`,
    product: `바이로제로 항바이러스 필터`,
    productEn: `VIROZERO Antiviral Air Filter`,
    description: `접촉 1분내 모든 형태의 바이러스, 세균, 곰팡이를 초고속으로 99.9% 사멸 시키는 동시에 사람과 동물에게 알레르기를 유발하는 물질을 제거해 주면서 생활유해가스 탈취까지 가능하며 저차압 성능을 통해 필터 수명연장 및 소비전략 절감 달성까지 가능한 고성능 HVAC 방역 공조 필터 입니다.`,
    website: `https://www.jahachemical.com/`,
    logo: `참가업체 로고 파일/EP_png/자하케미칼 로고.png`,
    descriptionEn: `This is a high-performance HVAC disinfection air conditioning filter that kills 99.9% of all types of viruses, bacteria, and fungi within 1 minute of contact, removes substances that cause allergies in humans and animals, and deodorizes harmful gases. It also extends the life of the filter and reduces consumption through low pressure differential performance.`,
    video: ``
  },
  {
    id: 'EP006',
    hall: 'eureka',
    boothNumber: '62501-36',
    name: `베니라이트 주식회사`,
    nameEn: `Benilight`,
    category: `Digital Health`,
    product: `Half-Body, ABBA, iLED Pro, iLED Pro Mini`,
    productEn: `Half-Body, ABBA, iLED Pro, iLED Pro Mini`,
    description: `적색 및 근적외선 빛을 이용한 통증완화용 광생물조절 의료기기, FDA 2등급 의료기기, AI를 이용한 App을 이용한 개인 맞춤형 건강기기`,
    website: `http://benilight.com`,
    logo: `참가업체 로고 파일/EP_png/베니라이트 주식회사 로고_컬러_brown logo(letter size).png`,
    descriptionEn: `Photobiomodulation medical device for pain relief using red and near-infrared light, FDA Class II medical device, personalized health device using AI-powered app`,
    video: `EP-mp4/베니라이트 주식회사/베니라이트 주식회사 홍보 영상.mp4`
  },
  {
    id: 'EP007',
    hall: 'eureka',
    boothNumber: '62501-37',
    name: `(주)이지코리아`,
    nameEn: `EG KOREA Co., Ltd.`,
    category: `Sustainability & Energy`,
    product: `EG TS 전류센서`,
    productEn: `EG TS(TotalScan) Current Sensor`,
    description: `EG TS(TotalScan) 전류 센서는 단일 장치로 0.1A에서 5,000A 이상의 광범위한 전류를 측정하도록 설계된 소형 PCB 기반 전자기 센서입니다. 기존 CT 또는 로고스키 센서와 달리 포화 없이 작동하며 케이블 연결 없이 설치가 가능하여 비침투형 설치가 가능합니다. 이 센서는 저전류 및 고전류 환경 모두에서 정확한 실시간 전류 데이터를 제공하여 전기 자동차, 재생 에너지, 데이터 센터 및 전력망 등의 애플리케이션을 지원합니다. 디지털 출력은 AI 시스템과 통합되어 예측 유지 보수 및 안전 모니터링을 지원합니다. 한국과 일본에서 특허를 취득했으며 국제 특허 출원 중인 이 장치는 이미 철도 및 산업 시범 프로젝트에서 검증되었습니다. EG TS 센서는 구리 및 플라스틱 사용량을 90% 이상 줄여 지속 가능한 제조 및 복원력 있는 에너지 인프라를 촉진합니다.`,
    website: `http://www.egkorea.co.kr`,
    logo: `참가업체 로고 파일/EP_png/이지코리아 로고.png`,
    descriptionEn: `The EG TS (TotalScan) Current Sensor is a compact, PCB-based electromagnetic sensor designed to measure a wide range of currents from 0.1A to over 5,000A with a single device. Unlike conventional CT or Rogowski sensors, it operates without saturation and requires no cable pass-through, enabling non-intrusive installation. The sensor provides accurate, real-time current data in both low- and high-current environments, supporting applications in electric vehicles, renewable energy, data centers, and power grids. Its digital output can be integrated with AI systems for predictive maintenance and safety monitoring. Patented in Korea and Japan with PCT pending internationally, the device is already proven in railway and industrial pilot projects. By reducing copper and plastic usage by over 90%, the EG TS sensor also promotes sustainable manufacturing and resilient energy infrastructure.`,
    video: `EP-mp4/이지코리아/이지코리아 홍보영상.mp4`
  },
  {
    id: 'EP008',
    hall: 'eureka',
    boothNumber: '62501-38',
    name: `고로켓컴퍼니`,
    nameEn: `Gorocket Company`,
    category: `Digital Health`,
    product: `팜픽`,
    productEn: `Pharmpick`,
    description: `1. 정의
Pharmpick은 AI 기반 개인 맞춤형 디지털 헬스케어 플랫폼으로, 건강기능식품을 쉽고 안전하게 선택·관리할 수 있도록 돕는 서비스입니다.

2. 핵심 기능
2-1) 성분 분석: 제품에 포함된 기능성 원료를 쉽게 이해할 수 있도록 데이터 기반 분석 제공
2-2) 성분 비교: 유사 제품 간 성분·효능 차이를 한눈에 확인
2-3) 함량 합산: 여러 제품을 함께 섭취할 때 상한치 초과 여부를 자동 계산
2-4) 개발 중 기능
2-4-1) 개인화 추천 알고리즘: 복용 이력·의약품 상호작용을 고려한 안전 맞춤형 추천
2-4-2) 케어링: 가족/지인과 함께 섭취 관리
2-4-3) 셀러브리티: 전문가·셀러가 직접 제품을 제안하고 소비자가 구매까지 이어질 수 있는 샵인샵

3. 비즈니스 모델
3-1) 앱 기반 Freemium 구독 모델 (기본 기능 무료, 고급 기능 유료)
3-2) PB 브랜드 ‘My Name Is’ 제품 판매 연계 → 원스톱 구조 완성
3-3) 데이터 협업: 보험사·리테일러와 연계한 B2B 광고 및 커머스

4. 비전
단순히 건강기능식품 선택을 돕는 것을 넘어, 예방 중심 디지털 헬스케어 플랫폼으로 진화하여 글로벌 시장(특히 의료비가 높은 미국)에서 건강관리 토탈 앱 서비스로 자리 잡는 것.`,
    website: `https://gorocketcompany.super.site`,
    logo: `참가업체 로고 파일/EP_png/고로켓컴퍼니 로고.png`,
    descriptionEn: `1. Definition
Pharmpick is an AI-powered personalized digital healthcare platform that helps users easily and safely choose and manage dietary supplements.

2. Key Features
2-1) Ingredient Analysis: Provides clear, data-driven insights into functional ingredients in each product.
2-2) Comparison Tool: Allows users to compare ingredients and efficacy across multiple products.
2-3) Dosage Aggregation: Automatically calculates combined intake to check for upper limit exceedance.
2-4) In-Development Features:
2-4-1) Personalized Recommendation Algorithm: Reflecting supplement history and drug–nutrient interactions for safe, tailored choices.
2-4-2) Caring: Enables family and friends to monitor supplement intake together.
2-4-3) Sellerbrity: A shop-in-shop feature where experts or sellers recommend products directly, leading to seamless purchase.

3. Business Model
3-1) Freemium app subscription (basic features free, premium features paid).
3-2) PB brand “My Name Is” product sales integrated → complete one-stop structure.
3-3) Data collaboration with insurers and retailers for B2B advertising and commerce.

4. Vision
Beyond simply helping users choose dietary supplements, Pharmpick is evolving into a prevention-focused digital healthcare platform, aiming to establish itself as a total health management app service in the global market—especially in the U.S., where medical costs are high.`,
    video: ``
  },
  {
    id: 'EP009',
    hall: 'eureka',
    boothNumber: '62501-39',
    name: `주식회사 인텔리빅스 경남지사`,
    nameEn: `Intellivix Co., Ltd. Gyeongnam Branch`,
    category: `AI`,
    product: `차세대 영상관제 모니터링 시스템`,
    productEn: `Gen AMS(Generative AI Monitoring system)`,
    description: `Gen AMS는 단순한 모니터링을 넘어, AI 기반의 스마트 관제 시스템입니다. AI가 실시간으로 상황을 분석하고 위험을 예측하여 그 결과를 자동 보고서 형태로 제공합니다.

기존 인력에 의존하던 육안 관제를 AI 관제로 전환하여 관제의 효율성을 극대화합니다. 또한, 여러 목적에 맞는 다목적 동시 관제 기능을 지원하여 필요한 탐지 목적에 따라 맞춤형 모니터링이 가능합니다.

안전 데이터를 생성하고 사고 원인을 분석해 통계를 제공함으로써 데이터 기반의 안전 관제를 통해 사고를 선제적으로 예방하도록 돕습니다.

언제 어디서든 즉각적인 대응이 가능하도록 24시간 모바일 지원을 통해 스마트폰으로 사고 상황을 실시간으로 보고받을 수 있습니다.`,
    website: `https://www.intellivix.ai/`,
    logo: `참가업체 로고 파일/EP_png/인텔리빅스 경남지사 로고.png`,
    descriptionEn: `Gen AMS is an AI-powered smart monitoring system that goes beyond simple surveillance. Our AI analyzes situations and predicts risks in real time, delivering the results in automated reports.

This system transforms traditional human-dependent visual inspections into AI-driven monitoring, maximizing operational efficiency. It also supports multi-purpose simultaneous monitoring, allowing for customized surveillance based on specific detection goals.

By generating safety data and analyzing accident causes, Gen AMS provides critical statistics that enable a data-driven safety management approach, helping to prevent accidents proactively.

With 24/7 mobile support, you can receive real-time alerts on your smartphone, ensuring you can respond to incidents immediately, anytime and anywhere.`,
    video: ``
  },
  {
    id: 'EP010',
    hall: 'eureka',
    boothNumber: '62501-40',
    name: `주식회사 그리네타`,
    nameEn: `Greneta Corp.`,
    category: `AI`,
    product: `그리네타 옵티마이저 2.0: 지속 가능한 미래를 위한 3D 데이터의 혁신`,
    productEn: `Greneta Optimizer 2.0: Revolutionizing 3D Data for a Sustainable Future`,
    description: `Greneta Optimizer AI-Quantization Compressor는 AI 기반 알고리즘을 통해 방대한 3D 모델을 단 몇 초 만에 최대 99.6%까지 축소하면서도 완전한 시각적 품질을 그대로 유지하는 방식으로 3D 콘텐츠의 미래를 변화시킵니다.
이 획기적인 기술은 AR/VR, 디지털 트윈, 의료 영상에서 가장 큰 병목현상 중 하나였던 고정밀 데이터의 무거운 용량 문제를 제거합니다. 깔끔하고 직관적인 인터페이스와 원클릭 프리셋을 통해 복잡한 압축 작업도 손쉽고 전문가 수준으로 수행할 수 있게 됩니다.
모듈형 디자인 덕분에 API 통합 또는 독립 실행형으로도 사용이 가능하여 다양한 플랫폼에서 일관된 결과를 제공합니다.
수 기가바이트(GB)에 달하는 모델도 모바일 XR 기기에서 실시간 스트리밍이 가능할 만큼 가벼워지고, 원격 의료 진단이나 현장에서 즉시 생성되는 디지털 트윈에도 활용될 수 있습니다.
스토리지, 지연 시간, 에너지 비용을 극적으로 줄임으로써, Optimizer는 단순히 작업 흐름을 가속화할 뿐 아니라, 데이터 관련 탄소 배출까지 줄여 지속 가능성에도 기여합니다.
기술적 완성도, 세련된 사용성, 글로벌 확장성을 결합한 Optimizer는 지속 가능한 3D 미래를 형성하는 차세대 혁신 기술로 자리매김하고 있습니다.`,
    website: `https://www.greneta.ai`,
    logo: `참가업체 로고 파일/EP_png/그리네타 로고.png`,
    descriptionEn: `Greneta Optimizer AI-Quantization Compressor transforms the future of 3D content with an AI-driven algorithm that shrinks massive 3D models by up to 99.6% in seconds while preserving full visual fidelity. This breakthrough eliminates one of the biggest bottlenecks in AR/VR, digital twins, and medical imaging: the heavy weight of high-precision data. With a clean, intuitive interface and one-click presets, complex compression becomes effortless and professional-grade. Its modular design enables seamless API integration or standalone use, ensuring consistent results across platforms. The impact is profound: gigabyte-scale models become lightweight enough for real-time streaming on mobile XR devices, remote medical diagnostics, or instant digital twins in the field. By dramatically reducing storage, latency, and energy costs, Optimizer not only accelerates workflows but also supports sustainability by cutting data-related carbon emissions. Combining technical excellence, refined usability, and global scalability, Optimizer stands as a next-generation innovation shaping the sustainable future of 3D.`,
    video: `EP-mp4/그리네타/그리네타 홍보영상.mp4`
  },
  {
    id: 'EP011',
    hall: 'eureka',
    boothNumber: '62501-41',
    name: `(주)로보틱박스`,
    nameEn: `Robotic Box Co., Ltd.`,
    category: `AI`,
    product: `물류 사고 감소를 위한 AI 지게차 안전 관제 솔루션`,
    productEn: `AI Forklift Safety Control Solution for Reducing Logistics Accidents`,
    description: `지게차와 작업자의 움직임을 Top-View 관제 시스템으로 관측하여, 영상 속 객체(지게차 및 작업자)를 라벨링하고 이동 동선을 예측합니다. 또한 인공지능 기반 위험 상황 예측 기술을 적용하여, 작업 환경에서 발생할 수 있는 충돌 위험을 사전에 감지하고 예방할 수 있는 AI 안전 관제 솔루션을 제공합니다.`,
    website: `https://www.rbtbox.kr/`,
    logo: `참가업체 로고 파일/EP_png/로보틱박스 로고.png`,
    descriptionEn: `An AI-powered Top-View monitoring solution that tracks forklifts and workers, labels objects in real time, predicts movement paths, and prevents potential collisions through advanced risk prediction technology`,
    video: `EP-mp4/로보틱박스/로보틱박스 홍보영상.mp4`
  },
  {
    id: 'EP012',
    hall: 'eureka',
    boothNumber: '62501-42',
    name: `(주)씨피식스`,
    nameEn: `CP6 Co., Ltd.`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `에이캣`,
    productEn: `ACAT`,
    description: `씨피식스는 레벨2 이상의 자율주행 자동차 사고 발생 시 미국 연방법인 MMUCC에서 정한 데이터를 실시간으로 수집하여 사고 발생 시 자율주행 관련 센서 상태를 Crash Report 상에 정확한 상태를 입력할 수 있으므로 자율주행 자동차 사고 발생 시 정확한 사고 원인 규명을 할 수 있으며, 자율주행 기능이 제공되는 전기 자동차의 배터리 관리 시스템(BMS, Battery Management System) 분석 기능을 고도화한 '모빌리티 통합 데이터 분석 플랫폼 "Autonomous driving accident investigation analysis tool(ACAT)'을 제공합니다. 이 플랫폼은 차량 주행 데이터, 센서 데이터, 배터리 상태 데이터를 단일 애플리케이션 환경에서 통합 분석하여 안전성 강화, 운영 효율성 향상, 사고 예방을 동시에 실현할 수 있습니다.`,
    website: `https://www.thecp6.com/en`,
    logo: `참가업체 로고 파일/EP_png/씨피식스 로고_컬러.png`,
    descriptionEn: `CP6 collects real-time data, as required by U.S. federal law (MMUCC), when accidents occur in Level 2 or higher autonomous vehicles. This enables the precise recording of autonomous driving–related sensor statuses in the Crash Report, allowing for accurate determination of accident causes in autonomous vehicle incidents.
In addition, CP6 offers the Autonomous Driving Accident Investigation Analysis Tool (ACAT), an advanced Mobility Integrated Data Analysis Platform that enhances the analytical capabilities of the Battery Management System (BMS) in electric vehicles equipped with autonomous driving functions.
The ACAT platform integrates the analysis of vehicle driving data, sensor data, and battery status data within a unified application environment, enabling enhanced safety, improved operational efficiency, and proactive accident prevention.`,
    video: `EP-mp4/씨피식스/씨피식스 홍보 영상.mp4`
  },
  {
    id: 'EP013',
    hall: 'eureka',
    boothNumber: '62501-43',
    name: `주식회사 어메스`,
    nameEn: `Amass Co., Ltd.`,
    category: `Sustainability & Energy`,
    product: `파츠핏`,
    productEn: `PartsFit`,
    description: `자동차 제조사 기반의 당사 독자적 기술인 '차량종합데이터'를 활용하여 기존 데이터 기반 환경 부재로 확인이 어려웠던 부품을 정확히 식별, 관리할 수 있도록 합니다. 또한 아날로그 방식에 머물러 있던 자동차 부품의 식별, 선별, 등록, 재고, 유통 전 과정을 디지털화 및 자동화하여 산업 전반의 효율성을 크게 높입니다. 이를 통해 자동차 부품 재활용률을 확대하고 신품 생산을 줄여 탄소 배출을 절감함으로써 글로벌 ESG 규제에 부합하고 지속 가능한 산업 방향성을 선도합니다.`,
    website: `https://www.amass.co.kr`,
    logo: `참가업체 로고 파일/EP_png/에머스 로고.png`,
    descriptionEn: `By leveraging our proprietary technology, Comprehensive Vehicle Data, developed on the basis of automotive manufacturers’ information, we enable the accurate identification and management of parts that were previously difficult to verify due to the lack of a data-driven environment. Furthermore, we digitalize and automate the entire process of parts identification, selection, registration, inventory management, and distribution, which has long remained in analog form, thereby significantly enhancing overall industry efficiency. This not only increases the utilization of recycled automotive parts and reduces the production of new parts, but also lowers carbon emissions, ensuring compliance with global ESG regulations and leading the way toward a sustainable industrial future.`,
    video: ``
  },
  {
    id: 'EP014',
    hall: 'eureka',
    boothNumber: '62501-44',
    name: `(주)유니컨`,
    nameEn: `Uniqconn Inc.`,
    category: `Mobile Devices, Accessories Apps`,
    product: `UC60`,
    productEn: `UC60`,
    description: `UC60은 60GHz 기반의 초 근거리(5cm 이내) 초고속 저전력 무선 데이터 전송용 반도체 
칩으로, USB, UART, SPI, I2C, GPIO, MIPI, Gigabit Ethernet 등 다양한 유선 인터페이스를 
무선화할 수 있음. 기존 유선 연결 방식의 단점을 극복하면서도, 최대 6.25Gbps에 달하는 
전송 속도를 제공하여 산업 및 소비자용 애플리케이션에서 유선 수준의 신호품질 구현함.`,
    website: `http://www.uniqconn.com`,
    logo: `참가업체 로고 파일/EP_png/62501-44.png`,
    descriptionEn: `UC60 is a 60GHz-based semiconductor chip designed for ultra-short-range (within 5cm), ultra-high-speed, and low-power wireless data transmission. It can wirelessly support various wired interfaces such as USB, UART, SPI, I2C, GPIO, MIPI, and Gigabit Ethernet. By overcoming the limitations of conventional wired connections, UC60 delivers transmission speeds of up to 6.25Gbps, enabling wired-level signal quality in both industrial and consumer applications.`,
    video: `EP-mp4/62501-44.mp4`
  },
  {
    id: 'EP015',
    hall: 'eureka',
    boothNumber: '62501-45',
    name: `(주)클레어옵틱`,
    nameEn: `CLAROPTIC CO.,Ltd.`,
    category: `XR`,
    product: `XR디바이스용 AR GLASS`,
    productEn: `AR GLASSS FOR XR DEVICE`,
    description: `AI가  적용되어 이동중에도 정보획득이 가능한 차세대 AR GLASS`,
    website: `http://www.claroptic.co.kr/e_main.php`,
    logo: `참가업체 로고 파일/EP_png/클레어옵틱 로고.png`,
    descriptionEn: `AI intergrated ever day usage Next-gen AR Glasses`,
    video: ``
  },
  {
    id: 'EP016',
    hall: 'eureka',
    boothNumber: '62501-46',
    name: `주식회사 케이엘에스`,
    nameEn: `KLS`,
    category: `AI`,
    product: `캄스텐드`,
    productEn: `Calm Stand`,
    description: `CalmStand는 AIoT 기반 테라피형 모니터 받침대로, 표정·음성·입력 데이터를 분석해 사운드·아로마 테라피를 자동 제공한다. 사무환경 변경 없이 설치 가능하며 집중력과 정서 회복을 돕는 비침습형 웰니스 솔루션으로, ESG 기반 스마트 오피스 시장을 목표로 한다.`,
    logo: `참가업체 로고 파일/EP_png/케이엘에스 로고.png`,
    website: ``,
    descriptionEn: `CalmStand is an AIoT-based monitor stand that analyzes facial, voice, and input data to deliver automatic sound and aroma therapy. It’s a non-invasive wellness solution enhancing focus and well-being for ESG smart office markets.`,
    video: `EP-mp4/주식회사 케이엘에스.mp4`
  },
  {
    id: 'EP017',
    hall: 'eureka',
    boothNumber: '62501-47',
    name: `주식회사 바이야드`,
    nameEn: `Biyard Corp.`,
    category: `AI`,
    product: `라텔`,
    productEn: `Ratel`,
    description: `디지털 공론장은 제 역할을 잃어가고 있습니다. 여론 조사는 조작에 취약하고, 중요한 논의는 끝없는 디지털 소음 속에 사라집니다. 신뢰할 수 있는 집단적 의사결정 플랫폼이 부재한 상황입니다.
Ratel은 이 문제를 해결합니다. Ratel은 자주적 신원(SSI), DAO 거버넌스, AI 기반 도구를 통합해 신뢰할 수 있는 사회적 플랫폼을 구축합니다.
DID를 통한 검증된 참여, DAO 기반의 구조화된 의사결정, 그리고 MCP와 같은 AI 도구를 통해 혼란스러운 온라인 공간을 생산적이고 합의 가능한 장으로 바꿉니다. 그 결과, 정책 제안부터 지역사회 문제 해결까지, Ratel은 수동적인 대중을 능동적인 이해관계자로 전환시킵니다.`,
    logo: `참가업체 로고 파일/EP_png/주식회사 바이야드.png`,
    website: ``,
    descriptionEn: `The digital public square is failing. Public surveys are vulnerable to manipulation, and vital deliberations are lost in digital noise, leaving a critical void for a trusted platform for collective decision-making. Ratel fills this void. It is a purpose-driven social platform that rebuilds trust by integrating Self-Sovereign Identity (SSI), DAO governance, and AI-powered tools.
Ratel enables verified, fraud-proof participation through DIDs, facilitates structured engagement in DAO-based decision-making spaces, and provides AI tools like MCP to facilitate productive dialogue, transforming chaotic online spaces into environments where common opinions can be effectively coordinated and distilled. From shaping policy proposals to solving community issues, Ratel transforms passive audiences into active stakeholders.`,
    video: `EP-mp4/주식회사 바이야드.mp4`
  },
  {
    id: 'EP018',
    hall: 'eureka',
    boothNumber: '62501-48',
    name: `주식회사 올컴`,
    nameEn: `Allcom Co., Ltd.`,
    category: `Lifestyle`,
    product: `올컴 스마트 텀블러 – 정밀한 분유 온도 제어`,
    productEn: `Allcom Smart Tumbler - Precise Baby Formula Control`,
    description: `아기 분유가 너무 뜨거우면 입을 데일 수 있고, 너무 차가우면 소화에 문제가 생깁니다. 그러나 부모들은 특히 외출 시 분유를 올바른 온도로 준비하는 데 큰 어려움을 겪습니다.
올컴 스마트 텀블러는 펠티어 반도체 기술을 활용해 13℃에서 45℃까지 정밀한 냉·온 제어를 구현함으로써 이러한 문제를 해결합니다. 내부 온도 센서와 블루투스 연동을 통해 모바일 앱에서 실시간 제어가 가능하며, 분리형 SUS-316(수술용 스테인리스 316) 용기는 의료기기와 식품 기구에 널리 사용되는 소재로 위생적 세척과 내구성을 보장합니다. BPA-Free(비스페놀-A 불검출) 외장은 인체에 안전하며, 진공 단열 구조는 보온·보냉 성능을 강화합니다. 모듈형 설계는 유지보수를 간소화하고 제품 수명을 연장합니다.
분유 조제뿐만 아니라 야외 활동, 전문 음료 서비스 등 다양한 환경에서도 최적의 음료 상태를 유지할 수 있어, 정밀 제어·위생·휴대성을 모두 갖춘 생활 혁신 솔루션입니다.`,
    website: `https://all-comfort.com/`,
    logo: `참가업체 로고 파일/EP_png/올컴 로고.png`,
    descriptionEn: `What happens when baby formula is too hot or too cold? Babies can burn their mouth or suffer from digestion problems. Yet it is often a hassle for parents—especially when traveling—to prepare formula at the right temperature.
The Allcom Smart Tumbler solves this with precise dual-mode cooling and heating in the 13°C to 45°C range using Peltier semiconductor technology. An internal sensor and Bluetooth connectivity enable real-time control via a mobile app, while a detachable SUS-316 (Surgical Stainless Steel 316) vessel ensures hygienic cleaning and durability, widely used in medical and food-grade equipment. The BPA-Free (Bisphenol-A Free) exterior ensures safety, while vacuum insulation enhances thermal performance. Its modular design allows easy maintenance and extends product lifespan.
Beyond baby care, the tumbler adapts to outdoor activities and professional beverage service, maintaining optimal drink conditions anywhere. This blend of precision control, hygiene, and portability makes it a true lifestyle innovation.`,
    video: `EP-mp4/올컴/올컴 홍보영상.mp4`
  },
  {
    id: 'EP019',
    hall: 'eureka',
    boothNumber: '62501-49',
    name: `웨스텍글로벌`,
    nameEn: `WES-Tec Global`,
    category: `Smart Cities/Smart Home`,
    product: `에코C큐브`,
    productEn: `Eco-C CUBE`,
    description: `에코C큐브(Eco‑C CUBE)는 어망, 부표, 농업용 필름, 다층 포장재 등과 같은 재활용이 어려운 폐플라스틱을 세척이나 분리 없이 직접 압출·성형하여 만든 고강도 구조 블록입니다. 이들 플라스틱은 육상 및 해양에서 수거되며, 기존 재활용 기술로는 처리하기 어려운 자원입니다. 독자적인 ‘새활용(New-Cycling)’ 공정을 통해 저온에서 제조되며 고분자 구조를 보존함으로써, 콘크리트보다 뛰어난 인장강도와 압축강도를 확보했습니다. 제품 1kg당 약 2.99kg의 CO₂를 저감하며, 이는 SDX재단의 전과정평가(LCA)를 통해 공식 검증되었습니다. 본 기술은 대한민국 환경부 산하 비영리기관인 (사)한국저영향개발협회와 ㈜웨스텍글로벌이 공동 개발하였으며, 2025년 에디슨 어워드에서 지속가능 건설자재 부문 혁신 기술로 은상을 수상했습니다.

에코C큐브(Eco‑C CUBE)는 옹벽, 제방, 해안 방호 구조물 등 기후 회복력 기반 인프라에 사용되는 고강도 모듈형 블록입니다. 이 제품은 농업용 폐비닐, 폐어망 등 세척 및 분리되지 않은 폐플라스틱을 활용해, New-Cycling 압출 공정으로 구조용 자재로 재탄생시킵니다. 열분해나 기존 재활용과 달리 고분자 구조를 유지해, 압축강도 26.4MPa, 인장강도 16.7MPa의 성능을 확보합니다. S자형 인터로킹 결합부와 중앙 관통공 설계를 통해 우수한 체결력과 하중 분산을 실현하며, AI 기반 원료 분석 시스템을 통해 기계적 성능의 균일성을 유지합니다. 에코C큐브는 재난 대응 인프라에 필요한 구조적 안정성과 환경적 성능을 모두 충족합니다. 또한, LCA 인증 기준으로 제품 1kg당 2.99kg의 CO₂를 저감하며, 일일 20톤 처리 시 연간 21,830톤의 탄소를 줄일 수 있습니다. 이는 30년생 소나무 약 360만 그루가 1년간 흡수하는 탄소량과 같습니다.

에코C큐브(Eco‑C CUBE)는 토압과 구조 하중을 견디도록 설계된 모듈형 지중 구조물입니다. 농업용 폐비닐, 폐어망 등 재활용이 어려운 폐플라스틱을 세척 없이 첨가제 없이 압출 가공하여 제작됩니다. 이들 폐기물이 수거되지 않으면 농지에 방치되거나 해양으로 유입되어 미세플라스틱으로 분해되고, 생태계 전반으로 확산됩니다. 육상과 해양 생물들이 이를 섭취하게 되고, 이로 인한 생태계 피해는 결국 인간에게 돌아오며, 기후 재난으로 다시 피해를 주게 됩니다. 에코C큐브는 이러한 폐플라스틱을 내구성 있는 인프라 자재로 전환함으로써 환경 유출을 방지하고 생태계를 보호합니다. 또한 기존 재난 대응 인프라에 사용되던 시멘트나 철근처럼 고탄소 자재를 대체함으로써, 이산화탄소 배출을 줄이고 기후변화 완화에 기여할 것입니다. 결국 자연과 사람 모두에게 돌아올 피해를 줄이는 지속가능한 해법입니다.

에코C큐브(Eco‑C CUBE)는 그동안 재활용이 불가능하다고 여겨졌던 폐플라스틱—예를 들어 혼합되었거나 불순물이 포함된 플라스틱—을 세척이나 분리 없이 직접 압출하여 구조용 블록으로 전환하는 기술 혁신을 이루었습니다. 기존 방식은 재활용 비용이 새 플라스틱 생산 비용보다 높아 경제성이 떨어졌고, 결국 이러한 폐기물은 쓰레기로 취급되어 방치되거나 매립·소각되어 생태계에 심각한 피해를 초래해 왔습니다. 하지만 에코C큐브는 플라스틱을 종류별로 분류하거나 세척하지 않고도 제품화할 수 있어, 경제성을 확보한 상태로 다양한 폐플라스틱을 재활용할 수 있습니다. 이 기술은 기존에 버려지던 자원을 가치 있는 건설 자재로 전환하며, 폐기물 활용에 대한 새로운 가능성을 제시합니다.

전 세계적으로 기후위기가 심화되면서 산사태, 홍수, 쓰나미, 지진과 같은 재난이 더욱 자주, 그리고 강하게 발생하고 있으며, 특히 개발도상국일수록 피해는 더욱 커지고 있습니다. 이러한 재난에 대응하기 위해서는 견고한 토목 인프라가 필수적이지만, 시멘트, 철근, 석유화학 제품은 대표적인 온실가스 다배출 산업입니다. 에코C큐브는 이러한 자재를 폐플라스틱을 활용해 소각 없이 제조한 고성능 토목용 블록으로 대체합니다. 이는 석유화학 과정에서 발생하는 배출을 줄일 뿐 아니라, 시멘트 및 철근 생산의 필요성도 낮추어 전체 탄소 배출량을 줄입니다. 또한 에코C큐브는 철근콘크리트보다 뛰어난 물리적 강도를 확보하고 있어, 기후 재난에 강한 인프라 구축이 가능하며, 지역사회의 기후 회복력을 강화하고 대규모 탄소 저감에도 기여할 수 있는 솔루션입니다.

플라스틱 오염은 특히 개발도상국에서 더욱 심각하게 나타나며, 이들 지역에서는 플라스틱보다 저렴하면서도 대체 가능한 자재가 거의 없습니다. 또한 선진국에서 버려진 폐플라스틱이 유입되며, 환경과 사회에 부정적인 영향을 미치고 있습니다. 에코C큐브(Eco‑C CUBE)는 이러한 폐플라스틱을 가치 있는 건설 자재로 전환함으로써, 현지 일자리를 창출하고 플라스틱으로 인한 문제를 해결하며 생활 수준을 향상시킬 수 있습니다. 생산 공정이 단순하고 비용이 낮아 저소득 국가에서도 실현 가능성이 높으며, 전 세계적으로 가장 널리 퍼진 자원인 플라스틱을 활용하기에 ‘제5의 건설 자재’로서의 잠재력을 갖추고 있습니다. 현재 국내에서 다수의 특허를 출원·등록했으며, 주요 요소 기술에 대해서는 해외 특허도 출원 중입니다. 이 기술은 실제로 삶을 변화시킬 수 있는 역량을 지니고 있습니다.`,
    website: `https://westec-g.com`,
    logo: `참가업체 로고 파일/EP_png/윈스텍글로벌 로고.png`,
    descriptionEn: `Eco‑C CUBE is a high-strength structural block produced by directly extruding and molding hard-to-recycle plastic waste—such as fishing nets, buoys, agricultural films, and multilayer packaging—without washing or separation. These plastics, sourced from land and marine environments, are typically non-recyclable through conventional means. Using a proprietary “New-Cycling” process, the blocks are manufactured at low temperatures to preserve the polymer structure, resulting in superior tensile and compressive strength compared to concrete. Each kilogram of product reduces approximately 2.99 kg of CO₂ emissions, as officially verified by the SDX Foundation through LCA (Life Cycle Assessment). The technology was co-developed by WES‑Tec Global and the Korea Low Impact Development Association, a nonprofit under the Ministry of Environment of the Republic of Korea. It was awarded the Silver Prize in the Advanced Engineering Infrastructure Solutions category at the 2025 Edison Awards for its innovation in sustainable construction materials.

Eco‑C CUBE is a high-strength modular block used in climate-resilient infrastructure such as retaining walls, embankments, and coastal barriers. It is manufactured through a New-Cycling extrusion process that transforms unwashed, unsorted plastic waste—such as agricultural film and fishing nets—into structural material. Unlike pyrolysis or traditional recycling, this method preserves polymer integrity, achieving compressive strength of 26.4 MPa and tensile strength of 16.7 MPa. Its S-shaped interlocking joint and central through-hole ensure high fastening power and effective load distribution. An AI-based analysis system maintains mechanical consistency. The block meets both environmental and structural demands for disaster-resilient applications. Additionally, it reduces 2.99 kg of CO₂ per 1 kg of product (LCA-certified). With a 20-ton daily capacity, it achieves 21,830 tons of annual carbon reduction—equivalent to the CO₂ absorbed by 3.6 million 30-year-old pine trees.

Eco‑C CUBE is a modular underground structure designed to withstand soil and structural loads. It is made by extruding hard-to-recycle plastic waste—such as agricultural film and fishing nets—without washing or additives. If unrecovered, these plastics remain on farmland or enter oceans, breaking down into microplastics that spread through ecosystems. Both microplastics and larger debris are ingested by land and marine organisms, causing severe ecological harm. These impacts ultimately affect humans—through the food chain and increasingly frequent climate disasters. Eco‑C CUBE upcycles this waste into durable infrastructure, preventing environmental leakage and protecting biodiversity. It also replaces high-emission materials traditionally used in disaster-resilient infrastructure, such as cement and steel, reducing CO₂ emissions and contributing to climate change mitigation. By tackling pollution and emissions at once, Eco‑C CUBE helps lessen the harm that would otherwise fall on both nature and people—mitigating climate-related disasters and the human suffering they cause.

Eco‑C CUBE introduces a breakthrough technology that transforms previously unrecyclable plastic waste—such as mixed or contaminated plastics—into structural blocks without washing or sorting. Traditional recycling was economically unfeasible, leading to widespread dumping, landfilling, or incineration, which harmed ecosystems. By enabling direct extrusion without preprocessing, Eco‑C CUBE makes it possible to recycle a wide range of plastic waste at low cost. This innovation turns discarded materials into valuable construction assets and offers a new solution for plastic waste recovery.

As the global climate crisis intensifies, disasters like landslides, floods, tsunamis, and earthquakes are becoming more frequent and severe—especially in developing nations. Infrastructure is needed to withstand these events, but traditional materials such as cement, steel, and petrochemicals are major sources of greenhouse gas emissions. Eco‑C CUBE replaces them with high-performance blocks made from waste plastics, without combustion. This avoids emissions from petrochemical processes and reduces the need for cement and steel. With superior mechanical properties, Eco‑C CUBE provides a lower-carbon, more climate-resilient alternative to concrete, enabling large-scale CO₂ reduction while protecting communities from climate threats.

Plastic pollution is especially severe in developing countries, where affordable alternatives are limited. Many of these regions struggle with discarded plastic waste from both domestic and foreign sources. Eco‑C CUBE transforms this waste into valuable building material, creating jobs, addressing plastic-related issues, and improving quality of life. Its simple, low-cost production makes it practical in low-income areas. As plastic is globally abundant, Eco‑C CUBE has the potential to become a fifth essential construction material. Multiple patents have been filed and granted in Korea, and core technologies are currently under international application. This innovation has the power to change lives.`,
    video: ``
  },
  {
    id: 'EP020',
    hall: 'eureka',
    boothNumber: '62501-50',
    name: `주식회사 알에프모아컴이노베이션`,
    nameEn: `RF MORECOM INNOVATION`,
    category: `Digital Health`,
    product: `QDLED 스마트 바이오 스탠드 조명`,
    productEn: `QDLED Smart Bio Stand Light`,
    description: `[제품1] QDLED(퀀텀닷 LED)스마트 바이오 스탠드조명
본 제품은 QDLED기술을 적용한 첨단 스마트 바이오 스탠드 조명으로, **자연광에 가까운 고연색성(High CRI)을 구현하여 사물의 색을 정확하고 생생하게 재현합니다. 이를 통해 사용자는 일반 조명 대비 향상된 시각적 편안함과 선명한 색 표현력을 경험할 수 있습니다.
또한, 본 조명은 근적외선(NIR, Near-Infrared) 방출 기능을 탑재하여 눈의 피로를 완화하고, 장시간 사용 시에도 쾌적한 조명 환경을 제공합니다. 아울러, 지능형 음성인식 제어 기능 및 무선연결을 통해 사용자가 손을 사용하지 않고도 조명의 밝기 및 색온도를 간편하게 조절할 수 있어, 스마트 홈 및 스마트 오피스 환경에 최적화되어 있습니다.

[제품2] 5G NR 1W 디지털 ICS MIMO 중계기
5G NR 1W 디지털 ICS MIMO 중계기는 차세대 네트워크 솔루션으로, 실내 공간 어디서든 안정적이고 빠른 5G 연결을 제공합니다. 최대 500 MHz의 초광대역과 MIMO 기술, 그리고 첨단 디지털 간섭 제거 기능을 통해 복잡한 환경에서도 끊김 없는 통신 품질을 보장합니다.
또한 QDLED 시스템과의 연동을 통해, 조명은 단순한 빛을 넘어 지능적이고 데이터 중심의 AI 플랫폼으로 업그레이드 됩니다. 이를 통해 대규모 스마트 웰니스 기기 네트워크에서도 실시간 반응성과 손쉬운 확장성을 구현할 수 있습니다.`,
    website: `https://www.rfminnovation.com/`,
    logo: `참가업체 로고 파일/EP_png/알에프모아컴 로고.png`,
    descriptionEn: `1. QDLED (Quantum Dot LED) Smart Bio Stand Light
The QDLED Smart Bio Stand Light is a premium wellness-focused lighting system that recreates the natural spectrum of sunlight through advanced quantum dot conversion technology. By delivering ultra-high color rendering (CRI ≥95) and bio-responsive spectral tuning across visible, near-infrared, and optional UVB ranges, it goes beyond illumination—becoming a tool for health, comfort, and productivity.
Its refined design integrates AI-ready controls, IoT compatibility, and low-heat efficiency, positioning it as the benchmark for modern lighting in homes, clinics, wellness centers, and creative spaces.
2.5G NR 1W Digital ICS MIMO Repeater
The 5G NR 1W Digital ICS MIMO Repeater is a next-generation network backbone designed to deliver ultra-reliable, low-latency 5G coverage indoors. With 500 MHz ultra-wideband, MIMO technology, and advanced digital interference cancellation, it enables seamless connectivity in complex environments.
When paired with QDLED systems, it empowers lighting to become intelligent, data-driven, and AI-enhanced, ensuring real-time responsiveness and scalability across large networks of smart wellness devices.`,
    video: ``
  },
  {
    id: 'EP021',
    hall: 'eureka',
    boothNumber: '62501-51',
    name: `(주)에이아이지먼트`,
    nameEn: `AI gement Co., Ltd`,
    category: `AI`,
    product: `플린`,
    productEn: `PLYN`,
    description: `AI 기반 구매비용절감 및 운영업무 자동화 SaaS`,
    website: `https://plynai.com`,
    logo: `참가업체 로고 파일/EP_png/에이아이지먼트 로고.png`,
    descriptionEn: `Built on Agentic AI, PLYN empowers enterprises to lower procurement costs and stay resilient against supply chain risks.`,
    video: ``
  },
  {
    id: 'EP022',
    hall: 'eureka',
    boothNumber: '62501-52',
    name: `주식회사 소네트`,
    nameEn: `SONNET CO., LTD.`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `랙시안`,
    productEn: `RAXIAN`,
    description: `RAXIAN은 다양한 모빌리티 환경에 최적화된 완전 자율주행 전기 15인승 셔틀입니다. 주식회사 소네트가 독자개발한 AutoDrive™ 레벨 4 자율주행 소프트웨어(한국 국토교통부 인증)를 탑재하여 공공 도로에서 안전한 무인 주행을 가능하게 하며, 인력 수요를 줄이고 접근성을 향상시킵니다.

듀얼 100kW 인휠 모터와 고용량 배터리를 장착해 최고 속도 200km/h, 주행거리 200km를 제공하지만, 출시 모델은 한국 자율주행 규제에 따라 40km/h로 제한될 예정입니다. 모듈형 설계를 통해 크기, 파워트레인, 실내 디자인을 유연하게 재구성할 수 있도록 하여 도심, 농촌, 산업 현장 등 다양한 환경에서 활용될 수 있습니다.

강철 프레임으로 보강한 경량 FRP 모노코그 차체를 통해 제조 비용 절감과 안전성 모두를 달성하였습니다. 산업 디자인 전문기업 INNODESIGN과 협업을 통해 RAXIAN은 독창적인 외관뿐만 아니라, 사용자 중심의 편안하고 접근성 높은 실내 공간까지 갖추었습니다. 또한, 운전석을 제거하여 승객 공간을 극대화하였습니다.

뛰어난 성능, 확장성, 안전한 자율주행 성능을 모두 갖춘 RAXIAN은 차세대 자율주행 셔틀 시장을 선도할 것입니다.`,
    website: `https://sonnet.ai/en/`,
    logo: `참가업체 로고 파일/EP_png/주식회사 소네트 로고_컬러.png`,
    descriptionEn: `RAXIAN is a fully autonomous, electric 15-seat shuttle designed for diverse mobility environments. Powered by SONNET.AI’s proprietary AutoDrive™ Level 4 software—certified by Korea’s MOLIT—it enables safe, driverless operation on public roads, reducing labor needs and improving accessibility. Dual 100kW in-wheel motors and a high-capacity battery deliver a top speed of 200 km/h and a range of 200 km, though its launch model will be limited to 40 km/h in compliance with Korean autonomous vehicle regulations. Its modular architecture supports flexible reconfiguration of size, powertrain, and cabin design for use in urban, rural, and industrial settings. The lightweight FRP monocoque body with steel reinforcement reduces manufacturing costs while maintaining strength. Co-developed with INNODESIGN, RAXIAN combines a distinctive exterior with a user-centric interior that emphasizes comfort and accessibility. By eliminating the driver’s seat, it maximizes passenger space. Balancing performance, adaptability, and certified autonomy, RAXIAN provides a scalable platform for next-generation shuttle services.`,
    video: ``
  },
  {
    id: 'EP023',
    hall: 'eureka',
    boothNumber: '62501-53',
    name: `(주)유엔지테크놀러지`,
    nameEn: `U&G Technology`,
    category: `Sustainability & Energy`,
    product: `유엔지 워터 인핸서`,
    productEn: `UNG Water Enhancer`,
    description: `물의 흐름만으로 작동하는 세계 최초의 무필터 샤워기용 정수기, UNG 워터 인핸서를 소개합니다. 전기나 배터리 없이, 오직 수압만으로 작동하며, 정기적인 교체나 관리가 필요 없는 친환경 제품입니다.

이 제품은 특허받은 정전기장 모듈을 통해 물 분자 간 수소 결합을 약화시켜, 물의 용해도를 높이고 표면장력을 낮춰줍니다. 이 과정을 통해 물의 경도는 약 25% 감소, 박테리아는 약 66.6% 제거되어 세정력이 향상되고 피부 건강도 보호할 수 있습니다.

또한, 물을 이온화하여 배관 내부의 녹과 스케일 생성을 억제하며, 장기적으로 배관 수명을 연장해줍니다. 정밀 설계된 전극 구조는 베르누이 효과를 극대화하여, 물의 흐름은 빨라지고 사용량은 줄어드는 효과를 제공합니다.

작동 중에는 LED 불빛이 켜져 상태를 쉽게 확인할 수 있으며, 필터 교체나 전기 연결이 필요 없어 유지보수가 전혀 필요 없습니다.

튼튼하고 부식에 강한 재질로 반영구적으로 사용할 수 있고, 일반 샤워 수전부에 간편하게 연결할 수 있어 누구나 손쉽게 설치할 수 있습니다.

이 제품은 피부의 보습력을 높이고, 두피 자극을 줄이며, 피부 건강 전반을 개선하는 데 도움을 줍니다.
UNG 워터 인핸서는 물의 질을 한층 업그레이드하여, 건강하고 지속 가능한 샤워 환경을 제공합니다.`,
    logo: `참가업체 로고 파일/EP_png/(주)유엔지테크놀러지.png`,
    website: ``,
    descriptionEn: `The UNG Water Enhancer is the world’s first self-powered, non-filtered water purifier designed for home showers. Powered solely by water pressure, its patented electrostatic field module weakens hydrogen bonding between water molecules, increasing solubility and reducing surface tension. This process delivers a 25% reduction in water hardness and a 66.6% reduction in bacteria, improving cleansing power while safeguarding health. The field ionizes water to inhibit rust and scale formation in pipes, supporting long-term plumbing integrity. A precision-engineered electrode structure maximizes the Bernoulli effect, increasing flow rate while conserving water. No electrical installation, batteries, or filters are required, ensuring maintenance-free, eco-friendly operation. The LED light illuminates to indicate its operating status. The system enhances moisturizing for skin, reduces scalp irritation, and supports overall dermatological health. Built from durable, corrosion-resistant materials, the Enhancer offers semi-permanent use, seamlessly integrating into standard shower lines for a sustainable upgrade to water quality and home wellness.`,
    video: `EP-mp4/유엔지테크놀러지.mp4`
  },
  {
    id: 'EP024',
    hall: 'eureka',
    boothNumber: '62501-54',
    name: `(주)퀀텀하이텍`,
    nameEn: `Quantum HiTech Co., Ltd.`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `트리즈에이아이 (TRIZ-AI)`,
    productEn: `TRIZ-AI with EV Guard`,
    description: `트리즈에이아이(TRIZ-AI)는 전기차 배터리의 실시간 안전진단과 수명 예측을 제공하는 AI 플랫폼입니다. 배터리를 탈거하지 않고 실주행 전기차 빅데이터를 활용해 상태를 정밀 분석하여 화재 및 이상징후 예방, SOH(건전성 지수, 잔존용량)와 RUL(잔존수명) 관리, 폐배터리 재활용 등급 신속 판정을 가능하게 하며 — 이를 통해 보다 안전하고, 지능적이며, 지속가능한 전기차 배터리 전주기 관리 SaaS 솔루션을 제공합니다.`,
    website: `https://en.quantum-hitech.co.kr/`,
    logo: `참가업체 로고 파일/EP_png/(주)퀀텀하이텍 로고_컬러_백색단도.png`,
    descriptionEn: `TRIZ-AI is an AI-powered platform that provides real-time safety diagnostics and lifecycle prediction for EV batteries. Without disassembly, it precisely analyzes battery conditions using real-world driving data, enabling fire and anomaly prevention, SOH(State of Health) and RUL(remaining useful life) management, and rapid grading for second-life recycling — delivering a complete SaaS solution for safer, smarter, and more sustainable EV battery lifecycle management.`,
    video: ``
  },
  {
    id: 'EP025',
    hall: 'eureka',
    boothNumber: '62501-55',
    name: `(주)씽크링크`,
    nameEn: `Synclink Co., Ltd.`,
    category: `Wearable Technologies`,
    product: `Smart RIng`,
    productEn: `스마트링`,
    description: `VR/AR 컨트롤러, 에어 마우스, 리모컨을 손가락에 반지 모양의 장치를 착용한 상태에서 작동하는 제품
블루투스를 통해 PC에 연결되며 2시간 동안 완충 후 약 5일간 사용
가격은 약 $100이며 9축 자이로 센서, 1000dpi 광학 센서, 5.0 블루투스, 리튬 이온 50mAh 배터리 등의 부품이 사용`,
    logo: `참가업체 로고 파일/EP_png/(주)씽크링크.png`,
    website: ``,
    descriptionEn: `A product that performs VR/AR controller, air mouse and remote control functions while wearing a ring-shaped device on the finger.
It connects to your PC through Bluetooth and can be used for about 5 days if fully charged for 2 hours.
The price is around $100 USD and components such as 9-axis gyro sensor, 1000dpi optical sensor, 5.0 Bluetooth, lithium-ion 50mAh battery, etc. are used
We have a patent that can solve the problem of finger size common to ring device companies, and based on this, we will also enter the healthcare ring market where blood sugar can be checked.`,
    video: `EP-mp4/씽크링크.mp4`
  },
  {
    id: 'EP026',
    hall: 'eureka',
    boothNumber: '62501-56',
    name: `에어렛`,
    nameEn: `Airet Corp`,
    category: `Smart Cities/Smart Home`,
    product: ``,
    productEn: ``,
    description: `비전 AI가 신발의 상태를 분석해 최적의 살균, 건조, 탈취 수행하는 슈케어`,
    logo: `참가업체 로고 파일/EP_png/에어렛.png`,
    website: ``,
    descriptionEn: `AI vision analyzes shoe condition to deliver optimal sterilization, drying, and deodorization.`,
    video: `EP-mp4/에어렛.mp4`
  },
  {
    id: 'EP027',
    hall: 'eureka',
    boothNumber: '62501-57',
    name: `주식회사 나노브리지`,
    nameEn: `Nanobridge co., ltd.`,
    category: `AI`,
    product: `크라이오링크`,
    productEn: `Cryolink`,
    description: `AI 인프라, 고성능 컴퓨터, 전기차 등에 적용가능한 획기적인 방열솔루션 제공하는 나노카본 냉각수`,
    logo: `참가업체 로고 파일/EP_png/주식회사 나노브리지.png`,
    website: ``,
    descriptionEn: `Nano-carbon coolant delivering breakthrough thermal management solutions for AI infrastructure, high-performance computing, and electric vehicles`,
    video: ``
  },
  {
    id: 'EP028',
    hall: 'eureka',
    boothNumber: '62501-58',
    name: `주식회사 히트솔`,
    nameEn: `Heat-Sol Corp`,
    category: `Lifestyle`,
    product: `스카이빙 방열판 & 스카이빙 CNC 설비`,
    productEn: `Skiving Heatsink &  Skiving CNC Machine`,
    description: `(스카이빙 방열판)
스카이빙 공정은 재료를 정밀하게 얇게 절단하여 표면적을 획기적으로 늘리고 최적의 방열을 구현하는 차세대 방열 기술입니다.
탁월한 열전도성과 가공성, 생산성을 제공하며, 기존 방열판 대비 15~20% 높은 방열 효율을 달성합니다.
(스카이빙 CNC 설비)
﻿스카이빙을 방열판을 제조하는 설비로 기존 설비보다 1/2사이즈로 작지만, 기존 스카이빙 설비보다 빠르고 정교한 작업을 수행할 수 있어 높은 생산 능력을 자랑합니다.
﻿회전형 베드는 정교한 스카이빙 작업이 가능하여 다양하고 복잡한 형태의 특수 형상 핀을 제작 할 수 있습니다.
﻿4면의 진공베드를 모두 활용하기 때문에, 빠른 교체가 가능하고 다양한 형상의 제품을 동시에 가공할 수 있습니다.`,
    website: `http://www.heat-sol.com/heatsol`,
    logo: `참가업체 로고 파일/EP_png/62501-58.png`,
    descriptionEn: `(Skiving Heatsink)
The Skiving process is an advanced technology that significantly increases surface area for optimal heat dissipation by precisely slicing materials with superior thermal conductivity. It delivers 15–20% higher thermal efficiency compared to conventional heatsinks while maintaining excellent processability and productivity.

(Skiving CNC Machine)
﻿The new model developed by Heat-Sol is ﻿half the size of previous models, yet delivers faster and more precise performance and higher productivity than existing skiving machines.
﻿The rotating bed enables more precise skiving, making it possible to produce a wide range of complex, specially-shaped fins.
﻿The vacuum beds installed on all four sides enable quick replacement and allows for products of various shapes to be processed simultaneously.`,
    video: `EP-mp4/62501-58.mp4`
  },
  {
    id: 'EP029',
    hall: 'eureka',
    boothNumber: '62501-59',
    name: `(주)아스트로엑스`,
    nameEn: `Astrox CO.,Ltd`,
    category: `Drones`,
    product: `AX-P80M`,
    productEn: `AX-P80M`,
    description: `AX-P80M은 AX-P80의 업그레이드 버전으로, 실제 구조 및 물류 임무 수행이 가능하도록 설계되었습니다. 상단에는 독립적인 슬라이딩 모듈 베이가 있어 인명 구조용 들것 캡슐이나 화물 모듈을 장착할 수 있으며, 하단에는 1톤급 윈치를 통해 소방용 소화장치, 배송 포드, 구조 장비 등을 장착할 수 있습니다. 모든 모듈은 도구 없이 60초 이내에 교체 가능하여 임무 전환이 신속하게 이루어집니다. 향상된 탑재 능력, 강화된 모듈성, 인명 구조 기능을 통해 AX-P80M은 접근이 불가능하거나 긴급한 고위험 환경에서 더 높은 유연성, 안전성, 그리고 효과성을 보장합니다.`,
    logo: `참가업체 로고 파일/EP_png/(주)아스트로엑스.png`,
    website: ``,
    descriptionEn: `The AX-P80M is an upgraded version of the AX-P80, now equipped for real-life rescue and logistics operations. It features a dual independent modular system—with a sliding top bay that supports either stretcher capsules for human extraction or cargo modules for delivery, and a bottom bay with a 1-ton winch for firefighting tanks, delivery pods, or rescue tools. Modules can be changed in under 60 seconds without tools, enabling rapid mission adaptation. With expanded payload capacity, enhanced modularity, and life-saving capabilities, the AX-P80M ensures greater flexibility, safety, and effectiveness in high-risk, no-access, or time-critical environments.`,
    video: `EP-mp4/아스트로엑스.mp4`
  },
  {
    id: 'EP030',
    hall: 'eureka',
    boothNumber: '62501-60',
    name: `유니유니`,
    nameEn: `UNIUNI Corp.`,
    category: `Smart Cities/Smart Home`,
    product: `가장 안전한 화장실 AI솔루션`,
    productEn: `RestroomGuard Savvy`,
    description: `가장 안전한 화장실 새비는 모든 화장실의 문제를 해결합니다.`,
    logo: `참가업체 로고 파일/EP_png/유니유니.png`,
    website: ``,
    descriptionEn: `RestroomGuard Savvy is a camera-free safety system for the Accessibility & Longevity pillar. It preserves independence, dignity, and equitable access in sensitive spaces—restrooms, clinics, schools, and transit hubs—without recording images or voices. Using non-visual sensing, it fuses Time-of-Flight depth, acoustic emergency detection, and air quality to detect falls, screams, assault patterns, illicit-filming behaviors, suspected methamphetamine-use behaviors, smoke, fire indicators, and prolonged occupancy. All inference runs 24/7 on device; only anonymized events are sent via mTLS for rapid response. A proof of concept across twenty-three restrooms with one hundred twenty-seven units achieved Precision 0.9324, Recall 0.9510, and F1 0.9487. Designed for universal use, it provides accessible alerts—visual, auditory, haptic—and clear signage. Estimated wait times, occupancy trends, air-quality status, and risk summaries appear on a space-level platform to reduce caregiver burden and support independent use.`,
    video: `EP-mp4/유니유니.mp4`
  },
  {
    id: 'EP031',
    hall: 'eureka',
    boothNumber: '62501-61',
    name: `아이디씨티`,
    nameEn: `IDCITI`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `uGPS(underground GPS): 어디서나 끊김없는 위치정보`,
    productEn: `uGPS(underground GPS): Seamless Positioning, Everywhere`,
    description: `IDCITI의 uGPS는 GPS가 닿지 않는 환경에서의 정밀 측위라는 스마트시티의 가장 지속적인 난제를 해결하는 혁신적인 실내 GNSS 신호 생성 솔루션입니다. 지금까지는 지하 인프라, 터널, 실내 복합시설 전반의 위치 블라인드 스팟 문제를 근본적으로 해결한 솔루션이 없었습니다. uGPS는 표준 디바이스에 추가 하드웨어나 소프트웨어 설치 없이 GNSS 신호를 이러한 구역까지 매끄럽게 확장함으로써 이 장벽을 뛰어넘습니다. 독자적·특허 기술을 활용하여 자율주행차부터 개인 스마트 기기까지 모든 대상에 대해 정확하고 실시간의 타이밍 및 위치 정보를 제공합니다. 이 혁신은 안전과 운영 효율성을 높일 뿐 아니라 연결 인프라 전반에서 새로운 가치를 창출합니다. 실제 현장 적용으로 입증된 uGPS는 차세대 도시 모빌리티, 물류, 공공안전 시스템의 핵심 기반을 형성하며, 스마트시티 발전을 위한 투명하고 확장 가능한 솔루션을 제공합니다. 도시가 점점 복잡해지는 가운데, IDCITI의 uGPS는 위치 정보가 언제나 매끄럽고, 신뢰할 수 있으며, 누구나 접근 가능하도록 보장합니다.`,
    website: `http://www.idciti.com`,
    logo: `참가업체 로고 파일/EP_png/아이디씨티 로고.png`,
    descriptionEn: `IDCITI’s uGPS is a groundbreaking indoor GNSS signal generation solution that addresses one of Smart Cities’ most persistent challenges: precise positioning in GPS-denied environments. Until now, no solution has fundamentally resolved location blind spots across underground infrastructure, tunnels, or indoor complexes. uGPS overcomes this barrier by seamlessly extending GNSS signals into these zones—without requiring extra hardware or software on standard devices. Leveraging proprietary and patented technology, it enables accurate, real-time timing and positioning for everything from autonomous vehicles to personal smart devices. This innovation not only enhances safety and operational efficiency but also unlocks new value across connected infrastructure. Proven in real-world deployments, uGPS forms a critical foundation for next-generation urban mobility, logistics, and public safety systems—offering a transparent, scalable solution for Smart City evolution. As cities grow increasingly complex, IDCITI’s uGPS ensures that location intelligence remains seamless, reliable, and universally accessible.`,
    video: `EP-mp4/아이디씨티/아이디씨티 홍보영상.mp4`
  },
  {
    id: 'EP032',
    hall: 'eureka',
    boothNumber: '62501-62',
    name: `(주)276홀딩스`,
    nameEn: `276 HOLDINGS Inc.`,
    category: `Fintech`,
    product: `•	플로우스코어 - 하이브리드 AI 기반 중소기업 금리 전망 솔루션`,
    productEn: `FlowScore - Hybrid AI for SMB Interest Rate Forecasting`,
    description: `플로우스코어는 정형화된 신용 기록이 없어 금융에서 소외된 유망 중소기업(SMB)을 위한 지능형 신용평가 및 금리 예측 시스템입니다.`,
    website: `https://www.276holdings.com/`,
    logo: `참가업체 로고 파일/EP_png/276홀딩스 로고.png`,
    descriptionEn: `FlowScore is an intelligent credit assessment and interest rate forecasting system designed for promising small and medium-sized businesses (SMBs)`,
    video: `EP-mp4/276홀딩스/276홀딩스 홍보영상.mp4`
  },
  {
    id: 'EP033',
    hall: 'eureka',
    boothNumber: '62501-63',
    name: `(주)리오랩`,
    nameEn: `LeoLap, Inc.`,
    category: `AI`,
    product: `매니패스트`,
    productEn: `Manyfast`,
    description: `매니패스트는 IT 프로젝트 기획을 가속화하는 AI 에이전트 솔루션입니다.

사용자 요구사항을 단 몇 초 만에 초기 제품 기획안으로 변환하고, 원활한 팀 협업을 위한 기획 전용 작업 공간을 제공합니다. 또한, AI 에이전트와 함께 작업하며 팀은 기획 프로세스의 속도를 획기적으로 높일 수 있습니다. 더 나아가, 매니패스트는 스토리보드나 기능 명세서와 같은 핵심 산출물을 자동으로 생성하여 번거로운 수작업을 없애줍니다.

AI가 이미 소프트웨어 개발 분야를 혁신했지만, 매니패스트는 이제 기획 분야에 바로 그 생산성의 혁명을 가져오고 있습니다.`,
    website: `https://manyfast.io/en`,
    logo: `참가업체 로고 파일/EP_png/리오랩 로고.png`,
    descriptionEn: `Manyfast is an AI agent solution built to accelerate IT project planning. It transforms user requirements into initial product plans in seconds and provides a dedicated workspace for seamless team collaboration. By working alongside the AI agent, teams can significantly speed up their planning process. Once finalized, Manyfast automatically generates key deliverables like storyboards and functional specifications, eliminating tedious manual work.

While AI has already transformed the world of software development, Manyfast is bringing that same productivity revolution to planning.`,
    video: ``
  },
  {
    id: 'EP034',
    hall: 'eureka',
    boothNumber: '62501-64',
    name: `주식회사 럼플리어`,
    nameEn: `Remplir Inc`,
    category: `Sustainability & Energy`,
    product: `친환경 수계 기반 한국형 LFP (리튬인산철) 배터리`,
    productEn: `Water-based Ultimately Sustainable LFP (US-LFP) Batteries`,
    description: `유해물질을 사용하지 않는 물 기반 친환경 LFP 배터리를 자체 생산하여, 지속가능한 고객맞춤형 고안정성 LFP 배터리를 제공 (완제품)`,
    logo: `참가업체 로고 파일/EP_png/주식회사 럼플리어.png`,
    website: ``,
    descriptionEn: `By in-house manufacturing capability of water-based, eco-friendly LFP batteries free from hazardous substances, Remplir provides sustainable, customized, and high-safety LFP battery solutions as complete finished products.`,
    video: `EP-mp4/주식회사 럼플리어.mp4`
  },
  {
    id: 'EP035',
    hall: 'eureka',
    boothNumber: '62501-65',
    name: `엑시온랩스`,
    nameEn: `EXIONLabs Inc.`,
    category: `Digital Health`,
    product: `온디바이스 AI 기반 약국용 알약 카운팅 분류 자동화 솔루션`,
    productEn: `On-device AI-powered solution for automated pill counting and classification`,
    description: `EXIOND는 색상 안내 디스플레이 트레이가 탑재된 AI 기반 알약 카운터입니다. 조제 과정에서 모니터와 트레이에 동기화된 색상 신호가 표시되어 알약 카운팅, 분류, 이물질 감지를 직관적으로 안내합니다. 이 과정을 통해 조제 오류를 최소화하고, 환자와 약사 모두에게 더 안전하고 신뢰할 수 있는 의료 환경을 제공합니다.`,
    website: `https://www.exionlabs.ai`,
    logo: `참가업체 로고 파일/EP_png/엑시온랩스 로고.png`,
    descriptionEn: `EXIOND is an AI-driven pill counter with an assistive tray display. During dispensing, synchronized color cues appear on both the monitor and tray, guiding pill counting, classification, and foreign substance detection. This intuitive process reduces medication errors and helps ensure a safer, more reliable healthcare environment for everyone.`,
    video: ``
  },
  {
    id: 'EP036',
    hall: 'eureka',
    boothNumber: '62501-66',
    name: `에이아이씨유`,
    nameEn: `AICU`,
    category: `Digital Health`,
    product: `게이트 스캐너`,
    productEn: `Gait Scanner`,
    description: `사용자의 보행 및 체형을 비전 AI로 검사하는 제품. 체형의 잘못된 점과 보행에서 뇌 기능 저하를 인식함.`,
    website: `https://www.aicu.life`,
    logo: `참가업체 로고 파일/EP_png/주식회사 에이아이씨유 로고_컬러.png`,
    descriptionEn: `A vision AI-powered product that examines a user's walking patterns and body shape. It recognizes postural imbalances and identifies indicators of cognitive decline through gait analysis.`,
    video: ``
  },
  {
    id: 'EP037',
    hall: 'eureka',
    boothNumber: '62501-67',
    name: `주식회사 엠에이아이티`,
    nameEn: `MaiT Co., Ltd.`,
    category: `AI`,
    product: `메이트 더 에이 디디에이치`,
    productEn: `MaiT The A DDH`,
    description: `AI 기반 영유아 고관절 이형성증 초음파 영상 자동 진단 보조 의료 소프트웨어`,
    website: `https://maithealth.com/`,
    logo: `참가업체 로고 파일/EP_png/엠아이아이티 로고.png`,
    descriptionEn: `AI-powered medical software for automated ultrasound image analysis and diagnostic assistance for developmental dysplasia of the hip (DDH) in infants`,
    video: `EP-mp4/62501-67.mp4`
  },
  {
    id: 'EP038',
    hall: 'eureka',
    boothNumber: '62501-68',
    name: `케이저 주식회사`,
    nameEn: `KEISER Inc.`,
    category: `AI`,
    product: `직퍼`,
    productEn: `JIGPU`,
    description: `⦾ AI 음악성분조합 시스템을 탑재한 저작권통합 콘텐츠플랫폼 『직퍼』
 - 음악사용자(영상, 게임, 메타버스, 방송)와 음악생산자(음악가, 기획사)에게 특화된 콘텐츠플랫폼
 - AI 음악성분조합 검색·추천 시스템: 콘텐츠 제작자에게 필요한 음악을 객관적인 음악특성으로 정의하여 검색
 - 검색한 고퀄리티의 발매음악을 저작권걱정없이 자유롭게 사용
 - 음반사·유통사 기능 내장: 중간과정없이 아티스트 계약·음악발매·정산`,
    website: `https://keiser.kr`,
    logo: `참가업체 로고 파일/EP_png/케이저 로고.png`,
    descriptionEn: `⦾ 『JIGPU』, a copyright-integrated content platform equipped with an AI music composition system
- A content platform specialized for music users (video, games, metaverse, broadcasting) and music producers (musicians, entertainment companies)
- AI music composition search and recommendation system: Searches for music content creators based on objective musical characteristics
- Freely use high-quality released music without copyright concerns
- Built-in record label and distribution functions: Artist contracts, music releases, and settlements without intermediaries`,
    video: `EP-mp4/케이저/케이저 홍보영상.mp4`
  },
  {
    id: 'EP039',
    hall: 'eureka',
    boothNumber: '62501-69',
    name: `주식회사 엠테크랩`,
    nameEn: `MTech Lab Co., Ltd.`,
    category: `AI`,
    product: `MRI용 고유전율 웨어러블 패드, AI기반 의료영상 분석 플랫폼`,
    productEn: `High dielectric constant wearable pad for MRI, AI-based Medical Image Analysis Platform`,
    description: `- MRI용 고유전율 웨어러블 패드 : 고자기장 MRI에서 발생하는 영상 왜곡을 독자적인 유전체 패드로 보정하여 SNR, 균일도, 대비를 대폭 향상시키는 진단 솔루션 제공

- AI기반 의료영상 분석 플랫폼 : 클라우드 기반 AI와 LLM 기술을 바탕으로 의료영상 분석, 스포츠 MRI, 병원 PACS 연동 등 다양한 디지털 헬스 솔루션을 제공`,
    website: `https://mtechlab.co.kr/`,
    logo: `참가업체 로고 파일/EP_png/엠테크랩 로고.png`,
    descriptionEn: `- High-Dielectric Wearable Pad for MRI : Provides a diagnostic solution that significantly improves SNR, uniformity, and contrast by correcting image distortion caused by high-field MRI using a proprietary dielectric pad.

- AI-Based Medical Imaging Analysis Platform : Offers a range of digital health solutions including cloud-based AI and LLM-powered imaging analysis, sports MRI, and hospital PACS integration.`,
    video: ``
  },
  {
    id: 'EP040',
    hall: 'eureka',
    boothNumber: '62501-70',
    name: `주식회사 엔에프타임`,
    nameEn: `nftime Inc.`,
    category: `Fintech`,
    product: `내 손안의 디지털 배지, 써티`,
    productEn: `Certi: Your Verifiable Career Passport`,
    description: `써티는 이력서 위조 문제를 해결하는 '검증 가능한 커리어 여권'입니다. 흩어진 자격 증명을 통합하고, 블록체인 및 영지식 증명을 사용하여 검증하며, AI를 통해 사용자가 자신의 진정한 강점을 발견하도록 돕습니다. 이는 전문가 세계의 새로운 신뢰 표준입니다.`,
    logo: `참가업체 로고 파일/EP_png/엔에프타임 로고.png`,
    website: ``,
    descriptionEn: `Certi is a 'Verifiable Career Passport' that solves resume fraud. It unifies scattered credentials, verifies them using blockchain & ZKP, and uses AI to help users discover their true strengths. It's the new standard for trust in the professional world.`,
    video: `EP-mp4/주식회사 엔에프타임.mp4`
  },
  {
    id: 'EP041',
    hall: 'eureka',
    boothNumber: '62501-71',
    name: `엠비랩`,
    nameEn: `MBLab`,
    category: `Digital Health`,
    product: `리텐스 2`,
    productEn: `Retens 2`,
    description: `AI 기반 스마트케어 제품으로 여성의 요실금,질이완증,성기능개선,질건조증 등에 맞춤형 치료를 제공하는 개인용 제품으로 EMS 저주파 자극과 진동 치료 및 바이오피드백 치료를 제공합니다.`,
    logo: `참가업체 로고 파일/EP_png/엠비랩.png`,
    website: ``,
    descriptionEn: `RETENS II is an AI-powered smart care device designed for personal use, providing customized therapy for women experiencing urinary incontinence, vaginal laxity, sexual dysfunction, and vaginal dryness. It combines EMS low-frequency stimulation, vibration therapy, and biofeedback-based treatment to deliver personalized and effective pelvic health care.`,
    video: ``
  },
  {
    id: 'EP042',
    hall: 'eureka',
    boothNumber: '62501-72',
    name: `주식회사 에입스`,
    nameEn: `AIPS`,
    category: `AI`,
    product: `뉴클러스`,
    productEn: `Nucleus`,
    description: `혼합정밀도 추론 가속을 위한 LLM NPU Core IP: 단일 NPU Core부터 Multi-Core 클러스터 까지 유연하게 확장 가능하며 다양한 플랫폼에 맞게 통합할 수 있는 NPU 클러스터 IP로 핵심 기술인 하드웨어 연산 유닛을 실시간으로 재구성하여 서로 다른 정밀도의 행렬을 바로 연산할 수 있는 재구성 가능한 행렬 연산 장치를 기반으로 다양한 정밀도로 양자화된 AI 모델에 적용가능하다.`,
    website: `https://www.aips-ai.com/`,
    logo: `참가업체 로고 파일/EP_png/62501-72.png`,
    descriptionEn: `LLM NPU Core IP for Mixed-Precision Inference Acceleration: a scalable NPU cluster IP that expands from a single NPU core to multi-core clusters and integrates across diverse platforms. Built on a reconfigurable matrix compute engine whose hardware units can be reconfigured in real time to directly perform matrix operations at different precisions, it supports AI models quantized to a wide range of bit widths.`,
    video: `EP-mp4/62501-72.mp4`
  },
  {
    id: 'EP043',
    hall: 'eureka',
    boothNumber: '62501-73',
    name: `주식회사 알에프닛시`,
    nameEn: `RF NISSI Co., Ltd.`,
    category: `Sustainability & Energy`,
    product: `EnerH POI`,
    productEn: `EnerH POI`,
    description: `EnerH POI는 건물 내 무선 시스템을 위한 차세대 POI(Point of Interface)로, 외부 기지국으로부터 모바일 신호를 전달할 뿐만 아니라 기존에는 낭비되던 에너지를 포착해 재사용할 수 있는 기능을 갖추고 있습니다. 기존 시스템에서는 들어오는 신호 전력의 99.9% 이상이 열로 손실되지만, EnerH POI는 독자적인 GaN(질화갈륨) 반도체 회로를 사용해 그 중 50% 이상을 회수하여 전기로 변환하고, 이를 시스템 구동에 활용합니다. 에너지 수확 기능이 내장된 최초의 POI인 EnerH POI는 외부 전력 의존도를 줄이고, 열 발생을 낮추며, 보다 효율적이고 컴팩트하며 지속 가능한 실내 통신 시스템을 가능하게 합니다.`,
    website: `https://rfnissi.com/en/`,
    logo: `참가업체 로고 파일/EP_png/주식회사 엘에프닛시 로고_컬러.png`,
    descriptionEn: `EnerH POI is a next-generation Point of Interface (POI) for in-building wireless systems that not only delivers mobile signals from external base stations but also captures and reuses energy that is normally wasted. In conventional systems, over 99.9% of incoming signal power is lost as heat. Using a proprietary GaN semiconductor circuit, EnerH POI recovers more than 50% of that energy and converts it into electricity to power the system itself. As the first POI with built-in energy harvesting, EnerH POI reduces the need for external power, lowers heat, and enables more efficient, compact, and sustainable indoor communication systems.`,
    video: `EP-mp4/주식회사 엘에프닛시/주식회사 엘에프닛시 홍보 영상.mp4`
  },
  {
    id: 'EP044',
    hall: 'eureka',
    boothNumber: '62501-74',
    name: `주식회사 엘케이로보틱스`,
    nameEn: `LK ROBOTICS Inc.`,
    category: `Robotics`,
    product: `LKR-CP, LKR-P`,
    productEn: `LKR-CP, LKR-P`,
    description: `실내용 청소 및 순찰로봇, 실내외 순찰로봇`,
    website: `http://www.lkrobotics.co.kr`,
    logo: `참가업체 로고 파일/EP_png/엘케이로보틱스 로고_흑백,컬러.png`,
    descriptionEn: `Indoor cleaning and patrol robots, indoor and outdoor patrol robots`,
    video: ``
  },
  {
    id: 'EP045',
    hall: 'eureka',
    boothNumber: '62901-01',
    name: `주식회사 닥터스바이오텍`,
    nameEn: `Doctors-biotech Coporation`,
    category: `Digital Health`,
    product: `에이모스트`,
    productEn: `Aimost`,
    description: `Aimost는 세계 최초로 스마트폰만으로 호흡기와 심장의 이상 소리를 정확하게 잡아내는 AI 소프트웨어입니다.

이 솔루션은 실제 병원에서 소아부터 성인 환자까지 수집된 25만 건 이상의 청진 데이터를 바탕으로 만들어졌습니다. 전 세계에서 가장 크고 다양한 데이터셋을 사용했기 때문에, 중요한 호흡기·심장 질환을 믿을 수 있는 정확도로 찾아낼 수 있습니다.

최신 트랜스포머 기반 AI 모델을 적용해 빠르고 효율적인 성능을 제공하며, 별도의 청진기나 웨어러블 기기 같은 장비가 전혀 필요하지 않습니다.

스마트폰 하나로도 crackle, wheezing 같은 호흡기 질환 관련 이상음은 물론, 심장 잡음(murmur)이나 부정맥(arrhythmia)까지 탐지할 수 있습니다.

현재 임상시험이 진행 중이며, 2025년에는 식품의약품안전처(MFDS) 승인을 목표로 하고 있습니다. 이어서 미국 FDA와 유럽 CE 인증도 준비 중입니다.`,
    logo: `참가업체 로고 파일/EP_png/닥터스바이오틱 로고.png`,
    descriptionEn: `Aimost is the world’s first smartphone-only AI software solution designed to detect abnormal respiratory and cardiac sounds with high clinical accuracy. 

The system is trained on over 250,000 clinically recorded auscultation samples from pediatric and adult patients in real-world hospital settings. This represents the largest and most diverse dataset of its kind, enabling validated reliability in detecting critical respiratory and cardiac anomalies.

Powered by latest transformer-based deep learning models and optimized for fast, resource-efficient performance, Aimost requires no stethoscope, wearable devices, or specialized hardware. 

Using only a smartphone, Aimost can screen for abnormal respiratory sounds, such as crackles and wheezing—associated with respiratory diseases, as well as abnormal cardiac sounds including murmurs and arrhythmia—linked to heart conditions. 

A confirmatory clinical trial is presently in progress, with regulatory approval from the Korean Ministry of Food and Drug Safety (MFDS) expected for 2025, followed by FDA and CE submissions.`,
    video: ``
  },
  {
    id: 'EP046',
    hall: 'eureka',
    boothNumber: '62901-02',
    name: `프롬랩스`,
    nameEn: `PromLabs.Inc`,
    category: `AI`,
    product: `프롬프틀리`,
    productEn: `Promptly`,
    description: `Promptly는 자연어로 입력한 문장을 AI가 이해하기 쉬운 구조로 자동 변환해, 텍스트·이미지·영상 생성에 최적화된 결과를 제공하는 프롬프트 번역 및 최적화 플랫폼입니다. 누구나 복잡한 명령어 없이 전문가 수준의 AI 활용이 가능합니다.`,
    logo: `참가업체 로고 파일/EP_png/프롬랩스 로고.png`,
    descriptionEn: `Promptly is an AI prompt translation and optimization platform that converts natural-language inputs into structured, model-ready prompts for text, image, and video generation — enabling anyone to achieve expert-level AI results effortlessly.`,
    video: ``
  },
  {
    id: 'EP048',
    hall: 'eureka',
    boothNumber: '62901-04',
    name: `주식회사 스페이스린텍`,
    nameEn: `Space LiinTech Inc.`,
    category: `Digital Health`,
    product: `BEE-PC1 (단백질 결정성장 실험 모듈)`,
    productEn: `BEE-PC1`,
    description: `BEE-PC1은 미세중력 환경에서 고해상도 단백질 결정을 성장시키기 위한 실험 및 연구용 자동화 장치입니다. 우주 환경의 결정 성장 특성을 활용하여, 지상에서 구현이 어려운 구조 분석 및 신약 후보물질 선별을 가능하게 합니다.`,
    logo: `참가업체 로고 파일/EP_png/스페이스린텍.png`,
    website: ``,
    descriptionEn: `BEE-PC1 is an automated research module designed for high-resolution protein crystallization in microgravity. By leveraging the unique advantages of the space environment, it enables structure analysis and drug candidate screening that are difficult to achieve on Earth.`,
    video: ``
  },
  {
    id: 'EP049',
    hall: 'eureka',
    boothNumber: '62901-05',
    name: `주식회사 콘스탄트`,
    nameEn: `CONSTANT INC`,
    category: `Beauty & Personal Care`,
    product: `리필드 AI두피스캐너 & 통합플랫폼`,
    productEn: `Refilled AI Scalp Scanner & Integrated Platform`,
    description: `AI 딥러닝 알고리즘 기반의 두피 진단 IoT 디바이스와 통합 디지털 플랫폼입니다. 5분 만에 탈모 위험도, 모낭 밀도, 두피 상태를 정밀하게 분석하며, 완전한 디지털 헬스 솔루션을 통해 개인 맞춤형 케어 플랜을 제공합니다.`,
    logo: `참가업체 로고 파일/EP_png/주식회사 콘스탄트.png`,
    website: ``,
    descriptionEn: `AI deep learning algorithm-based scalp diagnostic IoT device + integrated digital platform. Precisely analyzes hair loss risk, follicle density, and scalp condition in 5 minutes, providing personalized care plans through complete digital health solution.`,
    video: `EP-mp4/주식회사 콘스탄트.mp4`
  },
  {
    id: 'EP050',
    hall: 'eureka',
    boothNumber: '62901-06',
    name: `주식회사 모플`,
    nameEn: `mofl Inc.`,
    category: `AI`,
    product: `모플 프레드박스`,
    productEn: `mofl PredBox`,
    description: `<제품 개요>
PredBox는 AI 기반 수요 예측과 업무 자동화를 통해 재고 관리를 최적화하는 구독형 B2B SaaS 서비스입니다. 모플의 솔루션은 소비재 기업의 모든 재고 관련 문제(품절, 결품, 과재고 등)를 예방하며, 공급망 전반에서의 비효율을 제거하여 비즈니스 성과를 제공합니다.

<핵심 기능>
1. 품절과 과재고 문제 해결
PredBox는 수 십억 건에 달하는 대규모 재고 트랜잭션 데이터를 지속적으로 분석하고 모니터링 합니다. 이를 통해 물류 프로세스 내 병목 현상을 감지하고, 잠재적인 손실이 발생하기 전에 예측하여 품절과 과재고 상황을 예방합니다. 기업은 데이터를 기반으로 선제적으로 재고를 관리할 수 있습니다.

2. 독자적인 AI 수요예측 기술
PredBox의 핵심에는 인간 수준의 전문성과 대규모 데이터 학습을 결합한 모플 자체 개발 AI 엔진이 있습니다. 이 독자적인 모델은 빠르게 변화하는 트렌드나 데이터가 부족한 소수의 핵심 상품의 수요도 정확하게 예측합니다. 또한, 별도의 하드웨어 추가 설치 없이, 거래 데이터를 활용한 비카메라 방식의 ‘선반 재고 확인’ 기능을 제공하여 효율적인 운영을 지원합니다.

3. 진정한 엔드투엔드 자동화
PredBox는 재고관리 전 과정에서 발생하는 물류 제약 요소를 찾아내고, 이를 해결하여 완전한 엔드투엔드 업무 자동화를 실현합니다. 수요 예측, 재고 분배, 보충 계획을 하나의 통합된 시스템에서 관리함으로써, 결품 및 과재고가 완전히 사라질 때까지 지속적인 최적화를 수행합니다.

<성과 및 영향>
PredBox는 국내 파트너사와의 실제 운영에서 성과를 입증했습니다. 대한민국의 대표 패션 브랜드 신성통상은 모플 PredBox의 AI 기반 수요 예측 및 업무 자동화 구독 서비스를 도입해, 재고 관리 방식을 혁신 했습니다.
- 매출 6천만 달러(한화 800억원) 증가
- 기획팀 기준 업무 시간 96% 단축
- 결품률 56% 감소
이러한 결과는 AI 기반 자동화가 실제 비즈니스 성과에 직접적으로 기여함을 보여줍니다. 모플의 PredBox는 예측 결과를 실제 수익 및 운영 효율화로 연결하는 역량을 가진 솔루션 입니다.`,
    logo: `참가업체 로고 파일/EP_png/모플 로고.png`,
    descriptionEn: `<Product Overview>
PredBox is a subscription-based B2B SaaS service that optimizes inventory management through AI-driven demand forecasting and automated workflow execution. It enables retailers and consumer-goods(CPG/FMCG) companies to prevent both out-of-stock and overstock, cutting inefficiencies across their entire supply chain and delivering measurable business impact.

<Key Features>
1. Focusing on Out-of-stock and Overstock
PredBox continuously analyzes and monitors billions of inventory transactions across the supply chain. By detecting operational bottlenecks, it predicts potential losses and prevents both out-of-stock and overstock situations before they occur, delivering proactive, data-driven control over inventory performance.

2. Proprietary AI Forecasting technology
At the core of PredBox is an our own AI forecasting engine that merges human expertise with large-scale data learning. This proprietary model accurately forecasts demand for rapidly changing and low-sample products. It also provides camera-free shelf estimation using transaction data alone, removing the need for additional hardware.

3. True End-to-End Automation
PredBox uncovers every logistics constraint to achieve true end-to-end workflow automation. By connecting forecasting, allocation, and replenishment into one unified system, it enables continuous optimization until out-of-stock and overstock are eliminated for good.

<Performance & Impact>
PredBox has demonstrated measurable results in real-world retail operations. A leading fashion brand in South Korea, SSTS, achieved remarkable improvements in inventory performance through AI-driven forecasting and workflow automation.
- $60M revenue increase
- 96% decrease in workflow time
- 56% reduction in out-of-stock rates
These outcomes demonstrate a direct correlation between AI-driven automation and measurable financial performance. PredBox not only streamlines operations but also enhances scalability across multi-store retail networks, proving its ability to turn predictive insights into real profit and efficiency.`,
    video: ``
  },
  {
    id: 'EP051',
    hall: 'eureka',
    boothNumber: '62901-07',
    name: `아이칩 주식회사`,
    nameEn: `Eyechip Corporation`,
    category: `XR`,
    product: `인-센서 컴퓨팅 아이트래킹 칩`,
    productEn: `In-sensor computing eye tracking chip`,
    description: `EyeChip은 이미지 캡처와 처리를 하나의 소형 CMOS 다이에 통합한 최초의 단일칩 아이 트래킹 센서입니다. 인-센서 컴퓨팅을 통해 칩이 픽셀 어레이 내부에서 핵심 비전 알고리즘을 직접 수행하여, 원시 영상 대신 시선(gaze), 동공 크기, 눈깜빡임과 같은 특징 데이터를 출력합니다. 이 접근 방식은 부피 큰 보조 프로세서의 필요를 없애 전력 소모와 부품 수를 획기적으로 줄입니다.`,
    logo: `참가업체 로고 파일/EP_png/아이칩주식회사 로고_컬러.png`,
    descriptionEn: `EyeChip is the first single-chip eye-tracking sensor to integrate image capture and processing within one compact CMOS die. Using in-sensor computing, the chip performs essential vision algorithms directly inside the pixel array, so it outputs features like gaze, pupil size, and blink instead of raw video. This approach removes the need for bulky companion processors, dramatically reducing power use and component count.

Spatial Computing: enables natural, gaze-based control in lightweight AR/VR glasses.
Digital Health: powers portable pupillometers for concussion, stroke, and neurological assessment.
Imaging: demonstrates a new class of sensors that compute features at the point of capture.
Mobile Devices & Accessories: delivers touch-free, efficient eye control for smartphones and smart eyewear.

Silicon-proven and ready to scale, EyeChip shows how in-sensor computing can make advanced eye-tracking practical across consumer, medical, and industrial products.`,
    video: `EP-mp4/아이칩 주식회사/아이칩주식회사 홍보 영상.mp4`
  },
  {
    id: 'EP052',
    hall: 'eureka',
    boothNumber: '62901-08',
    name: `이니그마(주)`,
    nameEn: `ENIGMA`,
    category: `AI`,
    product: `지능형메시지(지메시)`,
    productEn: `Intelligent Message (GiMeSee)`,
    description: `1. Cloud기반 SaaS 메시지
2. OnClick 지능형 전송처리
3. OnClick 템플릿 자동생성
-전송료 60% 절감
-도입비용 50% 절감
-노동력 30% 절감
-수신 만족도 70% UP`,
    logo: `참가업체 로고 파일/EP_png/이그니마(주) 로고_컬러.png`,
    descriptionEn: `1. Cloud-based SaaS messaging
2. OnClick intelligent delivery processing
3. OnClick automatic template generation
- 60% reduction in delivery fees
- 50% reduction in implementation costs
- 30% reduction in labor
- 70% increase in recipient satisfaction`,
    video: ``
  },
  {
    id: 'EP053',
    hall: 'eureka',
    boothNumber: '62901-09',
    name: `주식회사 와이와이소프트`,
    nameEn: `YYSOFT Inc.`,
    category: `Sustainability & Energy`,
    product: `KFT 추적 솔루션`,
    productEn: `KFT Tracking Solution`,
    description: `저비용 IoT 센서로 콜드체인 온도 및 위치를 실시간 추적하고, 공급망 전체의 탄소발자국을 측정합니다. 글로벌 규제 대응과 비용 절감을 통해 수출 경쟁력을 높이고, ESG 경영 및 소비자 신뢰를 확보하는 데 활용됩니다.`,
    logo: `참가업체 로고 파일/EP_png/(주)와이와이소프트 로고_컬러.png`,
    descriptionEn: `Our solution uses low-cost IoT sensors to track cold chain temperatures and locations in real-time, while also measuring the carbon footprint across the entire supply chain. It's used to enhance export competitiveness by complying with global regulations, reduce costs, and secure ESG management and consumer trust.`,
    video: `EP-mp4/(주)와이와이소프트/(주)와이와이소프트 홍보 영상.mp4`
  },
  {
    id: 'EP054',
    hall: 'eureka',
    boothNumber: '62901-10',
    name: `가아온 주식회사`,
    nameEn: `GAAON`,
    category: `Pet Tech & Animal Welfare`,
    product: `하텔리전스`,
    productEn: `Heartelligence`,
    description: `AI 심박분석으로 반려견의 감정과 건강을 전해주는, 보호자와 반려견을 이어주는 스마트 웨어러블`,
    logo: `참가업체 로고 파일/EP_png/가아온 주식회사.png`,
    website: ``,
    descriptionEn: `An AI Powered heart rate analysis wearable that delivers your dog's emotions and health, connecting pets and owners closer together.`,
    video: ``
  },
  {
    id: 'EP055',
    hall: 'eureka',
    boothNumber: '62901-11',
    name: `인포플라`,
    nameEn: `INFOFLA`,
    category: `AI`,
    product: `셀토 V2.0(브이엘에이전트)`,
    productEn: `Selto V2.0(VLAgent)`,
    description: `셀토(브이엘에이전트)는 Vision Language Model(VLM)을 통해 환경을 학습하고 모든 프로세스를 자동으로 수행합니다. 전문가 개입이 필요한 기존 RPA 솔루션을 뛰어넘는 성능을 제공합니다.`,
    logo: `참가업체 로고 파일/EP_png/62901-11.png`,
    descriptionEn: `Selto(VLAgent) learns environments through the Vision Language Model (VLM) and autonomously handles all processes. It outperforms traditional RPA solutions that rely on expert intervention.`,
    video: `EP-mp4/62901-11.mp4`
  },
  {
    id: 'EP056',
    hall: 'eureka',
    boothNumber: '62901-12',
    name: `(주)피엠아이바이오텍`,
    nameEn: `PMI BIOTECH Inc`,
    category: `Sustainability & Energy`,
    product: `굴껍질 자원화 및 탄산광물화 기술로 구현한 저탄소 친환경 칼슘 제품`,
    productEn: `Calcium materials for food grade and industrial grade`,
    description: `Low-Carbon and Eco-Friendly Calcium Products Enabled by Oyster Shell Recycling and Carbon Mineralization Technology`,
    logo: `참가업체 로고 파일/EP_png/(주)피엠아이바이오텍.png`,
    website: ``,
    descriptionEn: `Sustainable Low-Carbon Natural Calcium Products through Eco-Friendly Innovation and Carbon Neutral  process`,
    video: ``
  },
  {
    id: 'EP057',
    hall: 'eureka',
    boothNumber: '62901-13',
    name: `주식회사 스튜디오다시물결`,
    nameEn: `Dasiwave.Co.,Ltd`,
    category: `Sustainability & Energy`,
    product: `레오`,
    productEn: `REO`,
    description: `REO: 미세플라스틱을 방출하지 않는 고내구성 바이오플라스틱`,
    logo: `참가업체 로고 파일/EP_png/다시물결 로고.png`,
    descriptionEn: `REO: The High-Durability Bioplastic that Eliminates Microplastics`,
    video: ``
  },
  {
    id: 'EP058',
    hall: 'eureka',
    boothNumber: '62901-14',
    name: `리옵스`,
    nameEn: `LiOps`,
    category: `AI`,
    product: `리옵스 야드트윈™`,
    productEn: `LiOps YardTwin™`,
    description: `리옵스 야드트윈™은 현장 실적 보고와 다중 로봇 제어를 하나의 엣지 플랫폼에서 통합한 '공간지능 트윈'입니다. LiDAR/RGB 스캔을 실시간 현장 모델로 만들고, 올바른 설계 블록을 자동 식별한 뒤, 진척률·허용오차·증빙 스냅샷을 MES/ERP에 즉시 올려 지연·불일치를 없앱니다. 시각화에서 멈추지 않고, ROS 2/REST로 보정된 6DoF 포즈·작업 경로를 내보내 용접 셀·모바일 매니퓰레이터·자율 지게차가 동일 작업지시를 온라인 보정으로 수행합니다. 그 결과, 티칭은 줄고 운영자는 더 많은 셀을 감독하며, 관리자는 분 단위 신뢰 지표로 재작업·일정 리스크를 낮춥니다. 보급형 센서·Jetson 엣지에서 동작하고 서버로 확장되며, 기존 스택에 쉽게 통합됩니다.`,
    logo: `참가업체 로고 파일/EP_png/리옵스 로고.png`,
    website: ``,
    descriptionEn: `LiOps YardTwin™ is the first spatial-intelligence twin that unifies evidence-backed progress reporting and multi-robot execution on one edge platform for heavy industry. It turns LiDAR/RGB scans into a live site model, auto-identifies the correct design block, and posts objective progress %, tolerances, and photo evidence directly to MES/ERP—ending late, inconsistent hand entry. Where current “digital twins” or scan-to-BIM tools focus on visualization and as-built checks, YardTwin closes the loop: it also publishes corrected 6-DoF poses and task waypoints over ROS 2/REST so weld cells, mobile manipulators, and autonomous forklifts follow the same work orders with online correction. The result is trusted, minute-by-minute status for managers and adaptive automation for robots—less rework and schedule risk, faster ramp-ups, and clear accountability across contractors and shifts.`,
    video: ``
  },
  {
    id: 'EP059',
    hall: 'eureka',
    boothNumber: '62901-15',
    name: `주식회사 공감오래콘텐츠`,
    nameEn: `Gonggamore Contents INC.`,
    category: `AI`,
    product: `마이미 AI`,
    productEn: `MYME AI`,
    description: `MYME AI는 AI 기술을 통합한 게임 개발 및 퍼블리싱 플랫폼으로, 생산 속도를 30~50%까지 가속화합니다. 이 플랫폼은 인디 개발자에게 절차적 생성, AI 아트, 음악, 코딩 도구, 낮은 수수료의 글로벌 퍼블리싱 서비스를 제공하며, MYME Global Center를 통해 교육 프로그램도 제공합니다.
MYME AI의 핵심 경쟁 우위는 게임 제작을 위해 특별히 설계된 통합 AI 플랫폼을 통해 게임 개발을 30~50% 가속화할 수 있다는 점입니다. 이 플랫폼은 절차적 콘텐츠 생성, 아트 에셋 제작, 음악 작곡, 내러티브 작성, 코딩 지원, 그리고 RAG 기반 검색 시스템을 위한 5가지 AI API를 결합하여 개발자가 품질을 유지하면서 반복적인 작업을 자동화할 수 있도록 지원합니다. MYME AI는 인디 개발자 개발한 게임을 글로벌 런칭을 위한 필수 도구에만 집중합니다. 또한 MYME 글로벌 센터를 운영하여 교육, 인재 개발, 퍼블리싱까지 엔드 투 엔드 지원을 제공하여 지속 가능한 인디 게임 생태계를 조성합니다. Unity Muse나 Leonardo AI와 같은 경쟁 업체는 별도의 AI 도구를 제공하지만, MYME AI는 기술, 퍼블리싱, 커뮤니티 구축을 하나의 효율적인 서비스로 통합하여 진입 장벽을 낮추고 개발자의 수익성을 극대화합니다`,
    logo: `참가업체 로고 파일/EP_png/62901-15.png`,
    descriptionEn: `MYME AI is an integrated AI-powered game development and publishing platform that accelerates production by 30–50%. It offers indie developers procedural generation, AI art, music, coding tools, and low-commission global publishing, plus education via MYME Global Center
MYME AI's core competitive advantage lies in its ability to accelerate game development by 30–50% through an integrated AI platform specifically designed for game creation. This platform combines five AI APIs—procedural content generation, art asset creation, music composition, narrative writing, and coding support—with a RAG-based search system, enabling developers to automate repetitive tasks while maintaining quality. MYME AI focuses exclusively on providing essential tools for indie developers to launch their games globally. Additionally, it operates the MYME Global Center to offer end-to-end support, including education, talent development, and publishing, fostering a sustainable indie game ecosystem. While competitors like Unity Muse and Leonardo AI offer separate AI tools, MYME AI integrates technology, publishing, and community building into a single efficient service, lowering entry barriers and maximizing developers' profitability`,
    video: `EP-mp4/62901-15.mp4`
  },
  {
    id: 'EP060',
    hall: 'eureka',
    boothNumber: '62901-16',
    name: `라이트브릿지`,
    nameEn: `Light Bridge`,
    category: `Sustainability & Energy`,
    product: `수소 생산 설비 (수전해 설비)`,
    productEn: `Electrolyzer`,
    description: `라이트브릿지㈜의 **PEM 수전해 시스템(LBEX 시리즈)**은 재생에너지를 활용해 고순도(99.999%)의 그린수소를 생산하는 고효율 수소 생산 설비입니다.
고전류밀도 운전과 빠른 기동성을 구현하여 태양광·풍력 등 변동성 전원과의 연계에 최적화되어 있으며,
모듈형 설계를 통해 5kW에서 MW급까지 확장 가능합니다.
또한 자체 개발한 H-Bridge 통합형 수소충전 플랫폼을 통해 생산–저장–압축–충전이 가능한 분산형 수소 인프라 솔루션을 제공합니다.
본 시스템은 CE·PED·ISO 등 국제 인증 기준을 충족하며,
탄소중립 실현과 지속가능한 에너지 전환을 위한 차세대 그린수소 기술로 주목받고 있습니다.`,
    logo: `참가업체 로고 파일/EP_png/라이트브릿지 로고.png`,
    descriptionEn: `Lightbridge’s PEM Electrolyzer System (LBEX Series) is a high-efficiency hydrogen production system that generates ultra-pure (99.999%) green hydrogen using renewable electricity.
Designed for rapid start-up and high current density operation, it is optimized for integration with solar and wind power sources.
Its modular design allows scalable configurations from 5 kW to multi-megawatt capacity.
In addition, Lightbridge’s proprietary H-Bridge Integrated Hydrogen Platform enables an end-to-end distributed hydrogen infrastructure covering production, storage, compression, and refueling.
The system complies with CE, PED, and ISO international standards and represents next-generation green hydrogen technology driving global decarbonization and energy transition.`,
    video: ``
  },
  {
    id: 'EP061',
    hall: 'eureka',
    boothNumber: '62901-17',
    name: `잇다반도체`,
    nameEn: `ITDA Semiconductor Co., Ltd`,
    category: `Embedded Technology`,
    product: `SOC Canvas – No-code SOC System Design`,
    productEn: `SOC Canvas – No-code SOC System Design`,
    description: `SOC Canvas는 복잡한 시스템온칩(SoC) 개발 과정을 제거한 노코드 설계 솔루션입니다. 저수준 RTL 코드를 직접 작성하는 대신, 엔지니어는 직관적인 시각적 인터페이스를 통해 시스템 다이어그램을 구성합니다. 이 추상화된 설계 도식을 기반으로 RTL, UPF, SDC, DFT와 같은 설계 산출물이 몇 분 만에 자동으로 생성됩니다.

오늘날 SoC는 200억 개가 넘는 트랜지스터를 포함하면서, 기존의 수작업 중심 설계 방식은 한계에 다다르고 있습니다. SOC Canvas는 설계를 시스템 레벨로 끌어올려 제어 로직을 재사용 가능하고 커스텀 가능한 블록으로 추상화함으로써, 엔지니어링 노력을 크게 줄이고 개발 기간을 단축하며 사람에 의한 오류를 최소화합니다.

설계 시간을 단축하고 SoC 개발의 장벽을 낮춤으로써 SOC Canvas는 더 많은 팀이 AI, 자동차, 엣지 디바이스용 맞춤형 칩을 만들 수 있도록 돕습니다. 아이디어에서 실리콘까지의 여정을 가속화함으로써, 전 세계적으로 증가하는 더욱 스마트하고 효율적인 기술 수요를 충족시키는 데 기여합니다.`,
    logo: `참가업체 로고 파일/EP_png/잇다 로고.png`,
    descriptionEn: `SOC Canvas is a no-code SoC design solution that removes the complexity of system-on-chip development. Instead of writing low-level RTL code, designers create system diagrams using an intuitive visual interface. From this abstraction, the solution auto-generates complete design outputs such as RTL, UPF, SDC, and DFT within minutes.

As modern SoCs now exceed 20 billion transistors, traditional manual design is becoming unsustainable. SOC Canvas addresses this by lifting the design process to the system level, abstracting control logic into reusable and configurable blocks. This dramatically reduces engineering effort, shortens development time, and minimizes human error.

By reducing time and lowering barriers of SoC design, SOC Canvas empowers more teams to build custom chips for AI, automotive, and edge devices. By accelerating the path from idea to silicon, it helps meet the growing global demand for smarter, more efficient technology.`,
    video: ``
  },
  {
    id: 'EP062',
    hall: 'eureka',
    boothNumber: '62901-18',
    name: `주식회사 에코놀로지`,
    nameEn: `EKONOLOGY`,
    category: `Digital Health`,
    product: `스마트 구강세정기와 AI분석기반 개인 맞춤형 구강관리 솔루션`,
    productEn: `Personalized Oral Care Solution with Smart Water Flosser & AI Analysis`,
    description: `1. 구강세정기(하드웨어)
 - 물탱크 없는 직수 연결, 버튼 하나로 간편 사용
 - 솔레노이드 제어로 최적 수압 및 3가지 맥동 모드 제공
 - 150g 초경량 분리형 그립, 교체 가능한 위생 호스 및 불소 필터
 - 최소 유지관리, 물만으로 사용 가능, 글로벌 확산 가능
 - 미니멀하고 세련된 디자인, 욕실 인테리어와 조화 
 - 단순한 구강기기를 넘어 웰니스 오브제로 기능

2. AI 기반 구강관리 솔루션
 - 파노라마 영상을 통한 구강 분석 및 점수화
 - 맞춤형 관리 가이드, 트렌드 추적, 구강 건강 챌린지 제공
 - RAG 기반 챗봇으로 개인 맞춤형 상담 및 행동 유도`,
    logo: `참가업체 로고 파일/EP_png/에코놀로지 로고.png`,
    descriptionEn: `1. Smart water flosser(Hardware)
 - Pipeline connection, instant use with one button, no refills required
 - Solenoid-valve precision control with optimized pressure and three pulse modes
 - Lightweight (150 g) detachable grip with replaceable hose and fluoride filter
 - Minimal maintenance, water-only operation, scalable for global expansion
 - Minimal, sophisticated design blending into bathroom interiors
 - Functions as both an oral care device and a wellness object

2. AI-powered dental care solution
 - Panoramic image-based dental analysis and oral health scoring
 - Personalized care guides, trend tracking, and oral health challenges
 - RAG-based chatbot for tailored consultation and behavioral guidance`,
    video: ``
  },
  {
    id: 'EP063',
    hall: 'eureka',
    boothNumber: '62901-19',
    name: `주식회사 디알티`,
    nameEn: `DRT Co.,Ltd.`,
    category: `Smart Cities/Smart Home`,
    product: `외벽/창문 청소용 드론`,
    productEn: `exterior wall/window cleaning drone`,
    description: `사고의 위험이 있는 곤돌라/로프를 이용한 기존 외벽 청소방식보다 안전하고 빠르고 경제적으로 외벽/창문 청소가 가능합니다.`,
    logo: `참가업체 로고 파일/EP_png/주식회사디알티 로고_컬러_백색단도.png`,
    descriptionEn: `Compared to traditional façade/window cleaning methods using gondolas or ropes, our solution enables safer, faster, and more cost-effective cleaning`,
    video: ``
  },
  {
    id: 'EP064',
    hall: 'eureka',
    boothNumber: '62901-20',
    name: `주식회사 리얼티쓰`,
    nameEn: `REALTEETH Corp.`,
    category: `Digital Health`,
    product: `리얼티쓰: AI 보철 디자인 플랫폼`,
    productEn: `RealTeeth: AI Prosthetic Design Platform`,
    description: `많은 환자들은 임시 보철을 낀 채로 수주간 불편함과 불확실성을 견디며 최종 보철물을 기다려야 합니다. 숙련된 기공사가 부족한 지역에서는 이러한 지연이 더 심각해져, 전 세계적인 치과 치료의 불균형을 악화시킵니다. 리얼티쓰의 AI 기반 보철 설계 플랫폼은 환자의 3D 구강 스캔을 기반으로 마스터급 기공사의 전문성을 즉시 모사하여, 수 주 걸리던 과정을 단 하루로 단축합니다. 이로써 환자들은 더욱 빠르게 일상으로 복귀할 수 있고, 편안함과 자신감을 되찾을 수 있습니다. 설계 과정을 디지털화하고 당일 보철 제작을 가능케 함으로써, 전문 인력이 없는 클리닉에서도 최고 수준의 결과물을 제공할 수 있습니다. AI 기반의 정밀도는 오류를 최소화하고, 재제작을 줄이며, 자재 낭비를 절감해 보다 효율적이고, 비용 효과적이며, 지속 가능한 워크플로우를 만듭니다. 리얼티쓰는 프리미엄 시장과 저개발 지역 간의 격차를 해소하며, 속도, 정확성, 접근성을 결합해 보철 치료의 글로벌 표준을 새롭게 정의합니다.`,
    logo: `참가업체 로고 파일/EP_png/리얼티쓰 로고.png`,
    descriptionEn: `Many patients endure weeks with temporary teeth, facing discomfort and uncertainty while waiting for final prosthetics. In areas lacking skilled technicians, delays are even longer, worsening global disparities in dental care. Realteeth’s AI-Powered Dental Design Platform uses a patient’s 3D oral scan to instantly replicate the expertise of a master technician, compressing a week-long process into just one day. This allows patients to resume daily life faster, with greater comfort and confidence. By digitizing the design process and enabling same-day prosthetics, even clinics without in-house experts can deliver top-tier results. AI-driven precision minimizes errors, reduces remakes, and cuts material waste—making the workflow more efficient, cost-effective, and sustainable. Realteeth closes the gap between premium and underserved markets, combining speed, accuracy, and accessibility to redefine the global standard in restorative dentistry.`,
    video: ``
  },
  {
    id: 'EP065',
    hall: 'eureka',
    boothNumber: '62901-21',
    name: `모디전스비전`,
    nameEn: `ModigenceVision`,
    category: `Robotics`,
    product: `MARU: 3D 카메라 플랫폼 & AI 비전 솔루션`,
    productEn: `MARU: 3D Camera Platform & AI Vision Solution`,
    description: `MARU는 로봇이 인간과 같은 공간 이해 및 의사결정 능력으로 주변 환경을 인식하고 상호작용할 수 있도록 하는 차세대 로보틱스 비전 플랫폼입니다. 독자적인 3D 카메라 플랫폼과 첨단 AI 비전 알고리즘을 결합하여 구축된 MARU는, 물류, 제조, 스마트 팩토리와 같은 복잡한 산업 환경에서 정밀한 객체 인식, 분류, 위치 파악 기능을 제공합니다. 맞춤형 3D 카메라는 초고속으로 고해상도 깊이 데이터를 캡처하며, AI 기반 소프트웨어는 가변 조명, 겹쳐진 객체, 또는 반사 표면과 같은 까다로운 조건에서도 정확성과 적응성을 보장하며 이 정보를 실시간으로 처리합니다. 모듈형 아키텍처로 설계된 MARU는 다양한 로봇 플랫폼과 원활하게 통합되어, 배포 시간을 단축하고 시스템 확장을 위한 최대의 유연성을 제공합니다. 로봇에 MARU를 장착함으로써, 기업들은 처리량을 늘리고, 운영 효율성을 높이며, 수작업 의존도를 줄일 수 있습니다. MARU는 자동화를 반복적인 작업 수행에서 지능적이고 자율적인 운영으로 변환시키며, 로봇 인식에 대한 새로운 글로벌 표준을 설정합니다.`,
    logo: `참가업체 로고 파일/EP_png/모디전스비전 로고_컬러.png`,
    descriptionEn: `MARU is a next-generation robotics vision platform that enables robots to perceive and interact with their environment with human-like spatial understanding and decision-making. Built on a proprietary 3D camera platform combined with advanced AI vision algorithms, MARU delivers precise object recognition, classification, and localization in complex industrial environments such as logistics, manufacturing, and smart factories. The customizable 3D camera captures high-resolution depth data at ultra-fast speeds, while AI-driven software processes this information in real time, ensuring accuracy and adaptability even under challenging conditions like variable lighting, overlapping objects, or reflective surfaces. Designed with a modular architecture, MARU integrates seamlessly with diverse robotic platforms, reducing deployment time and offering maximum flexibility for system expansion. By equipping robots with MARU, companies can increase throughput, enhance operational efficiency, and reduce reliance on manual labor. MARU transforms automation from repetitive task execution into intelligent, autonomous operation, setting a new global standard for robotic perception.`,
    video: `EP-mp4/(주)모디전스비전/모디전스비전 홍보 영상.mp4`
  },
  {
    id: 'EP066',
    hall: 'eureka',
    boothNumber: '62901-22',
    name: `주식회사 심투리얼`,
    nameEn: `SIM2REAL Inc.`,
    category: `AI`,
    product: `심투드론`,
    productEn: `SIM2DRONE`,
    description: `드론 센서데이터를 실시간 가상환경에 반영해 AI 탐지·경로 최적화·관제를 지원하는 플랫폼입니다.
국방, 재난, 산업 현장에서 실시간 시뮬레이션과 효율적 드론 운용을 가능하게 합니다.`,
    logo: `참가업체 로고 파일/EP_png/심투리얼 로고.png`,
    descriptionEn: `SIM2DRONE is a platform that integrates drone sensor data into a real-time virtual environment to enable AI detection, path optimization, and control.
It empowers defense, disaster response, and industrial operations with real-time simulation and efficient drone management.`,
    video: `EP-mp4/심투리얼/심투리얼 홍보영상.mp4`
  },
  {
    id: 'EP067',
    hall: 'eureka',
    boothNumber: '62901-23',
    name: `주식회사 옵티플`,
    nameEn: `Optiple Inc.`,
    category: `XR`,
    product: `투과도 가변 필름셀`,
    productEn: `Dimming Film Cell`,
    description: `전압 구동 투과도 가변 액정 기술을 바탕으로, 배경의 밝기를 조정하여 XR 기기등에서 (AR, VR) 제공되는 3차원 가상이미지의 디스플레이 시인성을 향상시키는 기술 및 제품. XR 기기외에도 Smart Eyewear에도 적용 증가 추이 (스마트 썬글라스,스포츠고글,헬멧 등). Automotive 디스플레이에도 기술 적용중임`,
    logo: `참가업체 로고 파일/EP_png/주식회사 옵티플.png`,
    website: ``,
    descriptionEn: `Based on voltage-driven, variable-transmittance liquid crystal technology, this technology and product improves the display visibility of 3D virtual images provided by XR devices (AR, VR) by adjusting the background brightness. Beyond XR devices, its application is also increasing in smart eyewear (smart sunglasses, sports goggles, helmets, etc.). The technology is also being applied to automotive display.`,
    video: ``
  },
  {
    id: 'EP068',
    hall: 'eureka',
    boothNumber: '62901-24',
    name: `(주)제로에너지솔루션`,
    nameEn: `Zero Energy Solution Co., Ltd.`,
    category: `Sustainability & Energy`,
    product: `스노우멜팅을 위한 도로 열선용 이산화바나듐기반 에너지하베스팅 시스템`,
    productEn: `SnowTherm™ – Vanadium Dioxide Energy Harvesting System for Road Heating`,
    description: `(주)제로에너지솔루션은 에너지 비용과 환경 영향을 줄이는 동시에 안전한 겨울철 도로를 필요로 하는 지자체, 인프라 운영자, 그리고 스마트 시티 개발업체를 대상으로 합니다. 기존의 융설 시스템은 지속적인 전기 가열에 의존하여 과도한 에너지 소비와 유지보수 비용 증가를 초래합니다. 당사는 첨단 원스텝 건식 공정 기술을 사용하여 개발한 독자적인 VO₂ 기반 기능성 복합 충진재를 통해 이러한 문제를 해결합니다. 기존 소재와 달리 VO₂는 상변화 및 금속-절연체 전이(MIT) 특성을 결합하여 열 저장 및 지능형 열 조절을 가능하게 합니다. 도로 난방 시스템에 통합되면, 복합 충진재가 주변 열에너지를 수집 및 저장하고 온도가 전이 임계값 아래로 떨어지면 자동으로 방출합니다. 이러한 자가 활성화 조절 기능은 전력 수요를 최소화하는 동시에 안정적이고 효과적인 융설 성능을 보장합니다. 결과적으로 고객은 공공 안전 향상, 운영 비용 50% 이상 절감, 탄소 발자국 대폭 감소라는 이점을 누리며 경제적 효율성과 장기적인 지속 가능성을 모두 달성할 수 있습니다.`,
    logo: `참가업체 로고 파일/EP_png/제로에너지솔루션 로고.png`,
    descriptionEn: `ZeroEnergySolution Co., Ltd. targets municipalities, infrastructure operators, and smart city developers who require safe winter roads while reducing energy costs and environmental impact. Conventional snow-melting systems rely on continuous electric heating, resulting in excessive energy consumption and escalating maintenance costs. Our company addresses this challenge with a proprietary VO₂-based functional filler, developed using an advanced one-step dry-process technology. Unlike conventional materials, VO₂ uniquely combines phase-change and metal–insulator transition (MIT) properties, enabling both thermal storage and intelligent heat regulation. When integrated into road heating systems, the composite filler harvests and stores ambient thermal energy, automatically releasing it when temperatures drop below the transition threshold. This self-activating regulation minimizes electricity demand while ensuring stable, effective snow-melting performance. As a result, clients gain improved public safety, more than 50% reduction in operating costs, and significant carbon footprint reduction, achieving both economic efficiency and long-term sustainability.`,
    video: `EP-mp4/제로에너지솔루션/제로에너지솔루션 홍보영상.mp4`
  },
  {
    id: 'EP069',
    hall: 'eureka',
    boothNumber: '62901-25',
    name: `티엠이브이넷(주)`,
    nameEn: `TMEVnet`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `TM-MX AEMS Cable`,
    productEn: `TM-MX AEMS Cable`,
    description: `TM-MX AEMS 케이블은 액체 증발 상변화 냉각 방식을 활용하여 메가와트급 고속 충전 시 발생하는 과열 및 안전 문제를 해결하는 세계 최초의 경량, 고효율 충전 솔루션입니다. 대형 전기차, 선박, 도심 항공 모빌리티(UAM) 플랫폼 등에서 초고속 충전에 대한 수요가 증가함에 따라, 케이블의 무게와 열 관리는 매우 중요해졌습니다.
AI 기반의 자율 에너지 관리 시스템(AEMS)은 온도, 전력 흐름, 냉각 매개변수를 실시간으로 지속해서 모니터링하고 최적화하여, 기존 CCS(Combined Charging System) 인프라에서도 안전하고 효율적인 충전을 가능하게 합니다. 메가와트급으로 5분 이내에 완전 충전이 가능하여, 운영 중단 시간을 줄이고 시스템 신뢰도를 향상합니다. 상변화 냉각 기술은 전도체 성능을 높이는 동시에 케이블 무게를 17.6파운드(약 8kg) 미만으로 크게 줄여, 신속한 설치, 유지보수, 현장 배치를 지원합니다. 이러한 혁신은 첨단 안전 및 호환성 기능과 결합하여 상업, 해양, 산업 부문에서 전기 모빌리티의 광범위한 채택을 가속합니다.`,
    logo: `참가업체 로고 파일/EP_png/티엠이브이넷 로고_컬러.png`,
    descriptionEn: `The TM-MX AEMS Cable is the world's first lightweight, high-efficiency charging solution that uses liquid evaporation phase-change cooling to overcome the safety and overheating challenges associated with megawatt-level fast charging. Growing demand for ultra-fast charging in electric mobility—spanning large electric vehicles, ships, and Urban Air Mobility (UAM) platforms—makes cable weight and heat management crucial. 
The AI-powered Autonomous Energy Management System (AEMS) continuously monitors and optimizes temperature, power flow, and cooling parameters in real time, enabling secure and efficient charging even with legacy CCS infrastructure. With the ability to deliver sub-5-minute full charges at megawatt scale, TM-MX AEMS Cable reduces operational downtime and improves system reliability. Its phase-change cooling enhances conductor performance while dramatically reducing cable mass to under 17.6lb, supporting rapid installation, maintenance, and field deployment. Combined with advanced safety and compatibility features, this innovation accelerates widespread adoption of electric mobility in commercial, marine, and industrial sectors.`,
    video: `EP-mp4/티엠이브이넷_코트라/티엠이브이넷 홍보 영상.mp4`
  },
  {
    id: 'EP070',
    hall: 'eureka',
    boothNumber: '62901-26',
    name: `퓨잇`,
    nameEn: `FUiT`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `오르비온트`,
    productEn: `Orviont`,
    description: `지상망 의존으로 끊기던 긴급 통신을 위성 레이어로 보강하고, 생성형·경량 sLLM과 음성→텍스트 코드 전송, 이벤트 기반 웨이크-업 등 자체 기술로 불안정한 통신 환경에서도 구조 확률을 높입니다.
1. Vehicle AECS/e-Call 모듈 & 서비스(B2B): 차량 사고 전·중·후 상황 및 탑승자 상태를 AI가 판단해 긴급구조센터와 자동 커뮤니케이션. 위성 기반 백업으로 지상망 불능 시에도 연결 유지. 재난·산불·홍수 등 전방 위험 지역 위성 분석을 통한 우회 경로 제시. 충돌로 차량 위성 안테나가 손상된 경우에도 영상위성 분석으로 이상 징후 감지 및 센터 알림.
2. Personal SOS 디바이스(B2G/B2C): 2026년 하반기 출시 목표. 동적 메시지 압축(핵심 단어·코드 우선 전송, 대역폭 약 40% 절감), sLLM 기반 자동 응답·상황 요약, 시니어 친화 음성 인식(STT-TTS)과 이벤트 기반 동기화(SOS 버튼/낙상 등) 탑재. Skylo와 협업 진행.`,
    logo: `참가업체 로고 파일/EP_png/퓨잇.png`,
    website: ``,
    descriptionEn: `By adding a satellite layer to unreliable terrestrial networks and deploying on-device lightweight generative sLLM, FuIT keeps emergency communications alive—even under high latency and poor signal—using speech-to-text keyword coding, dynamic message compression, and event-based wake-ups to raise rescue success rates.
1. Vehicle AECS/e-Call Module & Service (B2B): AI monitors pre-/in-/post-crash vehicle and occupant states and autonomously communicates with emergency centers. A satellite fallback ensures continuity when terrestrial links fail. Satellite analytics propose detours around wildfires/floods; even if the vehicle’s sat-antenna is damaged, imaging satellites help detect anomalies and alert responders.
2. Personal SOS Device (B2G/B2C): Targeting H2 2026 launch. Features dynamic message compression (~40% bandwidth reduction by sending prioritized keywords/codes), sLLM-based auto-response & incident summarization, senior-friendly STT-TTS, and event-triggered sync (SOS button/fall). Collaboration with Skylo is in progress.`,
    video: ``
  },
  {
    id: 'EP071',
    hall: 'eureka',
    boothNumber: '62901-27',
    name: `주식회사 퀘스터`,
    nameEn: `Quester Inc.`,
    category: `Robotics`,
    product: `모티글러브 2`,
    productEn: `Motiglove 2`,
    description: `로봇 손의 원격 조작 및 학습을 위한 고정밀 핸드 트래킹 글러브입니다.
작년 CES 2025에서 혁신상을 수상한 Motiglove 1의 기술을 기반으로, 새로운 센서를 추가해 트래킹 정확도와 안정성을 한층 더 향상시켰습니다.
Motiglove 2는 로보틱스, 휴머노이드, 텔레오퍼레이션 등 다양한 분야에서 인간의 손 움직임을 정밀하게 트래킹하고 학습할 수 있도록 지원합니다.`,
    logo: `참가업체 로고 파일/EP_png/퀘스터 로고.png`,
    website: ``,
    descriptionEn: `A high-precision hand-tracking glove designed for robotic teleoperation and learning.
Based on the award-winning technology of Motiglove 1, which received the CES 2025 Innovation Award, the new Motiglove 2 integrates additional sensors to further enhance tracking accuracy and robustness.
It enables precise tracking and learning of human hand motions across robotics, humanoid, and teleoperation applications.`,
    video: `EP-mp4/주식회사 퀘스터.mp4`
  },
  {
    id: 'EP072',
    hall: 'eureka',
    boothNumber: '62901-28',
    name: `마인스페이스(주)`,
    nameEn: `Ma-In Space inc.`,
    category: `Mobile Devices, Accessories Apps`,
    product: `마인`,
    productEn: `MAiN`,
    description: `개인맞춤형 3D홈 생성 쇼핑플랫폼`,
    logo: `참가업체 로고 파일/EP_png/마인스페이스(주).png`,
    website: ``,
    descriptionEn: `A personalized 3D creation shopping platform`,
    video: `EP-mp4/마인스페이스.mp4`
  },
  {
    id: 'EP073',
    hall: 'eureka',
    boothNumber: '62901-29',
    name: `새솔테크 주식회사`,
    nameEn: `SAESOL Tech Inc.`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `새솔테크 S2X™ VRU 클라이언트`,
    productEn: `SAESOL Tech S2X™ VRU Client`,
    description: `‘S2X™ VRU Client’는 보행자 등 사고에 취약한 도로 이용자(VRU)를 위한 네트워크 기반 하이브리드 V2X 보안 플랫폼입니다. 차량, 스마트폰, 웨어러블 등 다양한 임베디드 기기에 탑재 가능하며, 익명 인증서를 안전하게 발급·관리하여 개인정보와 생명을 동시에 보호합니다. 업계 최고 수준의 서명·검증 속도로 실시간 보안성과 통신 효율을 모두 확보한 차세대 V2X 솔루션입니다.`,
    logo: `참가업체 로고 파일/EP_png/새솔테크 로고.png`,
    website: ``,
    descriptionEn: `S2X™ VRU Client is a network-based hybrid V2X security platform designed to protect vulnerable road users(VRU) such as pedestrians. It can be embedded into various mobility devices—including vehicles, smartphones, and wearables—and securely issues and manages pseudonym certificates to safeguard both personal data and human life. With industry-leading signing and verification speeds, it delivers real-time security and communication efficiency, making it a next-generation V2X.`,
    video: `EP-mp4/새솔테크 주식회사.mp4`
  },
  {
    id: 'EP074',
    hall: 'eureka',
    boothNumber: '62901-30',
    name: `주식회사 엑스큐브`,
    nameEn: `Xcube Co., Ltd.`,
    category: `Digital Health`,
    product: `HEXA`,
    productEn: `HEXA`,
    description: `HEXA는 흉부 CT 영상을 쉽고 직관적으로 확인할 수 있는 의료영상 소프트웨어입니다. 의료영상 표준 규격인 DICOM을 준수하며, CT 영상의 픽셀 데이터를 기반으로 2차원(축상, 관상, 시상 단면) 및 3차원(볼륨 렌더링) 영상을 제공합니다.
사용자는 Windowing Tool을 통해 관심 있는 HU(Hounsfield Unit) 범위를 설정하여 특정 조직을 강조하거나, Cropping Tool을 이용해 원하는 영역만 선택적으로 관찰할 수 있습니다. CT 영상은 PACS 또는 사용자가 직접 불러온 데이터를 활용하며, 소프트웨어 내에서 자동으로 저장·처리됩니다.
HEXA는 의료 전문가가 흉부 CT 영상을 효율적으로 탐색하고 분석을 보조할 수 있도록 설계된 의료영상 전송 소프트웨어입니다.`,
    logo: `참가업체 로고 파일/EP_png/(주)엑스큐브 로고_컬러.png`,
    descriptionEn: `HEXA is a DICOM-compliant medical imaging software that enables intuitive and efficient visualization of chest CT scans. It provides both two-dimensional views (axial, coronal, sagittal) and three-dimensional volume rendering based on CT pixel data. Users can adjust HU (Hounsfield Unit) ranges with the Windowing Tool to highlight tissues of interest, or use the Cropping Tool to focus on specific regions. CT images can be imported from a PACS (Picture Archiving and Communication System) or manually loaded by the user, and are automatically stored and processed within the software. HEXA is designed to support the visualization and review of chest CT images, helping users navigate and interpret scans more efficiently.`,
    video: `EP-mp4/(주)액스큐브/(주)엑스큐브 홍보 영상.mp4`
  },
];

export const globalCompanies: Company[] = [
  {
    id: 'GP001',
    hall: 'global',
    boothNumber: '50523-01',
    name: `시에라베이스`,
    nameEn: `Sierra BASE`,
    category: `Robotics`,
    product: `세계 최초의 지능형 인프라 진단 전문 솔루션, 시리우스 에디터`,
    productEn: `World's first intelligent infrastructure diagnosis specialist solution, SIRIUS Editor`,
    description: `SIRIUS Editor는 드론과 로봇 등 다양한 소스의 데이터를 활용해 시설물 점검 보고서를 자동으로 작성합니다. 단순한 손상 감지에 한정된 기존 시스템과 달리, 서로 다른 입력 데이터를 정밀하게 정렬해 정확한 3D 모델로 변환하며, 이를 통해 균열이나 구조적 결함의 치수를 정밀하게 측정할 수 있습니다. AI가 손상 정도를 평가하고 안전 등급을 매긴 뒤, 인적 개입 없이 완전한 점검 보고서를 생성합니다. 이러한 데이터 기반 분석은 수작업 평가를 대체하여 일관성을 높이고, 노동력을 줄이며, 전문성 있는 점검을 다양한 인프라 자산에 대규모 적용할 수 있도록 합니다. SIRIUS Editor는 원시 영상 데이터를 신뢰할 수 있는 엔지니어링 품질의 분석 결과로 전환해, 구조물 점검에서 가장 시간 소모가 많은 부분까지 완전 자동화합니다.`,
    website: `https://www.sierrabase.co.kr/eng/`,
    logo: `참가업체 로고 파일/GP_png/시에라베이스 로고.png`,
    descriptionEn: `SIRIUS Editor automates facility inspection reporting using multi-source data from drones and robots. Unlike systems limited to simple damage detection, it aligns heterogeneous inputs into accurate 3D models, enabling precise measurement of cracks and structural defects. The AI evaluates damage severity, assigns safety grades, and generates full inspection reports without human input. By replacing manual assessment with data-driven analysis, SIRIUS Editor improves consistency, reduces labor, and scales expert-level evaluations across infrastructure assets. It turns raw visual data into reliable, engineering-grade insights—fully automating one of the most time-intensive aspects of structural inspection.`,
    video: ``
  },
  {
    id: 'GP002',
    hall: 'global',
    boothNumber: '50523-02',
    name: `(주) 상고대`,
    nameEn: `SANG GO DAE CO.,LTD`,
    category: `Food & AgTech`,
    product: `눈꽃빙수기계`,
    productEn: `SNOW COOK`,
    description: `눈꽃빙수기 제조업체 입니다.상고대 Snowcook은 누구나 쉽게 달콤하고 부드러운 눈을 만들 수 있는 눈꽃빙수 기계 입니다.다년간 축적된 Snowcook만의 특허기술로 최고의 눈 를 만드실 수 있습니다.`,
    logo: `참가업체 로고 파일/GP_png/(주) 상고대.png`,
    website: ``,
    descriptionEn: `We are a snow ice machine manufacturer. 
Snowcook is a snow flake machine bread that anyone can easily make sweet and soft snow. 
with Snowcook's unique patented technology , which has been accumulated for many years, you can make the best Snow flake`,
    video: ``
  },
  {
    id: 'GP003',
    hall: 'global',
    boothNumber: '50523-03',
    name: `주식회사 리콘랩스`,
    nameEn: `Reconlabs`,
    category: `XR`,
    product: `Genpresso`,
    productEn: `Genpresso`,
    description: `아이디어를 이미지, 텍스트, 영상 등으로 입력하고 3D 모델을 생성하는 워크플로우를 AI 에이전트와 함께 하여 효율적으로 제작할 수 있는 플랫폼
다양한 사용자와 함께 협업하여 작업할 수 있고, 여러 AI 모델들을 사용하여 효과적으로 디자인 작업을 할 수 있음`,
    logo: `참가업체 로고 파일/GP_png/주식회사 리콘랩스.png`,
    website: ``,
    descriptionEn: `Multimodal data (text, images, videos, etc.) is used to create the 3D model that the user wants

When creating a 3D model, the AI agent helps in all workflows from data input to modification and completion, allowing for more efficient design than existing AI utilization methods

You can collaborate with other users in a single workspace within the platform, and use various collaboration functions such as work history and leaving comments

The created 3D model can be converted to a CAD or 3D printing-specific file for easy modification and production later`,
    video: ``
  },
  {
    id: 'GP004',
    hall: 'global',
    boothNumber: '50523-04',
    name: `주식회사 티에이비`,
    nameEn: `TAB Co., Ltd.`,
    category: `Lifestyle`,
    product: `라디스`,
    productEn: `LADIS`,
    description: `페트병에 뚜껑처럼 끼워 병 안의 식수를 살균하는 마개형 UV 식수 살균기입니다. 제품 속 램프가 2분 이내에 세균, 바이러스 및 기타 미생물을 99.9% 파괴할 수 있는 UV-C 파장을 비춰 수인성 질병을 예방할 수 잇는 안전한 식수를 제공합니다.`,
    website: `https://en.ladis.co.kr`,
    logo: `참가업체 로고 파일/GP_png/주식회사 티에이비 로고_컬러_백색단도.png`,
    descriptionEn: `A cap-type UV sterilizer that screws onto plastic bottles, using UV-C to eliminate 99.9% of bacteria, viruses, and other microorganisms in under two minutes, delivering safe drinking water and reducing the risk of waterborne diseases.`,
    video: ``
  },
  {
    id: 'GP005',
    hall: 'global',
    boothNumber: '50523-05',
    name: `주식회사 와따에이아이`,
    nameEn: `WATA AI Inc`,
    category: `AI`,
    product: `AI 재고실사 로봇`,
    productEn: `AI Logistics Stocktaking Robot`,
    description: `와따에이아이의 AI 물류 재고관리 로봇은 하이랙과 평치 등 다양한 형태의 창고에서 이뤄지던 수작업 재고 실사를 자동화해 불필요한 인력 투입과 오류 발생을 크게 줄여줍니다.

 라벨과 바코드를 읽고, 적재 위치를 확인하며, 여러 물품을 동시에 인식해 보다 정확하고 신속한 재고 관리를 가능하게 합니다.

 그 결과 실시간 데이터에 기반한 지속 가능한 창고 디지털트윈을 구축하여 운영 효율성과 생산성을 한 단계 끌어올립니다.`,
    website: `https://wata-ai.com/en/`,
    logo: `참가업체 로고 파일/GP_png/와따에이아이 로고.png`,
    descriptionEn: `The WATA AI logistics stocktaking robot automates the traditionally manual inventory checks in various warehouse types, such as high-rack and floor storage, minimizing unnecessary labor and reducing errors.

 It can read labels and barcodes, verify storage locations, and recognize multiple items simultaneously, enabling faster and more accurate inventory management.

 As a result, it builds a sustainable digital twin of the warehouse based on real-time data, significantly enhancing both operational efficiency and productivity.`,
    video: ``
  },
  {
    id: 'GP006',
    hall: 'global',
    boothNumber: '50523-06',
    name: `㈜벡스랩`,
    nameEn: `VHEX Lab`,
    category: `Digital Health`,
    product: `SITh.XR애도`,
    productEn: `SITh.XRaedo`,
    description: `SITh.XR애도는 (주)벡스랩에서 개발한 몰입형 XR 추모 테라피 플랫폼입니다. SITh.XR애도는 세상을 떠난 사랑하는 이의 사진을 활용하여 가상인간을 만들고, 가상인간은 HMD와 PC 기반 인터페이스를 통해 실시간으로 XR테라피스트에 의해 컨트롤됩니다. 안전한 공간에서 가상인간(아바타)은 음성, 끄덕임, 미소, 표정, 동작을 통해 의사소통하며 슬픔에 잠긴 유가족들이 풀지 못한 감정을 표현함으로써 아름다운 이별을 가능하게 돕습니다. 2025년 6월 25일 보도된 뉴스에서 선을씨는 SITh.XR애도를 통해 비극적인 제주항공 무안공항 참사 희생자인 동생 휘수씨를 만났습니다. 그들의 특별한 공간에서 선을씨는 마침내 안녕을 말할 수 있게 되었습니다. 지금까지 SITh.XR애도는 뜻하지 않게 사랑하는 가족을 잃은 12가족들의 슬픔을 이겨내는 과정을 도왔습니다. SITh.XR애도는 가상 현존감과 셀프 인사이트 테라피(Self-Insight Therapy, SITh)를 결합함으로써 전통적인 추모 의식으로부터 새로운 대안으로서 치유적이고, 인간 중심적인 추모의 방식을 제안합니다. 본 혁신은 디지털 헬스, 정신 건강, 그리고 공감하는 AI 분야의 새로운 지평을 열고 있습니다.`,
    website: `http://www.vhexlab.com`,
    logo: `참가업체 로고 파일/EP_png/백스랩 로고.png`,
    descriptionEn: `SITh.XRaedo is an immersive XR grief therapy platform developed by VHEX Lab. It creates a virtual avatar of a deceased loved one from a photo,which is controlled live by an XR therapist through an HMD and PC-based interface. In a safe space, the avatar communicates through speech,nods, smiles, and emotional gestures, helping grieving families express unsolved emotion and find closure. On June 25, 2025, in a broadcast news report, Seoneul met her younger sister Hwisu, who died in a tragic airplane crash at Jeju Air Muan Airport, through SITh. XRaedo. In their special space, Seoneul finally said goodbye. So far, SITh.XRaedo has helped twelve families cope with unexpected loss. It offers a therapeutic, human-centered alternative to traditional mourning rituals, combining virtual presence with self-insight therapy. This innovation opens a new frontier in digital health, mental wellness, and compassionate AI.`,
    video: ``
  },
  {
    id: 'GP007',
    hall: 'global',
    boothNumber: '50523-07',
    name: `관악아날로그 주식회사`,
    nameEn: `Gwanak Analog Co., Ltd.`,
    category: `Embedded Technology`,
    product: `반도체칩`,
    productEn: `Sensor On-Device AI System-on-Chip including GW2120 AI MCU`,
    description: `반도체칩-온디바이스 AI, 초음파센서, 다중센서 등`,
    website: `http://www.gwanakanalog.com`,
    logo: `참가업체 로고 파일/GP_png/로관악아날로그(주) 로고_컬러.png`,
    descriptionEn: `Gwanak Analog, on-behalf of full product lineup of digital, analog, power, sensor, ROIC products, would like to mainly showcase Gwanak Analog’s on-device AI system-on-chip product and its expanded platform kit.
Gwanak Sensor On-Device AI Platform Kit is a go-to sensor platform specifically for on-device AI product development. It enables the creation of new prototype artificial intelligence ideas based on analog and/or digital sensors. It is a ready-to-use development kit for on-device AI ecosystem space to rapidly design, develop and manufacture products based on each desired development environment. It supports testing sensor-driven on-device AI products and use cases as well as prototyping. The kit enables customers to significantly reduce the time spent on proof-of-concept to a fully developed on-device AI solution. It will get rid of redundant conversion process from large AI models into smaller on-device AI models. Embrace your creativity with the kit to build powerful on-device AI products and get involved to build future-driven on-device AI ecosystem.`,
    video: ``
  },
  {
    id: 'GP008',
    hall: 'global',
    boothNumber: '50523-08',
    name: `헬리오스 주식회사`,
    nameEn: `Helios`,
    category: `Digital Health`,
    product: `디지털 헬스케어 로봇`,
    productEn: `Digital Healthcare Robot`,
    description: `. 종합 AI 건강 로봇
. 고출력 근적외선과 생성형 AI가 결합된 차세대 홈 헬스케어 로봇
. AI 건강 코칭음성 대화 기반`,
    website: `http://heliostar.co.kr:4000/main`,
    logo: `참가업체 로고 파일/GP_png/헬리오스 로고.png`,
    descriptionEn: `. Integrated AI Health Robot
. Next-Generation Home Healthcare Robot Combining High-Power Near-Infrared Technology and Generative AI
. AI Health Coaching Based on Voice Interaction`,
    video: ``
  },
  {
    id: 'GP009',
    hall: 'global',
    boothNumber: '50523-09',
    name: `주식회사 씨랩`,
    nameEn: `CILAB CO.,LTD.`,
    category: `Robotics`,
    product: `수중드론 가르다`,
    productEn: `CILAB GARDA M2`,
    description: `해양 작업, 산업 현장, 인명 구조 등에서 수중 통신을 지원하며, 기존 ROV들이 갖는 통신 거리의 제한, 조종의 불편함, 잠수사 안전 문제를 해결합니다. 또한, 스마트 전력 제어 기술을 적용해 효율적인 운용이 가능합니다.`,
    logo: `참가업체 로고 파일/GP_png/주식회사 씨랩.png`,
    website: ``,
    descriptionEn: `Real-time water ↔ Wire/wireless autonomous underwater drone that provides underwater communications for maritime, industrial and rescue operations, addressing the range, maneuverability and diver safety limits of ROVs through smart power control.`,
    video: ``
  },
  {
    id: 'GP010',
    hall: 'global',
    boothNumber: '50523-10',
    name: `씨포라인 주식회사`,
    nameEn: `C4Line Co.`,
    category: `Smart Cities/Smart Home`,
    product: `기가바이트2 Wire 익스텐더 (Wi-Fi/블루투스 액세스 포인트)`,
    productEn: `Gigabit 2Wire Extender over Wi-Fi/Bluetooth Access Point product.`,
    description: `C4L2000G-WB6E-2E는 구리선 기반 IP 이더넷을 Wi-Fi와 블루투스로 손쉽게 확장할 수 있는 혁신적인 솔루션으로, 건물 내 IP 설치 현장에서 유·무선을 아우르는 안정적이고 원활한 네트워크 확장을 보장합니다`,
    logo: `참가업체 로고 파일/GP_png/씨포라인 주식회사.png`,
    website: ``,
    descriptionEn: `C4L2000G-WB6E-2E is the IP Ethernet over Copper to Wi-Fi / Bluetooth extender products.
It is the unique solution for the Wired & Wireless IP connectivity system. 
It covers the Wired & Wireless coverage for the seamless & fluent IP Extension in the  building IP installation sites.`,
    video: ``
  },
  {
    id: 'GP011',
    hall: 'global',
    boothNumber: '50523-11',
    name: `주식회사 오빌`,
    nameEn: `OPHIR. CO. LTD`,
    category: `Lifestyle`,
    product: `애니파워`,
    productEn: `ANYPOWER`,
    description: `애니파워(AnyPower) – 차세대 산업·아웃도어 파워뱅크
제품 개요
애니파워는 전문가, 아웃도어 활동가, 재난 대응 인력을 위한 프리미엄 다목적 에너지 솔루션입니다.기존 파워뱅크와 달리 약 40% 가벼우며, 다양한 전동공구와 호환 가능, 그리고 차세대 PD3.1 (240W) 초고속 충전 기술을 탑재했습니다.애니파워는 단순한 배터리를 넘어 생산성을 높이는 에너지 플랫폼으로, 작업 현장·아웃도어 활동·재난 상황에서 새로운 표준을 제시합니다.

1. 주요 특징
 1)초경량 설계  ∘기존 산업용 파워뱅크 대비 약 40% 가벼워 장시간 사용 시 피로도를                 최소화합니다.
 2) 범용 전동공구 호환성  ∘애니파워의 특허받은 어댑터 기술을 통해 다양한 브랜드의 전동공구를 하나의 
    배터리로 구동할 수 있어, 별도의 충전기나 배터리가 필요하지 않습니다.
 3) 멀티 포트 초고속 충전  ∘USB-C PD3.1 (최대 240W), USB-A (QC), 산업용 XT90/GX16 포트를 지원하여 
    노트북, 드론, 마이크로 모빌리티 등 다양한 기기를 빠르게 충전할 수 있습니다.
 4) 안전성과 신뢰성  ∘UN38.3, IEC 62133-2, KC, PSE등 글로벌 인증을 획득했으며, BMS에 AI 기반 
    모니터링 기술을 적용하여 온도·과전류·작업자 안전 경보까지 제공합니다.
 5) 모듈형 & 다목적 활용  ∘100Wh(항공 반입 가능), 200Wh모듈형으로 제공되어, 산업 현장은 물론 해외 
    출장·여행에도 유연하게 대응할 수 있습니다.

2. 적용 분야
 1) 건설·산업 현장– 범용 배터리로 공구 가동 중단 시간을 줄임
 2) 아웃도어 & 레저– 캠핑, 하이킹, 원정 활동에 최적의 휴대 전원
 3) 재난·비상 상황– 위급 시 안정적인 전원 공급
 3) 글로벌 모빌리티– 국제 규격에 맞춘 휴대 전원 솔루션

3. CES 2026 혁신 포인트
 애니파워는 배터리를 넘어 스마트 에너지 플랫폼입니다. CES 2026에서는 차세대 애니파워 프로(AnyPower Pro)를 선보입니다:
 1) AI 기반 작업자 안전 모니터링 시스템(낙상 감지, 긴급 알림)
 2) 스마트 에너지 관리 앱– 실시간 배터리 상태 및 진단 기능 제공
 3) 친환경 설계– 재활용 소재 적용으로 ESG 목표 달성 기여`,
    website: `http://www.anypower.co.kr`,
    logo: `참가업체 로고 파일/GP_png/오빌 로고.png`,
    descriptionEn: `AnyPower – The Next-Generation Industrial & Outdoor Power Bank
Product Overview
 AnyPower is a premium multi-purpose power solutionthat redefines the way professionals, outdoor   enthusiasts, and emergency responders access portable energy. Unlike conventional power banks, AnyPower is 40% lighter, highly compatible with power tools,     
 and equipped with next-generation PD3.1 (240W) fast-charging technology. It is designed not only 
 as a battery but as a productivity enablerfor worksites, outdoor adventures, and disaster response.

1. Key Features
 1) Ultra-Lightweight Design  ∘Reduces weight by approximately 40% compared to traditional industrial power banks,      
    minimizing user fatigue during long hours of operation.
 2) Universal Power Tool Compatibility  ∘With AnyPower’s patented adapter technology, one battery powers multiple brands of 
    power tools – eliminating the need for multiple chargers and batteries.
 3) High-Speed Multi-Port Charging  ∘Supports USB-C PD3.1 (up to 240W), USB-A (QC), and industrial-grade XT90/GX16 ports for 
    laptops, drones, electric mobility devices, and more.
 4) Safety & Reliability  ∘Certified under UN38.3, IEC 62133-2, KC, PSE, ensuring global compliance and safety. Integrated 
    BMS technology offers AI-powered monitoringfor temperature, over-current, and worker safety 
    alerts.
 5) Modular & Versatile  ∘Available in 100Wh (flight-approved)and 200Whmodular units, enabling scalability for different  
    environments – from construction sites to international travel.

2. Target Applications
 1) Construction & Industrial Worksites– Reduce downtime with a universal battery solution.
 2) Outdoor & Adventure– Portable power for camping, hiking, or expeditions.
 3) Emergency & Disaster Response– Reliable power in critical situations.
 4) Global Mobility– One solution that complies with international travel standards.

3. Innovation Highlight @ CES 2026
 AnyPower goes beyond being a battery – it is an energy platform. At CES 2026, we showcase AnyPower Pro, integrating:
 1) AI-based worker safety monitoring system(fall detection, emergency alerts).
 2) Smart Energy Management Appwith real-time battery diagnostics.
 3) Eco-conscious designwith recyclable housing materials supporting ESG goals.`,
    video: ``
  },
  {
    id: 'GP012',
    hall: 'global',
    boothNumber: '50523-12',
    name: `티앤엘헬스케어`,
    nameEn: `T&L Health Care`,
    category: `Beauty & Personal Care`,
    product: `컴랙스넥케어밴드`,
    productEn: `Comlax Neck-care Band`,
    description: `연신 PCB 기술을적용한 웨어러블 넥케어 밴드 이며, 근적외선 LED 및 마이크로니들 진동마사지 기능을 접목시킨 신개념의 넥케어밴드입니다. 목 주름을 개선하는 효과가 있으며, 사용법이 간단합니다.`,
    website: `https://tnlhealthcare.co.kr`,
    logo: `참가업체 로고 파일/GP_png/티앤엘헬스케어 로고_컬러.png`,
    descriptionEn: `By utilizing specialized SPCB (Stretchable PCB) Technology, our COMLAX Neck-Care Band is developed for removing neck wrinkles mainly. However, it can be also used for massage on the neck by using our micro-needle patch and Near IR function.`,
    video: ``
  },
  {
    id: 'GP013',
    hall: 'global',
    boothNumber: '50523-13',
    name: `드라이브텍(주)`,
    nameEn: `DRIVETECH Co.,Ltd`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `에어리버스 스테이션(긴급 전력·구조 지원용 이동식 드론 허브)`,
    productEn: `Aerivus ResQ Station(Mobile Drone Hub for Emergency Power & Rescue)`,
    description: `Aerivus ResQ Station(에리버스 레스큐 스테이션)은 단순한 드론 운반 장비가 아니라, 재난 대응과 분쟁 지역 작전을 근본적으로 혁신하는 플랫폼입니다. 붕괴 건물, 불안정 지형, 폭발 위험 구역, 교전 지역 등 인명 피해가 임박한 고위험 환경에서 AI 기반 위험 인지와 경로 최적화 기술을 통해 인명을 위험에 빠뜨리지 않고 안전하게 접근할 수 있습니다. 스테이션은 사전 프로그램된 경로로 위험 지역에 자율 주행 후 즉시 드론을 출격시켜 공중 정찰을 수행합니다. 실시간 영상과 센서 데이터는 관제센터로 전송되어 구조 계획 수립을 지원하고, 원격 제어로 정밀 조사가 가능합니다. 드론과 스테이션에서 수집된 종합 데이터를 분석함으로써 구조팀은 안전한 인력 투입을 위한 최적의 진입 경로와 타이밍을 도출합니다. 이 올인원 솔루션은 자동 드론 충전, 실시간 데이터 전송, 다중 드론 운용을 통합해 신속한 정보 수집과 구조팀의 안전 보장을 동시에 달성합니다.`,
    website: `http://drivetech.kr/`,
    logo: `참가업체 로고 파일/GP_png/50523-13.png`,
    descriptionEn: `The Aerivus ResQ Station is not merely a drone transport device—it's a revolutionary platform that transforms disaster response and conflict-zone operations. In high-risk environments like collapsed buildings, unstable terrain, explosion zones, or active combat areas where human casualties are imminent, AI-powered hazard recognition and route optimization technology enables safe approach without risking human lives. The station autonomously navigates to danger zones via pre-programmed routes, then immediately launches drones for aerial reconnaissance. Real-time video and sensor data stream to command centers, supporting rescue planning while enabling remote control for detailed investigations. By analyzing comprehensive drone and station data, rescue teams determine optimal entry routes and timing for safe human intervention. This all-in-one solution integrates automatic drone charging, real-time data transmission, and multi-drone operations, simultaneously achieving rapid information gathering and guaranteed rescue team safety.`,
    video: ``
  },
  {
    id: 'GP014',
    hall: 'global',
    boothNumber: '50523-14',
    name: `(주)이원오엠에스`,
    nameEn: `EONEOMS Ltd.`,
    category: `Smart Cities/Smart Home`,
    product: `헤이미러 스마트 드레싱 미러`,
    productEn: `HEYMIRROR Smart Dressing Mirror`,
    description: `HEYMIRROR는 매일의 스타일링을 새롭게 정의하는 AI 기반 스마트 드레싱 미러입니다. 사용자의 옷장을 저장하고 음성 또는 터치를 통해 개인화된 스타일을 추천합니다. 기존 스마트 미러가 3D 아바타에 의존하는 것과 달리, HEYMIRROR는 날씨, 일정, TPO, 스타일 선호도 등 실시간 데이터를 통합하고 고해상도 이미지와 AI 생성 콘텐츠로 현실적이고 직관적인 스타일 체험을 제공합니다. 고급 음성 인식 기능을 통해 로그인 없이 다중 사용자를 식별할 수 있어 가족 모두가 맞춤 서비스를 받을 수 있습니다. 반복 사용을 통해 AI는 선호를 학습해 자동화와 영감을 제공합니다. 또한 레이더 센서로 사용자가 없을 때 LED405 살균 조명과 플라즈마 팬을 자동 작동시키며, 제습기 연동으로 의류와 공간을 최적 상태로 유지합니다. HEYMIRROR는 지능, 디자인, 라이프스타일을 결합해 패션 테크놀로지의 새로운 기준을 제시합니다.`,
    website: `http://eoneoms.com/eng`,
    logo: `참가업체 로고 파일/EP_png/(주)이원오엠어스 로고_컬러.png`,
    descriptionEn: `HEYMIRROR is an AI-powered smart dressing mirror designed to redefine daily styling. It stores the user’s wardrobe and delivers personalized outfit recommendations through voice or touch. Unlike conventional smart mirrors that depend on 3D avatars, HEYMIRROR integrates real-time data such as weather, calendar, TPO (time, place, occasion), and style preferences, visualizing results with high-resolution images and AI-generated content for a more realistic and intuitive experience. Advanced voice recognition allows login-free identification of multiple users, so every family member can enjoy tailored styling. Over time, its AI learns preferences and reactions, enabling effortless automation and inspiration. Beyond styling, HEYMIRROR also supports smart care: a radar sensor automatically activates LED405 sterilization lighting and a plasma fan when the space is unoccupied, while seamless dehumidifier integration keeps clothing and the environment in optimal condition. HEYMIRROR merges intelligence, design, and lifestyle, setting a new standard in fashion technology.`,
    video: ``
  },
  {
    id: 'GP015',
    hall: 'global',
    boothNumber: '50523-15',
    name: `주식회사 인스파워`,
    nameEn: `Inspower Co., Ltd.`,
    category: `Smart Cities/Smart Home`,
    product: `인스파워 스마트 브로드밴드 커넥티비티 증폭기`,
    productEn: `INSPOWER Smart Broadband Connectivity Amplifier`,
    description: `인스파워의 스마트 브로드밴드 커넥티비티 증폭기는 차세대 5G, IoT, XR 환경에서 안정적이고 넓은 무선 커버리지를 제공하는 완제품 시스템입니다.
이 장비는 고출력 RF 증폭 기술과 더불어 이더넷 기반의 지능형 제어 기능, 터치 LCD 인터페이스를 갖추어 사용자가 쉽게 설치하고 운용할 수 있습니다.
스마트시티, 연구소, 기업 및 프로슈머 환경에서 무선 연결 성능을 확장하는 핵심 솔루션입니다.`,
    website: `http://www.inspower.co.kr`,
    logo: `참가업체 로고 파일/GP_png/인스파워 로고.png`,
    descriptionEn: `INSPOWER’s Smart Broadband Connectivity Amplifier is a fully integrated system that delivers reliable and wide wireless coverage for next-generation 5G, IoT, and XR environments.
Combining high-power RF amplification with Ethernet-based smart control and a user-friendly touch LCD interface, the system is easy to install and operate.
It provides an essential solution for extending wireless connectivity in smart city infrastructure, enterprise networks, research facilities, and prosumer applications.`,
    video: ``
  },
  {
    id: 'GP016',
    hall: 'global',
    boothNumber: '50523-16',
    name: `(주)케이스마텍`,
    nameEn: `Ksmartech Co.,Ltd.`,
    category: `Fintech`,
    product: `키포클라우드`,
    productEn: `Key4C(Key For Cloud)`,
    description: `Key4C는 클라우드 환경에서의 HSM(Hardware Security Module)과 KMS(Key Management System)을 SaaS 로 제공합니다. 뿐만아니라 이를 기반으로 아래의 기능도 SaaS 로 제공합니다.
1. 한 보안성 강화 OTP(One Time Password)
2. 간편로그인에 활용되는 JWT(Jason Web Token)의 보안 및 라이프 사이클 관리
3. K8S Resource에 대한 보안 서비스
4. 랜섬웨어 방어를 위한 CFS(Cryptography File System) 폴더 (for Linux, Win, MacOS)`,
    website: `https://www.ksmartech.com/en/index.html`,
    logo: `참가업체 로고 파일/EP_png/(주)케이스마텍 로고_컬러.png`,
    descriptionEn: `Key4C provides HSM (Hardware Security Module) and KMS (Key Management System) as SaaS in cloud environments.
In addition, based on these, it also offers the following functions as SaaS:
1. Enhanced security OTP (One-Time Password)
2. Security and lifecycle management of JWT (JSON Web Token) used for simple login
3. Security services for K8S resources
4. CFS (Cryptography File System) folders for ransomware protection (for Linux, Windows, macOS)`,
    video: ``
  },
  {
    id: 'GP017',
    hall: 'global',
    boothNumber: '50523-18',
    name: `주식회사 파이퀀트`,
    nameEn: `PiQuant. Co., Ltd.`,
    category: `Smart Cities/Smart Home`,
    product: `정수장 탁도측정기`,
    productEn: `Turbidity Scanner`,
    description: `정수장 탁도측정기는 정수 처리 시설에서 물의 탁도를 0 NTU부터 1000 NTU까지 실시간으로 측정할 수 있는 장비입니다. 안정적인 탁도 측정을 통해 수질 변화를 신속하게 파악할 수 있으며, 안전하고 깨끗한 식수 공급을 위한 핵심 도구로 활용됩니다.

본 장비는 기존 장비로는 어려웠던 트라프 역세척 과정의 탁도에 대한 모니터링을 지원하도록 설계되어 운영 관리의 효율성을 높입니다. 또한 90도 산란광 방식을 적용해 국제 표준에 부합하는 정확한 측정 결과를 제공하며, 네트워크 연결을 통해 원격 모니터링과 데이터 관리가 가능해 운영자는 현장에 직접 가지 않고도 수질 상태를 확인하고 대응할 수 있습니다.

이 제품은 정수 처리 품질을 향상시키고 정수장 공정의 이상 및 수질 문제를 조기에 발견할 수 있게 합니다. 아울러, 역세척 과정의 최적화를 통한 에너지 절감, 에너지 효율을 향상시키고, 이에 따른 탄소 저감, 자동화 시스템을 통한 운영 효율성 강화를 지원합니다. 궁극적으로 안전한 식수 공급에 기여하며, 지속가능한 생활 환경 조성 및 정수장의 첨단화에도 기여합니다.`,
    website: `http://www.piquant.asia`,
    logo: `참가업체 로고 파일/GP_png/주식회사 파이퀀트 로고_컬러.png`,
    descriptionEn: `The Turbidity Scanner is a device that measures water turbidity in real time from 0 to 1000 NTU at purification facilities. By providing stable monitoring, it enables operators to quickly detect changes in water quality and serves as a key tool in ensuring the safe and clean supply of drinking water.

The device is designed to support turbidity monitoring during the trough backwash process—a task that has been challenging with conventional equipment—thereby enhancing operational efficiency. Utilizing the 90-degree light scattering method, it delivers precise results that comply with international standards. In addition, its network connectivity allows for remote monitoring and digital data management, enabling operators to check water conditions and take necessary actions without being physically on site.

The Turbidity Scanner enhances the quality of water purification and enables the early detection of issues in the treatment process. It also supports energy savings through the optimization of the backwash process, contributes to carbon reduction by improving energy efficiency, and strengthens operational efficiency through automation systems. Ultimately, it ensures a safe drinking water supply while promoting sustainable living environments and advancing the modernization of water treatment facilities.`,
    video: ``
  },
  {
    id: 'GP018',
    hall: 'global',
    boothNumber: '50523-19',
    name: `(주)엔소프트`,
    nameEn: `NSOFT Co., Ltd.`,
    category: `AI`,
    product: `N-Intellifex AI 플랫폼`,
    productEn: `N-Intellifex AI Platform`,
    description: `N-Intellifex는 NSOFT의 차세대 AI 플랫폼으로, 제조 데이터를 실행 가능한 인텔리전스로 전환합니다.
ERP, MES, WMS 및 기타 기업 시스템의 데이터를 활용하여, 전체 생산 파이프라인에 걸쳐 실시간 인사이트와 자동화를 제공합니다.
강력한 동적 AutoML 엔진을 기반으로, N-Intellifex는 물류, 전자, 자동차, 기계 산업 등 각 산업에 맞게 AI 모델을 지속적으로 최적화합니다.
문맥을 인식하는 분석 기술과 산업별 맞춤형 AI를 결합하여, 더 스마트한 의사결정, 더 빠른 문제 해결, 더 정밀한 예측을 가능하게 합니다.
구조화된 데이터베이스, 시각적 데이터, 실시간 센서 스트림 등 다양한 형식의 멀티모달 데이터를 활용하여, N-Intellifex는 복잡함을 명확함으로, 데이터를 가치로 전환하는 진정한 제조 인텔리전스를 실현합니다.`,
    website: `https://www.nsoft.co.kr/`,
    logo: `참가업체 로고 파일/EP_png/(주)엔소프트 로고_컬러.png`,
    descriptionEn: `N-Intellifex is NSOFT’s next-generation AI platform that transforms manufacturing data into actionable intelligence.
Leveraging data from ERP, MES, WMS, and other enterprise systems, it delivers real-time insights and automation across the entire production pipeline.
Powered by a dynamic AutoML engine, N-Intellifex continuously optimizes AI models for each industry—from logistics and electronics to automotive and machinery.
Its unique combination of context-aware analytics and tailored vertical AI enables smarter decisions, faster problem-solving, and predictive precision.
Structured databases, visual data, and live sensor streams—N-Intellifex harnesses multimodal data across all formats, unlocking true manufacturing intelligence that turns complexity into clarity, and data into value.`,
    video: ``
  },
  {
    id: 'GP019',
    hall: 'global',
    boothNumber: '50523-20',
    name: `스피랩`,
    nameEn: `SPILab Corporation`,
    category: `AI`,
    product: `레이판 드론`,
    productEn: `Raypann Drone`,
    description: `레이판 드론은 기반 재난인지 Edge-AI 시스템으로 EO/IR·음향 센서 융합, 초고속 경량화 AI 추론, 클라우드 연동 관제를 통해 재난·산업안전 현장의 실시간 위험 탐지 및 예측을 지원함.`,
    logo: `참가업체 로고 파일/GP_png/스피랩 로고.png`,
    website: ``,
    descriptionEn: `The Raypann Drone is an edge-AI system for disaster recognition that supports real-time hazard detection and prediction at disaster and industrial safety sites through EO/IR and acoustic sensor fusion, ultra-high-speed lightweight AI inference, and cloud-linked control.`,
    video: ``
  },
  {
    id: 'GP020',
    hall: 'global',
    boothNumber: '50523-21',
    name: `세호마린솔루션즈(주)`,
    nameEn: `SEHOMARINE SOLUTIONS`,
    category: `Drones`,
    product: `AI기반 친환경 수상드론`,
    productEn: `AI-based eco-friendly water drones`,
    description: `AI 기반 친환경 수상 드론은 해양 쓰레기 수거, 해조류 제거, 수질 모니터링, 방사능 탐지, 인명 구조 등 다양한 해양 임무를 수행하도록 설계·개발되었습니다.
AI 기반의 다중센서(Lidar, Camera, AIS 등) 비전 기술을 통해 해양 객체를 탐지 및 식별하여, 자율운항/충돌회피 알고리즘을 통해 추진제어 기능을 구현합니다.
또한 최첨단 기술과 지능형 설계를 통해 해양 안전, 환경 보호, 그리고 지속 가능한 미래에 기여하며, 주요 임무는 다음과 같습니다.
- 해양 쓰레기 수거 
- 해조류 제거 
- 수질 모니터링 
- 방사능 탐지 
- 해양 인명 구조 
친환경 수상 드론은 혁신성과 지속가능성을 결합한 해양 기술의 중요한 도약을 의미합니다.`,
    website: `http://www.sehomarine.com/`,
    logo: `참가업체 로고 파일/GP_png/세호마린솔루션즈(주) 로고_컬러.png`,
    descriptionEn: `AI-based eco-friendly water drones are designed and developed to carry out various maritime missions, including marine waste collection, seaweed removal, water quality monitoring, radiation detection, and search and rescue operations.
Utilizing AI-based multi-sensor vision technology (LiDAR, cameras, AIS, etc.), these drones can detect and identify maritime objects and implement precise propulsion control through autonomous navigation and collision-avoidance algorithms.
Through cutting-edge technology and intelligent design, they contribute to maritime safety, environmental protection, and a sustainable future. Their primary missions include.
- Marine waste collection
- Seaweed removal
- Water quality monitoring
- Radiation detection
- Search and rescue operations
Eco-friendly water drones represent a significant leap forward in maritime technology, combining innovation with sustainability.`,
    video: ``
  },
  {
    id: 'GP021',
    hall: 'global',
    boothNumber: '50523-22',
    name: `포엑스(주)`,
    nameEn: `FOEx Co., Ltd.`,
    category: `Sustainability & Energy`,
    product: `포엑스 스위트`,
    productEn: `FOEx Suite`,
    description: `FOEx Suite는 LNG, 수소, 암모니아 선박 등 폭발 위험 지역에서의 운전 안전, 설비 진단 및 국내외 방폭 관련 규정 준수를 위해, 웹 기반의 안전 진단, 관리 및 실시간 상태 진단 솔루션을 제공합니다.
이를 통해 다양한 정보를 통합 관리함으로써 운전 안전성과 시설 진단의 효율성을 높이고, 국제 규격 및 국내 규정(IECEx, KCs 등) 에 부합하는 폭발안전 관리가 가능합니다.
특히, FOEx Suite는 SaaS(Software-as-a-Service) 기반의 지능형 플랫폼으로서, 국제 방폭 표준인 IECEx 및 국내 KCs 방폭 인증의 검사 기준을 충족하며, 사용자의 플랜트 데이터베이스와 자산 관리 시스템을 함께 제공합니다.
FOEx Suite는 시설의 데이터를 분석하여 이력을 평가하고, 이를 통해 위험도를 분석하고 안전한 시설운영이 될 수 있도록 지원합니다. 특히, 포엑스의 IoT 시스템과 연계하여 중요한 장비의 실시간 모니터링과 진단을 수행하며, AI 기반의 고장분석을 통해 보다 빠르고 정확한 진단 결과를 제공합니다.`,
    logo: `참가업체 로고 파일/GP_png/포엑스(주).png`,
    website: ``,
    descriptionEn: `The FOEx Suite platform provides web-based safety diagnosis, management and real-time status diagnosis solutions for a number of information to manage operational safety, facility diagnosis and compliance with domestic and international standards and regulations in explosion-prone areas such as LNG, hydrogen and ammonia ships.
Particularly, it is a SaaS(software-as-a-service) based smart platform that meets the inspection standards required by IECEx, an international explosion-proof standard, and KCs explosion-proof certification, and has a user's plant database and asset management system.
The FOEx Suite analyzes facility data to evaluate historical performance and assess potential risks, supporting safe and reliable plant operations. In particular, it integrates with the FOEx IoT system to enable real-time monitoring and diagnosis of critical equipment, while AI-based fault analysis provides faster and more accurate diagnostic results.`,
    video: ``
  },
  {
    id: 'GP022',
    hall: 'global',
    boothNumber: '50523-23',
    name: `(주)이에스피`,
    nameEn: `ESP CO.,LTD`,
    category: `Smart Cities/Smart Home`,
    product: `스마트 재난대피 시스템`,
    productEn: `SMART SAFETY SOLUTION`,
    description: `온도센서.가스센서 및 기존 건물 화재관리 시스템과 연동된 데이타를 통해 위험구역과 화재상황을 휴대폰으로 전송하여 위험상황을 감지합니다.
또한, 설치된 디바이스 에서는 해당 데이터를 기반으로 화재현장의 위험구역과 안전구역을 블록단위로 설정하여. 대피자가 능동적으로, 화재현장 주변소음의 주파수를 회피한 부저소리와, 고휘도의 밝은 LED 를 통한 안전구역 으로의 탈출로를 안내받을수 있습니다.

* 특징 - 화재현장 부저알림음, 고휘도 LED 
   : 현장의 소음을 마이크로 수음하여, 현장의 소음 데시벨 및 주파수를  회피한 부저음 을 방사하고. 
     고휘도의 밝은 LED 를 송출하여.장애인.노령층 등의 안전확보 시스템 제공.`,
    logo: `참가업체 로고 파일/GP_png/이에스피 로고.png`,
    website: ``,
    descriptionEn: `This system detects dangerous situations by using data from temperature sensors, gas sensors, and existing building fire management systems to send alerts on hazardous areas and fire conditions to a user's mobile phone.
The installed devices use this data to designate dangerous and safe zones that are mapped as blocks in the fire area. This allows evacuees to actively receive guidance to a safe escape route through high-illumination LED and a buzzer sound that avoids frequency of surrounding noise at the fire scene.
Features: Buzzer Alarm and High-Illumination LED at Fire Scene
•   Buzzer: It uses a microphone to pick up surrounding noise at the scene and emits a buzzer sound that avoids decibel and frequency of ambient noise.
•   High-Illumination LED: It emits a bright, high-illumination LED light to provide safety assurance system for the disabled, elderly and others.`,
    video: ``
  },
  {
    id: 'GP023',
    hall: 'global',
    boothNumber: '50523-24',
    name: `엘바`,
    nameEn: `ELBA`,
    category: `AI`,
    product: `유비코`,
    productEn: `YouViCo`,
    description: `Shapy AI 기반 B2B SaaS 플랫폼으로, 모든 영상 피드백을 자동화·시각화하고 멀티채널 콘텐츠 운영까지 지원하는 차세대 협업 도구`,
    website: `https://en.elbacorp.com/`,
    logo: `참가업체 로고 파일/GP_png/엘바 로고_컬러.png`,
    descriptionEn: `A B2B SaaS platform powered by Shapy AI that automates and visualizes all video feedback, while supporting multi-channel content management as a next-generation collaboration tool.`,
    video: ``
  },
  {
    id: 'GP024',
    hall: 'global',
    boothNumber: '50523-25',
    name: `이엠코어텍 주식회사`,
    nameEn: `EMCoretech Co., Ltd.`,
    category: `Embedded Technology`,
    product: `능동형 EMI 필터`,
    productEn: `ACTIVE EMI FILTER`,
    description: `자동차 산업용 능동형 EMI 필터 IC로, 신뢰성 있는 전자파 노이즈 억제를 제공하며 기존의 부피 큰 수동 필터를 대체하여 크기, 무게, 비용을 줄이고 차량의 전체 효율을 향상시킴."`,
    logo: `참가업체 로고 파일/GP_png/이엠코어텍.png`,
    website: ``,
    descriptionEn: `An Active EMI Filter IC for automotive applications that ensures reliable electromagnetic noise suppression while replacing bulky passive filters, reducing size, weight, and cost, and enhancing overall vehicle efficiency.`,
    video: ``
  },
  {
    id: 'GP025',
    hall: 'global',
    boothNumber: '50523-26',
    name: `(주)에이제이투`,
    nameEn: `AJ2 Co,. Ltd.`,
    category: `AI`,
    product: `홍채인식솔루션`,
    productEn: `Iris Recognition Solution`,
    description: `우리는 홍채인식에 적합한 카메라모듈과 IR-LED 자체적으로 개발하여 사용하므로 인식률이 높고 저렴하다. 우리의 홍채인식솔루션은 근거리, 실내용으로만 사용되는 기존 기술을 한계를 넘어 원거리, 안경착용자도 실내 및 그늘진 곳에서 홍채인식이 가능하다.
우리는 본 CES에서 놀라운 1미터에서 안경착용자도 홍채+얼굴인식이 가능한 제품을 선보일것이다. 또한 불가능한 3미터에서 안경착용자도 홍채+얼굴인식이 가능한 제품을 선보일것이다. 
1미터, 3미터 홍채인식솔루션은 전세계에 없는 기술입니다.  이 기술이 가능하게된 것은 AI기술과 우리의 광학기술의 앙상불적인 접목 때문입니다.`,
    website: `https://jtwoc.com/theme/basic/soda-html/`,
    logo: `참가업체 로고 파일/GP_png/에이제이투 로고.png`,
    descriptionEn: `Since we develop and use a camera module suitable for iris recognition and IR-LED ourselves, the recognition rate is high and inexpensive. Our iris recognition solution goes beyond the limit of existing technology used only for short-range and indoor use and enables iris recognition from a long distance, even for wearers of glasses, indoors, and in the shade.
At this CES, we will introduce products that allow eyeglasses wearers to recognize the iris + face at an amazing 1 meter. In addition, we will introduce products that allow eyeglasses wearers to recognize the iris + face at an impossible 3 meters. 
One-meter, three-meter iris recognition solution is a technology that is not available in the world. This technology is made possible because of the sheer combination of AI technology and our optical technology.`,
    video: ``
  },
  {
    id: 'GP026',
    hall: 'global',
    boothNumber: '50523-27',
    name: `엑시스트`,
    nameEn: `xitst Co.,Ltd.`,
    category: `Accessibility & AgeTech`,
    product: `베이스에이아이`,
    productEn: `baxe ai`,
    description: `Baxe AI는 누구나 사용하는 스마트폰을 시니어와 가족을 위한 비침습적 건강 모니터링 도구로 바꿔줍니다.
단 5초의 카메라 스캔만으로 심박수, 혈압, 산소포화도, 스트레스 지수를 웨어러블이나 병원 방문 없이 확인할 수 있으며, AI는 측정된 생체신호와 감정·행동 데이터를 바탕으로 맞춤형 대화형 가이던스를 제공합니다.

가족들은 이상 징후 발생 시 즉시 알림을 받아 안심할 수 있고, 시니어들은 집에서도 24시간 독립적으로 건강을 관리할 수 있습니다. 요양 시설에서 진행한 파일럿 결과, 간병인의 일일 활력징후 확인 시간이 최대 80% 단축되어 효율성과 관리 품질이 동시에 향상되었습니다.

웹 브라우저만 있으면 바로 사용할 수 있으며, 큰 버튼, 음성 안내, 원터치 실행 등 고령자 친화적 UI를 제공합니다. SK그룹, 소프트뱅크 로보틱스에서 PoC 를 진행, 몬트리올 대학교와 공동 연구 중에 있으며,  200명의 시니어 대상 시험에서 손 떨림이나 저조도 환경에서도 90% 이상 안정적으로 스캔이 이뤄졌습니다. 현재는 FDA 510(k) 인증 절차를 진행 중이며, 임상 수준의 정확도를 목표로 하고 있습니다.`,
    logo: `참가업체 로고 파일/GP_png/엑시스트.png`,
    website: ``,
    descriptionEn: `Baxe AI converts standard smartphones into non-invasive health monitoring tools for seniors and their families. Using a 5-second camera scan, it assesses heart rate, blood pressure, oxygen saturation, and stress levels without wearables or medical visits. The AI provides personalized conversational guidance based on vital signs, emotional cues, and behavioral data.

Families benefit from remote monitoring with alerts for anomalies, while seniors gain independence through 24/7 at-home tracking. Pilot studies in care facilities demonstrated up to 80% reduction in daily vital check times for caregivers, enhancing efficiency while preserving oversight.

Accessible via any smartphone browser, the app includes large buttons, voice navigation, and one-tap functionality tailored for older users. Developed in partnership with SK Group, SoftBank Robotics, and the University of Montreal, user trials with 200 seniors showed >90% scan completion rates, even in low-light conditions or with hand tremors. Ongoing FDA 510(k) clearance supports its design for clinical-grade accuracy.`,
    video: ``
  },
  {
    id: 'GP027',
    hall: 'global',
    boothNumber: '50523-28',
    name: `주식회사 에이엠시지`,
    nameEn: `AMCG Co., Ltd.`,
    category: `Digital Health`,
    product: `심자도 스캐너`,
    productEn: `MCG(Magnetocardiographs) Scanner`,
    description: `심장에서 발생하는 초미세 자기 신호를 차세대 양자센서인 초전도양자간섭소자(SQUID)로 측정하여 심장의 전기생리학적 영상을 통해 심장질환 진단정보를 제공하는 의료기기`,
    website: `http://www.amcg.kr`,
    logo: `참가업체 로고 파일/GP_png/에이엠씨지 로고.png`,
    descriptionEn: `MCG Scan is a medical system that measures bio-magnetic signals generated by the heart using a next-generation quantum sensor called a superconducting quantum interference device (SQUID) and provides diagnostic information on heart diseases through electrophysiological imaging of the heart`,
    video: ``
  },
  {
    id: 'GP028',
    hall: 'global',
    boothNumber: '50523-29',
    name: `주식회사 로웨인`,
    nameEn: `ROWAIN Inc.`,
    category: `Food & AgTech`,
    product: `텔리-챔버`,
    productEn: `TELLI-CHAMBER`,
    description: `작물의 최적의 생육 환경을 도출하는 시험 챔버로 로봇 수직농장 연동`,
    website: `https://www.rowain.com`,
    logo: `참가업체 로고 파일/GP_png/50523-29.png`,
    descriptionEn: `An AI-driven test chamber that identifies optimal crop conditions and integrates with robotic vertical farms.`,
    video: ``
  },
  {
    id: 'GP029',
    hall: 'global',
    boothNumber: '50523-30',
    name: `(주)에이스라이프`,
    nameEn: `ACELIFE CO LTD`,
    category: `Smart Cities/Smart Home`,
    product: `헬스케어 양변기`,
    productEn: `Healthcare(Diagnosis) toilet`,
    description: `100% 국내기술력을 바탕으로 개발되는 제품으로서, 변좌에서 맥박 측정 및 스마트폰 웹 연동으로, 사용자의 건강상태를 실시간으로 진단하는 제품임. (2025년 12월 개발완료 예정)`,
    logo: `참가업체 로고 파일/GP_png/(주)에이스라이프.png`,
    website: ``,
    descriptionEn: `Based 100% Korean-driven technology, one toilet which can check humane impulse after seated, operating via smart phone applications, can diagnose the  user health condition on real time basis.`,
    video: ``
  },
  {
    id: 'GP030',
    hall: 'global',
    boothNumber: '50523-31',
    name: `그로윗`,
    nameEn: `GroWith`,
    category: `Smart Cities/Smart Home`,
    product: `파도 - 수질 개선을 위한 수상 자율주행 분수 시스템`,
    productEn: `PaDO - Autonomous Floating Fountain System for Water Quality Improvement`,
    description: `PaDO는 자율주행과 실시간 센서 기술을 기반으로 수질을 모니터링하고 녹조를 예방·제거하는 친환경 솔루션입니다.
AI 기반 수질 예측 알고리즘을 통해 이상 수질 징후를 조기에 감지하여 선제적인 대응이 가능하며, 화학약품을 사용하지 않아 생태계에 부담을 주지 않습니다.
분수 기능과 LED 조명을 결합하여 수질 개선뿐 아니라 수변 공간의 미관을 향상시키며, 공원·호수·리조트·도심 수변 등 다양한 환경에서 활용할 수 있습니다.
PaDO는 지자체, 공공기관, 민간시설을 위한 스마트시티 수질 관리와 ESG 친화적 수변 관리 솔루션으로 자리매김하고 있습니다.`,
    website: `https://growith.net`,
    logo: `참가업체 로고 파일/GP_png/그로윗 로고.png`,
    descriptionEn: `PaDO is an eco-friendly autonomous floating fountain system that monitors and improves water quality while preventing and removing harmful algal blooms.
Powered by real-time water quality sensors and AI-based prediction algorithms, PaDO enables early detection of anomalies and proactive responses without the use of chemicals, ensuring sustainability and ecosystem safety.
Its integrated fountain and LED lighting features not only enhance water circulation and purification but also provide aesthetic value to waterfront areas such as parks, lakes, resorts, and urban spaces.
PaDO is positioned as a smart city solution for water management and an ESG-driven innovation for municipalities, public institutions, and private facilities worldwide.`,
    video: ``
  },
  {
    id: 'GP031',
    hall: 'global',
    boothNumber: '50523-32',
    name: `이안하이텍`,
    nameEn: `Ean Hightech Co. Ltd.`,
    category: `Digital Health`,
    product: `메드뉴로3D`,
    productEn: `MedNeuro 3D`,
    description: `AI 기반 뇌종양 분할과 3D 시각화로 진단과 수술을 보조하는 소프트웨어`,
    website: `https://newbrain4u.ai`,
    logo: `참가업체 로고 파일/GP_png/이안하이텍 로고.png`,
    descriptionEn: `AI-based brain tumor segmentation and 3D visualization software for supporting diagnosis and surgery`,
    video: ``
  },
  {
    id: 'GP032',
    hall: 'global',
    boothNumber: '50523-33',
    name: `주식회사 에이치에이치에스`,
    nameEn: `HHS Co., Ltd.`,
    category: `Digital Health`,
    product: `AIoT기반 안전관리 시스템`,
    productEn: `AIoT safety management system`,
    description: `당사의 AIoT 안전 시스템은 다중센서 복합신호 처리를 통해 산업 현장 근로자에게 끊김 없는 통합 보호를 제공합니다. 초경량 웨어러블은 뇌파(EEG), 심박수, 피부 온도, 낙상 감지를 위한 움직임 등 핵심 생체 신호를 수집하며, 내장 엣지 AI가 이를 실시간으로 융합·분석합니다. 비정상적인 생리 패턴이나 사고 위험이 감지되면 시스템은 즉시 안전관리자에게 알림을 보내고 근로자 스마트폰에 푸시 메시지를 전송합니다. 선택형 클립온 모듈은 주변 온도, 습도, 산소 농도, 유해 가스 농도를 감지해 주변 환경을 모니터링합니다. 모든 데이터는 암호화되어 저전력 무선으로 클라우드 대시보드에 전송되며, 대시보드는 이벤트를 우선순위화하고 위치를 정확히 표시하며 대응 조치를 권고해 신속한 개입과 부상 감소, 규정 준수를 돕습니다. 오픈 API를 통해 외부 시스템과 손쉽게 연동할 수 있어 보호 범위를 손쉽게 확장할 수 있습니다.`,
    logo: `참가업체 로고 파일/GP_png/주식회사 에이치에이치에스.png`,
    website: ``,
    descriptionEn: `Our AIoT safety system delivers seamless, integrated protection for industrial workers through multi-sensor composite signal processing. A lightweight wearable collects key biosignals—EEG, heart rate, skin temperature, and motion for fall detection—while embedded edge AI fuses them in real time. When abnormal physiological patterns or accident risks are detected, the system instantly alerts safety managers and sends a push notification to the worker’s smartphone. Optional clip-on modules sense ambient temperature, humidity, oxygen concentration, and hazardous-gas levels to monitor the surrounding environment. All readings are encrypted and transmitted via low-power wireless to a cloud dashboard that prioritizes events, pinpoints locations, and recommends actions, enabling rapid intervention, fewer injuries, and stronger compliance. An open API makes integration with external systems effortless, allowing protection to scale across sites.`,
    video: ``
  },
  {
    id: 'GP033',
    hall: 'global',
    boothNumber: '50523-34',
    name: `유위컴 주식회사`,
    nameEn: `UWICOM CO., LTD.`,
    category: `Digital Health`,
    product: `지니소리3`,
    productEn: `GENIESORI3`,
    description: `지니소리3는 스마트 청각 보조 솔루션 전문 스타트업 유위컴㈜이 개발한 특허 기술 기반 무선 송신기와 보청 기능 결합 방식을 적용한 차세대 청력보조기기입니다.

1. 실시간 음성 전달·증폭: 잡음이 많거나 거리가 있는 환경에서도 선명한 청취 가능

2. 무선 연결: 차세대 Bluetooth LE Audio를 적용한 이어폰·헤드셋과 자동 연동, 고령층도 간편하게 사용

3. 다양한 활용 환경: 개인 난청 보조, 상담 창구, 가정 방문 서비스 등에서도 효과적

4. 맞춤형 난청 보조: 경도~중고도 난청을 지원하는 7가지 보청 모드 탑재

현재 지니소리 시리즈는 전국 500여 개 공공기관·병원에서 상담과 소통 지원에 활용되고 있으며, 지니소리3는 이를 업그레이드한 프리미엄 청력 지원 솔루션입니다.`,
    logo: `참가업체 로고 파일/GP_png/유위컴 주식회사.png`,
    website: ``,
    descriptionEn: `GENIESORI3 is a next-generation hearing assistive device developed by UWICOM CO., LTD., a startup specializing in smart hearing-assistive solutions. It applies the company’s patented technology that combines a wireless transmitter with hearing aid functionality.

1. Real-time voice amplification & transmission: Clear listening even in noisy or distant environments.

2. Wireless connectivity: Supports next-generation Bluetooth LE Audio, automatically pairs with earphones or headsets, simple and intuitive for seniors.

3. Versatile applications: Effective for personal hearing support, consultation desks, and home-visit services.

4. Personalized hearing support: Equipped with 7 hearing modes for mild to moderately severe hearing loss.

The GENIESORI series is already being used in over 500 public institutions and hospitals across Korea to support communication and consultation. GENIESORI3 advances this success further as a premium smart hearing-assistive solution.`,
    video: ``
  },
  {
    id: 'GP034',
    hall: 'global',
    boothNumber: '50523-35',
    name: `(주) 위스메디컬`,
    nameEn: `WisMedical Co., Ltd.`,
    category: `Digital Health`,
    product: `테드림`,
    productEn: `Tedream`,
    description: `Tedream은 EEG, ECG, EMG, SpO₂, 심박수, 호흡률, 코골이, 자세 추적까지 포함해 실제 수면다원검사를 그대로 구현하는 무선 소프트 패치 시스템입니다. 젤이나 전극이 필요 없는 부드러운 웨어러블 구조로 설계되어 밤새 착용해도 편안하며, 이마나 가슴에 간단히 부착해 기존 수면무호흡증 검사실 테스트를 대체할 수 있습니다. 손목 기반 트래커와 달리 직접적인 생체 신호를 의료 등급의 정확도로 수집하며, 데이터를 스마트폰으로 무선 전송해 실시간 시각화 및 클라우드 기반 분석이 가능합니다. 또한 Qi 무선 충전과 재사용 기능을 지원해 여러 밤에 걸친 검사에도 비용 효율적으로 사용할 수 있습니다.`,
    logo: `참가업체 로고 파일/GP_png/(주) 위스메디컬.png`,
    website: ``,
    descriptionEn: `Tedream is a wireless, soft patch system that replicates a full sleep lab study including EEG, ECG, EMG, SpO₂, heart rate, respiration rate, snoring, and posture tracking in a gel-free soft wearable system. Designed for overnight comfort, Tedream replaces in-lab sleep apnea testing with an adhesive-free solution that adheres to the forehead or chest. Unlike wrist-based trackers, it collects direct biosignals with medical-grade fidelity. The system wirelessly transmits data to a smartphone for real-time visualization and cloud-based analysis. Qi wireless charging and reusability make it cost-effective for multi-night use.`,
    video: ``
  },
  {
    id: 'GP035',
    hall: 'global',
    boothNumber: '50523-36',
    name: `아날로그플러스`,
    nameEn: `analogue plus`,
    category: `Smart Cities/Smart Home`,
    product: `앵글러 알파`,
    productEn: `Angler Alpha`,
    description: `통화등이 가능한 스마트 헮세`,
    logo: `참가업체 로고 파일/GP_png/아날로그플러스.png`,
    website: ``,
    descriptionEn: `Smart Helmet for riding with communications`,
    video: ``
  },
  {
    id: 'GP036',
    hall: 'global',
    boothNumber: '50523-37',
    name: `엠피아(주)`,
    nameEn: `MPIA CO., LTD.`,
    category: `Smart Cities/Smart Home`,
    product: `자가발전 무선센서 송수신 시스템`,
    productEn: `Harvenergy™: The Zero-Maintenance, Explosion-Proof Wireless Sensor System`,
    description: `IoT와 스마트 팩토리 시대의 가장 큰 걸림돌은 센서의 '전원' 문제였습니다. 복잡한 유선 공사와 주기적인 배터리 교체는 막대한 비용과 관리 부담, 나아가 안전사고의 위험까지 야기했습니다.

Harvenergy™는 이 문제의 근원을 제거하는 혁신적인 자가발전 무선 센서 시스템입니다. 고전 물리학 이론인 페러데이 법칙을 적용 동작의 신뢰성을 확보하고, 화재의 열이나 설비의 움직임 같은 이벤트 에너지를 스스로 전력으로 변환하고, 감지된 정보를 즉시 무선으로 송신합니다.

최근 획득한 국제 방폭 인증(IECEx)은 Harvenergy™가 정유, 화학 플랜트 등 최고 위험 등급의 환경에서도 절대적으로 안전함을 증명하며, 안전을 위한 모니터링 영역을  극대화시켰습니다. Harvenergy™는 단순한 부품을 넘어, '제로-메인터넌스', '인스톨-애니웨어', '심리스-인테그레이션'을 통해 가장 진보된 IoT 인프라를 완성하는 궁극의 솔루션입니다.`,
    website: `http://mpiatek.com/en/`,
    logo: `참가업체 로고 파일/GP_png/엠피아 로고.png`,
    descriptionEn: `The full potential of the IoT and Smart Factory era has long been constrained by a single, fundamental obstacle: power. Complex wiring demands significant capital and time, while battery-powered sensors create constant operational overhead and serious safety risks during periodic replacements.

Harvenergy™ is a revolutionary self-powered wireless sensor system designed to eliminate this core problem. Based on Faraday's Law, it uniquely converts event-based energy—like the thermal energy from a fire or the kinetic energy from equipment—into its own electrical power and instantly transmits sensor data wirelessly.

With its recent IECEx international explosion-proof certification, Harvenergy™ is proven to be absolutely safe in the highest-risk environments, such as oil refineries and chemical plants. This makes it possible to monitor previously unreachable frontiers of industrial safety. More than just a component, Harvenergy™ is the ultimate infrastructure solution, delivering on the promise of truly advanced IoT with its core principles: Zero-Maintenance, Install-Anywhere, and Seamless-Integration.`,
    video: ``
  },
  {
    id: 'GP037',
    hall: 'global',
    boothNumber: '50523-38',
    name: `(주)유로`,
    nameEn: `EURO corporation`,
    category: `Lifestyle`,
    product: `블랙캔3`,
    productEn: `BLACKCAN3`,
    description: `아웃도어용 자체발전 온수버너 및 온수매트, 화이트 가솔린을 연료로 자체발전을 함. 자체발전 전기로 온수순환펌프, 연료탱크 압력 유지, USB-A port를 활용한 핸드폰 충전이나 조명 사용 가능`,
    logo: `참가업체 로고 파일/GP_png/(주)유로.png`,
    website: ``,
    descriptionEn: `Outdoor smart boiler & water warming pad. It using white gasoline fuel. With its self-power generation can operate hot water circulation pump, maintain tank pressure, and even use a USB-A port.`,
    video: ``
  },
  {
    id: 'GP038',
    hall: 'global',
    boothNumber: '50523-39',
    name: `주식회사 네오솔`,
    nameEn: `NeoSolutions Co.,Ltd`,
    category: `Sustainability & Energy`,
    product: `유니콘 윈드 터바인`,
    productEn: `영    문 Unicorn Wind Turbine`,
    description: `자사의 풍력 블레이드는 4방향 대칭 나선형 일체형 구조와 EPP 소재를 적용해 회전 저항을 줄이고 에너지 효율을 극대화 하였습니다. 풍속 0.5m/s 이하에서도 작동을 시작하며 회전시 소음을 40dB 이하로 감소시켜 저풍속 뿐만 아니라 높은 풍속 환경에서도 뛰어난 성능을 제공합니다. 발전기를 블레이드 하부 내측에 배치하는 설계로 외기로부터의 보호를 통한 내구성을 강화하여 다양한 사이트에 적용 가능 하도록 설계 하였습니다.`,
    website: `https://www.neosol-nrg.com/`,
    logo: `참가업체 로고 파일/GP_png/네오솔.png`,
    descriptionEn: `Our wind turbine blades incorporate a four-directional symmetrical helical integrated structure and EPP material, reducing rotational resistance and maximizing energy efficiency. They start operating in wind speeds as low as 0.5 m/s and minimize noise to under 40dB during rotation, ensuring excellent performance in both low and high wind-speed environments. The generator is positioned inside the lower part of the blade to enhance durability through external air protection, making it suitable for various installation sites.`,
    video: ``
  },
  {
    id: 'GP039',
    hall: 'global',
    boothNumber: '50523-40',
    name: `제이이노텍`,
    nameEn: `J-innotech`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `SACR-GuardMate (Safety Assist Carrier Robot)`,
    productEn: `SACR-GuardMate (Safety Assist Carrier Robot)`,
    description: `SACR-GuardMate는 공사 현장의 안전을 혁신적으로 강화하기 위해 개발된 안전 보조 캐리어 로봇입니다. 
 센서와 카메라로 작업자의 생체 신호와 행동을 실시간 분석하고, 보통·경고·위험 단계로 분류합니다. 분류된 단계에 따라 경고·위험 단계는 선제적 대응을 가능하게 합니다. 
 맨홀·탱크 등 밀폐 공간 작업에서 작업자를 추종하며, 작업자의 질식 상황을 실시간 확인 및 지휘소에 전송합니다. 
  내장된 통신 허브는 음영 지역에서도 안정적 연결을 보장하며, 필요 시 중계 기지국 역할을 수행합니다. 
  SACR-GuardMate는 작업자 모니터링, 통신 및 긴급 지원을 통합하여 현장 안전 시스템을 반응형 프레임워크에서 사전 예방 프레임워크로 전환합니다.`,
    website: `http://www.j-innotech.com/en/ahv`,
    logo: `참가업체 로고 파일/GP_png/50523-40.png`,
    descriptionEn: `SACR-GuardMate is an intelligent safety-assist carrier robot designed to dramatically enhance safety on construction sites.

Using integrated sensors and cameras, it continuously analyzes workers’ vital signs and behavior in real time, classifying their status into Normal, Warning, or Danger levels. This allows for proactive intervention in warning and danger situations.

In confined space environments such as manholes and tanks, SACR-GuardMate autonomously follows the worker, monitoring oxygen levels and movement. It can detect potential suffocation in real time and instantly alert the control center.

The built-in communication hub ensures stable connectivity even in dead zones, and can function as a mobile relay station when needed.

By integrating worker monitoring, communication, and emergency support, SACR-GuardMate transforms traditional reactive safety systems into a preventive and proactive safety framework.`,
    video: ``
  },
  {
    id: 'GP040',
    hall: 'global',
    boothNumber: '50523-41',
    name: `(주)이노베이스`,
    nameEn: `Innobase Co., Ltd.`,
    category: `Mobile Devices, Accessories Apps`,
    product: `Safe-T3`,
    productEn: `Safe-T3`,
    description: `1. Safe-T3는 운전자 안전과 친환경 운행을 동시에 실현하는 AI 기반 차량관제 플랫폼입니다. 실시간 위치 추적, 경로 재생, 공회전 및 충격 감지 등의 기본 기능을 제공합니다.
2.  특히 운전대에 내장된 생체신호 센서를 통해 심박수와 스트레스 지수를 수집하고, AI가 이를 분석해 졸음, 저혈당, 미주신경성 실신 등의 징후를 조기에 감지함으로써 사고를 사전에 예방합니다.`,
    website: `https://www.innobase1.com/`,
    logo: `참가업체 로고 파일/GP_png/(주)이노베이스.png`,
    descriptionEn: `1. Safe-T3 is an AI-powered fleet platform that promotes driver safety and eco-friendly driving. It features real-time tracking, route playback, and monitoring of idling and impact.
2. Biometric sensors embedded in the steering wheel collect heart rate and stress levels. The AI analyzes this data to detect early signs of drowsiness, hypoglycemia, or vasovagal syncope, helping prevent accidents.`,
    video: ``
  },
  {
    id: 'GP041',
    hall: 'global',
    boothNumber: '50523-42',
    name: `주식회사 슈올즈`,
    nameEn: `Shoealls Co., Ltd.`,
    category: `Digital Health`,
    product: `자가발전 GPS 스마트신발`,
    productEn: `GPS Smart Shoes with self-generator`,
    description: `자가발전 중창이 장착된 신발은 사용자가 걸을 때 발생하는 압력과 그 압력에 의한 복원력을 활용하여 전력을 생산합니다.
넘어지거나 무너져 신발 각도가 일정 수준 이상 기울어지면 사용자의 위치와 APP가 보호자에게 전송됩니다.
치매 환자 배회, 납치 및 유괴, 아동 실종 등의 사고 예방에 매우 유용합니다.
일정 시간(24시간) 동안 신발을 착용하지 않으면 보호자에게 알림을 전송합니다.`,
    logo: `참가업체 로고 파일/GP_png/주식회사 슈올즈.png`,
    website: ``,
    descriptionEn: `Power is generated by utilizing the pressure created when the user walks wearing the shoes installed with a self-generating midsole, and the restoring force from that pressure.
If the shoe angle tilts to a certain extent due to falling over or collapsing, the user’s location is sent to the guardian along with a APP
High utility for preventing accidents such as dementia patients wandering, kidnappings and abductions, missing children, etc.
Sends notification to guardian if shoes are not worn for a certain period of time (24 hours).`,
    video: ``
  },
  {
    id: 'GP042',
    hall: 'global',
    boothNumber: '50523-43',
    name: `만드로 주식회사`,
    nameEn: `Mand.ro Co. Ltd.`,
    category: `Accessibility & AgeTech`,
    product: `만드로 마크 7X`,
    productEn: `Mand.ro Mark 7X`,
    description: `만드로 마크7X는 상지 절단장애인을 위한 로봇 의수로, 사람의 손 길이 (20 cm) 이내에 전동식 2자유도 손목 코킹 및 스냅 기능 및 손바닥 내 압력 센서를 내장한 제품임. 이를 통해 절단장애인의 일상 생활에서의 불편함을 완화하고 보다 자연스러운 의수의 활용이 가능하게 함.`,
    website: `https://mand.ro`,
    logo: `참가업체 로고 파일/GP_png/만드로 로고.png`,
    descriptionEn: `Conventional prosthetic hands often lack wrist articulation or exceed human anatomical proportions, limiting both usability and comfort.
Mand.ro Mark 7X addresses this by integrating two degrees of wrist motion—cocking and snap—within a total length of 20 cm, corresponding to the average human hand. The device also features a soft pressure sensor embedded in the palm, enabling intuitive object interaction. Designed for users with below-elbow amputations, Mark 7X provides more natural and accessible upper-limb functionality in daily life.`,
    video: ``
  },
  {
    id: 'GP043',
    hall: 'global',
    boothNumber: '50523-44',
    name: `(주)세펙트`,
    nameEn: `Safect Co., Ltd.`,
    category: `Industrial Equipment & Machinery`,
    product: `안전 도어 스위치 / TLS Series`,
    productEn: `Safety Door Switch / TLS Series`,
    description: `산업용 도어 스위치로, SIL3, PLe, Cat4 등의 기준을 충족하는 안전 제품`,
    website: `http://www.safect.co.kr/eng`,
    logo: `참가업체 로고 파일/EP_png/세펙트 로고.png`,
    descriptionEn: `Industrial Safety Door Switch with Interlock certified as SIL3, PLe, Cat4`,
    video: ``
  },
  {
    id: 'GP044',
    hall: 'global',
    boothNumber: '50523-45',
    name: `미래SMT`,
    nameEn: `miraeSMT`,
    category: `Smart Cities/Smart Home`,
    product: `키인스마트도어락`,
    productEn: `Keyin smart locks`,
    description: `특허받은 기술로 손쉽게 문을 열고 안전하고 스마트하게 문을 단속합니다`,
    website: `https://miraesmt.com/`,
    logo: `참가업체 로고 파일/GP_png/미래SMT 로고.png`,
    descriptionEn: `Patented technology makes it easy to open doors and crack down on doors safely and smartly`,
    video: ``
  },
  {
    id: 'GP045',
    hall: 'global',
    boothNumber: '50523-46',
    name: `에이엘로봇`,
    nameEn: `AL.Robot, Co., Ltd.`,
    category: `Robotics`,
    product: `서피스 프로 솔루션: 표면 처리 전문 솔루션`,
    productEn: `Surface Pro Solution`,
    description: `표면 처리 전문 솔루션, 'Surface Pro 솔루션'은 로봇 팔 끝에 장착되어 디버링, 샌딩, 폴리싱 등 표면 마감 공정을 자동화하는 EOAT 솔루션입니다.
능동형 컴플라이언스 구조와 6축 힘/토크 센서를 기반으로 정밀 제어 기능을 통합하여, 작업자의 경험과 숙련도에 의존하던 반복 작업을 정량적이고 일관된 높은 품질로 자동화할 수 있습니다.`,
    logo: `참가업체 로고 파일/EP_png/이노베이스로고.png`,
    website: ``,
    descriptionEn: `The Surface Pro Solution is an EOAT (End-of-Arm Tooling) system mounted on a robot arm to automate surface finishing processes such as deburring, sanding, and polishing.
By integrating an active compliance mechanism with a six-axis force/torque sensor, it provides precise control functions that transform repetitive tasks—once dependent on operator experience and skill—into quantifiable, consistent, and high-quality automated processes.`,
    video: ``
  },
  {
    id: 'GP046',
    hall: 'global',
    boothNumber: '50523-47',
    name: `써모아이(주)`,
    nameEn: `Thermoeye Inc.`,
    category: `Industrial Equipment & Machinery`,
    product: `TMC ARGOS`,
    productEn: `TMC ARGOS`,
    description: `TMC ARGOS는 열화상 및 가시광선 영상을 융합하여 블랙 아이스나 화재 위험과 같은 위험 요소를 감지하는 AI 기반 비전 시스템입니다. 실시간 분석, ±2°C 정확도, 그리고 모든 기상 조건에서의 신뢰성을 바탕으로 차량의 안전성과 인지 능력을 향상시킵니다.`,
    website: `http://www.thermoeye.co.kr/`,
    logo: `참가업체 로고 파일/GP_png/써모아이 로고.png`,
    descriptionEn: `TMC ARGOS is an AI-powered vision system that fuses thermal and visible imaging to detect hazards like black ice and fire risks. With real-time analysis, ±2°C accuracy, and all-weather reliability, it boosts safety and perception for vehicles.`,
    video: ``
  },
  {
    id: 'GP047',
    hall: 'global',
    boothNumber: '50523-48',
    name: `주식회사 딥히어링`,
    nameEn: `Deep Hearing Corp.`,
    category: `AI`,
    product: `AI 보청기`,
    productEn: `True AI Hearing Aids`,
    description: `AI를 통해 사람 목소리만 증폭되고 소음은 증폭되지 않는 보청기`,
    website: `https://deephearing.com`,
    logo: `참가업체 로고 파일/GP_png/주식회사 딥히어링 로고_컬러.png`,
    descriptionEn: `A hearing aid that amplifies only human voices through AI, without boosting background noise`,
    video: ``
  },
  {
    id: 'GP048',
    hall: 'global',
    boothNumber: '50523-49',
    name: `주식회사 지로보틱스`,
    nameEn: `G-robotics`,
    category: `Industrial Equipment & Machinery`,
    product: `로봇 자동화 시스템`,
    productEn: `robotic automation system`,
    description: `로봇 자동화 시스템 구축`,
    website: `https://gr-fa.kr/`,
    logo: `참가업체 로고 파일/GP_png/지로보틱스 로고.png`,
    descriptionEn: `Building a Robot Automation System`,
    video: ``
  },
  {
    id: 'GP049',
    hall: 'global',
    boothNumber: '50523-50',
    name: `주식회사 아라`,
    nameEn: `ARA`,
    category: `Robotics`,
    product: `로봇 자동화 시스템`,
    productEn: `robot automation system`,
    description: `로봇 자동화 시스템`,
    logo: `참가업체 로고 파일/GP_png/아라.png`,
    website: ``,
    descriptionEn: `robot automation system`,
    video: ``
  },
  {
    id: 'GP050',
    hall: 'global',
    boothNumber: '50523-51',
    name: `(주)초이스테크놀로지`,
    nameEn: `Chois Technology Co., Ltd.`,
    category: `Digital Health`,
    product: `써모세이퍼`,
    productEn: `Thermosafer`,
    description: `써모세이퍼 XST600은 열유속 기반의 센서 기술과 BLE 5.2 무선 통신을 활용하여 ±0.2°C의 정밀도로 심부체온(Core Body Temperature)을 비침습적으로 측정하는 웨어러블 모니터링 심부 체온계입니다. 초경량(8g)설계로 본체와 일회용 프로브 구조로 병원과 가정에서 모두 위생적이고 편리하게 사용 가능하며, 전용 게이트웨이 또는 모바일 앱과 실시간 연동됩니다. 감염병 대응, 수술 중/후 환자 모니터링, 고위험군의 재택 관리 등 다양한 환경에서 연속적인 체온 데이터를 제공합니다.`,
    website: `http://www.thermosafer.com`,
    logo: `참가업체 로고 파일/EP_png/(주)초이테크놀로지 로고_컬러.png`,
    descriptionEn: `ThermoSafer XST600 is a wearable digital thermometer that non-invasively measures core body temperature (CBT) with ±0.2°C accuracy using proprietary heat-flux sensor technology and BLE 5.2 wireless communication. Its ultra-light (8g)design, main body and disposable probe ensure hygienic and convenient use in both clinical and home settings. It seamlessly integrates with mobile apps or hospital monitors via a dedicated gateway, enabling continuous temperature monitoring for infection control, perioperative care, and home-based management of high-risk individuals.`,
    video: ``
  },
  {
    id: 'GP051',
    hall: 'global',
    boothNumber: '50523-52',
    name: `(주)다누시스`,
    nameEn: `DANUSYS`,
    category: `AI`,
    product: `영상감시장치(AI VMS)`,
    productEn: `CCTV VIDEO SURVEILLANCE SYSTEM(AI VM0S)`,
    description: `기존 VMS(Video Management System)에 AI기능을 추가된 AI VMS`,
    logo: `참가업체 로고 파일/GP_png/다누시스.png`,
    website: ``,
    descriptionEn: `AI VMS with AI added to existing VMS`,
    video: ``
  },
  {
    id: 'GP052',
    hall: 'global',
    boothNumber: '50523-53',
    name: `주식회사 지피`,
    nameEn: `GP Co., Ltd.`,
    category: `Digital Health`,
    product: `GP Growth Map AI`,
    productEn: `GP Growth Map AI`,
    description: `AI·빅데이터 기반 성장 및 질환 예측 소프트웨어`,
    website: `http://www.gpcohort.com`,
    logo: `참가업체 로고 파일/GP_png/주식회사 지피 로고.png`,
    descriptionEn: `AI and big data-based growth and disease prediction software`,
    video: ``
  },
  {
    id: 'GP053',
    hall: 'global',
    boothNumber: '50523-54',
    name: `주식회사 폼이즈`,
    nameEn: `FORMiS Co.,Ltd.`,
    category: `Smart Cities/Smart Home`,
    product: `실시간 콘크리트 단위수량 모니터링 시스템`,
    productEn: `RCWM-Real-time Concrete unit Water Monitoring System`,
    description: `스마트 콘크리트 품질관리의 새로운 기준
RCWM은 생콘크리트 단위수량을 실시간으로 측정하고 관리할 수 있는 IoT 기반 품질관리 시스템입니다. 콘크리트의 품질을 결정하는 핵심 요소인 W/C(물-시멘트 비율)를 정확히 모니터링하여, 구조물의 안전성과 내구성을 확보하는 동시에 시공 효율성을 높여줍니다. RCWM은 현장의 콘크리트 품질을 향상시켜 구조물의 강도와 내구성을 강화합니다. 불량 콘크리트 발생과 재작업을 최소화하여 비용 절감을 가능하게 하고, 현장 관리자가 신속하게 의사결정을 내릴 수 있도록 지원해 공정 효율성을 높입니다. 또한 불필요한 자원 낭비와 콘크리트 폐기물을 줄여 ESG 경영을 실현할 수 있습니다.`,
    website: `http://www.formis.kr`,
    logo: `참가업체 로고 파일/GP_png/폼이즈로고.png`,
    descriptionEn: `RCWM : Real-time Concrete unit Water Monitoring System
A New Standard for Smart Concrete Quality Management
RCWM is an IoT-based quality management system that enables real-time measurement and control of unit water content in fresh concrete. By accurately monitoring the critical W/C (Water-to-Cement ratio), RCWM ensures structural safety, durability, and improved construction efficiency.`,
    video: ``
  },
  {
    id: 'GP054',
    hall: 'global',
    boothNumber: '50523-55',
    name: `주식회사 디밀리언`,
    nameEn: `Dmillions Co.,Ltd.`,
    category: `AI`,
    product: `플렉시봇`,
    productEn: `FLEXIBOT`,
    description: `RMF(Robotics Foundation Model)과 AI Agent 기술을 결합한 차세대 모바일 매니퓰레이터입니다. 제조 현장에서 공정 간 이동·작업·정밀제어를 스스로 수행하며, 초개인화 시대의 다품종 소량생산(HMLV) 환경에서 유연성·정밀성·자율성을 동시에 구현하는 지능형 로봇 오퍼레이션 시스템을 제공합니다.`,
    website: `https://dmillions.com/`,
    logo: `참가업체 로고 파일/GP_png/디밀리언.png`,
    descriptionEn: `It is a next-generation mobile manipulator that combines RMF (Robotics Foundation Model) with AI Agent technology. In manufacturing sites, it autonomously performs inter-process transportation, operations, and precision control, providing an intelligent robotic operation system that simultaneously achieves flexibility, precision, and autonomy in the era of hyper-personalized high-mix, low-volume (HMLV) production.`,
    video: ``
  },
  {
    id: 'GP055',
    hall: 'global',
    boothNumber: '50523-56',
    name: `주식회사 사이언홀딩스`,
    nameEn: `CYAN HOLDINGS`,
    category: `Smart Cities/Smart Home`,
    product: `태양광 IoT 기반 2차 사고 예방 유도 장치`,
    productEn: `Solar IOT secondary accident prevention delineator`,
    description: `주행 중인 차량의 속도를 감지하여 제한속도 대비 위험 상황일 경우, 경고 표지 표시를 통해 운전자에게 즉각적으로 알리는 장치입니다.
또한 차량의 제동거리를 계산해 정지 가능 거리 이전에 전방 위험 상황을 사전에 안내함으로써, 사고 및 2차 사고를 예방합니다.`,
    website: ``,
    logo: `참가업체 로고 파일/GP_png/CYANHOLDINGS.png`,
    descriptionEn: `A device that detects the speed of a vehicle in progress and alerts the driver by displaying a danger sign if it is below the speed limit.
It also calculates the braking distance and notifies the driver of the danger ahead before the stopping distance to prevent accidents.`,
    video: ``
  },
  {
    id: 'GP056',
    hall: 'global',
    boothNumber: '50523-57',
    name: `(주)한국나노오트`,
    nameEn: `Korea Nano Ot Co., Ltd`,
    category: `Human Security for Al`,
    product: `3D 종이 기반 미세유체 경로 진단키트`,
    productEn: `3D Paper-Based Microfluidic Diagnostic Kit`,
    description: `3D 종이 기반 진단키트는 LFA의 간편함과 저비용을 유지하면서 PCR 수준의 정확도를 제공합니다. 3차원 미세유체 채널과 균일한 금 나노입자를 활용해 더 빠르고 신뢰할 수 있는 결과를 제공하며, 감염 초기 누락과 오진을 줄여줍니다.`,
    website: `https://enanot.imweb.me/`,
    logo: `참가업체 로고 파일/EP_png/나노오트 로고.png`,
    descriptionEn: `3D paper-based diagnostic kit combines the simplicity and low cost of LFA with PCR-like accuracy. Using 3D microfluidic channels and uniform gold nanoparticles, it delivers faster, more reliable results, reducing missed early infections and false outcomes`,
    video: ``
  },
  {
    id: 'GP057',
    hall: 'global',
    boothNumber: '50523-58',
    name: `(주)퀀텀캣`,
    nameEn: `QuantumCat Co., Ltd.`,
    category: `Human Security for Al`,
    product: `플루오캣`,
    productEn: `Fluo-Cat`,
    description: `Fluo-Cat은 반도체 및 태양광 제조 공정에서 많이 배출되는 고온난화지수(GWP)가 높은 불소계 온실가스(F-gases) — CF₄, NF₃, SF₆, N₂O — 를 분해하기 위해 설계된 차세대 촉매입니다. 650–750 °C의 온도에서 작동하며, NOₓ 부산물을 생성하지 않으면서 98% 이상의 분해 및 제거 효율(DRE)을 달성합니다. 기존의 플라즈마 시스템과 달리, Fluo-Cat은 에너지 소비를 최대 70%까지 줄여 지속 가능하고 비용 효율적인 대안을 제공합니다. 내구성이 뛰어난 구조로 설계되어, 혹독한 산업 환경에서도 6개월 이상 안정적인 성능을 유지합니다. 국소 배기(point-of-use) 시스템과 중앙 집약식 처리 시스템 모두에 적용 가능하여, 첨단 전자, 반도체 칩, 디스플레이 제조업체들이 엄격한 탄소 배출 규제를 준수하면서도 운영 비용을 절감할 수 있도록 지원합니다. 소비자 전자 산업이 친환경 생산으로 나아가는 흐름 속에서, Fluo-Cat은 차세대 제조 생태계 전반에 걸친 환경 친화적 혁신을 가능하게 하는 핵심 솔루션입니다.`,
    logo: `참가업체 로고 파일/GP_png/퀀텀캣 로고.png`,
    website: ``,
    descriptionEn: `Fluo-Cat is a next-generation catalyst designed to decompose high-GWP fluorinated greenhouse gases (F-gases) such as CF₄, NF₃, SF₆, and N₂O, widely emitted during semiconductor and photovoltaic manufacturing. Operating at 650–750 °C, it achieves over 98% destruction and removal efficiency (DRE) without generating NOₓ byproducts. Unlike conventional plasma systems, Fluo-Cat reduces energy consumption by up to 70%, offering a sustainable and cost-effective alternative. Its durable structure ensures stable performance for over six months under demanding industrial conditions. Compatible with both point-of-use and centralized abatement systems, Fluo-Cat helps manufacturers of advanced electronics, chips, and display technologies meet stringent carbon emission regulations while lowering operational costs. As the consumer electronics industry moves toward greener production, Fluo-Cat plays a vital role in enabling environmentally responsible innovation across next-generation manufacturing ecosystems.`,
    video: ``
  },
  {
    id: 'GP058',
    hall: 'global',
    boothNumber: '50523-59',
    name: `(주)에이유`,
    nameEn: `AU Inc.`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `자율주행차량용 사이드 레이더 센서`,
    productEn: `Side Radar Sensor for Autonomous Mobility`,
    description: `하나의 소형 모듈만으로 차량 측면 전체를 인식하며 근거리 탐지를 통해 주행 중의 빠르게 움직이는 객체, 좁은 주차 공간에서의 장애물, 정차 시 발생할 수 있는 경미한 충돌까지 감지합니다. 또한 기존 시스템이 취약한 상황에서도 지속적인 모니터링을 보장합니다. 보호되지 않았던 영역까지 인식 범위를 확장함으로써, 이 기술은 종합적인 측면 안전의 새로운 시대를 열어갑니다. 이는 자율 모빌리티의 운행 안전성을 근본적으로 향상시킬 가능성을 보여주며, 사용자에게 안심과 실제적인 신뢰성을 동시에 제공합니다.`,
    website: `http://www.au-sensor.com`,
    logo: `참가업체 로고 파일/EP_png/에이유 로고.png`,
    descriptionEn: `A single compact module provides full-side awareness with close-range detection, capturing fast-moving objects during driving, obstacles in tight parking spaces, and minor collisions while stationary. This sensor ensures continuous monitoring even where conventional systems fall short. By extending awareness to previously unprotected areas, this technology previews a new era of comprehensive side safety. It demonstrates the potential to fundamentally enhance the operational safety of autonomous mobility, delivering both peace of mind and real-world reliability.`,
    video: ``
  },
  {
    id: 'GP059',
    hall: 'global',
    boothNumber: '50523-60',
    name: `주식회사 리베스트`,
    nameEn: `LiBEST Inc.`,
    category: `Sustainability & Energy`,
    product: `Artenix™ AI`,
    productEn: `Artenix™ AI`,
    description: `Artenix™ AI는 AI 반도체 제조용 웨이퍼 레벨 센서에 최적화된 차세대 초박형 배터리입니다.
고진공(1mTorr), 급격한 열 사이클, 강한 전자기 간섭 등 극한 환경에서도 안정적으로 작동하며, 탁월한 표면 평탄도를 통해 포토리소그래피 및 식각 정밀도에 영향을 주지 않습니다.`,
    website: `http://www.libest.co`,
    logo: `참가업체 로고 파일/GP_png/(주)리베스트 로고_컬러.png`,
    descriptionEn: `Artenix AI is an ultra-thin next-generation battery designed for wafer-level sensors in AI semiconductor manufacturing.
It operates reliably under extreme conditions—including high vacuum (1mTorr), rapid thermal cycling, and strong electromagnetic interference—while maintaining exceptional surface flatness to avoid impacting photolithography or etching accuracy.`,
    video: ``
  },
  {
    id: 'GP060',
    hall: 'global',
    boothNumber: '50523-61',
    name: `주식회사 브이스페이스`,
    nameEn: `V-SPACE`,
    category: `Vehicle Tech & Advanced Mobility`,
    product: `VS-300(브이에스300)`,
    productEn: `VS-300`,
    description: `VS-300은 국내 최초 형식증명 시제기로, 순수 전기 추진 기반의 eVTOL입니다. 3인승 유인 항공기로 설계되었으며, Lift & Cruise 방식의 고정익 기반 고효율 항공역학 구조를 갖추고 있습니다. 미래 모빌리티 플랫폼으로, 대형 화물 운송, 긴급 물류 지원, 재난 지역 보급 및 구조, 산업 시설 점검 등 광범위한 임무 수행을 위해 설계된 범용 도심 모빌리티 솔루션 입니다.`,
    website: `http://www.vspacecompany.com`,
    logo: `참가업체 로고 파일/GP_png/브이스페이스_로고.png`,
    descriptionEn: `VS-300 is South Korea's first prototype to receive type certification (TC) and is a pure electric propulsion-based eVTOL. It is designed as a three-seat manned aircraft with a Lift & Cruise type high-efficiency fixed-wing aerodynamic structure. Additionally, it serves as a future mobility platform. The aircraft is designed as a versatile urban mobility solution capable of performing a wide range of missions, including large cargo transport, urgent logistics support, disaster area supply and rescue, and industrial facility inspection.`,
    video: ``
  },
  {
    id: 'GP061',
    hall: 'global',
    boothNumber: '50523-62',
    name: `(주)메디셀헬스케어`,
    nameEn: `Medicell Healthcare`,
    category: `Beauty & Personal Care`,
    product: `AI Mycosis Prime`,
    productEn: `AI Mycosis Prime`,
    description: `AI 기반 손톱,발톱 레이저 조사기 : 405nm, 635nm 레이저를 활용한 의료기기`,
    logo: `참가업체 로고 파일/GP_png/(주)메디셀헬스케어.png`,
    website: ``,
    descriptionEn: `AI Based Nail Fungus Treatment Laser Medical device : 405nm, 635nm lasers are available`,
    video: ``
  },
  {
    id: 'GP062',
    hall: 'global',
    boothNumber: '50523-63',
    name: `한국조명 주식회사`,
    nameEn: `KOREA Lighting Inc.`,
    category: `Digital Health`,
    product: `뉴럴럭스 – 뇌 혈류 개선과 인지 건강을 위한 테라피 조명`,
    productEn: `Neurélux – Therapeutic Lighting for Brain Circulation & Cognitive Wellness`,
    description: `뉴럴럭스(Neurélux)**는 뇌 건강을 위한 스마트 테라피 조명입니다.
810nm와 1064nm 이중 근적외선 파장을 활용해 뇌 혈류를 개선하고 세포의 미토콘드리아 활동을 지원하여 기억력, 집중력, 인지 기능 유지에 도움을 줍니다.
특허받은 반도체 방열 기술로 안정적인 파장과 안전성을 확보했으며, 일상적인 조명과 뇌 테라피를 하나로 결합해 집에서 간편하게 예방적 두뇌 관리가 가능합니다.`,
    website: `https://KOREALighting.kr`,
    logo: `참가업체 로고 파일/EP_png/한국조명 주식회사 로고.png`,
    descriptionEn: `Neurélux is a smart therapeutic lighting device for brain wellness.
It utilizes dual near-infrared wavelengths (810nm & 1064nm) to enhance cerebral blood flow and support mitochondrial activity in brain cells, helping maintain memory, focus, and cognitive function.
With patented semiconductor heat-dissipation technology, it ensures stable wavelength delivery and safety. By integrating everyday desk lighting with brain therapy, Neurélux makes preventive brain care convenient at home.`,
    video: ``
  },
  {
    id: 'GP063',
    hall: 'global',
    boothNumber: '50523-64',
    name: `범일산업(주)`,
    nameEn: `BUMIL INDUSTRIAL CO., LTD.`,
    category: `Food & AgTech`,
    product: `인덕션 정수조리기`,
    productEn: `IH WATER PURIFIER COOKER`,
    description: `정수기+전기포트+인덕션렌지가 하나로 구성한 융복합 멀티제품으로 '1인 가구 증가'와 '셀프무인화'트랜드에 부합하고 정수된 깨끗한 물을 이용해서 빠른 조리가 가능, 해외 여러 국가에서 호평을 받고 있으며 세계 최초의 융복합 조리기`,
    website: `https://en.hauscook.com`,
    logo: `참가업체 로고 파일/GP_png/범일산업 로고.png`,
    descriptionEn: `It is a convergence multi-product composed of water purifier, electric port, and induction range, which meets the trend of "increasing single-person households" and "self-unmanned" and allows quick cooking using purified clean water, and is well received in many countries abroad, and is the world's first convergence cooker`,
    video: ``
  },
  {
    id: 'GP064',
    hall: 'global',
    boothNumber: '50523-65',
    name: `주식회사 애드`,
    nameEn: `ADDD Co., Ltd.`,
    category: `AI`,
    product: `애드아이`,
    productEn: `addd-i`,
    description: `옥외광고가 정밀성과 측정 가능성을 갖춘 새로운 시대에 진입하고 있습니다. 기존의 옥외광고는 무작위 노출에 의존하여 타겟팅 한계가 뚜렷했지만, 당사 솔루션 애드아이는 이를 근본적으로 혁신합니다.

고도화된 카메라 및 영상 분석 기술을 통해 디지털 사이니지 앞의 실제 관람객을 분석하고, 성별·연령별로 광고를 실시간 매칭함으로써 온라인 플랫폼(예: 유튜브)이 이용자 기반 타겟팅으로 다섯 배 성장을 이룬 것처럼 옥외 매체 또한 정밀 타겟팅을 실현할 수 있습니다.

또한 시선 추적을 통해 실제 광고 주목도를 측정함으로써 신뢰성 높은 성과 데이터를 제공합니다. 이를 바탕으로 광고주는 캠페인을 최적화하고, 콘텐츠를 재설계하며, 광고 전략을 실제 데이터 기반으로 개선할 수 있습니다.

정적인 옥외광고를 적응형·데이터 기반 플랫폼으로 전환함으로써, 오프라인 미디어를 디지털 광고의 정밀성과 연결합니다. 실시간 분석과 동적 송출을 통해 광고 효과를 극대화하고, 관람객과의 적합성을 높이며, 전 세계적으로 새로운 수익 기회를 창출합니다.`,
    logo: `참가업체 로고 파일/GP_png/주식회사 애드.png`,
    website: ``,
    descriptionEn: `Outdoor advertising is entering a new era of precision and measurability. Traditionally, campaigns relied on random exposure with limited targeting capabilities. Our solution 'addd-i' transforms this paradigm by leveraging advanced camera and video analytics to evaluate audiences directly in front of digital signage.

Through real-time detection of gender and age, ads are dynamically matched to viewers, enabling outdoor media to achieve the same audience-specific targeting that has fueled the fivefold growth of online platforms such as YouTube.

Beyond demographic targeting, our technology tracks viewers’ eye gaze to measure true engagement with the ad. These insights generate accurate performance metrics for advertisers, empowering them to optimize campaigns, redesign creative content, and refine strategies based on verified, real-world data.

By converting static signage into adaptive, data-driven platforms, our solution seamlessly bridges offline media with the precision of digital advertising. With real-time analytics and dynamic content delivery, we maximize advertising impact, enhance audience relevance, and unlock new revenue opportunities across global markets`,
    video: ``
  },
  {
    id: 'GP065',
    hall: 'global',
    boothNumber: '50523-66',
    name: `(주)에스엘엠`,
    nameEn: `SLM GLOBAL`,
    category: `Robotics`,
    product: `그루밍 로봇`,
    productEn: `CHIRO-GR Underwater Hull Grooming robot system`,
    description: `도막 손상 없이 선체를 청소하는 그루밍 로봇`,
    logo: `참가업체 로고 파일/GP_png/(주)에스엘엠.png`,
    website: ``,
    descriptionEn: `CHIRO Grooming is a underwater hull cleaning robot to perform ‘Proactive hull cleaning’. Designed for operating at berthing or anchoring, it targets cleaning of early-stage biofouling (under FR30) without damaging the valuable protective and anti-fouling coatings.
Adhering to and running on the underwater part of hull by three magnetized wheels, the robot ensures precise movement and cleaning which is user-friendly and efficient. The robot can clean frequently without divers among whom we lose more than 10 lives each year during hull cleanings.
Keeping ‘clean hull’ is critical in preventing invasive marine organisms from spreading, in saving fuel consumption and then carbon emissions. Vessels can stay compliant with biofouling regulations which can prohibit ships from entering harbor, if not compliant.
This eco-friendly and business-friendly solution eliminates the risks and uncertainty of diver- based cleaning, offers a safer, less expensive and predictable solution against biofouling.`,
    video: ``
  },
  {
    id: 'GP066',
    hall: 'global',
    boothNumber: '50523-67',
    name: `와이파워원`,
    nameEn: `WiPowerOne`,
    category: `Robotics`,
    product: `로봇 무선충전 시스템`,
    productEn: `Wireless robot charging system`,
    description: `높은 효율의 작고 안전한 로봇 무선충전 시스템`,
    website: `https://www.wipowerone.com`,
    logo: `참가업체 로고 파일/GP_png/와이파워원 로고_컬러.png`,
    descriptionEn: `High-efficiency, safe, reliable, and compact wireless charging for autonomous robots`,
    video: ``
  },
  {
    id: 'GP067',
    hall: 'global',
    boothNumber: '50523-68',
    name: `딥센트`,
    nameEn: `Deepscent Inc.`,
    category: `Smart Cities/Smart Home`,
    product: `Deepscent AI`,
    productEn: `Deepscent AI`,
    description: `Deepscent Lounge AI-Multisensory(가칭)는 IoT 기반의 취향 맞춤형 디지털 향
기 솔루션입니다.
- 향기캡슐과 발향을 위한 하드웨어, 제어 소프트웨어 및 인터페이스(모바일 앱)로
구성됩니다.
- 하드웨어에는 4개의 향기 캡슐을 선택해 삽입하고, 개별 캡슐의 발향 세기를 조
절해 원하는 분위기를 연출할 수 있습니다.
- AI를 활용하여, 연출하고 싶은 분위기를 이미지, 사운드, 보이스로 입력했을 때
이에 적합한 향기 배합을 자동으로 설정해 공간 경험의 질을 향상시킵니다.`,
    website: `https://www.deepscent.io/en`,
    logo: `참가업체 로고 파일/GP_png/딥센트 로고.png`,
    descriptionEn: `Deepscent Lounge AI-Multisensory (working title) is an IoT-based personalized digital fragrance solution.

- It consists of fragrance capsules, diffusion hardware, control software, and a user interface (mobile app).

- The hardware allows users to insert up to four fragrance capsules and adjust the diffusion intensity of each capsule to create the desired atmosphere.

- By leveraging AI, users can input an image, sound, or voice representing the mood they want to create, and the system automatically generates an optimal fragrance combination to enhance the quality of the spatial experience.`,
    video: ``
  },
];

export const allCompanies: Company[] = [...eurekaCompanies, ...globalCompanies];

export function getCompanyById(id: string): Company | undefined {
  return allCompanies.find(company => company.id === id);
}

export function getCompaniesByHall(hall: 'eureka' | 'global'): Company[] {
  return hall === 'eureka' ? eurekaCompanies : globalCompanies;
}

export function searchCompanies(query: string): Company[] {
  const lowerQuery = query.toLowerCase();
  return allCompanies.filter(company =>
    company.name.toLowerCase().includes(lowerQuery) ||
    company.nameEn.toLowerCase().includes(lowerQuery) ||
    company.product.toLowerCase().includes(lowerQuery) ||
    company.productEn.toLowerCase().includes(lowerQuery) ||
    company.category.toLowerCase().includes(lowerQuery)
  );
}

// 부스번호로 정렬된 회사 목록
export const eurekaCompaniesSorted: Company[] = [...eurekaCompanies].sort((a, b) =>
  a.boothNumber.localeCompare(b.boothNumber, undefined, { numeric: true })
);

export const globalCompaniesSorted: Company[] = [...globalCompanies].sort((a, b) =>
  a.boothNumber.localeCompare(b.boothNumber, undefined, { numeric: true })
);
