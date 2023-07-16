
import getAllConferences from "@/lib/getAllConferences"
import { Track } from "@/types"
import { title } from "process"


export default async function Home() {
  const conferences: Promise<Track[]> = getAllConferences()
  const data = await conferences

  // setTracks(data)

  // async function handleDb() {
  //   const conferences: Promise<Track[]> = getAllConferences()
  //   const data = await conferences
  //   console.log(data)
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <button onClick={handleDb}>
        Click to refresh
      </button> */}
      {data?.map((track) => {
        return <p> {track.title}</p>
      })}
    </main>
  )
}
