// import { redirect } from "next/navigation";

// export default async function People() {
//   // Redirect to the Table page within People
//   redirect("/People/Table");
// }
import { redirect } from "next/navigation";

export default function People({ params }: { params: { cid: string } }) {
  redirect(`/Courses/${params.cid}/People/Table`);
}
