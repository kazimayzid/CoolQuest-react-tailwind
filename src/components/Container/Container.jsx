import { Children } from "react";

export default function Container({children}) {
    return <>
      <div className="w-[1140px] mx-auto">
        {children}
      </div>
    </>
}