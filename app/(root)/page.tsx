import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
function Home() {
  const hasPastInterviews = 1;
  const user = { id: "user123" };
  const userInterviews = [
    {
      id: "1",
      role: "Frontend Developer",
      type: "Technical",
      techstack: ["React", "JavaScript", "CSS"],
      createdAt: "2025-03-20",
    },
    {
      id: "2",
      role: "Backend Developer",
      type: "Behavioral",
      techstack: ["Node.js", "Express", "MongoDB"],
      createdAt: "2025-03-21",
    },
    {
      id: "3",
      role: "Full Stack Developer",
      type: "System Design",
      techstack: ["React", "Node.js", "AWS"],
      createdAt: "2025-03-22",
    },
  ];
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>{" "}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>
      {/* <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interview-section">
          <p>There are no inerview available</p>
        </div>
      </section> */}
    </>
  );
}

export default Home;
