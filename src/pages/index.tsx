import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import TweetsForm from "~/components/TweetsForm.component";
import NavBar from "~/components/nav.component";
import Tweet from "~/components/tweets.component";
import { api } from "~/utils/api";

export default function Home() {
  const {status} =  useSession()
  const {data} = api.tweet.getAllTweets.useQuery() as any
  console.log(data)
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col bg-slate-300 min-h-screen">
        <NavBar />
        {status === "authenticated" && <TweetsForm />}
        {data?.length > 0 && data.map((data: any) => <Tweet id={data.id} content={data.content} key={data.id}/>)}
      </main>
    </>
  );
}
