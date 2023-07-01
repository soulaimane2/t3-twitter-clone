import { signIn, signOut, useSession } from "next-auth/react"

const NavBar = (props: any) => {
    const {data, status} = useSession()
    return <nav className="flex flex-row justify-between px-20 py-5 bg-gradient-to-tl items-center from-purple-400 to-purple-600 drop-shadow-sm">
        <div> Logo </div>
        <ul className="flex lg:flex-row lg:justify-end space-x-6 items-center">
            <li>test</li>
            <li>test</li>
            <button
                className="rounded-full  px-10 py-3 font-semibold text-white no-underline duration-300 bg-red-500 hover:bg-blue-700"
                onClick={status === "authenticated" ? () => void signOut() : () => void signIn()}
            >
                {status === "authenticated" ? "LogOut" : "LogIn"}
            </button>
        </ul>
    </nav>
}

export default NavBar