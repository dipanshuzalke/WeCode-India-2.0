"use client";

import Agent from "@/components/ai-interviewer/Agent";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <div className="w-full flex justify-center ">
        <h1 className="text-2xl font-medium py-7">Interview Generation</h1>
      </div>

      <Agent userName={user?.name || ""} userId={user?.id} type="generate" />
    </>
  );
};

export default Page;
