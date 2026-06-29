import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  // Coordinates for the nodes in a 100x100 viewBox
  const nodes = [
    { x: 78, y: 18 },  // 0: Top-right outer tip
    { x: 58, y: 12 },  // 1: Top-mid-right outer
    { x: 38, y: 18 },  // 2: Top-mid-left outer
    { x: 23, y: 32 },  // 3: Mid-top-left outer
    { x: 17, y: 50 },  // 4: Left-most outer
    { x: 23, y: 68 },  // 5: Mid-bottom-left outer
    { x: 38, y: 82 },  // 6: Bottom-mid-left outer
    { x: 58, y: 88 },  // 7: Bottom-mid-right outer
    { x: 78, y: 82 },  // 8: Bottom-right outer tip
    
    { x: 74, y: 30 },  // 9: Top-right inner tip
    { x: 55, y: 26 },  // 10: Top-mid inner
    { x: 41, y: 33 },  // 11: Top-left inner
    { x: 33, y: 50 },  // 12: Mid-left inner
    { x: 41, y: 67 },  // 13: Bottom-left inner
    { x: 55, y: 74 },  // 14: Bottom-mid inner
    { x: 74, y: 70 },  // 15: Bottom-right inner tip
    
    { x: 64, y: 66 },  // 16: Bottom-tip inward node for C terminal styling
  ];

  // Edges connecting the nodes to form the beautiful triangular mesh (network C)
  const edges = [
    // Outer arc connections
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
    
    // Inner arc connections
    [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
    
    // Cross connections forming triangles
    [0, 9], [1, 9], [1, 10], [2, 10], [2, 11], [3, 11], [3, 12], [4, 12],
    [5, 12], [5, 13], [6, 13], [6, 14], [7, 14], [7, 15], [8, 15],
    
    // Diagonal cross-bracing
    [9, 2], [10, 3], [11, 4], [12, 6], [13, 7], [14, 8],
    
    // Bottom terminal connection
    [8, 16], [15, 16], [14, 16]
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} transition-all duration-300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle glow filter */}
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Green gradient */}
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>

      {/* Render Edges (Network lines) */}
      <g filter="url(#logo-glow)">
        {edges.map(([from, to], index) => {
          const p1 = nodes[from];
          const p2 = nodes[to];
          return (
            <line
              key={`edge-${index}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="url(#logo-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
              className="transition-all duration-300 group-hover:stroke-[#22C55E]"
            />
          );
        })}
      </g>

      {/* Render Nodes (Joints) */}
      <g filter="url(#logo-glow)">
        {nodes.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="3.5"
            fill="url(#logo-gradient)"
            className="transition-all duration-300 group-hover:fill-white group-hover:r-[4]"
          />
        ))}
      </g>
    </svg>
  );
}
