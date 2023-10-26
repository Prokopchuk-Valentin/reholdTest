type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mode: Mods = {}, additional: string[] = []) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
        .filter(([className, value]) => Boolean(value))
        .map(([className, _]) => className),
].join(' ');
