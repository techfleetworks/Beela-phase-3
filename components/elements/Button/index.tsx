
interface ButtonProps {
    style?: any
    title: string
    href?:string
    children?: React.ReactNode
  }

export const Button = (props:ButtonProps) => {
    const {title, href} = props
    // Frank, Amanda and Anca was here
    return (
        <div className="">
            <a
                // href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <button type="button" className="btn button">
                    {title}
                </button>
            </a>
        </div>
    )
}