import * as XLSX from 'xlsx';
import axios from 'axios';

export function useExcelExport() {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/\. /g, '-').replace(/\./g, '');
  };

  const formatYesNo = (value) => {
    if (value === 'yes') return '예';
    if (value === 'no') return '아니오';
    if (value === 'have') return '있음';
    if (value === 'none') return '없음';
    return value || '';
  };

  const exportToExcel = async () => {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
      }

      // API에서 전체 데이터 가져오기
      const response = await axios.get(`${API_URL}/admin/applications/export`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const applications = response.data.applications;

      if (!applications || applications.length === 0) {
        alert('내보낼 데이터가 없습니다.');
        return;
      }

      // Excel 데이터 변환
      const excelData = applications.map(app => ({
        'ID': app.id,
        '신청일': formatDate(app.createdAt),
        '주관기관': app.boothType || '',
        '부스번호': app.boothNumber || '',
        '회사명(국문)': app.companyKr || '',
        '회사명(영문)': app.companyEn || '',
        '대표자명(국문)': app.ceoKr || '',
        '대표자명(영문)': app.ceoEn || '',
        '홈페이지': app.website || '',
        '대표연락처': app.phone || '',
        '회사주소(국문)': app.addressKr || '',
        '회사주소(영문)': app.addressEn || '',
        '담당자명': app.contactName || '',
        '담당자 직위': app.contactPosition || '',
        '부서': app.department || '',
        '담당자 연락처': app.contactMobile || '',
        '기업명 표기': app.companyDisplay || '',
        '피칭 이벤트': formatYesNo(app.pitching),
        '도슨트 투어': formatYesNo(app.docent),
        '통역': formatYesNo(app.interpreter),
        'MOU 체결식': formatYesNo(app.mou),
        'QR CODE 보유': formatYesNo(app.qrCode),
        '홍보 영상 보유': formatYesNo(app.promoVideo),
        '컬러 로고 URL': app.companyLogoColorUrl || '',
        '백색 로고 URL': app.companyLogoWhiteUrl || '',
        '홍보 그래픽 URL': app.promoGraphicUrl || '',
        'EP관 그래픽 URL': app.tableGraphicUrl || '',
        'QR 파일 URL': app.qrFileUrl || '',
        '영상 파일 URL': app.videoFileUrl || ''
      }));

      // 워크북 생성
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, '신청목록');

      // 컬럼 너비 자동 조정
      const columnWidths = [
        { wch: 5 },   // ID
        { wch: 18 },  // 신청일
        { wch: 20 },  // 주관기관
        { wch: 15 },  // 부스번호
        { wch: 25 },  // 회사명(국문)
        { wch: 30 },  // 회사명(영문)
        { wch: 12 },  // 대표자명(국문)
        { wch: 20 },  // 대표자명(영문)
        { wch: 30 },  // 홈페이지
        { wch: 15 },  // 대표연락처
        { wch: 40 },  // 회사주소(국문)
        { wch: 50 },  // 회사주소(영문)
        { wch: 12 },  // 담당자명
        { wch: 12 },  // 담당자 직위
        { wch: 15 },  // 부서
        { wch: 15 },  // 담당자 연락처
        { wch: 25 },  // 기업명 표기
        { wch: 12 },  // 피칭 이벤트
        { wch: 12 },  // 도슨트 투어
        { wch: 8 },   // 통역
        { wch: 12 },  // MOU 체결식
        { wch: 12 },  // QR CODE 보유
        { wch: 15 },  // 홍보 영상 보유
        { wch: 60 },  // 컬러 로고 URL
        { wch: 60 },  // 백색 로고 URL
        { wch: 60 },  // 홍보 그래픽 URL
        { wch: 60 },  // EP관 그래픽 URL
        { wch: 60 },  // QR 파일 URL
        { wch: 60 }   // 영상 파일 URL
      ];
      worksheet['!cols'] = columnWidths;

      // 파일명 생성 (CES2026_신청목록_20251124.xlsx)
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0].replace(/-/g, '');
      const filename = `CES2026_신청목록_${dateStr}.xlsx`;

      // 다운로드
      XLSX.writeFile(workbook, filename);

      return { success: true, count: applications.length };
    } catch (error) {
      console.error('Excel export error:', error);
      throw new Error(error.response?.data?.error || error.message || 'Excel 파일 생성에 실패했습니다.');
    }
  };

  return {
    exportToExcel
  };
}
