import {FC, memo} from 'react';

export interface IconPropsWC extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
}

const IconWC: FC<IconPropsWC> = memo(({children, className, svgRef, transform, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox="0 0 64 64"
    width="128"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </svg>
));

export default IconWC;
