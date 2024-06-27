'use client'

type ButtonCTAProps = {
  children?: React.ReactNode,
  href?: string,
  target?: string,
}

export default function ButtonCTA({
  children,
  href='',
  target='_blank',
} : ButtonCTAProps) {

  return (
    <a
      href={href}
      className="text-shadow"
      target={target}
    >
      <button className="btn-cta">
        {children}
      </button>
    </a>
  );
}