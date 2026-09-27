import { cn } from '@/lib/cn';
import { Card } from '@/components/ui/Card';

const sharedCapabilities = [
  'Authentication',
  'Authorization',
  'REST APIs',
  'Multi-tenant',
  'Background Jobs',
  'Notifications',
  'Reporting',
  'Database Layer',
];

const extensions = [
  {
    name: 'UrbanHouzz',
    domain: 'Real Estate',
    chips: ['Buildings', 'Rooms', 'Property Mgmt'],
  },
  {
    name: 'AzentikForce',
    domain: 'CRM',
    chips: ['CRM', 'Leads', 'Campaigns'],
  },
  {
    name: 'Shoppyforce',
    domain: 'E-commerce',
    chips: ['Catalogue', 'Orders', 'Inventory'],
  },
];

// Helper for drawing a solid downward arrow
function DownArrow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-[2px] h-8 md:h-10 bg-neutral-500 dark:bg-white/25 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-neutral-500 dark:border-t-white/25 border-t-[10px] border-x-transparent border-x-[8px] border-b-0"></div>
      </div>
      <div className="h-[10px]" />
    </div>
  );
}

export function PlatformEvolutionDiagram({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center w-full', className)}>
      {/* 1. Original Platform */}
      <Card className="flex flex-col items-center p-5 md:p-6 border border-neutral-300 dark:border-white/20 bg-white dark:bg-surface/30 shadow-sm min-w-[260px] md:min-w-[300px]">
        <h4 className="font-bold text-primary text-lg">MDPlix</h4>
        <span className="text-sm text-muted mt-1 font-medium">Original Healthcare Platform</span>
      </Card>

      <DownArrow className="mt-2" />

      {/* 2. Reusable Foundation */}
      <Card className="flex flex-col items-center p-6 md:p-8 border border-neutral-400 dark:border-white/30 bg-white dark:bg-surface/50 shadow-md mt-2 w-full max-w-2xl">
        <h4 className="font-bold text-accent text-lg md:text-xl mb-5 text-center">Reusable Backend Platform</h4>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {sharedCapabilities.map((cap) => (
            <span key={cap} className="px-3 py-1.5 text-[11px] md:text-xs font-semibold rounded-full bg-neutral-100 dark:bg-surface border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-white/90 shadow-sm">
              {cap}
            </span>
          ))}
        </div>
      </Card>

      {/* Mobile Arrow (Single arrow for stacked list) */}
      <div className="md:hidden mt-2">
        <DownArrow />
      </div>

      {/* Desktop Branching Arrows (Only visible on md+) */}
      <div className="hidden md:flex flex-col items-center w-full mt-2">
        {/* Main stem down */}
        <div className="w-[2px] h-6 bg-neutral-500 dark:bg-white/25"></div>
        {/* Horizontal branch line */}
        <div className="w-[85%] lg:w-[65%] h-[2px] bg-neutral-500 dark:bg-white/25 relative">
          {/* Three down stems */}
          <div className="absolute top-0 left-0 w-[2px] h-6 bg-neutral-500 dark:bg-white/25">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-neutral-500 dark:border-t-white/25 border-t-[10px] border-x-transparent border-x-[8px] border-b-0"></div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-neutral-500 dark:bg-white/25">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-neutral-500 dark:border-t-white/25 border-t-[10px] border-x-transparent border-x-[8px] border-b-0"></div>
          </div>
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-neutral-500 dark:bg-white/25">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-neutral-500 dark:border-t-white/25 border-t-[10px] border-x-transparent border-x-[8px] border-b-0"></div>
          </div>
        </div>
        <div className="h-8" /> {/* Spacer for arrow heads */}
      </div>

      {/* 4. Domain Products (Desktop) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 w-full max-w-5xl mt-2">
        {extensions.map((ext) => (
          <Card
            key={ext.name}
            className="flex flex-col p-6 border border-neutral-300 dark:border-white/20 bg-white dark:bg-surface/30 shadow-sm transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <h4 className="font-bold text-lg text-primary">{ext.name}</h4>
              <span className="text-sm font-medium text-muted mt-1 mb-5">{ext.domain}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {ext.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-md border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-surface text-neutral-800 dark:text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* 4. Domain Products (Mobile) */}
      <div className="md:hidden w-full flex flex-col gap-4 p-4 rounded-xl border-2 border-dashed border-neutral-300 dark:border-white/20 bg-neutral-50/50 dark:bg-surface/10 relative">
        <span className="text-[10px] font-bold text-center text-muted uppercase tracking-widest absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#F5F5F5] dark:bg-zinc-950 px-2">
          Parallel Products
        </span>
        {extensions.map((ext) => (
          <Card
            key={ext.name}
            className="flex flex-col p-5 border border-neutral-300 dark:border-white/20 bg-white dark:bg-surface/30 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <h4 className="font-bold text-base text-primary">{ext.name}</h4>
              <span className="text-xs font-medium text-muted mt-1 mb-4">{ext.domain}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
              {ext.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2 py-0.5 text-[10px] font-semibold rounded-md border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-surface text-neutral-800 dark:text-white/90"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
