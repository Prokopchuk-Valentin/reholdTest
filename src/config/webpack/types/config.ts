export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode,
    PORT: number,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    PORT: number,
}
