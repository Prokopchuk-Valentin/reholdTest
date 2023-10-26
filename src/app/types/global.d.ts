declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.FC<React.SVGProps<SVGElement>>;
    export default SVG;
}

declare const __IS__DEV__: boolean;
