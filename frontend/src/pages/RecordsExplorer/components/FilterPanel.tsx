import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Category, Discipline } from '../RecordsExplorer';

interface FilterPanelProps {
  category: Category;
  discipline: Discipline;
  event: string;
  onCategoryChange: (category: Category) => void;
  onDisciplineChange: (discipline: Discipline) => void;
  onEventChange: (event: string) => void;
}

const categories: Category[] = ['Men', 'Women'];
const disciplines: Discipline[] = ['Sprints', 'Middle Distance', 'Throws', 'Jumps', 'Relays'];

const eventsByDiscipline: Record<Discipline, string[]> = {
  'Sprints': ['100m', '200m', '400m', '110m Hurdles'],
  'Middle Distance': ['800m', '1500m', '3000m', '5000m'],
  'Throws': ['Shot Put', 'Discus', 'Javelin', 'Hammer'],
  'Jumps': ['High Jump', 'Long Jump', 'Triple Jump', 'Pole Vault'],
  'Relays': ['4×100m', '4×400m'],
};

type DropdownType = 'category' | 'discipline' | 'event' | null;

export default function FilterPanel({
  category,
  discipline,
  event,
  onCategoryChange,
  onDisciplineChange,
  onEventChange,
}: FilterPanelProps) {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  const handleCategorySelect = (cat: Category) => {
    onCategoryChange(cat);
    setOpenDropdown(null);
  };

  const handleDisciplineSelect = (disc: Discipline) => {
    onDisciplineChange(disc);
    const events = eventsByDiscipline[disc];
    if (events.length > 0) {
      onEventChange(events[0]);
    }
    setOpenDropdown(null);
  };

  const handleEventSelect = (evt: string) => {
    onEventChange(evt);
    setOpenDropdown(null);
  };

  const toggleDropdown = (type: DropdownType) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  return (
    <div className="px-4 relative" role="navigation" aria-label="Filter controls">
      <div className="flex gap-2 flex-wrap">
        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('category')}
            aria-expanded={openDropdown === 'category'}
            aria-haspopup="listbox"
            aria-label={`Category: ${category}`}
            className="px-4 py-3 min-h-[44px] bg-[#15151c] border-2 border-[#1a1a1a] rounded-full text-sm text-white flex items-center gap-2 hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#C9115F] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-colors"
          >
            <span className="font-medium">{category}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'category' ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <AnimatePresence>
            {openDropdown === 'category' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                role="listbox"
                aria-label="Category options"
                className="absolute top-full mt-2 bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl z-50 min-w-[120px]"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    role="option"
                    aria-selected={cat === category}
                    className={`w-full px-4 py-3 min-h-[44px] text-left text-sm font-medium hover:bg-[#1a1a1a] focus:outline-none focus:bg-[#1a1a1a] transition-colors ${
                      cat === category ? 'text-[#C9115F] bg-[#C9115F]/10' : 'text-white'
                    }`}
                  >
                    {cat}
                    {cat === category && <span className="ml-2" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Discipline Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('discipline')}
            aria-expanded={openDropdown === 'discipline'}
            aria-haspopup="listbox"
            aria-label={`Discipline: ${discipline}`}
            className="px-4 py-3 min-h-[44px] bg-[#15151c] border-2 border-[#1a1a1a] rounded-full text-sm text-white flex items-center gap-2 hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#C9115F] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-colors"
          >
            <span className="font-medium">{discipline}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'discipline' ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <AnimatePresence>
            {openDropdown === 'discipline' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                role="listbox"
                aria-label="Discipline options"
                className="absolute top-full mt-2 bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl z-50 min-w-[160px]"
              >
                {disciplines.map((disc) => (
                  <button
                    key={disc}
                    onClick={() => handleDisciplineSelect(disc)}
                    role="option"
                    aria-selected={disc === discipline}
                    className={`w-full px-4 py-3 min-h-[44px] text-left text-sm font-medium hover:bg-[#1a1a1a] focus:outline-none focus:bg-[#1a1a1a] transition-colors ${
                      disc === discipline ? 'text-[#C9115F] bg-[#C9115F]/10' : 'text-white'
                    }`}
                  >
                    {disc}
                    {disc === discipline && <span className="ml-2" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Event Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('event')}
            aria-expanded={openDropdown === 'event'}
            aria-haspopup="listbox"
            aria-label={`Event: ${event}`}
            className="px-4 py-3 min-h-[44px] bg-[#15151c] border-2 border-[#1a1a1a] rounded-full text-sm text-white flex items-center gap-2 hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#C9115F] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-colors"
          >
            <span className="font-medium">{event}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'event' ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <AnimatePresence>
            {openDropdown === 'event' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                role="listbox"
                aria-label="Event options"
                className="absolute top-full mt-2 bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl z-50 max-h-[280px] overflow-y-auto min-w-[140px]"
              >
                {eventsByDiscipline[discipline].map((evt) => (
                  <button
                    key={evt}
                    onClick={() => handleEventSelect(evt)}
                    role="option"
                    aria-selected={evt === event}
                    className={`w-full px-4 py-3 min-h-[44px] text-left text-sm font-medium hover:bg-[#1a1a1a] focus:outline-none focus:bg-[#1a1a1a] transition-colors ${
                      evt === event ? 'text-[#C9115F] bg-[#C9115F]/10' : 'text-white'
                    }`}
                  >
                    {evt}
                    {evt === event && <span className="ml-2" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Backdrop to close dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}