import { cn } from '@/lib/utils';

interface DottedSeperatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: 'vertical' | 'horizontal';
}

export const DottedSeperator = ({
  className,
  color = '#d4d4d8',
  height = '2px',
  dotSize = '2px',
  gapSize = '6px',
  direction = 'horizontal',
}: DottedSeperatorProps) => {
  const isHorizontal = direction === 'horizontal';
  return (
    <div
      className={cn(
        isHorizontal
          ? 'flex w-full items-center'
          : 'flex h-full flex-col items-center',
        className
      )}
    >
      <div
        className={isHorizontal ? 'flex-grow' : 'flex-grow-0'}
        style={{
          width: isHorizontal ? '100%' : height,
          height: isHorizontal ? height : '100%',
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizontal ? 'repeat-x' : 'repeat-y',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};
