import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <span className="badge mb-5">{eyebrow}</span>}
      <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white">
        {title.split('|').map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gradient">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-ink-soft">{description}</p>
      )}
    </div>
  );
}
