export interface Link {
  title: string;
  href: string;
  thumbnail: string;
  target?: string;
}

// Spline viewer custom element declaration
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
        },
        HTMLElement
      >;
    }
  }
}
