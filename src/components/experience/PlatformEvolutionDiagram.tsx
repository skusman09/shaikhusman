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

export function PlatformEvolutionDiagram({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center w-full', className)}>
      {/* 1. Original Platform */}
      <Card className="flex flex-col items-center p-4 border border-border/50 bg-surface/30 min-w-[240px]">
        <h4 className="font-semibold text-primary">MDPlix</h4>
        <span className="text-xs text-muted mt-1">Original Healthcare Platform</span>
      </Card>

      {/* Arrow Down */}
      <div className="w-px h-8 bg-border/80 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-border/80 border-t-[6px] border-x-transparent border-x-[5px] border-b-0"></div>
      </div>
      <div className="h-[6px]" /> {/* Spacer for arrow head */}

      {/* 2. Reusable Foundation */}
      <Card className="flex flex-col items-center p-5 md:p-6 border border-accent/20 bg-accent/[0.02] shadow-sm mt-2 w-full max-w-2xl">
        <h4 className="font-semibold text-primary mb-4 text-center">Reusable Backend Platform</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {sharedCapabilities.map((cap) => (
            <span key={cap} className="px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-md bg-surface border border-border/50 text-muted">
              {cap}
            </span>
          ))}
        </div>
      </Card>

      {/* 3. Branching Arrows */}
      <div className="flex flex-col items-center w-full mt-2">
        {/* Main stem down */}
        <div className="w-px h-6 bg-border/80"></div>
        {/* Horizontal branch line */}
        <div className="w-[85%] md:w-[70%] lg:w-[60%] h-px bg-border/80 relative">
          {/* Three down stems from the horizontal line */}
          <div className="absolute top-0 left-0 w-px h-6 bg-border/80">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-border/80 border-t-[6px] border-x-transparent border-x-[5px] border-b-0"></div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-border/80">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-border/80 border-t-[6px] border-x-transparent border-x-[5px] border-b-0"></div>
          </div>
          <div className="absolute top-0 right-0 w-px h-6 bg-border/80">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-solid border-t-border/80 border-t-[6px] border-x-transparent border-x-[5px] border-b-0"></div>
          </div>
        </div>
      </div>
      <div className="h-6" /> {/* Spacer for arrow heads */}

      {/* 4. Domain Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-2">
        {extensions.map((ext) => (
          <Card key={ext.name} className="flex flex-col items-center p-5 border border-border/40 bg-surface/20 hover:border-border transition-colors">
            <h4 className="font-semibold text-primary">{ext.name}</h4>
            <span className="text-xs text-muted mt-1 mb-4">{ext.domain}</span>
            <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
              {ext.chips.map((chip) => (
                <span key={chip} className="px-2 py-0.5 text-[10px] font-medium rounded bg-background border border-border/30 text-muted/80">
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
