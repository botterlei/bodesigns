import type { HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  width?: 'reading' | 'default' | 'wide'
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'nav' | 'aside'
  /** Full-width frosted panel (matches nav) to soften the page backdrop */
  frosted?: boolean
}

const widthClass: Record<NonNullable<ContainerProps['width']>, string> = {
  reading: 'max-w-[68ch]',
  default: 'max-w-[1280px]',
  wide: 'max-w-[1440px]',
}

export default function Container({
  children,
  width = 'default',
  as: Tag = 'div',
  frosted = false,
  className = '',
  ...rest
}: ContainerProps) {
  const innerClassName = `mx-auto px-5 sm:px-6 md:px-8 lg:px-12 ${widthClass[width]} ${className}`

  if (frosted) {
    return (
      <Tag className="w-full surface-frosted" {...rest}>
        <div className={innerClassName}>{children}</div>
      </Tag>
    )
  }

  return (
    <Tag className={innerClassName} {...rest}>
      {children}
    </Tag>
  )
}
