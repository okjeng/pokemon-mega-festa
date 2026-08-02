export type NoticeItem = {
  icon: string;
  title: string;
  tag: string;
  description: string;
};

export const NOTICES: NoticeItem[] = [
  {
    icon: "📢",
    title: "공지사항 (예시)",
    tag: "NOTICE",
    description: "행사 일정 및 운영 정보가 확정되면 이 카드 영역에 실제 공지가 표시됩니다.",
  },
];
