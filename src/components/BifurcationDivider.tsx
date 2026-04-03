const BifurcationDivider = ({ className = "" }: { className?: string }) => {
  const width = 1200;
  const height = 80;
  const paths: string[] = [];

  const generateBranch = (
    startY: number,
    endY1: number,
    endY2: number,
    startX: number,
    splitX: number,
    endX: number,
  ) => {
    const first = `M ${startX} ${startY} Q ${splitX} ${startY} ${splitX} ${(startY + endY1) / 2} T ${endX} ${endY1}`;
    const second = `M ${startX} ${startY} Q ${splitX} ${startY} ${splitX} ${(startY + endY2) / 2} T ${endX} ${endY2}`;
    return [first, second];
  };

  const [b1a, b1b] = generateBranch(40, 25, 55, 0, 300, 500);
  const [b2a, b2b] = generateBranch(25, 15, 35, 500, 700, 850);
  const [b2c, b2d] = generateBranch(55, 45, 65, 500, 700, 850);
  paths.push(b1a, b1b, b2a, b2b, b2c, b2d);

  for (let index = 0; index < 20; index += 1) {
    const y = 10 + (index / 20) * 60;
    const startX = 850 + Math.sin(index * 1.7) * 30;
    const endY = y + Math.sin(index * 2.3) * 8;
    paths.push(`M ${startX} ${y} Q 1000 ${(y + endY) / 2 + Math.sin(index) * 5} 1200 ${endY}`);
  }

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-16 w-full md:h-20" preserveAspectRatio="none">
        {paths.map((path, index) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke="hsl(var(--phase-teal-dim))"
            strokeWidth={index < 6 ? 1.2 : 0.4}
            opacity={index < 6 ? 0.6 : 0.25}
          />
        ))}
      </svg>
    </div>
  );
};

export default BifurcationDivider;
