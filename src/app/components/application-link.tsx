interface ApplicationLinkProps {
    title: string;
    href: string;
    target: string;
    ariaLabel: string;
}

export function ApplicationLink(props: ApplicationLinkProps) {
    return (
        <a className="font-medium text-slate-400 hover:text-purple-400 focus-visible:text-purple-400"
           href={props.href} target={props.target} rel="noreferrer noopener"
           aria-label={`${props.ariaLabel} (opens in a new tab)}`}><span>{props.title}
        </span></a>
    )
}