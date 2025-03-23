type FormType = "sign-in" | "sign-up";
interface InterviewCardProps {
  interviewId?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
}
interface TechIconProps {
  techStack: string[];
}
