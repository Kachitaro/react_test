import { useNavigate } from "react-router-dom";

export const NewPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>New Page</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
