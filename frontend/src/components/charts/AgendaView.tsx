import AgendaPlaybook from '@/pages/Playbook/figma/Playbook-22-1830';

interface Props {
  onNavigate: (path: string) => void;
}

function getCardType(card: Element): string | null {
  const text = card.textContent || '';
  if (text.includes('Audio')) return '/audio';
  if (text.includes('Video')) return '/video';
  if (text.includes('Article')) return '/article';
  return null;
}

export default function AgendaView({ onNavigate }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const card = target.closest('[data-name="MediaCard"]');
    if (!card) return;
    const path = getCardType(card);
    if (path) onNavigate(path);
  };

  return (
    <div
      className="relative w-[390px] overflow-hidden"
      style={{ height: '2699px' }}
      onClick={handleClick}
    >
      <style>{`
        .agenda-view-wrap [data-name="PlaybookHeader"] { display: none !important; }
        .agenda-view-wrap [data-name="Playbook"] > [data-name="Container"] {
          overflow: visible !important;
          top: 0 !important;
          min-height: 2699px !important;
        }
        .agenda-view-wrap [data-name="Playbook"] {
          min-height: 2699px !important;
        }
        .agenda-view-wrap [data-name="MediaCard"] {
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .agenda-view-wrap [data-name="MediaCard"]:hover {
          opacity: 0.85;
        }
      `}</style>
      <div className="agenda-view-wrap">
        <AgendaPlaybook />
      </div>
    </div>
  );
}
