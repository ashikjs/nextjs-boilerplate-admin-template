import {permanentRedirect} from "next/navigation";

export default function Page() {
  permanentRedirect('/dashboard')
  return <div><p>Wrong page..</p></div>
}
