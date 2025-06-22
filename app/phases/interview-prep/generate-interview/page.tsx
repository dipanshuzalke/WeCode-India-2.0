"use client";

import Agent from "@/components/ai-interviewer/Agent";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name || ""}
        userId={user?.id}
        type="generate"
      />
    </>
  );
};

export default Page;
