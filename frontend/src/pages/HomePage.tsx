import PredictionForm from "../components/PredictionForm";

function HomePage() {
  return (
    <main
      style={{
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🏠 House Price Prediction
      </h1>

      <PredictionForm />
    </main>
  );
}

export default HomePage;