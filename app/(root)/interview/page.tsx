import Agent from "@/components/Agent";

const InterViewPage = () => {
  const username = "";
  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName={username} type="generate" />
    </>
  );
};
export default InterViewPage;
