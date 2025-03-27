type SvgProps = {
  name: 'like' | 'comment' | 'arrow'
  size?: number
  color?: string
}

const data: Record<string, string> = {
  like: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 21h4V9H2v12zM22 11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7l-1-1L9 9v12h9a2 2 0 0 0 2-2l.001-6Z"/>
    </svg>
  `
}

const Svg = ({ name, size = 16, color = 'currentColor' }: SvgProps) => {
  let svg = data[name]

  if (!svg) return null

  svg = svg.replace(
    '<svg ',
    `<svg width="${size}" height="${size}" fill="${color}" `
  )

  return (
    <span
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default Svg
