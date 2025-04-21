'use client'
import { MdError } from "react-icons/md";

export function Error({ message }: {message: string}){
  return (
		<div className="absolute flex justify-start items-center px-5 h-10 max-w-96 bg-red-400 rounded top-10 left-1/2 -translate-x-1/2 text-red-800 text-sm">
			<MdError className="text-red-800 size-7 mr-2" />
			{message}
		</div>
	)
}
