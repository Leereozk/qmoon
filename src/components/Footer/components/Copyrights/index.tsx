import { ReactElement } from "react";

export const Copyrights = (props: CopyrightProps) => {
    const { children } = props
    return (
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <span className="hover:underline">QMoon</span>.</span>
          { children }
        </div>
    )
}

export type CopyrightProps = {
    children: ReactElement
}