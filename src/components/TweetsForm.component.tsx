import { useSession } from "next-auth/react"
import { useState } from "react"
import { api } from "~/utils/api"

const TweetsForm = (props: any) => {
    const {data, status} = useSession()
    const [content, setContent] = useState('')
    const addTweet = api.tweet.create.useMutation({onSuccess: v => {
      alert("wa lhwaaaa")
    }})
    const clickHandler = (e: any) => {
     addTweet.mutate({content})
    }
    return <div className="px-20 mt-10"> 
        <div className="py-8 px-8 min-w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6  mb-5">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://i.pravatar.cc/150?img=3" alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {data?.user?.name}
      </p>
      <textarea onChange={e => setContent(e.target.value)} className="border border-gray-300 rounded-md w-96 sm:shrink-0"></textarea>
    </div>
    <button onClick={clickHandler} className="px-4 py-1 text-sm text-white bg-purple-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
     </div>
}


export default TweetsForm