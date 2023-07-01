import { useState } from "react"
import { api } from "~/utils/api"

const Tweet = (props: any) => {
    const [show, setShow] = useState<boolean>(false)
    const deletePost = api.tweet.delete.useMutation({onSuccess: () => alert("deleted")})

    const handleDeletion = () => {
        deletePost.mutate({id: props.id})
    }

    return <div className="px-20 mt-10"> 
    <div className="py-8 px-8 min-w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6  mb-5 relative">

<img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://i.pravatar.cc/150?img=3" alt="Woman's Face" />
<div className="text-center space-y-2 sm:text-left">
<div className="absolute top-0 right-5 text-3xl hover:cursor-pointer">
    <i onClick={() => setShow(!show)}>...</i>
    <ul className={`text-sm absolute ${!show && 'hidden'}`}>
        <li className="bg-gray-400 text-white p-2 border-b rounded-md" onClick={handleDeletion}> Delete </li>
        <li className="bg-gray-400 text-white p-2 border-b rounded-md"> edit </li>
    </ul>
    </div>
<p>{props.content}</p>
<button className="text-blue-600">Like</button>
</div>

</div>
 </div>
}

export default Tweet